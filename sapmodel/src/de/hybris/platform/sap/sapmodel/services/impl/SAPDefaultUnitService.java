/*
 * [y] hybris Platform
 *
 * Copyright (c) 2017 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package de.hybris.platform.sap.sapmodel.services.impl;

import de.hybris.platform.core.model.product.UnitModel;
import de.hybris.platform.product.impl.DefaultUnitService;
import de.hybris.platform.sap.sapmodel.daos.SAPUnitDao;
import de.hybris.platform.sap.sapmodel.services.SAPUnitService;
import org.springframework.beans.factory.annotation.Required;

import java.util.List;

import static de.hybris.platform.servicelayer.util.ServicesUtil.validateParameterNotNull;


public class SAPDefaultUnitService extends DefaultUnitService implements SAPUnitService {
    private SAPUnitDao sapUnitDao;

    public UnitModel getUnitForSAPCode(final String code) {
        validateParameterNotNull(code, "Parameter code was null");
        final List<UnitModel> units = sapUnitDao.findUnitBySAPUnitCode(code);
        if (units.size() > 0) {
            return units.get(0);
        } else {
            return null;
        }
    }

    protected SAPUnitDao getSapUnitDao() {
        return sapUnitDao;
    }

    @Required
    public void setSapUnitDao(SAPUnitDao sapUnitDao) {
        this.sapUnitDao = sapUnitDao;
    }


}