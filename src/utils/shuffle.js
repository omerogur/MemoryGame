//random number oluşturarak array karıştır

const shuffle = arr => {
    for(let i = 0; i < arr.length; i++) {
      const randomNumber = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[randomNumber]] = [arr[randomNumber], arr[i]]
    }

    return arr;
}

export default shuffle;