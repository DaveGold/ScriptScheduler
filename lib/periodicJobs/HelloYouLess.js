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
var rp = require('request-promise');
const piwebapi_1 = require("../apiclients/piwebapi");
let HelloYouLess = class HelloYouLess {
    constructor() {
        this.config = {
            interval: "*/15 * * * * *",
        };
    }
    run(job, done) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const youLessResponse = yield rp("http://172.16.70.13/a&f=j");
                const data = JSON.parse(youLessResponse);
                const ef = new piwebapi_1.EventFrame();
                ef.Name = "YouLessTest" + new Date().toISOString();
                ef.StartTime = new Date();
                ef.Description = `Youless power is ${data.pwr}`;
                this.service.createEventFrameForDatabase("\\\\PIAF01\\YouLess", ef);
                done();
            }
            catch (error) {
                console.error(error);
                done();
            }
        });
    }
};
__decorate([
    inversify_1.inject("IPIWebAPIService"),
    __metadata("design:type", Object)
], HelloYouLess.prototype, "service", void 0);
HelloYouLess = __decorate([
    inversify_1.injectable()
], HelloYouLess);
exports.HelloYouLess = HelloYouLess;
//# sourceMappingURL=HelloYouLess.js.map