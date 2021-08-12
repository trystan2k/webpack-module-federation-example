### webpack-module-federation-example

# NX

NX is used in this version to basically execute the project in parallel using a single command from the project root folder, but since it is installed, all features can be configured to allow optimizations.

NX also has a nice feature that caches disk output, so if you run `npm run build` for a second time, without changing anything, it will detected that the files are still the same and will not execute the process. If you had changed just one of the projects, just the build process for this project will be executed. The same happens for all targets (test, for example)

# Lerna

In this case, Lerna is used to link packages dependency and hoist packages dependencies to root node_modules, so all packages has access to them. This necessary when using NPM v6 (before npm workspaces were implemented in v7).

# Steps

Execute `npm install` to install all dependencies

To start the MFEs in development mode, just execute:

`npm run develop`

To build for production execute the command:

`npm run build`

Once the build is finished, you can start a simple local web server with:

`npm run start`