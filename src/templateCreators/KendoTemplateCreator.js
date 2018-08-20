import * as Service from "../services/mockService";
import * as $ from "jquery"

export function CreateContactsList() {
    var template = kendo.template($("#contact-template").html());
    var data = Service.getUserData();

    var html = kendo.render(template, data);
    $("#users").html(html);
}