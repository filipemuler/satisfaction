package br.com.af.web.controllers;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.config.Paginator;
import br.com.af.satisfaction.entidades.Fluxo;
import br.com.caelum.vraptor.*;

import javax.inject.Inject;

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
        Paginator<Fluxo> paginator = this.fluxoService.findPaginator(Fluxo.class, toInt(page));
        this.result.use(json()).withoutRoot().from(paginator).
                include("results").serialize();
    }

    @Consumes("application/json")
    @Post("/fluxo/salva")
    public void salva(Fluxo fluxo){
        this.fluxoService.persist(fluxo);
    }
}
