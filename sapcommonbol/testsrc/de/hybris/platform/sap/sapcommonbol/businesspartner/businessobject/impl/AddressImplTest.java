package de.hybris.platform.sap.sapcommonbol.businesspartner.businessobject.impl;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

import de.hybris.bootstrap.annotations.UnitTest;

import org.junit.Test;


@UnitTest
public class AddressImplTest
{
	AddressImpl classUnderTest = new AddressImpl();
	private final String firstName = "Robby";
	private final String value = "value";

	@Test
	public void testClear_X()
	{
		classUnderTest.firstName_X = true;
		classUnderTest.clear_X();
		assertFalse(classUnderTest.firstName_X);
	}

	@Test
	public void testCompareToNoChangeInAddString()
	{
		final AddressImpl otherAddress = new AddressImpl();
		otherAddress.setFirstName("Hello");
		final int compareTo = classUnderTest.compareTo(otherAddress);
		assertTrue(compareTo == 0);
	}

	@Test
	public void testCompareToChangeInAddString()
	{
		final AddressImpl otherAddress = new AddressImpl();
		otherAddress.setAddressString_C("Hello");
		final int compareTo = classUnderTest.compareTo(otherAddress);
		assertFalse(compareTo == 0);
	}

	@Test
	public void testGetNotExisting()
	{
		final String attribute = classUnderTest.get("DOES_NOT_EXIST");
		assertNull(attribute);
	}

	@Test
	public void testGetExisting()
	{

		classUnderTest.setFirstName(firstName);
		final String attribute = classUnderTest.get("firstName");
		assertEquals(firstName, attribute);
	}

	@Test
	public void testIsEqualTo()
	{
		final AddressImpl otherAddress = new AddressImpl();
		final boolean addressfieldsEqualTo = classUnderTest.isAddressfieldsEqualTo(otherAddress);
		assertTrue(addressfieldsEqualTo);
	}

	@Test
	public void testIsEqualToFirstNameDeviates()
	{
		final AddressImpl otherAddress = new AddressImpl();
		otherAddress.setFirstName(firstName);
		final boolean addressfieldsEqualTo = classUnderTest.isAddressfieldsEqualTo(otherAddress);
		assertFalse(addressfieldsEqualTo);
	}

	@Test
	public void testIsChanged()
	{
		assertFalse(classUnderTest.isChanged());
	}

	@Test
	public void testIsChangedFirstNameDeviates()
	{
		classUnderTest.setFirstName(firstName);
		assertTrue(classUnderTest.isChanged());
	}

	@Test
	public void setAllXFields()
	{
		classUnderTest.setAllXFields();
		assertTrue(classUnderTest.firstName_X);
	}

	@Test
	public void testSetCity()
	{
		assertFalse(classUnderTest.city_X);
		classUnderTest.setCity("City");
		assertTrue(classUnderTest.city_X);
	}

	@Test
	public void testCoName()
	{
		assertFalse(classUnderTest.coName_X);
		classUnderTest.setCoName(value);
		assertTrue(classUnderTest.coName_X);
		assertEquals(value, classUnderTest.getCoName());
	}

	@Test
	public void testCompanyName()
	{
		assertFalse(classUnderTest.companyName_X);
		classUnderTest.setCompanyName(value);
		assertTrue(classUnderTest.companyName_X);
		assertEquals(value, classUnderTest.getCompanyName());
	}

	@Test
	public void testDistrict()
	{
		assertFalse(classUnderTest.district_X);
		classUnderTest.setDistrict(value);
		assertTrue(classUnderTest.district_X);
		assertEquals(value, classUnderTest.getDistrict());
	}

	@Test
	public void testEmail()
	{
		assertFalse(classUnderTest.email_X);
		classUnderTest.setEmail(value);
		assertTrue(classUnderTest.email_X);
		assertEquals(value, classUnderTest.getEmail());
	}

	@Test
	public void testFaxExtens()
	{
		assertFalse(classUnderTest.faxExtens_X);
		classUnderTest.setFaxExtens(value);
		assertTrue(classUnderTest.faxExtens_X);
		assertEquals(value, classUnderTest.getFaxExtens());
	}

	@Test
	public void testFaxNumber()
	{
		assertFalse(classUnderTest.faxNumber_X);
		classUnderTest.setFaxNumber(value);
		assertTrue(classUnderTest.faxNumber_X);
		assertEquals(value, classUnderTest.getFaxNumber());
	}

	@Test
	public void testFunction()
	{
		assertFalse(classUnderTest.function_X);
		classUnderTest.setFunction(value);
		assertTrue(classUnderTest.function_X);
		assertEquals(value, classUnderTest.getFunction());
	}

	@Test
	public void testHouseNo()
	{
		assertFalse(classUnderTest.houseNo_X);
		classUnderTest.setHouseNo(value);
		assertTrue(classUnderTest.houseNo_X);
		assertEquals(value, classUnderTest.getHouseNo());
	}

	@Test
	public void testLastName()
	{
		assertFalse(classUnderTest.lastName_X);
		classUnderTest.setLastName(value);
		assertTrue(classUnderTest.lastName_X);
		assertEquals(value, classUnderTest.getLastName());
	}

	@Test
	public void testName1()
	{
		assertFalse(classUnderTest.name1_X);
		classUnderTest.setName1(value);
		assertTrue(classUnderTest.name1_X);
		assertEquals(value, classUnderTest.getName1());
	}

	@Test
	public void testName2()
	{
		assertFalse(classUnderTest.name2_X);
		classUnderTest.setName2(value);
		assertTrue(classUnderTest.name2_X);
		assertEquals(value, classUnderTest.getName2());
	}

	@Test
	public void testName3()
	{
		classUnderTest.setName3(value);
		assertEquals(value, classUnderTest.getName3());
	}

	@Test
	public void testName4()
	{
		classUnderTest.setName4(value);
		assertEquals(value, classUnderTest.getName4());
	}

	@Test
	public void testPoBox()
	{
		assertFalse(classUnderTest.poBox_X);
		classUnderTest.setPoBox(value);
		assertTrue(classUnderTest.poBox_X);
		assertEquals(value, classUnderTest.getPoBox());
	}

	@Test
	public void testMiddleName()
	{
		assertFalse(classUnderTest.middleName_X);
		classUnderTest.setMiddleName(value);
		assertTrue(classUnderTest.middleName_X);
		assertEquals(value, classUnderTest.getMiddleName());
	}

	@Test
	public void testPostlCod1()
	{
		assertFalse(classUnderTest.postlCod1_X);
		classUnderTest.setPostlCod1(value);
		assertTrue(classUnderTest.postlCod1_X);
		assertEquals(value, classUnderTest.getPostlCod1());
	}

	@Test
	public void testPostlCod2()
	{
		assertFalse(classUnderTest.postlCod2_X);
		classUnderTest.setPostlCod2(value);
		assertTrue(classUnderTest.postlCod2_X);
		assertEquals(value, classUnderTest.getPostlCod2());
	}

	@Test
	public void testPrefix1Key()
	{
		assertFalse(classUnderTest.prefix1Key_X);
		classUnderTest.setPrefix1Key(value);
		assertTrue(classUnderTest.prefix1Key_X);
		assertEquals(value, classUnderTest.getPrefix1Key());
	}

	@Test
	public void testPrefix2Key()
	{
		assertFalse(classUnderTest.prefix2Key_X);
		classUnderTest.setPrefix2Key(value);
		assertTrue(classUnderTest.prefix2Key_X);
		assertEquals(value, classUnderTest.getPrefix2Key());
	}

	@Test
	public void testRegion()
	{
		assertFalse(classUnderTest.region_X);
		classUnderTest.setRegion(value);
		assertTrue(classUnderTest.region_X);
		assertEquals(value, classUnderTest.getRegion());
	}


}
