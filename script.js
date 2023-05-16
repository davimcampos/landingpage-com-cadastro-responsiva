
let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#Lnome");
let validNome = false;
let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#Lusuario');
let validUsuario = false;
let senha = document.querySelector('#senha');
let labelSenha = document.querySelector("#Lsenha");
let validSenha = false;
let submitError = document.querySelector("#submitError");
let h1consulta = document.querySelector("#h1consulta");


let botao = document.querySelector(".btn");




nome.addEventListener('keyup', () => {
    if (nome.value.length < 3) {
        nome.setAttribute('style', 'border-bottom: 2px solid red');
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = 'nome *preencha corretamente.';
        validNome = false;
    }
    else {
        nome.setAttribute('style', 'border-bottom: 2px solid green');
        labelNome.setAttribute('style', 'color: green');
        labelNome.innerHTML = 'nome';
        validNome = true;
    }
})

usuario.addEventListener('keyup', () => {
    if (usuario.value.length < 6) {
        usuario.setAttribute('style', 'border-bottom: 2px solid red');
        labelUsuario.setAttribute('style', 'color: red');
        labelUsuario.innerHTML = 'usuário *é necessario no mínimo 6 caracteres.';
        validUsuario = false;
    }
    else {
        usuario.setAttribute('style', 'border-bottom: 2px solid green');
        labelUsuario.setAttribute('style', 'color: green');
        labelUsuario.innerHTML = 'usuário';
        validUsuario = true;
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length < 6) {
        senha.setAttribute('style', 'border-bottom: 2px solid red');
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'senha *é necessário no mínimo 6 caracteres.';
        validSenha = false;
    }
    else {
        senha.setAttribute('style', 'border-bottom: 2px solid green');
        labelSenha.setAttribute('style', 'color: green');
        labelSenha.innerHTML = 'senha';
        validSenha = true;
    }
})

function cadastrar() {
    if (validNome && validUsuario && validSenha) {
        window.location.href = 'consulta.html';
    }

    else {
        submitError.setAttribute('style', 'background-color: #f75f52');
        submitError.innerHTML = "*preencha todos os campos corretamente.";
    }

};

botao.addEventListener('click', () => {

    cadastrar();

});



function mostrarMenu() {
    let menuMobile = document.querySelector('.menu-responsivo');
    if (menuMobile.classList.contains('abrir')) {
        menuMobile.classList.remove('abrir');
    }
    else {
        menuMobile.classList.add('abrir');
    }
}

