import React from 'react'
import Placeholder from '../components/Placeholder'

class SingleGame extends React.Component {
  state = { game: {} }

  fetchGame = () => {
    fetch(`/game/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(game => this.setState({ game }))
  }

  render(){
    const { game } = this.state;
    return(
      <div className="single-game container">
        <div className="game-data">
          {game.background_image ? <img className="z-depth-2" height="600px" src={ game.background_image } alt={game.name}/> : <Placeholder /> }
          <h1>{game.name}</h1>
          <table>
            <tbody>
              <tr>
                <td>Platforms:</td>
                <td>{game.platforms && game.platforms.map(platformObj => <p key={platformObj.platform.name}>{platformObj.platform.name}</p>)}</td>
              </tr>
              <tr>{
                game.metacritic ?(
                  <>
                  <td>Metacritic Rating:</td>
                  <td>{game.metacritic / 100}</td>
                  </>
                ) : null
              }
              </tr>
              <tr>
                <td>Description:</td>
                <td>{game.description_raw}</td>
              </tr>
              <tr>
                <td>Developers:</td>
                <td>{game.developers && game.developers.map(developer => <p key={developer.name}>{developer.name}</p>)}</td>
              </tr>
              <tr>
                <td>Publishers:</td>
                <td>{game.publishers && game.publishers.map(publisher => <p key={publisher.name}>{publisher.name}</p>)}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    )
  }

  componentDidMount(){
    this.fetchGame()
  }
}

export default SingleGame

