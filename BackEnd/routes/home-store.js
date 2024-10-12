const express = module.require('express')
const { get, getById, update, create, deleteOne } = module.require("../controllers/home-store");
const router = express.Router();

router.get('/', get)
router.get('/:id', getById)
router.put('/:id', update)
router.post("/", create)
router.delete('/:id', deleteOne)

module.exports = router;
