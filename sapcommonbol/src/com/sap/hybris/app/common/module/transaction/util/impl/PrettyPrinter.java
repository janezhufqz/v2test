package com.sap.hybris.app.common.module.transaction.util.impl;


/**
 * Helper class in order to have a nice output of fields, e.g. for toString()
 * 
 * @author SAP
 * @version 1.0
 */

public class PrettyPrinter {
    StringBuilder output;

    public PrettyPrinter(String start) {
        output = new StringBuilder(start);
    }

    PrettyPrinter(StringBuilder output) {
        this.output = output;
    }

    @Override
    public String toString() {
        return output.toString();
    }

    public void add(Object o, String fieldName) {
        if (o != null)
            doAppend(o, fieldName);
    }

    private void doAppend(Object o, String fieldName) {
        output.append("\n" + fieldName + "=[" + o + "]");
    }
}
