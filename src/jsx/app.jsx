import React from 'react';
import ReactDOM from 'react-dom';
import AddNewWord from './AddNewWord.jsx';
import TestWord from './TestWord.jsx';
import AllWords from './AllWords.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {words: [], newWord: '', testingWord: null};

    this.addWord = this.addWord.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.handleTest = this.handleTest.bind(this);
    this.handleIdk = this.handleIdk.bind(this);
    this.handleKnow = this.handleKnow.bind(this);
    this.enterAddWord = this.enterAddWord.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.clearWords = this.clearWords.bind(this);

    this.InputRef = React.createRef();
  }

  componentDidMount() {
    let savedWords = JSON.parse(localStorage.getItem('words'));
    if(savedWords) {
      this.setState({words: savedWords});
    }

    document.addEventListener("keypress", this.enterAddWord);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.enterAddWord);
  }

  enterAddWord(e) {
    if (e.key === "Enter") {
      this.addWord();
    }
  }

  addWord() {
    let words = this.state.words;

    for(let i = 0, len = words.length; i < len; i++) {
      if (this.state.newWord === words[i]) {
        alert("You already have got such word...");
        return;
      }
    }

    if(this.state.newWord && this.state.newWord.trim() !== "") {
      this.setState({words: words.concat(this.state.newWord)});
      this.InputRef.current.value = "";
      localStorage.setItem('words', JSON.stringify(this.state.words.concat(this.state.newWord)));
      this.setState({newWord: ''});
    } else {
      alert("You must intriduce any valid word");
    }
  }

  inputHandler() {
    this.setState({newWord: this.InputRef.current.value});
  }
  
  handleTest() {
    let random = Math.floor(Math.random() * this.state.words.length);
    this.setState({testingWord: this.state.words[random]});
  }

  handleKnow() {
    for(let i = 0; i < this.state.words.length; i++) {
      if(this.state.testingWord === this.state.words[i]) {
        this.state.words.splice(i, 1);
      }

      localStorage.setItem('words', JSON.stringify(this.state.words));
    }

    this.handleTest();
    if(this.state.words.length === 0) alert("You have just passed the test!");
  }

  handleIdk() {
    this.handleTest();
  }

  clearWords() {
    this.setState({words: []});
    localStorage.setItem('words', JSON.stringify([]));
  }

  render() {
      return (<div>
                <h1 className="title">Foreign words tester</h1>
                <AddNewWord ref={this.InputRef} InputHandler={this.inputHandler} addHandler={this.addWord} />
                <TestWord handleTest={this.handleTest} handleKnow={this.handleKnow} handleIdk={this.handleIdk} testingWord={this.state.testingWord} />
                <AllWords words={this.state.words} clearWordList={this.clearWords} />
              </div>)
  }
}

// ========================================
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );  
