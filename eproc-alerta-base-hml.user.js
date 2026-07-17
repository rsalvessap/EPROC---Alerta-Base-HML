// ==UserScript==
// @name         EPROC - Alerta Base HML
// @namespace    eproc-hml-warning
// @version      2.0
// @description  Destaca visualmente todas as bases de homologação do EPROC.
// @include      *://eproc*.tjsp.jus.br/*
// @include      *://*-1g-*.tjsp.jus.br/*
// @include      *://*-2g-*.tjsp.jus.br/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    const host = location.hostname.toLowerCase();

    // Executa apenas nas bases HML
    if (!host.includes("hml")) return;

    function aplicarAlerta() {

        // Evita criar mais de um overlay
        if (document.getElementById("eproc-hml-overlay")) return;

        // Altera o título da aba
        if (!document.title.startsWith("🔴 HML -")) {
            document.title = "🔴 HML - " + document.title;
        }

        // CSS
        const style = document.createElement("style");
        style.id = "eproc-hml-style";
        style.textContent = `
            #eproc-hml-overlay{
                position:fixed;
                inset:0;
                border:5px solid #d50000;
                box-sizing:border-box;
                pointer-events:none;
                z-index:2147483647;
                overflow:hidden;
            }

            #eproc-hml-overlay::before{
                content:"";
                position:absolute;
                inset:0;

                background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='350'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' transform='rotate(-30 350 175)' font-family='Arial' font-size='70' font-weight='bold' fill='rgba(213,0,0,0.07)'%3EHOMOLOGA%C3%87%C3%83O%3C/text%3E%3C/svg%3E");
                background-repeat:repeat;
                background-size:700px 350px;
            }
        `;

        document.head.appendChild(style);

        // Overlay
        const overlay = document.createElement("div");
        overlay.id = "eproc-hml-overlay";

        document.documentElement.appendChild(overlay);

    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", aplicarAlerta);
    } else {
        aplicarAlerta();
    }

})();