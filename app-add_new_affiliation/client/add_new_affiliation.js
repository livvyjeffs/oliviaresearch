Template.add_new_affiliation.events({

    "click .btn-success": function (event, template) {

    // When the "add" button is clicked, a new document is added

    event.preventDefault();
    console.log('adding new affiliation... (from Template.add_new_affiliation.events)')

    Session.set("affiliation_name", template.find(".name").value);
    Session.set("affiliation_parent", template.find(".parent_affiliation").value);
    
    AffiliationList.insert({
        name: Session.get('affiliation_name'),
        parent_affiliation: Session.get('affiliation_parent')
    });

    template.find("input").value = "";

    Modal.hide('add_new_affiliation');

        // Prevent default form submit
        return false;
    },

    "keyup .parent_affiliation": function(event, template) {
            // when a key is pressed, search affiliation and display options
            var val = template.find(".parent_affiliation").value;
            console.log(val);
            if(val === ''){
                Session.set('affiliation_queryCalled', false);    
            }else{
                Session.set('affiliation_queryCalled', true);  
            }
            Session.set('affiliation_query',val);
        }


    });


Template.add_new_affiliation.helpers({
    parent_affiliations() {
        var query = Session.get('affiliation_query');
        // { <field>: { $regex: /pattern/, $options: 'i' } }
        // where 'i' is case-insensitive
        return AffiliationList.find({ name: { $regex: query, $options: 'i' } });
        
    }, parent_affiliation_called(){
        if(Session.get('affiliation_queryCalled')){
            return true;
        }else{
            false;
        }
    }
});

Template.add_new_affiliation.onCreated(function() {
    Session.set('affiliation_queryCalled', false);  
    Session.set('affiliation_query','');
});