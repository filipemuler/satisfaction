package br.com.af.web.controllers;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.config.Paginator;
import br.com.af.satisfaction.entidades.Fluxo;
import br.com.af.web.dto.ListaDTO;
import br.com.caelum.vraptor.*;

import javax.inject.Inject;

import java.util.List;

import static br.com.caelum.vraptor.view.Results.json;
import static org.apache.commons.lang3.math.NumberUtils.toInt;

/**
 * Created by filipe on 24/07/16.
 */
@Controller
public class FluxoController {

    private Result result;
    private GenericDao<Fluxo> fluxoService;

    public FluxoController() {
        // nada
    }

    @Inject
    public FluxoController(Result result, GenericDao<Fluxo> fluxoService) {
        this.result = result;
        this.fluxoService = fluxoService;
    }


    @Get("/fluxo/list")
    public void list(String page) {
        List<Fluxo> fluxos = this.fluxoService.findAll(Fluxo.class);
        ListaDTO<Fluxo> lista = new ListaDTO<>(fluxos);
        this.result.use(json()).withoutRoot().from(lista).recursive().serialize();
    }

    @Consumes("application/json")
    @Post("/fluxo/salva")
    public void salva(Fluxo fluxo){
        this.fluxoService.persist(fluxo);
    }
}
