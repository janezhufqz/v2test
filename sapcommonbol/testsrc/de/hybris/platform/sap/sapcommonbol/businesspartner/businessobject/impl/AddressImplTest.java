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
	public void testSetCoName()
	{
		assertFalse(classUnderTest.coName_X);
		classUnderTest.setCoName("Name");
		assertTrue(classUnderTest.coName_X);
	}


}
