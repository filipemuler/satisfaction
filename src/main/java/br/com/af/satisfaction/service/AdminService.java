package br.com.af.satisfaction.service;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Conta;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.filefilter.IOFileFilter;
import org.apache.commons.io.filefilter.TrueFileFilter;

import javax.inject.Inject;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.Collection;

/**
 * Created by filipe on 18/09/16.
 */
public class AdminService {

    private GenericDao<Conta> contaService;

    @Inject
    public AdminService(GenericDao<Conta> contaService) {
        this.contaService = contaService;
    }

    public void criarContas(){



    }

    private Conta CriarDespesa(){
        Conta despesa = Conta.criarDespesa("Despesa", null, null);
        contaService.persist(despesa);
        URL dados = Thread.currentThread().getContextClassLoader().getResource("dados");
        return null;
    }

    private Conta CriarReceita(){
        return null;
    }

    public static void main(String[] args) throws URISyntaxException, IOException {
        URL dados = Thread.currentThread().getContextClassLoader().getResource("dados");
        Collection<File> files = FileUtils.listFiles(new File(dados.toURI()), TrueFileFilter.INSTANCE, null);
        for(File file : files){
            System.out.println(FileUtils.readLines(file, "UTF-8"));
        }
    }

}
