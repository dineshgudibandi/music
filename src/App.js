import './App.css';
import SongSelector from "./SongSelector";
import MusicNoteSheet from "./MusicNoteSheets";
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [selectedSong, setSelectedSong] = useState('');

  const handleSongSelect = (song) => {
    setSelectedSong(song);
  };

  return (
      <div className="container-fluid">

          <header className="text-center mt-5">
              <div className="background">
                  <div className="music-note-sheets text-center">
                      <div className="display-3 mb-4 bg-white col-5 m-auto">Vidhurva's Music</div>
                  </div>
              </div>
          </header>
          <div className="row justify-content-center">
              <div className="col-md-10">

                  <SongSelector onSelect={handleSongSelect}/>
                  {selectedSong && <MusicNoteSheet song={selectedSong}/>}
              </div>
          </div>
      </div>
  );
}

export default App;
