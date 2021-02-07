import React, { Component } from 'react'

class App extends Component {
  state = {
    text:"",
    allpost:[],
    data:""
  };

  onSubmit = async e => {
    e.preventDefault();
    const{ text }= this.state;
    try{
      const requestOption = {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({text})
      };
      const response = await fetch('https://test-assignment1.herokuapp.com/addpost', requestOption);
      const data = await response.json();
      this.setState({data});
    } catch(error){

    }
  }

  render() {
    const {text} = this.state;
    return (
      <div className="text">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display -4 text-center">Assignment</h1>
              <form onSubmit = {this.onSubmit}>
              <input type="submit" className="btn btn-dark btn-block mt-4"/>
              </form>
              

            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default  App;