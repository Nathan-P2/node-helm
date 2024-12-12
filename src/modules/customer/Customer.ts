import { Request, Response } from "express";

class Customer {
  async getCustomers(req: Request, res: Response): Promise<void> {
    const customers = [
      {
        id: 1,
        name: 'Nathan',
        email: 'nathan@gmail.com',
      },
      {
        id: 2,
        name: 'Gabriel',
        email: 'gabriel@gmail.com',
      }
    ]

    res.status(200).json(customers)
  }
}

export default Customer;