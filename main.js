import './main.css';
import "@progress/kendo-ui/js/kendo.dropdownlist.js";
import "@progress/kendo-ui/css/web/kendo.common.core.min.css";
import "@progress/kendo-ui/css/web/kendo.default.min.css";
import * as $ from "jquery"
import * as KendoTemplateCreator from "./src/templateCreators/KendoTemplateCreator";


$(document).ready(function () {
    KendoTemplateCreator.CreateContactsList();
});
