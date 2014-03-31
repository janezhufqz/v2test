package com.sap.hybris.app.common.module.transaction.businessobject.transfer.interf;

import java.util.List;

import com.sap.hybris.core.businessobject.BusinessObject;
import com.sap.hybris.core.businessobject.BusinessObjectException;
import com.sap.hybris.core.businessobject.CommunicationException;
import com.sap.hybris.core.businessobject.LogonException;



/**
 * This Interface is used to pass the Catalog BO instance to the UI Layer or to BO's within the Business Object Layer.
 * 
 * @author SAP
 */
public interface TransferCatalog extends BusinessObject
{

	/* ====================Catalog REGION BEGIN====================== */

	/**
	 * Retrieves the catalog's ID.
	 * 
	 * @return catalog ID
	 */
	public String getId();

	/**
	 * Retrieves the catalog item by GUID.
	 * 
	 * @param guid
	 *           - item GUID
	 * @return TransferItem
	 * @throws LogonException
	 *            in case of a log-on error
	 * @throws CommunicationException
	 *            in case of a back-end error
	 */
	public TransferItem getItemByKey(String guid) throws LogonException, CommunicationException;

	/**
	 * Retrieves a list of catalog items for a list of item Id's.
	 * 
	 * @param itemId
	 *           - array of strings with item IDs
	 * @return {@link List} of {@link TransferItem}
	 * @throws BusinessObjectException
	 *            in case of a back-end error
	 */
	public List<TransferItem> getItems(String[] itemId) throws BusinessObjectException;

	/**
	 * Retrieves a list of catalog items for a list of item Guid's.
	 * 
	 * @param guid
	 *           - array of strings with item GUIDs
	 * @return {@link List} of {@link TransferItem}
	 * @throws BusinessObjectException
	 *            in case of a back-end error
	 */
	public List<TransferItem> getItemsByKey(String[] guid) throws BusinessObjectException;

	/**
	 * Search within the catalog for all item matching any of the item ID in the list.
	 * 
	 * @param itemIds
	 *           {@link List} of item ID String.
	 * @return {@link List} of {@link TransferItem}
	 * @throws BusinessObjectException
	 *            in case of a back-end error
	 */
	public List<TransferItem> searchItemsByID(List<String> itemIds) throws BusinessObjectException;

	/**
	 * Simple method used to fetch the image URL given a product key.
	 * 
	 * @param productUniqueKey
	 *           product unique key
	 * @return URL of the image
	 * @throws BusinessObjectException
	 *            on error exception is thrown
	 */
	public String getImageURL(String productUniqueKey) throws BusinessObjectException;


	/**
	 * Enable / Disable pricing process in catalog. Exception will be thrown if the price is being requested from a
	 * CatalogItem which has not been priced.
	 * 
	 * @param pricingEnable
	 *           <code>true</code>, only if the the item should be priced
	 */
	public void setPricingEnable(boolean pricingEnable);

	/* ====================Catalog REGION END====================== */

}