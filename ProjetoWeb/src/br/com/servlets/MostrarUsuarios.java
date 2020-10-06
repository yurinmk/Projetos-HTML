package br.com.servlets;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class MostrarUsuarios
 */
@WebServlet("/MostrarUsuarios")
public class MostrarUsuarios extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setAttribute("usuarios", CadastroUsuServlet.mostrarUsuarios());
		RequestDispatcher rd = req.getRequestDispatcher("lista.jsp");
		rd.forward(req, resp);
	}

}
