# guideline-next-typescript-sass

Example of php for the W3LabKr open source project. A detailed description of style guides can be found in the [guidelines](https://github.com/w3labkr/guidelines) repository.

## Folder and file Structure

The folder and file structure is based on [NextJS File Conventions](https://nextjs.org/docs/app/building-your-application/routing#file-conventions).

```txt
.
├── app/                        # Routing with the Next.js App Router
├── components/                 # React components for filters, headers
├── lib/                        # Utility functions that aren't necessarily bound to React or Next.js
├── public/                     # Static assets in the web app, like icons
├── styles/
├── package.json                # Project dependencies with npm
├── package-lock.json           # Project dependencies with npm
├── next.config.js              # Next.js-specific configuration (server actions are enabled)
└── jsconfig.json               # JavaScript language-service configuration
```

## Installation

- Would you like to use ESLint? … `Yes`
- Would you like to use Tailwind CSS? … `No`
- Would you like to use `src/` directory? … `No`
- Would you like to use App Router? (recommended) … `Yes`
- Would you like to customize the default import alias (@/*)? … `No`

```shell
npx create-next-app@latest . --typescript
```

```shell
npm run dev
```

## Configure

node version management

```shell
echo $(node -v) > .nvmrc
```
