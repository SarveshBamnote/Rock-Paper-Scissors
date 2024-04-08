import {Component} from 'react'
import Popup from 'reactjs-popup'
import {AiOutlineClose} from 'react-icons/ai'
import Choices from '../Choices'

import {
  MainContainer,
  GameContainer,
  ScoreCardSection,
  Heading,
  ScoreContainer,
  ScoreText,
  Score,
  ResultSectionContainer,
  PlayersContainer,
  Player,
  PlayerName,
  ImageUrl,
  GameResult,
  PlayAgainBtn,
  RulesPopupContainer,
  PopupContainer,
  RulesBtn,
  CloseBtn,
  RulesImage,
} from './styledComponents'

class RockPaperScissors extends Component {
  state = {
    yourChoiceUrl: '',
    opponentsUrl: '',
    showResult: false,
    score: 0,
    text: '',
  }

  RulesPopup = () => (
    <div>
      <Popup modal trigger={<RulesBtn type="button">Rules</RulesBtn>}>
        {close => (
          <PopupContainer>
            <CloseBtn type="button" onClick={() => close()}>
              <AiOutlineClose />
            </CloseBtn>

            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </PopupContainer>
        )}
      </Popup>
    </div>
  )

  onClickPlayAgain = () => {
    this.setState({showResult: false})
  }

  getResult = (yourChoiceId, opponentsId) => {
    let result = 'YOU LOSE'

    if (yourChoiceId === opponentsId) {
      result = 'IT IS DRAW'
    }
    if (yourChoiceId === 'ROCK' && opponentsId === 'SCISSORS') {
      result = 'YOU WON'
    }
    if (yourChoiceId === 'SCISSORS' && opponentsId === 'PAPER') {
      result = 'YOU WON'
    }
    if (yourChoiceId === 'PAPER' && opponentsId === 'ROCK') {
      result = 'YOU WON'
    }

    return result
  }

  renderResultsSection = () => {
    const {yourChoiceUrl, opponentsUrl, text} = this.state

    return (
      <ResultSectionContainer>
        <PlayersContainer>
          <Player>
            <PlayerName>YOU</PlayerName>
            <ImageUrl src={yourChoiceUrl} alt="your choice" />
          </Player>
          <Player>
            <PlayerName>OPPONENT</PlayerName>
            <ImageUrl src={opponentsUrl} alt="opponent choice" />
          </Player>
        </PlayersContainer>
        <GameResult>{text}</GameResult>
        <PlayAgainBtn onClick={this.onClickPlayAgain} type="button">
          PLAY AGAIN
        </PlayAgainBtn>
      </ResultSectionContainer>
    )
  }

  choices = yourChoice => {
    const {choicesList} = this.props
    const {score} = this.state

    const opponentChoiceIndex = Math.floor(Math.random() * choicesList.length)
    const opponentChoice = choicesList[opponentChoiceIndex]

    const resultText = this.getResult(yourChoice.id, opponentChoice.id)

    let newScore = score
    if (resultText === 'YOU WON') {
      newScore = score + 1
    } else if (resultText === 'YOU LOSE') {
      newScore = score - 1
    }

    this.setState({
      yourChoiceUrl: yourChoice.imageUrl,
      opponentsUrl: opponentChoice.imageUrl,
      showResult: true,
      text: resultText,
      score: newScore,
    })
  }

  render() {
    const {choicesList} = this.props
    const {showResult, score} = this.state
    return (
      <MainContainer>
        <GameContainer>
          <ScoreCardSection>
            <Heading>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </Heading>

            <ScoreContainer>
              <ScoreText>Score</ScoreText>
              <Score>{score}</Score>
            </ScoreContainer>
          </ScoreCardSection>
          {!showResult ? (
            <Choices choicesList={choicesList} choices={this.choices} />
          ) : (
            this.renderResultsSection()
          )}
          <RulesPopupContainer>{this.RulesPopup()}</RulesPopupContainer>
        </GameContainer>
      </MainContainer>
    )
  }
}

export default RockPaperScissors
