data = require("./mockData");

getUserData = function () {
    return data.UserData;
}

module.exports = {
    getUserData: getUserData
};