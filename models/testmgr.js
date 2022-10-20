const dbgr = require("./dbmanager")
const db = dbgr.db;


exports.getNames() = () => {
    const sql = "Select * from test"
    let stmt = db.prepare(sql)
    let res = stmt.all();
    return res;
}