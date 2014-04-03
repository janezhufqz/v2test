package com.sap.hybris.app.common.module.common.backendobject.impl;


import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

import com.sap.conn.jco.JCoFunction;
import com.sap.conn.jco.JCoParameterList;
import com.sap.conn.jco.JCoTable;

import de.hybris.platform.sap.core.bol.backend.BackendException;
import de.hybris.platform.sap.core.bol.backend.BackendType;


/**
 * ERP backend functionality for conversion.<br>
 * Customizing for units and currencies need to be fetched from ERP
 * 
 * @author SAP
 */
@BackendType("ERP")
public class ConverterBackendERP extends ConverterBackendERPCRM
{

	@Override
	public UomLocalization loadUOMsByLanguageFromBackend(final String applicationID, final String language)
			throws BackendException
	{

		final JCoFunction function = getDefaultJCoConnection().getFunction(ConverterUtils.ERP_WEC_CUST_F4_UNITS);
		final JCoParameterList importsErpWecCustF4Units = function.getImportParameterList();
		importsErpWecCustF4Units.setValue(ErpWecCustF4Units.iv_language, language.toUpperCase(Locale.ENGLISH));

		getDefaultJCoConnection().execute(function);

		final JCoParameterList exportParameterList = function.getExportParameterList();
		JCoTable f4Help = null;

		f4Help = exportParameterList.getTable(ErpWecCustF4Units.et_physical_unit);

		final Map<String, String> internalToExternalUOM = new HashMap<String, String>(f4Help.getNumRows());
		final Map<String, String> externalToInternalUOM = new HashMap<String, String>(f4Help.getNumRows());
		final Map<String, String> uOMNamesAndDescriptions = new HashMap<String, String>(f4Help.getNumRows());
		final Map<String, Integer> numberOfDecimalsForUOMs = new HashMap<String, Integer>(f4Help.getNumRows());

		for (int i = 0; i < f4Help.getNumRows(); i++)
		{
			f4Help.setRow(i);

			final String internalName = ConverterUtils.getString(f4Help, ErpWecCustF4Units.internal_name);
			final String externalName = ConverterUtils.getString(f4Help, ErpWecCustF4Units.external_name);
			final String description = ConverterUtils.getString(f4Help, ErpWecCustF4Units.description);
			final int decimals = f4Help.getInt(ErpWecCustF4Units.decimals);
			// same for all languages
			numberOfDecimalsForUOMs.put(internalName, new Integer(decimals));
			internalToExternalUOM.put(internalName, externalName);
			externalToInternalUOM.put(externalName, internalName);
			uOMNamesAndDescriptions.put(internalName, description);
		}

		// save with language as key
		return new UomLocalization(numberOfDecimalsForUOMs, internalToExternalUOM, externalToInternalUOM, uOMNamesAndDescriptions);
	}

	@Override
	public CurrencyLocalization loadCurrenciesByLanguageFromBackend(final String applicationID, final String language)
			throws BackendException
	{
		final JCoFunction function = getDefaultJCoConnection().getFunction(ConverterUtils.ERP_WEC_CUST_F4_CURRENCY);
		final JCoParameterList importsErpWecCustF4Currency = function.getImportParameterList();
		importsErpWecCustF4Currency.setValue(ErpWecCustF4Currency.iv_language, language.toUpperCase(Locale.ENGLISH));

		getDefaultJCoConnection().execute(function);


		final JCoParameterList exportParameterList = function.getExportParameterList();
		final JCoTable f4Help = exportParameterList.getTable(ErpWecCustF4Currency.et_currency_unit);

		final Map<String, String> currencyDescriptions = new HashMap<String, String>(f4Help.getNumRows());
		final Map<String, Integer> numberOfDecimalsForCurrencies = new HashMap<String, Integer>(f4Help.getNumRows());

		for (int i = 0; i < f4Help.getNumRows(); i++)
		{
			f4Help.setRow(i);
			final String internalName = ConverterUtils.getString(f4Help, ErpWecCustF4Currency.name);
			final String desc = ConverterUtils.getString(f4Help, ErpWecCustF4Currency.description);
			final int decimals = f4Help.getInt(ErpWecCustF4Currency.decimals);
			// same for all languages
			numberOfDecimalsForCurrencies.put(internalName, Integer.valueOf(decimals));
			currencyDescriptions.put(internalName, desc);// internalName=SAP
			// currency code
		}

		// save with language as key
		// save with language as key
		return new CurrencyLocalization(numberOfDecimalsForCurrencies, currencyDescriptions);
	}

}
