Ext.define('FinancialMobile.store.Categoria', {
			extend : 'Ext.data.Store',
			config : {
				model : 'FinancialMobile.model.Categoria',
				storeId : 'categoriaStore',
				autoLoad: true,
				proxy : {
					type : 'localstorage',
					id: 'categorias'
				}
			}
		});