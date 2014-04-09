package de.hybris.platform.sap.sapcommonbol.businesspartner.businessobject.interf;

/**
 * BO representation of a county (relevant for countries where tax jurisdiction
 * code determination based on county is necessary)
 * 
 * @author SAP
 */
public interface County extends Cloneable {

    /**
     * @return county description
     */
    public String getCountyText();

    /**
     * @param countyText county description
     */
    public void setCountyText(String countyText);

    /**
     * @return tax jurisdiction code. Will be determined in ERP or CRM backend
     */
    public String getTaxJurCode();

    /**
     * @param taxJurCode tax jurisdiction code. Will be determined in ERP or CRM
     *            backend
     */
    public void setTaxJurCode(String taxJurCode);

    /**
     * @return a clone of the county
     */
    public County clone();

}
