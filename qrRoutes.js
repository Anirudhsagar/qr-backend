const express = require("express");
const router = express.Router();

const qrController = require("./qrControllers")

router.post("/api/qrCode/generate", qrController.qrGenerator)
router.get("/api/qrCode/:id", qrController.qrCodeImage)

//Error Handing
router.all('/*', (req, res) => {
    res.status(404).send({ status: false, message: "URL Not Found" })
})
module.exports = router