# Frontend-Challenge

Rick and Morty App! you can see list of characters from this tv show, also you can search by name of characters and add gender filter and status filter. So you will see characters description like hero cards to you can search more easy.

## How was build

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), was used[TypeScript](https://www.typescriptlang.org/), hooks from [React](https://es.reactjs.org/docs/hooks-intro.html) as well, and [React Query](https://react-query.tanstack.com/) for controling state of request. For the API, was used [Rick and Morty](https://rickandmortyapi.com/documentation).

__PD:__ _I could see that Rick&Morty API has a bug with search by name or filter mix, send the same characters sometimes. You can see this in network from browser and you will see that query is correct but the response from backend is wrong. I researched it and I found another projects that uses the same API and have same issue, like this https://react-projects-psi.vercel.app/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
