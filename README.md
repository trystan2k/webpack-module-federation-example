### webpack-module-federation-example

# Lerna + Yarn 

In this case it uses Lerna + Yarn workspace to manage the shared dependencies and link between packages in the monorepo. And also it uses Lerna to execute commands in all packages at once. Yarn is also important as we are using a CRA beta version with CRACO version that does not support Webpack 4 and we need to use Yarn `resolutions` feature to force installation of newer dependencies. 

# create-react-app (CRA) + Module federation

Module federation is only available in Webpack v5. Currently create-react-app only supports Webpack v4. This example use a beta version of CRA (v5-beta) that add Webpack v5 support. This forces the setup to use Yarn to be able to force version of specifics dependencies. 

# CRACO + CRA

Since when scaffolding a project with CRA we are not able to configure Webpack (needed to enable Module Federation), it was necessary to use a tool called [CRACO](https://github.com/gsoft-inc/craco) which add the ability to extend CRA Webpack configuration without the need to Eject (an undoable operation). This allow us to continue to use react-scripts and get updates.


# i18n

This example also contains i18n (using i18next and react-i18next) to show that even with remote microfrontends managed by Module Federation, we are able to share the same i18next instance (and thus a change in the language in one page will be send to all pages/MFEs using it) and even overwrite translations of a MFE from another one.

# Authentication (React Context API)

This example includes a very simple authentication feature just to show that it is also possible to use React Context API with remote MFEs. When user logins at the home page, a token is generated and stored in the Context and later retrieved in another MFE to be able to check if user is still logged and show some information get from authentication fake system.

## Cons & Pros

### Pros

- We could still use CRA to generate the project and still be able to setup Module Federation (using CRACO).
- All apps are in a Monorepo that can also contain libraries (like a design system or shared components)
- Module federation works as expected

### Cons

- Still using a beta version of CRA
- Needed to force resolution of some dependencies

**It is expected that once CRA v5 gets released, they will work in a plugin to allow Module Federation, so in the long run it will probably be possible to use CRA + Module Federation without the need of any external tool (CRACO, for example)**

# Steps

Execute `yarn` to install all dependencies

To start the MFEs in development mode, just execute:

`yarn develop`

To build for production execute the command:

`yarn build`

Once the build is finished, you can start a simple local web server with:

`yarn start`