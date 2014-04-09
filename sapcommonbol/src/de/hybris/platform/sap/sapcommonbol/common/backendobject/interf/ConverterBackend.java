package de.hybris.platform.sap.sapcommonbol.common.backendobject.interf;

import de.hybris.platform.sap.core.bol.backend.BackendBusinessObject;
import de.hybris.platform.sap.core.bol.backend.BackendException;





/**
 * Converter backend interface
 * 
 * @author SAP
 */
public interface ConverterBackend extends BackendBusinessObject
{

	/**
	 * ID for converter BE object, see backendobject-config.xml
	 */
	public static String BE_TYPE = "Converter";

	/**
	 * Converting unit key to language dependent ID. <br>
	 * E.g. ST to PC in English
	 * 
	 * @param unitKey
	 *           SAP unit key
	 * @return language dependent unit ID
	 * @throws BackendException
	 */
	public String convertUnitKey2UnitID(String unitKey) throws BackendException;

	/**
	 * Converting language dependent unit ID to unit key
	 * 
	 * @param unitID
	 *           language dependent unit ID e.g PC in English
	 * @return SAP unit key e.g. ST for piece
	 * @throws BackendException
	 */
	public String convertUnitID2UnitKey(String unitID) throws BackendException;


	/**
	 * Converting language dependent unit ID to unit key
	 * 
	 * @param unitID
	 *           language dependent unit ID e.g PC in English
	 * @param language
	 *           language of the language dependent unit ID
	 * @return SAP unit key e.g. ST for piece
	 * @throws BackendException
	 */
	public String convertUnitID2UnitKey(String unitID, String language) throws BackendException;

	/**
	 * Get currency scale. In standard e.g. <li>USD: 2 <li>EUR: 2 <li>JPY: 0
	 * 
	 * @param sapCurrencyCode
	 *           SAP currency code, note that depending on customizing also non-ISO codes may occur
	 * @return number of decimals for UI display and validation
	 * @throws BackendException
	 */
	public int getCurrencyScale(String sapCurrencyCode) throws BackendException;

	/**
	 * Get unit scale.
	 * 
	 * @param unitKey
	 *           SAP unit key
	 * @return number of decimals for UI display and validation
	 * @throws BackendException
	 */
	public int getUnitScale(String unitKey) throws BackendException;

	/**
	 * Fetch language dependent string for currency code
	 * 
	 * @param currencyCode
	 *           SAP currency code, note that depending on customizing also non-ISO codes may occur
	 * @return language dependent currency description
	 * @throws BackendException
	 */
	public String getDescriptionForCurrency(String currencyCode) throws BackendException;

	/**
	 * Fetch language dependent string for currency code
	 * 
	 * @param unitKey
	 *           SAP unit key
	 * @return language dependent unit description
	 * @throws BackendException
	 */
	public String getDescriptionForUnit(String unitKey) throws BackendException;

	/**
	 * Loads UOM's per language. Called from cache loaders on BO level<br>
	 * 
	 * @param applicationID
	 * @param language
	 *           Language in SAP format (1 place)
	 * @return Map of UOM's and their descriptions
	 * @throws BackendException
	 */
	public Object loadUOMsByLanguageFromBackend(String applicationID, String language) throws BackendException;

	/**
	 * Loads currencies per language. Called from cache loaders on BO level<br>
	 * 
	 * @param applicationID
	 * @param language
	 *           Language in SAP format (1 place)
	 * @return Map of currencies and their decimal format
	 * @throws BackendException
	 */
	public Object loadCurrenciesByLanguageFromBackend(String applicationID, String language) throws BackendException;

}