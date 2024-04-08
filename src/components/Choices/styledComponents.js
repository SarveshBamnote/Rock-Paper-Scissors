import styled from 'styled-components'

export const ChoicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`
export const ChoiceItem = styled.div`
  width: 44%;
`
export const ChoiceButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const ChoiceUrl = styled.img`
  width: 180px;
  height: 180px;

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`
