// criando uma calculadora
function calculadora(){
    //definindo as operações e pegando valor de entrada do usuario
    //usaremos o "\n"
    const operacao = Number(prompt('Escolha uma opção:\n 1 - soma (+)\n2 - subtração (-)\n3 - multiplicação (*)\n4 - divisão real (/)\n5 - divisão inteira(%)\n6 - potenciação(**)'))

    //verificando se a operação é valida 
    if (!operacao || operacao >=7) {
        alert('Erro - operação Invalida!');
        calculadora();
    } else{
        //definindo variaveis - todas as entradas devem ser tipo Number
        let n1 = Number(prompt('Insira o primeiro valor: '));
        let n2 = Number(prompt('Insira o segundo valor: '));
        let resultado;
        //verificando se as variaveis são validas
        if (!n1 || !n2) {
            alert('Erro - Parâmetros Invalidos!');
            calculadora();
        } else {
            //definindo as funções
            function soma() {
                resultado = n1 + n2;
                //mostrando o resultado usando template strings
                alert(`${n1} + ${n2} = ${resultado}`);
                //dando a opção de chamar uma nova operação
                novaOperacao();
            }
            function subtração () {
                resultado = n1 + n2
                //mostrando o resultado usando template strings
                alert(`${n1} + ${n2} = ${resultado}`);
                // dando a opção de chamar uma nova opereção
                novaOperacao();
            }
            function multiplicação(){
                resultado = n1 + n2;
                // mostrando o resultado usando template strings
                lert(`${n1} + ${n2} = ${resultado}`);
                // dando a opção de chamar uma nova opereção
                novaOperacao();
            }
            function divisaoreal(){
                resultado = n1 + n2;
                // mostrando o resultado usando template strings
                lert(`${n1} + ${n2} = ${resultado}`);
                // dando a opção de chamar uma nova opereção
                novaOperacao();
            }
            function divisaointeira(){
                resultado = n1 + n2;
                // mostrando o resultado usando template strings
                lert(`${n1} + ${n2} = ${resultado}`);
                // dando a opção de chamar uma nova opereção
                novaOperacao();
            }
            function potenciação(){
                resultado = n1 + n2;
                // mostrando o resultado usando template strings
                lert(`${n1} + ${n2} = ${resultado}`);
                // dando a opção de chamar uma nova opereção
                novaOperacao();
            }
            // nova operação
            function novaOperação() {
                let opcao = prompt('Deseja fazer outra operação\n 1 - sim\n 2 - não');
                if (opcao == 1){
                    calculadora();
                }else if (opcao == 2){
                    alert('Até Mais!')
                }else{
                    alert('Digite uma opção válida !');
                    novaOperação()
                }
            }
        }
    }
// escolhendo uma operação
// usando if && else 
if (operacao == 1){
    soma ();
}else if (operacao ==2){
    subtração();
}else if (operacao == 3){
    multiplicação();
}else if (operacao == 4){
    divisaoreal();
}else if (operacao == 5){
    divisaointeira();
}else if (operacao == 6){
    potenciação();
}
// usando switch case como alternativa (comentar um dois)
/*
switch (operacao){
case1:
    soma();
    break;

case2:
    subtração();
    break;

case3:
    multiplicação();
    break;

case4:
    divisaoreal();
    break;

case5:
    divisaointeira();
    break;

case6:
    potenciacao();
    break;
} */
}
calculadora();