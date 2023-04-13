import React, { useEffect } from "react";
import SongList from "./SongList";
import { useSelector } from "react-redux";

const App = () => {
    const state = useSelector((state) => state.songs)

    useEffect(()=>console.log(state),[])
    return (
        <div id="main">
            <SongList songs={state}/>
        </div>
    );
};

export default App;
