package br.com.af.web.controllers;

import static org.apache.commons.lang3.math.NumberUtils.toInt;

import java.util.List;

import javax.inject.Inject;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.config.Paginator;
import br.com.af.satisfaction.entidades.Permissao;
import br.com.af.satisfaction.entidades.Usuario;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Result;

@Controller
public class UsuarioController {

	
	private Result result;
	private GenericDao<Usuario> usuarioService;
	private GenericDao<Permissao> permissaoService;
	
	public UsuarioController() {
		// TODO Auto-generated constructor stub
	}
	
	@Inject
	public UsuarioController(Result result, GenericDao<Usuario> usuarioService, GenericDao<Permissao> permissaoService) {
		this.result = result;
		this.usuarioService = usuarioService;
		this.permissaoService = permissaoService;
	}
	
	public void form(){
		//carrega o formulario de cadastro
		List<Permissao> permissoes = this.permissaoService.findAll(Permissao.class);
		this.result.include("permissoes", permissoes);
	}

	@Path({"/usuario/list", "/usuario/list/{page}"})
	public void list(String page) {
		//TODO: tentar tirar isso daqui depois, estou dando include do jsp no modal, fazer o modal chamar o form.
		List<Permissao> permissoes = this.permissaoService.findAll(Permissao.class);
		this.result.include("permissoes", permissoes);
		
		Paginator<Usuario> paginator = this.usuarioService.findPaginator(Usuario.class, toInt(page));
		this.result.include("paginator", paginator);
	}
	
	public void salva(Usuario usuario){
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		usuario.setSenha(encoder.encode(usuario.getSenha()));
		this.usuarioService.persist(usuario);
		
		this.result.forwardTo(this).list(null);
	}
}
