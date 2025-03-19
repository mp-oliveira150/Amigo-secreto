let amigos = [];

function adicionarAmigo(){
    nomeAmigo = document.querySelector('input').value;
    if(nomeAmigo === " "){
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(nomeAmigo);
    limparCampo();
    listamigos();
}

function limparCampo(){
    nomeAmigo = document.getElementById('amigo').value = '';
}

function listamigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for(let i=0; i < amigos.length; i++){
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    document.querySelector('button-draw');
    if(amigos !== " "){
        let amigoAleatorio = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = amigos[amigoAleatorio];
        document.getElementById('resultado').innerHTML = amigoSorteado;
    }
}