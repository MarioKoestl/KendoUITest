service = require("../service");

CreateContactsList = function() {
    var template = kendo.template($("#contact-template").html());
    var data = service.getUserData();
    var html = kendo.render(template, data);
    $("#users").html(html);
}

module.exports = {
    CreateContactsList: CreateContactsList
}