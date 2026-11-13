# Sistema de Gestão de Produtos

Aplicação web *full-stack* desenvolvida com **Angular** no frontend e **JSON Server** no backend para o cadastro, listagem e gerenciamento de produtos[cite: 3, 4].

## 📁 Estrutura do Projeto

```text
├── Backend/
│   ├── db.json                          # Base de dados JSON com os registros de produtos[cite: 1, 3]
│   └── package.json                     # Dependências e scripts da API
└── Frontend/
    ├── public/
    │   ├── img/                         # Imagens estáticas da aplicação
    │   └── favicon.ico                  # Ícone da aplicação[cite: 2, 4]
    └── src/
        ├── app/
        │   ├── components/
        │   │   ├── home/                # Componente da página inicial
        │   │   └── produtos/
        │   │       ├── cadastrarproduto/# Formulário de cadastro de produtos
        │   │       └── listarprodutos/  # Listagem e visualização dos produtos
        │   ├── model/
        │   │   └── IProduto.model.ts    # Interface de tipagem do modelo Produto[cite: 4]
        │   ├── services/
        │   │   └── produtos.ts          # Serviço de integração HTTP com a API[cite: 4]
        │   ├── shared/
        │   │   ├── components/
        │   │   │   └── card-produto/    # Componente reutilizável de cartão de produto[cite: 4]
        │   │   └── shared-module.ts     # Módulo de recursos compartilhados[cite: 4]
        │   ├── template/
        │   │   ├── footer/              # Componente de rodapé[cite: 4]
        │   │   └── header/              # Componente de cabeçalho e navegação[cite: 4]
        │   ├── app-module.ts            # Módulo principal da aplicação[cite: 4]
        │   ├── app-routing-module.ts    # Configuração de rotas[cite: 4]
        │   └── app.ts / app.html        # Componente raiz (<app-root>)[cite: 2, 4]
        ├── index.html                   # Página HTML principal[cite: 2, 4]
        ├── main.ts                      # Ponto de entrada da aplicação Angular[cite: 4]
        └── styles.css                   # Estilos globais[cite: 4]
