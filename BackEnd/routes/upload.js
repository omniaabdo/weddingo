const express = module.require('express')
const { get, create, deleteOne } = module.require("../controllers/upload");
const router = express.Router();

router.get('/', get)
router.post("/", create)
router.delete('/:id', deleteOne)

module.exports = router;
