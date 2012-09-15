Ext.define('FinancialMobile.controller.Usuario', {
	extend : 'Ext.app.Controller',
	requires: ['Ext.data.JsonP', 'FinancialMobile.utils.UsuarioUtils', 'FinancialMobile.utils.Messages'],

	config : {
		refs : {
			loginpanel : 'loginpanel',
			loginform : 'loginpanel > formpanel'
		},
		control : {
			'loginpanel button[action=entrar]' : {
				tap : 'entrar'
			}
		},
		stores: ['FinancialMobile.store.Usuario', 'FinancialMobile.store.Categoria']
	},

	entrar : function() {

		 Ext.Viewport.setMasked({
			xtype : 'loadmask',
			message : 'Entrando...'
		 });

		Ext.util.JSONP.request({
			url : Financial.SERVER + 'usuario/login_jsonp',
			callbackKey : 'callback',
			params : this.getLoginform().getValues(),
			scope : this,
			callback : function(success, result) {
				 Ext.Viewport.setMasked(false);
				if (result.success) {
					//armazenando o usuario logado para consultas futuras.
					uStore = Ext.data.StoreManager.lookup('usuarioStore');
					uStore.add(result.data);
					uStore.sync();

					FinancialMobile.UsuarioUtils.setUsuarioLogado(result.data);
					
					//removendo o painel de login
					Ext.Viewport.removeAll();
									
					var v = Ext.create('FinancialMobile.view.painel.Painel');
					Ext.Viewport.add(v);
					Ext.Viewport.setActiveItem(v);
				} else {
					FinancialMobile.Msg.error('Autenticacao não realizada');
				}
			}
		});
	}
});