package com.sap.hybris.app.common.module.transaction.businessobject.transfer.interf;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;

import de.hybris.platform.sap.core.bol.businessobject.BusinessObject;


/**
 * This interface provides common methods for an item that is to be transfered into a SalesDocument (Shopping cart). The
 * source of the item can be the product catalog, the OCI-interface or items from existing documents like orders.
 * Depending on the source, the interface will have different implementations. For the transactions module a default
 * implementation can be retrieved from the SalesDocument itself via the createTransferItem method. For some scenarios
 * it is important in the SalesDocument to determine where the item comes from. Use the setFrom...-methods to flag the
 * source of the implementation class.
 * 
 * @author SAP
 */
public interface TransferItem extends BusinessObject, Serializable
{

	/** Return value for getRoughStockIndicator meaning product is in stock. */
	public static final String IN_STOCK = "A";

	/**
	 * Return value for getRoughStockIndicator meaning product has limited availability.
	 */
	public static final String LIMITED_STOCK = "B";

	/**
	 * Return value for getRoughStockIndicator meaning product is not available.
	 */
	public static final String NOT_IN_STOCK = "C";

	/**
	 * Return value for getRoughStockIndicator meaning there is no stock info available.
	 */
	public static final String NO_STOCK_INFO = "";

	/* ====================General REGION BEGIN====================== */

	/**
	 * Retrieves the Unique key of the item.
	 * 
	 * @return In the case of CRM scenario the GUID is returned. In the case of ERP scenario the ID is returned.
	 */
	public String getUniqueKey();

	/**
	 * Retrieves the product key (GUID).
	 * 
	 * @return Product Key of the item.
	 */
	public String getProductKey();

	/**
	 * Sets the product key (GUID).
	 * 
	 * @param productKey
	 *           - product key of the item.
	 */
	public void setProductKey(String productKey);

	/**
	 * Retrieves the product Id (e.g. HT-1000).
	 * 
	 * @return Product ID of the item.
	 */
	public String getProductId();

	/**
	 * Set the property productId (e.g. HT-1010).
	 * 
	 * @param productId
	 *           id (name) of the item
	 */
	public void setProductId(String productId);

	/**
	 * Retrieves the item's description.
	 * 
	 * @return item description.
	 */
	public String getDescription();

	/**
	 * Sets the description.
	 * 
	 * @param description
	 *           description of the item
	 */
	public void setDescription(String description);

	/**
	 * Retrieves the Quantity of an item.
	 * 
	 * @return product quantity.
	 */
	public BigDecimal getQuantity();

	/**
	 * Set the quantity for this item.<br>
	 * 
	 * @param quantity
	 *           quantity of the item
	 */
	public void setQuantity(BigDecimal quantity);

	/**
	 * Retrieves the item's unit of Measure.
	 * 
	 * @return unit of measure
	 */
	public String getUnit();

	/**
	 * Sets the property unit of measure.
	 * 
	 * @param unit
	 *           of measure
	 */
	public void setUnit(String unit);

	/**
	 * Retrieves the list of available Units of Measure for an item.
	 * 
	 * @return List<String> - list of available units of measure
	 */
	public List<String> getUnitsOfMeasure();

	/**
	 * Sets the list of available Units of Measure for an item.
	 * 
	 * @param unitsOfMeasure
	 *           list of available units of measure
	 */
	public void setUnitsOfMeasure(List<String> unitsOfMeasure);

	/**
	 * Retrieves the customer Product Id for an item.
	 * 
	 * @return customer product Id.
	 */
	public String getCustomerProductId();

	/**
	 * Sets the customer product ID.
	 * 
	 * @param customerProductId
	 *           the customer specific id
	 */
	public void setCustomerProductId(String customerProductId);

	/**
	 * Retrieves the rough stock indicator for a product based on the division.
	 * 
	 * @return rough stock indicator. Use the constants IN_STOCK, LIMITED_STOCK, etc. of this interface to check the
	 *         result.
	 */
	public String getRoughStockIndicator();

	/**
	 * Sets the rough stock indicator for an item.
	 * 
	 * @param stockIndicator
	 *           Use the constants IN_STOCK, LIMITED_STOCK, etc. of this interface.
	 */
	public void setRoughStockIndicator(String stockIndicator);


	/**
	 * Retrieves the list of accessories<br>
	 * 
	 * @return list of accessories
	 */
	public List<TransferItem> getAccessories();

	/* ====================General REGION END====================== */

	/* ====================Sales Document REGION BEGIN====================== */

	/**
	 * Indicates if the item is sent from the catalog.
	 * 
	 * @return - true - if item is sent from catalog. false - if item is not sent from catalog.
	 */
	public boolean isFromCatalog();

	/**
	 * Indicates if the item is sent from a Sales Document.
	 * 
	 * @return - true - if the item is sent from sales document. false - if the item is not sent from sales document.
	 */
	public boolean isFromSalesDoc();

	/**
	 * Sets the flag in case the item is from the catalog.
	 */
	public void setFromCatalog();

	/**
	 * Sets the flag if the item is transferred from an existing SalesDocument.
	 */
	public void setFromSalesDoc();



	/**
	 * A method to retrieve if the catalog item is configurable.
	 * 
	 * @return true, if item is configurable
	 */
	public boolean isConfigurable();

	/**
	 * Flag an item as configurable (true/false).
	 * 
	 * @param isConfigurable
	 *           true if it is a configurable product
	 */
	public void setConfigurable(boolean isConfigurable);

	/**
	 * A Method to retrieve the configuration type of the item.
	 * 
	 * @return the configuration type of the item
	 */
	public String getConfigType();

	/**
	 * Define the configuration type of the item (only relevant if configurable).
	 * 
	 * @param configType
	 *           type
	 */
	public void setConfigType(String configType);

	/* ====================Configuration REGION END====================== */

}
