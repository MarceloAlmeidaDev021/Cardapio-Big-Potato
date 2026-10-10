
---
name: big-pastel-digital-menu
description: Skill de design e UX para o cardápio digital Big Pastel. Utiliza o layout do cardápio Outback como referência, preservando a identidade visual, os dados e as funcionalidades existentes.
---

# Big Pastel - Taste Skill

## 1. Objetivo

Aprimorar exclusivamente o layout e a
experiência visual do cardápio Big Pastel.

O cardápio é destinado a clientes que já
estão no restaurante e acessam o menu
digital através de QR Code.

Referência de layout:
https://www.outback.com.br/nossosprodutos/menu-principal

Utilizar o Outback como referência de
organização, composição, apresentação
dos produtos e visualização detalhada.

Não copiar sua identidade visual.

## 2. Regra principal

PRESERVAR TUDO QUE JÁ FOI IMPLEMENTADO.

Não remover, substituir ou modificar
funcionalidades existentes.

Alterar somente o necessário para
aprimorar o layout e a experiência visual.

Antes de modificar qualquer arquivo:

1. Inspecionar o código existente.
2. Identificar os componentes atuais.
3. Identificar os estados e eventos.
4. Verificar as funcionalidades existentes.
5. Planejar alterações incrementais.

Não reescrever o projeto do zero.

## 3. Identidade visual

Manter obrigatoriamente:

- Logotipo Big Pastel.
- Paleta de cores existente.
- Fontes existentes, salvo ajustes de escala.
- Produtos e imagens.
- Preços e descrições.
- Categorias.
- Funcionalidades atuais.

Estilo desejado:

- Casual.
- Moderno.
- Acolhedor.
- Organizado.
- Visualmente agradável.
- Sem aparência excessivamente luxuosa.

## 4. Referência Outback

Aproximar a composição visual do cardápio
Outback nos seguintes aspectos:

- Organização das seções.
- Distribuição horizontal dos elementos.
- Hierarquia dos títulos.
- Apresentação das categorias.
- Proporção dos cards.
- Destaque das fotografias.
- Espaçamento entre produtos.
- Visualização detalhada dos produtos.

Não copiar:

- Logotipo.
- Cores.
- Fontes proprietárias.
- Textos.
- Imagens.
- Elementos de marca.

## 5. Estrutura da página

Organizar visualmente:

1. Cabeçalho do Big Pastel.
2. Área de busca.
3. Navegação de categorias.
4. Título da categoria selecionada.
5. Grid de produtos.
6. Visualização detalhada.

Evitar concentrar todos os elementos
no centro da página.

Utilizar uma área de conteúdo ampla
e alinhamentos consistentes.

## 6. Cabeçalho

Manter o cabeçalho existente.

Aprimorar:

- Alinhamento.
- Espaçamento.
- Proporções.
- Organização visual.

Não adicionar banners desnecessários.

## 7. Busca

Preservar integralmente a busca existente.

Manter:

- Pesquisa por nome.
- Pesquisa por descrição.
- Busca sem diferenciação de acentos.
- Resultados em tempo real.
- Limpeza da pesquisa.
- Combinação com categorias.
- Mensagem sem resultados.

Aprimorar apenas sua apresentação visual.

O campo deve ter boa largura, alinhamento
e destaque na composição da página.

## 8. Categorias

Manter todas as categorias existentes.

A categoria de sobremesas deve continuar
com o nome "Doces".

Utilizar o Outback como referência para
organização da navegação.

Regras:

- Permitir quebra de linha.
- Evitar esconder categorias.
- Evitar rolagem horizontal desnecessária.
- Manter categoria ativa destacada.
- Utilizar espaçamentos consistentes.
- Preservar eventos de seleção.

Não alterar a lógica dos filtros.

## 9. Grid de produtos

Criar uma composição mais próxima
do estilo de apresentação do Outback.

Desktop:
- Área de conteúdo ampla.
- Grid equilibrado.
- Preferencialmente 3 colunas.
- Alinhamento à esquerda.
- Espaçamento consistente.

Tablet:
- Preferencialmente 2 colunas.

Mobile:
- Preferencialmente 1 coluna.
- Cards adaptados à largura disponível.

Respeitar a estrutura existente quando
ela for necessária ao funcionamento.

## 10. Cards

Manter os cards inteiramente clicáveis.

Não adicionar botões "Ver detalhes".

Cada card deve continuar exibindo
os dados existentes.

Aprimorar visualmente:

- Proporção das imagens.
- Hierarquia tipográfica.
- Espaçamento interno.
- Distribuição das informações.
- Alinhamento dos preços.
- Bordas e sombras discretas.
- Estados hover e foco.

As imagens devem receber destaque,
sem distorções ou cortes inadequados.

Não modificar os dados dos produtos.

## 11. Visualização detalhada

Prioridade alta.

Aproximar a composição do modal
da experiência visual de detalhes
dos produtos do Outback.

Desktop:

- Modal amplo.
- Fotografia grande à esquerda.
- Nome e informações à direita.
- Descrição organizada.
- Preço destacado.
- Botão de fechar visível.

Mobile:

- Layout vertical.
- Imagem na parte superior.
- Informações abaixo.
- Rolagem interna quando necessário.
- Botão de fechar acessível.

Preservar obrigatoriamente:

- Abertura pelo card inteiro.
- Fechamento pelo botão.
- Fechamento pelo Escape.
- Fechamento pelo fundo.
- Estados e eventos existentes.
- Produto selecionado.
- Pesquisa e categoria ativa.
- Posição de rolagem da página.

Não substituir a lógica do modal
apenas para modificar sua aparência.

## 12. Responsividade

Priorizar a experiência mobile.

Testar larguras de referência:

- 375px
- 430px
- 768px
- 1024px
- 1440px

Evitar:

- Rolagem horizontal da página.
- Cards cortados.
- Textos sobrepostos.
- Modais fora da tela.
- Categorias inacessíveis.
- Espaçamento excessivo.

## 13. Performance

Preservar o desempenho atual.

- Não adicionar bibliotecas desnecessárias.
- Não carregar imagens enormes sem necessidade.
- Manter lazy loading quando existente.
- Evitar animações pesadas.
- Preservar carregamento responsivo.

## 14. Funcionalidades proibidas

Não implementar:

- Carrinho.
- Checkout.
- Pedidos.
- Pagamentos.
- Controle de quantidade.
- Login.
- Cadastro.

O Big Pastel é um cardápio de consulta.

## 15. Proteção contra regressões

Não remover handlers existentes.

Não alterar a estrutura de dados
sem necessidade.

Não substituir componentes funcionais
por versões estáticas.

Não alterar IDs ou nomes de categorias
utilizados pela lógica existente.

Não remover acessibilidade existente.

Preservar as interações dos cards,
busca, filtros e modais.

## 16. Validação obrigatória

Após modificar o layout:

1. Verificar a compilação.
2. Testar a busca.
3. Testar todos os filtros.
4. Testar cards clicáveis.
5. Testar abertura dos modais.
6. Testar fechamento dos modais.
7. Verificar responsividade.
8. Conferir os dados dos produtos.
9. Verificar erros no console.
10. Comparar visualmente com a referência.

Se alguma funcionalidade parar
de funcionar, corrigir antes de finalizar.

## 17. Critério de sucesso

O cardápio Big Pastel deve apresentar
uma organização visual inspirada no
cardápio Outback, mas manter sua
identidade própria.

O resultado deve ser mais organizado,
visualmente equilibrado e agradável,
sem perder nenhuma funcionalidade.

Prioridade:

1. Preservação funcional.
2. Usabilidade.
3. Responsividade.
4. Fidelidade à referência de layout.
5. Refinamento estético.
