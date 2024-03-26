import React from "react";

const JokeWitHooks = ({ jokes, votes }) => {
    const jokeElements = []; // Array to store JSX elements
    
    // Loop over each index of the jokes array
    for (let i = 0; i < jokes.length; i++) {
        const joke = jokes[i]; // Get the joke data at the current index
        // Create JSX elements for each joke and push them to the array
        jokeElements.push(
            <div className="Joke-votearea" key={joke.id}>
                <button onClick={() => votes(joke.id, +1)}>
                    <i className="fas fa-thumbs-up" />
                </button>

                <button onClick={() => votes(joke.id, -1)}>
                    <i className="fas fa-thumbs-down" />
                </button>
                <p>{joke.vote}</p>

                <div className="Joke-text">{joke.text}</div>
            </div>
        );
    }

    return (
        <div className="Joke">
            {jokeElements} 
        </div>
    );
};


export default JokeWitHooks;
