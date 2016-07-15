/*
 * [y] hybris Platform
 *
 * Copyright (c) 2000-2016 SAP SE
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * Hybris ("Confidential Information"). You shall not disclose such
 * Confidential Information and shall use it only in accordance with the
 * terms of the license agreement you entered into with SAP Hybris.
 */
package de.hybris.platform.sap.sapbonusbuy.setup;

import static de.hybris.platform.sap.sapbonusbuy.constants.SapbonusbuyConstants.PLATFORM_LOGO_CODE;

import de.hybris.platform.core.initialization.SystemSetup;
import de.hybris.platform.sap.sapbonusbuy.constants.SapbonusbuyConstants;
import de.hybris.platform.sap.sapbonusbuy.service.SapbonusbuyService;

import java.io.InputStream;



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

	private InputStream getImageStream()
	{
		return SapbonusbuySystemSetup.class.getResourceAsStream("/sapbonusbuy/sap-hybris-platform.png");
	}
}
