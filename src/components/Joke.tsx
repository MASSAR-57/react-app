import Header from "./Header";
import { useEffect, useState } from "react";

function Joke() {
    const [joke, setJoke] = useState(null);

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
