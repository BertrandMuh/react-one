/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useState, useEffect } from 'react';
import './index.css'
import axios from 'axios'

const Search = (props) => {
    // properties passed from parent (App.js)
    let { setSearchedMovie } = props;
    // let user = props.user;
    let { logString } = props;

    // passing argument inside the function that came in the props from App.js
    logString("This string is from Search Child Component!")


    const [searchString, setSearchString] = useState('');

    // listen for submit and make call to server

    const handleChange = (e) => {
        let newValue = e.target.value;
        // was t
        // e.target.value is th
        setSearchString(newValue)
    }

    const makeServerCall = async (string) => {
        // Sending request to the server
        let serverResponse = await axios({
            method: 'GET',
            url: `/get_movie/${string}`
        });
        // console.log(serverResponse);
        setSearchString('');
        setSearchedMovie(serverResponse.data)
    }
    useEffect(() => {
        makeServerCall("Pacific Rim")
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("submitting!");
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