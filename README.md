# Next.js & HeroUI Starter

A modern **Next.js starter template** with **Tailwind CSS** and **Hero UI**, designed for rapid development of responsive and beautiful web applications. Perfect for developers who want a clean, production-ready starting point with best practices built in.

## Technologies Used

- [Next.js 15](https://nextjs.org/docs/getting-started)
- [HeroUI v2](https://heroui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## Code Conventions 🧹

This project enforces consistent code style and project structure using **Prettier** and **ESLint**. Following these rules helps maintain readability, prevent errors, and keep your codebase clean.

### Prettier Rules

- **Semicolons**: Required at the end of statements (`semi: true`).
- **Quotes**: Double quotes (`quotes: "double"`) are enforced.
- **Tab width**: 2 spaces (`tabWidth: 2`) for indentation.
- **Trailing commas**: Added where valid in ES5 (`trailingComma: "es5"`) for cleaner diffs.
- **Import ordering**:
  - `react` and `next` modules first
  - Third-party modules next
  - Internal imports (`@/`) after that
  - Relative imports last
  - Imports are **separated by groups** and **sorted alphabetically** within each group.
- **Tailwind classes**: Automatically sorted using `prettier-plugin-tailwindcss` for consistent class ordering.

### ESLint Rules

- **Arrow functions preferred**: `prefer-arrow-callback` ensures concise callbacks.
- **Template literals preferred**: `prefer-template` enforces using `` `template` `` over string concatenation.
- **No direct `process.env`**: `n/no-process-env` encourages using environment variables safely.
- **File and folder naming**:
  - **Files**: TypeScript files (`.ts`, `.tsx`) must use **KEBAB_CASE**.
  - **Folders**: All folders under `src/` follow **KEBAB_CASE**.
- **Core Next.js rules**: Extends `next/core-web-vitals` and `next/typescript` for recommended best practices.

### Plugins Used

- `@trivago/prettier-plugin-sort-imports` – automatically sorts imports.
- `prettier-plugin-tailwindcss` – sorts Tailwind CSS classes consistently.
- `check-file` – validates filenames and folder names.
- `n` – enforces Node.js best practices.

> Following these conventions ensures a **clean, readable, and maintainable** codebase, making it easier for multiple developers to collaborate.

## Translations 🌐

This project uses **internationalization (i18n)** with **[next-intl](https://next-intl.dev/)**, making it easy to support multiple languages in a clean and maintainable way.

### Folder Structure

All translation files are stored in the `translations/` folder:

```
translations/
├── en/
│ ├── home.json
│ ├── dashboard.json
│ └── common.json
├── fr/
│ ├── home.json
│ ├── dashboard.json
│ └── common.json
└── ...
```

- Each **locale** has its own folder (`en`, `fr`, etc.).  
- Each JSON file corresponds to a **page** or a **specific use-case**.  
- This keeps translations organized and avoids large, hard-to-maintain files.

## License

Licensed under the [MIT license](https://github.com/heroui-inc/next-app-template/blob/main/LICENSE).
