# File List App
  File List App is a simple app which contains a list of files. It consists of a table and a header. The table displays list of all the files and each individual file details. The header shows the total number of selected files as well as a download button. You can single/multi select/deselect the files. Only available files can be dowloaded. On clicking the download button a modal shows up which shows the list of downloadable(available) files.

## Steps 
- In order to clone the File List app type `git clone https://github.com/srhemdev/FileList.git` from your terminal. Alternatively you can just download the zip file.
- If you do not have `yarn` or `node` set up locally on your machine, please install it using `brew`(should be available on Mac). 
  - Install node using https://formulae.brew.sh/formula/node. 
  - Install yarn https://formulae.brew.sh/formula/yarn
  - For Windows users try installing with npm.
- Once the above is completed, run `yarn`. This will download all the necessary dependencies listed in package.json which is required to run this app. It will also generate a yarn.lock file.
- Run `yarn start`. This will launch the app locally in the development mode.
- Open [http://localhost:3000] to view it in the browser.
- To run unit tests, run `yarn test`.

## References
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- The following command was use to install the bootstrap project with Typescript
  - yarn create react-app my-app --template typescript
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
  - [deployment](https://facebook.github.io/create-react-app/docs/deployment)
  - [running tests](https://facebook.github.io/create-react-app/docs/running-tests) 
- FontAwesome Icons: (https://docs.fontawesome.com/web/use-with/react)
- UUID Generator: https://www.npmjs.com/package/uuid

## Notes
- Placed the filesData.json under a `public/data` folder to serve it from the localhost server.
- For the sake of simplicity have not included `yarn build`. This command can be used for deployments to production or if you wish to run your app on an Express or Node.js server.
