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
let HelloSinusoid = class HelloSinusoid {
    getChannel() {
        return __awaiter(this, void 0, void 0, function* () {
            let p = new Promise((resolve) => {
                resolve("wss://server2012r2dg.dev.magion.loc/piwebapi/streams/P0j0AfYqUlKkmLcdB1BPOH5QAQAAAAUElcU0lOVVNPSUQ/channel");
            });
            return p;
        });
    }
    run(job, done) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("hello from triggered helloSinusoid", job.attrs.data);
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