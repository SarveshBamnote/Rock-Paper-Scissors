import {
  ChoicesContainer,
  ChoiceButton,
  ChoiceUrl,
  ChoiceItem,
} from './styledComponents'

const Choices = props => {
  const {choicesList, choices} = props

  return (
    <ChoicesContainer>
      <ChoiceItem>
        <ChoiceButton
          data-testid="rockButton"
          onClick={() => choices(choicesList[0])}
          type="button"
        >
          <ChoiceUrl src={choicesList[0].imageUrl} alt={choicesList[0].id} />
        </ChoiceButton>
      </ChoiceItem>
      <ChoiceItem>
        <ChoiceButton
          data-testid="scissorsButton"
          onClick={() => choices(choicesList[1])}
          type="button"
        >
          <ChoiceUrl src={choicesList[1].imageUrl} alt={choicesList[1].id} />
        </ChoiceButton>
      </ChoiceItem>
      <ChoiceItem>
        <ChoiceButton
          data-testid="paperButton"
          onClick={() => choices(choicesList[2])}
          type="button"
        >
          <ChoiceUrl src={choicesList[2].imageUrl} alt={choicesList[2].id} />
        </ChoiceButton>
      </ChoiceItem>
    </ChoicesContainer>
  )
}

export default Choices
