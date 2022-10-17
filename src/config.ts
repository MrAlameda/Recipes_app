import * as  dotenv from "dotenv"
dotenv.config()

const configure={
    port:3001,
    nodeEnv:process.env.NODE_ENV,
    JWTsecret:process.env.JWTSECRET || "hols",
    db:{
        host:process.env.HOST,
        username:process.env.USER,
        password:process.env.PASSWORD,
        dbName:process.env.NAME
    }
}

export default configure