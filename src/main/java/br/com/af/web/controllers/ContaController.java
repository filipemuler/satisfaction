package br.com.af.web.controllers;

import static br.com.caelum.vraptor.view.Results.json;
import static com.google.common.collect.Lists.newArrayList;
import static org.apache.commons.lang3.math.NumberUtils.toInt;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.config.Paginator;
import br.com.af.satisfaction.entidades.Conta;
import br.com.af.satisfaction.entidades.Filial;
import br.com.af.satisfaction.entidades.Turno;
import br.com.af.satisfaction.entidades.Usuario;
import br.com.af.web.dto.ContaFormDTO;
import br.com.af.web.dto.ListaDTO;
import br.com.af.web.dto.SelectOptionDTO;
import br.com.caelum.vraptor.Consumes;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Result;
import com.google.common.collect.Lists;

import javax.inject.Inject;
import java.util.List;

/**
 * Created by filipe on 01/02/16.
 */
@Controller
public class ContaController {

    private Result result;
    private GenericDao<Conta> contaService;

    public ContaController() {
        // nada
    }

    @Inject
    public ContaController(Result result, GenericDao<Conta> contaService) {
        this.result = result;
        this.contaService = contaService;
    }

    @Get("/contas/form")
    public void form(){
        List<Conta> contas = this.contaService.findAll(Conta.class);
        ContaFormDTO dto = new ContaFormDTO(contas, newArrayList(Turno.values()));
        this.result.use(json()).withoutRoot().from(dto).include("contas", "turnos").serialize();
    }

    @Get("/contas/list")
    public void list(String page) {
        List<Conta> contas = this.contaService.findAll(Conta.class);
        ListaDTO<Conta> lista = new ListaDTO<>(contas);
        this.result.use(json()).withoutRoot().from(lista).include("lista").serialize();
    }

    @Consumes("application/json")
    @Post("/conta/salva")
    public void salva(Conta conta) {
        this.contaService.salvarConta(conta);
//        this.result.forwardTo(ContaController.class).form();
    }
}
