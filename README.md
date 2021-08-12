### webpack-module-federation-example

# NX

NX is used in this version to basically execute the project in parallel using a single command from the project root folder, but since it is installed, all features can be configured to allow optimizations.

NX also has a nice feature that caches disk output, so if you run `npm run build` for a second time, without changing anything, it will detected that the files are still the same and will not execute the process. If you had changed just one of the projects, just the build process for this project will be executed. The same happens for all targets (test, for example)

# NPM v7

In this case, NPM v7 workspaces feature are been used so all dependencies are hoisted to root node_modules and all packages has access to them.

## Cons & Pros

### Pros

- It is was not generated using create-react-app we have access to Webpack configuration.
- All apps are in a Monorepo that can also contain libraries (like a design system or shared components)
- Module federation works as expected

### Cons

- New apps needs to be generated manually or via a custom CLI as we can't use CRA.
- Need to configure NX to be able to execute multiple commands at once. This can be solved using Lerna or custom scripts and shouldn't be a blocker

# Steps

Execute `npm install` to install all dependencies

To start the MFEs in development mode, just execute:

`npm run develop`

To build for production execute the command:

`npm run build`

Once the build is finished, you can start a simple local web server with:

`npm run start`