package de.hybris.platform.sap.sapmodel.jalo.interceptor;

import java.util.Set;

import org.springframework.beans.factory.annotation.Required;

import de.hybris.platform.sap.sapmodel.model.SAPLogicalSystemModel;
import de.hybris.platform.servicelayer.interceptor.InterceptorContext;
import de.hybris.platform.servicelayer.interceptor.InterceptorException;
import de.hybris.platform.servicelayer.interceptor.ValidateInterceptor;
import de.hybris.platform.servicelayer.model.ModelService;

public class SapLogicalSystemValidationInterceptor implements
		ValidateInterceptor<SAPLogicalSystemModel> {

	private ModelService modelService;

	@Override
	public void onValidate(SAPLogicalSystemModel sapLogicalSystemModel, InterceptorContext paramInterceptorContext)
			throws InterceptorException {

		Set<SAPLogicalSystemModel> sapLogicalSystemGlobalConfig = sapLogicalSystemModel.getSapGlobalConfiguration()
				.getSapLogicalSystemGlobalConfig();

		if (sapLogicalSystemGlobalConfig.stream().count() == 0L) {
			sapLogicalSystemModel.setDefaultLogicalSystem(true);
		} else if (sapLogicalSystemModel.isDefaultLogicalSystem()) {

			sapLogicalSystemGlobalConfig.stream()
					.filter(entry -> entry != sapLogicalSystemModel &&
							entry.isDefaultLogicalSystem())
					.forEach(entry -> {
						entry.setDefaultLogicalSystem(false);
						getModelService().save(entry);
					});
		}
	}

	protected ModelService getModelService() {
		return modelService;
	}

	@Required
	public void setModelService(ModelService modelService) {
		this.modelService = modelService;
	}

}
