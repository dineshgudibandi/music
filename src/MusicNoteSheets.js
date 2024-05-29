import React, { useState } from 'react';
import musicNoteSheets from "./musicData";

const MusicNoteSheet = ({ song }) => {
    return (
        <div className="music-note-sheet">
            <div className="overlay"></div>
            {/* Add overlay */}
            <h2 className="mb-4">{song}</h2>
            <pre className="music-notes">{musicNoteSheets[song]}</pre>
        </div>
    );
};
export default MusicNoteSheet;