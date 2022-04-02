
const initialState = {
    user: [],
    movies: [],
    genres: [],
    genresDetail: [],
    moviesDetail: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "getMovies":
            return { ...state, movies: action.payload }
        case "getGenres":
            return { ...state, genres: action.payload }
        case "getGenresDetail":
            return { ...state, genresDetail: action.payload }
        case "getMoviesDetail":
            return { ...state, moviesDetail: action.payload }
        default:
            return state;
    }
}

export default reducer