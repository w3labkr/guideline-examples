# guideline-next-ts-mui

Example of php for the W3LabKr open source project. A detailed description of style guides can be found in the [guidelines](https://github.com/w3labkr/guidelines) repository.

## Folder and file Structure

The folder and file structure is based on [NextJS API Reference](https://nextjs.org/docs/app/api-reference/file-conventions), [NextJS File Conventions](https://nextjs.org/docs/app/building-your-application/routing#file-conventions) and [Firebase document](https://firebase.google.com/codelabs/firebase-nextjs#3).

```txt
.
├── public/                     # Static assets in the web app, like icons
├── src/
│   ├── app/                    # Routing with the Next.js App Router
│   ├── components/             # React components for filters, headers
│   └── lib/                    # Utility functions that aren't necessarily bound to React or Next.js
├── package.json                # Project dependencies with npm
├── package-lock.json           # Project dependencies with npm
├── next.config.js              # Next.js-specific configuration (server actions are enabled)
└── jsconfig.json               # JavaScript language-service configuration
```

## Installation

- Would you like to use ESLint? … `Yes`
- Would you like to use Tailwind CSS? … `No`
- Would you like to use `src/` directory? … `Yes`
- Would you like to use App Router? (recommended) … `Yes`
- Would you like to customize the default import alias (@/*)? … `No`

```shell
npx create-next-app@latest . --typescript
```

Set the current Node.js version.

```shell
node -v > .nvmrc
```

Install Material UI.

```shell
npm install @mui/material @emotion/react @emotion/styled
```

To use the font Icon component or the prebuilt SVG Material Icons (such as those found in the icon demos),
you must first install the Material Icons font.

```shell
npm install @mui/icons-material
```

(Optional) Material UI uses the Roboto font by default. Add it to your project via Fontsource.

```shell
npm install @fontsource/roboto
```

Start the development server.

```shell
npm run dev
```

## Configure

[Minimum configuration](https://mui.com/material-ui/guides/typescript/#minimum-configuration) for typescript in MUI.

```json
{
  "compilerOptions": {
    "lib": ["es6", "dom"],
    "noImplicitAny": true,
    "noImplicitThis": true,
    "strictNullChecks": true
  }
}
```

## Usage

(Optional) If you have the Roboto font installed, you can import it in your entry point like this:

```javascript
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```

## Reference

- [Next.js App Router](https://mui.com/material-ui/guides/next-js-app-router/)
- [Next.js App Router example in TypeScript](https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs-ts)
