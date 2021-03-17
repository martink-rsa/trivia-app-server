import * as mongoose from 'mongoose';
export interface IUser extends mongoose.Document {
    username: string;
    iconId: number;
    color: string;
    socketId: string;
}
declare const User: mongoose.Model<IUser>;
export default User;