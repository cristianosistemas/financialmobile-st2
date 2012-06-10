Ext.define('FinancialMobile.model.Categoria', {
	extend : 'Ext.data.Model',
	requires: ['Ext.data.identifier.Uuid'],
	config : {
		identifier: 'uuid',
		fields : [ {
			name : 'idCategoria',
			type : 'int'
		}, {
			name : 'descCategoria',
			type : 'string'
		}, {
			name : 'descCompletaCategoria',
			type : 'string'
		}, {
			name : 'idUsuario',
			type : 'int'
		} ],

		//idProperty : 'idCategoria',

		associations : [ {
			type : 'belongsTo',
			model : 'FinancialMobile.model.Usuario',
			foreignKey : 'idUsuario',
			getterName : 'getUsuario',
			setterName : 'setUsuario'
		} ]
	}
});