function irParaRegioes() {

    document.getElementById("regioes").scrollIntoView({
        behavior: "smooth"
    });

}


// Filtra os pontos turísticos pela região
function filtrarRegiao(regiaoEscolhida) {

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        const regiao = card.getAttribute("data-regiao");

        if (regiao === regiaoEscolhida) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// Mostra todos os pontos turísticos
function mostrarTodos() {

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        card.style.display = "block";

    });

}


// Abre a localização do ponto turístico no Google Maps
function abrirMapa(local) {

    const endereco =
        encodeURIComponent(local);

    const url =
        "https://www.google.com/maps/search/?api=1&query="
        + endereco;

    window.open(url, "_blank");

}


// Pesquisa pelo nome do destino
function pesquisarDestino() {

    const pesquisa =
        document
        .getElementById("pesquisa")
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(".card");

    cards.forEach(function(card) {

        const texto =
            card.innerText.toLowerCase();

        if (texto.includes(pesquisa)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}
document.getElementById("formAvaliacao").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;

    document.getElementById("resposta").innerHTML =
        "Obrigado pela sua opinião, " + nome + "! 🌎❤️";

    document.getElementById("formAvaliacao").reset();
});
// Abre a janela com os detalhes do destino
function abrirDetalhes(botao) {

    const card = botao.closest(".card");

    const titulo = card.querySelector("h3").textContent;
    const local = card.querySelector(".localizacao").textContent;
    const descricao = card.querySelector(".descricao-card").textContent;

    document.getElementById("modalTitulo").textContent = titulo;
    document.getElementById("modalLocalizacao").textContent = local;
    document.getElementById("modalDescricao").textContent = descricao;

    document.getElementById("modalDetalhes").style.display = "flex";
}

// Fecha a janela
function fecharDetalhes() {

    document.getElementById("modalDetalhes").style.display = "none";

}

// Fecha ao clicar fora da janela
document.getElementById("modalDetalhes").addEventListener("click", function(event) {

    if (event.target === this) {
        fecharDetalhes();
    }

});
// Cria o botão "Ver mais detalhes" em cada destino
document.querySelectorAll(".card").forEach(function(card) {
    console.log("Quantidade de cards encontrados:", document.querySelectorAll(".card").length);

    const descricao = card.querySelector(".descricao-card");

    if (!descricao) return;

    const botao = document.createElement("button");

    botao.className = "botao-detalhes";
    botao.textContent = "Ver mais detalhes";

    botao.onclick = function() {
        abrirDetalhes(this);
    };

    descricao.insertAdjacentElement("afterend", botao);

});