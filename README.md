# React Todo App

A simple Todo application built with React to demonstrate core React concepts. This project is designed for students learning React fundamentals.

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone git@github.com:HCDE-438-Spring-2025/todo-app.git
cd todo-app
git checkout -b in_class_activity
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
todo-app/
├── public/
├── src/
│   ├── components/
│   │   ├── TodoItem/
│   │   │   ├── TodoItem.jsx
│   │   │   └── TodoItem.css
│   │   └── TodoList/
│   │       ├── TodoList.jsx
│   │       └── TodoList.css
│   ├── pages/
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   └── Settings/
│   │       ├── Settings.jsx
│   │       └── Settings.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## React Concepts Demonstrated

- **Component Structure**: Breaking UI into reusable components
- **Props**: Passing data and functions to child components
- **State Management**: Using React's useState hook
- **Side Effects**: Using useEffect for lifecycle events
- **Conditional Rendering**: Showing UI elements based on conditions
- **Routing**: Navigation between different pages

## In-Class Activities

These activities are designed to reinforce your understanding of React fundamentals. Complete them in order to enhance the Todo application.

### Activity 1: Todo Counter

**Objective:** Add a counter that shows the number of active todos.

**What you'll learn:**
- How to derive values from state
- Conditional rendering in React

**Hints:**
- Use the `filter()` method on the todos array to count incomplete todos
- No need for a new state variable, just calculate it on the fly
- Place the counter element after the TodoList component

### Activity 2: Todo Categories (Work or Personal)

**Objective:** Add a simple category selection for new todos.

**What you'll learn:**
- Form handling in React
- Working with radio buttons
- Updating state with complex objects

**Hints:**
- Add a new state variable for storing the selected category
- Use radio buttons with onChange handlers
- Update the Todo object structure to include category
- Use CSS classes to visually distinguish different categories

### Activity 3: Light/Dark Theme Toggle

**Objective:** Add a button to toggle between light and dark themes.

**What you'll learn:**
- Using useEffect for side effects
- Working with document properties
- CSS variables or classes for theming

**Hints:**
- Add a boolean state variable for tracking the current theme
- Use useEffect to add or remove a CSS class on the document.body
- Add CSS styles for the dark theme variant of all components
- Place the toggle button in the navbar

### Activity 4: LocalStorage for Todos

**Objective:** Make todos persist between page refreshes.

**What you'll learn:**
- Using localStorage in React
- Implementing data persistence
- Multiple useEffect hooks for different purposes

**Hints:**
- You need two useEffect hooks:
  1. One to load todos from localStorage when the app starts
  2. One to save todos to localStorage whenever they change
- Use JSON.stringify/parse to convert between JavaScript objects and localStorage strings
- Be careful with the dependency array in each useEffect

### Activity 5: Clear All Button

**Objective:** Add a button to clear all todos at once.

**What you'll learn:**
- Event handling in React
- Conditional rendering
- Confirmations in user interfaces

**Hints:**
- Only show the button when there are todos to clear
- Use window.confirm() for a simple confirmation dialog
- Reset the todos state to an empty array when confirmed
- Add appropriate styling for the button

## Bonus Challenges

If you finish the main activities ahead of time, try these bonus challenges:

1. **Todo Search**: Add a search input that filters todos as you type
2. **Todo Editing**: Add the ability to edit existing todos
3. **Todo Sorting**: Add buttons to sort todos alphabetically or by creation date
4. **Todo Filtering**: Add filters for showing all, active, or completed todos

## Important React Principles to Remember

- Always treat state as immutable (create new objects/arrays, don't modify existing ones)
- React components re-render when:
  - Their state changes
  - Their props change
  - Their parent component re-renders
- The useState hook returns an array with:
  - The current state value
  - A function to update that value
- The useEffect hook takes two arguments:
  - A function to run (the "effect")
  - A dependency array that controls when the effect runs

## Resources

- [React Documentation](https://react.dev/)
- [React Hooks Reference](https://react.dev/reference/react)
- [Vite Documentation](https://vitejs.dev/guide/)

## Acknowledgments

- Created for UW HCDE 438 : Web Technologies course 
- Built with React, Vite, and React Router
