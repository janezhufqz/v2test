/**
 * 
 */
package sap.hybris.integration.models;



/**
 * @author Administrator
 * 
 */
public class SalesAreaKey implements Comparable<SalesAreaKey>
{
	private String salesOrganization;
	private String materialDistributionChannel;
	private String conditionDistributionChannel;



	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Comparable#compareTo(java.lang.Object)
	 */
	@Override
	public int compareTo(final SalesAreaKey o)
	{
		if (!getSalesOrganization().equals(o.getSalesOrganization()))
		{
			return getSalesOrganization().compareTo(o.getSalesOrganization());
		}

		if (getSalesOrganization().equals(o.getSalesOrganization()))
		{
			if (!getMaterialDistributionChannel().equals(o.getMaterialDistributionChannel()))
			{
				return getMaterialDistributionChannel().compareTo(o.getMaterialDistributionChannel());

			}
			//first 2 parts are a match, compare the last part
			else
			{
				return getConditionDistributionChannel().compareTo(o.getConditionDistributionChannel());
			}


		}

		//should never get executed
		return -1;
	}


	/**
	 * @return the salesOrganization
	 */
	public String getSalesOrganization()
	{
		return salesOrganization;
	}



	/**
	 * @param salesOrganization
	 *           the salesOrganization to set
	 */
	public void setSalesOrganization(final String salesOrganization)
	{
		this.salesOrganization = salesOrganization;
	}



	/**
	 * @return the materialDistributionChannel
	 */
	public String getMaterialDistributionChannel()
	{
		return materialDistributionChannel;
	}



	/**
	 * @param materialDistributionChannel
	 *           the materialDistributionChannel to set
	 */
	public void setMaterialDistributionChannel(final String materialDistributionChannel)
	{
		this.materialDistributionChannel = materialDistributionChannel;
	}



	/**
	 * @return the conditionDistributionChannel
	 */
	public String getConditionDistributionChannel()
	{
		return conditionDistributionChannel;
	}



	/**
	 * @param conditionDistributionChannel
	 *           the conditionDistributionChannel to set
	 */
	public void setConditionDistributionChannel(final String conditionDistributionChannel)
	{
		this.conditionDistributionChannel = conditionDistributionChannel;
	}



}
