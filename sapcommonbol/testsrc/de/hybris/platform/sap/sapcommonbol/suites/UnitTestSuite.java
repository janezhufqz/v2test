package de.hybris.platform.sap.sapcommonbol.suites;

import de.hybris.platform.sap.sapcommonbol.businesspartner.businessobject.impl.AddressImplTest;
import de.hybris.platform.sap.sapcommonbol.common.backendobject.impl.ConverterBackendERPCRMTest;
import de.hybris.platform.sap.sapcommonbol.transaction.util.ConversionHelperTest;
import de.hybris.platform.sap.sapcommonbol.transaction.util.impl.ConversionToolsTest;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;


/**
 * Unit test suite for sapcommonbol. <br>
 */
@RunWith(Suite.class)
@Suite.SuiteClasses(
{ ConversionHelperTest.class, //
		ConverterBackendERPCRMTest.class, //
		ConversionToolsTest.class, //
		AddressImplTest.class //

// TODO delete this comment once proven test classes not used
//		test for not not used classes:
// ConverterFactoryTest.class (from old WEC, not hybris)
//	PriceInputConverter
// CommonModuleAccessUnitTest.class,
// ConverterTests.class
// ExceptionTests.class,
// ValidatorTests.class,
// ComparatorGenericTest.class,
// PaginatorBeanImplTest.class,
// RenderContainerBeanImplTest.class,
// TitleContainerBeanImplTest.class,
// LoggingToolsTest.class,
// PairTest.class,
})
public class UnitTestSuite
{
	/* Empty block */
}
