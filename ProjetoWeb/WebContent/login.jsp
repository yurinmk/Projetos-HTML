<%@page import="java.io.PrintWriter"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="styleLogin.css">
<title>Login</title>
</head>
<body>
	<form id="formLogin" action="Login" method="post">
		<div class="container">
			<div class="box">
				<h1>Login</h1>
				<div class="txt">
					<label>Email:</label> <input type="text"
						placeholder="Digite seu email" name="email" />
				</div>
				<div class="txt">
					<label>Senha:</label> <input type="password"
						placeholder="Digite sua senha" name="senha" />
				</div>
				<div>
					<div class="entrar">
						<input type="submit" value="Entrar" id="entrar" />
					</div>
					<p>${erro}</p>
				</div>
			</div>
		</div>
	</form>
</body>
</html>