"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const localVarPath = this.basePath;
let queryParameters = {};
let headerParams = Object.assign({}, this.defaultHeaders);
let requestOptions = {
    method: 'GET',
    qs: queryParameters,
    headers: headerParams,
    uri: "https://coresight.dev.magion.loc/piwebapi",
    json: true,
    strictSSL: false
};
request(requestOptions, function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response);
    console.log('body:', body);
}).auth("TestPIWebAPI", "test");
//# sourceMappingURL=HelloTest.js.map