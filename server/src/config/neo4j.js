import neo4j from 'neo4j-driver'
import dotenv from 'dotenv'
dotenv.config()

const { NEO_URI, NEO_USER, NEO_PASSWORD } = process.env
const driver = neo4j.driver(NEO_URI, neo4j.auth.basic(NEO_USER, NEO_PASSWORD))

export default driver
