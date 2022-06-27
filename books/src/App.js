import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBookComponent';
import HorrorBooks from './data/horror.json'
import BookList from './components/BookList';
import CommentArea from './components/CommentArea';
import { Component } from 'react';

class App extends Component {
  state = {
    asin: null
  }
  handleBookId = (asin) =>{
    this.setState({asin: asin},
      console.log(this.state.asin))
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col-8">
        <BookList Books={HorrorBooks} asin={this.state.asin} handleBookId={this.handleBookId}/>
        </div>
        <div id='comment' className="col-4">
          <CommentArea asin={this.state.asin}/>
        </div>
        </div>
      </header>
    </div>
  );
}
}
export default App;
