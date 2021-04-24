import logo from './logo.svg';
import './App.css';

import  UserDetails from './UserDetails.js';
import ProductNames from './ProductNames';
import ProductNamesInfo from './ProductNamesInfo';
import UserProfile from './UserProfile';
import Employee from './Employee';
import TableExample from './TableExample';
import Comment from './Comment';
import Employe from './Employe';
import Contact from './Contact';
import CarRental from './CarRental';
import Home from './Home';
import Comment1 from './Comment1';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import TodoComp from './TodoComp';
import  Authors from './Authors';
import ForumContainer from './ForumContainer';
import Blogs from './Blogs';
import ClassBasedCounter from './ClassBasedCounter';
import ClassBasedExample from './ClassBasedExample';
import ClassBasedProps from './ClassBasedProps';
import TodoForm1 from './TodoForm1';
import Todo1 from './Todo1';
import TodoContainer1  from './TodoContainer1';
import Blog1 from './Blog1';
import Newblog from './Newblog';
import {useState} from 'react';
import Product from './Product';
import Hobby from './Hobby';
import TestApr20 from './TestApr20';
import Test3 from './Test3';
import RefHook from './RefHook';
import BlogContext from './BlogContext';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import MyWebsite from './MyWebsite';
import CommentBox from './CommentBox';
import UserRegForm from './UserRegForm';
import WebsiteContext from './WebsiteContext';
import ButtonDisable from './ButtonDisable';
import MemoTest from './MemoTest';
import UseMemoHook from './UseMemoHook';
import ParentComp from './ParentComp';
import NewParentComp from './NewParentComp';
import ReactPhotoGallery from './ReactPhotoGallery';
import SortablePhotos from './SortablePhotos';
import Disquss from './Disquss';
import store from './stores/Store';
import ReduxCounter from './ReduxCounter';
import storeCounter from './stores/storeCounter';
import BarChartExample from './BarChartExample';
import LineChartExample from './LineChartExample';

store.subscribe(function(){
  const currentState = store.getState();
  console.log('the current count value is ' +currentState.count);
})

store.dispatch({type:'counter/increase'});
store.dispatch({type:'counter/increase'});
store.dispatch({type:'counter/increase'});

store.dispatch({type:'counter/decrease'});
store.dispatch({type:'counter/reset'});
store.dispatch({type:'Counter/square'});
store.dispatch({type:'counter/squareroot'});

function App() {
  const [step,setStep] = useState(1);
  return (
    <div className="App">
    <LineChartExample/>
   { /*<BrowserRouter>
    <input type = "number" onChange = {(e)=>{setStep(parseInt(e.target.value))}} />
    <ClassBasedProps step={step}/>
    <Link to="/Counter">Counter</Link>
        <Route path="/Counter">
        <ClassBasedProps/>
        </Route>
    </BrowserRouter>
  <ParentComp/>
   <MemoTest/>
   <NewParentComp/>*/}
{/*<UseMemoHook/>
<ReduxCounter/>
    <BarChartExample/>*/}
 
  { /*<ForumContainer/>
   <ReactPhotoGallery/>

       < Disquss />
       <SortablePhotos/>
   <Blogs/>
   <ClassBasedProps/>*/}

	<h2> This is my html </h2>
  
    </div>
  );
}
export default App;
