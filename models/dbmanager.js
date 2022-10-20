const sqlite = require('better-sqlite3')
const db = new sqlite('../db.db')
exports.db = db;