const arr = [1,2,3,4];///Array e seus métodos

arr.push(7);
arr.pop();

console.log(arr);
//////////////////////////////////////////////
const obj= {a:1, b:5, c:10}/////////OBJECTO

obj.c = 102020


console.log(obj);

delete obj.c //apagando o atributo c do nosso objecto

console.log(obj)


const arei = [1,2,2,3,4,5,6,78,90,22334]


arei.pop();



arei.push(102)
console.log(arei)
//////////////////////////////////////This///////////////////////////////
const obj = {
    thisLocal: function(){
        const thisLocal = (() => console.log(this))
    ()
    console.log(thisLocal)
    }
}
obj.thisLocal()
///////////////////////////////////IIFE/////////////////////////////////////////////////////////777////////
const resultado = (function (){
    const meuNome = "Romeu";
    return meuNome;
})()

console.log(resultado)
////////////////////////////////FOR OF ///////////////////////////////////////////////////////////
const provincias = ["Luanda", "Benguela", "Huambo", "Zaire", "Cunene"]

let provinc;

for(provinc of provincias){
    console.log(provinc + " é uma província de Angola")
}

const str = "Romeu Cajamba";

for(let s of str){
    console.log(s)
}

const rom = "Romeu Tomas cajamba"

for(let strin of rom){
    console.log(strin.toUpperCase())
}


const lista = ["Romeu", "Tomas", "Cajamba"]

let nomes;

for(nomes of lista){
    console.log(nomes.toUpperCase() + " meu nome")
}

const meusCarros = ["Ferrari", "Mercedez", "Jetour"]

for(let car of meusCarros){
    console.log(car + " meu carro")
}

const meusJogos = ['ResidentEvil', 'Pro2023', 'Moto', 'Asphalto', 'Basketbol']

for(let jogos of meusJogos){
    if(jogos=='ResidentEvil'){
        console.log('Meu jogo de Zumbi')
    }
    if(jogos=='Pro2023'){
        console.log("Meu jogos de fotebol")
    }
    if(jogos=='Moto'){
        console.log("Meu jogo de corrida de moto")
    }
    if(jogos=='Asphalto'){
        console.log("Meu jogo de corrida de moto")
    }
    if(jogos=='Basketbol'){
        console.log("Meu jogo de BasqueteBol")
    }
    
}
class minhaClasse {
    construtor(nome, anoAtual, idade, hobbies){ 
        this.nome = "Romeu"; this.anoAtual = 2023; this.idade = 24; this.hobbie = "programação Full Stack"
    }}
     console.log(minhaClasse)

     class carro{
        construtor(nomeCarro, ano)
        {this.nomeCarro = carro;
         this.ano = ano
        }
    } 
    const carro1 = new carro("Ferrai", 2026) 
    const carro2 = new carro("Mercedes", 2025) 
    console.log(carro1, carro2)

    class romeu {
        constructor(nomeCompleto, anoNascimento, profissao, hobbies, amor, objectovos){
            this.nomeCompleto = "Romeu Tomás Cajamba";
            this.anoNascimento = 1999;
            this.profissao = "Professor";
            this.hobbies = "Desenvolvimento de web sites";
            this.objectovos = "Enginheiro de Software";
        }
    }
    
    console.log(romeu)
    /////////////////////////////////////////////////////CallBack//////////////////

//funções passada a outra função como argumento, que então é invocada  dentro da função externa para completar um tipo de rotina.

const saudacao = (nome) => alert("Olá " + nome);

const processaUsuario = (callback) => {
    const nome = prompt("Digite seu nome: ");
    callback(nome)
}
processaUsuario(saudacao);


const suadacaones = (meuNome) => alert("Olá tudo bem " + meuNome);

const usuario = (callback)=>{
    const nome = prompt("Insere o teu nome de usuario: ")
    callback(nome);
}

const funcao1 = (meuNome) => {
    alert("Seja Bem_Vindo " + meuNome)
}

const funcao0 = (callback) =>{
    const nome = prompt("Digita o nome de usuário: ");

    callback(nome);
}

funcao0(funcao1);

const funcao4 = (myName) =>{
    alert("Seja Bem-vindo " + myName);
}

const funcao2 = (callback) =>{
    const nome = prompt("Digite o teu nome: ")
    callback(nome);
}
funcao2(funcao4);
///////////////////////////////////////////
const arrow = e => alert("Vai acontecer um evento de " + e.type)

window.addEventListener('click', arrow);


console.log(resultado);*/

const mult = (y, x) => y * x
const div = (y, x) => y / x
const soma = (y, x) => y + x
const sub = (y, x) => y - x

const calcular = (y, x, calculo) => calculo(y, x)
const result = calcular(20, 340, soma)

console.log(result)
//////////////////////////////////////////////////////////////////
const arrE = [12, 0, 9, 19];

const arrNew = arrE.map( x => x + x)// O 'x' representa os numeros no arr.

console.log(arrNew)


const ari = [12334, 1123, 12];

const ar = ari.map(o => o * 123309)

console.log(ar)
//////////////////////////////////////////////////////////Heranças/////////////////////////////////////////

class dev {
    constructor(nome, idade, linguagem){
        this.nome = nome;
        this.idade = idade;
        this.linguagem = linguagem;
    }

    saudacao(){
        console.log(`Olá eu sou desenvolvedor Full Stack trabalho com ${this.linguagem} estou com ${this.idade} anos e meu nome é ${this.nome} \n\n`)
    }
}

const newClass =  new dev("Romeu Cajamba", 24, "Javascript-Python-Mysql")

console.log(newClass);
newClass.saudacao();
////////////////////////////////////////////////////////////////////////////////////////////////////
class Dev {
    constructor(nomeCompleto, idade, LinguagensPrincipais){
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.LinguagensPrincipais = LinguagensPrincipais
    }
    ola(){
        console.log(`Olá eu sou o ${this.nomeCompleto} sou devsenvolvedor Full Stack, trabalho com ${this.LinguagensPrincipais} estou com ${this.idade} anos`);
        
    }
}
const dev = new Dev("Romeu_Cajamba", 24, "Javascript_Python");

console.log(dev);
dev.ola();
/////////////////////A palavra extends indica que a classe que anterior é uma herança da classe que vem ou posterior/////////////////////////////////////////////
////////////////////As classes a baixo vão herdar oou pertencer na classe pai a classe de cima.
class frontend extends Dev {
    constructor(nomeCompleto, idade, Linguagem, farmeWork){
        super();
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.Linguagem = Linguagem;
        this.farmeWork = farmeWork
    }
    hii(){
        console.log(`Olá eu sou o ${this.nomeCompleto} sou devsenvolvedor Full Stack, trabalho com ${this.Linguagem}  e uso o ${this.farmeWork}estou com ${this.idade} anos`);
        
    }
}
const devl = new frontend("Romeu_Cajamba", 24, "HTML5_CSS3_Javascript", "React");

console.log(devl);
devl.hii();
///////////////////////////////////////////////////////A classe filha backEnd/////////////////////////////////////////////////////
class Backend extends Dev {
    constructor(nomeCompleto, idade, LinguagensPrincipais, BaseDados){
        super();
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.LinguagensPrincipais = LinguagensPrincipais;
        this.BaseDados = BaseDados
    }
    hello(){
        console.log(`Olá eu sou o ${this.nomeCompleto} sou devsenvolvedor Full Stack, trabalho com ${this.LinguagensPrincipais} e ${this.BaseDados} estou com ${this.idade} anos `);
        
    }
}
const devLO = new  Backend("Romeu_Cajamba", 24, "Java_Python", "MSQL");

console.log(devLO);
devLO.hello();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class dev {
    constructor(nome, idade, lingaugens){
        this.nome = nome;
        this.idade = idade;
        this.lingaugens = lingaugens
    }
    saudacao(){
        console.log(`Olá eu sou o ${this.nome} estou com ${this.idade} anos, trabalho com ${this.lingaugens}`)
    }
}
const Dev = new dev("Romeu_Cajamba", 24, "Javascript_Java_Python_Sql")
Dev.saudacao();
////////////////////////////////////////////////
class frontEnd extends dev{
    constructor(linguagens,frameWork){
        super();
        this.linguagens = linguagens;
        this.frameWork = frameWork;

    }
    hello(){
        console.log(`No front-end trabalho com ${this.linguagens} e ${this.frameWork}.`)
    }
}
const front = new frontEnd("HTML5_CSS3_JAVASCRIPT", "React")
front.hello()
///////////////////////////////////////////////////////////////////////
class backEnd extends dev{
    constructor(linguagem, bancoDados){
        super();
        this.linguagem = linguagem;
        this.bacoDados = bancoDados
    }
    hi(){
        console.log(`No back-end eu trabalho com ${this.linguagem} e para o banco de dados uso ${this.bancoDados}.`)
    }
}
const back = new backEnd("Java_Python", "Sql")
back.hi()
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class dev {
    constructor(nome, idade, linguagem, tipoDev){
        this.nome = nome;
        this.idade = idade;
        this.linguagem = linguagem;
        this.tipoDev = tipoDev;
    }
    saudacao(){
        console.log(`olá eu sou ${this.nome} estou com ${this.idade} trabalho com ${this.linguagem} sou ${this.tipoDev}.`)
    }
}
const dev1 = new dev("Romeu", 24, "Javascript_Java_Python", "Full Stack")
console.log(dev1);
dev1.saudacao()

class frontend extends dev {
    constructor(nome, idade, linguagem, frameWork, tipoDev){
        super(nome, idade, linguagem, tipoDev);
        this.frameWork = frameWork;
    }
}
const front = new frontend("Tomás", 24, "Javascript", "React", "Front-end")
console.log(front)
front.saudacao();

class backend extends dev {
    constructor(nome, idade, linguagem, baseDados, tipoDev){
        super(nome, idade, linguagem, tipoDev);
        this.baseDados = baseDados;
    }
}
const back = new backend("Cajamba", 24, "Python", "MySql", "Back-end")
console.log(back);
back.saudacao()
////////////////////////////////////////////
const nome = "Romeu"
const idade = 2023 - 1999

const pessoa = "Olá eu sou "+ nome+ "\ne estou com "+ idade


const humano = "Eu sou "+ nome+ "\ne estou com "+ (2023-1999)
console.log(pessoa)
console.log(humano)
////////////////////////Tamplate String///////////////////////////////////
const name = "Cajamba"

const ser = `Eu sou ${name}. \ne estou com ${idade}.`
console.log(ser)


//Prototipos de objectos ou prototype/////
//JS é uma linguagem orientada a prototipos não a objectos////

const animais = {
    tipo: 'animal',
    som: ' Fez um som',
    speak(){
        console.log(this.som);
    }
}
console.log(animais)
animais.speak();

const gato = {
    tipo: 'animal',
    som: 'miuauuu'
}

Object.setPrototypeOf(gato, animais);
gato.speak();

const gatoMau = {
    tipo: 'gatoRaivoso',
    miouForte:  function() {
        console.log(this.som.toUpperCase());
    } 
}
Object.setPrototypeOf(gatoMau, gato);
///ou////
Object.getPrototypeOf(gato)
gatoMau.speak()



animais.__proto__
gatoMau.__proto__
gato.__proto__.__proto__
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class dev = function(nome, idade, linguagem, tipoDev) {
        this.nome = nome;
        this.idade = idade;
        this.linguagem = linguagem;
        this.tipoDev = tipoDev;
       
        this.saudacao = function(){
        console.log(`olá eu sou ${this.nome} estou com ${this.idade} trabalho com ${this.linguagem} sou ${this.tipoDev}.`)
    }
}
//const dev1 = new dev("Romeu", 24, "Javascript_Java_Python", "Full Stack")
//console.log(dev1);
//dev1.saudacao()

const frontend = function(nome, idade, linguagem, frameWork, tipoDev) {
    const newDev = new dev(nome, idade, linguagem, "frontend")
    newDev.frameWork = frameWork;
    Object.setPrototypeOf(this, newDev) //o asetprototypeOf vai pegar o newDev e inserir ao this, é uma atribuiçao de objecto
}

const backend = function(nome, idade, linguagem, baseDados, tipoDev) {
    const newDev = new dev(nome, idade, linguagem, "backend")
    newDev.baseDados = baseDados;
    Object.setPrototypeOf(this, newDev)    
}
const back = new backend("Cajamba", 24, "Python", "MySql", "Back-end")
const front = new frontend("Tomás", 24, "Javascript", "React", "Front-end")
console.log(front)
console.log(back);
front.saudacao();
back.saudacao();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Dev = function(nome, idade, principalLinguagem, tipodeDev) {
    this.nome = nome;
    this.idade = idade;
    this.principalLinguagem = princilpalLinguagem;
    this.tipodeDev = tipodeDev;

    this.saudacao = function() {
        console.log(`oi! sou dev ${this.tipodeDev}, trabalha com ${this.principalLinguagem} e me chamo ${this.nome}`);
    }
}
const FrontEndDev = function(nome, idade, principalLinguagem, framework){
    const newDev = new Dev(nome, idade, principalLinguagem, "FrontEndDev")
    newDev.framework = framework;
    Object.setPrototypeOf(this, newDev);
}

const backEndDev = function(nome, idade, principalLinguagem, baseDedados) {
    const newDev = newDev Dev(nome, idade, principalLinguagem, "BackendDev");
    newDev.baseDedados = baseDedados;
    Object.setPrototypeOf(this, newDev);
}
const frontend1 = new FrontEndDev("Romeu", "35", "Javascript", "React");
const backend1 = new BackendDev("Cajamba", "30", "Python", "SQL")
frontend1.saudacao();
backend1.saudacao();

console.log('TESTE')
///////////////////////////////////////////////////////////////////////////////////////////////
const dev = function(nome, idade, tipodedev){
    this.nome = nome;
    this.idade = idade;
    this.tipodedev = tipodedev;

    this.saudacao = function(){
        console.log(`oi eu sou ${this.nome} estou com ${this.idade} e eu faço ${this.tipodedev}`)
    }

}

const Frontend = function(nome, idade, tipodedev, framework){
    const newDev = new dev(nome, idade, tipodedev, "frontend")
    newDev.framework = framework;
    Object.setPrototypeOf(this, newDev); 
}

const Backend = function(nome, idade, tipodedev, baseDados){
    const newDev = new dev(nome, idade, tipodedev, "Backend")
    newDev.baseDados = baseDados;
    Object.setPrototypeOf(this, newDev); 
}

const frontend2 = new Frontend("Romeu", 24, "Frontend", "React");
const Backend2 = new Backend("Cajamba", 25, "Backend", "SQL");

frontend2.saudacao();
Backend2.saudacao();
////Temos uma função construtora de promise, uma função construtora constroi um objecto.
//promise é um objecto que é construido usando a função construtora de promise
//O resolve e o reject são padrao da nosaa função, mas tem caso que posso usar apenas uma delas.
 /*const umaPromessa = new Promise((resolve, reject) =>{
    let soma = 1 + 3
    if(soma === 2){
        resolve("Tudo certo")
    } else{
        reject("deu ruím")
    }
 })

 console.log("esperando a promise")

 umaPromessa.then((resultado) =>{
    console.log(`valor do then: ${resultado}`)
 }).catch((erro)  => {
    console.error(`valor do catch ${erro}`)
 }).finally(() => {
    console.log("Independentemente do resultado estarei sempre aqui")
 })
 const construtorPromise = new Promise((resolve, reject) =>{
    let mult = 2 * 2
    if(mult === 4){
        resolve("Deu certo")
    }else{
        reject("Deu ruím")
    }
 })

 console.log("Esperando.....")

 construtorPromise.then((resultado) =>{
    console.log(`O valor do then ${resultado}`)
 }).catch((erro) =>{
    console.error(`O catch ${erro}`)
 }).finally(() =>{
    console.log("Estarei aqui apesar dos apesares!")
 })*/
 const minhapromessa = new Promise((resolve, reject) =>{
    let sub = 2 - 1;
    if(sub === 1){
        resolve("Deu certo, pode passar");
    }else{
        reject("Deu ruím")
    }
 })

 minhapromessa.then((resultado) => {
    console.log(`O valor do then deu ${resultado}`)
 }).catch((erro) =>{
    console.error(`O valor do catch ${erro}`)
 }).finally(() =>{
    console.log("Não importa o que acontecer estaremos sempre juntos")
 })
 //Diferença entre promise all e promise race
const promise1 = new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Promise 1 resolvida"), 1000);
});

const promise2 = new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Promise 1 resolvida"),5000);
});

const promise3 = new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Promise 1 resolvida"), 100);
});
///promise all ele pega todas as promessas do servidor e entrega para o usuário.
Promise.all([
    promise1,
    promise2,
    promise3]).then((messages) =>{console.log(messages)})
//Promise race ele entrega para o usuário a primeira promessa que for resolvida não importa o local do servidor
Promise.race([
    promise1,
    promise2,
    promise3]).then((message) =>{console.log(message)})
////////////////////////////////////////////////////////////
const promessa1 = new Promise((resolvida, reject) =>{
    setTimeout(() =>{
        let soma = 1 + 3

        if (soma === 2) {
            console.log("Resultado certo")
        }else{
            console.log("Resultado errado")
        }
    },100)
});

const promessa2 = new Promise((resolvida, reject) =>{
   setTimeout(() =>{
        let soma = 1 + 1

        if (soma === 2) {
            console.log("Resultado certo")
        }else{
            console.log("Resultado errado")
        }
    },100)
});

const promessa3 = new Promise((resolvida, reject) =>{
    setTimeout(() =>{
        let soma = 1 + 3

        if (soma === 4) {
            console.log("Resultado certo")
        }else{
            console.log("Resultado errado")
        }
    },100)
});

Promise.all([promessa1, promessa2, promessa3]).then((messages) =>{console.log(messages)})

Promise.race([promessa1, promessa2, promessa3]).then((message) =>{console.log(message)})
//////////////////////////FUNÇÃO ASYNCRONA//////////////////////////////////////////////
const promessa1 = () => new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Resultado errado"),100)
});

const promessa2 = () => new Promise((resolve, reject) =>{
   setTimeout(() => resolve("Resultado certo"),100)
});

const promessa3 = () => new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Resultado errado"),100)
});

/////////////////////////////////////////////////////////////
const promiseAssincrone = async () => {
    const resultado1 = await promessa1();
    console.log("Pimeiro vai rodar isso antes de ir pra as promises")
    const resultado2 = await promessa2();
    const resultado3 = await promessa3();

    console.log(`Messagens:\n ${resultado1} \n ${resultado2} \n ${resultado3}`)
}

 promiseAssincrone();
 //////////////////////////////////////////////////////Outro exemplo//////////////////////////////
 const cem = () => new Promise((resolve, reject) =>{
    setTimeout(() => resolve("100 segundos"),100);
});

const quientos = () => new Promise((resolve, reject) =>{
    setTimeout(() => resolve("500 segundos"),100);
});

const mil = () => new Promise((resolve, reject) =>{
    setTimeout(() => resolve("1000 segundos"),1000);
});

const promiseAssincrona = async () => {
    const resultado1 = await cem();
    const resultado2 = await quientos();
    const resultado3 = await mil();

    console.log(`Messagens: \n${resultado1} \n${resultado2} \n${resultado3}`)
}

promiseAssincrona();
////////////AWAIT & THEN///////////////////////////////////
 const cem = () => new Promise((resolve, reject) =>{
    setTimeout(() => resolve("100 segundos"),100);
});

const quientos = () => new Promise((resolve, reject) =>{
    setTimeout(() => resolve("500 segundos"),100);
});

const mil = () => new Promise((resolve, reject) =>{
    setTimeout(() => resolve("1000 segundos"),1000);
});

const promiseAssincrona = async () => {
    const resultado1 = await cem().then((res) =>{
        console.log(res);
        return res;
    }).catch((erro) =>{
        console.log(erro);
    });
    const resultado2 = await quientos().then((res) =>{
        console.log(res);
        return res;
    }).catch((erro) =>{
        console.log(erro);
    });
    const resultado3 = await mil().then((res) =>{
        console.log(res);
        return res;
    }).catch((erro) =>{
        console.log(erro);
    });

    console.log(`Messagens: \n${resultado1} \n${resultado2} \n${resultado3}`);
}

promiseAssincrona();
const teste1 = () => new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Teste 1 fez 1 segundo"), 1000);
});

const teste2 = () => new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Test2 2 vai fazer mais tempo pra processar"), 5000);
});
const teste3 = () => new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Teste 3 vai fazer menos segundos do que os outros"), 100);
});

const awaitEThenECatch = async () => {
    const restultado1 = await teste1().then((resultdo) =>{
        console.log(resultdo);
        return resultdo;
    }).catch((err) =>{
        console.log(resultado);
    });
    const resultado2 = await teste2().then((resultado) =>{
        console.log(resultado);
        return resultado;
    }).catch((err) =>{
        console.log(err);
    });
    const resultado3 = await teste3().then((resultado) =>{
        console.log(resultado);
        return resultado;
    }).catch((err) =>{
        console.log(err);
    });

    console.log(`Mensagens: ${restultado1} ${resultado2} ${resultado3}`);
}

awaitEThenECatch();
/////////////////Try e CATCH/////////////////////////////////
const main = () =>{
    try{
        codigo
    }catch(error) {
        console.error(`Deu erro no código, e esse é o erro: \n\n${error}`);
    }finally {
        console.info(`Sempre vamos mostrar o valor independe do que aconteça`);
    }
}

main();
//////////////////////////////////////////////////////////////////////////////////////////
const principal = () =>{
    try{
        codigoerrado
    } catch(error){
        console.error(`Deu erro no código, o erro é: ${error}`);
    } finally {
        console.info(`Independemente do erro, tudo vai ficar bem`);
    }
}
principal();