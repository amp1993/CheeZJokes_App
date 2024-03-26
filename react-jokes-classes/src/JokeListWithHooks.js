import React, {useState, useEffect} from "react";
import JokeWitHooks from "./JokeWithHooks";
import axios from "axios";
import './JokeList.css'


const JokeListWithHooks = () => {
    const [jokes, setJokes] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJokes = async () => {
            try {
                let fetchedJokes = [];
                while (fetchedJokes.length < 5) {
                    const result = await axios.get("https://icanhazdadjoke.com", {
                        headers: { Accept: "application/json" }
                    });
                    const newJoke = { id: result.data.id, text: result.data.joke, vote: 0 };

                    // Check if the joke is unique
                    if (!fetchedJokes.some(joke => joke.id === newJoke.id)) {
                        fetchedJokes.push(newJoke);
                    }
                }
                setJokes(fetchedJokes);
                setLoading(false);
            } catch (error) {
                console.log("Error fetching data:", error);
                setLoading(false);
            }
        };
        fetchJokes();
    }, [jokes === null]);

    const votes = (id, num) => {
        setJokes(allJokes =>
            allJokes.map(j => (j.id === id ? { ...j, vote: j.vote + num } : j))
          );
            console.log(jokes)
      
    };

    if (loading) {
        return (
          <div className="loading">
            <i className="fas fa-4x fa-spinner fa-spin" />
          </div>
          )
      }

    function generateNewJokes() {
        setJokes(null);
        setLoading(true);
      }
      

    return (
        <div>
            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <>
                <button onClick={generateNewJokes} className="JokeList-getmore">Get New Jokes</button>
                
                 <JokeWitHooks jokes={jokes} votes={votes} />
    

                
            </>
            )}
        </div>
    );
};

export default JokeListWithHooks;