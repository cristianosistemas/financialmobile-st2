Ext.define('FinancialMobile.model.Custo', {
	extend : 'Ext.data.Model',
	config : {
		fields : [ {
			name : 'idCusto',
			type : 'int'
		}, {
			name : 'descricaoGasto',
			type : 'string'
		}, {
			name : 'idCategoriaGasto',
			type : 'int'
		}, {
			name : 'idUsuario',
			type : 'int'
		} ],

		idProperty : 'idCusto',

		associations : [ {
			type : 'belongsTo',
			model : 'FinancialMobile.model.Categoria',
			foreignKey : 'idCategoriaGasto',
			getterName : 'getCategoria',
			setterName : 'setCategoria'
		}, {
			type : 'belongsTo',
			model : 'FinancialMobile.model.Usuario',
			foreignKey : 'idUsuario',
			getterName : 'getUsuario',
			setterName : 'setUsuario'
		}, {
			type : 'hasMany',
			model : 'FinancialMobile.model.Parcela',
			name : 'parcelas',
			filterProperty : 'idCusto',
			associationKey : 'parcelas'
		} ]
	}
});