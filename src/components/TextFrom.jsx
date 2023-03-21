import React, { useState } from 'react'

const TextFrom = (props) => {
    const [text, setText] = useState('');
    const [findText, setFindText] = useState('');
    const [showText, setShowText] = useState('');
    const handleFind = (e) => {
        setFindText(e.target.value);
    }
    const handleFindChange = () => {
        text.search(findText) === -1 ? props.showAlert("Word Not Found!", "warning") : props.showAlert("Word Found!", "success");
        setShowText(text.search(findText));
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    const handleOnClickUC = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "primary");
    }
    const handleOnClickLC = () => {
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "primary");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra space removed", "primary");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "info");
    }
    const handleOnClickClear = () => {
        setText('');
    }
    return (
        <>
            <div className='container'>
                <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>

                <button className={`${props.mode === 'light' ? 'btn btn-outline-info my-2' : 'btn btn-info my-2'}`} type="button" onClick={handleCopy}>Copy!</button>

                <div className="form-group mb-3">
                    <textarea className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(146 160 168)' }} id="myBox" rows="10" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleOnClickUC}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleOnClickLC}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
                    Remove Extra-Spaces
                </button>
                <button className="btn btn-danger mx-2 my-2" onClick={handleOnClickClear}>
                    Clear
                </button>
            </div>
            <hr />
            <div className="container my-3">
                <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>You text summary</h1>
                <h5 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters
                </h5>
                <h5 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    {text === '' ? 0 : (0.008 * text.split(" ").length).toFixed(2)} Minutes to read
                </h5>
                <hr />

                <div className="input-group mb-3">
                    <input type="text" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(146 160 168)' }} className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'} `} value={findText} onChange={handleFind} />

                    <div className="input-group-append">
                        <button className={`${props.mode === 'light' ? 'btn btn-outline-info' : 'btn btn-info'}`} type="button" onClick={handleFindChange}>Find</button>
                    </div>
                    <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>

                        {findText === '' ? '' : <p>{findText} -&gt; {showText + 1}th character</p>}
                    </div>
                </div>
                <hr />

                <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview</h2>
                {showText === '' ? <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text}</p> :
                    <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.slice(0, Number(showText))}<span style={{ backgroundColor: "lightblue" }}>{text.slice(Number(showText), Number(showText) + Number(findText.length))}</span>{text.slice(Number(showText) + Number(findText.length), Number(text.length))}</p>}
            </div>
        </>
    )
}

export default TextFrom
