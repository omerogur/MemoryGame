/*/***********ALTERNATİF ****************/


import { useEffect, useState } from 'react';
import { Aliance, Christmas, Droid, Empire, Favorite, Sparkle, Star, Trophy } from './icons/all';
import './App.css';
import shuffle from './utils/shuffle';

const iconList = [Aliance, Christmas, Droid, Empire, Favorite, Sparkle, Star, Trophy]


function App() {
  const [status, setStatus] = useState(true)
  const [data, setData] = useState([])
  const [opened, setOpened] = useState([])
  
  const pushing= () => {
    let newList = []
    let iconNumber=0;
    for (let i = 0; i < 16; i++) {
      newList.push({
        icon: iconList[iconNumber],
        isOpen: false,
        status: false,
        id:iconNumber
       
      })
        if(i%2 === 1){
          iconNumber++;
         
        }
    }
   newList = shuffle(newList)
    setData(newList)
  }



  const open = id => {
    const newData = [...data]

    if (opened.length >= 2) {
      if (opened.length == 2) {
        if (opened[0].id == opened[1].id) {
          newData.map(item => {
            if (item.id === opened[0].id) {
              item.status = true
            }
          })
          setOpened([])
        } else {
          console.log("if çalıştı");
          setOpened([])

          newData.map(item => {
            if (item.status) {
              item.isOpen = true
            } else {
              item.isOpen = false

            }
          })
        }
      }
    }
    else {
      newData[id].isOpen = true
      setData(newData)
      let obj = newData[id]
      setOpened([...opened, obj])

    }


  }
  console.log(opened);

  useEffect(() => {
    pushing()
  }, [])


  return (
    <div className='Container'>
      <div className="App">
        {
          data.map((Item, index) =>
            <div key={index} className="Box"
              onClick={() => open(index)}>
              {
                Item.isOpen && <Item.icon size="42" color="#fff" />
              }
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;