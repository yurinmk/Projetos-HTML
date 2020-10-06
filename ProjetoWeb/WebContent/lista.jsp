<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="styleLista.css">
<title>Insert title here</title>
</head>
<body>
	<table>
		<caption>Usuários cadastrados</caption>
		<thead>
			<th>Nome</th>
			<th>Email</th>
			<th>Telefone</th>
			<th>Endereço</th>
			<th>Senha</th>
		</thead>
		<c:forEach items="${usuarios}" var="usuario">
		<tbody>
			<tr>
				<td>${usuario.nome}</td>
				<td>${usuario.email}</td>
				<td>${usuario.telefone}</td>
				<td>${usuario.endereco}</td>
				<td>${usuario.senha}</td>
			</tr>
		</tbody>
		</c:forEach>
		<tfoot>
			<tr>
				<td colspan="5">Projeto Web II Prof. Carlos Barbosa Gomes Filho</td>
			</tr>
		</tfoot>
	</table>	
</body>
</html>