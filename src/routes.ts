import { Router } from "express";
import Customer from "./modules/customer/Customer";

const customerRouter = Router();

const customer = new Customer();

customerRouter.get('/customers', customer.getCustomers)

export default customerRouter