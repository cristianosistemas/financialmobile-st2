Ext.define("FinancialMobile.comp.MonthToolBar",{
	extend : 'Ext.Toolbar',
	alias : [ 'widget.monthtoolbar' ],
	requires: ['Ext.Toolbar','Ext.DateExtras'],
	config : {
		items: [
                {   ui: 'back', 
                	text: 'Anterior', 
                	flex: 1,
                	listeners:{
                		tap: function(btn){
                            var dataSel = Ext.Date.parse(this.up().down('#txData').getValue(), 'F/Y');
                            var dataNew = Ext.Date.add(dataSel, Ext.Date.MONTH, -1);
                            this.up().down('#txData').setValue(Ext.DateExtras.format(Ext.DateExtras.getFirstDateOfMonth(dataNew), 'F/Y'));
                            this.up().fireEvent('back', this.up());
                		}
                	}
                },
                { 	xtype: 'textfield', 
                	disabled: true, 
                	itemId: 'txData',
                	flex: 2,
                	inputCls: 'font_10'
                },
                { 	ui: 'forward', 
                  	text: 'Próximo', 
                  	flex: 1,
                  	listeners:{
                		tap: function(btn){
                            var dataSel = Ext.Date.parse(this.up().down('#txData').getValue(), 'F/Y');
                            var dataNew = Ext.Date.add(dataSel, Ext.Date.MONTH, 1);
                            this.up().down('#txData').setValue(Ext.DateExtras.format(Ext.DateExtras.getFirstDateOfMonth(dataNew), 'F/Y'));
                            this.up().fireEvent('next', this.up());
                		}
                	}
              	}
            ]
		},

	initialize: function() {
        var me = this;
        me.callParent();
		me.down('#txData').setValue(Ext.DateExtras.format(Ext.DateExtras.getFirstDateOfMonth(new Date()), 'F/Y'));
    },

    getFirstDate : function() {
        var me = this;
        var dataSel = Ext.Date.parse(this.down('#txData').getValue(), 'F/Y');
        return Ext.DateExtras.getFirstDateOfMonth(dataSel);
    },

    getLastDate : function() {
        var dataSel = Ext.Date.parse(this.down('#txData').getValue(), 'F/Y');
        return Ext.Date.getLastDateOfMonth(dataSel);
    }
});