import React, {useState} from 'react';
import 'bootstrap';

function AllWords(props) {

    const [show, setShow] = useState(false);

    function allWordsHandler() {
        setShow(!show);
    }
    
    if(show) {
        return (<div className="allWords">
                    <button className="btn btn-secondary allWords__btn" onClick={allWordsHandler}>Hide the list</button>
                    <ul>
                        {props.words.map(word => (<li key={word}>{word}</li>))}
                    </ul>
                    <button className="clearWords btn btn-info" onClick={props.clearWordList}>Clear</button>
                </div>);
    } else {
        return (<div className="allWords">
                    <button className="btn btn-secondary" onClick={allWordsHandler}>Show all words</button>
                </div>)
    }
}

export default AllWords;