/*
 * [y] hybris Platform
 *
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package de.hybris.platform.sap.sapbonusbuy.setup;

import static de.hybris.platform.sap.sapbonusbuy.constants.SapbonusbuyConstants.PLATFORM_LOGO_CODE;

import de.hybris.platform.core.initialization.SystemSetup;
import de.hybris.platform.sap.sapbonusbuy.constants.SapbonusbuyConstants;
import de.hybris.platform.sap.sapbonusbuy.service.SapbonusbuyService;



@SystemSetup(extension = SapbonusbuyConstants.EXTENSIONNAME)
public class SapbonusbuySystemSetup
{
	private final SapbonusbuyService sapbonusbuyService;

	public SapbonusbuySystemSetup(final SapbonusbuyService sapbonusbuyService)
	{
		this.sapbonusbuyService = sapbonusbuyService;
	}

	@SystemSetup(process = SystemSetup.Process.INIT, type = SystemSetup.Type.ESSENTIAL)
	public void createEssentialData()
	{
		sapbonusbuyService.createLogo(PLATFORM_LOGO_CODE);
	}

}
