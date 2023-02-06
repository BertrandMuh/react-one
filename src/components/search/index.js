import React from 'react'
import { useState, useEffect } from 'react';
import './index.css'
import axios from 'axios'

const Search = (props) => {
    // properties passed from parent
    let { setSearchedMovie } = props;
    let user = props.user;
    let { logString } = props;

    // passing argument inside the function
    logString("This string is from Search Child Component!")
    console.log(user);

    const [searchString, setSearchString] = useState('');

    // listen for submit and make call to server

    const handleChange = (e) => {
        console.dir(e.target.value); // What the element value WOULD BE after the change
        let newValue = e.target.value;
        // was t
        // e.target.value is th
        setSearchString(newValue)
    }

    const makeServerCall = async (string) => {
        let serverResponse = await axios({
            method: 'GET',
            url: `http://localhost:5000/get_movie/${string}`
        });
        console.log(serverResponse);
        setSearchString('');
        setSearchedMovie(serverResponse.data)
    }
    useEffect(() => {
        makeServerCall("Pacific Rim")
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitting!");
        // if we don't prevent the default, the page will refresh
        // call express server with the string
        makeServerCall(searchString)
    };


    return (
        <section style={{ borderBottom: "4px solid black", marginBottom: "20px", paddingBottom: "12px" }}>
            <h3>Search</h3>
            <form onSubmit={(event) => handleSubmit(event)}>
                <label htmlFor="movie-search">Type the name of the movie you want to see!</label>
                <input
                    type="search"
                    name="movie-search"
                    value={searchString}
                    placeholder="movie name"
                    onChange={(event) => handleChange(event)}
                />
                <button type="">click me!</button>
            </form>
        </section>
    )
};

export default Search;