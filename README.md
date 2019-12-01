Countdown Game (Frontend) [Repo](https://github.com/flyg101/countdown-frontend).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm build`

Builds the app for production to the `build` folder.<br />

## Technical Choices

Framework: React<br />
React was chosen as the frontend framework for this project for its component-based design nature.
The core component for the application is the LetterBox component. The logic for this component is reused across the app (both for option letters and field letters).
Aggregating the drag & drop logic for the app inside a single component makes it reusable for any number of components we may need (9 options and 5 or 6 letter fields).
Stateful logic is encapsulated in App.js

## Notes

Kindly click on the footer to enable "cheat mode" and show the expected word.
