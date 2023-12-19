# usePopcorn: A movie-list app built with React!

Original project designed by [Jonas Schmedtmann](https://github.com/jonasschmedtmann), as part of his [Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/). I followed his design and built this project to practice core React concepts.

## Live Version

Available [here on Netlify](https://usepopcorn-tsm13.netlify.app/).

### Project Features

- Users can look up movies, rate them, and add them to a personal _watched list_!
- Movies added to the list can be deleted anytime.
- The list is stored inside the browser's local storage.

### Main technical concepts applied in this project:

- Simple state management with `useState`.
- `useEffect` for effectful and imperative code, such as performing data fetching from an external API, [OMDB](https://www.omdbapi.com/), and changing the page title according to movie name.
- `useRef`, to access a DOM element.
- Custom hooks.
- Local data persistence with `localStorage`.
- The concept of Component Composition was used to fix some small issues with prop drilling.

### Notes

- Built with Vite.
- Not 100% optimized for small screens, since the goal of this project was to practice mainly React/JS features, but it should be mobile-friendly enough.
