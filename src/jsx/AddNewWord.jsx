import React from 'react';

const AddNewWord = React.forwardRef((props, ref) => {
    return (<div className="AddWord">
        <input type="text" ref={ref} onInput={props.InputHandler} className="wordInput" />
        <button onClick={props.addHandler} className="btn btn-warning squareCorners">Add</button>
    </div>)
})

export default AddNewWord;