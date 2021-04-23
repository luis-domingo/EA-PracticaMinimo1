"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = require("../controllers/user.controller");
var user_router = express_1.Router();
user_router.route('/users/register') //API Endpoint for Registering a user
    .post(user_controller_1.register); // CREATE the user JSON object
exports.default = user_router;
