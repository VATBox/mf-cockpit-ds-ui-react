# mf-cockpit-ds-ui-react

Template to create react mFe. Read the instruction below and use this as a template to create new react mFe.

1. The name of the new repository should start with prefix "mf-cockpit-" by convention
2. Change the name with the new repository ( mf-cockpit-ds-ui-react => name of new repository ) in the following files: - package-lock.json - tsconfig.json - webpack.config.js
   Also change the filename itself bluedot-mf-cockpit-ds-ui-react.tsx => bluedot-name of the repostiroy.tsx ( for example mf-cockpit-capua)
3. Change the local port in the document server => index.ts to suit your needs for local development
4. Run "npm install" command to install the libraries. If you need token from aws code artifacts do the following:
   - get the token from aws code artifacts
   - create .npmrc file on the root level using the .npmrc.template
   - insert the token in .npmrc file and try npm install again
5. When bundling the mFe, the architecture is set to group all the styles form all the mFe deployed in one file. In order to not override the styles from different mFe ( for example styles for buttons, tables, forms etc ) we need to choose a prefix which we are going to use when we are creating class styles.
   Choose a corresponding prefix for classes in styles and please enforce it the development phase.
6. Add email in the file located in .github => CODEOWNERS
7. In different repository called mf-cockpit-shell, we should register the new mFe
8. If we want to have button in the navbar for the new mFE, we should add it in the mf-cockpit-navbar repository

# Local development

The power of the architecture of mFe is that each of them are independent from eachother.
This allows for faster build times and easy development. We can easily inject the mFe from local environment to the spinner environemnt.
This allows for the use of resources form the spinner and plug in the local development.
For example if we want to develop in mf-cockpit-data-entry, we can run it locally and inject the script into our spinner environment.
With this we are using the BE + DB resources from spinner and only using the code for that specific mFe that we are running locally.
To be able to use this functionality, follow theese steps:

1. login to qa-env2 spinner to the cockpit page
2. open "developer tools" in the browser ( press f12 in chrome ) and navigate to "Application"
3. expend the local storage and click on the https://cockpit.qa-env2.k8rnd.bluedot-group.com/
4. add key-value pair devtools:true
5. click refresh on the page and in the bottom right corrner an incon with symbol {...} will appear
6. click on it will expand the import maps
7. find the mfe that you want to overried with your service that is started locally. Here is an example of the url: http://localhost:4210/bluedot-mf-cockpit-ds-ui-react.js. Please note that the port number should be the one that you have chosen for local development
