# Decodificador v2.0.0

![Status](https://img.shields.io/badge/Status-Finalizado-success)
![License](https://img.shields.io/badge/License-MIT-blue)

Uma aplicação web de criptografia e descriptografia de texto desenvolvida com **HTML5**, **CSS3 (Tailwind)** e **JavaScript Puro**, apresentando um tema visual imersivo de "Hacker / Terminal".

## 🖥️ Preview

O projeto possui uma interface escura, com tons de verde neon, fontes monoespaçadas e efeitos de scanline, simulando um monitor CRT antigo ou um terminal de comando.

## 🚀 Funcionalidades

- **Criptografar**: Converte texto normal em uma versão codificada segura (substituição de vogais).
- **Descriptografar**: Reverte o texto codificado para sua versão original.
- **Auto-detecção**: Se a caixa de entrada estiver vazia ao clicar em descriptografar, o sistema tenta usar o texto da caixa de saída.
- **Copiar**: Botão dedicado para copiar o resultado para a área de transferência.
- **Limpar**: Reseta todos os campos do "terminal".
- **Validação**: Aceita apenas letras minúsculas e sem acentos (normalização automática aplicada).
- **Responsivo**: Layout adaptável para Celulares, Tablets e Desktops.

## 🎨 Tema Hacker

- **Paleta de Cores**: Preto (#000000) e Verde Neon (#00ff44).
- **Tipografia**: `Share Tech Mono` para a sensação de código e `Montserrat` para legibilidade.
- **Efeitos**:
  - Scanlines (linhas de varredura) animadas no fundo.
  - Brilho (Glow) nos botões e áreas de texto.
  - Cursor piscante.

## 📂 Estrutura de Pastas

```text
/
├── css/
│   └── style.css       # Estilos personalizados e animações
├── js/
│   └── encrypt.js      # Lógica de criptografia e manipulação do DOM
├── index.html          # Estrutura principal
└── README.md           # Documentação
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica.
- **Tailwind CSS (CDN)**: Estilização utilitária rápida e responsiva.
- **CSS3 Puro**: Animações keyframe e efeitos de brilho.
- **JavaScript (ES6+)**: Lógica da aplicação sem dependências externas.

## 🔧 Como Rodar

1. Baixe ou clone este repositório.
2. Não é necessário instalar nada (sem Node, sem npm).
3. Basta abrir o arquivo `index.html` em qualquer navegador moderno.

## 📜 Regras de Criptografia

A chave de criptografia utilizada é a seguinte:

- `e` -> `enter`
- `i` -> `imes`
- `a` -> `ai`
- `o` -> `ober`
- `u` -> `ufat`

## 👤 Créditos

Criado por **Edigelson Nascimento**  
Acesse meu portfólio: [https://edigelson.pages.dev](https://edigelson.pages.dev)

## 📄 Licença

Este projeto é 100% Open Source sob a licença [MIT](https://opensource.org/licenses/MIT).
