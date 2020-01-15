import React from 'react';

/*
  UI component without state made by a function
*/
const Ninjas = ({ ninjas }) => {
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 20 ? (
      <div className="ninja" key={ ninja.id }>
        <div>Name: { ninja.name }</div>
        <div>Age: { ninja.age }</div>
        <div>belt: { ninja.belt }</div>
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
