import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    
    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }
    //conditional rendering excersise
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {props.setup ? <h3>{props.setup}</h3> : null}

// react comunity prefers not usig && becuse of the bug tht reders 0, so use the 2nd line of code instead

            {isShown && <p>{props.punchline}</p>}

            {isShown ? <p>{props.punchline}</p> : null}

            // The button is only shown if the punchline is not shown
            // The button is also shown if the punchline is shown
            {!isShown && <button onClick={toggleShown}>Show punchline</button>}
            {isShown && <button onClick={toggleShown}>Hide punchline</button>}

            // this is  better more simplified way to do the butto using trenary operatore
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} punchline</button>
            <hr />
        </div>
    )
}