import React, { Component } from 'react'
import TextFieldGroup from './TextFieldGroup';

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

  onChange = e =>{
    this.setState({[e.target.name]:e.target.value});
  };

  async componentDidMount(){
    try{
      const response = await fetch('https://test-assignment1.herokuapp.com/allpost');
      const data = await response.json();

      this.setState({allpost:data});
      this.componentDidMount()
    }catch(error){

    }
  }

  render() {
    const {text, allpost, data} = this.state;
    const alldata=(
    <div>
      {allpost.map((data, index)=>(
        <p>
          Post: {data.text} Date: {data.date}!
        </p>
      ))}
    </div>
    );
    return (
      <div className="text">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display -4 text-center">Assignment</h1>
              <form onSubmit = {this.onSubmit}>
                <TextFieldGroup
                name="text"
                placeholder="Post"
                value={text}
                onChange= {this.onChange}
                type="text"
                />
              <input type="submit" className="btn btn-dark btn-block mt-4"/>
              </form>
              <h1>All latest post</h1>
              {alldata}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default  App;