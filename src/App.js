import React, { Component ,Suspense } from 'react';
import {Fragment} from 'react'
import './App.css';
//import Login from './components/Login/Login'
import {BrowserRouter ,Route , NavLink} from 'react-router-dom';
import Welcome from './containers/Welcome'
import Users from './containers/Users'
//import Posts from './containers/Posts'
const Posts = React.lazy(()=>{
  return import('./containers/Posts');
})
class App extends Component{
  state={
  showPost:false
}
modeHandler=() => {

  this.setState(prevState=>{
    return {showPost:!prevState.showPost}
  })
}

  render()
  {
  return (
    <Fragment>
      <button onClick={this.modeHandler}>Toggle-Button</button>
      { this.state.showPost?(<Suspense
         fallback={<div>Loading...</div>}>
         <Posts/>
      </Suspense>):<Users/>}
    

    </Fragment>
  )}
      }
//   <BrowserRouter basename="my-app">
//     <Fragment>
//     <nav>
//       <NavLink to="/users" >UserPage</NavLink>
//       <NavLink to="/posts" >Posts</NavLink>
//     </nav>
//      <Route path="/" component={Welcome} exact/>
//      <Route path="/users" component={Users}/>
//      <Route path="/posts" render={()=>(
//        <Suspense
//          fallback={<div>Loading...</div>}>
//          <Posts/>
//        </Suspense>
//   )}
// />
//     </Fragment>
//     </BrowserRouter>
  
export default App;
