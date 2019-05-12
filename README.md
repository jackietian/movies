# movies
A react app that can list and filter movies through omdbapi

- key libraries used: axios, node-sass, redux, redux-thunk, redux-logger and enzyme
- key components included: MovieList, MovieCard, MovieDetail and Paginator.
- for state management, redux store is used.
- to show the testing, tests are done for each unit component and reducer.
- for accessibility, here are the things done: 
    - semantic html elemnts
    - arial label for image
    - autofocus and handle key enter for input textbox
    - tabindex
    - strong color contrast between background and font color


Notes: To show to paginator, I have reset to page size to 5, coz I cannot find any response that can return more than 10 results.

### Things to do:
    - responsive design
    - support multiple browsers, right now only tested on latest chrome

## start
```npm install && npm start```

## test
```npm test```