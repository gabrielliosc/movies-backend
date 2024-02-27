require('express-async-errors')

const AppError = require('./utils/AppError')

const uploadsConfig = require('./configs/upload')

const express = require('express')
const cors = require("cors")
const routes = require('./routes')

const app = express();
app.use(express.json()) 
app.use(cors())
app.use("/files", express.static(uploadsConfig.UPLOADS_FOLDER))
app.use(routes)

app.use(( error, request, response, next ) => {
    if( error instanceof AppError) { 
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }
    
    return response.status(500).json({ 
        status: "error",
        message: 'Internal server error'
    })
})
const PORT = 3333; 
app.listen(PORT, () => console.log(`Server is runnig on ${PORT}`)); 