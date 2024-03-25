fetch('http://localhost:8080/lojas')
    .then(response => response.json())
    .then(data => {
        const lojasList = document.getElementById('lojas-list');
        data.forEach(loja => {
            const lojaDiv = document.createElement('div');
            lojaDiv.innerHTML = `
                <h2>${loja.nome}</h2>
                <a href="${loja.url}" target="_blank">
                    <img src="${loja.logo}" alt="${loja.nome}">
                </a>
                <p><strong>Descrição:</strong> ${loja.descricao}</p>
            `;
            lojasList.appendChild(lojaDiv);

            const imagem = lojaDiv.querySelector('img');
            imagem.addEventListener('click', () => {
                window.open(loja.url, '_blank');
            });
        });
    })
    .catch(error => console.error('Erro ao carregar as lojas:', error));
