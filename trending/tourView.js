let count = 0;
const tourView = (req, res, next) => {
    count++;
    next();
};
module.exports = tourView;
