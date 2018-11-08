import React from 'react'

const Ninjas = ({ ninjas, deleteNinja }) => {
  // const { ninjas } = this.props;
  //const { ninjas } = props; destructure ninjas from props
  const ninjaList = ninjas.map(ninja => {
    return (
      <div className="ninja" key={ninja.id}>
        <div>Name: { ninja.name }</div>
        <div>Age: { ninja.age }</div>
        <div>Belt: { ninja.belt }</div>
        <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
        <hr />
      </div>
    )
  });

  return (
    <div className="ninja-list">
      { ninjaList }
    </div>
  );

}

export default Ninjas
