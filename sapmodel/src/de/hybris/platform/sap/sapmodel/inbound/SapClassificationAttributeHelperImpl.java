package de.hybris.platform.sap.sapmodel.inbound;

import de.hybris.platform.classification.ClassificationService;
import de.hybris.platform.classification.features.FeatureList;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.servicelayer.model.ModelService;
import org.apache.commons.lang.exception.ExceptionUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Required;


public class SapClassificationAttributeHelperImpl implements SapClassificationAttributeHelper {

    private static final Logger LOG = Logger.getLogger(SapClassificationAttributeHelperImpl.class.getName());
    private ModelService modelService;
    private ClassificationService classificationService;

    @Override
    public void removeClassificationAttributeValues(String cellValue, Item processedItem) {

        String productCode = null;
        try {
            productCode = processedItem.getAttribute("code").toString();
            ProductModel productModel = modelService.get(processedItem.getPK());
            FeatureList featureList = classificationService.getFeatures(productModel);
            featureList.getFeatures().forEach(entry -> entry.removeAllValues());
            classificationService.replaceFeatures(productModel, featureList);
            LOG.info(String.format("The current classification system attribute values for the product [%s] have been removed before importing the new ones.", productCode));
        } catch (Exception ex) {
            LOG.error(String.format("Something went wrong while removing classification system attribute values for the product [%s]!", productCode) + ExceptionUtils.getStackTrace(ex) );
        }

    }

    protected ModelService getModelService() {
        return modelService;
    }

    @Required
    public void setModelService(ModelService modelService) {
        this.modelService = modelService;
    }

    protected ClassificationService getClassificationService() {
        return classificationService;
    }

    @Required
    public void setClassificationService(ClassificationService classificationService) {
        this.classificationService = classificationService;
    }
}
