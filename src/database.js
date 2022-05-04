const sqlitedb = require("better-sqlite3");

function runQuery(filePath, query) {
  let db = new sqlitedb(filePath, sqlitedb.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    verbose: console.log;
  });
  db.exec(query);
}

function createTestTable() {
  const createTable =
    "CREATE TABLE IF NOT EXISTS test('name' VARCHAR, 'description' TEXT);";

  const test = "./database/test.sqlite3";
  runQuery(test, createTable);
}

function addRowToDatabase(columns) {
  const insertQuery =
    `INSERT INTO test (name, description) VALUES('${columns.name}', '${columns.description}');`;
  const test = "./database/test.sqlite3";
  runQuery(test, insertQuery);
}

module.exports = {
  createTestTable,
  addRowToDatabase,
};
