/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Mar 3, 2014 5:13:40 PM                      ---
 * ----------------------------------------------------------------
 */
package sap.hybris.integration.models.jalo;

import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.extension.Extension;
import de.hybris.platform.jalo.product.Product;
import de.hybris.platform.store.BaseStore;
import sap.hybris.integration.models.constants.SapmodelConstants;

/**
 * Generated class for type <code>SapmodelManager</code>.
 */
@SuppressWarnings({"deprecation","unused","cast","PMD"})
public abstract class GeneratedSapmodelManager extends Extension
{
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.blocked</code> attribute.
	 * @return the blocked - Indicator if item is blocked for sale
	 */
	public Boolean isBlocked(final SessionContext ctx, final Product item)
	{
		return (Boolean)item.getProperty( ctx, SapmodelConstants.Attributes.Product.BLOCKED);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.blocked</code> attribute.
	 * @return the blocked - Indicator if item is blocked for sale
	 */
	public Boolean isBlocked(final Product item)
	{
		return isBlocked( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.blocked</code> attribute. 
	 * @return the blocked - Indicator if item is blocked for sale
	 */
	public boolean isBlockedAsPrimitive(final SessionContext ctx, final Product item)
	{
		Boolean value = isBlocked( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.blocked</code> attribute. 
	 * @return the blocked - Indicator if item is blocked for sale
	 */
	public boolean isBlockedAsPrimitive(final Product item)
	{
		return isBlockedAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.blocked</code> attribute. 
	 * @param value the blocked - Indicator if item is blocked for sale
	 */
	public void setBlocked(final SessionContext ctx, final Product item, final Boolean value)
	{
		item.setProperty(ctx, SapmodelConstants.Attributes.Product.BLOCKED,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.blocked</code> attribute. 
	 * @param value the blocked - Indicator if item is blocked for sale
	 */
	public void setBlocked(final Product item, final Boolean value)
	{
		setBlocked( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.blocked</code> attribute. 
	 * @param value the blocked - Indicator if item is blocked for sale
	 */
	public void setBlocked(final SessionContext ctx, final Product item, final boolean value)
	{
		setBlocked( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.blocked</code> attribute. 
	 * @param value the blocked - Indicator if item is blocked for sale
	 */
	public void setBlocked(final Product item, final boolean value)
	{
		setBlocked( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BaseStore.distributionChannel</code> attribute.
	 * @return the distributionChannel
	 */
	public String getDistributionChannel(final SessionContext ctx, final BaseStore item)
	{
		return (String)item.getProperty( ctx, SapmodelConstants.Attributes.BaseStore.DISTRIBUTIONCHANNEL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BaseStore.distributionChannel</code> attribute.
	 * @return the distributionChannel
	 */
	public String getDistributionChannel(final BaseStore item)
	{
		return getDistributionChannel( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BaseStore.distributionChannel</code> attribute. 
	 * @param value the distributionChannel
	 */
	public void setDistributionChannel(final SessionContext ctx, final BaseStore item, final String value)
	{
		item.setProperty(ctx, SapmodelConstants.Attributes.BaseStore.DISTRIBUTIONCHANNEL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BaseStore.distributionChannel</code> attribute. 
	 * @param value the distributionChannel
	 */
	public void setDistributionChannel(final BaseStore item, final String value)
	{
		setDistributionChannel( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BaseStore.division</code> attribute.
	 * @return the division
	 */
	public String getDivision(final SessionContext ctx, final BaseStore item)
	{
		return (String)item.getProperty( ctx, SapmodelConstants.Attributes.BaseStore.DIVISION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BaseStore.division</code> attribute.
	 * @return the division
	 */
	public String getDivision(final BaseStore item)
	{
		return getDivision( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BaseStore.division</code> attribute. 
	 * @param value the division
	 */
	public void setDivision(final SessionContext ctx, final BaseStore item, final String value)
	{
		item.setProperty(ctx, SapmodelConstants.Attributes.BaseStore.DIVISION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BaseStore.division</code> attribute. 
	 * @param value the division
	 */
	public void setDivision(final BaseStore item, final String value)
	{
		setDivision( getSession().getSessionContext(), item, value );
	}
	
	@Override
	public String getName()
	{
		return SapmodelConstants.EXTENSIONNAME;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BaseStore.salesOrganization</code> attribute.
	 * @return the salesOrganization
	 */
	public String getSalesOrganization(final SessionContext ctx, final BaseStore item)
	{
		return (String)item.getProperty( ctx, SapmodelConstants.Attributes.BaseStore.SALESORGANIZATION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BaseStore.salesOrganization</code> attribute.
	 * @return the salesOrganization
	 */
	public String getSalesOrganization(final BaseStore item)
	{
		return getSalesOrganization( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BaseStore.salesOrganization</code> attribute. 
	 * @param value the salesOrganization
	 */
	public void setSalesOrganization(final SessionContext ctx, final BaseStore item, final String value)
	{
		item.setProperty(ctx, SapmodelConstants.Attributes.BaseStore.SALESORGANIZATION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BaseStore.salesOrganization</code> attribute. 
	 * @param value the salesOrganization
	 */
	public void setSalesOrganization(final BaseStore item, final String value)
	{
		setSalesOrganization( getSession().getSessionContext(), item, value );
	}
	
}
