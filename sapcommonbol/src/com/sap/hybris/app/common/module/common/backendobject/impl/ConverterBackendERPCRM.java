package com.sap.hybris.app.common.module.common.backendobject.impl;


import java.util.Map;
import java.util.Map.Entry;

import com.sap.hybris.app.common.module.common.backendobject.interf.ConverterBackend;
import com.sap.hybris.app.common.module.transaction.util.impl.ConversionTools;
import com.sap.hybris.core.backend.BackendException;
import com.sap.hybris.core.backend.jco.BackendBusinessObjectBaseJCo;
import com.sap.hybris.core.common.exceptions.ApplicationBaseRuntimeException;
import com.sap.hybris.core.common.util.LocaleUtil;
import com.sap.hybris.core.logging.Log4JWrapper;
import com.sap.hybris.core.logging.LogCategories;
import com.sap.tc.logging.Severity;


/**
 * Converter backend implementation. Performs calls to ERP and CRM and caches results. <br>
 * Note this is a preliminary implementation. At the moment it is only used to retrieve currency customizing.<br>
 * 
 * @author SAP
 * @version 0.9
 */
public abstract class ConverterBackendERPCRM extends BackendBusinessObjectBaseJCo implements ConverterBackend
{

	protected static final Log4JWrapper sapLogger = Log4JWrapper.getInstance(ConverterBackendERPCRM.class.getName());

	public ConverterBackendERPCRM()
	{
	}

	protected final static class UomLocalization
	{

		private final Map<String, Integer> numberOfDecimalsForUOMs;
		private final Map<String, String> internalToExternalUom;
		private final Map<String, String> externalToInternalUom;
		private final Map<String, String> internalToExternalDescriptionsUom;

		public UomLocalization(final Map<String, Integer> numberOfDecimalsForUOMs, final Map<String, String> internalToExternalUom,
				final Map<String, String> externalToInternalUom, final Map<String, String> internalToExternalDescriptionsUom)
		{
			this.numberOfDecimalsForUOMs = numberOfDecimalsForUOMs;
			this.internalToExternalUom = internalToExternalUom;
			this.externalToInternalUom = externalToInternalUom;
			this.internalToExternalDescriptionsUom = internalToExternalDescriptionsUom;
		}

		public String getExternalUom(final String internalUom)
		{
			return internalToExternalUom.get(internalUom);
		}

		public String getInternalUom(final String externalUom)
		{
			return externalToInternalUom.get(externalUom);
		}

		public String getDescription(final String internalUom)
		{
			return internalToExternalDescriptionsUom.get(internalUom);
		}

		public Integer getNumberOfDecimals(final String internalUom)
		{
			return numberOfDecimalsForUOMs.get(internalUom);
		}

	}

	protected final static class CurrencyLocalization
	{
		private final Map<String, String> currencyDescriptions;

		private final Map<String, Integer> numberOfDecimalsForCurrencies;

		public CurrencyLocalization(final Map<String, Integer> numberOfDecimalsForCurrencies,
				final Map<String, String> currencyDescriptions)
		{
			this.numberOfDecimalsForCurrencies = numberOfDecimalsForCurrencies;
			this.currencyDescriptions = currencyDescriptions;
		}

		public String getDescription(final String currencyCode)
		{ // SAP currency code
			return currencyDescriptions.get(currencyCode);
		}

		// SAP currency code
		public Integer getNumberOfDecimals(final String currencyCode)
		{
			return numberOfDecimalsForCurrencies.get(currencyCode);
		}

	}

	@Override
	abstract public Object loadUOMsByLanguageFromBackend(String applicationID, String language) throws BackendException;

	@Override
	abstract public Object loadCurrenciesByLanguageFromBackend(String applicationID, String language) throws BackendException;

	/**
	 * Initializes the mapping for the given language.
	 * 
	 * @param language
	 * @throws BackendException
	 */

	@Deprecated
	public String getDescriptionForUnit(final String internalUnit) throws BackendException
	{
		final String sapLanguage = getSAPLanguage();
		final UomLocalization ul = getNonNullUomLocalization(sapLanguage);
		final String description = ul.getDescription(internalUnit);
		if (!ConverterUtils.provided(description))
		{
			sapLogger.log(Severity.ERROR, LogCategories.APPLICATIONS,
					"The description for unit {0} could not be found in the pricing converter data for language {1}.", new Object[]
					{ internalUnit, sapLanguage });
			throw new BackendException("The description for unit " + internalUnit + " could not be found in the pricing converter "
					+ "data for langauge " + sapLanguage);
		}
		return description;
	}

	@Deprecated
	public String getDescriptionForCurrency(final String internalUnit) throws BackendException
	{

		final String sapLanguage = getSAPLanguage();
		final CurrencyLocalization ul = getNonNullCurrLocalization(sapLanguage);
		final String description = ul.getDescription(internalUnit);
		if (!ConverterUtils.provided(description))
		{
			sapLogger.log(Severity.ERROR, LogCategories.APPLICATIONS,
					"The description for unit {0} could not be found in the pricing converter data for language {1}." + new Object[]
					{ internalUnit, sapLanguage });
			throw new BackendException("The description for unit " + internalUnit + " could not be found in the pricing converter "
					+ "data for langauge " + sapLanguage);
		}
		return description;
	}

	// never returns null, but throws an exception instead
	@Deprecated
	private UomLocalization getNonNullUomLocalization(final String language) throws BackendException
	{
		try
		{
			final UomLocalization li = getUomLocalisation(getSAPLanguage());
			if (li == null)
			{
				sapLogger.log(Severity.ERROR, LogCategories.APPLICATIONS,
						"The language {0} could not be found in the pricing converter data." + new Object[]
						{ language });
				throw new BackendException("The language " + language + " could not be found in the pricing converter data.");
			}
			return li;
		}
		catch (final BackendException e)
		{
			// no need to log here as just forwarding
			throw new BackendException("Could not initialze pricing converter data for language: ." + language, e);
		}
	}

	private CurrencyLocalization getCurrencyLocalization(final String language) throws BackendException
	{
		//TODO re-introduce caching
		return (CurrencyLocalization) loadCurrenciesByLanguageFromBackend("ID", language);
		/*
		 * CacheAccess access = null; try { access =
		 * CacheProvider.getInstance().getCacheAccess(CommonCurrencyCacheLoader.CACHE_REGION); } catch (final
		 * WCFCacheException e) { throw new BackendException("Cache access could not be retrieved", e); }
		 * 
		 * final CommonCurrencyCacheLoader.CurrencyCacheKey cacheKey = new CurrencyCacheKey(); cacheKey.language =
		 * language; cacheKey.applicationID = this.getBackendObjectSupport().getBackendConfigKey();
		 * 
		 * final CurrencyLocalization li = (CurrencyLocalization) access.get(cacheKey, this); return li;
		 */
	}

	// never returns null
	@Deprecated
	private CurrencyLocalization getNonNullCurrLocalization(final String language) throws BackendException
	{
		try
		{
			final CurrencyLocalization li = getCurrencyLocalization(language);
			if (li == null)
			{
				sapLogger.log(Severity.ERROR, LogCategories.APPLICATIONS,
						"The language {0} could not be found in the pricing converter data." + new Object[]
						{ language });
				throw new BackendException("The language " + language + " could not be found in the pricing converter data.");
			}
			return li;
		}
		catch (final BackendException e)
		{
			// no need to log here as just forwarding
			throw new BackendException("Could not initialze pricing converter data for language: ." + language, e);
		}
	}

	private String getSAPLanguage()
	{
		final String isoLanguage = LocaleUtil.getLocale().getLanguage();
		final String sapLanguage = ConversionTools.getR3LanguageCode(isoLanguage);
		return sapLanguage;
	}

	@Deprecated
	private String getSAPLanguage(final String language)
	{
		final String isoLanguage = language;
		final String sapLanguage = ConversionTools.getR3LanguageCode(isoLanguage);
		return sapLanguage;
	}

	private UomLocalization getUomLocalisation(final String sapLanguage) throws BackendException
	{
		//TODO re-introduce caching
		return (UomLocalization) loadUOMsByLanguageFromBackend("ID", sapLanguage);
		// first determine the SAP language
		/*
		 * CacheAccess access = null; try { access =
		 * CacheProvider.getInstance().getCacheAccess(CommonUOMCacheLoader.CACHE_REGION); } catch (final WCFCacheException
		 * e) { throw new BackendException("Cache access could not be retrieved", e); }
		 * 
		 * final CommonUOMCacheLoader.UOMCacheKey cacheKey = new UOMCacheKey(); cacheKey.language = sapLanguage;
		 * cacheKey.applicationID = this.getBackendObjectSupport().getBackendConfigKey();
		 * 
		 * final UomLocalization uomLocalization = (UomLocalization) access.get(cacheKey, this);
		 * 
		 * return uomLocalization;
		 */
	}

	@Override
	public String convertUnitID2UnitKey(final String unitID) throws BackendException
	{
		final UomLocalization uomLocalization = getUomLocalisation(getSAPLanguage());
		return (uomLocalization != null) ? uomLocalization.getInternalUom(unitID) : "";
	}

	@Override
	@Deprecated
	public String convertUnitID2UnitKey(final String unitID, final String language) throws BackendException
	{
		final UomLocalization uomLocalization = getUomLocalisation(getSAPLanguage(language));
		return (uomLocalization != null) ? uomLocalization.getInternalUom(unitID) : "";
	}

	@Override
	public String convertUnitKey2UnitID(final String unitKey) throws BackendException
	{
		final UomLocalization uomLocalization = getUomLocalisation(getSAPLanguage());
		return (uomLocalization != null) ? uomLocalization.getExternalUom(unitKey) : "";
	}

	@Override
	public int getCurrencyScale(final String sapCurrencyCode) throws BackendException
	{
		final CurrencyLocalization li = getCurrencyLocalization(getSAPLanguage());

		if (li == null)
		{
			throw new BackendException("Issue with cache loader: No CurrencyLocalization for: " + sapCurrencyCode + ", "
					+ getSAPLanguage());
		}

		Integer result = null;
		int intResult = 0;
		if (li.numberOfDecimalsForCurrencies != null)
		{
			result = li.numberOfDecimalsForCurrencies.get(sapCurrencyCode);
			if (result == null)
			{
				final StringBuffer content = new StringBuffer();
				for (final Entry<String, Integer> entry : li.numberOfDecimalsForCurrencies.entrySet())
				{
					content.append("(key=").append(entry.getKey()).append(" value=").append(entry.getValue()).append("), ");
				}
				sapLogger.debug("NumberOfDecimalsForCurrency: " + li.numberOfDecimalsForCurrencies.keySet());

				throw new ApplicationBaseRuntimeException("No customizing for currency " + sapCurrencyCode + " in HashMap " + content
						+ " available");
			}
			intResult = result.intValue();
		}
		return intResult;
	}

	@Override
	public int getUnitScale(final String unitKey) throws BackendException
	{
		// if unit key is null or blank: return 0;
		if (unitKey == null || unitKey.trim().isEmpty())
		{
			return 0;
		}

		final UomLocalization uomLoc = getUomLocalisation(getSAPLanguage());

		if (uomLoc == null)
		{
			throw new BackendException("Issue with cache loader: No UomLocalization for: " + unitKey + ", " + getSAPLanguage());
		}

		Integer result = null;
		int intResult = 0;
		if (uomLoc.numberOfDecimalsForUOMs != null)
		{
			result = uomLoc.numberOfDecimalsForUOMs.get(unitKey);

			if (result == null)
			{
				throw new BackendException("No customizing for unit key " + unitKey + " available");
			}
			intResult = result.intValue();
		}
		return intResult;
	}
}
