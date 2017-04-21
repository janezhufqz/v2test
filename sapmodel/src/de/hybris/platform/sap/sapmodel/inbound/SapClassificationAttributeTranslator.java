package de.hybris.platform.sap.sapmodel.inbound;


import de.hybris.platform.core.Registry;
import de.hybris.platform.impex.jalo.ImpExException;
import de.hybris.platform.impex.jalo.header.HeaderValidationException;
import de.hybris.platform.impex.jalo.header.SpecialColumnDescriptor;
import de.hybris.platform.impex.jalo.translators.AbstractSpecialValueTranslator;
import de.hybris.platform.jalo.Item;

/**
 *
 * The SapClassificationAttributeTranslator translator is called from data hub
 * before the ClassificationAttributeTranslator is being called to remove the product
 * current classification attribute values before importing the new ones from SAP ERP
 *
 * BaseProductAttributes(ClassificationAttributeTranslator)   depends on BaseProduct(SapClassificationAttributeTranslator)
 * SalesProductAttributes(ClassificationAttributeTranslator)  depends on SalesProduct(SapClassificationAttributeTranslator)
 * BaseVariantAttributes(ClassificationAttributeTranslator)   depends on BaseVariant(SapClassificationAttributeTranslator)
 * SalesVariantAttributes(ClassificationAttributeTranslator)  depends on SalesVariant(SapClassificationAttributeTranslator)
 *
 */
public class SapClassificationAttributeTranslator extends AbstractSpecialValueTranslator {

    final private static String BEAN_NAME = "sapClassificationAttributeHelper";
    private SapClassificationAttributeHelper sapClassificationAttributeHelper;

    @Override
    public void performImport(String cellValue, Item processedItem) throws ImpExException {
        sapClassificationAttributeHelper.removeClassificationAttributeValues(cellValue, processedItem);
    }

    @Override
    public void init(SpecialColumnDescriptor columnDescriptor) throws HeaderValidationException {

        if (sapClassificationAttributeHelper == null) {
            sapClassificationAttributeHelper = (SapClassificationAttributeHelper) Registry.getApplicationContext().getBean(BEAN_NAME);
        }

    }
}
