package br.com.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.com.modelo.CadastroUsu;

/**
 * Servlet implementation class Cadastro
 */
@WebServlet("/CadastroUsuServlet")
public class CadastroUsuServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private static CadastroUsu cadastrar;
	
	public static List<CadastroUsu> usuarios;

	public CadastroUsuServlet() {
		usuarios = new ArrayList<CadastroUsu>();
	}
	
	public static List<CadastroUsu> mostrarUsuarios() {
		//cadastrar = new CadastroUsu("namikoka", "yuri@yuri.com", "(83) 8 5566-0022", "R. teste", "123");
		return usuarios;
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		
		String nome = req.getParameter("nome");
		String email = req.getParameter("email");
		String telefone = req.getParameter("telefone");
		String endereco = req.getParameter("endereco");
		String senha = req.getParameter("senha");
		
		
		this.cadastrar = new CadastroUsu(nome, email, telefone, endereco, senha);
		
		boolean validacao = false;
		
		for(CadastroUsu x: usuarios) {
			if(x.getEmail().equals(email) || x.getTelefone().equals(telefone)) {
				validacao = true;
				break;
			}else {
				validacao = false;
			}
		}
		if(validacao) {
			req.setAttribute("erro", "Email/Telefone já cadastrado!");
			RequestDispatcher rd = req.getRequestDispatcher("cadastrar.jsp");
			rd.forward(req, resp);
		}else {
			usuarios.add(this.cadastrar);
			req.setAttribute("sucesso", "Usuário cadastrado com sucesso!");
			RequestDispatcher rd = req.getRequestDispatcher("cadastrar.jsp");
			rd.forward(req, resp);
		}

	}

}
