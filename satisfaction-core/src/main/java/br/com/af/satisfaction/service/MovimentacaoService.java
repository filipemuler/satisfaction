package br.com.af.satisfaction.service;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.persistence.EntityManager;

import br.com.af.satisfaction.entidades.Movimentacao;
import br.com.af.satisfaction.entidades.bi.ConsolidadoMes;
import org.hibernate.Session;
import org.hibernate.transform.Transformers;

import java.math.BigDecimal;
import java.util.Date;

import static java.time.ZoneId.systemDefault;

/**
 * Created by filipe on 20/07/16.
 */
public class MovimentacaoService {

    private HandlerProducer handlerProducer;

    public MovimentacaoService() {
    }

    @Inject
    public MovimentacaoService(HandlerProducer handlerProducer, EntityManager em) {
        this.handlerProducer = handlerProducer;
    }

    public void criarMovimentacoes(Movimentacao movimentacao){
        for(MovimentacaoChainHandler handler : handlerProducer.getMovimentacoesHandlers()){
            handler.handleMovimentacao(movimentacao);
        }
    }

}
