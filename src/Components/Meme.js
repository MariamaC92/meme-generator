
import React, { useState, useEffect } from "react";


export default function Meme(){

    const [meme, setMeme] = useState();
    const [select, setSelect] = useState([0])
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.imgflip.com/get_memes');
            const jsonData = await response.json();
            setMeme(jsonData);
        }
        fetchData();
    }, []);

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * meme.data.memes.length);
        const memeImg = meme.data.memes[randomIndex]
        let url = memeImg.url;

        setSelect(randomIndex);

        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }));
    }

    const [input, setInput] = useState("")

         
      
    return (
    <>
    <div>
        <input type = "text" 
         placeholder ="Top text"
        
        />

        <input type = "text"
         placeholder = "Bottom text"
        
         />
    </div>

     <div>
      <img src= {meme?.data.memes[select].url} alt = "meme" />
      <button onClick={getRandomImage}>New Meme</button>
    </div>
    </>
        
    )
}
