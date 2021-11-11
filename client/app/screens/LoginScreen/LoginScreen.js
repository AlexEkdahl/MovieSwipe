import React, { useContext, useState } from 'react'
import { Image } from 'react-native'
import styles from './styles'
import * as Yup from 'yup'
import Screen from '../../components/Screen'
import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from '../../components/forms'
import { login } from '../../api'
import { AuthContext, storeUser } from '../../auth'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
})

export default LoginScreen = (props) => {
  const authContext = useContext(AuthContext)
  const [loginFailed, setLoginFailed] = useState(false)

  const handleSubmit = async ({ email, password }) => {
    const result = await login(email, password)
    if (!result.ok) return setLoginFailed(true)
    setLoginFailed(false)
    authContext.setUser(result.data)
    storeUser(result.data)
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />

      <Form
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <ErrorMessage
          error='Invalid email and/or password.'
          visible={loginFailed}
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
        <SubmitButton title='Login' />
      </Form>
    </Screen>
  )
}
