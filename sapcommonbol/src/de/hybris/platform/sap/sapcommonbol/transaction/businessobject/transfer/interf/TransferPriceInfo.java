package de.hybris.platform.sap.sapcommonbol.transaction.businessobject.transfer.interf;

import java.math.BigDecimal;

/**
 * Interface used to hold Price info.
 * 
 * @author SAP
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