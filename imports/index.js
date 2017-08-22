import initCollections from './api/collections'

//Any thing that needs to occur as part of Meteor startup.
//Meteor startup occurs after DOM has been generated
initCollections();

Meteor.startup(function() {
});
