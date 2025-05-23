import React from "react"
import Greeting from "./Greeting";

const App = () => {
      
    return(
        <div>
            <h1>Hello...</h1>
            <Greeting name="John" />
            <Greeting name="Alice" />
        </div>
    )
}

export default App;