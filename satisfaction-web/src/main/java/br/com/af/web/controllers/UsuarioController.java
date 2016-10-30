package br.com.af.web.controllers;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Permissao;
import br.com.af.satisfaction.entidades.Usuario;
import br.com.af.web.dto.ListaDTO;
import br.com.caelum.vraptor.*;
import br.com.caelum.vraptor.view.Results;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.inject.Inject;
import java.util.List;

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
//		Paginator<Usuario> paginator = this.usuarioService.findPaginator(Usuario.class, toInt(page));
//		this.result.use(json()).withoutRoot().from(paginator).
//				include("results").serialize();
		List<Usuario> usuarios = this.usuarioService.findAll(Usuario.class);
		ListaDTO<Usuario> lista = new ListaDTO<>(usuarios);
		this.result.use(Results.json()).withoutRoot().from(lista).recursive().serialize();
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

	@Consumes("application/json")
	@Post("/usuario/salva")
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
