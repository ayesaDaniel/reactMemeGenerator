import React, { useState,useEffect } from "react"



export default function Form(){

  const [meme , setMeme] = useState({
    topText:"",
    bottomText:"",
    randomImage:
     "http://i.imgflip.com/1bij.jpg"
 })
 const [allMeme, setAllMeme] = useState([])
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  fetch("https://api.imgflip.com/get_memes")
  .then(res =>res.json())
  .then(data =>{setAllMeme(data.data.memes)
    setLoading(false)
  }) 
  .catch(error => {
    setError(error);
    setLoading(false);
  })
}, [])
  

       function getMemeImage(){
         const randomNumber = Math.floor(Math.random() * allMeme.length)
    const url = allMeme[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage:url
    }))
     }  





function handleChange(event){
     const {name, value} = event.target
     setMeme(prevMeme => ({
         ...prevMeme,
         [name]: value
    }))
}

if (loading) return <p className="loading">Loading...</p>;
if (error) return <p className="loading">Error: {error.message}</p>;

    return(
        <main>
<div  className="form__container">
        <input 
        type="text"
         className="text" 
          placeholder="Top text"
          name="topText"
           value={meme.topText}
           onChange={handleChange}
          />

        <input 
        type="text"
         className="text" 
          placeholder=" Bottom text"
          name="bottomText"
           value={meme.bottomText}
           onChange={handleChange}
          />

        <button className="form__button"
           onClick={getMemeImage}
         > 
        Get a new meme Image</button>
        </div>
  <div className="meme"> 
           <img src={meme.randomImage} className="meme__image"/> 
           <h2 className="meme__top-text">{meme.topText} </h2>
           <h2 className="meme__text-bottom"> {meme.bottomText}</h2>
 </div> 
        </main>
    )
}