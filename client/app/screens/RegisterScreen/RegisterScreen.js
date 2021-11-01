import React, { useContext } from 'react'
import * as Yup from 'yup'
import { Image } from 'react-native'
import styles from './styles'
import Screen from '../../components/Screen'
import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from '../../components/forms'
import { register } from '../../api'
import { AuthContext } from '../../auth'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  username: Yup.string().required().min(5).label('Username'),
  password: Yup.string().required().min(4).label('Password'),
})

function RegisterScreen() {
  const authContext = useContext(AuthContext)

  const handleSubmit = async ({ email, password, username }) => {
    const result = await register(email, password, username)

    //display if wrong
    if (!result.ok) {
      console.log('fel :>> ', result)
      return
    }

    authContext.setUser(result.data)
  }
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />

      <Form
        initialValues={{ username: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <FormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='account'
          name='username'
          placeholder='Username'
        />
        <FormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          name='email'
          placeholder='Email'
          textContentType='emailAddress'
        />
        <FormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />
        <SubmitButton title='Register' />
      </Form>
    </Screen>
  )
}

export default RegisterScreen
