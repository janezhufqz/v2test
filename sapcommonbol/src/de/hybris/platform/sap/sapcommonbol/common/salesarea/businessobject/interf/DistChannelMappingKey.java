package de.hybris.platform.sap.sapcommonbol.common.salesarea.businessobject.interf;


/**
 * Interface builds the key for the sales organisation and distribution channel mapping .<br>
 *
 * @author  SAP
 * @version 1.0
 */
public interface DistChannelMappingKey {

    /**
     * @return sales organisation
     */
    public String getSalesOrg();

    /**
     * @param salesOrg sales organisation
     */
    public void setSalesOrg(String salesOrg);

    /**
     * @return distribution channel
     */
    public String getDistChannel();

    /**
     * @param distChannel distribution channel
     */
    public void setDistChannel(String distChannel);

}
