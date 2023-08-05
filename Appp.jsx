// import React, { useState } from 'react'

// const Appp = () => {
//   const [display, setDisplay] = useState();
//   const [displayt, setDisplayt] = useState([]);
//   const data = [
//     {id:1, q:"q1", a:"a1"},
//     {id:2, q:"q2", a:"a2"},
//     {id:3, q:"q3", a:"a3"},
//   ]
//   const handledisplay = (e1)=>{
//     console.log(e1.target.id)
//     setDisplayt([...displayt, e1.target.id])
//     console.log("dit ",displayt)
//      data.map((e,i)=>{
//       if(e1.target.id == i) {
//         setDisplay("none")
//       console.log(display)
//       }
//       // else setDisplay(true)
//      })
//   }
//   return (
//     <div>
//       <div>
//         {data.map((e,i) => {
//           return(<>
//           <div onClick={handledisplay} id={i+1} style={{backgroundColor:"#ddd"}}>{e.q}</div>
//           <div style={{ display: displayt == i+1 ? "none":""}} name={i}>{e.a}</div>
//           </>)
//         })}
//       </div>
//     </div>
//   )
// }

// export default Appp




import React from 'react'
import SingleAccordnian from './SingleAccordnian'

const Appp = () => {
  return (
    <div>
    <h1>Accordion</h1>
      <SingleAccordnian question={"what is lorem explain ?"} answer={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minus perspiciatis fugiat velit, corrupti laborum ut, eum provident nihil voluptate doloribus dolore earum reiciendis! Ipsum aspernatur maiores ab veritatis architecto."} />
      <SingleAccordnian question={"how lorem works explain ?"} answer={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minus perspiciatis fugiat velit, corrupti laborum ut, eum provident nihil voluptate doloribus dolore earum reiciendis! Ipsum aspernatur maiores ab veritatis architecto."} />
      <SingleAccordnian question={"does lorem generates dummy para ?"} answer={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minus perspiciatis fugiat velit, corrupti laborum ut, eum provident nihil voluptate doloribus dolore earum reiciendis! Ipsum aspernatur maiores ab veritatis architecto."} />
      <SingleAccordnian question={"what is lorem explain ?"} answer={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minus perspiciatis fugiat velit, corrupti laborum ut, eum provident nihil voluptate doloribus dolore earum reiciendis! Ipsum aspernatur maiores ab veritatis architecto."} />
      <SingleAccordnian question={"how lorem works explain ?"} answer={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minus perspiciatis fugiat velit, corrupti laborum ut, eum provident nihil voluptate doloribus dolore earum reiciendis! Ipsum aspernatur maiores ab veritatis architecto."} />
      <SingleAccordnian question={"does lorem generates dummy para ?"} answer={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minus perspiciatis fugiat velit, corrupti laborum ut, eum provident nihil voluptate doloribus dolore earum reiciendis! Ipsum aspernatur maiores ab veritatis architecto."} />
    </div>
    
  )
}

export default Appp
