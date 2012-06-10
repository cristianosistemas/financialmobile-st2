Ext.define('FinancialMobile.controller.DespesaReceita', {
    extend: 'Ext.app.Controller',
    requires: ['FinancialMobile.utils.UsuarioUtils', 'Ext.data.proxy.JsonP', 'FinancialMobile.utils.Messages'],

    config: {
        refs: {
        	despesaReceita: 'despesareceita',
        	mainview : 'mainviewport',
        	painel: 'painel'
        },
        control: {
            'despesareceita button[action=despesa]': {
                tap: 'despesa'
            },
            'despesareceita button[action=receita]': {
                tap: 'receita'
            },
            'despesareceita button[action=salvar]': {
            	tap: 'salvar'
            },
            'despesareceita button[action=voltar]': {
            	tap: 'voltar'
            }
        },
        stores: ['FinancialMobile.store.Usuario', 'FinancialMobile.store.Categoria', 'FinancialMobile.store.StatusParcela']
    },
    
    salvar: function(btn){
    	console.log(this.getDespesaReceita());
        if(this.getDespesaReceita().getActiveItem().getItemId() == 'form-despesa'){
            console.log('salvando despesa');
            this.salvarDespesa();
        }else if(this.getDespesaReceita().getActiveItem().getItemId() == 'form-receita'){
            console.log('salvando receita');
            this.salvarReceita();
        }
    },

    salvarDespesa: function(){
        console.log('salvando despesa');
        var parametros = this.getDespesaReceita().getActiveItem().getValues();
        Ext.apply(parametros, FinancialMobile.UsuarioUtils.apiParams);
        parametros.dataVencimento = Ext.Date.format(parametros.dataVencimento, 'Y-m-d');
        
        console.log(parametros);
        
        Ext.Viewport.setMasked({
            xtype : 'loadmask',
            message : 'Salvando Despesa...'
        });
        
        //verificar se esta executando no telefone, caso sim,
        //verificar se possui conexao com a internet, se sim salva no servidor,
        //se nao salva no banco do dispositivo móvel.
        //no final verificar/atualizar os custos a sincronizar
        //atualizar os custos mensais
        
        Ext.util.JSONP.request({
            url : Financial.SERVER + 'custo/salvar_alterar_jsonp',
            callbackKey : 'callback',
            params : parametros,
            scope : this,
            callback : function(success, result) {
                Ext.Viewport.setMasked(false);
                if (result.success) {
                    this.voltar();
                    FinancialMobile.Msg.info('Despesa salva com sucesso!');
                } else {
                    FinancialMobile.Msg.error('Erro ao salvar despesa!');
                }
            }
        });
    },

    salvarReceita: function(){
        console.log('salvando receita');
        var parametros = this.getDespesaReceita().getActiveItem().getValues();
        Ext.apply(parametros, FinancialMobile.UsuarioUtils.apiParams);
        parametros.dataEntrada= Ext.Date.format(parametros.dataEntrada, 'Y-m-d');
        
        console.log(parametros);
        
         Ext.Viewport.setMasked({
            xtype : 'loadmask',
            message : 'Salvando Receita...'
        });
        
        //verificar se esta executando no telefone, caso sim,
        //verificar se possui conexao com a internet, se sim salva no servidor,
        //se nao salva no banco do dispositivo móvel.
        //no final verificar/atualizar os custos a sincronizar
        //atualizar os custos mensais
        
        Ext.util.JSONP.request({
            url : Financial.SERVER + 'entrada/salvar_alterar_jsonp',
            callbackKey : 'callback',
            params : parametros,
            scope : this,
            callback : function(success, result) {
                Ext.Viewport.setMasked(false);
                if (result.success) {
                    this.voltar();
                    FinancialMobile.Msg.info('Receita salva com sucesso!');
                } else {
                    FinancialMobile.Msg.error('Erro ao salvar receita!');
                }
            }
        });
    },

    voltar: function(btn){
    	console.log('voltar');
    	this.getDespesaReceita().getActiveItem().reset();
    	this.getPainel().setActiveItem(0);
    },
    
    cancelar: function(btn){
    	console.log('cancelar');
    	this.voltar(btn);
    },

    despesa: function(btn){
        this.getDespesaReceita().getLayout().getAnimation().setDirection('right');
        this.getDespesaReceita().setActiveItem(0);
    },
    receita: function(btn){
        this.getDespesaReceita().getLayout().getAnimation().setDirection('left');
        this.getDespesaReceita().setActiveItem(1);
    }
});