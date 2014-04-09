package de.hybris.platform.sap.sapcommonbol.erpbase;

/**
 * Holds the 3 sales area attributes.
 * 
 *@author SAP
 */
public class SalesAreaData {
	private String salesOrg = "";
	private String distrChan = "";
	private String division = "";

	/**
	 * Sets the SalesOrg attribute of the SalesAreaData object.
	 * 
	 *@param arg
	 *            The new SalesOrg value
	 */
	public void setSalesOrg(String arg) {
		salesOrg = arg;
	}

	/**
	 * Sets the DistrChan attribute of the SalesAreaData object.
	 * 
	 *@param arg
	 *            The new DistrChan value
	 */
	public void setDistrChan(String arg) {
		distrChan = arg;
	}

	/**
	 * Sets the Division attribute of the SalesAreaData object.
	 * 
	 *@param arg
	 *            The new Division value
	 */
	public void setDivision(String arg) {
		division = arg;
	}

	/**
	 * Gets the SalesOrg attribute of the SalesAreaData object.
	 * 
	 *@return The SalesOrg value
	 */
	public String getSalesOrg() {
		return salesOrg;
	}

	/**
	 * Gets the DistrChan attribute of the SalesAreaData object.
	 * 
	 *@return The DistrChan value
	 */
	public String getDistrChan() {
		return distrChan;
	}

	/**
	 * Gets the Division attribute of the SalesAreaData object.
	 * 
	 *@return The Division value
	 */
	public String getDivision() {
		return division;
	}

	/**
	 * String representation of the sales area instance (simply concatenation of
	 * the three attributes).
	 * 
	 *@return the string representation (salesOrg+distrChan+division)
	 */
	@Override
    public String toString() {
		return salesOrg + " // " + distrChan + " // " + division;
	}

	/**
	 * Two instances are the same if the underlying strings are the same.
	 * 
	 * @param anObject
	 *            the object to compare
	 * @return is the other object equal to <code> this </code>?
	 */
	@Override
    public boolean equals(Object anObject) {

		if (anObject instanceof SalesAreaData) {
			SalesAreaData anOtherInstance = (SalesAreaData) anObject;
			return (this.distrChan.equals(anOtherInstance.distrChan)
					&& this.division.equals(anOtherInstance.division) && this.salesOrg
					.equals(anOtherInstance.salesOrg));
		}
        else {
            return false;
        }
	}

	/**
	 * Compute the hash code (from the underlying strings).
	 * 
	 * @return the hash code
	 */
	@Override
    public int hashCode() {
		return (salesOrg.hashCode() ^ distrChan.hashCode() ^ division
				.hashCode());
	}

    /**
     * Checks if Sales organisation, distribution channel and division is
     * available
     * 
     * @return true, if all fields are filled
     */
	public boolean isValid() {
		boolean oneValueIsInitial = distrChan.equals("") || division.equals("")
				|| salesOrg.equals("");
		return (!oneValueIsInitial);
	}

}
