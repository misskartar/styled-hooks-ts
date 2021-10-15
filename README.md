# styled-hooks-ts

Code school practice

## TODO:

- [X] React memo components: React.memo, if props have not changed, component won't re-render (unless there's any useState, useReducer or useContext hooks used in the component).
- [X] useMemo hook: returns a memoized value, with an array of dependencies. If the values in the array changed, the the function is re ran, otherwise the memoized value is returned.
- [X] useCallback hook: returns a memoized function, not the value. This function can then be called elsewhere. Basically stops React from creating a new instance of the function.

Could also do React testing with Jest and Enzyme
