---
title: Scraping a Mercado libre 
tags: [ Axios, NodeJs, reactjs ]
date: 2021-03-30T05:25:44.226Z
path: blog/proyecto-1-clima
cover: ./scraping.png
excerpt: Web Scraping a mercado libre con node js y puppeteer
---




## ¿Qué es el web scraping?

Probablemente no sea la primera vez que escuches el término web scraping. Y si no, seguro que te lo has encontrado en alguna de sus otras formas, como data scraping, rastreo, scraping de datos, extracción de datos o, haciendo referencia a aplicaciones más concretas, como price mapping.

El web scraping consiste en navegar automáticamente una web y extraer de ella información. Esto puede ser muy útil para muchísimas cosas y beneficioso para casi cualquier negocio. A día de hoy, no creo que exista una sola empresa de éxito que no lo haga —o que no quiera hacerlo—. De hecho, la empresa reina del scrapeo es Google, que para que su buscador funcione así de bien tiene que estar constantemente scrapeando la red entera.


## ¿Para qué sirve el scraping?
Imagino que todos han escuchado la frase “la información es poder”; pues es muy cierta y scrapear te da información. Por tanto, si scrapeas tienes el poder. Pero, ¿qué aplicaciones prácticas puede tener? En realidad, muchísimas, pero para que os hagáis una idea, recojo algunas de las más habituales:

Agregadores de contenido
Es una de las aplicaciones originarias del scraping; al principio, se usó para aglutinar noticias u ofertas inmobiliarias en un único sitio y, posteriormente, se aplicó a innumerables ámbitos, como la información empresarial, los eventos físicos, las ofertas de empleo, etc.

Reputación online
La masificación de medios como Twitter permitió el análisis de sentimiento hacia las marcas en redes sociales, a través de técnicas de Data Science; gracias al web scraping, podemos extender el estudio del sentimiento a plataformas de reviews, foros especializados, blogs, comentarios en productos y noticias, etc.


Caza de tendencias (cool hunting)
El siguiente paso lógico tras el estudio de la reputación online fue la caza de tendencias. Es decir, usar el scraping no solo para saber qué se piensa de una marca, sino de qué marcas, productos, personas… se va a estar hablando durante los próximos meses, para aprovechar las oportunidades de marketing.


Optimización de precios
El scraping continuo de diferentes competidores permite generar históricos a lo largo del tiempo con las condiciones del pricing, así como conocer en tiempo real quién ofrece los mejores precios. Esto permite ofrecer un precio óptimo de venta, tanto al cliente final como al canal de distribución.


Monitorización de la competencia
El precio no es la única variable competitiva en el entorno digital. Podemos controlar, rastrear y generar alertas para saber cuándo los competidores actualizan sus catálogos de producto o servicio, renuevan su sitio web, escriben sobre un tema concreto, mencionan nuestros productos, “toman prestadas” nuestras fotos…


Optimización ecommerce
El caso de las tiendas online es muy sensible al scraping. Ya se ha mencionado la optimización de precios, pero del mismo modo se pueden usar técnicas de scraping que nos ayuden a elegir qué imagen mostrar como destacada, qué categorización de productos funciona mejor, qué nicho está libre en un mercado concreto, etc.
Google Search Analysis
El scraping de las SERP (resultados de búsqueda) de Google es crucial para conocer el rendimiento digital de un proyecto: saber cómo se posiciona para las keywords adecuadas (como hacen algunas herramientas SEO, aunque tienen sus limitaciones), conocer la cuota de mercado digital en búsquedas, el tipo de contenidos —artículos, vídeos, imágenes…— que deberían potenciarse, etc.



[Demo de la aplicacion](https://proyectosmario.netlify.app/compara)