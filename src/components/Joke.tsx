import Header from "./Header";
import { useEffect, useState } from "react";

type JokeAPI = {
    id: number;
    type: string;
    setup: string;
    punchline: string;
};

function Joke() {
    const [joke, setJoke] = useState<JokeAPI | null>(null);

    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/jokes/random')
            .then(response => response.json())
            .then(data => setJoke(data))
            .catch(error => console.error("Fetch data failed", error))
    }, [])

    if (!joke) return <div>Loading...</div>

    return (
        <>
            <Header />
            <h2>Joke</h2>
            <p>ID: {joke.id}</p>
            <p>Type: {joke.type}</p>
            <p>Setup: {joke.setup}</p>
            <p>Punchline: {joke.punchline}</p>
        </>
    )
}

export default Joke
