import React, {useEffect, useState} from 'react';
import './App.css';
import getGifs from './services/getGifs';

const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=JbP20lY0lw2Vr05g24QkaCqmUCiDhdNJ&q=mapache&limit=25&offset=0&rating=g&lang=en'

function App() {
  const [gifs, setGifts] = useState([])

  useEffect(function(){
    getGifs({keyword: 'morty'}).then(gifs => setGifts(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif} />)
        }

      </section>
    </div>
  );
}

export default App;
