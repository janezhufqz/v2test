/*
 * [y] hybris Platform
 *
 * Copyright (c) 2017 SAP SE or an SAP affiliate company.  All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package de.hybris.platform.sap.sapmodel.authors;

import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.catalog.constants.CatalogConstants;
import de.hybris.platform.catalog.jalo.CatalogManager;
import de.hybris.platform.catalog.jalo.CatalogVersion;
import de.hybris.platform.catalog.jalo.classification.ClassAttributeAssignment;
import de.hybris.platform.catalog.jalo.classification.ClassificationAttribute;
import de.hybris.platform.catalog.jalo.classification.ClassificationAttributeUnit;
import de.hybris.platform.catalog.jalo.classification.ClassificationAttributeValue;
import de.hybris.platform.catalog.jalo.classification.ClassificationClass;
import de.hybris.platform.catalog.jalo.classification.ClassificationSystem;
import de.hybris.platform.catalog.jalo.classification.ClassificationSystemVersion;
import de.hybris.platform.catalog.jalo.classification.impex.ClassificationAttributeValueTranslator;
import de.hybris.platform.catalog.jalo.classification.impex.UnitAwareValue;
import de.hybris.platform.catalog.jalo.classification.util.FeatureValue;
import de.hybris.platform.catalog.jalo.classification.util.TypedFeature;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.catalog.model.ProductFeatureModel;
import de.hybris.platform.catalog.model.classification.ClassAttributeAssignmentModel;
import de.hybris.platform.catalog.model.classification.ClassificationAttributeValueModel;
import de.hybris.platform.classification.ClassificationService;
import de.hybris.platform.classification.features.Feature;
import de.hybris.platform.classification.features.FeatureList;
import de.hybris.platform.core.PK;
import de.hybris.platform.core.Registry;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.impex.constants.ImpExConstants;
import de.hybris.platform.impex.jalo.ImpExException;
import de.hybris.platform.impex.jalo.header.AbstractDescriptor.ColumnParams;
import de.hybris.platform.impex.jalo.header.HeaderDescriptor;
import de.hybris.platform.impex.jalo.header.HeaderValidationException;
import de.hybris.platform.impex.jalo.header.SpecialColumnDescriptor;
import de.hybris.platform.impex.jalo.header.StandardColumnDescriptor;
import de.hybris.platform.impex.jalo.imp.ValueLine;
import de.hybris.platform.impex.jalo.translators.AbstractValueTranslator;
import de.hybris.platform.impex.jalo.translators.AtomicValueTranslator;
import de.hybris.platform.impex.jalo.translators.NotifiedSpecialValueTranslator;
import de.hybris.platform.impex.jalo.translators.SingleValueTranslator;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.JaloInvalidParameterException;
import de.hybris.platform.jalo.JaloItemNotFoundException;
import de.hybris.platform.jalo.JaloSession;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.c2l.Language;
import de.hybris.platform.jalo.product.Product;
import de.hybris.platform.jalo.type.TypeManager;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.util.CSVUtils;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.Utilities;

import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.stream.Collectors;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;


public class SapClassificationAttributeAuthorTranslator
		extends de.hybris.platform.catalog.jalo.classification.impex.ClassificationAttributeTranslator
		implements NotifiedSpecialValueTranslator
{
	public static final String IMPEX_NONEXISTEND_CLSATTRVALUE_FALLBACK_KEY = "impex.nonexistend.clsattrvalue.fallback.enabled";
	/** Used logger instance. */
	private static final Logger LOG = Logger.getLogger(SapClassificationAttributeAuthorTranslator.class);

	private final String VALUEAUTHORSEPARATOR = "#";



	public interface Modifiers
	{
		String SYSTEM = "system";
		String VERSION = "version";
		String ClASS = "class";
	}

	protected String qualfier;
	protected String systemName;
	protected String versionName;
	protected String className;
	protected Language lang;
	protected Locale locale;
	protected String dateFormatString;
	protected String numberFormatString;

	protected ClassificationAttribute classAttr;
	protected ClassAttributeAssignment classAttrAssignment;
	protected ClassificationSystemVersion classSystemVersion;
	protected char collectionDelimiter = ImpExConstants.Syntax.DEFAULT_COLLECTION_VALUE_DELIMITER;
	protected char attributeSeparator = ImpExConstants.Syntax.DEFAULT_ATTRIBUTE_PATH_SEPARATOR;

	protected Collection<UnitAwareValueAuthor> classificationAttributeAuthor;
	protected char[] TO_ESCAPE = new char[]
	{ collectionDelimiter };

	protected PK allDoneFor = null;
	protected String currentCellValue;

	final private static String BEAN_NAME = "sapClassificationAttributeAuthorHelper";
	private SapClassificationAttributeAuthorHelper sapClassificationAttributeAuthorHelper;

	private ClassificationService classificationService;
	private ModelService modelService;
	private ProductService productService;
	private CatalogVersionService catalogVersionService;

	private SpecialColumnDescriptor columnDescriptor;

	/**
	 * General no-arg constructor
	 */
	public SapClassificationAttributeAuthorTranslator()
	{
		super();
	}

	/**
	 * Testing purpose constructor.
	 */
	public SapClassificationAttributeAuthorTranslator(final ClassificationSystemVersion sysVer, final ClassificationAttribute attr,
			final char delimiter, final Language lang)
	{
		super();
		this.classSystemVersion = sysVer;
		this.systemName = this.classSystemVersion.getCatalog().getId();
		this.versionName = this.classSystemVersion.getVersion();
		this.lang = lang;
		this.classAttr = attr;
		this.qualfier = attr.getCode();
		//		this.class2valueTranslatorMap = createValueTranslators();
		this.collectionDelimiter = delimiter;
		this.TO_ESCAPE = new char[]
		{ delimiter };
	}

	@Override
	public void init(final SpecialColumnDescriptor columnDescriptor) throws HeaderValidationException
	{
		super.init(columnDescriptor);

		if (sapClassificationAttributeAuthorHelper == null)
		{
			sapClassificationAttributeAuthorHelper = (SapClassificationAttributeAuthorHelper) Registry.getApplicationContext()
					.getBean(BEAN_NAME);
			classificationService = sapClassificationAttributeAuthorHelper.getClassificationService();
			modelService = sapClassificationAttributeAuthorHelper.getModelService();
			productService = sapClassificationAttributeAuthorHelper.getProductService();
			catalogVersionService = sapClassificationAttributeAuthorHelper.getCatalogVersionService();
		}
		this.columnDescriptor = columnDescriptor;

		// check if translator is used for product header at all
		if (!TypeManager.getInstance().getComposedType(Product.class)
				.isAssignableFrom(columnDescriptor.getHeader().getConfiguredComposedType()))
		{
			throw new HeaderValidationException(columnDescriptor.getHeader(),
					"invalid header type " + columnDescriptor.getHeader().getConfiguredComposedType().getCode()
							+ " for ClassificationAttributeTranslator " + "in column " + columnDescriptor.getValuePosition() + ":"
							+ columnDescriptor.getQualifier() + " - expected Product or any of its subtypes",
					HeaderValidationException.UNKNOWN);
		}
		if (columnDescriptor.getDescriptorData().getModifier(ImpExConstants.Syntax.Modifier.LANGUAGE) != null)
		{
			this.lang = StandardColumnDescriptor.findLanguage(columnDescriptor.getHeader(),
					columnDescriptor.getDescriptorData().getModifier(ImpExConstants.Syntax.Modifier.LANGUAGE));
		}
		this.locale = columnDescriptor.getHeader().getReader().getLocale();
		if (lang != null)
		{
			this.locale = new Locale(lang.toString());
		}

		this.qualfier = columnDescriptor.getQualifier();
		// remove trailing @

		if (this.qualfier.startsWith(ImpExConstants.Syntax.SPECIAL_COLUMN_PREFIX))
		{
			this.qualfier = this.qualfier.substring(ImpExConstants.Syntax.SPECIAL_COLUMN_PREFIX.length()).trim();
		}

		this.systemName = columnDescriptor.getDescriptorData().getModifier(Modifiers.SYSTEM);
		this.versionName = columnDescriptor.getDescriptorData().getModifier(Modifiers.VERSION);
		this.className = columnDescriptor.getDescriptorData().getModifier(Modifiers.ClASS);

		lookupAttributeOrAssignment(this.systemName, this.versionName, this.className, this.qualfier, columnDescriptor);

		final String customDelimiter = columnDescriptor.getDescriptorData()
				.getModifier(ImpExConstants.Syntax.Modifier.COLLECTION_VALUE_DELIMITER);

		if (customDelimiter != null && customDelimiter.length() > 0)
		{
			this.collectionDelimiter = customDelimiter.charAt(0);
			this.TO_ESCAPE = new char[]
			{ this.collectionDelimiter };
		}


		this.dateFormatString = columnDescriptor.getDescriptorData().getModifier(ImpExConstants.Syntax.Modifier.DATEFORMAT);
		this.numberFormatString = columnDescriptor.getDescriptorData().getModifier(ImpExConstants.Syntax.Modifier.NUMBERFORMAT);
	}

	private void lookupAttributeOrAssignment(final String systemName, final String versionName, final String className,
			final String qualifier, final SpecialColumnDescriptor columnDescriptor) throws HeaderValidationException
	{
		final ClassificationSystem sys = CatalogManager.getInstance().getClassificationSystem(systemName);
		if (sys == null)
		{
			throw new HeaderValidationException(
					columnDescriptor.getHeader(), "unknown classification system '" + systemName + "' in column "
							+ columnDescriptor.getValuePosition() + ":" + columnDescriptor.getQualifier(),
					HeaderValidationException.UNKNOWN);
		}
		this.classSystemVersion = (ClassificationSystemVersion) sys.getCatalogVersion(versionName);
		if (this.classSystemVersion == null)
		{
			throw new HeaderValidationException(columnDescriptor.getHeader(),
					"unknown classification system version '" + systemName + "." + versionName + "' in column "
							+ columnDescriptor.getValuePosition() + ":" + columnDescriptor.getQualifier(),
					HeaderValidationException.UNKNOWN);
		}
		try
		{
			this.classAttr = this.classSystemVersion.getClassificationAttribute(qualifier);
		}
		catch (final JaloItemNotFoundException e)
		{
			throw new HeaderValidationException(columnDescriptor.getHeader(),
					"unknown classification attribute " + qualifier + " within system version '" + systemName + "." + versionName
							+ "' " + "in column " + columnDescriptor.getValuePosition() + ":" + columnDescriptor.getQualifier(),
					HeaderValidationException.UNKNOWN);
		}
		if (StringUtils.isNotBlank(className))
		{
			ClassificationClass classificationClass = null;
			try
			{
				classificationClass = this.classSystemVersion.getClassificationClass(className);
			}
			catch (final JaloItemNotFoundException e)
			{
				throw new HeaderValidationException(columnDescriptor.getHeader(),
						"unknown classification class " + className + " within system version '" + systemName + "." + versionName + "' "
								+ "in column " + columnDescriptor.getValuePosition() + ":" + columnDescriptor.getQualifier(),
						HeaderValidationException.UNKNOWN);
			}
			try
			{
				this.classAttrAssignment = classificationClass.getAttributeAssignment(this.classAttr);
			}
			catch (final JaloItemNotFoundException e)
			{
				throw new HeaderValidationException(columnDescriptor.getHeader(),
						"unknown attribute assignment " + className + "." + qualifier + " within system version '" + systemName + "."
								+ versionName + "' " + "in column " + columnDescriptor.getValuePosition() + ":"
								+ columnDescriptor.getQualifier(),
						HeaderValidationException.UNKNOWN);
			}
		}
	}

	private transient final Map<ClassAttributeAssignment, SingleValueTranslator> class2TranslatorCache = new HashMap();

	@Override
	protected AbstractValueTranslator getSingleCellValueTranslator(final ClassAttributeAssignment assignment)
	{
		SingleValueTranslator ret = class2TranslatorCache.get(assignment);
		if (ret == null)
		{
			final String type = assignment.getAttributeType().getCode();

			if (CatalogConstants.Enumerations.ClassificationAttributeTypeEnum.BOOLEAN.equalsIgnoreCase(type))
			{
				final AtomicValueTranslator trans = new AtomicValueTranslator(null, Boolean.class);
				trans.setLocale(this.locale);
				ret = trans;
			}
			else if (CatalogConstants.Enumerations.ClassificationAttributeTypeEnum.NUMBER.equalsIgnoreCase(type))
			{
				final AtomicValueTranslator trans = new AtomicValueTranslator(null, Double.class);
				trans.setLocale(this.locale);
				if (this.numberFormatString != null)
				{
					trans.setNumberFormat(Utilities.getDecimalFormat(this.numberFormatString, this.locale));
				}
				ret = trans;
			}
			else if (CatalogConstants.Enumerations.ClassificationAttributeTypeEnum.ENUM.equalsIgnoreCase(type))
			{
				ret = new ClassificationAttributeValueTranslator(assignment);
			}
			else if (CatalogConstants.Enumerations.ClassificationAttributeTypeEnum.STRING.equalsIgnoreCase(type))
			{
				final AtomicValueTranslator trans = new AtomicValueTranslator(null, String.class);
				trans.setLocale(this.locale);
				ret = trans;
			}
			else if (CatalogConstants.Enumerations.ClassificationAttributeTypeEnum.DATE.equalsIgnoreCase(type))
			{
				final AtomicValueTranslator trans = new AtomicValueTranslator(null, Date.class);
				trans.setLocale(this.locale);
				if (this.dateFormatString != null)
				{
					trans.setDateFormat(Utilities.getSimpleDateFormat(this.dateFormatString, this.locale));
				}
				ret = trans;
			}
			else
			{
				LOG.warn("Unsupported attribute type " + type + ", will use type String");
				final AtomicValueTranslator trans = new AtomicValueTranslator(null, String.class);
				trans.setLocale(this.locale);
				ret = trans;
			}
			class2TranslatorCache.put(assignment, ret);
		}
		return ret;
	}

	private SingleValueTranslator fallbackValueTranslator = null;

	@Override
	protected AbstractValueTranslator getFallbackValueTranslator()
	{
		if (fallbackValueTranslator == null)
		{
			fallbackValueTranslator = new AtomicValueTranslator(null, String.class);
		}
		return fallbackValueTranslator;
	}

	private transient final Map<ClassificationClass, ClassAttributeAssignment> matchingClassCache = new HashMap();

	@Override
	protected ClassAttributeAssignment getAssignment()
	{
		return this.classAttrAssignment;
	}

	@Override
	protected ClassAttributeAssignment matchAssignment(final Collection<ClassificationClass> classes)
	{
		for (final ClassificationClass myClass : classes)
		{
			ClassAttributeAssignment match = matchingClassCache.get(myClass);
			// if not cached calculate match
			if (match == null)
			{
				try
				{
					if (this.classAttr != null)
					{
						match = myClass.getAttributeAssignment(this.classAttr);
						matchingClassCache.put(myClass, match);
					}
				}
				catch (final JaloItemNotFoundException e)
				{
					// fine here
				}
			}
			// now test match
			if (match != null)
			{
				return match;
			}
		}
		return null;
	}

	@Override
	protected SessionContext getValueCtx(final boolean localized) throws HeaderValidationException
	{
		SessionContext ret = JaloSession.getCurrentSession().getSessionContext();
		if (localized)
		{
			// use own language if defined
			if (this.lang != null)
			{
				ret = new SessionContext(ret);
				ret.setLanguage(this.lang);
			}
			else if (ret.getLanguage() == null)
			{
				throw new HeaderValidationException(
						"neither session nor colum provided language for localized classification attribute " + this.classAttr, 0);
			}
		}
		return ret;
	}

	@Override
	protected TypedFeature getFeature(final Product product)
	{
		final ClassAttributeAssignment assignment = matchAssignment(CatalogManager.getInstance().getClassificationClasses(product));
		return assignment != null ? TypedFeature.loadTyped(product, assignment) : null;
	}

	@Override
	public String performExport(final Item item) throws ImpExException
	{
		if (item != null && item.isAlive())
		{
			final TypedFeature<? extends Object> feat = getFeature((Product) item);
			if (feat != null)
			{
				final ClassAttributeAssignment assignment = feat.getClassAttributeAssignment();
				final boolean localized = assignment.isLocalizedAsPrimitive();
				final AbstractValueTranslator trans = getSingleCellValueTranslator(assignment);

				int index = 0;
				final StringBuilder stringBuilder = new StringBuilder();
				for (final FeatureValue fv : feat.getValues(getValueCtx(localized)))
				{
					if (index > 0)
					{
						stringBuilder.append(this.collectionDelimiter);
					}
					stringBuilder.append(CSVUtils.escapeString(trans.exportValue(fv.getValue()), TO_ESCAPE, true));
					index++;
				}
				return stringBuilder.toString();
			}
		}
		return null;
	}

	// TODO support units and value details !
	@Override
	public void performImport(final String cellValue, final Item processedItem) throws ImpExException
	{
		this.allDoneFor = null;
		this.currentCellValue = cellValue;
	}

	/**
	 * @deprecated since ages
	 */
	@Override
	@Deprecated
	/**
	 * @deprecated {@use #translateCurrentValuesTyped(ValueLine,ClassAttributeAssignment,Product)}
	 */
	public Collection<Object> translateCurrentValues(final ValueLine line, final ClassAttributeAssignment assignment,
			final Product processedItem) throws HeaderValidationException
	{

		final Collection<UnitAwareValue> resultTyped = translateCurrentUnitAwareValues(line, assignment, processedItem);

		if (resultTyped == null)
		{
			return null;
		}
		final Collection<Object> result = new LinkedList<Object>();
		for (final UnitAwareValue unitAwareValue : resultTyped)
		{
			result.add(unitAwareValue.getValue());
		}
		return result;
	}

	@Override
	public Collection<UnitAwareValue> translateCurrentUnitAwareValues(final ValueLine line,
			final ClassAttributeAssignment assignment, final Product processedItem) throws HeaderValidationException
	{
		if (assignment == null)
		{
			return null;
		}

		if (this.classAttrAssignment == null)
		{
			this.classAttrAssignment = assignment;
		}

		final AbstractValueTranslator trans = getSingleCellValueTranslator(assignment);
		// skip classification attribute if cell is marked as IGNORE
		Collection values = null;
		if (currentCellValue != null && currentCellValue.length() > 0)
		{
			for (final Iterator iter = splitValues(assignment, currentCellValue).iterator(); iter.hasNext();)
			{
				final String singleStr = (String) iter.next();
				if (singleStr != null && singleStr.length() > 0)
				{
					if (values == null)
					{
						values = new LinkedList();
					}
					Object transValue;
					final String singleValueString = getValueWithoutAuthor(singleStr);

					try
					{
						transValue = trans.importValue(CSVUtils.unescapeString(singleValueString, TO_ESCAPE, true), processedItem);

						final String author = getValueAuthor(singleStr);

						final ClassificationAttributeUnit classificationAttributeUnit = getUnit(assignment, singleValueString,
								this.systemName, this.versionName);
						//values.add(new UnitAwareValue(transValue, classificationAttributeUnit));
						values.add(new UnitAwareValueAuthor(transValue, classificationAttributeUnit, author));
					}
					catch (final JaloInvalidParameterException e)
					{
						if (Config.getBoolean(IMPEX_NONEXISTEND_CLSATTRVALUE_FALLBACK_KEY, false))
						{
							if (LOG.isDebugEnabled())
							{
								LOG.debug("Fallback ENABLED");
							}
							LOG.warn("Value " + singleStr + " is not of type " + assignment.getAttributeType().getCode()
									+ " will use type string as fallback (" + e.getMessage() + ")");
							transValue = getFallbackValueTranslator()
									.importValue(CSVUtils.unescapeString(singleValueString, TO_ESCAPE, true), processedItem);
							values.add(new UnitAwareValue(transValue, null));
						}
						else
						{
							if (LOG.isDebugEnabled())
							{
								LOG.debug("Fallback DISABLED. Marking line as unresolved. Will try to import value in another pass");
							}
							line.getValueEntry(this.columnDescriptor.getValuePosition()).markUnresolved(e.getMessage());
						}

					}
				}
			}
		}
		this.classificationAttributeAuthor = values;

		return values;
	}

	private String extractUnitName(final ClassAttributeAssignment assignment, final String singleStr)
	{
		final String unitName = null;
		boolean warn = false;
		if (assignment.getUnit() != null && singleStr != null && singleStr.indexOf(attributeSeparator) != -1)
		{
			if (singleStr.lastIndexOf(attributeSeparator) == singleStr.indexOf(attributeSeparator))
			{
				return singleStr.split(String.valueOf(attributeSeparator))[1];
			}
			else
			{
				warn = true;
			}

		}
		final String msg = "Invalid classification attribute unit syntax - was: [" + singleStr + "], expected format [value"
				+ attributeSeparator + "unit].";

		if (((ColumnParams) this.columnDescriptor.getDescriptorData()).hasItemPattern())
		{
			for (final List<ColumnParams> columnParamsList : ((ColumnParams) this.columnDescriptor.getDescriptorData())
					.getItemPatternLists())
			{
				for (final ColumnParams columnParams : columnParamsList)
				{
					if (columnParams.getQualifier().equals("unit")
							&& columnParams.getModifier(ImpExConstants.Syntax.Modifier.DEFAULT) != null)
					{
						if (warn)
						{
							LOG.warn(msg + " Classification attribute unit from script header ["
									+ columnParams.getModifier(ImpExConstants.Syntax.Modifier.DEFAULT) + "] will be used instead.");
						}
						return columnParams.getModifier(ImpExConstants.Syntax.Modifier.DEFAULT);
					}
				}
			}
		}
		if (warn && assignment.getUnit() != null)
		{
			LOG.warn(msg + " Classification attribute unit from attribute assignment [" + assignment.getUnit().getCode()
					+ "] will be used instead.");
		}
		return unitName;
	}

	@Override
	protected List splitValues(final ClassAttributeAssignment assignment, final String valueCollection)
	{
		if (assignment.isMultiValuedAsPrimitive())
		{
			return CSVUtils.splitAndUnescape(valueCollection, new char[]
			{ this.collectionDelimiter }, false // escape by '\'
			);
		}
		else
		{
			return Collections.singletonList(CSVUtils.unescapeString(valueCollection, TO_ESCAPE, false));
		}
	}

	@Override
	public void notifyTranslationEnd(final ValueLine line, final HeaderDescriptor header, final Item processedItem)
			throws ImpExException
	{
		super.notifyTranslationEnd(line, header, processedItem);

		String productCode = null;
		try
		{
			productCode = (String) processedItem.getAttribute("code");
			final CatalogVersion catalogVersion = (CatalogVersion) processedItem.getAttribute("catalogVersion");
			final CatalogVersionModel catalogVersionModel = modelService.get(catalogVersion.getPK());

			final ProductModel productModel = productService.getProductForCode(catalogVersionModel, productCode);
			final FeatureList featureList = classificationService.getFeatures(productModel);

			updateProductFeatures(productModel, featureList);

			LOG.info(String.format(
					"The current classification system attribute value/author for the product [%s] have been udpated.", productCode));

		}
		catch (final UnknownIdentifierException ex)
		{
			LOG.info("The product value/author has not been imported yet!" + ex.getMessage());
		}
		catch (final Exception ex)
		{
			LOG.error(String.format(
					"Something went wrong while importingg classification system attribute value/author for the product [%s]!",
					productCode) + ex.getMessage());
		}
	}

	private ClassificationAttributeUnit getUnit(final ClassAttributeAssignment assignment, final String singleStr,
			final String systemName, final String versionName)
	{
		final String unitName = extractUnitName(assignment, singleStr);
		if (unitName == null)
		{
			return null;
		}
		try
		{
			final ClassificationSystem classificationSystem = CatalogManager.getInstance().getClassificationSystem(systemName);
			final ClassificationSystemVersion version;
			if (classificationSystem == null)
			{
				LOG.warn("Classification system with id [" + systemName + "] not found.");
				return null;
			}
			else
			{
				version = classificationSystem.getSystemVersion(versionName);
			}
			if (version == null)
			{
				LOG.warn("Classification system version with name [" + versionName + "] not found in classification system ["
						+ systemName + "].");
				return null;
			}
			else
			{
				return version.getAttributeUnit(unitName);
			}
		}
		catch (final JaloItemNotFoundException e)
		{
			LOG.warn("Classification attribute unit with code [" + unitName + "] not found in classification system [" + systemName
					+ ":" + versionName + "].");
			return null;
		}
	}


	private String getValueAuthor(final String singleStr)
	{
		if (singleStr != null)
		{
			final int position = singleStr.lastIndexOf(VALUEAUTHORSEPARATOR);
			return position > 0 ? singleStr.substring(position + 1) : null;
		}
		return null;
	}

	private String getValueWithoutAuthor(final String singleStr)
	{
		if (singleStr != null)
		{
			final int position = singleStr.lastIndexOf(VALUEAUTHORSEPARATOR);
			return position > 0 ? singleStr.substring(0, position) : singleStr;
		}
		return singleStr;
	}

	private void updateProductFeatures(final ProductModel product, final FeatureList features)
	{

		final ClassAttributeAssignmentModel assignment = getClassAttributeAssignmentModel(features);
		if (assignment == null)
		{
			return;
		}

		if (classificationAttributeAuthor == null)
		{
			return;
		}

		if (product == null)
		{
			return;
		}

		final List<ProductFeatureModel> productFeature = product.getFeatures().stream()
				.filter(p -> assignment.equals(p.getClassificationAttributeAssignment())).collect(Collectors.toList());

		if (productFeature != null)
		{
			productFeature.forEach(p -> {
				classificationAttributeAuthor.forEach(c -> {
					if (p.getValue() instanceof String && c.getValue() instanceof String && p.getValue().equals(c.getValue())
									|| (p.getValue() instanceof ClassificationAttributeValueModel
											&& c.getValue() instanceof ClassificationAttributeValue
											&& ((ClassificationAttributeValueModel) p.getValue()).getPk()
													.equals(((ClassificationAttributeValue) c.getValue()).getPK())))
					{
						p.setAuthor(c.getValueAuthor());
						this.modelService.save(p);
					}
				});
			});
		}
	}

	private ClassAttributeAssignmentModel getClassAttributeAssignmentModel(final FeatureList features)
	{
		final String attributeAuthorCode = buildClassificationAttributeCode();

		for (final Feature feature : features)
		{
			if (feature.getValues() != null && !feature.getValues().isEmpty())
			{
				if (!feature.equals(features.getFeatureByCode(attributeAuthorCode)))
				{
					continue;
				}
				return feature.getClassAttributeAssignment();
			}
		}
		return null;
	}

	private String buildClassificationAttributeCode()
	{
		return this.classSystemVersion.getFullVersionName() + "/" + this.classAttrAssignment.getClassificationClass().getCode()
				+ "." + this.classAttr.getCode().toLowerCase();
	}
}
