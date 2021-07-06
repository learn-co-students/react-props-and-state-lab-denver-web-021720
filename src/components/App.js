import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (petType) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: petType
      }
    })
  }

  onFindPetsClick = () => {
    const petType = this.state.filters.type;
    fetch(petType === "all" ? "/api/pets" : `/api/pets?type=${petType}`)
    .then(response => response.json())
    .then(petData => this.setState({pets: petData}))
  }

  onAdoptPet = (petId) => {
    const adjustedPets = this.state.pets.map(pet => {return pet.id === petId ? {...pet, isAdopted: true} : pet});
    this.setState({pets: adjustedPets})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
