Template.research_documents.helpers({
	research_document() {
        // return ResearchDocs.find({
        // }, {sort: {date_added: -1}});

        return ResearchDocs.find();
    },
});

Template.research_documents.events({
	'click th': function(event){
		event.preventDefault();

	}
});