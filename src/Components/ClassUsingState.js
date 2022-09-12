import React,{Component} from 'react';

class ClassUsingState extends Component{
    constructor()
    {
        super();
        this.state={
            data:1,
        }
    }
    apple()
    {
        this.setState({data:this.state.data*2});
    }
  render()
  {
    return (
    <div>
      <h1>{this.state.data}</h1>
      <button onClick={() => this.apple()}>Update Data</button>
    </div>
  )
  }
}

export default ClassUsingState;
