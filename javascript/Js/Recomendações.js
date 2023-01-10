//api - Vamos supor que var recomendações - conseguimos pegar de uma API
var recomendamos = ['Para menores de 4 anos não possiu idade sulficiente para tirar a sua CNH',
    'Para menores de 18 anos ainda não podem tirar a CNH',
    'Para maiores de 18 anos podem tirar sua CNH',
    'Para maiores de 80 anos não podem mais tirar a CNH']

function listaRecomendações() {

    var ul = document.getElementById('recomendamos')
    ul.innerHTML = ''

    recomendamos.forEach(function (a) {

        var li = document.createElement('li')
        var text = document.createTextNode(a)
        li.appendChild(text)
        ul.appendChild(li)


    })
}