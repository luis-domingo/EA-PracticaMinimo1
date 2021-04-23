"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    uname: String,
    pswrd: String,
    email: String
});
exports.default = mongoose_1.model('User', schema);
