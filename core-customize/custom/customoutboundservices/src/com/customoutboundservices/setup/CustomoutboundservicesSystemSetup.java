/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.customoutboundservices.setup;

import static com.customoutboundservices.constants.CustomoutboundservicesConstants.PLATFORM_LOGO_CODE;

import de.hybris.platform.core.initialization.SystemSetup;

import java.io.InputStream;

import com.customoutboundservices.constants.CustomoutboundservicesConstants;
import com.customoutboundservices.service.CustomoutboundservicesService;


@SystemSetup(extension = CustomoutboundservicesConstants.EXTENSIONNAME)
public class CustomoutboundservicesSystemSetup
{
	private final CustomoutboundservicesService customoutboundservicesService;

	public CustomoutboundservicesSystemSetup(final CustomoutboundservicesService customoutboundservicesService)
	{
		this.customoutboundservicesService = customoutboundservicesService;
	}

	@SystemSetup(process = SystemSetup.Process.INIT, type = SystemSetup.Type.ESSENTIAL)
	public void createEssentialData()
	{
		customoutboundservicesService.createLogo(PLATFORM_LOGO_CODE);
	}

	private InputStream getImageStream()
	{
		return CustomoutboundservicesSystemSetup.class.getResourceAsStream("/customoutboundservices/sap-hybris-platform.png");
	}
}
