# Case Study

This is a React application that I built for a case study.

## Getting Started

Install dependencies:

`npm i`

After the command finishes running, start the mock API server:

`npm run serve-dev`

Then open a new terminal window and start the client app:

`npm start`

That's it! You can visit localhost:3000 to view the app.

---

## Notes

Since implementing authentication was not part of the requirements, I decided to not waste time on that and just allow any valid email & password combination to "sign up" (password must be longer than 9 chars, that's the only requirement).

Upon sign up, there's no new user is created. You just get access to view the List page.

To implement the mock API server, I used the npm module [json-server](https://www.npmjs.com/package/json-server) which exposes a full-blown REST API out of a JSON file.
