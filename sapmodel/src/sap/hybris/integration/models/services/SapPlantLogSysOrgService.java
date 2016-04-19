package sap.hybris.integration.models.services;

import de.hybris.platform.sap.sapmodel.model.SAPLogicalSystemModel;
import de.hybris.platform.sap.sapmodel.model.SAPPlantLogSysOrgModel;
import de.hybris.platform.sap.sapmodel.model.SAPSalesOrganizationModel;
import de.hybris.platform.store.BaseStoreModel;

public interface SapPlantLogSysOrgService {
	
    /**
     * @param plantCode
     * @param baseStoreModel
     * @return SAP logical system for a given plant
     */
    public SAPLogicalSystemModel getSapLogicalSystemForPlant(String plantCode, BaseStoreModel baseStoreModel);
    
    /**
     * @param plantCode
     * @param baseStoreModel
     * @return SAP sales organization for a given plant
     */
    public SAPSalesOrganizationModel getSapSalesOrganizationForPlant(String plantCode, BaseStoreModel baseStoreModel);
    
    /**
     * @param plantCode
     * @param baseStoreModel
     * @return SAP logical system and sales organization for a given plant
     */
    public SAPPlantLogSysOrgModel getSapPlantLogSysOrgForPlant(String plantCode, BaseStoreModel baseStoreModel);
    
}
