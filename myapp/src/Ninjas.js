import React from 'react';

/*
  UI component without state made by a function
  Takes Ninjas as a prop and outputs them to the DOM, re-rendering based on logic we define
*/
const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 20 ? (
      <div className="ninja" key={ ninja.id }>
        <div>Name: { ninja.name }</div>
        <div>Age: { ninja.age }</div>
        <div>belt: { ninja.belt }</div>
        <button onClick={ () => { deleteNinja(ninja.id) } }>Delete Ninja</button>
      </div>
    ) : null
  });

  return(
    <div className="ninja-list">
      { ninjaList }
    </div>
  )
}

export default Ninjas;
