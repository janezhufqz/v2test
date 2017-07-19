package de.hybris.platform.sap.sapmodel.authors;

import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.classification.ClassificationService;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.servicelayer.model.ModelService;


public interface SapClassificationAttributeAuthorHelper
{
	public ModelService getModelService();

	public ProductService getProductService();

	public ClassificationService getClassificationService();

	public CatalogVersionService getCatalogVersionService();
}
