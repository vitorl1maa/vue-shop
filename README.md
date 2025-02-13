# Vue Shop

Este é um projeto baseado em Vue 3 utilizando Vite como ferramenta de build.  

## 📦 Requisitos  

Antes de iniciar, certifique-se de ter instalado:  
- [Node.js](https://nodejs.org/) (versão recomendada: 16 ou superior)  
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) (para gerenciar dependências)  

## 🛠️ Configuração do Ambiente  

1. **Clone o repositório:**  
   ```sh
   git clone https://github.com/seu-usuario/vue-shop.git
   cd vue-shop
   ```

2. **Instale as dependências:**  
   ```sh
   npm install
   ```
   ou, se estiver usando Yarn:  
   ```sh
   yarn install
   ```

## 🚀 Executando o Projeto  

### Modo de Desenvolvimento (Hot-Reload)  
Para iniciar o servidor de desenvolvimento com recarregamento automático:  
```sh
npm run dev
```
ou  
```sh
yarn dev
```
A aplicação estará disponível em `http://localhost:5173/` (ou outra porta exibida no terminal).  

### Build para Produção  
Para gerar os arquivos otimizados para produção:  
```sh
npm run build
```
ou  
```sh
yarn build
```
Os arquivos serão gerados na pasta `dist/`.  

### Servir a Build  
Para testar a versão de produção localmente:  
```sh
npm run preview
```
ou  
```sh
yarn preview
```
Isso inicia um servidor local para visualizar o projeto pronto.  

## 🔧 Configuração Recomendada para IDE  

Recomendamos usar:  
- [VSCode](https://code.visualstudio.com/)  
- Extensão [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (para suporte ao Vue 3)  
> ⚠️ Se estiver usando Volar, desative a extensão Vetur para evitar conflitos.  

## 📄 Configuração Adicional  

Para mais detalhes sobre a configuração do Vite, consulte a [documentação oficial](https://vitejs.dev/config/).  

