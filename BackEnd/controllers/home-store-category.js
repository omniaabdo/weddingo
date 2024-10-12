const homeStoreCategoryModel = module.require("../models/home-store-category")

const get = async (req, res) => {
    try {
        let data = await homeStoreCategoryModel.find()
        res.json({ data: data })
    } catch (e) {
        res.json({ message: e.message })
    }
}

const getById = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await homeStoreCategoryModel.findById(id);
        if (data) {
            res.json({ success: true, data: data })
        } else {
            res.json({ success: false, message: 'not found' })
        }
    } catch (e) {
        res.json({ success: false, message: e.message })
    }
}

const update = async (req, res) => {
    try {
        let { id } = req.params;
        let data = req.body;
        let updatedObj = await homeStoreCategoryModel.findByIdAndUpdate(id, data, { new: true });
        res.json({ success: true, data: updatedObj })
    } catch (e) {
        res.json({ success: false, error: e.message })
    }
}

const create = (req, res) => {
    let data = req.body
    homeStoreCategoryModel.create(data).then(() => {
        res.json({ success: true, data: data })
    }).catch(() => {
        res.json({ success: false, message: "not created" })
    })
}

const deleteOne = async (req, res) => {
    try {
        let { id } = req.params;
        await homeStoreCategoryModel.findByIdAndDelete(id);
        res.json({ success: true })
    } catch (e) {
        res.json({ success: false, message: e.message })
    }
}

module.exports = { get, getById, update, create, deleteOne }