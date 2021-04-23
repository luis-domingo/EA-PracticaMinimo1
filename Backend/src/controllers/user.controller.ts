import User from '../models/User';
import {Request, Response} from 'express'; 

export async function register(req: Request, res: Response){
    const {uname, pswrd, email} = req.body;

    console.log("new user creation petition for user ", uname);
    console.log("searching...");
    
    //comprobar que el usuario exista
    const usr_compare = await User.findOne({'uname': uname});


    //si no existe

    if(!usr_compare){
        const new_user = new User({
            uname: uname,
            pswrd: pswrd,
            email: email
        });
    
        await new_user.save();
        res.status(201);
        return res.json(new_user.toJSON());

    }else{
        return res.status(400);
    }

}