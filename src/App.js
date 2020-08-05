import React,{Component} from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import RecommendedVideo from './RecommendedVideo';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SearchPage from './SearchPage';
import fire from './Firebase';
import LoginRegister from './components/LoginRegister';
//import Firebase from './Firebase';



class App extends Component {
  constructor(){
    super();
    this.state={
      user:null
    }
  }
  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) =>{
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }

  render(){
    return (
      <div className="App">
      
      
     
      <Router>
      
      <Header />
         <Switch>
          <Route path="/login">
          {this.state.user? (
          <Route path="/">
          <div className="app__page">
      
               <Sidebar />
               <RecommendedVideo/>
           </div>
           </Route>) :(<LoginRegister />)}
          </Route>
         
            <Route path="/search/:searchTerm">
            <div className="app__page">
            
                <Sidebar />
                <SearchPage />
            </div>
            </Route>
            
         </Switch>
      </Router>
      
  
      </div>
    );

  }
  
}

export default App;
