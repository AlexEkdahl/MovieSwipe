import { NeoModel, getParams } from './neo.model.js'
import { cypher } from '../../db/neo4j.js'

export default class Movie extends NeoModel {
  constructor(props) {
    super(props)
  }

  parseIMDB() {
    this.imdb = JSON.parse(this.imdb).rating
  }

  static async findNonRelated({ limit = 10, page = 0, uid, ...props } = {}) {
    const records = await cypher(
      `MATCH (m:${this.model || this.name} ${await getParams(props)})
      WHERE NOT (m)-[]->(:User {id: $uid})
      RETURN m SKIP ${page * limit} LIMIT ${limit}`,
      { ...props, uid }
    )
    return records.map((rec) => {
      rec.imdb = JSON.parse(rec.imdb).rating
      return new this(rec)
    }) // return a NeoModel object with methods
  }

  static async matchingMovies({ limit = 10, page = 0, ...props } = {}) {
    const records = await cypher(
      `MATCH 
      (u2:User {id: $me})-
      [:LIKES]->(m:${this.model || this.name})<-[:LIKES]
      -(u1:User {id: $id})
      RETURN m
      SKIP ${page * limit} LIMIT ${limit}`,
      props
    )
    return records.map((rec) => {
      rec.imdb = JSON.parse(rec.imdb).rating
      return new this(rec)
    }) // return a NeoModel object with methods
  }
}
