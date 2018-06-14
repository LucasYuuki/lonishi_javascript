var facts = [
  ['gabriel', 'endereço', 'av rio branco, 109', true],
  ['joão', 'endereço', 'rua alice, 10', true],
  ['joão', 'endereço', 'rua bob, 88', true],
  ['joão', 'telefone', '234-5678', true],
  ['joão', 'telefone', '91234-5555', true],
  ['joão', 'telefone', '234-5678', false],
  ['gabriel', 'telefone', '98888-1111', true],
  ['gabriel', 'telefone', '56789-1010', true],
];

var schema = [
    ['endereço', 'cardinality', 'one'],
    ['telefone', 'cardinality', 'many']
];

/*Verifica qual é a lista falsa e depois salva os três primeiros
componentes nas variaveis*/
for(var i = 0; i < facts.length; i++){
  if(facts[i][3] == false){
    var nome = facts[i][0];
    var schema = facts[i][1];
    var tel = facts[i][2];
}
}
/*Faz a comparação para verificar se tem alguma outra lista com os componentes
iguais para realizar o cancelamento*/
for(var i = 0; i < facts.length; i++){
  if(facts[i][0] == nome){
    if(facts[i][1] == schema){
      if(facts[i][2] == tel){
        if(facts[i][3] == true){
          facts[i][3] = false;
        }
      }
    }
  }
}

/*Verifica quais são a listas que tem o valor booleano true e verifica se é 
endereço ou telefone e o nome*/
for(var i = 0; i < facts.length; i++){

  if(facts[i][3] == true){

      if(facts[i][1] == facts[0][1]){
        if(facts[i][0] == facts[0][0]){
        var atual = facts[i];

      }
    }

      if(facts[i][1] == facts[0][1]){
        if(facts[i][0] == facts[1][0]){
        var atual1 = facts[i];
        }
      }
/*Se o esquema for telefone e verdadeiro, então ele exibe*/
      if(facts[i][1] == 'telefone'){
        console.log(facts[i])

    }

    }
    }
  //Mostra no console as listas endereços mais atuais
  console.log(atual);
  console.log(atual1);
