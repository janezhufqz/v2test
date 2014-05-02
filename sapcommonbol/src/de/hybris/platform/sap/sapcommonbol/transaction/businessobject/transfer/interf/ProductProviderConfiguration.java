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
package de.hybris.platform.sap.sapcommonbol.transaction.businessobject.transfer.interf;

/**
 * Interface represents object with configuration properties reused from the
 * catalog module.<br>
 * 
 */
public interface ProductProviderConfiguration {

    /**
     * Constant to identify the ProductCatalogConfiguration BO.
     */
    public static final String BO_NAME_PRODUCT_CATALOG_CONFIGURATION = "ProductCatalogConfigurationBO";

    /**
     * Constant to identify the Dynamic Pricing (IPC Pricing) in Catalog.
     */
    public static final String DYNAMIC_PRICING = "DynamicPrice";

    /**
     * Constant to identify the Mixed Pricing in Catalog. In this case pricing
     * method depends on the pricing scenario. For example, dynamic pricing is
     * used for campaigns.
     */
    public static final String MIXED_PRICING = "enhancedPrice";

    /**
     * Returns the pricing method.<br>
     * 
     * @return Pricing Method
     */
    public String getPricingMethod();

    /**
     * Returns the departure country.<br>
     * 
     * @return Departure country
     */
    public String getDepartureCountry();

    /**
     * Returns the sales office.<br>
     * 
     * @return Sales office
     */
    public String getSalesOffice();

    /**
     * Returns the responsible sales organization.<br>
     * 
     * @return Responsible sales organization
     */
    public String getResponsibleSalesOrganisation();

}
