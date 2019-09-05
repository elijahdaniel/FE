// import React from 'react';
import styled from 'styled-components'

export const Header = styled.div`
         display: flex;
         height: 300px;
         margin: 0 auto;
         margin-top: 10px;
         padding: 20px;
         width: 80%;
         justify-content: center;
         background: #b7b7b752;
         border-radius: 20px;
         @media (max-width: 1024px) {
           flex-direction: column;
         }
         @media (max-width: 500px) {
           width: 100%;
         }
       `

export const Container = styled.div`

  margin: 0 auto;
`

// Left of header
export const ProfileImg = styled.img`
         width: 250px;
         height: 250px;
         border: 1px solid #f7f7f7;
         border-radius: 50%;
         box-shadow: 0px 3px 14px -4px #000;
          @media (max-width: 500px) {
           position: relative;
           left: 90px;
         }
       `

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;

  @media (max-width: 500px) {
    text-align: center;
    margin-top: 20px;
    padding-left: 0;
  }
`

export const UserName = styled.h1`
  font-size: 2.5rem;
  line-height: 15px;
  color: white;
`

export const About = styled.p`
  padding-left: 3px;
  display: flex;
  flex-direction: column;

  span {
    color: white;
    font-weight: 600;
  }
`

// Right of header
export const HeaderRight = styled.div`
  width: 50%;
  text-align: right;
  padding-top: 100px;
`

export const FollowButton = styled.button`
  padding-left: 30px;
  padding-right: 30px;
  font-size: 1.2rem;
  border-radius: 5px;
  outline: 0;
  border: 0;
  height: 40px;
  background: #9acd32;
  color: white;
  font-weight: 700;
`
export const MessageButton = styled.button`
  padding-left: 30px;
  padding-right: 30px;
  font-size: 1.2rem;
  border-radius: 5px;
  margin-right: 5px;
  outline: 0;
  border: 0;
  height: 40px;
  background: #556b2f;
  color: white;
  font-weight: 700;
`

// Cards
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  width: 600px;
  height: 340px;
  border-radius: 20px;
  background: #f7f7f7;
  margin: 20px;
  transition: all 0.5s ease;
  box-shadow: 0px 9px 15px -4px #000;
  color: white;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 1224px) {
    width: 80%;
  }

  &:hover {
    transform: scale(1.04);
  }
`

export const CardTopLeft = styled.p`
  padding: 20px;
  font-size: 2rem;
  font-weight: 600;
`

export const CardTopRight = styled.p`
  padding-right: 20px;
  padding-top: 30px;
  text-transform: uppercase;
  font-size: 1.1rem;
`

export const CardBottomRight = styled.p`
  padding: 20px;

  img {
    width: 35px;
  }
`
export const CardBottomLeft = styled.p`
  padding-left: 20px;
  position: relative;
  top: 20px;
  font-size: 1.5rem;
`

export const TopOfCard = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BottomOfCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FlexFlex = styled.div`
  display: flex;
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
`

export const Bar = styled.div`
  width: 100%;
  margin: 0 auto;

  span {
    font-weight: 400;
    display: inline;
    color: #ccc;
    padding: 0 10px;
  }
`

export const Sort = styled.div`
  padding-left: 40px;
  padding-top: 20px;
  select {
    outline: 0;
    border: 1px solid #ccc;

    &:active {
      outline: 0;
      border: 0;
    }
  }
`

export const FollowersContainer = styled.div`
  left: 0;
  background: transparent;
  width: 90%;
  margin: 0 auto;
`

export const FollowersCards = styled.div`
  color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const FollowingCards = styled.div`
  color: black;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: center;
`

export const CardMargin = {
  margin: '20px',
  width: '255px'
}

export const refs = {
  color: '#008B8B',
  borderRadius: '5px',
  padding: '10px 12px',
  fontSize: '1.2rem'
}

export const BarMargin = {
  marginTop: '30px'
}

export const NavBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 180px;
  padding-top: 15px;
`
