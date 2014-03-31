package com.sap.wec.app.common.module.common.salesarea.businessobject.interf;

/**
 * Interface provides the mapping information for the sales organisation and division. <br>
 *
 * @author  SAP
 * @version 1.0
 */
public interface DivisionMapping {

    /**
     * @return alternative division for the customer data
     */
    public String getDivisionForCustomers();

    /**
     * @param divisionForCustomers alternative division for the customer data
     */
    public void setDivisionForCustomers(String divisionForCustomers);

    /**
     * @return division for the condition technique (pricing for instance)
     */
    public String getDivisionForConditions();

    /**
     * @param divisionForConditions division for the condition technique (pricing for instance)
     */
    public void setDivisionForConditions(String divisionForConditions);

    /**
     * @return division for the document management
     */
    public String getDivisionForDocumentTypes();

    /**
     * @param divisionForDocumentTypes division for the document management
     */
    public void setDivisionForDocumentTypes(String divisionForDocumentTypes);

}
