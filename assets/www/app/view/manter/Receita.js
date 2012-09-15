Ext.define("FinancialMobile.view.manter.Receita", {
    extend : "Ext.form.Panel",
    alias: ['widget.receita'],
    requires: ['Ext.dataview.List', 'Ext.field.Hidden', 'Ext.field.Select', 'Ext.field.DatePicker', 'Ext.field.Number'],

    config: {
        items:[{
            xtype: 'fieldset',
            instructions: 'Entre com as informações da Receita',
            defaults: {
                required: true,
                labelAlign: 'left',
                labelWidth: '40%'
            },
            items: [{
                        xtype : 'hiddenfield',
                        name  : 'idEntrada',
                    },{
                        label      : 'Descri&ccedil;&atilde;o',
                        name       : 'descricao',
                        xtype      : 'textfield',
                        clearIcon  : true
                    },{
                        xtype: 'datepickerfield',
                        name: 'dataEntrada',
                        label: 'Data',
                        value: new Date(),
                        dateFormat: 'd/m/Y',
                        picker: {
                            yearFrom: 2000
                        }
                    },{
                        xtype: 'numberfield',
                        name: 'valorEntrada',
                        label: 'Valor'
                    }
                ]
            }
        ]
    }
});