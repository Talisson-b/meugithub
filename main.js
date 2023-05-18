$(document).ready(function() {  
    const endpoint = 'https://api.github.com/users/Talisson-b'
    


fetch(endpoint)

.then(resposta => resposta.json() )
.then(data => {
    const avatar = data.avatar_url
    const login = data.login
    const seguidores = data.followers
    const seguindo = data.following
    const repositorios = data.public_repos
    const link = data.html_url
    const name = data.name
    $('#avatar').attr('src',avatar)
    $('#repositorios').text(repositorios)
    $('#seguidores').text(seguidores)
    $('#seguindo').text(seguindo)
    $('#user').text(`@${login}`)
    $('#link').attr('href',link)
    $('#name').text(name)


})

})

