Ext.define("FinancialMobile.utils.OS", {
	alternateClassName : "FinancialMobile.OS",
	singleton : true,

	ready : false,

	movel : function() {
		return (Ext.os.is.Android || Ext.os.is.iOS);
	},

	desktop : function() {
		return (Ext.os.is.MacOSX || Ext.os.is.Windows || Ext.os.is.Linux);
	}
});