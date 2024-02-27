const { Router } = require("express")

const usersRoutes = require('./users.routes')
const sessionsRoutes = require("./sessions.routes")
const movieNotesRoutes = require('./movies_notes.routes')
const movieTagsRoutes = require('./movies_tags.routes')

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/sessions', sessionsRoutes)
routes.use('/movies', movieNotesRoutes)
routes.use('/tags', movieTagsRoutes)

module.exports = routes