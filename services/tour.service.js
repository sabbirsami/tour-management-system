exports.getTourByService = async (filters, queries) => {
    const result = await Tour.find({})
        .select(queries.fieldsBy)
        .sort(queries.sortBy);
    return result;
};
