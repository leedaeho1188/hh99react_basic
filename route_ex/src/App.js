import React from "react";
import { render } from "react-dom";
import {withRouter} from "react-router"
import {Route, Link} from "react-router-dom"
import Home from "./Home"
import Cat from "./Cat"
import Dog from "./Dog"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    console.log(this.props)
  }

  render(){
    return (
      <div className="App">
        <div>
          <Link to="/">Home</Link>
          <Link to="/cat/nabi">Cat</Link>
          <Link to="/dog">Dog</Link>
        </div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/cat/:cat_name" component={Cat}/>
        <Route exact path="/dog" component={Dog}/>

        <button onClick={() => {
          this.props.history.push('/cat/nabi')
        }}>/cat으로 가기</button>
        <button onClick={()=> {
          this.props.history.goBack()
        }}>뒤로가기</button>
      </div>
    )
  }
}

export default withRouter(App)
