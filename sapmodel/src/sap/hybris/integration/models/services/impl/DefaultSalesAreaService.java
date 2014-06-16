package sap.hybris.integration.models.services.impl;

import org.springframework.beans.factory.annotation.Autowired;

import de.hybris.platform.sap.core.configuration.jalo.SAPConfiguration;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.store.services.BaseStoreService;
import sap.hybris.integration.models.model.ReferenceDistributionChannelMappingModel;
import sap.hybris.integration.models.model.ReferenceDivisionMappingModel;
import sap.hybris.integration.models.services.SalesAreaService;

public class DefaultSalesAreaService implements SalesAreaService{
	
	private BaseStoreService baseStoreService;


	@Autowired
	protected FlexibleSearchService flexibleSearchService;	

	@Override
	public String getSalesOrganization() {
		SAPConfigurationModel configuration = getCurrentSAPConfiguration();
		return configuration.getSapcommon_salesOrganization();
	}

	private SAPConfigurationModel getCurrentSAPConfiguration() {
	BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
	if (baseStore == null){
		throw new RuntimeException("No base store available");
	}
		SAPConfigurationModel sapConfiguration = baseStore.getSAPConfiguration();
		if (sapConfiguration == null){
			throw new RuntimeException("No SAP configuration available");			
		}
		return sapConfiguration;
	}

	@Override
	public String getDistributionChannel() {
		return getCurrentSAPConfiguration().getSapcommon_distributionChannel();
	}

	@Override
	public String getDistributionChannelForConditions() {
		String distributionChannel = getDistributionChannel();
		String salesOrg = getSalesOrganization();
		return getCommonDistributionChannelConditions(salesOrg, distributionChannel);

	}

	@Override
	public String getDistributionChannelForCustomerMaterial() {
		String distributionChannel = getDistributionChannel();
		String salesOrg = getSalesOrganization();
		return getCommonDistributionChannelCustMaster(salesOrg, distributionChannel);
	}

	@Override
	public String getDivision() {
		return getCurrentSAPConfiguration().getSapcommon_division();
	}

	@Override
	public String getDivisionForConditions() {
		String division = getDivision();
		String salesOrg = getSalesOrganization();
		return getCommonDivisionConditions(salesOrg, division);
	}

	@Override
	public String getDivisionForCustomerMaterial() {
		String division = getDivision();
		String salesOrg = getSalesOrganization();
		return getCommonDivisionCustMaster(salesOrg, division);
	}

	/**
	 * @return the baseStoreService
	 */
	public BaseStoreService getBaseStoreService() {
		return baseStoreService;
	}

	/**
	 * @param baseStoreService the baseStoreService to set
	 */
	public void setBaseStoreService(BaseStoreService baseStoreService) {
		this.baseStoreService = baseStoreService;
	}
	
	protected String getCommonDistributionChannelConditions(
			final String salesOrganization, final String distributionChannel) {
		final ReferenceDistributionChannelMappingModel referenceDistributionChannel = getCommonDistributionChannel(
				salesOrganization, distributionChannel);
		if (referenceDistributionChannel != null) {
			return referenceDistributionChannel.getRefDistChannelConditions();
		} else {
			return null;
		}
	}
	
	protected String getCommonDistributionChannelCustMaster(
			final String salesOrganization, final String distributionChannel) {
		final ReferenceDistributionChannelMappingModel referenceDistributionChannel = getCommonDistributionChannel(
				salesOrganization, distributionChannel);
		if (referenceDistributionChannel != null) {
			return referenceDistributionChannel.getRefDistChannelCustMat();
		} else {
			return null;
		}
	}	

	/**
	 * @param salesOrganization
	 * @param distributionChannel
	 * @return
	 */
	ReferenceDistributionChannelMappingModel getCommonDistributionChannel(
			final String salesOrganization, final String distributionChannel) {
		final ReferenceDistributionChannelMappingModel example = new ReferenceDistributionChannelMappingModel();
		example.setSalesOrganization(salesOrganization);
		example.setDistChannel(distributionChannel);
		final ReferenceDistributionChannelMappingModel referenceDistributionChannel = flexibleSearchService
				.getModelByExample(example);
		if (referenceDistributionChannel == null){
			throw new RuntimeException("No distribution channel mapping found");
		}
		return referenceDistributionChannel;
	}

	protected String getCommonDivisionCustMaster(final String salesOrganization,
			final String division) {
		final ReferenceDivisionMappingModel referenceDivision = getCommonDivsion(
				salesOrganization, division);
		if (referenceDivision != null) {
			return referenceDivision.getRefDivisionCustomer();
		} else {
			return null;
		}
	}
	
	protected String getCommonDivisionConditions(final String salesOrganization,
			final String division) {
		final ReferenceDivisionMappingModel referenceDivision = getCommonDivsion(
				salesOrganization, division);
		if (referenceDivision != null) {
			return referenceDivision.getRefDivisionConditions();
		} else {
			return null;
		}
	}	

	/**
	 * @param salesOrganization
	 * @param division
	 * @return
	 */
	ReferenceDivisionMappingModel getCommonDivsion(
			final String salesOrganization, final String division) {
		final ReferenceDivisionMappingModel example = new ReferenceDivisionMappingModel();
		example.setSalesOrganization(salesOrganization);
		example.setDivision(division);
		final ReferenceDivisionMappingModel referenceDivision = flexibleSearchService
				.getModelByExample(example);
		if (referenceDivision == null){
			throw new RuntimeException("No distribution channel mapping found");
		}
		
		return referenceDivision;
	}	

}
