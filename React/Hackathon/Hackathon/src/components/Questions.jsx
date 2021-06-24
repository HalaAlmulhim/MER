import React, { Component } from "react";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      corrAnswer: "",
      answers: [],
      score: 0,
      count: 0,
    };
  }

  async componentDidMount() {
    const url =
      "https://opentdb.com/api.php?amount=1&category=18&difficulty=medium&type=multiple";
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results[0];

    this.setState({ question: results.question });
    this.setState({ corrAnswer: results.correct_answer });
    this.setState({ answers: results.incorrect_answers });

    // pushes the correct answer with the list of answers
    this.state.answers.push(this.state.corrAnswer);
    this.setState({ answers: this.state.answers });

    // Shuffles the Answers
    let ShuffledAnswers = this.state.answers;
    ShuffledAnswers = ShuffledAnswers.sort(() => Math.random() - 0.5);

    this.setState({ answers: ShuffledAnswers });

    console.log(this.state.corrAnswer);

    // Check if number of questions reaches 9 it will change the text in the button to be "Submit and See your score"
    if (this.state.count === 9) {
        document.getElementById("nextQ").innerHTML = "Submit and See your score"
    }else{
        document.getElementById("nextQ").innerHTML = "Next Question"
    }
  }

  checkAnswer = () => {
    // Check if Selected answer == the correct_answer and return True else return False
    if (document.getElementById(this.state.answers[0]).checked && this.state.corrAnswer === this.state.answers[0]) {
      return true;
    } else if (document.getElementById(this.state.answers[1]).checked && this.state.corrAnswer === this.state.answers[1]
    ) {
      return true;
    } else if (document.getElementById(this.state.answers[2]).checked && this.state.corrAnswer === this.state.answers[2]
    ) {
      return true;
    } else if (document.getElementById(this.state.answers[3]).checked && this.state.corrAnswer === this.state.answers[3]
    ) {
      return true;
    } else {
      return false;
    }
  };

  nextQuestion = (e) => {
    // Check if number of questions reaches 9 if not show next question
    this.removeAnswers();
    if (this.state.count < 9) {
        
        this.setState({ count: this.state.count + 1 });

        e.preventDefault();

        document.getElementById("reset").click();
        this.componentDidMount();

    }else{
        // If number of Questions reaches 9 show score and a button refreshes the page
        document.getElementById("qContainer").innerHTML = "<h2>Your Score is " + this.state.score + "</h2> <button onClick='window.location.reload()' >Restart Quiz</button>" 
    }
  };

  showAnswers = () => {
    let elements = document.getElementsByClassName("answer"); // Get Array of the labels
    
    // Loop through all labels 
    for (let i = 0; i < elements.length; i++) {

        document.getElementById(this.state.answers[i]).disabled = true;// Disable the radio buttons for the user
        
        if (this.state.answers[i] === this.state.corrAnswer) {
            const check = this.checkAnswer();
            if (check) {
              this.setState({ score: this.state.score + 1 });
            }
            elements[i].classList.add("correct");
        }else{
            elements[i].classList.add("wrong");
        }

    }

  }

  removeAnswers = () =>{
    let elements = document.getElementsByClassName("answer");

    // Loop through all labels 
    for (let i = 0; i < elements.length; i++) {
        
        document.getElementById(this.state.answers[i]).disabled = false;// enable the radio buttons for the user

        if (this.state.answers[i] === this.state.corrAnswer) {
            elements[i].classList.remove("correct");
        }else{
            elements[i].classList.remove("wrong");
        }

    }

  }

  render() {
    return (
      <div className="qContainer" id="qContainer">
        <h3 className="title">Awseome Quiz Application</h3>
        <h3 className="question">{this.state.question}</h3>
        <form>
          <div className="ans" id="ans">
            <div className="option">
              <p className="list">A</p>
              <input type="radio" onClick={this.showAnswers} id={this.state.answers[0]} name="A" value="1" />
              <label className="answer">{this.state.answers[0]}</label>
            </div>
            <br></br>
            <div className="option">
              <p className="list">B</p>
              <input type="radio" onClick={this.showAnswers} id={this.state.answers[1]} name="A" value="2" />
              <label className="answer">{this.state.answers[1]}</label>
            </div>
            <br></br>
            <div className="option">
              <p className="list">C</p>
              <input type="radio" onClick={this.showAnswers} id={this.state.answers[2]} name="A" value="3" />
              <label className="answer">{this.state.answers[2]}</label>
            </div>
            <br></br>
            <div className="option">
              <p className="list">D</p>
              <input type="radio" onClick={this.showAnswers} id={this.state.answers[3]} name="A" value="4" />
              <label className="answer">{this.state.answers[3]}</label>
            </div>
            <br></br>
          </div>
          <input type="reset" id="reset" hidden />
          <button onClick={this.nextQuestion} className="nextQ" id="nextQ">
            Next Question
          </button>
        </form>
      </div>
    );
  }
}

export default Questions;
