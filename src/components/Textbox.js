import React, { useState } from "react";

export default function Textbox(props) {
  const [text, settext] = useState("");

  const handle_uppercase = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("Text converted to Uppercase!","success")
  };

  const handle_lowercase = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showalert("Text converted to lowercase!","success")
  };

  const handle_clear = () => {
    let newtext = "";
    settext(newtext);
    props.showalert("Text cleared !","danger")
  };

  const handle_onchange = (event) => {
    settext(event.target.value);
  };

  const handle_copy = () => {
    var text = document.getElementById("textbox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text copied !","success")
  };

  const handle_extraspaces = () => {
    let newtext = text.split(/\s+/);
    settext(newtext.join(" "));
    props.showalert("Extra spaces removed !","success")
  };

  return (
    <>
      <div className="my-1" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      {/* <div className="my-1" style={{ color: props.rmode === 'dark' ? 'white' : 'black' }}> */}
        <div>
          <h3>{props.heading}</h3>
          <textarea
            className="form-control"
            style={{ backgroundColor: props.mode === 'dark' ? '#010f26' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            value={text}
            onChange={handle_onchange}
            id="textbox"
            rows="8"
          ></textarea>
          {/* <textarea
            className="form-control"
            style={{ backgroundColor: props.mode === '#a5030a' ? '#410104' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            value={text}
            onChange={handle_onchange}
            id="textbox"
            rows="8"
          ></textarea> */}
        </div>

        <button className="btn btn-primary mx-1 my-1" onClick={handle_uppercase}>text uppercase</button>
        <button className="btn btn-success mx-1 my-1" onClick={handle_lowercase}>text lowercase</button>
        <button className="btn btn-success mx-1 my-1" onClick={handle_clear}>clear text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handle_copy}>copy text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handle_extraspaces}>remove extra spaces</button>
      </div>

      <div className="container my-1" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>Your text summary</h3>
        {typeof text === 'string' && text.trim().length > 0 ? (
          <>
            <p>
              {text.trim().split(/\s+/).filter(word => word !== '').length} words and {text.length} characters
            </p>
            <p>{0.009 * text.trim().split(/\s+/).filter(word => word !== '').length} minutes to read it</p>
          </>
        ) : (
          <p>No text provided</p>
        )}
        <h3>Preview</h3>
        <p>{text.length>0 ?text:"Enter your text !" }</p>
      </div>
    </>
  );
}
