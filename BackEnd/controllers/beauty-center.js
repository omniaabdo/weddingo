const beautyCenterModel = module.require("../models/beauty-center")

const get = async (req, res) => {
    try {
        // Get page and limit from query params (default to page 1, 10 items per page)
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        
        // Calculate how many documents to skip
        const skip = (page - 1) * limit;
        
        // Fetch the paginated data
        const data = await beautyCenterModel.find()
            .skip(skip)
            .limit(limit);
        
        // Get the total count of documents (for calculating total pages)
        const totalDocuments = await beautyCenterModel.countDocuments();

        // Send paginated response
        res.json({
            data: data,
            currentPage: page,
            totalPages: Math.ceil(totalDocuments / limit),
            totalDocuments: totalDocuments
        });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

const getById = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await beautyCenterModel.findById(id);
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
        let updatedObj = await beautyCenterModel.findByIdAndUpdate(id, data, { new: true });
        res.json({ success: true, data: updatedObj })
    } catch (e) {
        res.json({ success: false, error: e.message })
    }
}

const create = (req, res) => {
    let data = req.body
    beautyCenterModel.create(data).then(() => {
        res.json({ success: true, data: data })
    }).catch((err) => {
        res.json({ success: false, message: `not created ${err}` })
    })
}

const deleteOne = async (req, res) => {
    try {
        let { id } = req.params;
        await beautyCenterModel.findByIdAndDelete(id);
        res.json({ success: true })
    } catch (e) {
        res.json({ success: false, message: e.message })
    }

}

module.exports = { get, getById, update, create, deleteOne }
