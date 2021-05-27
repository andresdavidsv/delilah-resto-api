const db = {};

function list(table) {
  return db[tabla];
}
function get(table, id) {
  let collection = list(table);
  return collection.find((item) => item.id == id) || null;
}
function upsert(table, data) {
  db[collection].push(data);
}
function remove(table, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
