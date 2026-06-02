//require express
const express= require("express")
//Router
const router = express.Router();
//require Contoller
const loginContoller = require("../controllers/authAdmin.controller");
//Init method Request
router.post('/login',loginContoller);
//Export
module.exports = router;