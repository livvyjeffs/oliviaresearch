Template.body.events({
	"click #add_new_document": function(event){
		event.preventDefault();
		Modal.show('add_new_document');
	},
    "click #add_new_affiliation": function(event){
        event.preventDefault();
        Modal.show('add_new_affiliation');
    }
});