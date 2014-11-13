package de.hybris.platform.sap.sapmodel.daos;

import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.servicelayer.model.attribute.DynamicAttributeHandler;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;

import org.springframework.beans.factory.annotation.Autowired;


public class ProductIDAttributeHandler implements DynamicAttributeHandler<String, ProductModel>
{
	@Autowired
	protected FlexibleSearchService flexibleSearchService; //NOPMD

	public String get(final ProductModel model)
	{
		return this.convertID(model.getCode());
	}

	public void set(final ProductModel model, final String value)
	{
		throw new UnsupportedOperationException();
	}

	protected String convertID(final String id)
	{
		return id + " - converted";
	}
}
