var apiwrapper = /** @class */ (function () {
    function apiwrapper(http) {
        this.http = http;
        this.rootUrl = "http://localhost:8000/";
        this.createUserUrl = "http://localhost:8000/user";
    }
    apiwrapper.prototype.createUser = function (data) {
        return this.http.post(this.createUserUrl, data);
    };
    return apiwrapper;
}());
export { apiwrapper };
//# sourceMappingURL=apiwrapper.js.map