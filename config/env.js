import { config } from "dotenv";

config({path:`.env.${process.env.NODE_ENV || 'development'}.local`});

export const {
    PORT,
    NODE_ENV,
    DB_URI,
    JWT_SECRET,
    JWT_EPIRES_IN,
    ARCJET_ENV,
    ARCJET_KEY,
    QSTASH_CURRENT_SIGNING_KEY,
    QSTASH_URL,
    QSTASH_NEXT_SIGNING_KEY,
    QSTASH_TOKEN,
    SERVER_URL,

} = process.env;
