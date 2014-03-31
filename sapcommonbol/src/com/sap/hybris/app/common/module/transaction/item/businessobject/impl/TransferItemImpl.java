package com.sap.hybris.app.common.module.transaction.item.businessobject.impl;

import java.math.BigDecimal;
import java.util.List;

import com.sap.hybris.app.common.module.transaction.businessobject.transfer.interf.TransferItem;
import com.sap.hybris.app.common.module.transaction.util.impl.PrettyPrinter;
import com.sap.hybris.core.businessobject.BusinessObjectBase;
import com.sap.hybris.core.common.exceptions.PanicException;



/**
 * Default implementation for the <code>TransferItem</code> interface. This class is used if you want to add items to a
 * SalesDocument using the OCI-Interface or from an existing order. An instance is provided by
 * SalesDocument.createTransferItem. Always use this method to retrieve a new instance and use the interface for
 * consumption of the TransferItem's functionality.
 * 
 * @author SAP AG
 * @version 1.0
 */
public class TransferItemImpl extends BusinessObjectBase implements TransferItem
{

	private static final long serialVersionUID = 1L;
	protected static final String FROM_CATALOG = "catalogItem";
	protected static final String FROM_SALESDOC = "salesDocItem";

	private String productId = null;
	private String productKey = null;
	private String customerProductId = null;
	private String description = null;
	private BigDecimal quantity = null;
	private String unit = null;
	private List<String> unitsOfMeasure = null;
	private final String imageURL = null;
	private final String thumbURL = null;
	private String configType = null;
	private String roughStockIndicator = null;
	private boolean giftCard;

	private boolean isConfigurable = false;

	private String source = FROM_SALESDOC;


	/**
	 * Constructor
	 */
	public TransferItemImpl()
	{
	}

	/**
	 * Retrieves the Unique key of the item.
	 * 
	 * @return In the case of CRM scenario the GUID is returned. In the case of ERP scenario the ID is returned.
	 */
	@Override
	public String getUniqueKey()
	{
		// ERP does no use GUIDS, instead the product ID will be unique and is
		// used as key. In case the GUID is not set we assume that we run in ERP
		// scenario and just use the ID
		String key;
		if (getProductKey() != null)
		{
			// CRM
			key = getProductKey();
		}
		else
		{
			// ERP
			key = getProductId();
		}
		return key;
	}

	@Override
	public BigDecimal getQuantity()
	{
		return quantity;
	}

	@Override
	public void setUnit(final String unit)
	{
		this.unit = unit;
	}

	@Override
	public String getUnit()
	{
		return unit;
	}

	@Override
	public void setProductId(final String productId)
	{
		this.productId = productId;
	}

	@Override
	public String getProductId()
	{
		return productId;
	}

	@Override
	public String getDescription()
	{
		return description;
	}

	@Override
	public void setDescription(final String description)
	{
		this.description = description;
	}

	@Override
	public String getProductKey()
	{
		return productKey;
	}

	@Override
	public void setProductKey(final String productKey)
	{
		this.productKey = productKey;
	}

	@Override
	public String getCustomerProductId()
	{
		return customerProductId;
	}

	@Override
	public void setCustomerProductId(final String customerProductId)
	{
		this.customerProductId = customerProductId;
	}

	@Override
	public List<String> getUnitsOfMeasure()
	{
		return unitsOfMeasure;
	}

	@Override
	public void setUnitsOfMeasure(final List<String> unitsOfMeasure)
	{
		this.unitsOfMeasure = unitsOfMeasure;
	}

	@Override
	public boolean isConfigurable()
	{
		return isConfigurable;
	}

	@Override
	public void setConfigurable(final boolean isConfigurable)
	{
		this.isConfigurable = isConfigurable;
	}

	@Override
	public void setFromSalesDoc()
	{
		setSource(FROM_SALESDOC);

	}

	@Override
	public void setFromCatalog()
	{
		setSource(FROM_CATALOG);

	}

	@Override
	public boolean isFromCatalog()
	{
		return isSource(FROM_CATALOG);
	}

	@Override
	public boolean isFromSalesDoc()
	{
		return isSource(FROM_SALESDOC);
	}

	protected void setSource(final String source)
	{
		this.source = source;
	}

	protected boolean isSource(final String source)
	{
		return (source.equals(this.source));

	}

	@Override
	public void setConfigType(final String configType)
	{
		this.configType = configType;
	}

	@Override
	public String getConfigType()
	{
		return configType;
	}

	@Override
	public String getRoughStockIndicator()
	{
		return roughStockIndicator;
	}

	@Override
	public void setRoughStockIndicator(final String roughStockIndicator)
	{
		this.roughStockIndicator = roughStockIndicator;
	}

	@Override
	public void setQuantity(final BigDecimal quantity)
	{
		this.quantity = quantity;

	}

	@Override
	public List<TransferItem> getAccessories()
	{
		throw new PanicException("NOT implemented");
	}

	@Override
	public Object clone() throws CloneNotSupportedException
	{
		throw new CloneNotSupportedException("This object is not meant to be cloned");
	}

	@Override
	public String toString()
	{
		final PrettyPrinter pp = new PrettyPrinter(super.toString());
		pp.add(productId, "productId");
		pp.add(productKey, "productKey");
		pp.add(quantity, "quantity");
		pp.add(unit, "unit");
		pp.add(configType, "configType");
		pp.add(source, "Source");
		pp.add(Boolean.valueOf(giftCard), "Giftcard");
		pp.add(customerProductId, "CustomerProductId");
		pp.add(roughStockIndicator, "RoughStockIndicator");
		pp.add(imageURL, "ImageUrl");
		pp.add(thumbURL, "ThumbUrl");
		return pp.toString();
	}

}
