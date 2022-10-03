import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("UpperCase Applied","success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
   props.showAlert("LowerCase Applied", "success");
  };
 
  const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count
}

  const countWord = (str) =>{
    if(str === '' || str === ' '){
      return 0;
    }else{
      return text.split(" ").length;
    }
  }
  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied All","success");

  }
  const handleClClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Cleared All","success")
  };
  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="container"  style={{color: props.mode === 'dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{backgroundColor: props.mode === 'dark'? 'gray':'white', color: props.mode === 'dark'? 'white':'black'}}

            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 " onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-4" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1 " onClick={handleClClick}>
          CLEAR ALL
        </button>
        <button className="btn btn-primary mx-1 " onClick={handleCopy}>
          Copy ALL
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black' }}>
        <h1>You Text Summary</h1>
        <p>Words: {countWord(text)} Character: {text.length} </p>
        <p> Minutes to read : {0.008 * text.split(" ").length }</p>
         <p>Number of Vowels : {countVowel(text)}</p> 
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
