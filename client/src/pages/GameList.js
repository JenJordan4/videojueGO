import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

class GameList extends React.Component {

  state = { games: [] }

  handleSearch = event => {
    event.preventDefault()
    fetch(`https://api.rawg.io/api/games?search=${event.target.value}`)
      .then(response => response.json())
      .then(data => this.setState({ games: data.results || [] }))
  }

  render() {
    return(
      <div className="game-list">
        <h1>Search for a game</h1>
        <input
          type="text"
          onChange={this.handleSearch}
        />


        <div className="results">
          {
            this.state.games.map(game => (
              <Link key={game.id} to={`/games/${game.id}`}>
                <div className="game">
                  <h6>{game.name}</h6>
                  <img src={game.background_image} alt={game.name}/>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    )
  }
}

export default GameList