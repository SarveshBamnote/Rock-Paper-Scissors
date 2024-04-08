import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`
export const GameContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
export const ScoreCardSection = styled.div`
  border: 1px solid #ffffff;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
`
export const Heading = styled.h1`
  font-size: 28px;
  color: #ffffff;
  font-family: 'Bree Serif';
  font-weight: 500;
  margin-left: 40px;

  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`
export const ScoreText = styled.p`
  font-size: 24px;
  color: #223a5f;
  font-family: 'Bree Serif';
  margin: 0px;
  margin-top: 10px;
`
export const Score = styled.p`
  font-size: 48px;
  color: #223a5f;
  font-family: 'Roboto';
  font-weight: 600;
  margin: 0px;
  text-align: center;
`
export const ResultSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const PlayersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const Player = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PlayerName = styled.p`
  font-size: 24px;
  color: #ffffff;
  font-family: 'Roboto';
`
export const ImageUrl = styled.img`
  width: 180px;
  height: 180px;

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`
export const GameResult = styled.p`
  font-size: 28px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 600;
`
export const PlayAgainBtn = styled.button`
  padding: 8px 30px 8px 30px;
  color: #223a5f;
  background-color: #ffffff;
  border-radius: 8px;
  font-family: 'Bree Serif';
  border: none;
  outline: none;
  cursor: pointer;
`
export const RulesPopupContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-self: flex-end;
`
export const PopupContainer = styled.div`
  background-color: #ffffff;
  background-size: cover;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin: 16px;
  }
`
export const RulesBtn = styled.button`
  width: 80px;
  height: 34px;
  color: #223a5f;
  background-color: #ffffff;
  border-radius: 8px;
  font-family: 'Bree Serif';
  border: none;
  outline: none;
  cursor: pointer;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 16px;
`
export const CloseBtn = styled.button`
  width: 30px;
  height: 30px;
  justify-content: flex-start;
  align-self: flex-end;
  border: none;
  outline: none;
  cursor: pointer;
`
export const RulesImage = styled.img`
  width: 80%;
  height: 80%;
`
