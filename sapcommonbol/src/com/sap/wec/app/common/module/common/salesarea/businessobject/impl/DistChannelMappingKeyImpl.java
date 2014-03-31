package com.sap.wec.app.common.module.common.salesarea.businessobject.impl;

import com.sap.wec.app.common.module.common.salesarea.businessobject.interf.DistChannelMappingKey;

/**
 * Class defines the key for the distribution channel mapping. <br>
 *
 * @author  SAP
 * @version 1.0
 */
public class DistChannelMappingKeyImpl implements DistChannelMappingKey {
      
    protected String salesOrg;
    protected String distChannel;
    
    
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((distChannel == null) ? 0 : distChannel.hashCode());
        result = prime * result + ((salesOrg == null) ? 0 : salesOrg.hashCode());
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        DistChannelMappingKeyImpl other = (DistChannelMappingKeyImpl) obj;
        if (distChannel == null) {
            if (other.distChannel != null)
                return false;
        }
        else if (!distChannel.equals(other.distChannel))
            return false;
        if (salesOrg == null) {
            if (other.salesOrg != null)
                return false;
        }
        else if (!salesOrg.equals(other.salesOrg))
            return false;
        return true;
    }
    public String getSalesOrg() {
        return salesOrg;
    }
    public void setSalesOrg(String salesOrg) {
        this.salesOrg = salesOrg;
    }
    public String getDistChannel() {
        return distChannel;
    }
    public void setDistChannel(String distChannel) {
        this.distChannel = distChannel;
    }
    @Override
    public String toString() {
        return "DistChannelMappingKeyImpl [distChannel=" + distChannel + ", salesOrg=" + salesOrg
               + "]";
    }
   
    
}
