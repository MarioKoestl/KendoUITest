import Service from "../services/mockService";
import * as $ from "jquery"

export function CreateContactsList() {
    var template = kendo.template($("#contact-template").html());
    let service = new Service();
    var data = service.getUserData();

    var html = kendo.render(template, data);
    $("#users").html(html);
}