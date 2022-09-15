//CRIANDO OBJETOS QUE SÃO EXPLORADOS NA TABELA
var player01 = {nome: "Player 01", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
var player02 = {nome: "Player 02", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
var player03 = {nome: "Player 03", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
var jogadores = [player01, player02, player03];

//INVOCANDO AS FUNÇÕES CRIADAS
calculaPontos(player01);
calculaPontos(player02);
calculaPontos(player03);

exibeJogadoresNaTela(jogadores);

//CRIANDO AS FUNÇÕES DA TABELA

//FUNÇÃO QUE CALCULA O TOTAL DE PONTOS
//vitorias = 3 pontos / empates = 1 ponto / derrotas = -1 ponto
function calculaPontos (jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates - jogador.derrotas;
    return pontos; 
}

//FUNÇÃO QUE INSERE UMA LINHA NA TABELA COM TODAS AS INFORMAÇÕES DO JOGADOR
function exibeJogadoresNaTela(jogadores){
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>";
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        elemento += "</tr>";
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

//FUNÇÃO QUE INSERE UMA VITORIA E RECALCULA O TOTAL DE PONTOS AO SER CLICADO O BOTÃO
function adicionarVitoria(i){
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

//FUNÇÃO QUE INSERE UM EMPATE E RECALCULA O TOTAL DE PONTOS AO SER CLICADO O BOTÃO
function adicionarEmpate(i){
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

//FUNÇÃO QUE INSERE UMA DERROTA E RECALCULA O TOTAL DE PONTOS AO SER CLICADO O BOTÃO
function adicionarDerrota(i){
    var jogador = jogadores[i];
    jogador.derrotas++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}