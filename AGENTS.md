
# Big Pastel - Codex Instructions

## Projeto

Cardápio digital para consulta presencial
dos clientes do restaurante Big Pastel.

O cliente acessa o cardápio por QR Code.

## Skill obrigatória

Ao modificar a interface, navegação,
categorias, produtos, busca, filtros,
responsividade ou modais, utilizar:

$big-pastel-digital-menu

Arquivo:
.agents/skills/big-pastel-menu/SKILL.md

## Regras permanentes

- Preservar identidade visual do Big Pastel.
- Não alterar produtos, preços ou descrições.
- Não implementar carrinho ou pedidos.
- Priorizar a experiência em celulares.
- Manter os cards inteiramente clicáveis.
- Preservar a visualização detalhada.
- Implementar busca por nome e descrição.
- Combinar busca com filtros por categoria.
- Utilizar "Doces" como nome da categoria.
- Não quebrar funcionalidades existentes.

## Antes de alterar código

Inspecionar os componentes relevantes.

Modificar apenas o necessário.

## Após alterações

Verificar:
- Busca e filtros.
- Cards e modais.
- Responsividade.
- Erros de compilação.
- Funcionalidades existentes.
```

O Codex reconhece instruções de `AGENTS.md` no repositório, e esse mecanismo é recomendado pela OpenAI para orientar o uso das skills. <Cite refs={["turn889030search2","turn889030search6"]}/>

## 4. Ative e teste no Codex

Abra uma nova conversa no painel do Codex do VS Code e envie:

<WritingBlock id="73521" variant="chat_message">Verifique se a skill `$big-pastel-digital-menu` está disponível e leia suas instruções.

Confirme também que o arquivo `AGENTS.md` está sendo considerado.

Antes de modificar qualquer código, apresente um resumo das regras identificadas e explique como pretende implementar a busca e os filtros no cardápio Big Pastel.</WritingBlock>

Se o Codex identificar a skill e resumir corretamente as instruções, a configuração estará pronta para uso.

Se não reconhecer, confira se o `name` no início do `SKILL.md` está exatamente assim:

```yaml
---
name: big-pastel-digital-menu
description: Use esta skill para criar, revisar ou modificar a interface do cardápio digital Big Pastel, incluindo busca, categorias, cards, modais e responsividade.
---
```

Reabra a conversa do Codex após criar os arquivos para atualizar o contexto.

## 5. Aplique ao projeto

Quando a configuração estiver funcionando, envie:

<WritingBlock id="73522" variant="chat_message">Utilize `$big-pastel-digital-menu` para aprimorar o cardápio existente do Big Pastel.

Implemente a busca por nome e descrição, incluindo correspondência sem acentos, e integre a pesquisa aos filtros de categorias.

Mantenha os cards inteiramente clicáveis e a visualização detalhada dos produtos.

Preserve os produtos, preços, cores e funcionalidades atuais.

Não adicione recursos de pedidos ou pagamentos.

Execute as verificações disponíveis no projeto e informe os arquivos modificados e os testes realizados.</WritingBlock>

**Pronto!** A partir daí, o Taste Skill poderá ser reutilizado nas próximas melhorias do Big Pastel.

Um detalhe importante: o Codex pode selecionar skills automaticamente, mas o uso explícito de `$big-pastel-digital-menu` é a maneira mais clara de solicitar sua aplicação. <Cite refs={["turn889030search1","turn889030search2"]}/>

Você também pode consultar a <Link url="https://developers.openai.com/blog/skills-agents-sdk" title="documentação da OpenAI sobre skills locais e AGENTS.md"/>.