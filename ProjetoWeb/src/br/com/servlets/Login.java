package br.com.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.com.modelo.CadastroUsu;

/**
 * Servlet implementation class Login
 */
@WebServlet("/Login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {

		String email = req.getParameter("email");
		String senha = req.getParameter("senha");

		PrintWriter out = res.getWriter();
		
		if (email.equals("teste") && senha.equals("123")) {
			RequestDispatcher rd = req.getRequestDispatcher("menu.jsp");
			rd.forward(req, res);
		} else {
			req.setAttribute("erro", "Email/Senha inválido(s). Tente novamente!");
			RequestDispatcher rd = req.getRequestDispatcher("login.jsp");
			rd.include(req, res);
		}
		
	}

}
