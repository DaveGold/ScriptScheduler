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
const rp = require("request-promise-native");
let HelloSinusoid = class HelloSinusoid {
    constructor() {
        this.config = {
            interval: "*/10 * * * * *",
        };
    }
    run(job, done) {
        return __awaiter(this, void 0, void 0, function* () {
            const tag = "SINUSOID";
            const value = yield this.getPITagData(tag);
            console.log(`Tag ${tag} has at timestamp ${value.Timestamp} the following value: ${value.Value}`);
            done();
        });
    }
    getPITagData(tag) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = "webapiuser";
            const pass = "!try3.14webapi!";
            const url = `https://devdata.osisoft.com/piwebapi/search/query?q=${tag}`;
            const searchResultTag = yield rp.get(url, { json: true }).auth(user, pass);
            const tagObject = yield rp.get(searchResultTag.Items[0].Links.Self, { json: true }).auth(user, pass);
            const tagValue = yield rp.get(tagObject.Links.Value, { json: true }).auth(user, pass);
            return tagValue;
        });
    }
};
HelloSinusoid = __decorate([
    inversify_1.injectable()
], HelloSinusoid);
exports.HelloSinusoid = HelloSinusoid;
//# sourceMappingURL=HelloSinusoid.js.map