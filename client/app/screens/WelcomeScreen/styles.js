import { StyleSheet } from 'react-native'
import { colors } from '../../config'

export default styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 40,
    fontWeight: 'bold',
  },
})
