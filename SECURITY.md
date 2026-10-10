# Revisão de segurança

Revisão local realizada em 10/10/2026, antes do envio ao GitHub.

O projeto é um site estático, sem servidor de aplicação, autenticação,
coleta de dados, banco de dados ou dependências JavaScript de terceiros.

## Verificações realizadas

- Revisão dos scripts: conteúdo renderizado com `textContent`; ausência de
  `innerHTML`, `eval`, execução dinâmica, chamadas de rede e armazenamento local.
- Busca por padrões de credenciais nos arquivos de aplicação e documentação:
  nenhum padrão encontrado. Essa busca não garante a ausência de todo segredo.
- Testes no Edge com payloads HTML, SVG, SQL, URL JavaScript e texto longo
  na busca; injeção de dados em categorias, cards e modal: nenhuma execução.
- Política CSP restringindo scripts e imagens à própria origem e bloqueando
  conexões, objetos, base URL e envio de formulários.
- Verificação prática do bloqueio de scripts inline e objetos pela CSP.
- Link externo com HTTPS, `noopener` e `noreferrer`; referrer desativado.
- Validação dos recursos locais referenciados no HTML.
- Regressão funcional: 156 cards, categorias, subcategorias, pesquisa sem
  acentos, limpeza, imagens, modal, foco e rolagem.
- Responsividade em 375, 430, 768, 1024 e 1440 px.
- Dados do cardápio preservados, SHA-256 de `assets/js/menu-data.js`:
  `F623D27E1055D35CB0E206D1D73F82C7B2C90E9CEBCD7B2486A68E92A6BBE7DB`.

## Como repetir os testes

Abra `tests/security-check.html` e `tests/layout-check.html` no navegador.
Os testes utilizam um iframe de mesma origem. No Edge automatizado via
`file://`, é necessário permitir o acesso entre arquivos locais com
`--allow-file-access-from-files`. Essa opção é somente para o teste local.
Também é possível executar os testes por um servidor HTTP local.

Os testes de segurança provocam violações de CSP intencionalmente.
O resultado esperado de ambas as páginas é `PASSOU`.

## Limites e hospedagem

Os testes cobrem o código local; não constituem garantia de segurança absoluta.
Não foi auditada uma URL publicada nem a configuração da conta GitHub.
TLS/HTTPS, HSTS, `X-Content-Type-Options` e proteção contra enquadramento
devem ser conferidos na hospedagem escolhida. `frame-ancestors` exige um
cabeçalho HTTP de CSP e não funciona por meta tag.

A CSP permite estilos inline porque o modal ajusta a posição do corpo da
página para preservar a rolagem; scripts inline permanecem bloqueados.
Não há etapa de compilação nem árvore de pacotes para auditar neste projeto.

Logs de navegador, caches e arquivos de credenciais ficam fora do Git
por meio do `.gitignore`.
