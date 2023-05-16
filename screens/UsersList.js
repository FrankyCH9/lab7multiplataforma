import React, {useEffect, useState} from 'react'
import  {View , Text} from 'react-native'
import {database} from '..//database/firebase'
import {  collection, onSnapshot, orderBy , query } from 'firebase/firestore'
import Usuarios from './Usuarios'

const UsersList = () => {

const  [users, setUsers] = useState([])

useEffect( () => {
  const collectionRef = collection(database, 'usuarios')
  const q =  query(collectionRef, orderBy('name', 'desc'))

  const unsuscribe = onSnapshot(q, querySnapshot => {
    setUsers(
      querySnapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
        email: doc.data().email,

        phone: doc.data().phone
      })
      )
    )
  })
  return unsuscribe
}, [])

  return (
    <View>
        <Text>User List</Text>
        {users.map(usuario => <Usuarios key={usuario.id} {...usuario}/>)}
    </View>
    
  )
}

export default UsersList