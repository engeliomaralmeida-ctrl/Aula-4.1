// Função para calcular o maior valor entre dois números
function calcularMaiorValor() {
    // 1. OBTER OS VALORES DOS CAMPOS DE ENTRADA
    let valor1String = document.getElementById('valor1').value;
    let valor2String = document.getElementById('valor2').value;

    // 2. CONVERTER OS VALORES DE TEXTO PARA NÚMERO
    let valor1 = parseFloat(valor1String);
    let valor2 = parseFloat(valor2String);
    
    // 3. VERIFICAR SE OS VALORES SÃO NÚMEROS VÁLIDOS
    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, digite valores numéricos válidos em ambos os campos.");
        return;
    }

    // 4. CALCULAR O MAIOR VALOR ENTRE OS DOIS
    let maiorValor = Math.max(valor1, valor2);

    // 5. EXIBIR O RESULTADO NA PÁGINA
    document.getElementById('resultado').innerHTML = "O maior valor é: " + maiorValor;
}
