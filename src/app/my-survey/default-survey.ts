export const json = {
    pages: [{
        name: "PersonalDetails",
        elements: [{
            type: "text",
            name: "FirstName",
            title: "Enter your first name:"
        }, {
            type: "text",
            name: "LastName",
            title: "Enter your last name:"
        }, {
            type: "panel",
            name: "Contacts",
            title: "Contacts (optional)",
            elements: [{
                type: "text",
                name: "GitHub"
            }]
        }]
    }]
};
