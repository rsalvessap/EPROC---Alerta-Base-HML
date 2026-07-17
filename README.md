# EPROC - Alerta Base HML

Um userscript para **Tampermonkey** que destaca visualmente os ambientes de **Homologação (HML)** do EPROC, reduzindo o risco de realizar alterações por engano na base de produção.

## Funcionalidades

* 🔴 Detecta automaticamente ambientes cujo hostname contenha **`hml`**.
* 🟥 Adiciona uma borda vermelha ao redor de toda a janela do navegador.
* 💧 Exibe uma marca d'água **HOMOLOGAÇÃO** repetida em toda a tela.
* 📑 Altera o título da aba para iniciar com **🔴 HML -**.
* 🖱️ Não interfere na navegação nem nos cliques do sistema (`pointer-events: none`).
* ⚡ Não altera o layout do EPROC, funcionando através de um *overlay* transparente.

## Compatibilidade

O script foi desenvolvido para funcionar com o **EPROC** e é compatível com os ambientes cujo domínio siga os padrões abaixo:

```text
https://eproc*.tjsp.jus.br/*
https://*-1g-*.tjsp.jus.br/*
https://*-2g-*.tjsp.jus.br/*
```

A identificação do ambiente é feita automaticamente verificando se o hostname contém a palavra **`hml`**.

Exemplos:

* ✅ `https://eproc-1g-sp-hml.tjsp.jus.br`
* ✅ `https://eproc-2g-sp-hml.tjsp.jus.br`

Já na produção o script permanece inativo.

Exemplo:

* ❌ `https://eproc1g.tjsp.jus.br`

## Instalação

1. Instale a extensão **Tampermonkey** no navegador.
2. Clique em **Create a new script**.
3. Substitua o conteúdo pelo código deste projeto.
4. Salve o script.
5. Acesse uma base HML do EPROC.

O destaque será aplicado automaticamente.

## Como funciona

Ao detectar um ambiente de homologação, o script:

* cria um **overlay** fixo cobrindo toda a janela;
* desenha uma borda vermelha ao redor da viewport;
* adiciona uma marca d'água repetida de baixa opacidade;
* altera o título da aba do navegador.

Como o destaque é feito através de um elemento independente da página, ele continua funcionando mesmo quando o EPROC altera sua estrutura interna ou utiliza diferentes layouts.

## Objetivo

O principal objetivo deste script é fornecer um alerta visual constante para evitar que operações de teste sejam realizadas acidentalmente na base de produção.

## Tecnologias

* JavaScript (ES6)
* Tampermonkey
* CSS

## Licença

Este projeto é distribuído sob a licença **MIT**.

Sinta-se à vontade para utilizar, modificar e compartilhar.
