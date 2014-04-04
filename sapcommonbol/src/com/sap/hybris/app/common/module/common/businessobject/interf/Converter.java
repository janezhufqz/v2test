package com.sap.hybris.app.common.module.common.businessobject.interf;

/*****************************************************************************
 Class:        Converter.java
 Copyright (c) 2010, SAP AG, Germany, All rights reserved.
 Author:       SAP
 Created:      Aug 18, 2010
 Version:      1.0

 *****************************************************************************/


import java.math.BigDecimal;

import de.hybris.platform.sap.core.bol.businessobject.BusinessObjectException;



/**
 * Converter BO functionality. <br>
 * Retrieves currency and unit scales and also is able to convert unit keys (language independent) into unit ID's.<br>
 * <br>
 * The language does not need to be provided, it is taken from the session {@link java.util.Locale locale}.
 * 
 * @author SAP
 */
public interface Converter
{

	/**
	 * Identifier to access the Converter BO from the BOManager
	 */
	public static String BO_TYPE = "Converter";

	/**
	 * Converts the unit key (example <code> ST </code> ) into the language dependent ID (example <code> PC </code> for
	 * en_US)
	 * 
	 * @param unitKey
	 *           language independent unit key
	 * @return language dependent unit ID
	 * @throws BusinessObjectException
	 */
	public String convertUnitKey2UnitID(String unitKey) throws BusinessObjectException;

	/**
	 * Converts the unit ID (example <code> PC </code> for en_US) into the unit key (example <code> ST </code>)
	 * 
	 * @param unitID
	 *           language dependent unit ID
	 * @return unit key
	 * @throws BusinessObjectException
	 */
	public String convertUnitID2UnitKey(String unitID) throws BusinessObjectException;

	/**
	 * Converts the unit ID (example <code> PC </code> for en_US) into the unit key (example <code> ST </code>)
	 * 
	 * @param unitID
	 *           language dependent unit ID
	 * @param language
	 *           language of the language dependent unit ID
	 * @return unit key
	 * @throws BusinessObjectException
	 */
	public String convertUnitID2UnitKey(String unitID, String language) throws BusinessObjectException;

	/**
	 * Retrieves the number of decimal places for a currency (which might be an ISO currency but doesn't need to be). <br>
	 * Basis is the ERP/CRM customizing in tables TCURX and TCURC. <br>
	 * Examples: USD typically has 2 decimal places, JPY has zero.
	 * 
	 * @param sapCurrencyCode
	 *           currency code. Must be available in customizing tabke TCURC
	 * @return number of decimal places
	 * @throws BusinessObjectException
	 */
	public Integer getCurrencyScale(String sapCurrencyCode) throws BusinessObjectException;

	/**
	 * Retrieves the number of decimal places for units according to ERP/CRM customizing. This is relevant for UI display
	 * in case the unit amount is not an integer.
	 * 
	 * @param unitKey
	 *           the language independet unit key. Must be available in customizing table T006
	 * @return the number of decimal places for UI display
	 * @throws BusinessObjectException
	 */
	public int getUnitScale(String unitKey) throws BusinessObjectException;

	/**
	 * Retrieves a description for a unit according ti ERP/CRM customizing. This is relevant for UI display.
	 * 
	 * @param unitKey
	 *           the language-independent key available in customizing table T006
	 * @return the language-dependent description for the unit.
	 * @throws BusinessObjectException
	 */
	public String getDescriptionForUnit(String unitKey) throws BusinessObjectException;

	/**
	 * Retrieves a description for a currency according ti ERP/CRM customizing. This is relevant for UI display.
	 * 
	 * @param currencyCode
	 *           the language-independent key available in customizing table TCURC
	 * @return the language-dependent description for the currency.
	 * @throws BusinessObjectException
	 */
	public String getDescriptionForCurrency(String currencyCode) throws BusinessObjectException;

	/**
	 * @param unitKey
	 *           the language independet unit key. Must be available in customizing table T006
	 * @return BigDecimal representing the smallest value given a scale
	 * @throws BusinessObjectException
	 * @see {@link #getUnitScale(String)}
	 */
	public BigDecimal getMinimumScaleValue(String unitKey) throws BusinessObjectException;
}
