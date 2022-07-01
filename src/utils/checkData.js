//ALTARNATİF ---- 

const checkData = (data,opened) => {
     const newData = [...data];
     let newOpened = [...opened];    
    if (opened.length === 2) {
      if (opened[0].id === opened[1].id) {
        newData.map(item => {
          if (item.id === opened[0].id) {
            item.status = true
          }
        })
        newOpened=[]
      } else {
       newOpened=[]

        newData.map(item => {
          if (item.status) {
            item.isOpen = true
          } else {
            item.isOpen = false

          }
        })
      }
    }
     return { data:newData,opened:newOpened}
  }

  export default checkData;