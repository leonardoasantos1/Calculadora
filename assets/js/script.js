const resultadoElemento = document.getElementById('resultado');

function inserir(num) {
    resultadoElemento.textContent += num;
}

function voltar() {
    resultadoElemento.textContent = resultadoElemento.textContent.slice(0, -1);
}

function calcular() {
    const expressao = resultadoElemento.textContent;
    
    if (expressao) {
        try {
            // Avalia a expressão e exibe o resultado
            resultadoElemento.textContent = eval(expressao);
        } catch (erro) {
            // Se houver um erro, exibe uma mensagem de erro
            resultadoElemento.textContent = 'Erro na expressão!';
        }
    } else {
        // Se o display estiver vazio, exibe uma mensagem
        resultadoElemento.textContent = 'Nada para calcular!';
    }
}

function limpar() {
    resultadoElemento.textContent = '';
}