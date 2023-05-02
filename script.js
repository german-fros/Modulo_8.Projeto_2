const imgAprovado = '<img src="imagens/aprovado.png">'
const imgReprovado = '<img src="imagens/reprovado.png">'
const notaMinima = parseFloat(prompt('Digite a nota mínima para aprovar:'))

const notas = []
const atividades = []

console.log(atividades)

addEventListener('submit', function(e) {
    e.preventDefault()

    adicionarLinha()
    calcMedia()
    atualizarMedia()
})

function adicionarLinha() {
    const nome = document.getElementById('nome')
    const notatxt = document.getElementById('nota')
    const nota = Number(notatxt.value)
    const conteudo = document.getElementById('conteudo')
    
    if (atividades.includes(nome.value)) {
        alert(`A atividade ${nome.value} já foi inserida`)
    } else {
        let linha = document.createElement('tr')
        linha.innerHTML = `<td>${nome.value}</td><td>${nota}</td>`
        linha.innerHTML += `<td>${nota >= notaMinima ? imgAprovado : imgReprovado}</td>`
        conteudo.appendChild(linha)
        notas.push(nota)
    }
    
    atividades.push(nome.value)

    nome.value = ''
    notatxt.value = '0'
    nome.focus()
}

function calcMedia() {
    let soma = 0

    for (i = 0; i < notas.length; i++) {
        soma += notas[i]
    }

    return soma / notas.length
}

function atualizarMedia() {
    const media = calcMedia()
    const status = document.getElementById('status')
    const spanAprovado = '<span class="status aprovado">Aprovado</span>'
    const spanReprovado = '<span class="status reprovado">Reprovado</span>'

    document.getElementById('media').innerHTML = `${media.toFixed(1)}`
    status.innerHTML = media >= notaMinima ? spanAprovado : spanReprovado
}