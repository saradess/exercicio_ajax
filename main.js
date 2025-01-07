
document.addEventListener('DOMContentLoaded', function() {
    const nomeElement = document.querySelector('#nome');
    const userElement = document.querySelector('#user');
    const avatarElement = document.querySelector('#avatar');
    const repositoriosElement = document.querySelector('#repositorios');
    const seguidoresElement = document.querySelector('#seguidores');
    const seguindoElement = document.querySelector('#seguindo');
    const linkElement = document.querySelector('#link');

        fetch('https://api.github.com/users/saradess')
            .then(function(res) {
                if (!res.ok) {
                    throw new Error(`Erro ao buscar dados: ${res.status}`);
                }
                return res.json();
            })
            .then(function(json) {
                nomeElement.innerText = json.name || 'Nome não encontrado';
                userElement.innerText = json.login || 'Usuário não encontrado';
                avatarElement.src = json.avatar_url || 'https://via.placeholder.com/180x180';
                repositoriosElement.innerText = json.public_repos || 0;
                seguidoresElement.innerText = json.followers || 0;
                seguindoElement.innerText = json.following || 0;
                linkElement.href = json.html_url || '#';
            })
            .catch(function(error) {
                console.error('Erro ao buscar informações do usuário:', error);
                nomeElement.innerText = 'Erro ao carregar dados';
                userElement.innerText = '';
                avatarElement.src = 'https://via.placeholder.com/180x180';
                repositoriosElement.innerText = '-';
                seguidoresElement.innerText = '-';
                seguindoElement.innerText = '-';
                linkElement.href = '#';
            });
    });
