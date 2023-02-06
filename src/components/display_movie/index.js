import React from 'react'


function Movie(props) {
    let { searchedMovie } = props;
    console.log(searchedMovie);

    const returnedMovieJSX = () => {
        if (searchedMovie !== null) {
            return (
                <div>
                    <h3>MOVIE DISPLAY</h3>
                    <img src={searchedMovie.Poster} alt={searchedMovie.Title} />
                    <h4>{searchedMovie.Title}</h4>
                    <p>{searchedMovie.Plot}</p>
                </div>
            )
        }
        else {
            return (
                <div>
                    Waiting for movie...
                </div>
            )
        }
    }

    return (
        <div id="movie-div">
            {returnedMovieJSX()}
        </div>
    )
}

export default Movie
