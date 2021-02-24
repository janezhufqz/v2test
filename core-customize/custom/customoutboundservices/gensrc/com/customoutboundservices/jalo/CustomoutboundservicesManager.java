/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Jan 28, 2021, 3:30:31 PM                    ---
 * ----------------------------------------------------------------
 */
package com.customoutboundservices.jalo;

import com.customoutboundservices.constants.CustomoutboundservicesConstants;
import de.hybris.platform.directpersistence.annotation.SLDSafe;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloSession;
import de.hybris.platform.jalo.extension.Extension;
import de.hybris.platform.jalo.extension.ExtensionManager;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type <code>CustomoutboundservicesManager</code>.
 */
@SuppressWarnings({"unused","cast"})
@SLDSafe
public class CustomoutboundservicesManager extends Extension
{
	protected static final Map<String, Map<String, AttributeMode>> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, Map<String, AttributeMode>> ttmp = new HashMap();
		DEFAULT_INITIAL_ATTRIBUTES = ttmp;
	}
	@Override
	public Map<String, AttributeMode> getDefaultAttributeModes(final Class<? extends Item> itemClass)
	{
		Map<String, AttributeMode> ret = new HashMap<>();
		final Map<String, AttributeMode> attr = DEFAULT_INITIAL_ATTRIBUTES.get(itemClass.getName());
		if (attr != null)
		{
			ret.putAll(attr);
		}
		return ret;
	}
	
	public static final CustomoutboundservicesManager getInstance()
	{
		ExtensionManager em = JaloSession.getCurrentSession().getExtensionManager();
		return (CustomoutboundservicesManager) em.getExtension(CustomoutboundservicesConstants.EXTENSIONNAME);
	}
	
	@Override
	public String getName()
	{
		return CustomoutboundservicesConstants.EXTENSIONNAME;
	}
	
}
