import { StyleSheet } from 'react-native'
import { colors } from '../../config'

export default styles = StyleSheet.create({
  card: {
    position: 'relative',
    backgroundColor: colors.white,
    width: 300,
    height: '50%',
    borderRadius: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  plot: {
    color: colors.white,
    fontWeight: 'bold',
  },
  title: {
    marginBottom: 7,
    color: colors.white,
  },
})
