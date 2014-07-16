package sap.hybris.integration.models.services.impl;

import static de.hybris.platform.servicelayer.util.ServicesUtil.validateIfSingleResult;
import static de.hybris.platform.servicelayer.util.ServicesUtil.validateParameterNotNull;
import static java.lang.String.format;

import java.util.List;

import org.springframework.beans.factory.annotation.Required;

import sap.hybris.integration.models.services.SAPUnitService;
import de.hybris.platform.core.model.product.UnitModel;
import de.hybris.platform.product.impl.DefaultUnitService;
import de.hybris.platform.sap.sapmodel.daos.SAPUnitDao;


public class SAPDefaultUnitService extends DefaultUnitService implements SAPUnitService
{
	private SAPUnitDao sapUnitDao;


	public SAPUnitDao getSapUnitDao()
	{
		return sapUnitDao;
	}

@Required
	public void setSapUnitDao(SAPUnitDao sapUnitDao)
	{
		this.sapUnitDao = sapUnitDao;
	}


	public UnitModel getUnitForSAPCode(final String code)
	{
		validateParameterNotNull(code, "Parameter code was null");
		final List<UnitModel> units = sapUnitDao.findUnitBySAPUnitCode(code);

		validateIfSingleResult(units, format("Unit with sapcode '%s' not found!", code),
				format("SAP Code '%s' is not unique, %d units found!", code, Integer.valueOf(units.size())));

		return units.get(0);
	}

}
