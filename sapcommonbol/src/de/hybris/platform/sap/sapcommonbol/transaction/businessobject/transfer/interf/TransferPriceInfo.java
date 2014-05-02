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

import java.math.BigDecimal;

/**
 * Interface used to hold Price info.
 * 
 */
public interface TransferPriceInfo {

    /**
     * Returns the regular price.<br>
     * 
     * @return regularPrice
     */
    public BigDecimal getRegularPrice();

    /**
     * Returns the regular price.<br>
     * 
     * @return specialPrice
     */
    public BigDecimal getSpecialPrice();

    /**
     * Returns the currency.<br>
     * 
     * @return currency
     */
    public String getCurrency();

    /**
     * Returns the currency for special price.<br>
     * 
     * @return currency for special price.
     */
    public String getSpecialPriceCurrency();

    /**
     * Returns save price.<BR>
     * Save Price = RegularPrice - SpecialPrice
     * 
     * @return savePrice
     */
    public BigDecimal getSavePrice();

    /**
     * Get the currency for the saved price.
     * 
     * @return Save Price Currency
     */
    public String getSavePriceCurrency();

    /**
     * Returns save percentage<BR>
     * Price Save Percent = (Save Price/Regular Price)*100
     * 
     * @return save percentage
     */
    public BigDecimal getSavePercent();
}