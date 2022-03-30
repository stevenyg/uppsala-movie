
export const fetchMovies = () => {
    return (dispatch, getState) => {
        fetch('http://localhost:3001/movies')
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                dispatch({
                    type: 'user/getMovies',
                    payload: data
                })
            })
            .catch(error => {
                console.log(error)
            });
    }
}

export const fetchRegister = (payload) => {
    return (dispatch, getState) => {
        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch(error => {
                console.log(error)
            });
    }
}

export const fetchDeleteMovie = (id) => {
    return (dispatch, getState) => {
        fetch(`http://localhost:3001/movies/${id}`, {
            method: 'DELETE',
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
                console.log(data);
            })
            .catch(error => {
                console.log(error)
            });
    }
}

export const fetchMovieForm = (payload) => {
    return (dispatch, getState) => {
        fetch('http://localhost:3001/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch(error => {
                console.log(error)
            });
    }
}
