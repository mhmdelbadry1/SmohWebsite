# SumouWebsite

Sumou is a company specialized in visual identity design, advertising content creation, and creative consulting for entrepreneurs and emerging brands. This repository contains the source code for the official Sumou website, a React-based application designed to showcase the company's services, projects, and contact information.

## Getting started

> **Prerequisites:**
> The following steps require [NodeJS](https://nodejs.org/en/) to be installed on your system, so please
> install it beforehand if you haven't already.

To get started with your project, you'll first need to install the dependencies with:

```
npm install
```

This command will download and install all the necessary packages defined in `package.json`.

Then, you'll be able to run a development version of the project with:

```
npm run dev
```

After a few seconds, your project should be accessible at the address
[http://localhost:5173/](http://localhost:5173/)

This command starts a local development server with hot-reloading, which means that the browser will automatically refresh when you make changes to the code.

If you are satisfied with the result, you can finally build the project for release with:

```
npm run build
```

This command will create a `dist` folder with the optimized and minified files for production.

## Project Structure

The project follows a standard React application structure. All the source code is located in the `src` directory.

-   **`src/components`**: Contains reusable React components.
    -   **`src/components/ui`**: Contains generic UI components, built with `shadcn/ui`.
    -   **`src/components/Layout`**: Contains the main layout of the application.
-   **`src/contexts`**: Contains React contexts for state management.
    -   **`src/contexts/LanguageContext.jsx`**: Manages the application's language.
-   **`src/i18n.js`**: Configuration file for `i18next`, the internationalization library.
-   **`src/locales`**: Contains JSON files with translations for different languages.
-   **`src/pages`**: Contains the main pages of the application. Each page is a separate component.
-   **`src/screens`**: Contains sections that are part of a larger page. This helps to break down complex pages into smaller, manageable components.
-   **`src/services`**: Contains services that interact with external APIs.
    -   **`src/services/emailService.js`**: Handles sending emails through `emailjs`.
-   **`src/lib`**: Contains utility functions.
    -   **`src/lib/utils.js`**: Contains helper functions, including `cn` for merging CSS classes.

## Components

The project uses `shadcn/ui` for its UI components. These components are located in `src/components/ui`. They are highly customizable and reusable.

For example, to use the `Button` component, you can import it and use it like this:

```jsx
import { Button } from "@/components/ui/button";

// ...

<Button variant="outline" size="lg">Click me</Button>
```

For more information on the available components and their props, please refer to the [official shadcn/ui documentation](https://ui.shadcn.com/).

## Internationalization (i18n)

The application supports multiple languages using the `i18next` library. The configuration is in `src/i18n.js`.

### Adding a new language

1.  Create a new JSON file in `src/locales` with the language code as the filename (e.g., `fr.json`).
2.  Add the translations to the new file, following the structure of the existing `en.json` and `ar.json` files.
3.  Import the new language file in `src/i18n.js` and add it to the `resources` object.

### Adding new translations

To add a new translation key, add it to both `en.json` and `ar.json` files, and then use the `useTranslation` hook to access it in your components.

## Contact Form

The contact form uses `emailjs` to send emails. The `sendEmail` function in `src/services/emailService.js` handles the email sending logic.

The service is initialized with a public key, but for a real-world application, you should consider using environment variables to store your `emailjs` credentials.

## Deployment

To build the application for production, run the following command:

```
npm run build
```

This will create a `dist` directory with the optimized and minified files. You can then deploy the contents of this directory to any static hosting service, such as Netlify, Vercel, or GitHub Pages.
