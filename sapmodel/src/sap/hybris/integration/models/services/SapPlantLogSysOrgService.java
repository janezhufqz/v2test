package sap.hybris.integration.models.services;

import de.hybris.platform.sap.sapmodel.model.SAPLogicalSystemModel;
import de.hybris.platform.sap.sapmodel.model.SAPPlantLogSysOrgModel;
import de.hybris.platform.sap.sapmodel.model.SAPSalesOrganizationModel;
import de.hybris.platform.store.BaseStoreModel;

public interface SapPlantLogSysOrgService {
	
    /**
     * @param baseStoreModel
     * @param plantCode
     * @return SAP logical system for given base store and plant
     */
    public SAPLogicalSystemModel getSapLogicalSystemForPlant(BaseStoreModel baseStoreModel, String plantCode);
    
    /**
     * @param baseStoreModel
     * @param plantCode
     * @return SAP sales organization for given base store and plant
     */
    public SAPSalesOrganizationModel getSapSalesOrganizationForPlant(BaseStoreModel baseStoreModel, String plantCode);
    
    /**
     * @param baseStoreModel
     * @param plantCode
     * @return SAP logical system and sales organization for given base store and plant
     */
    public SAPPlantLogSysOrgModel getSapPlantLogSysOrgForPlant(BaseStoreModel baseStoreModel, String plantCode);
    
}
