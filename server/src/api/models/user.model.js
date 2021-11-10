import { NeoModel } from './neo.model.js'
import { compare } from '../../util/index.js'

export default class User extends NeoModel {
  constructor(props) {
    super(props)
  }

  matchesPassword(password) {
    return compare(password, this.password)
  }
}
