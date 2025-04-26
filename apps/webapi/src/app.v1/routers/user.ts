import { Router } from 'express';
import { getUsers, createUser } from '../controllers';
const router = Router();

router.get('/', getUsers);
router.post('/', createUser);


export default router;
