package br.com.af.satisfaction.service;

import java.util.Date;

import javax.inject.Inject;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Movimentacao;
import br.com.af.satisfaction.entidades.MovimentacaoFluxo;
import br.com.af.satisfaction.entidades.bi.ConsolidadoContaDia;
import br.com.af.satisfaction.entidades.bi.ConsolidadoFluxoDia;

/**
 * Created by filipe on 01/09/16.
 */
public class ConsolidadoFluxoDiaChainHandler implements MovimentacaoChainHandler {

    private GenericDao<ConsolidadoFluxoDia> service;

    public ConsolidadoFluxoDiaChainHandler() {
    }

    @Inject
    public ConsolidadoFluxoDiaChainHandler(GenericDao<ConsolidadoFluxoDia> service) {
        this.service = service;
    }

    @Override
    public void handleMovimentacao(Movimentacao movimentacao) {

        for(MovimentacaoFluxo fluxo : movimentacao.getMovimentacoesFluxo()){
            ConsolidadoFluxoDia consolidadoFluxo = new ConsolidadoFluxoDia();
            consolidadoFluxo.setData(new Date());
            consolidadoFluxo.setFilialId(movimentacao.getFilial().getId());
            consolidadoFluxo.setFilialNome(movimentacao.getFilial().getNome());
            consolidadoFluxo.setFluxoId(fluxo.getFluxo().getId());
            consolidadoFluxo.setFluxoNome(fluxo.getFluxo().getNome());
            consolidadoFluxo.setFluxoQuantidade(fluxo.getQuantidade());

            this.service.persist(consolidadoFluxo);
        }

    }
}
