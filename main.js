$(document).ready(function() {  
    const endpoint = `https://api.github.com/user`
    const token = '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'

    // Defina o seu Personal Access Token aqui

fetch(endpoint, { headers: { Authorization: `Token ${token}`}})

.then(resposta => resposta.json() )
.then(data => {
    console.log(data)
    const avatar = data.avatar_url
    const login = data.login
    const seguidores = data.followers
    const seguindo = data.following
    const repositorios = data.public_repos
    const link = data.html_url
    const name = data.name

    console.log(name)
    console.log(seguidores)
    $('#avatar').attr('src',avatar)
    $('#repositorios').text(repositorios)
    $('#seguidores').text(seguidores)
    $('#seguindo').text(seguindo)
    $('#user').text(`@${login}`)
    $('#link').attr('href',link)
    $('#name').text(name)


})

})

