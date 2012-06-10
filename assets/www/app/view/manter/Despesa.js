Ext.define("FinancialMobile.view.manter.Despesa", {
    extend : "Ext.form.Panel",
    alias: ['widget.despesa'],
    requires: ['Ext.dataview.List', 'Ext.field.Hidden', 'Ext.field.Select', 'Ext.field.DatePicker', 'Ext.field.Number'],

    config: {
        items:[{
            xtype: 'fieldset',
            instructions: 'Entre com as informações da despesa',
            defaults: {
                required: true,
                labelAlign: 'left',
                labelWidth: '40%'
            },
            items: [{
                        xtype : 'hiddenfield',
                        name : 'idCusto',
                    },{
                        label : 'Descri&ccedil;&atilde;o',
                        name : 'descricaoGasto',
                        xtype         : 'textfield',
                        clearIcon     : true
                    },{
                        xtype: 'selectfield',
                        name: 'idCategoriaGasto',
                        label: 'Categoria',
                        valueField: 'idCategoria',
                        displayField: 'descCategoria',
                        placeHolder: 'Selecione...',
                        store: 'categoriaStore'
                    },{
                        xtype: 'datepickerfield',
                        name: 'dataVencimento',
                        label: 'Vencimento',
                        value: new Date(),
                        dateFormat: 'd/m/Y',
                        picker: {
                            yearFrom: 2000
                        }
                    },{
                        xtype: 'numberfield',
                        name: 'valorParcela',
                        label: 'Valor'
                    },{
                        xtype : 'selectfield',
                        label : 'Status',
                        name : 'idStatus',
                        valueField : 'id',
                        displayField : 'desc',
                        value : 1,
                        store : 'statusParcelaStore'
                    }
                ]   
            }
        ]
    }
});