### webpack-module-federation-example

# NX

This project was generated using [Nx](https://nx.dev).
# Module Federation

The project was modified to update to [Webpack 5](https://nx.dev/latest/angular/guides/webpack-5) to be able to enable Module Federation.

The applications can be generated using NX generator tool `nx g @nrwl/react:app my-app` but it is necessary to use a custom Webpack config (modifying the `webpackConfig` field in `workspace.json` file to point to a custom webpackConfig.js file) where the Module Federation configuration should be added. 

**IMPORTANT**: The default NX Webpack config sets the `optimization.runtimeChunk` to `single` and this configuration is not compatible with Module Federation, so it should be changed to `false`.

Besides this small change, everything else works as expected for Module Federation in a NX Workspace project. 

## Cons & Pros

### Pros

- It is more customizable than, for example, create-react-app, as we have access (and can override) the default Webpack configuration.
- All apps are in a Monorepo that can also contain libraries (like a design system or shared components)
- Module federation works as expected
- Can be extended with plugins (we could right one to generate the projects already with Module Federation configured, so it would be easier to generate new apps)

### Cons

- New apps needs to be generated using NX cli, which generate too much boilerplate (that need to be carefully deleted).
- It generates 2 config files (workspace.json and nx.json) that need to be carefully touched to avoid break anything or left unused code.


# Steps

Execute `npm install` to install all dependencies

To start the all MFEs in development mode, just execute:

`npm run serve:all`

To build for production execute the command:

`npm run build:all`

Once the build is finished, you can start a simple local web server with:

`npm run start:all`

To execute only a specific MFE execute `npm run nx serve <mfe-name>`

`npm run nx serve login`
