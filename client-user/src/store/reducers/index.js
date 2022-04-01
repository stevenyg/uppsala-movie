const initialState = {
    movies: [],
    moviesDetail: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "getSearchMovies":
            return { ...state, movies: action.payload }
        case "getMoviesDetail":
            return { ...state, moviesDetail: action.payload }
        default:
            return state;
    }
}

export default reducer