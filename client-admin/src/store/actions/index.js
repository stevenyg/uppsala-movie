
export const fetchMovies = () => {
    return (dispatch, getState) => {
        fetch('http://localhost:3000/movies', {
            headers: {
                access_token: localStorage.access_token,
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
                    type: 'getMovies',
                    payload: data
                })
            })
            .catch(error => {
                console.log(error)
            });
    }
}

export const fetchGenres = () => {
    return (dispatch, getState) => {
        fetch('http://localhost:3000/genres', {
            headers: {
                access_token: localStorage.access_token,
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
                    type: 'getGenres',
                    payload: data
                })
            })
            .catch(error => {
                console.log(error)
            });
    }
}

export const fetchAddGenre = (payload) => {
    return (dispatch, getState) => {
        fetch('http://localhost:3000/genres', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                access_token: localStorage.access_token,
            },
            body: JSON.stringify(payload)
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {

            })
            .catch(error => {
                console.log(error)
            });
    }
}

export const fetchGenreDetail = (payload) => {
    return (dispatch, getState) => {
        fetch(`http://localhost:3000/genres/${payload}`, {
            headers: {
                access_token: localStorage.access_token,
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
                    type: 'getGenresDetail',
                    payload: data
                })
            })
            .catch(error => {
                console.log(error)
            });
    }
}

export const fetchDeleteGenre = (payload) => {
    return (dispatch, getState) => {
        fetch(`http://localhost:3000/genres/${payload}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                access_token: localStorage.access_token,
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {

            })
            .catch(error => {
                console.log(error)
            });
    }
}

export const fetchLogin = (payload, cb) => {
    return (dispatch, getState) => {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                localStorage.access_token = data.access_token
                cb()
            })
            .catch(error => {
                console.log(error)
            });
    }
}

export const fetchRegister = (payload) => {
    return (dispatch, getState) => {
        fetch('http://localhost:3000/register', {
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

            })
            .catch(error => {
                console.log(error)
            });
    }
}

export const fetchDeleteMovie = (id) => {
    return (dispatch, getState) => {
        fetch(`http://localhost:3000/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                access_token: localStorage.access_token,
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
        fetch('http://localhost:3000/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                access_token: localStorage.access_token,
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
