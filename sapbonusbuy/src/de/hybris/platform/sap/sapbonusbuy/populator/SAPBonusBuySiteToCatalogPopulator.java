/*
 * [y] hybris Platform
 *
 * Copyright (c) 2016 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package de.hybris.platform.sap.sapbonusbuy.populator;

import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.promotions.model.PromotionGroupModel;
import de.hybris.platform.sap.sapbonusbuy.model.SAPBonusBuySiteToCatalogModel;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

import java.util.Map;

import org.apache.log4j.Logger;


/**
 * Populator for additional fields specific for the SAPPricingSalesAreaToCatalog
 */
public class SAPBonusBuySiteToCatalogPopulator implements Populator<SAPBonusBuySiteToCatalogModel, Map<String, Object>>
{
	protected static final Logger LOGGER = Logger.getLogger(SAPBonusBuySiteToCatalogModel.class);

	@Override
	public void populate(final SAPBonusBuySiteToCatalogModel source, final Map<String, Object> target) throws ConversionException
	{
		final CatalogVersionModel catalogVersion = source.getCatalogVersion();
		if (catalogVersion == null)
		{
			LOGGER.error("Bonus Buy Transfer: Catalog Version is not maintained");
			return;
		}
		final String version = catalogVersion.getVersion();
		final String catalogId = catalogVersion.getCatalog().getId();


		final StringBuilder sb = new StringBuilder();
		sb.append(catalogId);
		sb.append(":");
		sb.append(version);
		final PromotionGroupModel promotionGroupModel = source.getPromotionGroup();
		final String promotionGroup = promotionGroupModel.getIdentifier();

		if (LOGGER.isDebugEnabled())
		{
			LOGGER.debug("Bonus Buy catalog version is " + sb.toString());
			LOGGER.debug("Bonus Buy catalog promotion group is " + promotionGroup);
		}

		target.put("catalogVersion", sb.toString());
		target.put("promotionGroup", promotionGroup);
	}

}
