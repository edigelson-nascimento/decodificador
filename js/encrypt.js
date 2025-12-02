/*
   Lógica do Decodificador Hacker v2.0.0
   Desenvolvido por Edigelson Nascimento
*/

// --- SELEÇÃO DE ELEMENTOS DO DOM ---
const inputTexto = document.getElementById("caixamsg");
const outputTexto = document.getElementById("caixamsg2");
const btnCriptografar = document.getElementById("botao1");
const btnDescriptografar = document.getElementById("botao2");
const btnCopiar = document.getElementById("copiar");
const btnLimpar = document.getElementById("limpar");

// Seleção do elemento de ano para o rodapé
const spanAno = document.getElementById("ano-atual");

// --- REGRAS DE CRIPTOGRAFIA ---
// Mapeamento direto para uso eficiente
const chaves = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Mapeamento reverso para descriptografia
const chavesInversas = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

/*
    Função principal de Criptografia
    Substitui as vogais usando Regex para evitar substituições recursivas.
*/
function cript() {
    let texto = inputTexto.value;

    // Validação básica: converte para minúsculas
    texto = texto.toLowerCase();

    // Normalização: remove acentos para evitar erros na lógica simples
    texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    if (texto === "") {
        alert("> ERRO: O terminal de entrada está vazio.");
        return;
    }

    // Substituição segura usando função callback
    // Isso garante que 'a' virando 'ai' não tenha o 'i' substituído depois por 'imes' na mesma passada
    let textoCriptografado = texto.replace(/[eiaou]/g, (match) => {
        return chaves[match];
    });

    exibirResultado(textoCriptografado);
    console.log("> Dados criptografados com sucesso.");
}

/*
    Função principal de Descriptografia
    Faz o processo inverso da criptografia.
*/
function descript() {
    let texto = inputTexto.value;

    // Validação básica
    texto = texto.toLowerCase();

    if (texto === "") {
        // Tenta pegar da caixa de saída se a de entrada estiver vazia (feature "Descriptografar direto")
        if (outputTexto.value !== "") {
            texto = outputTexto.value;
            console.log("> Redirecionando fluxo: Entrada vazia, usando Output como fonte.");
        } else {
            alert("> ERRO: Nenhum dado encontrado para descriptografar.");
            return;
        }
    }

    // Substituição reversa global
    // A ordem no regex (enter|imes|...) garante que palavras maiores sejam encontradas primeiro se houvesse ambiguidade
    let textoDescriptografado = texto.replace(/enter|imes|ai|ober|ufat/g, (match) => {
        return chavesInversas[match];
    });

    exibirResultado(textoDescriptografado);
    console.log("> Dados restaurados com sucesso.");
}

/*
    Função auxiliar para exibir o resultado e focar na saída
*/
function exibirResultado(texto) {
    outputTexto.value = texto;
    outputTexto.focus();
}

/*
    Função para Copiar para a Área de Transferência
*/
function onCopy() {
    const textoParaCopiar = outputTexto.value;

    if (textoParaCopiar === "") {
        alert("> AVISO: Nada para copiar.");
        return;
    }

    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        // Feedback visual no botão
        const textoOriginal = btnCopiar.innerText;
        btnCopiar.innerText = "// COPIADO!";
        btnCopiar.classList.add("bg-hacker-green", "text-black");
        
        setTimeout(() => {
            btnCopiar.innerText = textoOriginal;
            btnCopiar.classList.remove("bg-hacker-green", "text-black");
        }, 2000);

        console.log("> Buffer copiado para a área de transferência.");
    }).catch(err => {
        console.error("> Falha ao copiar: ", err);
    });
}

/*
    Função para Limpar o Terminal (Inputs e Outputs)
*/
function onLimpar() {
    inputTexto.value = "";
    outputTexto.value = "";
    inputTexto.focus();
    console.log("> Terminal limpo. Memória liberada.");
}

/*
    Atualiza o ano no rodapé automaticamente
    Garante que o ano exibido seja sempre o atual do sistema
*/
function atualizarAno() {
    const anoAtual = new Date().getFullYear();
    if (spanAno) {
        spanAno.textContent = anoAtual;
    }
}

// --- EVENT LISTENERS (Escutadores de Eventos) ---

// Atribui as funções aos botões
btnCriptografar.onclick = cript;
btnDescriptografar.onclick = descript;
btnCopiar.onclick = onCopy;
btnLimpar.onclick = onLimpar;

// Inicialização
window.onload = () => {
    atualizarAno();
    console.log("> SISTEMA ENCRYPTADOR v2.0.0 INICIADO...");
    console.log("> Copyright atualizado: " + new Date().getFullYear());
    console.log("> Aguardando input do usuário...");
};