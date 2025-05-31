import React, { Fragment } from 'react';
const Title='Bonjour'
const Para="Tout le monde"
function App() {
  return (
    <Fragment>
      <h1 id="Title" className="title">{Title}</h1>
      <p>{Para}</p>
    </Fragment>
  );
}

export default App;
