import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const handleOnClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Your text converted upper case', 'success')
    }

    const handleOnClickLo = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Your Text converted in lower case', 'success')
    }
    const handleOnClickRemove = () => {
        let newText = ''
        setText(newText)
        props.showAlert('Your Text removed', 'success')
    }

    const handleOnClickCopy = () => {
        var text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
        props.showAlert('Your clipboard has been copied', 'success')
    }

    const handleSave = () => {
        console.log(text);
        props.showAlert('Your clipboard has been saved', 'success')
    }
    const handleExtraSpaceRemover = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
        props.showAlert('Extra space removed', 'success')
    };

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const wordLength = text.split(' ').length



    return (

        <>
            <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <label htmlFor="myBox" className="form-label">{props.heading}</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'black' : 'white' }} ></textarea>
                <button className={`btn btn-${props.mode} my-3 mx-1`} disabled={text.length===0} onClick={handleOnClick}>UPPERCASE</button>
                <button className={`btn btn-${props.mode} my-3 mx-1`} disabled={text.length===0} onClick={handleOnClickLo}>lowercase</button>
                <button className={`btn btn-${props.mode} my-3 mx-1`} disabled={text.length===0} onClick={handleOnClickRemove}>clear</button>
                <button className={`btn btn-${props.mode} my-3 mx-1`} disabled={text.length===0} onClick={handleOnClickCopy}>copy</button>
                <button className={`btn btn-${props.mode} my-3 mx-1`} disabled={text.length===0} onClick={handleSave}>save</button>
                <button className={`btn btn-${props.mode} my-3 mx-1`} disabled={text.length===0} onClick={handleExtraSpaceRemover}>Remove Space</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>

                <p>{text ? wordLength : 0} words and {text.length} character</p>
                <p> {0.008 * wordLength} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Your text Preview here'}</p>
            </div>
        </>
    )
}
