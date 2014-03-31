package com.sap.hybris.sapcommonbol.suites;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import com.sap.hybris.app.common.module.common.backendobject.impl.ConverterBackendERPCRMTest;
import com.sap.hybris.app.common.module.transaction.util.ConversionHelperTest;
import com.sap.hybris.app.common.module.transaction.util.impl.ConversionToolsTest;


/**
 * Unit test suite for sapcommonbol. <br>
 */
@RunWith(Suite.class)
@Suite.SuiteClasses(
{ ConversionHelperTest.class, //
		ConverterBackendERPCRMTest.class, //
		ConversionToolsTest.class, //

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
