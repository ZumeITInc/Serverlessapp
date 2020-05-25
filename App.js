import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <center>
          <div class="heading">
          <span class="heading1">Zume</span>
          <span class="heading2">IT</span>
          </div>
        </center>
        <hr color="#73BFD4"></hr>
        <div class="sideheading">
        &nbsp;&nbsp;&nbsp;&nbsp;
         <span class="l"><a href="https://www.google.com/">Home</a></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="l"><a href="https://www.google.com/">Submission-form</a></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="l"><a href="https://www.google.com/">Submitted-list</a></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="l"><a href="https://www.google.com/">Clients</a></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="l"><a href="https://www.google.com/">Applicants</a></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="l"><a href="https://www.google.com/">Job-posting</a></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="l"><a href="https://www.google.com/">Aboutus</a></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="l"><a href="https://www.google.com/">Services</a></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="l"><a href="https://www.google.com/">Contactus</a></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="l"><a href="https://www.google.com/">Login</a></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="l"><a href="https://www.google.com/">Training</a></span>
        </div>
        <hr color="#73BFD4"></hr>
        <div class="content">
        <form>
        <label>Candidate name:</label><input type="text"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label>Job location:</label><input type="text"></input><div></div>
        <label>Technology:</label><input type="text"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label>Vendor:</label><input type="text"></input><div></div>
        <label>Client:</label><input type="text"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label>Status:</label><input type="text"></input><div></div> 
        <label>Rate:</label><input type="text"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label>submitted:</label><input type="text"></input>
        <br></br>
        <input type="submit" placeholder="Submit"></input>
        </form>
        </div>
      </header>
    </div>
  );
}

export default App;
