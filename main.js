$ = require("jquery");
require("@progress/kendo-ui/js/kendo.dropdownlist.js");

require("@progress/kendo-ui/css/web/kendo.common.core.min.css");
require("@progress/kendo-ui/css/web/kendo.default.min.css");


service = require("./src/service");
$("#sel").kendoDropDownList(
    {
        dataTextField:"text",
        dataValueField:"value",
        dataSource: service.getColor(),
        index:0,
    }
);

