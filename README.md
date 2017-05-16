# Workshop: Modern Web Development With React & Redux
React is a JavaScript library for creating user interfaces developed by Facebook. It uses concept so-called Virtual DOM where all the components actually live. This Virtual DOM approach gives lots of flexibility and boosts the performance because React does smart calculations to minimize the amount of costly operations in the actual DOM.

This hands-on workshop will help you to deeply understand and learn core concepts of React, how to structure your application with Redux and test it in a proper way.

## Prerequisites
Hardware:
- A personal computer with internet connection.

Software:
- A terminal client.
- Favorite code editor or IDE like Visual Studio Code, Sublime Text, TextMate, WebStorm, etc.
- Node (LTS) + NPM (https://nodejs.org/en/download/) installed.
- Yarn (https://yarnpkg.com/en/docs/install) installed to speed up `npm install`.
- Chrome browser ( https://www.google.com/chrome/browser/desktop/index.html ).

## Getting Started
- `git clone` this project;
- open any step of a certain workshop part;
- run `npm install` or `yarn` inside your terminal client;
- run `npm start` or `yarn start`;
- open http://localhost:3000/ inside your [Chrome](https://www.google.com/chrome/browser/desktop/index.html) browser (might happen automatically);
- browser will reload automatically after changes in source code;

## Hands-on Session Instructions
Follow the instructions to complete the Hangman game. 

__IMPORTANT NOTE__: The actual implementation of each and every step is stored in this repository.

### Part 1: Welcome to React
- Step 1: Clone the project, install modules, render game title (Hangman Game) and some text.

### Part 2: Dive into Components
- Step 1: Move existing code from `index.js` to `<App/>` component. Replace game title with game logo (`./resources/logo.png`)
- Step 2: Create initial state with `question` and `text`, render it and then extract it to `<HiddenText/>` component. Text should be hidden.
- Step 3: Render alphabet letters as buttons inside `<Alphabet/>` (use alphabet from `./resources/alphabet.js`) component and fire an event if any is clicked.
- Step 4: Connect `<HiddenText/>` and `<Alphabet/>` components. Letters should be revealed after successful guess. Create and use `guesses` `Array` inside state.
- Step 5: Display 6 `lives` and decrement them after unsuccessful guess. Extract code to `<Hangman/>` component. In addition implement hangman images (`./resources/**/*.png`).

### Part 3: State management with Redux
- Step 1: Install `redux` and `react-redux`. Create store, simple reducer and initial state inside `store.js`. Wrap `<App/>` inside redux `<Provider/>`.
- Step 2: Connect `<App/>` to Redux using `connect()` function. Map `question` and `text` from state to props and use them instead state. Cleanup redundant code.
- Step 3: Map `lives` from state to props. Create `DECREMENT_LIVES` action inside `actions/index.js` and handle it inside reducer. Finish `lives` with Redux implementation.
- Step 4: Do the same for `guesses` property, just use `GUESS_LETTER` action.
- Step 5: Install `axios` and `redux-thunk`. Add `thunk` middleware to the store. Then use `axios` to fetch data from `/data.json` inside `fetchData` action. Pick random `question` and `text` from data inside reducer.

### Part 4: Testing React apps
- Step 1: Install `enzyme` and `react-test-renderer`. Inside `HiddenText.spec.js` write 2 tests using `shallow()`: initial `text` is hidden and another with some revealed letters.
- Step 2: Install `axios-mock-adapter` and mock data fetch. Then Using `mount()` inside `App.spec.js` write 3 tests: title exists, 26 letters rendered and 6 lives visible.
- Step 3: Write 2 integration tests: successful letter guess and unsuccessful letter guess. After creating a wrapper use `setImmediate()` for the rest of the code so the data is accessible.

## License
MIT
