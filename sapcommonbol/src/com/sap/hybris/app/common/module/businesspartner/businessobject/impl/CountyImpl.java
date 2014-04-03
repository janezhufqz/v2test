package com.sap.hybris.app.common.module.businesspartner.businessobject.impl;

import com.sap.hybris.app.common.module.businesspartner.businessobject.interf.County;

import de.hybris.platform.sap.core.common.exceptions.ApplicationBaseRuntimeException;


/**
 * BO representation of a county (a geographical entity used for tax jurisdiction code determination)
 * 
 * @author SAP
 */
public class CountyImpl implements County
{

	private String countyText;
	private String taxJurCode;

	public String getCountyText()
	{
		return countyText;
	}

	public void setCountyText(final String countyText)
	{
		this.countyText = countyText;
	}

	public String getTaxJurCode()
	{
		return taxJurCode;
	}

	public void setTaxJurCode(final String taxJurCode)
	{
		this.taxJurCode = taxJurCode;
	}

	@Override
	public County clone()
	{
		County clone;
		try
		{
			clone = (County) super.clone();
		}
		catch (final CloneNotSupportedException e)
		{
			throw new ApplicationBaseRuntimeException(
					"Failed to clone Object, check whether Cloneable Interface is still implemented", e);
		}
		return clone;
	}

}
