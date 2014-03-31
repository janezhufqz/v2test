package com.sap.hybris.app.common.module.common.businessobject.impl;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.annotation.Resource;

import com.sap.hybris.app.common.module.common.backendobject.interf.CommonSalesArea;
import com.sap.hybris.app.common.module.common.businessobject.interf.CommonConfiguration;
import com.sap.hybris.core.backend.BackendException;
import com.sap.hybris.core.backend.BackendObjectManager;
import com.sap.hybris.core.businessobject.BusinessObjectBase;
import com.sap.hybris.core.common.cache.CacheAccess;
import com.sap.hybris.core.common.cache.exceptions.SAPHybrisCacheException;
import com.sap.hybris.core.common.exceptions.ApplicationBaseRuntimeException;
import com.sap.hybris.sapcommonbol.constants.SapcommonbolConstants;
import com.sap.wec.app.common.module.common.salesarea.businessobject.interf.DistChannelMapping;
import com.sap.wec.app.common.module.common.salesarea.businessobject.interf.DistChannelMappingKey;
import com.sap.wec.app.common.module.common.salesarea.businessobject.interf.DivisionMapping;
import com.sap.wec.app.common.module.common.salesarea.businessobject.interf.DivisionMappingKey;


/**
 * Technical BO to encapsulate basic customizing attributes and access to
 * 
 * @author SAP
 */
public class CommonConfigurationImpl extends BusinessObjectBase implements CommonConfiguration
{

	public static final String CACHE_REGION_SALES_AREA_MAPPING = "SalesAreaMappingCacheRegion";

	public static final String DIVISION_MAPPING = "DivisionMapping";
	public static final String DIST_CHANNEL_MAPPING = "DistChannelMapping";

	private String distributionChannel;
	private String division;
	private String salesOrganisation;
	private String currency;

	@Resource(name = "SalesAreaMappingCacheRegion")
	protected CacheAccess salesAreaMappingCacheAccess;


	private boolean wecDebug;
	private BackendObjectManager bem;
	private CommonSalesArea salesAreaBackendService;

	@Override
	public String getDistributionChannel()
	{
		return distributionChannel;
	}

	@Override
	public void setDistributionChannel(final String distributionChannel)
	{
		this.distributionChannel = distributionChannel;
	}

	@Override
	public String getDivision()
	{
		return division;
	}

	@Override
	public void setDivision(final String division)
	{
		this.division = division;
	}

	@Override
	public String getSalesOrganisation()
	{
		return salesOrganisation;
	}

	@Override
	public void setSalesOrganisation(final String salesOrganisation)
	{
		this.salesOrganisation = salesOrganisation;
	}

	@Override
	public String getCurrency()
	{
		return currency;
	}

	@Override
	public void setCurrency(final String currency)
	{
		this.currency = currency;
	}

	@Override
	public boolean getWecDebug()
	{
		return wecDebug;
	}

	@Override
	public void setWecDebug(final boolean wecDebug)
	{
		this.wecDebug = wecDebug;
	}

	@Override
	public DivisionMapping getDivisionMapping(final DivisionMappingKey key)
	{
		DivisionMapping mapping;
		Map<DivisionMappingKey, DivisionMapping> cachedData;

		try
		{
			final String cacheKey = getCacheKey(DIVISION_MAPPING);
			cachedData = (Map<DivisionMappingKey, DivisionMapping>) salesAreaMappingCacheAccess.get(cacheKey);
			if (cachedData == null)
			{

				final Map<DivisionMappingKey, DivisionMapping> mappings = getBackendService().loadDivisionMappingFromBackend();
				cachedData = new ConcurrentHashMap<DivisionMappingKey, DivisionMapping>(mappings.size(), 0.75f, 1);
				cachedData.putAll(mappings);
				synchronized (CommonConfigurationImpl.class)
				{
					try
					{
						salesAreaMappingCacheAccess.putIfAbsent(cacheKey, cachedData);
					}
					catch (final SAPHybrisCacheException e)
					{
						throw new BackendException("Could not write cache entry");
					}
				}
			}

			mapping = cachedData.get(key);
			if (mapping == null)
			{
				mapping = (DivisionMapping) genericFactory.getBean(SapcommonbolConstants.BEAN_ID_DIVISION_MAPPING);
				mapping.setDivisionForConditions(key.getDivision());
				mapping.setDivisionForCustomers(key.getDivision());
				mapping.setDivisionForDocumentTypes(key.getDivision());
				cachedData.put(key, mapping);
			}

		}
		catch (final BackendException e)
		{
			throw new ApplicationBaseRuntimeException("Could not read a mapping table for the division from backend", e);
		}


		return mapping;

	}

	@Override
	public DistChannelMapping getDistChannelMapping(final DistChannelMappingKey key)
	{
		DistChannelMapping mapping;
		Map<DistChannelMappingKey, DistChannelMapping> cachedData;

		try
		{
			final String cacheKey = getCacheKey(DIST_CHANNEL_MAPPING);
			cachedData = (Map<DistChannelMappingKey, DistChannelMapping>) salesAreaMappingCacheAccess.get(cacheKey);
			if (cachedData == null)
			{

				final Map<DistChannelMappingKey, DistChannelMapping> mappings = getBackendService()
						.loadDistChannelMappingFromBackend();
				cachedData = new ConcurrentHashMap<DistChannelMappingKey, DistChannelMapping>(mappings.size(), 0.75f, 1);
				cachedData.putAll(mappings);
				synchronized (CommonConfigurationImpl.class)
				{
					try
					{
						salesAreaMappingCacheAccess.putIfAbsent(cacheKey, cachedData);
					}
					catch (final SAPHybrisCacheException e)
					{
						throw new BackendException("Could not write cache entry");
					}
				}
			}

			mapping = cachedData.get(key);
			if (mapping == null)
			{
				mapping = (DistChannelMapping) genericFactory.getBean(SapcommonbolConstants.BEAN_ID_DIST_CHANNEL_MAPPING);
				mapping.setDistChannelForConditions(key.getDistChannel());
				mapping.setDistChannelForCustomerMatirial(key.getDistChannel());
				mapping.setDistChannelForSalesDocTypes(key.getDistChannel());
				cachedData.put(key, mapping);
			}
		}
		catch (final BackendException e)
		{
			throw new ApplicationBaseRuntimeException("Could not get a mapping table for distribution channel from backend", e);

		}


		return mapping;

	}

	@Override
	public void setBackendObjectManager(final BackendObjectManager bom)
	{
		this.bem = bom;

	}

	protected CommonSalesArea getBackendService() throws BackendException
	{
		if (salesAreaBackendService == null)
		{
			salesAreaBackendService = (CommonSalesArea) bem.createBackendBusinessObject(CommonSalesArea.BE_TYPE, null);
		}
		return salesAreaBackendService;
	}

	protected String getCacheKey(final String prefix)
	{
		String cacheKey = prefix;
		String configurationKey;
		try
		{
			configurationKey = getBackendService().getConfigurationKey();
		}
		catch (final BackendException e)
		{
			throw new ApplicationBaseRuntimeException("Could not read configuration key", e);

		}
		cacheKey = cacheKey + configurationKey;
		return cacheKey;
	}

	public DistChannelMappingKey getDistChannelMappingKey(final String originalSalesOrg, final String originalDistChannel)
	{
		final DistChannelMappingKey key = (DistChannelMappingKey) genericFactory
				.getBean(SapcommonbolConstants.BEAN_ID_DIST_CHANNEL_MAPPING_KEY);
		key.setSalesOrg(originalSalesOrg);
		key.setDistChannel(originalDistChannel);
		return key;
	}

	public DivisionMappingKey getDivisionMappingKey(final String originalSalesOrg, final String originalDivison)
	{
		final DivisionMappingKey key = (DivisionMappingKey) genericFactory
				.getBean(SapcommonbolConstants.BEAN_ID_DIVISION_MAPPING_KEY);
		key.setSalesOrg(originalSalesOrg);
		key.setDivision(originalDivison);
		return key;
	}

}
