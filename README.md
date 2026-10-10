# Big Pastel — Cardápio digital

Cardápio para consulta presencial pelo celular, com acesso por QR Code.

## Estrutura

- `index.html`: estrutura da página e referências aos arquivos externos.
- `assets/css/styles.css`: cores, layout, cards, categorias, modal e responsividade.
- `assets/js/menu-data.js`: categorias, produtos, preços e descrições.
- `assets/js/app.js`: busca, filtros, renderização dos cards e controle do modal.
- `AGENTS.md`: regras permanentes do projeto.
- `.agents/skills/big-pastel-menu/SKILL.md`: diretrizes de design e funcionalidades.
- `Cardápio Big 2026 novo - Barueri.pdf`: referência existente do cardápio.

## Como visualizar

Abra `index.html` em um navegador. Não há instalação de dependências nem etapa de compilação.
Ao publicar, mantenha a pasta `assets` junto ao `index.html` e preserve os caminhos relativos.

Os scripts usam `defer` e carregam na ordem declarada: primeiro os dados, depois a aplicação.
A organização permite abrir o HTML diretamente, sem exigir um servidor ou módulos JavaScript.

## Cuidados ao editar

Preserve a identidade visual, os produtos, preços e descrições existentes.
Siga as instruções de `AGENTS.md` e da skill antes de alterar a interface.
Não adicione carrinho, pedidos ou pagamentos.

## Verificação manual

- Navegar por todas as categorias e subcategorias.
- Buscar por nome e descrição, com e sem acentos.
- Combinar pesquisa e categoria, testar ausência de resultados e limpar a pesquisa.
- Abrir os cards e fechar os detalhes por X, Escape e clique externo.
- Conferir foco, rolagem e preservação da pesquisa ao fechar os detalhes.
- Conferir o layout no celular, tablet e desktop.
