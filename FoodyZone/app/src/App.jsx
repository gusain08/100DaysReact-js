import React from 'react'
import Styled, { styled } from 'styled-components';
import img from './assets/FoodyZone.svg'
import bg  from './assets/bg.png';
const App = () => {
  return (
   <>
   <Maincontainer>
      <TopContainer>
        <div className="logo">
          <img src={img} alt="" />
        </div>
        <div className="search-section">
          <input type="text" placeholder='Search-food' />
        </div>
      </TopContainer>

      <FilterContainer>
      <Button>
      All
      </Button>
      <Button>
      Breakfast
      </Button>
      <Button>
      Lunch
      </Button>
      <Button>
    Dinner
      </Button>
      </FilterContainer>

      <FoodCardContainer>
        <FoodCards>

        </FoodCards>
      </FoodCardContainer>
   </Maincontainer>
   
   </>
  )
}

export default App
const Maincontainer = styled.div`
 max-width:1200px;
 margin:0 auto;

`;
const TopContainer = styled.section`
display: flex;
min-height: 140px;
align-items: center;
justify-content: space-between;

.search-section{
  input{
    background: transparent;
    border: 1px solid red;
    height: 30px;
    border-radius: 5px;
    color: #fff;
    padding: 0 14px;
    font-size: 16px;
  }
}
`;

const FilterContainer = styled.div`
display: flex;
justify-content: center;
gap:12px;`
;

const Button = styled.button`
background-color:#FF4343;
padding:8px 15px;
border-radius:5px;
color:#fff;
border: none;  
  font-size: 18px;
  cursor: pointer;
  margin-right: 15px;
`;

const FoodCardContainer = styled.section`
background-size: cover;
    background-repeat: no-repeat;
    height: calc(100vh - 170px);

`;
const FoodCards = styled.div`
background-color:#FF4343;

`;