package br.com.af.web.controllers;

import static br.com.caelum.vraptor.view.Results.json;
import static org.apache.commons.lang3.math.NumberUtils.toInt;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.config.Paginator;
import br.com.af.satisfaction.entidades.Conta;
import br.com.af.satisfaction.entidades.Filial;
import br.com.af.satisfaction.entidades.Usuario;
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

    public void form(){
        List<Conta> contas = this.contaService.findAll(Conta.class);
        this.result.include("contas", contas);
    }

    @Get("/contas/list")
    public void list(String page) {
        Paginator<Conta> paginator = this.contaService.findPaginator(Conta.class, toInt(page));
        this.result.use(json()).withoutRoot().from(paginator).
                include("results").serialize();
    }

    @Get("/contas/list/contas")
    public void listContas() {
        List<Conta> contas = this.contaService.findAll(Conta.class);
        List<SelectOptionDTO> dto = Lists.newArrayList();
        for(Conta conta : contas){
            dto.add(new SelectOptionDTO(Long.toString(conta.getId()), null, conta.getNome()));
        }
        this.result.use(json()).withoutRoot().from(dto).serialize();
    }

    @Consumes("application/json")
    @Post("/conta/salva")
    public void salva(Conta conta) {
        System.out.println(conta.getNome());
        System.out.println(conta.getReferenteA());
        this.contaService.salvarConta(conta);

        this.result.forwardTo(ContaController.class).form();
    }
}
