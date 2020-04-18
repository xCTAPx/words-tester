import React, {useState} from 'react';
import 'bootstrap';

function TestWord(props) {

    const [btns, setBtns] = useState(false);

    function showButtons() {
        setBtns(true);
    }

    if (btns && props.testingWord) {
        return (<div className="test">
                <button className="btn btn-primary" onClick={props.handleTest}>Test</button>
                <h4 className="testingWord">{props.testingWord}</h4>
                <div className="btns-line">
                    <button className="btn btn-success" onClick={props.handleKnow}>Know</button>
                    <button className="btn btn-danger" onClick={props.handleIdk}>Don't know</button>
                </div>
            </div>)
    } else {
        return (<div className="test" onClick={showButtons}>
                <button className="btn btn-primary" onClick={props.handleTest}>Test</button>
            </div>)
    }
}

export default TestWord;