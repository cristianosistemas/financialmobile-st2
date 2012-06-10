Ext.define('FinancialMobile.store.StatusParcela', {
			extend : 'Ext.data.ArrayStore',
			config:{
				storeId : 'statusParcelaStore',
				autoLoad: true,
				idIndex: 0,
				fields: ['id', 'desc'],
				data : [[1, 'Pago'], [2, 'Não Pago']]
			}
		});