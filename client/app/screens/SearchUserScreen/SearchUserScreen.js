import React, { useState, useEffect } from 'react'
import styles from './styles'
import Screen from '../../components/Screen'
import { getUsers } from '../../api/users'
import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from '../../components/forms'
import UserCard from '../../components/UserCard/UserCard'
import { View } from 'react-native'

export default function SearchUserScreen() {
  const [input, setInput] = useState('')
  const [users, setUsers] = useState([])
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    if (!input) {
      return setUsers([])
    }
    const handleChangeText = async () => {
      let res = await getUsers(input)
      setUsers(res.data)
    }

    const timer = setTimeout(handleChangeText, 300)
    return () => clearTimeout(timer)
  }, [input])

  const handleShowError = (data) => {
    if (data.length === 0) {
      setTimeout(() => {
        setShowError(true)
      }, 1000)
      setShowError(false)
    }
  }
  return (
    <Screen style={styles.container}>
      <Form initialValues={{ username: '' }}>
        <ErrorMessage
          error='Could not find any user with that username'
          visible={showError}
        />
        <FormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='account'
          name='username'
          placeholder='User'
          onChangeText={setInput}
        />
      </Form>

      {users &&
        users.map((user) => {
          return <UserCard key={user.id} user={user} />
        })}
    </Screen>
  )
}
