const express = require("express");
const Tour = require("../models/Tour");

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

exports.addNewTour = async (req, res, next) => {
    try {
        const newTour = req.body;
        const result = await Tour.insertOne(newTour);
        console.log(result);
        if (!result.insertedId) {
            return res
                .status(400)
                .send({ status: false, error: "Something went wrong!" });
        }
        res.send({
            success: true,
            message: `Tour added with id: ${result.insertedId}`,
        });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            error: error.message,
        });
    }
};

exports.getATour = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                error: "Not a valid tour place id",
            });
        }
        const tour = await Tour.find({ _id: id });
        if (!tour) {
            return res.status(400).json({
                success: false,
                error: "Couldn't find a tour place with this id",
            });
        }
        res.status(200).json({ success: true, data: tour });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            error: error.message,
        });
    }
};

exports.updateATour = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                error: "Not a valid tour place id",
            });
        }
        const result = await Tour.updateOne(
            { _id: id },
            { $set: req.body },
            { runValidators: true }
        );
        res.status(200).json({
            success: true,
            message: "Successfully updated the tour",
        });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            error: error.message,
        });
    }
};
