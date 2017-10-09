console.log('**file: server/lib/publications.js loaded');

//TODO - eventually will want to publish certain data for visitors
//and different data for paid subscription

//right now this is publishing all data from the ResearchDocs
//when you are ready...
//https://www.discovermeteor.com/blog/understanding-meteor-publications-and-subscriptions/

Meteor.publish('rdocs',function(){
	return ResearchDocs.find();
});
