package de.hybris.platform.sap.sapmodel.authors;

import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.classification.ClassificationService;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.servicelayer.model.ModelService;

import org.springframework.beans.factory.annotation.Required;


public class SapClassificationAttributeAuthorHelperImpl implements SapClassificationAttributeAuthorHelper
{
	private ClassificationService classificationService;
	private ModelService modelService;
	private ProductService productService;
	private CatalogVersionService catalogVersionService;

	@Override
	public ClassificationService getClassificationService()
	{
		return classificationService;
	}

	@Required
	public void setClassificationService(final ClassificationService classificationService)
	{
		this.classificationService = classificationService;
	}

	@Override
	public ModelService getModelService()
	{
		return modelService;
	}

	@Required
	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}

	@Override
	public ProductService getProductService()
	{
		return productService;
	}

	@Required
	public void setProductService(final ProductService productService)
	{
		this.productService = productService;
	}

	@Override
	public CatalogVersionService getCatalogVersionService()
	{
		return catalogVersionService;
	}

	@Required
	public void setCatalogVersionService(final CatalogVersionService catalogVersionService)
	{
		this.catalogVersionService = catalogVersionService;
	}

}
