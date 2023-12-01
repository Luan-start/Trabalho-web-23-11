const apiUrl = "http://localhost:3000";
const $mensagemErro = $("#mensagemErro")
$mensagemErro.hide()

function cadastrarUsuario() {
    const nome = $("#nome").val();
    const email = $("#email").val();
    const senha = $("#senha").val();
    const perfil = $("#perfil").val();

    $.ajax({
        type: 'POST',
        url: `${apiUrl}/usuarios`,
        data: JSON.stringify({ nome, email, senha, perfil }),
        contentType: 'application/json',
        success: function () {
            window.location.href = "login.html";
        },
        error: function () {
            $mensagemErro.show()
            $mensagemErro.text("Ocorreu um erro! Tente novamente.");
        }
    });
}

function logar() {
    const email = $("#email").val();
    const senha = $("#senha").val();

    $.ajax({
        type: 'POST',
        url: `${apiUrl}/usuarios/login`,
        data: JSON.stringify({ email, senha }),
        contentType: 'application/json',
        success: function (token) {
            localStorage.setItem("token", token);
            window.location.href = "cadastro.html";
        },
        error: function () {
            $mensagemErro.show()
            $mensagemErro.text("Email ou Senha inválido!");
        }
    });
}
