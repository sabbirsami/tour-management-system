exports.getAllTour = async (req, res, next) => {
    try {
        const filters = { ...req.body };
        const excludeFields = ["sort", "page", "limit"];
        excludeFields.forEach((field) => delete filters[field]);

        const queries = {};
        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ");
            queries.sortBy = sortBy;
        }
        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ");
            queries.fieldsBy = fields;
        }
        const tours = await getTourByService(filters, queries);

        res.status(200).json({
            success: true,
            message: "Successfully deleted the tour",
            data: tours,
        });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            error: error.message,
        });
    }
};
