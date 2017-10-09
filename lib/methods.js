  Meteor.methods({
  	'createNewResearchDoc': function(){
      console.log('creating new ResearchDoc from Meteor.methods');
  		ResearchDocs.insert({
        title: Session.get('title'),
  			summary: Session.get('summary'),
        type: Session.get('type'),
        url: Session.get('url'),
        date_published: Session.get('date'),
  			date_added: new Date(),
  			affiliation: Session.get('affiliation'),
  			researcher: Session.get('researcher')
  		});
  	}
  });
