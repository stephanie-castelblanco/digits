import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Contacts } from '../../api/contact/Contacts';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}

// Initialize the database with default contact data.
const addContact = (contact) => {
  console.log(`  Adding: ${contact.lastName} (${contact.owner})`);
  Contacts.collection.insert(contact);
};

// Initialize the Stuff collection if empty.
if (Contacts.collection.find().count() === 0) {
  if (Meteor.settings.defaultContacts) {
    console.log('Creating default contact data.');
    Meteor.settings.defaultContacts.forEach(contact => addContact(contact));
  }
}
