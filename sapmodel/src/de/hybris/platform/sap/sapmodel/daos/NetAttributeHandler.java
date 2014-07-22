package de.hybris.platform.sap.sapmodel.daos;
import org.springframework.beans.factory.annotation.Autowired;

import sap.hybris.integration.models.model.ReferenceDistributionChannelMappingModel;
import de.hybris.platform.servicelayer.model.attribute.DynamicAttributeHandler;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.sap.sapmodel.model.SAPPricingSalesAreaToCatalogModel;
public class NetAttributeHandler implements DynamicAttributeHandler<Boolean, SAPPricingSalesAreaToCatalogModel>{

	@Autowired
	protected FlexibleSearchService flexibleSearchService;	
	
	@Override
	public Boolean get(SAPPricingSalesAreaToCatalogModel model)
	{
		
		final SAPConfigurationModel sapConfigurationModel = new SAPConfigurationModel();
		sapConfigurationModel.setSapcommon_distributionChannel(model.getDistributionChannel());
		sapConfigurationModel.setSapcommon_salesOrganization(model.getSalesOrganization());
		
		final SAPConfigurationModel referenceDistributionChannel = flexibleSearchService
				.getModelByExample(sapConfigurationModel);
		
		
		return Boolean.TRUE;
	}

	@Override
	public void set(SAPPricingSalesAreaToCatalogModel model, Boolean value)
	{
		 throw new UnsupportedOperationException();
		 
	}

}
