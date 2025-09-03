function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag img
    const img = document.querySelector("#profile img")
    // substituir a imagem
    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/vitor-oculos.png')
        img.setAttribute('alt', 'Foto de rosto de Vitor, usando óculos de sol, olhando para a câmera')

    } else {
        img.setAttribute('src', './assets/vitor.jpg')
        img.setAttribute('alt', 'Foto de rosto de Vitor, usando óculos de grau, olhando para a câmera')
    }
}