import React, { useState } from 'react';
import musicNoteSheets from "./musicData";
import Select from "react-select";

const SongSelector = ({ onSelect }) => {
    const songs = Object.keys(musicNoteSheets).map((song) => ({ label: song, value: song }));

    return (
        <div className="row justify-content-center">

            <div className="col-md-4">
                <h2 className="mb-4 bg-white">Select a Song:</h2>
            </div>
            <div className="col-md-6">
                <Select
                    options={songs}
                    onChange={(selectedOption) => onSelect(selectedOption.value)}
                    placeholder="Select a song"
                    isClearable
                    className="mb-4"
                />
            </div>
        </div>
    );
};
export default SongSelector;