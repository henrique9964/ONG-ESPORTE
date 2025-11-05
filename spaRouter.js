// ARQUIVO: assets/js/modules/spaRouter.js

/**
 * Módulo de Roteamento SPA Básico
 * Simula a navegação de uma Single Page Application carregando o conteúdo <main>
 * de outros arquivos HTML via Fetch API.
 */

// Seletor para a área de conteúdo principal (que será trocada)
const mainContent = document.querySelector('main');
// Seletor para a navegação principal
const navLinks = document.querySelectorAll('nav ul li a');

export function initRouter() {
    // 1. Adiciona um listener de clique a todos os links da navegação
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const url = link.getAttribute('href');

            // 2. Verifica se o link é interno e termina em .html
            if (url.endsWith('.html')) {
                e.preventDefault(); // Impede a recarga padrão da página!
                loadContent(url);
            }
        });
    });

    // Função para tratar o clique inicial do usuário (se necessário)
    window.addEventListener('popstate', () => {
        // Recarrega o conteúdo se o usuário usar o botão 'voltar' do navegador
        // loadContent(document.location.pathname, false); 
    });
}

/**
 * Carrega o conteúdo de uma URL e injeta no elemento <main>.
 * @param {string} url - O caminho para o arquivo HTML a ser carregado.
 */
function loadContent(url) {
    if (!mainContent) return;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar o conteúdo: ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            // 3. Manipulação do DOM: Extrair APENAS o conteúdo de <main>
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const newMain = doc.querySelector('main');

            if (newMain) {
                // 4. Substitui o conteúdo atual da main
                mainContent.innerHTML = newMain.innerHTML;

                // 5. Atualiza o título da página (Requisito bônus)
                document.title = doc.title;

                // 6. Atualiza a URL do navegador sem recarregar (SPA)
                history.pushState({}, doc.title, url);

                if (url.includes('cadastro.html')) {
                }
            } else {
                mainContent.innerHTML = '<h1>Erro 404: Conteúdo não encontrado.</h1>';
            }
        })
        .catch(error => {
            console.error('Falha ao carregar conteúdo:', error);
            mainContent.innerHTML = `<h1>Erro: ${error.message}</h1>`;
        });
}