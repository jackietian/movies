import movieReducer, { initialState } from "./movie-reducer";
import movieActionTypes from "./movie-action-types";

describe("movie reducer", () => {
  it("should provide the initial state", () => {
    expect(movieReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SEARCH_TEXT_CHANGED action", () => {
    expect(
      movieReducer(initialState, {
        type: movieActionTypes.SEARCH_TEXT_CHANGED,
        data: { text: "some text" }
      })
    ).toEqual({
      ...initialState,
      searchText: "some text"
    });
  });

  it("should handle LOAD_MOVIES_SUCCEEDED action", () => {
    expect(
      movieReducer(initialState, {
        type: movieActionTypes.LOAD_MOVIES_SUCCEEDED,
        data: { movies: [1, 2, 3] }
      })
    ).toEqual({
      ...initialState,
      movies: [1, 2, 3],
      page: {
        ...initialState.page,
        totalElements: 3,
        totalPages: 1
      }
    });
  });

  it("should handle SELECT_MOVIE action", () => {
    expect(
      movieReducer(initialState, {
        type: movieActionTypes.SELECT_MOVIE,
        data: { movie: { title: "123" } }
      })
    ).toEqual({
      ...initialState,
      currentMovie: { title: "123" }
    });
  });

  it("should handle CHANGE_PAGE action", () => {
    expect(
      movieReducer(initialState, {
        type: movieActionTypes.CHANGE_PAGE,
        data: { nextPage: 1 }
      })
    ).toEqual({
      ...initialState,
      page: {
        ...initialState.page,
        currentPage: 1
      }
    });
  });

  
});
