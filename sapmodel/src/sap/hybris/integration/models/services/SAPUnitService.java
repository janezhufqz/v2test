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
package sap.hybris.integration.models.services;

import de.hybris.platform.core.model.product.UnitModel;
import de.hybris.platform.product.UnitService;


@Deprecated
/***
 * Deprecated interface used to provide access to SAP Product models
 * 
 * @deprecated Please use {@link de.hybris.platform.sap.sapmodel.services.SAPUnitService}
 */
public interface SAPUnitService extends UnitService
{


	/***
	 * Returns the UnitModel for a given SAP product code
	 * 
	 * @param code
	 * @return UnitModel result for given SAPCode
	 */
	public UnitModel getUnitForSAPCode(final String code);

}
