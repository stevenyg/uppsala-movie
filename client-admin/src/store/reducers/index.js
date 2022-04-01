
const initialState = {
    user: [],
    movies: [],
    genres: [],
    genresDetail: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "getMovies":
            return { ...state, movies: action.payload }
        case "getGenres":
            return { ...state, genres: action.payload }
        case "getGenresDetail":
            return { ...state, genresDetail: action.payload }
        default:
            return state;
    }
}

export default reducer