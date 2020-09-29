<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<div align="center">
		<p>Seja Bem-Vindo Sr.
		<%-- maneira de fazer cod. java dentro de um arquivo .jsp --%> 
		<% 
			String login = (String) request.getAttribute("login");
			out.print(login);
		 %>
		</p>
	</div>
</body>
</html>