import { colors } from '../../config'
import routes from '../../navigation/routes'

export default menuItems = [
  {
    title: 'Liked movies',
    icon: { name: 'movie-open', backgroundColor: colors.primary },
  },
  {
    title: 'Find movie',
    icon: { name: 'movie-search', backgroundColor: colors.primary },
  },
  {
    title: 'Friends',
    icon: { name: 'account-supervisor', backgroundColor: colors.primary },
  },
  {
    title: 'Friend request',
    icon: { name: 'account-plus', backgroundColor: colors.primary },
  },
  {
    title: 'Find User',
    icon: { name: 'account-search', backgroundColor: colors.primary },
    targetScreen: routes.LOGIN,
  },
  {
    title: 'Settings',
    icon: { name: 'account-cog', backgroundColor: colors.primary },
  },
]
