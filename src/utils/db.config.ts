const { Sequelize } = require("sequelize")

import configure from "../config"

const db_seq=new Sequelize({
    dialect:"postgres",
    host:configure.db.host,
    username:configure.db.username,
    password:configure.db.password,
    database:configure.db.dbName
})

export default db_seq