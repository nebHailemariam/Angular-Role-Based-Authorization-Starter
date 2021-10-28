# AngularRoleBasedAuthorizationStarter

<p align="center">
  <a href="https://patrickjs.com" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" alt="Angular Starter" />
  </a>
</p>

[Angular 12](https://angular.io) starter project implementing Role Based Authorization and Lazy Loading.

## References

- https://jasonwatmore.com/post/2020/09/09/angular-10-role-based-authorization-tutorial-with-example
- https://www.freecodecamp.org/news/lazy-loading-in-angular-intro-to-ngmodules/#:~:text=Lazy%20loading%20is%20the%20process,might%20be%20loaded%20as%20well

## Application Structure

- `core/` - This folder containing helper modules such as auth guards and interceptors.
- `modules/` - This folder holds angular modules.
- `services/` - This folder contains services.
- `shared/` - This folder contains shared components and models.
- `models/` - This folder contains the definitions of our models.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
