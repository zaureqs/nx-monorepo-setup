import { Request, Response } from 'express';
import prisma from '../../_utils/db.config';


const getUsers = async (_req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.send(users);
}

const createUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })
        res.send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export { getUsers, createUser };