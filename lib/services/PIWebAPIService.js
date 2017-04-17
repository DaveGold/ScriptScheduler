"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    setBasicAuth(user, password) {
        this._user = user;
        this._password = password;
    }
    ;
    setBasePath(basePath) {
        this._basePath = basePath;
    }
    ;
    initAPI() {
        if (this._pointAPI && this._streamAPI && this._elementAPI && this._eventFrameAPI) {
        }
        else {
            if (this._user && this._password) {
                if (this._basePath) {
                    this._pointAPI = new piwebapi_1.PointApi(this._user, this._password, this._basePath);
                    this._streamAPI = new piwebapi_1.StreamApi(this._user, this._password, this._basePath);
                    this._elementAPI = new piwebapi_1.ElementApi(this._user, this._password, this._basePath);
                    this._eventFrameAPI = new piwebapi_1.EventFrameApi(this._user, this._password, this._basePath);
                }
                else {
                    this._pointAPI = new piwebapi_1.PointApi(this._user, this._password);
                    this._streamAPI = new piwebapi_1.StreamApi(this._user, this._password);
                    this._elementAPI = new piwebapi_1.ElementApi(this._user, this._password);
                    this._eventFrameAPI = new piwebapi_1.EventFrameApi(this._user, this._password);
                }
            }
            else {
                if (this._basePath) {
                    this._pointAPI = new piwebapi_1.PointApi(this._basePath);
                    this._streamAPI = new piwebapi_1.StreamApi(this._basePath);
                    this._elementAPI = new piwebapi_1.ElementApi(this._basePath);
                    this._eventFrameAPI = new piwebapi_1.EventFrameApi(this._basePath);
                }
                else {
                    this._pointAPI = new piwebapi_1.PointApi();
                    this._streamAPI = new piwebapi_1.StreamApi();
                    this._elementAPI = new piwebapi_1.ElementApi();
                    this._eventFrameAPI = new piwebapi_1.EventFrameApi();
                }
            }
        }
    }
    getPointDataByPath(fullPath) {
        return __awaiter(this, void 0, void 0, function* () {
            this.initAPI();
            const pointResponse = yield this._pointAPI.pointGetByPath(fullPath);
            const valueResponse = yield this._streamAPI.streamGetValue(pointResponse.body.WebId);
            return valueResponse.body;
        });
    }
    getElementByPath(fullPath) {
        return __awaiter(this, void 0, void 0, function* () {
            this.initAPI();
            const elementResponse = yield this._elementAPI.elementGetByPath(fullPath);
            return elementResponse.body;
        });
    }
    getEventFrameForElement(webId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.initAPI();
            const eventFrameResponse = yield this._elementAPI.elementGetEventFrames(webId);
            return eventFrameResponse.body;
        });
    }
};
PIWebAPIService = __decorate([
    inversify_1.injectable()
], PIWebAPIService);
exports.PIWebAPIService = PIWebAPIService;
//# sourceMappingURL=PIWebAPIService.js.map