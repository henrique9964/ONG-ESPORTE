// ARQUIVO: assets/js/modules/formValidator.js

import { successTemplate } from './templateGenerator.js'; // Importa o novo template

export function initValidation() {
    const form = document.querySelector('#cadastro-form');
    const mainContainer = document.querySelector('main.container'); // Captura o container principal

    if (!form || !mainContainer) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isFormValid = true;
        const inputs = form.querySelectorAll('input, select');
        const nomeInput = document.querySelector('#nome').value; // Pega o nome para personalizar a mensagem

        // Lógica de validação (mantida a mesma)
        inputs.forEach(input => {
            if (!input.validity.valid) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            // Lógica do Template JS:

            // 1. Gera o HTML de sucesso
            const successHtml = successTemplate(nomeInput);

            // 2. Substitui todo o conteúdo dentro do <main class="container"> pelo template
            mainContainer.innerHTML = successHtml;

            // 3. (Opcional) Adicionar o scroll para o topo
            window.scrollTo({ top: 0, behavior: 'smooth' });

        } else {
            alert('Por favor, preencha todos os campos obrigatórios e corrija os dados.');
        }
    });
}