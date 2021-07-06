import React from 'react'

class Pet extends React.Component {
  render() {
    const genderSymbol = {"male": "♂", "female": "♀"}
    const petProps = this.props.pet;

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {petProps.name}{" "}{genderSymbol[petProps.gender]}
          </a>
          <div className="meta">
            <span className="date">{petProps.type}</span>
          </div>
          <div className="description">
            <p>Age: {petProps.age}</p>
            <p>Weight: {petProps.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {petProps.isAdopted ? (<button className="ui disabled button">Already adopted</button>) :
          (<button onClick={() => this.props.onAdoptPet(petProps.id)} className="ui primary button">Adopt pet</button>)}
        </div>
      </div>
    )
  }
}

export default Pet
