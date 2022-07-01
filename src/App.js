import { useEffect, useState } from 'react';
import { Aliance, Christmas, Droid, Empire, Favorite, Sparkle, Star, Trophy } from './icons/all';
import './App.css';
import shuffle from './utils/shuffle';


const iconList = [Aliance, Christmas, Droid, Empire, Favorite, Sparkle, Star, Trophy]


function App() {
  const [data, setData] = useState([])
  const [opened, setOpened] = useState([])
  const [matches , setMatches] = useState(0)
  const [turns , setTurns] = useState(0)
  


  const pushing = () => {
    setTurns(0)
    let newList = []
    let iconNumber = 0;
    for (let i = 0; i < 16; i++) {
      newList.push({
        icon: iconList[iconNumber],
        isOpen: false,
        status: false,
        id: iconNumber

      })
      if (i % 2 === 1) {
        iconNumber++;

      }
    }
    newList = shuffle(newList)
    setData(newList)
  }

  //opened içerisinde 2 değer var mı yok mu
  //eğer içerisinde 2 değer varsa 
  //bunlar birbirine eşit mi(id,name)
  //eğer eşitlerse status true çevir
  //eşit değilse newOpened içi boşalt
  //
  //
  //newData oluşturup datayı içine yolla
  //İd'si gelen itemin open kısmı true 
  //True olanın newOpend datanın içine de gönder
  //
  //setData newdata yolla
  //setOpenda newOpend gönder

  const open = index => {

    const newData = [...data]
    if (opened.length > 1) {
      if (opened[0].id === opened[1].id) {
        setMatches(x => x+1)
        newData.map(item => {
          if (item.id === opened[0].id) {
            item.status = true
          }

        })

      }
      newData.map(item => item.isOpen = false)
      setTurns(prev => prev+1)
      setOpened([])
      
      
      
    }
  
    newData[index].isOpen = true;
    let obj = newData[index];
    setData(newData)
    setOpened(prev => [...prev, obj])
  }

  useEffect(() => {
    pushing()
  }, [])

  return (
    <div className='Container'>
    
      <div className='Matches'>Matches :{matches} </div>
      <div className='Turns'>Turns:{turns} </div>
      <div className="App">
        {
          data.map((Item, index) =>
            <div key={index} className={
              Item.status ? "win Box" : "Box"
            }
              onClick={() => open(index)}>
              {
                (Item.status || Item.isOpen) &&
                <Item.icon size="42" color="#fff" />
              }
            </div>
          )
        }
      </div>
      
      {   
       turns >=20 &&
            
          <div className='GameOverContainer'>
            <div className='GameOver'>GAME OVER</div>
            <button className='buton' onClick={pushing}>Play Again</button>
          </div>
          
          
      }
    </div>
  );
}

export default App;