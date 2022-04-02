const initialState = {
    movies: [],
    moviesDetail: { Genre: {}, Casts: [{}, {}, {}], },
    isLoadingMoviesDetail: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "getSearchMovies":
            return { ...state, movies: action.payload }
        case "getMoviesDetail":
            return { ...state, moviesDetail: action.payload }
        case "setLoading":
            return { ...state, isLoadingMoviesDetail: action.payload }
        default:
            return state;
    }
}

export default reducer