Ext.define("FinancialMobile.utils.Messages", {
	alternateClassName : "FinancialMobile.Msg",
	singleton : true,

	alert : function(message) {
		Ext.Msg.show({
			title : "Alerta",
			message : message,
			buttons : Ext.Msg.OK,
			icon : Ext.Msg.WARNING
		});
	},

	info : function(message, callback) {
		Ext.Msg.show({
			title : "Informa&ccedil;&atilde;o",
			message : message,
			buttons : Ext.Msg.OK,
			fn : callback ? callback : Ext.emptyFn,
			icon : Ext.Msg.INFO
		});
	},

	error : function(message, callback) {
		Ext.Msg.show({
			title : "Erro",
			message : message,
			buttons : Ext.Msg.OK,
			fn : callback ? callback : Ext.emptyFn,
			icon : Ext.Msg.ERROR
		});
	},

	warning : function(message) {
		Ext.Msg.show({
			title : "Aviso",
			message : message,
			buttons : Ext.Msg.OK,
			icon : Ext.Msg.WARNING
		});
	},

	confirm : function(message, callback, scope) {
		Ext.Msg.show({
			title : "Confirma&ccedil;&atilde;o",
			icon : Ext.Msg.QUESTION,
			buttons: Ext.MessageBox.OKCANCEL,
			message : message,
			fn : callback || Ext.emptyFn,
			scope : scope || this
		});
	}
});