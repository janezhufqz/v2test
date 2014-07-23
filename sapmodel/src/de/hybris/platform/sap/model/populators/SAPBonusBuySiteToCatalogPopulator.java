/*
 * [y] hybris Platform
 *
 * Copyright (c) 2000-2014 hybris AG
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of hybris
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with hybris.
 *
 * 
 */
package de.hybris.platform.sap.model.populators;

import java.util.Map;

import org.apache.log4j.Logger;

import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.sap.sapmodel.model.SAPBonusBuySiteToCatalogModel;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

/**
 * Populator for additional fields specific for the SAPPricingSalesAreaToCatalog
 */
public class SAPBonusBuySiteToCatalogPopulator implements Populator<SAPBonusBuySiteToCatalogModel, Map<String, Object>>
{
	protected static final Logger LOGGER = Logger
			.getLogger(SAPBonusBuySiteToCatalogModel.class);
	
	public void populate(final SAPBonusBuySiteToCatalogModel source, final Map<String, Object> target) throws ConversionException
	{
		CatalogVersionModel catalogVersion = source.getCatalogVersion();
		String version = catalogVersion.getVersion();
		String catalogId = catalogVersion.getCatalog().getId();
		
		StringBuffer sb = new StringBuffer(100);
		sb.append(catalogId);
		sb.append(":");
		sb.append(version);
		
		if (LOGGER.isDebugEnabled())
		{
			LOGGER.debug(sb.toString());
		}
		
		target.put("catalogVersion", sb.toString());
		
	}

}
