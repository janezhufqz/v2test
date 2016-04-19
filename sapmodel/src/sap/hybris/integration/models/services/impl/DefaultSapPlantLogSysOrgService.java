package sap.hybris.integration.models.services.impl;

import java.util.Optional;
import java.util.Set;
import java.util.function.BiFunction;

import sap.hybris.integration.models.services.SapPlantLogSysOrgService;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.sap.sapmodel.exceptions.SAPModelRuntimeException;
import de.hybris.platform.sap.sapmodel.model.SAPLogicalSystemModel;
import de.hybris.platform.sap.sapmodel.model.SAPPlantLogSysOrgModel;
import de.hybris.platform.sap.sapmodel.model.SAPSalesOrganizationModel;
import de.hybris.platform.store.BaseStoreModel;

public class DefaultSapPlantLogSysOrgService implements SapPlantLogSysOrgService {

	private final BiFunction<Set<SAPPlantLogSysOrgModel>, String, Optional<SAPPlantLogSysOrgModel>> selectEntry = (
			sapPlantLogSysOrgSet, plantCode) -> sapPlantLogSysOrgSet.stream().filter(
			entry -> entry.getPlant().getCode().contentEquals(plantCode)).findFirst();

	@Override
	public SAPLogicalSystemModel getSapLogicalSystemForPlant(String plantCode, BaseStoreModel baseStoreModel) {

		final Optional<SAPPlantLogSysOrgModel> sapPlantLogSysOrg = selectEntry.apply(
				getCurrentSAPConfiguration(baseStoreModel).getSapPlantLogSysOrg(), plantCode);

		if (sapPlantLogSysOrg.isPresent()) {
			return sapPlantLogSysOrg.get().getLogSys();
		}

		return null;
	}

	@Override
	public SAPSalesOrganizationModel getSapSalesOrganizationForPlant(String plantCode, BaseStoreModel baseStoreModel) {
		
		final Optional<SAPPlantLogSysOrgModel> sapPlantLogSysOrg = selectEntry.apply(
				getCurrentSAPConfiguration(baseStoreModel).getSapPlantLogSysOrg(), plantCode);

		if (sapPlantLogSysOrg.isPresent()) {
			return sapPlantLogSysOrg.get().getSalesOrg();
		}

		return null;
	}

	@Override
	public SAPPlantLogSysOrgModel getSapPlantLogSysOrgForPlant(String plantCode, BaseStoreModel baseStoreModel) {
		
		final Optional<SAPPlantLogSysOrgModel> sapPlantLogSysOrg = selectEntry.apply(
				getCurrentSAPConfiguration(baseStoreModel).getSapPlantLogSysOrg(), plantCode);

		if (sapPlantLogSysOrg.isPresent()) {
			return sapPlantLogSysOrg.get();
		}

		return null;
	}

	private SAPConfigurationModel getCurrentSAPConfiguration(BaseStoreModel baseStore) {


		SAPConfigurationModel sapConfiguration = baseStore.getSAPConfiguration();

		if (sapConfiguration == null) {
			throw new SAPModelRuntimeException("No SAP configuration is maintained for the base store!");
		}

		return sapConfiguration;
	}

}
