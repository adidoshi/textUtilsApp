import React, {useState} from "react";

export default function Textarea(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case!", "success")
  }

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lower case!", "success");
  }

  const handleClear = () => {
    setText('');
    props.showAlert("Text cleared!", "success");
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!", "success");
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert("Extra space deleted!", "success");
  }

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="myBox"
            rows="6"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}
          ></textarea>
          <button disabled={text.length === 0} className="btn btn-primary mt-3 mx-1" onClick={handleUpClick}>Convert to uppercase</button>
          <button disabled={text.length === 0} className="btn btn-primary mt-3 mx-1" onClick={handleLowClick}>Convert to lowercase</button>
          <button disabled={text.length === 0} className="btn btn-primary mt-3 mx-1" onClick={handleClear}>Clear</button>
          <button disabled={text.length === 0} className="btn btn-primary mt-3 mx-1" onClick={handleCopy}>Copy text</button>
          <button disabled={text.length === 0} className="btn btn-primary mt-3 mx-1" onClick={handleExtraSpace}>Remove extra space</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((ele)=>{return ele.length !== 0}).length} words and {text.length} charaters</p>
      <p>{0.008 * text.split(" ").filter((ele)=>{return ele.length !== 0}).length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
