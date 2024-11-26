# Site Uniesp 2024

Projeto desenvolvido como parte da disciplina **Tecnologia para Front-End Avançado** da UNIESP. Este site foi criado com foco em aprendizado e aplicação de boas práticas no desenvolvimento de interfaces modernas.

## Funcionalidades Principais
- Navegação dinâmica entre páginas (início, notícias, contato).
- Sistema de gerenciamento de notícias: criação, edição, exclusão e listagem.
- Design responsivo e componentes estilizados.

## Tecnologias e Bibliotecas Utilizadas

### **React**
- Estrutura os componentes principais da aplicação (Navbar, formulários, etc.).
- Gerencia estados e efeitos de forma eficiente.

### **React Router Dom**
- Gerencia as rotas e facilita a navegação entre as páginas.

### **Axios**
- Realiza requisições HTTP para comunicação com o backend simulado.
- Opera com o **JSON-Server** para buscar, cadastrar, editar e excluir dados.

### **Material-UI (MUI)**
- Fornece uma biblioteca de componentes estilizados e acessíveis, como botões, formulários, e menus.

### **JSON-Server**
- Simula um backend RESTful, servindo como banco de dados para as notícias.

### **Vite**
- Utilizado para configurar o ambiente de desenvolvimento.
- Garante builds rápidos e uma experiência otimizada para desenvolvedores.

## Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/yann-carvalho/front_end_advanced/tree/main/site_uniesp_2024_2
   cd site_uniesp_2024_2
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o JSON-Server**:
   ```bash
   npm run server
   ```

4. **Inicie o projeto**:
   ```bash
   npm run dev
   ```

5. Acesse o projeto no navegador em `http://localhost:5173`.

## Estrutura de Pastas
- **src/components**: Componentes reutilizáveis da interface.
- **src/pages**: Páginas do projeto (Início, Notícias, Contato).
- **src/services**: Configurações e chamadas à API (Axios).
- **db.json**: Arquivo de dados usado pelo JSON-Server.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

---

Acesse o site aqui: https://front-end-advanced.vercel.app/

--- 
