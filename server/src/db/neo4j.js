import neo4j from 'neo4j-driver'

let driver

export const connectNeo4jDB = async (NEO_URI, NEO_USER, NEO_PASSWORD) => {
  if (driver) return driver

  return new Promise((resolve, reject) => {
    driver = neo4j.driver(NEO_URI, neo4j.auth.basic(NEO_USER, NEO_PASSWORD))
    console.log('CONNECTED TO NEO4J')
    resolve()
  })
}

export const recordMapper = (record) => {
  return record.get(0).properties
}

export const recordsMapper = (records) => {
  return records.records.map((rec) => recordMapper(rec))
}

export const cypher = async (query, props) => {
  const session = driver.session()
  try {
    return recordsMapper(
      await session.writeTransaction((tx) => tx.run(query, props))
    )
  } catch (err) {
    console.error(err)
  } finally {
    await session.close()
  }
}
