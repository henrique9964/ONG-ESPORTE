// ARQUIVO: assets/js/modules/templateGenerator.js

/**
 * Módulo para gerar templates HTML via JavaScript (Template Strings).
 */

// Template de Sucesso do Cadastro
export function successTemplate(nome) {
    return `
        <section class="feedback-success container">
            <h2 style="color: green;">Parabéns, ${nome}!</h2>
            <p>Seu cadastro na **ESPORTE SALVA VIDAS** foi um sucesso.</p>
            <p>Em breve entraremos em contato para formalizar seu apoio ou voluntariado.</p>
            <div style="margin-top: 20px;">
                <a href="#" class="btn-cta" onclick="window.location.reload()">Voltar para a Página Inicial</a>
            </div>
        </section>
    `;
}

// Template de Erro/Alerta (exemplo)
export function errorTemplate(mensagem) {
    return `
        <section class="feedback-error container" style="border: 1px solid red; padding: 20px;">
            <h2>Atenção!</h2>
            <p>Ocorreu um erro: ${mensagem}</p>
        </section>
    `;
}