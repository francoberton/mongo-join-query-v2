const customFind = require("./lib/customFind");

/*
Options structure:
{
   find: {}, // search object
   sort, // sort object
   skip = 0, // int
   limit = 50, // int
   select,
   populate: [] // array of string ["contact.created_by", ...],
   unsetPopulatedFields = false // if true returns object depopulated,
   debug: false
}
 */
module.exports = (Model, Models, options, callback) =>
    customFind(Model, Models, options).fork(err => callback(err), result => callback(null, result));
