### webpack-module-federation-example

# NX

NX is used in this version to basically execute the project in parallel using a single command from the project root folder, but since it is installed, all features can be configured to allow optimizations.

NX also has a nice feature that caches disk output, so if you run `npm run build` for a second time, without changing anything, it will detected that the files are still the same and will not execute the process. If you had changed just one of the projects, just the build process for this project will be executed. The same happens for all targets (test, for example)

# Lerna + Yarn 
In this case it uses Lerna + Yarn workspace to manage the shared dependencies and link between packages in the monorepo. And also it uses Lerna to execute commands in all packages at once.

# Steps

Execute `yarn` to install all dependencies

To start the MFEs in development mode, just execute:

`yarn develop`

To build for production execute the command:

`yarn build`

Once the build is finished, you can start a simple local web server with:

`yarn start`