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
const piwebapi_1 = require("../clients/piwebapi");
let HelloSinusoid = class HelloSinusoid {
    constructor() {
        this.config = {
            interval: "*/15 * * * * *",
        };
    }
    run(job, done) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getPITagData("SINUSOID");
                console.log(result.Timestamp + " " + result.Value);
            }
            catch (error) {
                console.error(error);
            }
            done();
        });
    }
    getPITagData(tag) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = "webapiuser";
            const pass = "!try3.14webapi!";
            const baseUrl = "https://devdata.osisoft.com/piwebapi";
            const pointapi = new piwebapi_1.PointApi(user, pass, baseUrl);
            const pointResponse = yield pointapi.pointGetByPath(`\\\\PISRV1\\${tag}`);
            const streamapi = new piwebapi_1.StreamApi(user, pass, baseUrl);
            const valueResponse = yield streamapi.streamGetValue(pointResponse.body.WebId);
            const value = valueResponse.body;
            return value;
        });
    }
};
HelloSinusoid = __decorate([
    inversify_1.injectable()
], HelloSinusoid);
exports.HelloSinusoid = HelloSinusoid;
//# sourceMappingURL=HelloSinusoid.js.map