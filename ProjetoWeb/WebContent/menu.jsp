<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="styleMenu.css">
<title>Insert title here</title>
</head>
<body>
	<form id="formMenu" action="MostrarUsuarios" method="post">
		<div class="container">
			<div class="box">
				<h1>Menu</h1>
				<div>
					<div class="cadastrar">
						<input type="submit" value="Cadastrar" formaction="cadastrar.jsp"/>
					</div>
					<div class="historico">
						<input type="submit" value="Lista de Usuários" />
					</div>
					<div class="sair">
						<input type="submit" value="Sair" formaction="login.jsp"/>
					</div>
				</div>
			</div>
		</div>
	</form>
</body>
</html>