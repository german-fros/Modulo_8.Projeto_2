addEventListener('submit', function(e) {
    e.preventDefault()

    const nome = document.getElementById('nome')
    const notatxt = document.getElementById('nota')
    const nota = Number(notatxt.value)
    const conteudo = document.getElementById('conteudo')


    if (nota < 6) {
        let negativo = document.createElement('tr')
        negativo.innerHTML = `<td>${nome.value}</td><td>${nota}</td><td><img src="imagens/reprovado.png"></td>`
        conteudo.appendChild(negativo)

    } else {
        let positivo = document.createElement('tr')
        positivo.innerHTML = `<td>${nome.value}</td><td>${nota}</td><td><img src="imagens/aprovado.png"></td>`
        conteudo.appendChild(positivo)

    }

    nome.value = ''
    notatxt.value = '0'
    nome.focus()

    alert(`${soma}`)
    function status() {
        /*const res = document.getElementById('res')*/
    }
})