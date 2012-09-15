Ext.define('FinancialMobile.utils.UsuarioUtils',{
		alternateClassName : "FinancialMobile.UsuarioUtils",
		singleton : true,

		usuarioLogado : null,
		
		apiParams: null,

		setUsuarioLogado : function(usuario, callback) {
			this.usuarioLogado = usuario;
			this.apiParams = {
					id_key: this.usuarioLogado.idUsuario,
					key: this.usuarioLogado.senhaUsuario,
			}
			this.carregarCategoriasUsuario(callback);
		},

		carregarCategoriasUsuario : function(func) {
			if (this.usuarioLogado) {
				Ext.util.JSONP.request({
							url : Financial.SERVER + 'categoria/categoriasUsuario_jsonp',
							callbackKey : 'callback',
							params : this.apiParams,
							scope : this,
							callback : function(success, result) {
								if (result.success) {
									catStore = Ext.data.StoreManager.lookup('categoriaStore');
									catStore.removeAll();
									catStore.sync();
									catStore.add(result.data);
									catStore.sync();
									if(func){
										func.call();
									}
								} else {
									FinancialMobile.Msg.error('Erro ao carregar categorias do usuario.');
								}
							}
				});
			}
		}

	});