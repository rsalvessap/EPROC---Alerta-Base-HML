# EPROC - Alerta Base HML

Um **Userscript para Tampermonkey** que destaca visualmente os ambientes de **Homologação (HML)** do EPROC, reduzindo significativamente o risco de realizar alterações por engano na base de produção.

---

## ✨ Funcionalidades

* 🔴 Detecta automaticamente ambientes de homologação (HML).
* 🟥 Adiciona uma borda vermelha em toda a janela do navegador.
* 💧 Exibe uma marca d'água **HOMOLOGAÇÃO** em toda a tela.
* 📑 Altera o título da aba para iniciar com **🔴 HML -**.
* 🖱️ Não interfere na navegação ou nos cliques do sistema.
* ⚡ Não altera o layout do EPROC, utilizando um overlay transparente sobre a página.
* 🔄 Compatível com diferentes bases HML do EPROC.

---

## 📥 Instalação

### 1. Instale o Tampermonkey

Caso ainda não possua, instale a extensão Tampermonkey em seu navegador:

* Chrome / Microsoft Edge / Brave: https://www.tampermonkey.net/
* Firefox: https://www.tampermonkey.net/

### 2. Instale o script

Após instalar o Tampermonkey, clique no link abaixo:

### 👉 https://raw.githubusercontent.com/rsalvessap/EPROC---Alerta-Base-HML/main/eproc-alerta-base-hml.user.js

O Tampermonkey abrirá automaticamente a tela de instalação.

Basta clicar em **Instalar**.

---

## 🔄 Atualizações

O script possui suporte a atualização automática.

Sempre que uma nova versão for publicada neste repositório, o Tampermonkey poderá detectar a atualização automaticamente (desde que os campos `@updateURL` e `@downloadURL` estejam configurados no script).

---

## 🚀 Compatibilidade

O script foi desenvolvido para funcionar nas bases do **EPROC** cujo domínio siga padrões como:

```text
https://eproc*.tjsp.jus.br/*
https://*-1g-*.tjsp.jus.br/*
https://*-2g-*.tjsp.jus.br/*
```

A identificação é feita automaticamente verificando se o hostname contém:

```text
hml
```

### Exemplos

Homologação:

```text
https://eproc-1g-sp-hml.tjsp.jus.br
```

```text
https://eproc-2g-sp-hml.tjsp.jus.br
```

Produção:

```text
https://eproc1g.tjsp.jus.br
```

Na produção o script permanece totalmente inativo.

---

## ⚙️ Como funciona

Quando identifica um ambiente HML, o script:

* cria um overlay transparente cobrindo toda a janela;
* desenha uma borda vermelha ao redor da viewport;
* adiciona uma marca d'água "HOMOLOGAÇÃO" de baixa opacidade;
* altera o título da aba para facilitar a identificação do ambiente.

Como o destaque é feito por meio de um overlay independente do HTML do sistema, ele continua funcionando mesmo quando o EPROC altera sua estrutura interna.

---

## 🎯 Objetivo

Quem trabalha diariamente com o EPROC costuma alternar diversas vezes entre os ambientes de **Produção** e **Homologação**.

Em alguns momentos, a diferença visual entre eles é mínima, aumentando o risco de executar operações no ambiente incorreto.

Este projeto tem como objetivo fornecer um alerta visual permanente, tornando a identificação da base imediata e reduzindo a possibilidade de erros operacionais.

---

## 🛠 Tecnologias

* JavaScript (ES6)
* CSS
* Tampermonkey

---

## 🤝 Contribuições

Sugestões, melhorias e correções são sempre bem-vindas.

Caso encontre algum problema ou tenha alguma ideia para o projeto, fique à vontade para abrir uma **Issue** ou enviar um **Pull Request**.

---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT**.

Sinta-se à vontade para utilizar, modificar e compartilhar.

---

## 👨‍💻 Autor

**Robson Souza**

GitHub: https://github.com/rsalvessap
