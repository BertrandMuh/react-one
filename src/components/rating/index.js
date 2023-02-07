import React from 'react'
// import PropTypes from 'prop-types'

function Rating(props) {
    let { Ratings } = props.searchedMovie;
    // console.log(Ratings);

    const returnLoader = () => {
        return (
            <div>
                loading...
            </div>
        )
    }

    const returnMovieRatings = () => {
        let movieRatingsJSX = Ratings.map((item, index) => {
            return (
                <div key={index}>
                    <h4>{item.Source}</h4>
                    <h5>{item.Value}</h5>
                </div>
            )
        })

        return movieRatingsJSX;
        // array of jsx
    }
    return (
        <div>
            <h1>Movie Ratings</h1>
            {Rating === null ? returnLoader() : returnMovieRatings()}
        </div>
    )
}


export default Rating
