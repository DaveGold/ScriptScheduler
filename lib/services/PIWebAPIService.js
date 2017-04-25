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
const piwebapi_config_1 = require("../configs/piwebapi_config");
let PIWebAPIService = class PIWebAPIService {
    constructor() {
        this.setBasePath(piwebapi_config_1.config.basePath);
        this.setBasicAuth(piwebapi_config_1.config.username, piwebapi_config_1.config.password);
        this.initAPI();
    }
    setBasicAuth(user, password) {
        this.user = user;
        this.password = password;
    }
    setBasePath(basePath) {
        this.basePath = basePath;
    }
    getPIPointDataByPath(fullPath, time = "*") {
        return __awaiter(this, void 0, void 0, function* () {
            const pointResponse = yield this.pointAPI.pointGetByPath(fullPath);
            const valueResponse = yield this.streamAPI.streamGetValue(pointResponse.body.WebId, undefined, undefined, time, undefined);
            return valueResponse.body;
        });
    }
    getElementByPath(fullPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const elementResponse = yield this.elementAPI.elementGetByPath(fullPath);
            return elementResponse.body;
        });
    }
    getEventFramesFromElement(elementWebId) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventFrameResponse = yield this.elementAPI.elementGetEventFrames(elementWebId);
            return eventFrameResponse.body;
        });
    }
    getEventFramesFromDatabase(databasePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const databaseResponse = yield this.assetDatabaseAPI.assetDatabaseGetByPath(databasePath);
            const eventFrameResponse = yield this.assetDatabaseAPI.assetDatabaseGetEventFrames(databaseResponse.body.WebId);
            return eventFrameResponse.body;
        });
    }
    createEventFrameForDatabase(databasePath, eventFrame) {
        return __awaiter(this, void 0, void 0, function* () {
            const databaseResponse = yield this.assetDatabaseAPI.assetDatabaseGetByPath(databasePath);
            const eventframeCreateResponse = yield this.assetDatabaseAPI.assetDatabaseCreateEventFrame(databaseResponse.body.WebId, eventFrame);
        });
    }
    updateEventFrame(webId, eventFrame) {
        return __awaiter(this, void 0, void 0, function* () {
            const test = yield this.eventFrameAPI.eventFrameUpdate(webId, eventFrame);
        });
    }
    initAPI() {
        if (this.user && this.password) {
            if (this.basePath) {
                this.pointAPI = new piwebapi_1.PointApi(this.user, this.password, this.basePath);
                this.streamAPI = new piwebapi_1.StreamApi(this.user, this.password, this.basePath);
                this.elementAPI = new piwebapi_1.ElementApi(this.user, this.password, this.basePath);
                this.eventFrameAPI = new piwebapi_1.EventFrameApi(this.user, this.password, this.basePath);
                this.assetDatabaseAPI = new piwebapi_1.AssetDatabaseApi(this.user, this.password, this.basePath);
            }
            else {
                this.pointAPI = new piwebapi_1.PointApi(this.user, this.password);
                this.streamAPI = new piwebapi_1.StreamApi(this.user, this.password);
                this.elementAPI = new piwebapi_1.ElementApi(this.user, this.password);
                this.eventFrameAPI = new piwebapi_1.EventFrameApi(this.user, this.password);
                this.assetDatabaseAPI = new piwebapi_1.AssetDatabaseApi(this.user, this.password);
            }
        }
        else {
            if (this.basePath) {
                this.pointAPI = new piwebapi_1.PointApi(this.basePath);
                this.streamAPI = new piwebapi_1.StreamApi(this.basePath);
                this.elementAPI = new piwebapi_1.ElementApi(this.basePath);
                this.eventFrameAPI = new piwebapi_1.EventFrameApi(this.basePath);
                this.assetDatabaseAPI = new piwebapi_1.AssetDatabaseApi(this.basePath);
            }
            else {
                this.pointAPI = new piwebapi_1.PointApi();
                this.streamAPI = new piwebapi_1.StreamApi();
                this.elementAPI = new piwebapi_1.ElementApi();
                this.eventFrameAPI = new piwebapi_1.EventFrameApi();
                this.assetDatabaseAPI = new piwebapi_1.AssetDatabaseApi();
            }
        }
    }
};
PIWebAPIService = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], PIWebAPIService);
exports.PIWebAPIService = PIWebAPIService;
//# sourceMappingURL=PIWebAPIService.js.map