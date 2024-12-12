"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Customer_1 = __importDefault(require("./modules/customer/Customer"));
const customerRouter = (0, express_1.Router)();
const customer = new Customer_1.default();
customerRouter.get('/customers', customer.getCustomers);
exports.default = customerRouter;
