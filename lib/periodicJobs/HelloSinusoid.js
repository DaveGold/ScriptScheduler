"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rp = require("request-promise-native");
class HelloSinusoid {
    constructor() {
        this.config = {
            interval: "*/10 * * * * *",
        };
    }
    run(job, done) {
        return __awaiter(this, void 0, void 0, function* () {
            const tag = "Sinusoid";
            let val = yield this.getPITagData(tag);
            console.log(`Tag ${tag} has at timestamp ${val.Timestamp} the following value: ${val.Value}`);
            done();
        });
    }
    getPITagData(tag) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = "webapiuser";
            const pass = "!try3.14webapi!";
            const searchResultTag = yield rp.get(`https://devdata.osisoft.com/piwebapi/search/query?q=${tag}`, { json: true }).auth(user, pass);
            const tagObject = yield rp.get(searchResultTag.Items[0].Links.Self, { json: true }).auth(user, pass);
            const tagValue = yield rp.get(tagObject.Links.Value, { json: true }).auth(user, pass);
            return tagValue;
        });
    }
}
exports.HelloSinusoid = HelloSinusoid;
//# sourceMappingURL=HelloSinusoid.js.map