package br.com.af.web.controllers;

import static br.com.caelum.vraptor.view.Results.json;
import static javafx.scene.input.KeyCode.J;
import static org.apache.commons.lang3.math.NumberUtils.toInt;

import java.util.List;

import javax.inject.Inject;

import org.springframework.security.crypto.password.PasswordEncoder;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.config.Paginator;
import br.com.af.satisfaction.entidades.Permissao;
import br.com.af.satisfaction.entidades.Usuario;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.view.Results;

@Controller
public class UsuarioController {

	
	private Result result;
	private GenericDao<Usuario> usuarioService;
	private GenericDao<Permissao> permissaoService;
	private PasswordEncoder encoder;
	
	public UsuarioController() {
		// TODO Auto-generated constructor stub
	}
	
	@Inject
	public UsuarioController(Result result, GenericDao<Usuario> usuarioService, GenericDao<Permissao> permissaoService, 
			PasswordEncoder encoder) {
		this.result = result;
		this.usuarioService = usuarioService;
		this.permissaoService = permissaoService;
		this.encoder = encoder;
	}
	
	public void form(){
		//carrega o formulario de cadastro
		List<Permissao> permissoes = this.permissaoService.findAll(Permissao.class);
		this.result.include("permissoes", permissoes);
	}

//	@Path({"/usuario/list", "/usuario/list/{page}"})
	public void list(String page) {
		Paginator<Usuario> paginator = this.usuarioService.findPaginator(Usuario.class, toInt(page));
		this.result.use(json()).withoutRoot().from(paginator).
				include("results").serialize();
	}
	
	@Path("/usuario/edita/{usuario.id}")
	public void edita(Usuario usuario){
		Usuario usuarioRecuperado = this.usuarioService.findById(usuario.getId(), Usuario.class);
		this.result.include("usuario", usuarioRecuperado).forwardTo(this).form();
	}
	
	@Path("/usuario/exclui/{usuario.id}")
	public void exclui(Usuario usuario){
		Usuario usuarioRecuperado = this.usuarioService.findById(usuario.getId(), Usuario.class);
		this.usuarioService.remove(usuarioRecuperado);
		this.result.forwardTo(this).list(null);
	}
	
	public void salva(Usuario usuario){
		if(usuario.getId()!=null){
			this.usuarioService.merge(usuario);
		}else{
			usuario.setSenha(this.encoder.encode(usuario.getSenha()));
			this.usuarioService.persist(usuario);	
		}
		
		this.result.forwardTo(this).list(null);
	}
}
