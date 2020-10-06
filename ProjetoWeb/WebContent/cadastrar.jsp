<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="styleCadastro.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.min.js"></script>
<title>Cadastro</title>
</head>
<body>
	<form action="CadastroUsuServlet" method="post">
		<div class="container">
			<div class="box">
				<h1>Cadastro</h1>
				<div class="txt">
					<label>Nome:</label> <input type="text"
						placeholder="Digite seu nome" name="nome" />
				</div>
				<div class="txt">
					<label>Email:</label> <input type="text"
						placeholder="Digite seu email" name="email" />
				</div>
				<div class="txt" name='txt'>
					<label>Telefone:</label> <input type="text"
						placeholder="Digite seu telefone" id="telefone" name="telefone"/>
					<script>
						$("#telefone").mask("(00) 0 0000-0000");
					</script>
				</div>
				<div class="txt">
					<label>Endereço:</label> <input type="text"
						placeholder="Digite seu endereço" name="endereco" />
				</div>
				<div class="txt">
					<label>Senha:</label> <input type="password"
						placeholder="Digite sua senha" name="senha" />
				</div>
				<div>
					<div class="cadastrar">
						<input type="submit" value="Cadastrar"/>
					</div>
					<div class="cancelar">
						<input type="submit" value="Cancelar" formaction="menu.jsp"/>
					</div>
					<p>${sucesso}</p>
					<p>${erro}</p>
				</div>
			</div>
		</div>
	</form>
</body>
</html>