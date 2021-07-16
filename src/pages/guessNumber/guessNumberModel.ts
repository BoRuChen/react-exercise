export const getAns = () => {
    let Anses:string[] = []
    let k = Math.round(Math.random()*10);
    while (Anses.length < 4) {
      if (!Anses.find(x => x===k.toString()))
      {
        Anses.push(k.toString())
      }
      k = Math.round(Math.random()*10);
    }
    return Anses[0] +Anses[1]+Anses[2]+Anses[3]
  }

  export const getGuseeAns = (Ans:string,guessNums:string[]) => {
    let ansSteings = Ans.split("")
    let A = 0
    let B = 0
    ansSteings.map((ansSteing,index)=>{
      guessNums.map((guessNum,index1)=>{
        if (ansSteing===guessNum) {
          if(index === index1){
            A++
          }
          else{
            B++
          }
        }
      })
    })
    return `${A}A${B}B`
  }