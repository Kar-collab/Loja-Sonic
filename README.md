# CrossWorlds Store

Loja demonstrativa em **React + JavaScript** inspirada em Sonic Racing: CrossWorlds, baseada na ideia do projeto `toy3d`: vitrine, catálogo, carrinho e checkout.

> Projeto acadêmico. Não usa imagens oficiais nem realiza venda real.

## Funcionalidades

- Home com hero promocional
- Catálogo de produtos
- Busca por texto
- Filtro por categoria
- Filtro por plataforma
- Carrinho lateral
- Alteração de quantidade
- Remoção de produtos
- Checkout simulado
- Layout responsivo com CSS puro

## Como rodar

```bash
npm install
npm run dev
```

Depois abra o endereço mostrado no terminal, normalmente:

```bash
http://localhost:5173
```

## Estrutura

```txt
src/
  components/       Componentes visuais da aplicação
  data/             Mock de produtos, categorias e plataformas
  hooks/            Hook de carrinho
  services/         Camada preparada para futura API
  styles/           CSS global responsivo
  utils/            Funções auxiliares
```

## Ideia de divisão em grupo

- Pessoa 1: estrutura React, Header, Hero, Footer e responsividade
- Pessoa 2: catálogo, produtos, filtros e busca
- Pessoa 3: carrinho, checkout e validações
- Pessoa 4, se houver: README, testes, deploy na Vercel e revisão visual

## Segurança e boas práticas

- O checkout é apenas simulado.
- Não há coleta real de pagamento.
- Não há armazenamento de dados sensíveis.
- Os dados de produtos ficam em mock local.
- Em um projeto real, preços e pedidos devem ser validados no back-end.
