1. SPA vs. MPA
SPA (Single Page Application): It is a website that loads only one page. It changes the content without refreshing the browser.

MPA (Multiple Page Application): It is a traditional website. The browser reloads and requests a new page from the server every time you click a link.


2. MVC vs. MVVM in Angular
MVC: Angular follows this pattern where Model is the data, View is the HTML, and Controller is the TypeScript code.

MVVM: In Angular, the TypeScript file acts as the ViewModel. It connects the Model (data) to the View (UI) automatically using Binding.


3. Purpose of Component Files

.ts (TypeScript): It is used to write the Logic and functions of the component.

.html: It is used to design the View and the structure of the page.

.css: It is used to add Styles, colors, and themes to the component.

.spec.ts: It is used for Unit Testing to make sure the code works correctly.


4. Interpolation
Interpolation is used to display data from the TypeScript file inside the HTML page.
It uses double curly braces like this: {{ variableName }}.

# StudentApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


