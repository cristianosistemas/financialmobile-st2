Ext.define('FinancialMobile.model.Parcela', {
	extend : 'Ext.data.Model',
	config : {
		fields : [
				{
					name : 'id',
					type : 'string',
					convert : function(value, record) {
						return record.get('idCusto') + '-'
								+ record.get('numeroParcela');
					}
				}, {
					name : 'idCusto',
					type : 'int'
				}, {
					name : 'numeroParcela',
					type : 'int'
				}, {
					name : 'dataVencimento',
					type : 'date',
					dateFormat : 'Y-m-d'
				}, {
					name : 'valorParcela',
					type : 'float'
				}, {
					name : 'idStatus',
					type : 'int'
				} ],

		idProperty : 'id',

		associations : [ {
			type : 'belongsTo',
			model : 'FM.model.Custo',
			foreignKey : 'idCusto',
			associationKey : 'custo',
			getterName : 'getCusto',
			setterName : 'setCusto'
		} ]
	}
});