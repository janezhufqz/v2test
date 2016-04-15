package sap.hybris.integration.models.services;

import de.hybris.platform.sap.sapmodel.model.SAPLogicalSystemModel;
import de.hybris.platform.sap.sapmodel.model.SAPPlantLogSysOrgModel;
import de.hybris.platform.sap.sapmodel.model.SAPSalesOrganizationModel;

public interface SapPlantLogSysOrgService {
	
	
    /**
     * @param plantCode
     * @return SAP logical system for a given plant
     */
    public SAPLogicalSystemModel getSapLogicalSystemForPlant(String plantCode);
    
    /**
     * @param plantCode
     * @return SAP sales organization for a given plant
     */
    public SAPSalesOrganizationModel getSapSalesOrganizationForPlant(String plantCode);
    
    /**
     * @param plantCode
     * @return SAP logical system and sales organization for a given plant
     */
    public SAPPlantLogSysOrgModel getSapPlantLogSysOrgForPlant(String plantCode);
    
}
