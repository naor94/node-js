const express = require('express');
const catController= require("../controllers/cat")
const router = express.Router();



router.post('/addCat', catController.postAddCat);
router.get('/getCat', catController.getAllCat)
router.post('/updateCat', catController.postEditCat)


module.exports = router;
