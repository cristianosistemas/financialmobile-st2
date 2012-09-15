Ext.define("FinancialMobile.view.manter.DespesaReceita", {
	extend : "Ext.Panel",
	alias: ['widget.despesareceita'],
    requires: ['Ext.dataview.List', 'Ext.field.Hidden', 'Ext.field.Select', 'Ext.field.DatePicker', 'Ext.field.Number',
        'FinancialMobile.view.manter.Despesa', 'FinancialMobile.view.manter.Receita'],
	config: {
         layout: {
            type: 'card',
            animation: 'slide'
        },
		items:[{
            xtype: 'despesa',
            itemId: 'form-despesa'
        },{
            xtype: 'receita',
            itemId: 'form-receita'
        },{
            xtype: 'toolbar',
            docked: 'top',
            items: [
                { ui: 'back', text: 'Voltar', action: 'voltar'},
                { xtype: 'spacer'},
                {
                    xtype: 'segmentedbutton',
                    allowDepress: false,
                    items: [
                        { text: 'Despesa', pressed: true, action: 'despesa'},
                        { text: 'Receita', action: 'receita' }
                    ]
                },
                { xtype: 'spacer'},
                { ui: 'confirm', text: 'Salvar', action: 'salvar'}
            ]
        }]
	}
});