import { useState } from "react";

export default function FactFinder() {
    const [fact, setFact] = useState("");
    
    function handleClick(event) {
        event.preventDefault();
        const url = "https://uselessfacts.jsph.pl/random.json?language=en";
        fetch(url)
            .then((response) => {
                return response.json();
            }).then((json) => {
                console.log(json);
                setFact(json.text);
                console.log(json.text);
            });
    }
    
    return (
        <div class="section">
            <p>Or if you simply wanted to contact me to request fun facts, don't
              worry, I'm way ahead of you! Just press the button below.</p>
            <div class="form-group">
                <button type="submit" class="btn btn-primary" onClick={handleClick}>Enlighten Me</button>
            </div>
            <p>{fact}</p>
        </div>
    );
}
