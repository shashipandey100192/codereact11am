import React from 'react'

const a = 150;
function Contactpage() {
  if(a>=100)
  {
    return(
        <h1>this is first condityion</h1>
    )
  }
  else if(a>=50)
    {
        return(
            <h2>this is first condityion</h2>
        )
      }
      else
      {
        return(
            <h2>this is last condition</h2>
        )

      }
}

export default Contactpage





