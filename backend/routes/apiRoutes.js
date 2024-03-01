const express = require("express");
const { getData, personalInfo,educationDegree, educationType, Internship, Services ,Projects,Skills,TestScore,Publication, Testimonials, AddpersionInfo } = require("../controllers/Api");
const db = require("../config/connection")
const fs = require("fs")
const path = require("path");
const sharp = require('sharp');
const { requireSignIn } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/upload");

const router = express.Router();

router.get("/data",requireSignIn,getData)
router.get("/persional-info",requireSignIn,personalInfo)
router.post("/add-persional-info",requireSignIn,AddpersionInfo)
router.get("/education/degree/content/:record_id", educationDegree);
router.get("/education/type/:record_id",educationType)
router.get("/work-experience/internship/:record_id",Internship)
router.get("/services/:record_id",Services)
router.get("/academics/projects/:record_id",Projects)
router.get("/academics/skill/:record_id",Skills)
router.get("/achievement/testscore/:record_id",TestScore)
router.get("/achievement/publication/:record_id",Publication)
router.get("/testimonials/:record_id",Testimonials)
// router.delete("/delete/:itemId",deleteTestItems)

router.delete('/data/:id', (req, res) => {
     idconst = req.params.id;
    const sql = 'DELETE FROM education WHERE id = ?';

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error deleting data:', err);
            res.status(500).json({ error: 'Error deleting data' });
            return;
        }
        const logMessage = `Deleted data with ID: ${id} at ${new Date().toISOString()}\n`;
        fs.appendFile(path.join(__dirname, 'delete_log.txt'), logMessage, (err) => {
            if (err) {
                console.error('Error logging deletion:', err);
            }
            console.log('Data deleted successfully');
            res.json({ message: 'Data deleted successfully' });
        });
    });
});

router.post('/convert',upload.single('image'), (req, res) => {
    // Read the image file from the request body (assuming it's a multipart form-data)
    const imageFile = req.file; // Assuming you're using a middleware like Multer for file upload
  
    if (!imageFile) {
      res.status(400).send('No image file uploaded');
      return;
    }
  
    // Convert image to WebP
    sharp(imageFile.buffer)
      .webp()
      .toBuffer()
      .then(webpData => {
        // Upload the converted image to MySQL
        const query = 'INSERT INTO images (name, image) VALUES (?, ?)';
        const params = [imageFile.originalname, webpData];
  
        connection.query(query, params, (err, result) => {
          if (err) {
            console.error('Error uploading image to MySQL:', err);
            res.status(500).send('Internal Server Error');
            return;
          }
          res.status(200).send('Image uploaded and converted successfully');
        });
      })
      .catch(err => {
        console.error('Error converting image to WebP:', err);
        res.status(500).send('Internal Server Error');
      });
  });
module.exports = router