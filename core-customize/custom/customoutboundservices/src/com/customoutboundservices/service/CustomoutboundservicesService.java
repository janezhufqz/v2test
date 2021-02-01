/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.customoutboundservices.service;

public interface CustomoutboundservicesService
{
	String getHybrisLogoUrl(String logoCode);

	void createLogo(String logoCode);
}
