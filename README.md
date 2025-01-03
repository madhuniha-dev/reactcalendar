

## Description

This is a simple React application that displays a calendar with the current month and allows the user to select a date. The user can also add events to the calendar by clicking on a date and filling out a form. The events are saved in the browser's local storage. (for now).

The task was to create a simple calendar application that allows the user to add events to the calendar. The challenge was to build the application functionality from scratch without using any external libraries, therefore the base functionality of the calendar was built using JavaScript's Date object.


## Development environment

- Node.js v18.13.0
- npm v9.4.0
- React v18.2.0
- Vite v4.1.0

Vite provides a nearly identical experience to Create React App, but with a much faster build time and a more flexible configuration. Therefore, I decided to use it for this challenge.

## Functionality

### Calendar buttons

In the Calendar component, the header has three buttons that allow the user to go back and forward on the current date & year, and a button that allows the user to go back to the current date & year. (Back, Next, Today)

### Calendar events

The events are saved in the browser's local storage. This allows the user to refresh the page and the events will still be there.


### Testing

The application has basic unit tests for the components rendered in the application.

The tests are run using Vitest and React Testing Library.

```bash
npm run test
```

## How to run the application

To run the application, follow these steps:

1. Clone the repository

```bash
git clone https://github.com/madhuniha-dev/reactcalendar.git
```

2. Install the dependencies

```bash
npm install
```

3. Run the application

```bash
npm run dev
```

4. Open the application in the browser

```bash
http://localhost:5173
```

Alternatively, you can visit the application at the following URL:

https://calendar-reactprojectx.netlify.app/

## Roadmap

- [x] Display a calendar with the current month
- [x] Allow the user to select a date
- [x] Allow the user to add events to the calendar
- [x] Save events in the browser's local storage
- [x] Import appoitments from a JSON file
