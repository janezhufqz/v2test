/*
 * [y] hybris Platform
 *
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package de.hybris.platform.sap.sapbonusbuy.jalo;

import de.hybris.platform.catalog.jalo.CatalogVersion;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloBusinessException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.type.CollectionType;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.promotions.jalo.PromotionGroup;
import de.hybris.platform.sap.core.configuration.jalo.SAPGlobalConfiguration;
import de.hybris.platform.sap.sapbonusbuy.constants.SapbonusbuyConstants;
import de.hybris.platform.util.BidirectionalOneToManyHandler;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.sap.sapbonusbuy.jalo.SAPBonusBuySiteToCatalog SAPBonusBuySiteToCatalog}.
 */
@SuppressWarnings({"deprecation","unused","cast","PMD"})
public abstract class GeneratedSAPBonusBuySiteToCatalog extends GenericItem
{
	/** Qualifier of the <code>SAPBonusBuySiteToCatalog.site</code> attribute **/
	public static final String SITE = "site";
	/** Qualifier of the <code>SAPBonusBuySiteToCatalog.catalogVersion</code> attribute **/
	public static final String CATALOGVERSION = "catalogVersion";
	/** Qualifier of the <code>SAPBonusBuySiteToCatalog.promotionGroup</code> attribute **/
	public static final String PROMOTIONGROUP = "promotionGroup";
	/** Qualifier of the <code>SAPBonusBuySiteToCatalog.sapcommon_sapGlobalConfiguration</code> attribute **/
	public static final String SAPCOMMON_SAPGLOBALCONFIGURATION = "sapcommon_sapGlobalConfiguration";
	/**
	* {@link BidirectionalOneToManyHandler} for handling 1:n SAPCOMMON_SAPGLOBALCONFIGURATION's relation attributes from 'one' side.
	**/
	protected static final BidirectionalOneToManyHandler<GeneratedSAPBonusBuySiteToCatalog> SAPCOMMON_SAPGLOBALCONFIGURATIONHANDLER = new BidirectionalOneToManyHandler<GeneratedSAPBonusBuySiteToCatalog>(
	SapbonusbuyConstants.TC.SAPBONUSBUYSITETOCATALOG,
	false,
	"sapcommon_sapGlobalConfiguration",
	null,
	false,
	true,
	CollectionType.SET
	);
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(SITE, AttributeMode.INITIAL);
		tmp.put(CATALOGVERSION, AttributeMode.INITIAL);
		tmp.put(PROMOTIONGROUP, AttributeMode.INITIAL);
		tmp.put(SAPCOMMON_SAPGLOBALCONFIGURATION, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPBonusBuySiteToCatalog.catalogVersion</code> attribute.
	 * @return the catalogVersion - Catalog Version
	 */
	public CatalogVersion getCatalogVersion(final SessionContext ctx)
	{
		return (CatalogVersion)getProperty( ctx, CATALOGVERSION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPBonusBuySiteToCatalog.catalogVersion</code> attribute.
	 * @return the catalogVersion - Catalog Version
	 */
	public CatalogVersion getCatalogVersion()
	{
		return getCatalogVersion( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPBonusBuySiteToCatalog.catalogVersion</code> attribute. 
	 * @param value the catalogVersion - Catalog Version
	 */
	public void setCatalogVersion(final SessionContext ctx, final CatalogVersion value)
	{
		setProperty(ctx, CATALOGVERSION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPBonusBuySiteToCatalog.catalogVersion</code> attribute. 
	 * @param value the catalogVersion - Catalog Version
	 */
	public void setCatalogVersion(final CatalogVersion value)
	{
		setCatalogVersion( getSession().getSessionContext(), value );
	}
	
	@Override
	protected Item createItem(final SessionContext ctx, final ComposedType type, final ItemAttributeMap allAttributes) throws JaloBusinessException
	{
		SAPCOMMON_SAPGLOBALCONFIGURATIONHANDLER.newInstance(ctx, allAttributes);
		return super.createItem( ctx, type, allAttributes );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPBonusBuySiteToCatalog.promotionGroup</code> attribute.
	 * @return the promotionGroup - Promotion Group
	 */
	public PromotionGroup getPromotionGroup(final SessionContext ctx)
	{
		return (PromotionGroup)getProperty( ctx, PROMOTIONGROUP);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPBonusBuySiteToCatalog.promotionGroup</code> attribute.
	 * @return the promotionGroup - Promotion Group
	 */
	public PromotionGroup getPromotionGroup()
	{
		return getPromotionGroup( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPBonusBuySiteToCatalog.promotionGroup</code> attribute. 
	 * @param value the promotionGroup - Promotion Group
	 */
	public void setPromotionGroup(final SessionContext ctx, final PromotionGroup value)
	{
		setProperty(ctx, PROMOTIONGROUP,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPBonusBuySiteToCatalog.promotionGroup</code> attribute. 
	 * @param value the promotionGroup - Promotion Group
	 */
	public void setPromotionGroup(final PromotionGroup value)
	{
		setPromotionGroup( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPBonusBuySiteToCatalog.sapcommon_sapGlobalConfiguration</code> attribute.
	 * @return the sapcommon_sapGlobalConfiguration
	 */
	public SAPGlobalConfiguration getSapcommon_sapGlobalConfiguration(final SessionContext ctx)
	{
		return (SAPGlobalConfiguration)getProperty( ctx, SAPCOMMON_SAPGLOBALCONFIGURATION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPBonusBuySiteToCatalog.sapcommon_sapGlobalConfiguration</code> attribute.
	 * @return the sapcommon_sapGlobalConfiguration
	 */
	public SAPGlobalConfiguration getSapcommon_sapGlobalConfiguration()
	{
		return getSapcommon_sapGlobalConfiguration( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPBonusBuySiteToCatalog.sapcommon_sapGlobalConfiguration</code> attribute. 
	 * @param value the sapcommon_sapGlobalConfiguration
	 */
	public void setSapcommon_sapGlobalConfiguration(final SessionContext ctx, final SAPGlobalConfiguration value)
	{
		SAPCOMMON_SAPGLOBALCONFIGURATIONHANDLER.addValue( ctx, value, this  );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPBonusBuySiteToCatalog.sapcommon_sapGlobalConfiguration</code> attribute. 
	 * @param value the sapcommon_sapGlobalConfiguration
	 */
	public void setSapcommon_sapGlobalConfiguration(final SAPGlobalConfiguration value)
	{
		setSapcommon_sapGlobalConfiguration( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPBonusBuySiteToCatalog.site</code> attribute.
	 * @return the site - Bonus Buy Site
	 */
	public String getSite(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SITE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPBonusBuySiteToCatalog.site</code> attribute.
	 * @return the site - Bonus Buy Site
	 */
	public String getSite()
	{
		return getSite( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPBonusBuySiteToCatalog.site</code> attribute. 
	 * @param value the site - Bonus Buy Site
	 */
	public void setSite(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SITE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPBonusBuySiteToCatalog.site</code> attribute. 
	 * @param value the site - Bonus Buy Site
	 */
	public void setSite(final String value)
	{
		setSite( getSession().getSessionContext(), value );
	}
	
}
