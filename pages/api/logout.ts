import { NextApiRequest, NextApiResponse } from "next";
import { parse, serialize } from "cookie";
import { config } from "./oauth";
import { deleteUser } from "../../db/db";

// Get our environment variables
const { cookieName } = config;

export default async function handleRequest(_: NextApiRequest, res: NextApiResponse) {
    if (_.headers.cookie == undefined) return res.status(400).end();
    // remove cookie from request header
    res.setHeader("Set-Cookie", [
        serialize(cookieName, "", {
            maxAge: -1,
            path: "/",
        }),
    ]);

    const token = parse(_.headers.cookie)[config.cookieName];
    await deleteUser({
        jwt_token: token
    });

    res.writeHead(302, { Location: "/" });
    res.end();
};