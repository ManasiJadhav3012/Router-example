import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

const HomePage = (props) => {
  console.log(props);
  return (
    <div>
      <Link to='/topics'>Topics</Link>
      <br/>
      <button onClick={() => props.history.push('/topics')}> Topics </button>
      <h1>HOME PAGE</h1>
    </div>
  )
}

const TopicsList = (props) => {
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <Link to={`${props.match.url}/:13`}>To Topic 13</Link>
      <br/>
      <Link to={`${props.match.url}/:17`}>To Topic 17</Link>
      <br />
      <Link to={`${props.match.url}/:21`}>To Topic 21</Link>
      <br />
    </div>
  )
}

const TopicDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>TOPIC DETAIL PAGE: { props.match.params.topicId }</h1>
    </div>
  )
}

function App() {
  return (
    <div>

      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/topics' component={TopicsList}></Route>
      <Route path='/topics/:topicId' component={TopicDetail}></Route>

      <Route exact path='/blog/topics' component={TopicsList}></Route>
      <Route path='/blog/topics/:topicId' component={TopicDetail}></Route>

    </div>
  );
}

export default App;
