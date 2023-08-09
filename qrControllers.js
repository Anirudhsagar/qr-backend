const qrModel = require("./qrModel");
const qr = require("qrcode");

const qrGenerator = async (req, res) => {

    try {
        const contentToEncode = req.body.content;

        // Generate QR code image
        const qrCodeImage = await qr.toDataURL(contentToEncode);

        // Save QR code to MongoDB
        const qrCode = new qrModel({
            content: contentToEncode,
            image: qrCodeImage,
        });
        await qrCode.save();

        res.status(201).json({ id: qrCode._id });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while generating the QR code.' });
    }
  
};







const qrCodeImage = async (req, res) => {
    const qrCodeId = req.params.id;

    try {
        const qrCode = await qrModel.findById(qrCodeId);

        if (qrCode) {
            res.json({ content: qrCode.content });
        } else {
            res.status(404).json({ error: 'QR code not found.' });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: 'An error occurred while retrieving the QR code.' });
    }
};








module.exports.qrGenerator = qrGenerator;
module.exports.qrCodeImage = qrCodeImage;
