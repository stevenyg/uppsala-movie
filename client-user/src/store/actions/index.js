export const fetchSearchMovies = (payload) => {
    return (dispatch, getState) => {
        fetch(`https://radiant-meadow-06105.herokuapp.com/user/search/?search=${payload}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                dispatch({
                    type: 'getSearchMovies',
                    payload: data
                })
            })
            .catch(error => {
                console.log(error)
            });
    }
}

export const fetchMoviesDetail = (slug, id) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'setLoading',
            payload: true,
        })
        fetch(`https://radiant-meadow-06105.herokuapp.com/user/movies/${slug}/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                dispatch({
                    type: 'getMoviesDetail',
                    payload: data
                })
                dispatch({
                    type: 'setLoading',
                    payload: false,
                })
            })
            .catch(error => {
                console.log(error)
                dispatch({
                    type: 'setLoading',
                    payload: false,
                })
            });

    }
}