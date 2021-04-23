import {Document, Schema, model} from 'mongoose';

const schema = new Schema({
    uname: String,
    pswrd: String,
    email: String
});

interface IUser extends Document{
    uname: String;
    pswrd: String;
    email: String;
}

export default model<IUser>('User', schema);
