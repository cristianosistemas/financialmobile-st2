Ext.define('FinancialMobile.store.Usuario', {
			extend : 'Ext.data.Store',
			requires:['Ext.data.proxy.LocalStorage'],
			
			config : {
				model : 'FinancialMobile.model.Usuario',
				storeId : 'usuarioStore',
				autoLoad : true,
				proxy : {
					type : 'localstorage',
					id: 'usuarios'
				}
			}
		});