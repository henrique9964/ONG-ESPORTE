// ARQUIVO: assets/js/app.js

import { initValidation } from './modules/formValidator.js';
import { initRouter, loadContent } from './modules/spaRouter.js'; // Importação do novo módulo!

function initializeAppFeatures() {
    // 1. Inicializa a validação do formulário
    initValidation();

    // Você pode chamar outras funções aqui, como a lógica do menu mobile, etc.
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializa o roteador. O roteador agora controla a navegação.
    initRouter(initializeAppFeatures);

    // 2. Inicializa as funcionalidades na primeira carga da página
    initializeAppFeatures();

});