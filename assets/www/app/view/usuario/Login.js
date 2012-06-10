Ext.define("FinancialMobile.view.usuario.Login", {
	extend : "Ext.Panel",
	alias: ['widget.loginpanel'],
	requires: ['Ext.form.Panel', 'Ext.form.FieldSet', 'Ext.field.Password'],

	config: {
		layout: 'vbox',
		items: [{
		            html:'<img src="./img/logo.png"/>',
		            flex: 1,
		            cls: 'login'
		        },{
		        	xtype: 'formpanel',
		        	flex: 2,
		        	items:[{
			            xtype: 'fieldset',
			            title: 'Acessar o Sistema',
	                    instructions: 'Entre com o usu&aacute;rio e senha de acesso ao Financial Mobile',
			            items: [{
			                        xtype         : 'textfield',
			                        name          : 'username',
			                        label         : 'Usu&aacute;rio',
			                        required      : true,
			                        clearIcon     : true
			                    },{
			                        xtype: 'passwordfield',
			                        name : 'password',
			                        label: 'Senha',
			                        required      : true,
			                        clearIcon     : true
			                   }]
			        }]	
		        },{
                    xtype: 'toolbar',
                    docked: 'bottom',
                    scrollable: {
                        direction: 'horizontal',
                        indicators: false
                    },
                    ui: 'light',
                    items: [
                        { xtype: 'spacer' },
                        {ui: 'decline', text: 'Cancelar', width: 100},
                        { ui: 'confirm', text: 'Entrar' , width: 100, action: 'entrar'}
                    ]
                }
		    ]
		}
});