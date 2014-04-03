package com.sap.hybris.app.common.module.common.backendobject.interf;

import java.util.Map;

import com.sap.wec.app.common.module.common.salesarea.businessobject.interf.DistChannelMapping;
import com.sap.wec.app.common.module.common.salesarea.businessobject.interf.DistChannelMappingKey;
import com.sap.wec.app.common.module.common.salesarea.businessobject.interf.DivisionMapping;
import com.sap.wec.app.common.module.common.salesarea.businessobject.interf.DivisionMappingKey;

import de.hybris.platform.sap.core.bol.backend.BackendException;


/**
 * Interface to get the backend information for the common sales area. Gets common distribution channel and division
 * from back end. <br>
 * 
 * @author SAP
 */
public interface CommonSalesArea
{

	/**
	 * Back end object for the backendobject-config
	 */
	public String BE_TYPE = "CommonSalesArea";

	/**
	 * Loads common distribution channel data
	 * 
	 * @return content of the table TVKOS
	 * @throws BackendException
	 */
	public Map<DistChannelMappingKey, DistChannelMapping> loadDistChannelMappingFromBackend() throws BackendException;

	/**
	 * Loads common division data
	 * 
	 * @return content of the table TVKOV
	 * @throws BackendException
	 */
	public Map<DivisionMappingKey, DivisionMapping> loadDivisionMappingFromBackend() throws BackendException;

	/**
	 * Get shop configuration key from BE.<br>
	 * 
	 * @return configuration key
	 * @throws BackendException
	 */
	public String getConfigurationKey() throws BackendException;
}
