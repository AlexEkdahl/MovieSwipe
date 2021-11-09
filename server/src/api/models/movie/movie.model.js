import NeoModel from './neo.model.js'

export default class Movie extends NeoModel {
  constructor(props) {
    super(props)
  }

  parseIMDB() {
    this.imdb = JSON.parse(this.imdb).rating
  }
}
