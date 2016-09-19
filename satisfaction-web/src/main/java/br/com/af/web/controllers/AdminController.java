package br.com.af.web.controllers;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Conta;
import br.com.af.satisfaction.service.AdminService;
import br.com.caelum.vraptor.Result;

import javax.inject.Inject;

/**
 * Created by filipe on 18/09/16.
 */
public class AdminController {

    private Result result;
    private AdminService adminService;

    @Inject
    public AdminController(Result result, AdminService adminService) {
        this.result = result;
        this.adminService = adminService;
    }
}
