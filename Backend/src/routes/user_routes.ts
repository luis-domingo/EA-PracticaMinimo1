import {Router} from 'express';
import {register} from '../controllers/user.controller';

const user_router = Router();

user_router.route('/users/register') //API Endpoint for Registering a user
    .post(register) // CREATE the user JSON object

export default user_router;