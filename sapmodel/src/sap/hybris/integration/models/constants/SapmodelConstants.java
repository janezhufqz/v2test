/*
 * [y] hybris Platform
 *
 * Copyright (c) 2000-2013 hybris AG
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of hybris
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with hybris.
 *
 *
 */
package sap.hybris.integration.models.constants;

/**
 * Global class for all Sapmodel constants. You can add global constants for your extension into this class.
 */
public final class SapmodelConstants extends GeneratedSapmodelConstants
{
	public static final String EXTENSIONNAME = "sapmodel";

	public static final String CONFIGURATION_PROPERTY_SALES_ORG = "salesOrganization";
	public static final String CONFIGURATION_PROPERTY_DISTRIBUTION_CHANNEL = "distributionChannel";
	public static final String CONFIGURATION_PROPERTY_DIVISION = "division";
	public static final String CONFIGURATION_PROPERTY_CURRENCY = "defaultCurrency";

	public static final String CONFIGURATION_PROPERTY_TRANSACTION_TYPE = "sapcommon_transactionType";

	/** SAP PRICING CONSTANT ATTRIBURES **/
	public static final String CONFIGURATION_PROPERTY_PRICE_SUBTOTAL_PROCEDURE = "priceSubtotalProcedure";
	public static final String CONFIGURATION_PROPERTY_DISCOUNTS_SUBTOTAL_PROCEDURE = "discountsSubtotalProcedure";
	public static final String CONFIGURATION_PROPERTY_TAXES_SUBTOTAL_PROCEDURE = "taxesSubtotalProcedure";
	public static final String CONFIGURATION_PROPERTY_DELIVERY_SUBTOTAL_PROCEDURE = "deliverySubtotalProcedure";
	public static final String CONFIGURATION_PROPERTY_PAYMENT_COST_SUBTOTAL_PROCEDURE = "paymentCostSubtotalProcedure";

	private SapmodelConstants()
	{
		//empty to avoid instantiating this constant class
	}

	// implement here constants used by this extension
}
