// lib/                    # <- any common code for client/server. 
// lib/environment.js      # <- general configuration

// console.log('Tuesday May 12');

console.log('**file: lib/environment.js loaded');

ResearchDocs = new Mongo.Collection("rdocs");

AffiliationList = new Mongo.Collection("affiliations");

// ResearchDocs.helpers({
// 	researchers() {
// 		return ResearchDocs.findOne(this.researchers);
// 	}
// });

Router.route('/', function () {

// no function

});


