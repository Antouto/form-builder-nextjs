//@ts-nocheck
import { User, UserOptions } from "./entities/user";
import { connect } from "mongoose";

connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true });

export async function createUser(options: UserOptions) {
    const res = await new User(options).save().catch(console.log);
    return res;
}

export async function deleteUser(options: UserOptions) {
    const res = await User.findOneAndDelete(options);
    return res;
}

export async function getUser(options: UserOptions) {
    const res = await User.findOne(options);
    return res;
}