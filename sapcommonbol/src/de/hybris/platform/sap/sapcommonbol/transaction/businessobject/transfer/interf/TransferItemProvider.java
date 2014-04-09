/*****************************************************************************
    Class:        TransferItemProvider.java
    Copyright (c) 2010, SAP AG, Germany, All rights reserved.
    Author:       SAP
    Created:      Jul 11, 2011
    Version:      1.0

 *****************************************************************************/

package de.hybris.platform.sap.sapcommonbol.transaction.businessobject.transfer.interf;

/**
 * This interface indicates that the implementing object can be used to
 * Instantiate empty transfer items. <br>
 * 
 * @author SAP
 */
public interface TransferItemProvider {

    /**
     * Creates an TransferItem which is representing an item coming from the
     * outside (e.g. a catalog) to the sales document.
     * 
     * @return A new, empty instance of TransferItem.
     */
    public TransferItem createTransferItem();

}
