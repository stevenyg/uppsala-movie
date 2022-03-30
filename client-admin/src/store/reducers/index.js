
const initialState = {
    user: [],
    movies: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "user/getMovies":
            return { ...state, movies: action.payload }
        default:
            return state;
    }
}

export default reducer