import React, {useState} from "react";

export default function About() {

const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
});

const [btnText, setBtnText] = useState("Enable dark mode");

const toggleChange = ()=> {
    if(myStyle.color === 'black'){
        setMyStyle({
            color: 'white',
    backgroundColor: 'black',
    border: '1px solid white'
        })
        setBtnText("Enable light mode");
    }
    else {
        setMyStyle({
            color: 'black',
    backgroundColor: 'white',
        })
        setBtnText("Enable dark mode")
    }
}


  return (
    <div className="container">
        <h2>About Us</h2>
      <div className="accordion" id="accordionExample" >
        <div className="card">
          <div className="card-header" id="headingOne" style={myStyle}>
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                <h5>Analyze Your text</h5>
              </button>
            </h2>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body" style={myStyle}>
            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or manipulate your text. You can convert your text from lowercase to upppercase and vice versa! Also you can remove extra spaces if needed from your text.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo" style={myStyle}>
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                <h5>Free to use</h5>
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div className="card-body" style={myStyle}>
            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree" style={myStyle}>
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                <h5>Browser Compatible</h5>
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div className="card-body" style={myStyle}>
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      <button type="button" onClick={toggleChange} className="btn btn-warning my-3">{btnText}</button>
    </div>
  );
}
