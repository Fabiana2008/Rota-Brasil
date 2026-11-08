**-- NOME DO PROJETO --**

Rota Brasil

**-- DESCRIÇÃO E OBJETIVO --**

O Rota Brasil é um guia turístico web desenvolvido para apresentar os principais pontos turísticos de todas as cinco regiões do Brasil (Norte, Nordeste, Centro-Oeste, Sudeste e Sul).

O principal objetivo da plataforma é facilitar a pesquisa de viagens, mostrando as maravilhas que há no território brasileiro, além de permitir que os usuários explorem pontos turísticos famosos, visualizem a localização exata de cada destino com a integração de mapas interativos, filtrem os locais por região, busquem por destinos específicos e enviem feedbacks de avaliação do site.

**-- FERRAMENTAS UTILIZADAS --**

HTML5: Estruturação semântica do conteúdo web.

CSS3: Estilização responsiva, layout flexbox/grid, modal interativo e temas visuais.

JavaScript: Lógica de filtragem, mecanismo de pesquisa em tempo real, manipulação dinâmica de DOM e modal de detalhes.

Google Maps: Integração com mapas externos para exibição das rotas dos pontos turísticos.

**-- INSTRUÇÕES PARA EXECUÇÃO LOCAL --**

Não é necessário instalar dependências ou servidores de backend para rodar a aplicação localmente.

Clonar ou Baixar o repositório:
git clone https://github.com/Fabiana2008/Rota-Brasil.git

(OBS: Pode também simplesmente baixar e extrair o arquivo ZIP do projeto).

Navegar até a pasta do projeto:
Abra o diretório extraído onde estão os arquivos index.html, style.css e script.js.

Executar no navegador:
Dê um duplo clique no arquivo index.html ou abra-o diretamente pelo seu navegador preferido (Chrome, Firefox, Edge, Safari, etc.).

**-- ESTRUTURA DOS ARQUIVOS --**

rota-brasil/

index.html: Estrutura principal da aplicação (Menu, Seções, Cards, Modal e Formuário)

style.css: Estilização completa do layout, regras de responsividade e animações

script.js: Regras de negócio, busca, filtros de região, integração com mapas e manipulação do modal

README.md: Documentação oficial do projeto

**-- FUNCIONALIDADES IMPLEMENTADAS --**

Navegação Interativa e Suave: Menu fixo com rolagem tanquila para facilitar o acesso às seções.

Filtro por região: Botões para exibição de pontos turísticos separados pelas regiões (Norte, Nordeste, Centro-Oeste, Sudeste, Sul) e opção de "Todos".

Barra de pesquisa em tempo real: Filtro dinâmico por meio do JavaScript na barra de pesquisa que atualiza a exibição dos destinos enquanto o usuário digita.

Integração com o Google Maps: Botão "Ver no mapa" em cada card que abre o Google Maps em uma nova aba com a localização exata do ponto turístico.

Botão interativo de detalhes do ponto turístico: Botão "Ver mais detalhes" gerado dinamicamente para abrir uma janela modal com a descrição completa e localização da atração.

Formulário de avaliação: Seção para o usuário enviar feedback sobre a experiência na plataforma, retornando confirmação interativa na tela.

Design responsivo: Adaptação de layout para dispositivos móveis, tablets e computadores desktop.

**-- FERRAMENTAS UTILIZADAS NA VALIDAÇÃO --**

W3C HTML Validator: Validação de sintaxe e semântica do código HTML5.

W3C CSS Validator: Validação de conformidade das regras de estilos CSS3.

Lighthouse: Análise de acessibilidade, SEO e boas práticas web.

**-- MELHORIAS DE DESEMPENHO REALIZADAS --**

Carregamento do Script (defer): Inclusão do atributo defer na tag script no arquivo HTML, permitindo o carregamento concorrente dos scripts sem bloquear a renderização inicial da página.

Otimização de Renderização de Layout: Uso de display: grid e display: flex para otimizar o fluxo de layout e evitar recálculos excessivos.

Redução do Tempo de Resposta da Busca: Manipulação otimizada do DOM durante a busca e filtragem dos cards ocultando/exibindo apenas os nós necessários.

**-- ENDEREÇO DO SITE PUBLICADO --**

URL do projeto online: https://rota-brasil.vercel.app (substitua pelo link real da sua publicação)

**-- IDENTIFICAÇÃO DOS INTEGRANTES --**

Projeto desenvolvido para a disciplina de Programação WEB 1;

Integrantes:

Fabiana Lima - Matrícula: 20260008017

Hranna Vitória Francisco da Silva - Matrícula: 20260035490

Nicolas da Silva Borges Jatahy - Matrícula: 20260023784