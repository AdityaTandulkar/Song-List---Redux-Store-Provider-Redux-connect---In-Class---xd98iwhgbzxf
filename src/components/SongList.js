import React from "react";
import { connect } from "react-redux";

export default function SongList(props) {
    const { songs } = props;
    return (
        <div>
            {songs.map((song, idx) => (
                <div className="song" key={idx}>{song.title}</div>
            ))}
        </div>
    );  
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
};

// Add code here
