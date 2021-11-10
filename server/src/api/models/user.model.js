import { NeoModel, getParams } from './neo.model.js'
import { compare } from '../../util/index.js'
import { cypher } from '../../db/neo4j.js'

export default class User extends NeoModel {
  constructor(props) {
    super(props)
  }

  matchesPassword(password) {
    return compare(password, this.password)
  }

  static async find({ limit = 10, page = 0, username, uid, ...props } = {}) {
    username = username && `(?i).*${username}.*`

    const records = await cypher(
      `MATCH (m:${this.model || this.name} ${await getParams(props)})
      ${username ? `WHERE m.username =~ $username AND m.id <> '${uid}'` : ''}
      RETURN m SKIP ${page * limit} LIMIT ${limit}`,
      { ...props, username }
    )
    return records.map((rec) => {
      delete rec.admin
      delete rec.password
      delete rec.email
      return new this(rec)
    }) // return a NeoModel object with methods
  }
}
