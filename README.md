# Instafarm

- An eccomerce site for agricultre products.

## Tech Stack

- **Frontend**: Nextjs, Cashfree, Jose, Tailwindcss, Shadcn, Zod
- **Backend** : Express, Cashfree, Nodejs, Mongodb

## Run Locally

Clone the project

```bash
  git clone https://github.com/Brav3Trav3l3r/instafarm
```

Go to the project directory

```bash
  cd instafarm
```

**Start Server**

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Update .env file

```bash
  NODE_ENV="development"
  PORT=8000
  DB_URL= "Mongodb connection string"
  CASHFREE_ID=
  CASHFREE_SECRET=
```

Start the server

```bash
  npm start
```

**Start site**

```bash
  cd client
```

Install dependencies

```bash
  npm i
```

```bash
    NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
    SESSION_SECRET="32ch JWT secret"
```

Start server

```bash
  npm run dev
```
