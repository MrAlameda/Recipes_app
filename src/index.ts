
import  express, { Request, Response }  from "express"
import config from "./config"

//* init
const app = express()
//! routes
import auth_routes  from "./auth/auth.routes";
import user_routes from "./users/user.routes"

//! middalwere
app.use(express.json())

//! database
import db_seq from "./utils/db.config";
import initModels from "./models/initModels";

db_seq.authenticate()
    .then(()=>{
        console.log('================//==================');
        console.log("database Aunthenticated")
        console.log('================//==================');
    })
    .catch((err:Error)=>console.error(err.message))

db_seq.sync()
    .then(()=>{
        console.log('================//==================');
        console.log("database Synced");
        console.log('================//==================');
    })
    .catch((err:Error)=>console.error(err.message))

initModels()

//! enruter
app.get("/",(req:Request,res:Response)=>{
    res.status(200).json({
        message:"hola",
        port:`${config.port}`
    })
})
// //* routes 
app.use("/users",user_routes)
app.use("/auth",auth_routes)

//* initServer 
app.listen(config.port,()=>{
    console.log('====================================');
    console.log(`server listener in port:${config.port}`);
    console.log('====================================');
})