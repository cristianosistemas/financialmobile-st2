Ext.Loader.setConfig({
	enabled : true,
	paths : {
		Ext : "lib/touch",
		FinancialMobile : "./app"
	}
});

Ext.application({
    name: 'FinancialMobile',

    requires: [
        'Ext.MessageBox'
    ],

    models : [ 'Usuario', 'Categoria', 'Custo', 'Parcela'],
    controllers : [ 'Usuario', 'Principal', 'DespesaReceita'],
    views : [ 'FinancialMobile.view.usuario.Login', 'FinancialMobile.view.painel.Painel'],
    stores: ['FinancialMobile.store.Categoria', 'FinancialMobile.store.Usuario'],

    startupImage: {
        '320x460': '../img/startup/320x460.jpg',
        '640x920': '../img/startup/640x920.png',
        '768x1004': '../img/startup/768x1004.png',
        '748x1024': '../img/startup/748x1024.png',
        '1536x2008': '../img/startup/1536x2008.png',
        '1496x2048': '../img/startup/1496x2048.png'
    },

    launch: function() {
    	console.log('Iniciando aplciacao');

        uStore = Ext.data.StoreManager.lookup('usuarioStore');

        uStore.load(function(records, op, success){
                if(records.length > 0){
                    console.log('Usuario Logado');
                    console.log(records[0].data);
                    FinancialMobile.UsuarioUtils.setUsuarioLogado(records[0].data);
                    var p = Ext.create('FinancialMobile.view.painel.Painel');
                    Ext.Viewport.add(p);
                    Ext.Viewport.setActiveItem(p);
                }else{
                    console.log('Usuario nao esta logado');
                    var p = Ext.create('FinancialMobile.view.usuario.Login');
                    Ext.Viewport.add(p);
                    Ext.Viewport.setActiveItem(p);
                }
            });
    }
});