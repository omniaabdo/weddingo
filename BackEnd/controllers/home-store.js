const homeStoreModel = module.require("../models/home-store")

const get = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; 
        const limit = parseInt(req.query.limit) || 10; 

        const skip = (page - 1) * limit;
        let data = await homeStoreModel.find()
            .populate("category")
            .skip(skip)   
            .limit(limit); 

        const totalItems = await homeStoreModel.countDocuments();

        res.json({
            data: data,
            currentPage: page,
            totalPages: Math.ceil(totalItems / limit),
            totalItems: totalItems
        });
    } catch (e) {
        res.json({ message: e.message });
    }
};

const getById = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await homeStoreModel.findById(id);
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
        let updatedObj = await homeStoreModel.findByIdAndUpdate(id, data, { new: true });
        res.json({ success: true, data: updatedObj })
    } catch (e) {
        res.json({ success: false, error: e.message })
    }
}

const create = (req, res) => {
    let data = req.body
    homeStoreModel.create(data).then(() => {
        res.json({ success: true, data: data.data })
    }).catch((err) => {
        res.json({ success: false, message: `not created ${err}` })
    })
}

const deleteOne = async (req, res) => {
    try {
        let { id } = req.params;
        await homeStoreModel.findByIdAndDelete(id);
        res.json({ success: true })
    } catch (e) {
        res.json({ success: false, message: e.message })
    }
}

module.exports = { get, getById, update, create, deleteOne }