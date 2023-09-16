const router = require("express").Router()

const serviceController = require("../controllers/serviceController")
//middleware
//SErvice router
router
.route("/services")
.post((req,res)=>serviceController.create(req,res))
.get((req,res)=>serviceController.getAll(req,res))

router.get("/services/:id", (req, res) => serviceController.get(req, res));
router.delete("/services/:id", (req, res) => serviceController.delete(req, res));


module.exports = router