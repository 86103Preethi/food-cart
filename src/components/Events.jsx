import React, { useState } from 'react'

const Events = () => {
   const [user,setUser] = useState({fname:'Preethi',lname:'Kumar',age:23});


    const handleName = (e) => {
      setUser({...user,[e.target.name]:[e.target.value] })
    }


  return (
   <>
   <h2>{user.fname} {user.lname} - {user.age}</h2>
   <form>
    <input type='text' placeholder='first name' name='fname' value={user.fname} onChange={handleName}/>
    <input type='text' placeholder='last name' name='lname' value={user.lname} onChange={handleName}/>
    <input type='text' placeholder='age' name='age' value={user.age} onChange={handleName}/>
   </form>
   </>
  )
}

export default Events