
export const fetchMovies = () => {
    return (dispatch, getState) => {
        fetch('https://radiant-meadow-06105.herokuapp.com/movies', {
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
        fetch('https://radiant-meadow-06105.herokuapp.com/genres', {
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
        fetch('https://radiant-meadow-06105.herokuapp.com/genres', {
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

export const fetchUpdateGenre = (payload, id) => {
    return (dispatch, getState) => {
        return fetch(`https://radiant-meadow-06105.herokuapp.com/genres/${id}`, {
            method: 'PUT',
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

export const fetchUpdateMovie = (payload, id, cast1, cast2, cast3) => {
    return (dispatch, getState) => {
        return fetch(`https://radiant-meadow-06105.herokuapp.com/movies/${id}/?idcast1=${cast1}&idcast2=${cast2}&idcast3=${cast3}`, {
            method: 'PUT',
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
        return fetch(`https://radiant-meadow-06105.herokuapp.com/genres/${payload}`, {
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

export const fetchMoviesDetail = (payload) => {
    return (dispatch, getState) => {
        fetch(`https://radiant-meadow-06105.herokuapp.com/movies/${payload}`, {
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
                console.log(data, 'ini data');
                dispatch({
                    type: 'getMoviesDetail',
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
        return fetch(`https://radiant-meadow-06105.herokuapp.com/genres/${payload}`, {
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
        fetch('https://radiant-meadow-06105.herokuapp.com/login', {
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
        fetch('https://radiant-meadow-06105.herokuapp.com/register', {
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
        return fetch(`https://radiant-meadow-06105.herokuapp.com/movies/${id}`, {
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
        return fetch('https://radiant-meadow-06105.herokuapp.com/movies', {
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
