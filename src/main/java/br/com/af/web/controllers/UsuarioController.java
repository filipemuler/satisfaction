package br.com.af.web.controllers;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.*;
import br.com.af.web.dto.ListaDTO;
import br.com.af.web.dto.UsuarioFormDTO;
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
	private GenericDao<PerfilUsuario> perfilService;
	private GenericDao<Filial> filialService;
	private PasswordEncoder encoder;
	
	public UsuarioController() {
		// TODO Auto-generated constructor stub
	}
	
	@Inject
	public UsuarioController(Result result, GenericDao<Usuario> usuarioService, GenericDao<Permissao> permissaoService,
							 GenericDao<PerfilUsuario> perfilService, GenericDao<Filial> filialService, PasswordEncoder encoder) {
		this.result = result;
		this.usuarioService = usuarioService;
		this.permissaoService = permissaoService;
		this.perfilService = perfilService;
		this.filialService = filialService;
		this.encoder = encoder;
	}
	
	public void form(){
		List<PerfilUsuario> perfis = this.perfilService.findAll(PerfilUsuario.class);
		List<Filial> filiais = this.filialService.findAll(Filial.class);
		UsuarioFormDTO form = new UsuarioFormDTO(perfis, filiais);
		this.result.use(Results.json()).withoutRoot().from(form).include("perfis", "filiais").serialize();
	}

	public void list(String page) {
		List<Usuario> usuarios = this.usuarioService.findAll(Usuario.class);
		ListaDTO<Usuario> lista = new ListaDTO<>(usuarios);
		this.result.use(Results.json()).withoutRoot().from(lista).include("lista").serialize();
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
		this.result.nothing();
	}
}
