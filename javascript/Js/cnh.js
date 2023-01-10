function verificarIdade() {

    var nome = document.querySelector('input[name=nome]')
    var idade = document.querySelector('input[name=idade')

    if (nome.value.length == 0) {
        alert('Campo nome é obrigatório')
        return
    }

    if (idade.value.length == 0) {
        alert('Campo idade é obrigatório.')
        return

    }

    var idadeNum = parseInt(idade.value)


    if (idadeNum >= 80) {
        alert('Idade maxima ! Você não pode mais tirar sua CNH, desculpa !')
    }
    else if (idadeNum >= 18) {
        alert('Parabéns você pode tirar sua CNH.')
    } else if (idadeNum > 4) {
        alert('Você ainda não pode tirar sua CNH, desculpa !')
    } else {
        alert('Você não tem idade para ter CNH.')

    }


}