Ext.define('FinancialMobile.model.Usuario', {
	extend : 'Ext.data.Model',
	requires: ['Ext.data.identifier.Uuid'],
	config : {
		identifier: 'uuid',
		fields : [{
			name : 'idUsuario',
			type : 'int'
		}, {
			name : 'nomeUsuario',
			type : 'string'
		}, {
			name : 'emailUsuario',
			type : 'string'
		}, {
			name : 'loginUsuario',
			type : 'string'
		}, {
			name : 'senhaUsuario',
			type : 'string'
		}, {
			name : 'ativo',
			type : 'int'
		}, {
			name : 'idPerfil',
			type : 'int'
		} ]//,

		//idProperty : 'idUsuario'
	}
});