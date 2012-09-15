Ext.define('FinancialMobile.controller.Principal', {
    extend: 'Ext.app.Controller',
    requires: ['FinancialMobile.utils.NumberUtils','FinancialMobile.utils.DateUtils'],

    config: {
        refs: {
          painel: 'painel',
          monthtoolbar: 'painel monthtoolbar'
        },
        control: {
            'painel': {
            	show: 'buscarResumoMensal'
            },
            'painel button[action=principal]': {
                tap: 'principal'
            },
            'painel button[action=adicionar]': {
                tap: 'adicionar'
            },
            'painel button[action=sair]': {
            	tap: 'sair'
            },
            'monthtoolbar':{
              next: function(obj){
                console.log('evento de next disparado');
                this.buscarResumoMensal();
              },
              back: function(obj){
                console.log('evento de back disparado');
                this.buscarResumoMensal();
              }
            }
        },
        stores: ['FinancialMobile.store.Usuario', 'FinancialMobile.store.Categoria', 'FinancialMobile.store.StatusParcela']
    },
    
    principal: function(btn){
    	this.getPainel().getLayout().getAnimation().setDirection('right');
    	this.getPainel().setActiveItem(0);
    },

    adicionar: function(btn){
    	this.getPainel().getLayout().getAnimation().setDirection('left');
    	this.getPainel().setActiveItem(1);
    },
    
    sair: function(btn){
    	FinancialMobile.Msg.confirm('Confirma sair da aplicação?', function(btnid){
    		if(btnid !== 'cancel'){
    			console.log('saindo...'+btnid);
    			
    			uStore = Ext.data.StoreManager.lookup('usuarioStore');
    			uStore.removeAll();
    			uStore.sync();
    			
    			catStore = Ext.data.StoreManager.lookup('categoriaStore');
				catStore.removeAll();
				catStore.sync();
				
				 Ext.Viewport.removeAll();
				 var p = Ext.create('FinancialMobile.view.usuario.Login');
                 Ext.Viewport.add(p);
                 Ext.Viewport.setActiveItem(p);
    		}
    	});
    },

    buscarResumoMensal: function(painel) {
       console.log('Acao de exibir a lista');
       Ext.Viewport.setMasked({
        xtype : 'loadmask',
        message : 'Atualizando valores...'
       });
     
       var parametros = {
    		   dataInicial: FinancialMobile.utils.DateUtils.formatarDataMysql(this.getMonthtoolbar().getFirstDate()),
    		   dataFinal: FinancialMobile.utils.DateUtils.formatarDataMysql(this.getMonthtoolbar().getLastDate())  
       }
       
       Ext.apply(parametros, FinancialMobile.UsuarioUtils.apiParams);
       
       var receita_despesa_store = new Ext.data.Store({
    			fields : ['name', 'valor'],
    			scope : this,
    			proxy : {
    				type : 'jsonp',
    				url : Financial.SERVER
    						+ 'custo/buscarCustosEntradaAcumuladoPeriodo_jsonp',
    				reader : {
    					type : 'json',
    					rootProperty : 'data',
    					successProperty : 'success'
    				}
    			}
    		});
       
      receita_despesa_store.load({
  			scope : this,
  			params : parametros,
  			callback : function(data, obj2, obj3) {
  				var listaReceitasDespesas = this.getPainel().down('list[name="receitas_despesas_grid"]');
  				var graficoReceitaDespesas = this.getPainel().down('chart[name="chart_despesas_receitas"]');
  				
  				
  				Ext.Viewport.setMasked(false);

  				listaReceitasDespesas._store.setData(data);
  				
  				console.log('Data');
  				console.log(data);
  				graficoReceitaDespesas._store.setData(data);
  				graficoReceitaDespesas.redraw(true);
  			}
		  });
    }
});