const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const graphqlResolver = require('./src/graphql/resolvers')
const graphqlSchema = require('./src/graphql/schema')
const { api } = require('./config')
const { connect } = require('./src/database')
const compression = require('compression')

const PORT = api.port
const app = express()
app.use(cors())
app.use(compression())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  })
})

app.use(
  '/injection',
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
    customFormatErrorFn(err) {
      if (err.message.startsWith('Database Error: ')) {
        return new Error('Internal server error')
      }
      if (!err.originalError) {
        return err
      }
      const name = err.originalError.name
      const code = err.originalError.code
      const message = err.message || 'An error occurred.'
      return { code, message, name: name }
    }
  })
)

connect()

app.listen(PORT, () => {
  console.log(`App running ${PORT}`)
})
