/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Jul 15, 2016 1:12:44 PM                     ---
 * ----------------------------------------------------------------
 *  
 * [y] hybris Platform
 *  
 * Copyright (c) 2000-2016 SAP SE
 * All rights reserved.
 *  
 * This software is the confidential and proprietary information of SAP
 * Hybris ("Confidential Information"). You shall not disclose such
 * Confidential Information and shall use it only in accordance with the
 * terms of the license agreement you entered into with SAP Hybris.
 *  
 */
package de.hybris.platform.sap.sapbonusbuy.jalo;

import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloBusinessException;
import de.hybris.platform.jalo.JaloSystemException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.extension.Extension;
import de.hybris.platform.jalo.type.CollectionType;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.jalo.type.JaloGenericCreationException;
import de.hybris.platform.sap.core.configuration.jalo.SAPGlobalConfiguration;
import de.hybris.platform.sap.sapbonusbuy.constants.SapbonusbuyConstants;
import de.hybris.platform.sap.sapbonusbuy.jalo.SAPBonusBuySiteToCatalog;
import de.hybris.platform.util.OneToManyHandler;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

/**
 * Generated class for type <code>SapbonusbuyManager</code>.
 */
@SuppressWarnings({"deprecation","unused","cast","PMD"})
public abstract class GeneratedSapbonusbuyManager extends Extension
{
	/**
	* {@link OneToManyHandler} for handling 1:n SAPCOMMON_SAPSITETOCATALOG's relation attributes from 'many' side.
	**/
	protected static final OneToManyHandler<SAPBonusBuySiteToCatalog> SAPCONFIGBONUSBUYSITESAPCOMMON_SAPSITETOCATALOGHANDLER = new OneToManyHandler<SAPBonusBuySiteToCatalog>(
	SapbonusbuyConstants.TC.SAPBONUSBUYSITETOCATALOG,
	false,
	"sapcommon_sapGlobalConfiguration",
	null,
	false,
	true,
	CollectionType.SET
	);
	protected static final Map<String, Map<String, AttributeMode>> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, Map<String, AttributeMode>> ttmp = new HashMap();
		DEFAULT_INITIAL_ATTRIBUTES = ttmp;
	}
	@Override
	public Map<String, AttributeMode> getDefaultAttributeModes(final Class<? extends Item> itemClass)
	{
		Map<String, AttributeMode> ret = new HashMap<>();
		final Map<String, AttributeMode> attr = DEFAULT_INITIAL_ATTRIBUTES.get(itemClass.getName());
		if (attr != null)
		{
			ret.putAll(attr);
		}
		return ret;
	}
	
	public SAPBonusBuySiteToCatalog createSAPBonusBuySiteToCatalog(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( SapbonusbuyConstants.TC.SAPBONUSBUYSITETOCATALOG );
			return (SAPBonusBuySiteToCatalog)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating SAPBonusBuySiteToCatalog : "+e.getMessage(), 0 );
		}
	}
	
	public SAPBonusBuySiteToCatalog createSAPBonusBuySiteToCatalog(final Map attributeValues)
	{
		return createSAPBonusBuySiteToCatalog( getSession().getSessionContext(), attributeValues );
	}
	
	@Override
	public String getName()
	{
		return SapbonusbuyConstants.EXTENSIONNAME;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPGlobalConfiguration.sapcommon_sapSiteToCatalog</code> attribute.
	 * @return the sapcommon_sapSiteToCatalog
	 */
	public Set<SAPBonusBuySiteToCatalog> getSapcommon_sapSiteToCatalog(final SessionContext ctx, final GenericItem item)
	{
		return (Set<SAPBonusBuySiteToCatalog>)SAPCONFIGBONUSBUYSITESAPCOMMON_SAPSITETOCATALOGHANDLER.getValues( ctx, item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPGlobalConfiguration.sapcommon_sapSiteToCatalog</code> attribute.
	 * @return the sapcommon_sapSiteToCatalog
	 */
	public Set<SAPBonusBuySiteToCatalog> getSapcommon_sapSiteToCatalog(final SAPGlobalConfiguration item)
	{
		return getSapcommon_sapSiteToCatalog( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPGlobalConfiguration.sapcommon_sapSiteToCatalog</code> attribute. 
	 * @param value the sapcommon_sapSiteToCatalog
	 */
	public void setSapcommon_sapSiteToCatalog(final SessionContext ctx, final GenericItem item, final Set<SAPBonusBuySiteToCatalog> value)
	{
		SAPCONFIGBONUSBUYSITESAPCOMMON_SAPSITETOCATALOGHANDLER.setValues( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPGlobalConfiguration.sapcommon_sapSiteToCatalog</code> attribute. 
	 * @param value the sapcommon_sapSiteToCatalog
	 */
	public void setSapcommon_sapSiteToCatalog(final SAPGlobalConfiguration item, final Set<SAPBonusBuySiteToCatalog> value)
	{
		setSapcommon_sapSiteToCatalog( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to sapcommon_sapSiteToCatalog. 
	 * @param value the item to add to sapcommon_sapSiteToCatalog
	 */
	public void addToSapcommon_sapSiteToCatalog(final SessionContext ctx, final GenericItem item, final SAPBonusBuySiteToCatalog value)
	{
		SAPCONFIGBONUSBUYSITESAPCOMMON_SAPSITETOCATALOGHANDLER.addValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to sapcommon_sapSiteToCatalog. 
	 * @param value the item to add to sapcommon_sapSiteToCatalog
	 */
	public void addToSapcommon_sapSiteToCatalog(final SAPGlobalConfiguration item, final SAPBonusBuySiteToCatalog value)
	{
		addToSapcommon_sapSiteToCatalog( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from sapcommon_sapSiteToCatalog. 
	 * @param value the item to remove from sapcommon_sapSiteToCatalog
	 */
	public void removeFromSapcommon_sapSiteToCatalog(final SessionContext ctx, final GenericItem item, final SAPBonusBuySiteToCatalog value)
	{
		SAPCONFIGBONUSBUYSITESAPCOMMON_SAPSITETOCATALOGHANDLER.removeValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from sapcommon_sapSiteToCatalog. 
	 * @param value the item to remove from sapcommon_sapSiteToCatalog
	 */
	public void removeFromSapcommon_sapSiteToCatalog(final SAPGlobalConfiguration item, final SAPBonusBuySiteToCatalog value)
	{
		removeFromSapcommon_sapSiteToCatalog( getSession().getSessionContext(), item, value );
	}
	
}
