const express = require("express")
const ExpressFormidable = require("express-formidable")
const multer = require("multer")
const { ImageUploadContainer } = require("../controller/ImageUpload.js")

router = express.Router()


router.post("/upload-image",ExpressFormidable({maxFieldsSize:5*2024*2024}),ImageUploadContainer)


module.exports = router