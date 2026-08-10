## Product Hunt Clone

O **Product Hunt Clone** é uma réplica do famoso Product Hunt, plataforma onde startups e criadores divulgam seus projetos e a comunidade pode votar nos que mais gosta. O sistema conta com autenticação de usuários e um sistema de **upvote**, permitindo que cada usuário vote apenas uma vez em cada produto.

## Tecnologias utilizadas
 
- **React.js**
- **Next.js** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Prisma** (ORM)
- **PostgreSQL**
- **Clerk** (autenticação de usuários)
- **Railway** (hospedagem)

## Como instalar e rodar localmente
 
### Pré-requisitos
 
- Node.js 18+
- npm
- Uma instância do PostgreSQL (local ou na nuvem, ex: Railway)
- Conta no [Clerk](https://clerk.com) para autenticação

### Passo a passo
 
1. **Clone o repositório**
```bash
   git clone https://github.com/seu-usuario/product-hunt-clone.git
   cd product-hunt-clone
```
 
2. **Instale as dependências**
```bash
   npm install
```
 
3. **Configure as variáveis de ambiente**
   Crie um arquivo `.env` na raiz do projeto com base no `.env.example`:
```env
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/product_hunt_clone"
 
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="sua_publishable_key"
   CLERK_SECRET_KEY="sua_secret_key"
   CLERK_WEBHOOK_SIGNING_SECRET="seu_signing_secret"
```
 
4. **Rode as migrations do Prisma**
```bash
   npx prisma migrate dev
```
 
   > Isso também executa `prisma generate` automaticamente, criando o Prisma Client atualizado.
 
5. **(Opcional) Configure o webhook do Clerk localmente**
   Para testar os eventos `user.created`, `user.updated` e `user.deleted` em ambiente local, use o [ngrok](https://ngrok.com) para expor sua porta local e cadastre a URL gerada no painel do Clerk:
```bash
   ngrok http 3000
```

6. **Inicie o servidor de desenvolvimento**
```bash
   npm run dev
```
 
7. Acesse [http://localhost:3000](http://localhost:3000) no navegador.
## Screenshots do projeto
 
> _Adicione aqui capturas de tela ou GIFs mostrando as principais telas do projeto (listagem de produtos, tela de votação, login, etc.)._
 
```
![Tela inicial](./docs/screenshots/home.png)
![Sistema de votação](./docs/screenshots/voting.gif)
```
 
## Link para o deploy
 
> 🔗 _Adicione aqui o link do projeto publicado no Railway assim que o deploy estiver disponível._
 
Exemplo:
 
```
https://product-hunt-clone.up.railway.app
```

## Desafios enfrentados e como foram resolvidos
