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
const piwebapi_config_1 = require("../configs/piwebapi_config");
const fs = require("mz/fs");
const csv = require("csv.js");
let HelloSinusoid = class HelloSinusoid {
    constructor() {
        this.webSocketOptions = {
            rejectUnauthorized: false,
            headers: {
                "Authorization": 'Basic ' + new Buffer(piwebapi_config_1.config.username + ':' + piwebapi_config_1.config.password).toString('base64')
            }
        };
    }
    getChannelURL() {
        return this.service.getPIPointChannelUrlByPath("\\\\PI2016\\SINUSOID", false);
    }
    run(job, done) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newLine = "\r\n";
                const dateString = `${new Date().getDate()}_${new Date().getMonth()}_${new Date().getFullYear()}`;
                const file = `output/helloSinusoid_${dateString}.csv`;
                let channelData = JSON.parse(job.attrs.data);
                let values = channelData.Items[0].Items;
                if (yield fs.exists(file)) {
                    const encoded = csv.encode(values, ",", false) + newLine;
                    yield fs.appendFile(file, encoded);
                }
                else {
                    const encoded = csv.encode(values, ",", true) + newLine;
                    yield fs.writeFile(file, encoded);
                }
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
], HelloSinusoid.prototype, "service", void 0);
HelloSinusoid = __decorate([
    inversify_1.injectable()
], HelloSinusoid);
exports.HelloSinusoid = HelloSinusoid;
//# sourceMappingURL=HelloSinusoid.js.map