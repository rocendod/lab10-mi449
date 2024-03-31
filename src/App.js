//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

const books = [
  { id: 1, title: 'The Maze Runner', year: '2009', author: 'James Dashner', image: 'https://upload.wikimedia.org/wikipedia/en/d/db/The_Maze_Runner_cover.png',
  height: '378' },
  { id: 2, title: 'Night', year: '1960', author: 'Elie Wiesel', image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/NightWiesel.jpg' },
  { id: 3, title: 'Dune', year: '1965', author: 'Frank Herbert', image: 'https://upload.wikimedia.org/wikipedia/en/d/de/Dune-Frank_Herbert_%281965%29_First_edition.jpg' },
  { id: 4, title: 'Children of Dune', year: '1976', author: 'Frank Herbert', image: 'https://upload.wikimedia.org/wikipedia/en/f/f8/Children_of_Dune-Frank_Herbert_%281976%29_First_edition.jpg' },
  { id: 5, title: 'Fire & Blood', year: '2018', author: 'Frank Herbert', image: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Fire_%26_Blood_%282018%29_hardcover.jpg' },
];

function BookRack() {
  const listBooks = books.map(book =>
    <>
    <li
      key={book.id}
    >
      <h2>{book.title} ({book.year})</h2>
      <h3>{book.author}</h3>
      {book.image &&
      <img
        className="bookCover"
        src={book.image}
        alt={book.title + ' cover'}
      />
      }
    </li>
    <LikeButton/>
    </>
  );
  return (
    <ul>{listBooks}</ul>
  )
}

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
      <h3>{book.author}</h3>
      {/* This a conditional that checks if an image exists before displaying it */}
      {book.image &&
      <img
        className="pbookCover"
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

function LikeButton() {
  const [count, setCount] = useState(0);
  function doLike() {
    setCount(count + 1);
  }

  return (
    <div>
    <p>Hit like if you liked this book too!</p>
    <button onClick={doLike}>
      {count} Likes
    </button>
    </div>
  );

}

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        
      <h1>The Professor's Favorite Reading</h1>
        <Bookshelf />
        <LikeButton/>
      <h1>Books I have Read & Liked</h1>
        <BookRack />
      </header>
    </div>
  );
}

export default App;
