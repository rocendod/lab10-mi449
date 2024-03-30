import logo from './logo.svg';
import './App.css';

const book = {
title: 'A Farwell to Ams',
author: 'Earnest Hemingway',
published: '1929',
image: 'https://upload.wikimedia.org/wikipedia/en/4/48/Hemingway_farewell.png',
width: '264',
height: '378'
};

function Bookshelf() {
  return (
    <div>
      {/* Components can't return multiple JSX tags unless they are wrapped in a parent element */}
      {/* This is a JSX comment */}
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      {/* This a conditional that checks if an image exists before displaying it */}
      {book.image &&
      <img
        className="bookCover"
        src={book.image}
        alt={book.title + ' cover'}
        style={{
          width: book.width,
          height: book.height
        }}
      />
      }
    </div>
  );
}

function MagicButton() {
  return (
    <div>
    <h3>This is a Magic Button</h3>
    <button>Magic</button>
    </div>
  );

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>My Favorite Books</h1>
        <Bookshelf />
      </header>
    </div>
  );
}

export default App;
