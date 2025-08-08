function executarPush() {
  const array = ['🍎', '🍌'];
  array.push("🍇"); // Adiciona no final do array
  const resultado = array;
  document.getElementById('resultado-push').textContent = resultado;
}

function executarPop() {
  const array = ['🍎', '🍌', '🍇'];
  array.pop(); // Remove o último item do array
  const resultado = array;
  document.getElementById('resultado-pop').textContent = resultado;
}

function executarShift() {
  const array = ['🍎', '🍌', '🍇'];
  array.shift(); // Remove o primeiro elemento do array
  const resultado = array;
  document.getElementById('resultado-shift').textContent = resultado;
}

function executarUnshift() {
  const array = ['🍌', '🍇'];
  array.unshift("🍓"); // Adiciona no início do array
  const resultado = array;
  document.getElementById('resultado-unshift').textContent = resultado;
}

function executarIncludes() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.includes("🥝"); // Verifica um item dentro do array
  document.getElementById('resultado-includes').textContent = resultado;
}

function executarReverse() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.reverse(); // Inverte a ordem do array
  document.getElementById('resultado-reverse').textContent = resultado;
}

function executarSort() {
  const array = [3, 1, 4, 2, 11];
  const array2 = ["Brasil", "Argentina", "Noruega", "Italia"];

  const resultado = array.sort((a, b) => a - b); // Função que compara os números para definir sua ordem (crescente) | b - a para ordem decrescente
  document.getElementById('resultado-sort').textContent = resultado;
  const resultado2 = array2.sort(); // Ordena os itens do array em ordem crescente | .sort().reverse() = ordena em ordem decrescente
  document.getElementById('resultado-sort2').textContent = resultado2;
}

function executarSlice() {
  const array = ['🍎', '🍌', '🍇', '🍓'];
  const resultado = array;
  document.getElementById('resultado-slice').textContent = resultado;
}

function executarSplice() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-splice').textContent = resultado;
}


function executarIndexOf() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-indexof').textContent = resultado;
}

function executarJoin() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-join').textContent = resultado;
}

/* Loops de array */

function executarForEach() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.forEach(pegaItem => console.log(pegaItem));
  document.getElementById('resultado-foreach').textContent = resultado;
}

function executarMap() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.map(pegaItem => `✅ ${pegaItem}`);
  document.getElementById('resultado-map').textContent = resultado;
}

 function executarMapHTML() {
    const dispositivos = ['🎮', '🕹️', '💻'];
    const resultado = dispositivos.map((pegaItem, index)=> {
      return `<h1> Item ${index + 1} em promoção! </h1>
      <p> ${pegaItem} </p>`
    });
    document.getElementById('resultado-map-html').innerHTML = resultado.join('<br>');
  }

function executarFilter() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.filter(pegaItem => pegaItem === "🍎");
  document.getElementById('resultado-filter').textContent = resultado;
}

function executarFind() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.find(pegaItem => pegaItem === "🍇");
  document.getElementById('resultado-find').textContent = resultado;
}

function executarFindIndex() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = 'Resultado da operação findIndex';
  document.getElementById('resultado-findIndex').textContent = resultado;
}

function executarReduce() {
  const array = [1, 2, 3, 4];
  const resultado = array.reduce((totalAcumulado, valorAtual) => {
    return totalAcumulado + valorAtual
  }, 0);
  document.getElementById('resultado-reduce').textContent = resultado;
}

function executarEvery() {
  const array = [10, 20, 30, 40];
  const resultado = 'Resultado da operação every';
  document.getElementById('resultado-every').textContent = resultado;
}

function executarSome() {
  const array = ['🍎', '🍌', '🥝'];
  const resultado = 'Resultado da operação some';
  document.getElementById('resultado-some').textContent = resultado;
}

/* Encadeamento */

function executarEncadeamento() {
  const jogos = ['Zelda', 'Mario', 'Elden Ring', 'Fortnite', 'Minecraft'];
  const resultado = 'Resultado da operação encadeada';
  document.getElementById("resultado-encadeamento").textContent = resultado.join(', ') || 'Nenhum jogo encontrado';
}



// Declara um array
let nomes = ["Daniel", 1, "Fulano"]
console.log(nomes[2])
//Atuaizar o valor de um item do array
nomes[2] = "Maheus Bidu"
// Como saber tamanho de um array
nomes.length


// Arrow function
const ordernar = (a, b) => a - b // se for somente (exemplo) a - 2 -> (a)
// mesma coisa (abaixo)
function ordrnar (a) {
  return a - b
}