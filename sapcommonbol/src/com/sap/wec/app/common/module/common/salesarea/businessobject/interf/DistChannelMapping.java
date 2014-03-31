package com.sap.wec.app.common.module.common.salesarea.businessobject.interf;


/**
 *Interface provides the mapping information for the sales organisation and distribution channel <br>
 *
 * @author  SAP
 * @version 1.0
 */
public interface DistChannelMapping {


    /**
     * @return alternative distribution channel for the condition technique
     */
    public String getDistChannelForConditions();

    /**
     * @param distChannelForConditions mapped distribution channel which is used for the pricing
     */
    public void setDistChannelForConditions(String distChannelForConditions);

    /**
     * @return alternative distribution channel for the document management
     */
    public String getDistChannelForSalesDocTypes();

    /**
     * @param distChannelForSalesDocTypes alternative distribution channel for the document management
     */
    public void setDistChannelForSalesDocTypes(String distChannelForSalesDocTypes);

    /**
     * @return alternative distribution channel for the customer and material data (product data in catalog)
     */
    public String getDistChannelForCustomerMatirial();

    /**
     * @param distChannelForCustomerMatirial alternative distribution channel for the customer and material data (product data in catalog)
     */
    public void setDistChannelForCustomerMatirial(String distChannelForCustomerMatirial);

    /**
     * @return reference plant
     */
    public String getReferencePlant();

    /**
     * @param referencePlant reference plant
     */
    public void setReferencePlant(String referencePlant);

    /**
     * @return distribution chain category
     */
    public String getDistChainCategory();

    /**
     * @param distChainCategory distribution chain category
     */
    public void setDistChainCategory(String distChainCategory);

    /**
     * @return Allowed pricing levels below distribution chain level
     */
    public String getAllowedPricingLevel();

    /**
     * @param allowedPricingLevel Allowed pricing levels below distribution chain level
     */
    public void setAllowedPricingLevel(String allowedPricingLevel);

}
