package login;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/Login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		System.out.println(">>>>" + req.getMethod());
		
		String login = req.getParameter("login");
		String senha = req.getParameter("senha");
		
		PrintWriter out = res.getWriter();
		
		req.setAttribute("login", login);
		
		if(login.equals("namikoka") && senha.equals("123")) {
			RequestDispatcher rd = req.getRequestDispatcher("bemvindo.jsp");
			//faz o redirecionamento passando atributos
			rd.forward(req, res);
		}else {
			RequestDispatcher rd = req.getRequestDispatcher("index.html");
			rd.forward(req, res);
		}
	}
}
