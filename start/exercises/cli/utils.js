const fs = require('fs')
const path = require('path')

// this path needs to be relative to work with fs
const contactsLocation = path.join(__dirname,'contacts.json')

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  const contacts = fs.readFileSync(contactsLocation).toString();

  //convert json to js
  return JSON.parse(contacts)
}

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  //convert contacts to json (null and 2 make it look nicer in JSON file)
  fs.writeFileSync(contactsLocation, JSON.stringify(contacts, null, 2))
  //save to conacts.
}

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
}

