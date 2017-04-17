"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
require("reflect-metadata");
const piwebapi_1 = require("../apiclients/piwebapi");
let PIWebAPIService = class PIWebAPIService {
    constructor() {
    }
    setBasicAuth(user, password) {
        this._user = user;
        this._password = password;
    }
    ;
    setBasePath(basePath) {
        this._basePath = basePath;
    }
    ;
    getPIPointData(serverName, pointName) {
        return __awaiter(this, void 0, void 0, function* () {
            let pointapi;
            if (this._user && this._password) {
                if (this._basePath) {
                    pointapi = new piwebapi_1.PointApi(this._user, this._password, this._basePath);
                }
                else {
                    pointapi = new piwebapi_1.PointApi(this._user, this._password);
                }
            }
            else {
                if (this._basePath) {
                    pointapi = new piwebapi_1.PointApi(this._basePath);
                }
                else {
                    pointapi = new piwebapi_1.PointApi();
                }
            }
            const pointResponse = yield pointapi.pointGetByPath(`\\\\${serverName}\\${pointName}`);
            let streamapi;
            if (this._user && this._password) {
                if (this._basePath) {
                    streamapi = new piwebapi_1.StreamApi(this._user, this._password, this._basePath);
                }
                else {
                    streamapi = new piwebapi_1.StreamApi(this._user, this._password);
                }
            }
            else {
                if (this._basePath) {
                    streamapi = new piwebapi_1.StreamApi(this._basePath);
                }
                else {
                    streamapi = new piwebapi_1.StreamApi();
                }
            }
            const valueResponse = yield streamapi.streamGetValue(pointResponse.body.WebId);
            return valueResponse.body;
            ;
        });
    }
};
PIWebAPIService = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], PIWebAPIService);
exports.PIWebAPIService = PIWebAPIService;
//# sourceMappingURL=PIWebAPIService.js.map