export const resolveAfter2Seconds = () => {
      return new Promise (resolve => {
        setTimeout(() =>{
          resolve();
        }, 2000)
      })
    }
