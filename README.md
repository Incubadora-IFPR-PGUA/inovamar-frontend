# **Inovamar: Escritório de Projetos**

**Inovamar** is a platform designed to centralize and organize information about **public funding calls** in the coastal region of Paraná, Brazil.

The system aggregates publicly available data and provides guidance to help individuals and organizations prepare and submit project proposals.

The initiative is sponsored by [`Associação MarBrasil`](https://marbrasil.org/) and executed by [`Incubadora de Negócios de Impacto (IFPR Campus Paranaguá)`](https://incubadoraifpr.com.br).

## **Stack**

- Node.js 20+
- React 19
- Vite 7
- TypeScript 5
- Tailwind 4
- ESLint 9 with `@antfu/eslint-config`
- Husky + lint-staged (pre-commit quality)
- GitHub Actions (CI)
- Docker

## **Development Setup**

### Requirements

- Node.js 20+
- npm

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

The application will be available at:

```bash
https://localhost:5173
```

## **Production Build (Docker)**

Build image

```
docker build -t inovamar-frontend:<version> .
```

Run container

```
docker run -p <host_port>:80 inovamar-frontend:<version>
```

## **Code Quality**

This project enforces code quality using:

- ESLint with `@antfu/eslint-config`
- Husky pre-commit hooks
- Lint-staged

Before each commit, ESLint runs automatically on staged files.
If lint errors are found, the commit will be blocked until they are fixed.

To run lint manually:

```bash
npm run lint
```

To automatically fix issues:

```bash
npm run lint:fix
```

## **Contributing**

1. Create a branch from `develop`.
2. Implement your changes.
3. CI workflow checks (lint and build) must pass prior to merge approval.
4. Open a Pull Request to `develop`.

## **Lead Developer**

[![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/mitugui)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?logo=logmein&logoColor=white)](https://www.linkedin.com/in/cristian-mitugui/)
\
**`Cristian Oliveira Mitugui`**
