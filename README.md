### webpack-module-federation-example

# Lerna + Yarn 
In this case it uses Lerna + Yarn workspace to manage the shared dependencies and link between packages in the monorepo. And also it uses Lerna to execute commands in all packages at once.

## Cons & Pros

### Pros

- It is was not generated using create-react-app we have access to Webpack configuration.
- All apps are in a Monorepo that can also contain libraries (like a design system or shared components)
- Module federation works as expected

### Cons

- New apps needs to be generated manually or via a custom CLI as we can't use CRA.
- Uses Yarn, which would require possible changes in CI/CD pipelines

# Steps

Execute `yarn` to install all dependencies

To start the MFEs in development mode, just execute:

`yarn develop`

To build for production execute the command:

`yarn build`

Once the build is finished, you can start a simple local web server with:

`yarn start`