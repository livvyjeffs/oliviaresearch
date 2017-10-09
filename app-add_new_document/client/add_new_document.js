Template.add_new_document.events({

    "click .btn-success": function (event, template) {

    // When the "add" button is clicked, a new document is added

    event.preventDefault();
    console.log('adding new document... (from Template.add_new_document.events)')

    Session.set("title", template.find(".title").value);
    Session.set("summary", template.find(".summary").value);
    Session.set("type", template.find(".type").value);
    Session.set("url", template.find(".url").value);
    Session.set("date_published", template.find(".date_published").value);
    Session.set("affiliation", template.find(".affiliation").value);
    Session.set("researchers", template.find(".researchers").value);

    ResearchDocs.insert({
        title: Session.get('title'),
        summary: Session.get('summary'),
        type: Session.get('type'),
        url: Session.get('url'),
        date_published: Session.get('date_published'),
        date_added: new Date(),
        affiliation: Session.get('affiliation'),
        researcher: Session.get('researchers')
    });

    template.find("input").value = "";

    Modal.hide('add_new_document');

        // Prevent default form submit
        return false;
    },
    "change select": function (event, template){
        var newValue = $(event.target).val();
        switch(newValue){
            case 'hotel':
            $(template.find(".cost")).show();
            $('.name').attr("placeholder","Hotel Name?");
            $('.cost').attr("placeholder","Cost per Night?");
            break;
            case 'personal':
            $('.name').attr("placeholder","What is this place?");
            $(template.find(".cost")).hide();
            $(template.find(".hours")).hide();
            $(template.find(".currency")).hide();
            break;
            case 'coffee_shop':
            $(template.find(".cost")).show();
            $('.name').attr("placeholder","Coffee Shop Name?");
            $('.cost').attr("placeholder","Cost per Medium Cappuccino?");
            break;
        }
        
    },
    "click #add_new_document": function(event){
        event.preventDefault();
        Modal.show('add_new_document');
    }

});


Template.add_new_document.helpers({

});