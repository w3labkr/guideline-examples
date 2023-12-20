# nextjs-ninja

A starter template for TypeScript that includes nextjs app routing, React-bootstrap, i18next, and Firebase.

## Folder and file Structure

The folder and file structure is based on nextjs app router [Next.js Project Structur](https://nextjs.org/docs/getting-started/project-structure).

```txt
.
├── app/                        # App Router
│   └── [lng]/                  # Dynamic route segment
│   │   └── <page>/             # Route segment
│   │   │   └── _components/    # Opt folder and all child segments out of routing
│   │   ├── layout.ts           # Layout
│   │   └── page.ts             # Page
│   ├── i18n/
│   ├── icon.ts                 # Generated App Icon
│   ├── apple-icon.ts           # Generated Apple App Icon
│   ├── opengraph-image.ts      # Generated Open Graph image
│   ├── twitter-image.ts        # Generated Twitter image
│   ├── robots.ts               # Generated Robots file
│   └── sitemap.ts              # Generated Sitemap
├── components/                 # React components for filters, headers
├── configs/
├── contexts/
├── docs/
├── hooks/
├── lib/                        # Utility functions that aren't necessarily bound to React or Next.js
│   └── firebase/               # Firebase-specific code and Firebase configuration
├── public/                     # Static assets to be served
├── styles/
├── .env                        # Environment variables
├── package.json                # Project dependencies and scripts
├── middleware.ts               # Next.js request middleware
├── next.config.js              # Configuration file for Next.js
├── next-env.d.ts               # TypeScript declaration file for Next.js
└── tsconfig.json               # Configuration file for TypeScript
```

## Installation

- Would you like to use ESLint? … `Yes`
- Would you like to use Tailwind CSS? … `No`
- Would you like to use `src/` directory? … `No`
- Would you like to use App Router? (recommended) … `Yes`
- Would you like to customize the default import alias (@/\*)? … `No`

```shell
npx create-next-app@latest . --typescript
```

```shell
npm install server-only
```

Set the current Node.js version.

```shell
node -v > .nvmrc
```

Install react-bootstrap.

```shell
npm install react-bootstrap bootstrap
```

(Optional) Install Sass when customizing bootstrap.

```shell
npm install --save-dev sass
```

Install form validation.

```shell
npm install zod react-hook-form @hookform/resolvers
# npm install yup formik
```

Generate RFC-compliant UUIDs in JavaScript

```shell
npm install uuid @types/uuid
```

Start the development server.

```shell
npm run dev
```

## Configure

- [EsLint](docs/EsLint.md)
- [Firebase](docs/Firebase.md)
- [i18next](docs/i18next.md)

## Usage

After cleaning the directories and cache, install the dependency packages.

```shell
npm run reinstall
```

Find and fix problems in your JavaScript code.

```shell
npx eslint ./src
npx eslint --fix ./src
```

Start the firebase emulator.

```shell
firebase emulators:start
```

Set the expiration of a preview channel

```shell
firebase hosting:channel:deploy preview --expires 1h
```

Start firebase deployment.

```shell
firebase deploy
```
