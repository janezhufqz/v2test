package com.sap.hybris.app.common.module.common.businessobject.impl;

/*****************************************************************************
 Class:        ConverterImpl.java
 Copyright (c) 2010, SAP AG, Germany, All rights reserved.
 Author:       SAP
 Created:      Aug 18, 2010
 Version:      1.0

 *****************************************************************************/


import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.sap.hybris.app.common.module.common.backendobject.interf.ConverterBackend;
import com.sap.hybris.app.common.module.common.businessobject.interf.Converter;
import com.sap.hybris.core.backend.BackendException;
import com.sap.hybris.core.backend.BackendObjectManager;
import com.sap.hybris.core.businessobject.BackendInterface;
import com.sap.hybris.core.businessobject.BusinessObjectBase;
import com.sap.hybris.core.businessobject.BusinessObjectException;
import com.sap.hybris.core.businessobject.BusinessObjectHelper;



/**
 * Converter implementation. For details see the specifying interface
 * {@link com.sap.wec.app.common.module.common.businessobject.interf.Converter Converter}<br>
 * 
 * @author SAP
 */
@BackendInterface(ConverterBackend.class)
public class ConverterImpl extends BusinessObjectBase implements Converter
{

	/**
	 * ABAP Domain 'DECAN' has interval limit [0 - 14]
	 */
	private static final List<BigDecimal> MIN_SCALE_VALUES;

	static
	{
		final List<BigDecimal> list = new ArrayList<BigDecimal>(15);
		for (int i = 0; i < 15; i++)
		{
			final BigDecimal div = BigDecimal.TEN.pow(i);
			list.add(BigDecimal.ONE.divide(div, i, BigDecimal.ROUND_UNNECESSARY));
		}
		MIN_SCALE_VALUES = Collections.unmodifiableList(list);
	}





	/**
	 * @return the backendService
	 * @throws BackendException
	 */
	public ConverterBackend getBackendService() throws BackendException
	{
		return (ConverterBackend) getBackendBusinessObject();
	}



	/**
	 * Sets the BackendObjectManager for the basket object. This method is used by the object manager to allow the user
	 * object interaction with the backend logic. This method is normally not called by classes other than
	 * BusinessObjectManager.
	 * 
	 * @param bem
	 *           BackendObjectManager to be used
	 */
	@Override
	@Deprecated
	public void setBackendObjectManager(final BackendObjectManager bem)
	{
		this.bem = bem;
	}

	@Override
	public String convertUnitID2UnitKey(final String unitID) throws BusinessObjectException
	{
		try
		{
			return getBackendService().convertUnitID2UnitKey(unitID);
		}
		catch (final BackendException e)
		{
			BusinessObjectHelper.splitException(e);
			return null;
		}
	}

	@Override
	@Deprecated
	public String convertUnitID2UnitKey(final String unitID, final String language) throws BusinessObjectException
	{
		try
		{
			return getBackendService().convertUnitID2UnitKey(unitID, language);
		}
		catch (final BackendException e)
		{
			BusinessObjectHelper.splitException(e);
			return null;
		}
	}

	@Override
	public String convertUnitKey2UnitID(final String unitKey) throws BusinessObjectException
	{
		try
		{
			return getBackendService().convertUnitKey2UnitID(unitKey);
		}
		catch (final BackendException e)
		{
			BusinessObjectHelper.splitException(e);
			return null;
		}
	}

	@Override
	public int getCurrencyScale(final String sapCurrencyCode) throws BusinessObjectException
	{
		try
		{
			return getBackendService().getCurrencyScale(sapCurrencyCode);
		}
		catch (final BackendException e)
		{
			throw new BusinessObjectException("getCurrencyScale", e);

		}
	}

	@Override
	public int getUnitScale(final String unitKey) throws BusinessObjectException
	{
		try
		{
			return getBackendService().getUnitScale(unitKey);
		}
		catch (final BackendException e)
		{
			BusinessObjectHelper.splitException(e);
			return 0;
		}
	}

	@Deprecated
	public String getDescriptionForUnit(final String unitKey) throws BusinessObjectException
	{
		try
		{
			return getBackendService().getDescriptionForUnit(unitKey);
		}
		catch (final BackendException e)
		{
			BusinessObjectHelper.splitException(e);
			return null;
		}
	}

	@Deprecated
	public String getDescriptionForCurrency(final String currencyCode) throws BusinessObjectException
	{
		try
		{
			return getBackendService().getDescriptionForCurrency(currencyCode);
		}
		catch (final BackendException e)
		{
			BusinessObjectHelper.splitException(e);
			return null;
		}
	}

	@Override
	public BigDecimal getMinimumScaleValue(final String unitKey) throws BusinessObjectException
	{
		return this.getMinimumScaleValue(this.getUnitScale(unitKey));
	}

	protected BigDecimal getMinimumScaleValue(final int scale)
	{
		return MIN_SCALE_VALUES.get(scale);
	}
}