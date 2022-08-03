import mongoose, { model, Schema } from "mongoose";

const baseSchema = new Schema({
    access_token: String,
    token_type: String,
    jwt_token: String
});

let savedModel;

if(mongoose.models.cookies_){
    savedModel = model(`cookies_`);
} else {
    savedModel = model(`cookies_`, baseSchema);
}

export const User = savedModel;

export interface UserOptions {
    access_token?: string;
    token_type?: string;
    jwt_token?: string;
}