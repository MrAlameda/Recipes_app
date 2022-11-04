
import  express, { Request, Response }  from "express"
import config from "./config"

const cors =require("cors")

//* init
const app = express()

//! routes
import auth_routes  from "./auth/auth.routes";
import user_routes from "./users/user.routes"
import category_routes from "./categories/categories.routes"
import recipes_routes from "./recipes/recipes.routes"
import ingredients_router from "./ingredients/ingredients.routes"

//! middalwere
app.use(express.json())
app.use(cors())

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

app.use('/users', user_routes)
app.use('/auth', auth_routes)
app.use('/categories', category_routes)
app.use('/recipes', recipes_routes)
app.use('/ingredients', ingredients_router)


//* initServer 
app.listen(config.port,()=>{
    console.log('====================================');
    console.log(`server listener in port:${config.port}`);
    console.log('====================================');
})