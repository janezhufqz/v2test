package de.hybris.platform.sap.sapcommonbol.common.salesarea.businessobject.interf;


/**
 * Interface builds the key for the sales organisation and division mapping. <br>
 *
 * @author  SAP
 * @version 1.0
 */
public interface DivisionMappingKey {

    /**
     * @return sales organisation
     */
    public String getSalesOrg();

    /**
     * @param salesOrg  sales organisation
     */
    public void setSalesOrg(String salesOrg);

    /**
     * @return division
     */
    public String getDivision();

    /**
     * @param division division
     */
    public void setDivision(String division);

}
