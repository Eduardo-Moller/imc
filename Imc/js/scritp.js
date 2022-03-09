let button= document.querySelector("button");
let tabela= document.querySelector("table");

function imc(){
    let nome = document.querySelector("#nome").value;
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;
    let imc= (peso/(altura*altura));
    imc=imc.toFixed(1);
    let tabela = document.querySelector("tbody");
    let linhatabela = document.createElement("tr");
    linhatabela.setAttribute("id", "linhatabela")
    let colunanome = document.createElement("td");
    let colunapeso = document.createElement("td");
    let colunaaltura = document.createElement("td");
    let colunaimc = document.createElement("td");
    colunanome.innerHTML=nome;
    colunapeso.innerHTML=peso;
    colunaaltura.innerHTML=altura;
    colunaimc.innerHTML=imc;    
    linhatabela.appendChild(colunanome);
    linhatabela.appendChild(colunapeso);
    linhatabela.appendChild(colunaaltura);
    linhatabela.appendChild(colunaimc);
    tabela.appendChild(linhatabela);
}   
