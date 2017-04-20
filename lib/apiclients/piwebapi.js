"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
let defaultBasePath = 'https://devdata.osisoft.com/piwebapi/';
class Analysis {
}
exports.Analysis = Analysis;
class AnalysisCategory {
}
exports.AnalysisCategory = AnalysisCategory;
class AnalysisCategoryLinks {
}
exports.AnalysisCategoryLinks = AnalysisCategoryLinks;
class AnalysisLinks {
}
exports.AnalysisLinks = AnalysisLinks;
class AnalysisRule {
}
exports.AnalysisRule = AnalysisRule;
class AnalysisRuleLinks {
}
exports.AnalysisRuleLinks = AnalysisRuleLinks;
class AnalysisRulePlugIn {
}
exports.AnalysisRulePlugIn = AnalysisRulePlugIn;
class AnalysisRulePlugInLinks {
}
exports.AnalysisRulePlugInLinks = AnalysisRulePlugInLinks;
class AnalysisTemplate {
}
exports.AnalysisTemplate = AnalysisTemplate;
class AnalysisTemplateLinks {
}
exports.AnalysisTemplateLinks = AnalysisTemplateLinks;
class Annotation {
}
exports.Annotation = Annotation;
class AnnotationLinks {
}
exports.AnnotationLinks = AnnotationLinks;
class AssetDatabase {
}
exports.AssetDatabase = AssetDatabase;
class AssetDatabaseLinks {
}
exports.AssetDatabaseLinks = AssetDatabaseLinks;
class AssetServer {
}
exports.AssetServer = AssetServer;
class AssetServerLinks {
}
exports.AssetServerLinks = AssetServerLinks;
class Attribute {
}
exports.Attribute = Attribute;
class AttributeCategory {
}
exports.AttributeCategory = AttributeCategory;
class AttributeCategoryLinks {
}
exports.AttributeCategoryLinks = AttributeCategoryLinks;
class AttributeLinks {
}
exports.AttributeLinks = AttributeLinks;
class AttributeTemplate {
}
exports.AttributeTemplate = AttributeTemplate;
class AttributeTemplateLinks {
}
exports.AttributeTemplateLinks = AttributeTemplateLinks;
class AttributeTrait {
}
exports.AttributeTrait = AttributeTrait;
class AttributeTraitLinks {
}
exports.AttributeTraitLinks = AttributeTraitLinks;
class CacheInstance {
}
exports.CacheInstance = CacheInstance;
class DataServer {
}
exports.DataServer = DataServer;
class DataServerLinks {
}
exports.DataServerLinks = DataServerLinks;
class Element {
}
exports.Element = Element;
class ElementCategory {
}
exports.ElementCategory = ElementCategory;
class ElementCategoryLinks {
}
exports.ElementCategoryLinks = ElementCategoryLinks;
class ElementLinks {
}
exports.ElementLinks = ElementLinks;
class ElementTemplate {
}
exports.ElementTemplate = ElementTemplate;
class ElementTemplateLinks {
}
exports.ElementTemplateLinks = ElementTemplateLinks;
class EnumerationSet {
}
exports.EnumerationSet = EnumerationSet;
class EnumerationSetLinks {
}
exports.EnumerationSetLinks = EnumerationSetLinks;
class EnumerationValue {
}
exports.EnumerationValue = EnumerationValue;
class EnumerationValueLinks {
}
exports.EnumerationValueLinks = EnumerationValueLinks;
class Errors {
}
exports.Errors = Errors;
class EventFrame {
}
exports.EventFrame = EventFrame;
class EventFrameLinks {
}
exports.EventFrameLinks = EventFrameLinks;
class ItemAttribute {
}
exports.ItemAttribute = ItemAttribute;
class ItemElement {
}
exports.ItemElement = ItemElement;
class ItemEventFrame {
}
exports.ItemEventFrame = ItemEventFrame;
class ItemPoint {
}
exports.ItemPoint = ItemPoint;
class ItemsAnalysis {
}
exports.ItemsAnalysis = ItemsAnalysis;
class ItemsAnalysisCategory {
}
exports.ItemsAnalysisCategory = ItemsAnalysisCategory;
class ItemsAnalysisLinks {
}
exports.ItemsAnalysisLinks = ItemsAnalysisLinks;
class ItemsAnalysisRule {
}
exports.ItemsAnalysisRule = ItemsAnalysisRule;
class ItemsAnalysisRulePlugIn {
}
exports.ItemsAnalysisRulePlugIn = ItemsAnalysisRulePlugIn;
class ItemsAnalysisTemplate {
}
exports.ItemsAnalysisTemplate = ItemsAnalysisTemplate;
class ItemsAnnotation {
}
exports.ItemsAnnotation = ItemsAnnotation;
class ItemsAssetDatabase {
}
exports.ItemsAssetDatabase = ItemsAssetDatabase;
class ItemsAssetServer {
}
exports.ItemsAssetServer = ItemsAssetServer;
class ItemsAttribute {
}
exports.ItemsAttribute = ItemsAttribute;
class ItemsAttributeCategory {
}
exports.ItemsAttributeCategory = ItemsAttributeCategory;
class ItemsAttributeTemplate {
}
exports.ItemsAttributeTemplate = ItemsAttributeTemplate;
class ItemsAttributeTrait {
}
exports.ItemsAttributeTrait = ItemsAttributeTrait;
class ItemsCacheInstance {
}
exports.ItemsCacheInstance = ItemsCacheInstance;
class ItemsDataServer {
}
exports.ItemsDataServer = ItemsDataServer;
class ItemsElement {
}
exports.ItemsElement = ItemsElement;
class ItemsElementCategory {
}
exports.ItemsElementCategory = ItemsElementCategory;
class ItemsElementTemplate {
}
exports.ItemsElementTemplate = ItemsElementTemplate;
class ItemsEnumerationSet {
}
exports.ItemsEnumerationSet = ItemsEnumerationSet;
class ItemsEnumerationValue {
}
exports.ItemsEnumerationValue = ItemsEnumerationValue;
class ItemsEventFrame {
}
exports.ItemsEventFrame = ItemsEventFrame;
class ItemsItemAttribute {
}
exports.ItemsItemAttribute = ItemsItemAttribute;
class ItemsItemElement {
}
exports.ItemsItemElement = ItemsItemElement;
class ItemsItemEventFrame {
}
exports.ItemsItemEventFrame = ItemsItemEventFrame;
class ItemsItemPoint {
}
exports.ItemsItemPoint = ItemsItemPoint;
class ItemsItemsSubstatus {
}
exports.ItemsItemsSubstatus = ItemsItemsSubstatus;
class ItemsPoint {
}
exports.ItemsPoint = ItemsPoint;
class ItemsPointAttribute {
}
exports.ItemsPointAttribute = ItemsPointAttribute;
class ItemsSecurityEntry {
}
exports.ItemsSecurityEntry = ItemsSecurityEntry;
class ItemsSecurityIdentity {
}
exports.ItemsSecurityIdentity = ItemsSecurityIdentity;
class ItemsSecurityMapping {
}
exports.ItemsSecurityMapping = ItemsSecurityMapping;
class ItemsSecurityRights {
}
exports.ItemsSecurityRights = ItemsSecurityRights;
class ItemsStreamSummaries {
}
exports.ItemsStreamSummaries = ItemsStreamSummaries;
class ItemsStreamValue {
}
exports.ItemsStreamValue = ItemsStreamValue;
class ItemsStreamValues {
}
exports.ItemsStreamValues = ItemsStreamValues;
class ItemsSubstatus {
}
exports.ItemsSubstatus = ItemsSubstatus;
class ItemsSummaryValue {
}
exports.ItemsSummaryValue = ItemsSummaryValue;
class ItemsTable {
}
exports.ItemsTable = ItemsTable;
class ItemsTableCategory {
}
exports.ItemsTableCategory = ItemsTableCategory;
class ItemsTimeRulePlugIn {
}
exports.ItemsTimeRulePlugIn = ItemsTimeRulePlugIn;
class ItemsUnitClass {
}
exports.ItemsUnitClass = ItemsUnitClass;
class Landing {
}
exports.Landing = Landing;
class LandingLinks {
}
exports.LandingLinks = LandingLinks;
class Point {
}
exports.Point = Point;
class PointAttribute {
}
exports.PointAttribute = PointAttribute;
class PointAttributeLinks {
}
exports.PointAttributeLinks = PointAttributeLinks;
class PointLinks {
}
exports.PointLinks = PointLinks;
class Request {
}
exports.Request = Request;
class RequestTemplate {
}
exports.RequestTemplate = RequestTemplate;
class Response {
}
exports.Response = Response;
(function (Response) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["NUMBER_100"] = 100] = "NUMBER_100";
        StatusEnum[StatusEnum["NUMBER_101"] = 101] = "NUMBER_101";
        StatusEnum[StatusEnum["NUMBER_200"] = 200] = "NUMBER_200";
        StatusEnum[StatusEnum["NUMBER_201"] = 201] = "NUMBER_201";
        StatusEnum[StatusEnum["NUMBER_202"] = 202] = "NUMBER_202";
        StatusEnum[StatusEnum["NUMBER_203"] = 203] = "NUMBER_203";
        StatusEnum[StatusEnum["NUMBER_204"] = 204] = "NUMBER_204";
        StatusEnum[StatusEnum["NUMBER_205"] = 205] = "NUMBER_205";
        StatusEnum[StatusEnum["NUMBER_206"] = 206] = "NUMBER_206";
        StatusEnum[StatusEnum["NUMBER_300"] = 300] = "NUMBER_300";
        StatusEnum[StatusEnum["NUMBER_301"] = 301] = "NUMBER_301";
        StatusEnum[StatusEnum["NUMBER_302"] = 302] = "NUMBER_302";
        StatusEnum[StatusEnum["NUMBER_303"] = 303] = "NUMBER_303";
        StatusEnum[StatusEnum["NUMBER_304"] = 304] = "NUMBER_304";
        StatusEnum[StatusEnum["NUMBER_305"] = 305] = "NUMBER_305";
        StatusEnum[StatusEnum["NUMBER_306"] = 306] = "NUMBER_306";
        StatusEnum[StatusEnum["NUMBER_307"] = 307] = "NUMBER_307";
        StatusEnum[StatusEnum["NUMBER_400"] = 400] = "NUMBER_400";
        StatusEnum[StatusEnum["NUMBER_401"] = 401] = "NUMBER_401";
        StatusEnum[StatusEnum["NUMBER_402"] = 402] = "NUMBER_402";
        StatusEnum[StatusEnum["NUMBER_403"] = 403] = "NUMBER_403";
        StatusEnum[StatusEnum["NUMBER_404"] = 404] = "NUMBER_404";
        StatusEnum[StatusEnum["NUMBER_405"] = 405] = "NUMBER_405";
        StatusEnum[StatusEnum["NUMBER_406"] = 406] = "NUMBER_406";
        StatusEnum[StatusEnum["NUMBER_407"] = 407] = "NUMBER_407";
        StatusEnum[StatusEnum["NUMBER_408"] = 408] = "NUMBER_408";
        StatusEnum[StatusEnum["NUMBER_409"] = 409] = "NUMBER_409";
        StatusEnum[StatusEnum["NUMBER_410"] = 410] = "NUMBER_410";
        StatusEnum[StatusEnum["NUMBER_411"] = 411] = "NUMBER_411";
        StatusEnum[StatusEnum["NUMBER_412"] = 412] = "NUMBER_412";
        StatusEnum[StatusEnum["NUMBER_413"] = 413] = "NUMBER_413";
        StatusEnum[StatusEnum["NUMBER_414"] = 414] = "NUMBER_414";
        StatusEnum[StatusEnum["NUMBER_415"] = 415] = "NUMBER_415";
        StatusEnum[StatusEnum["NUMBER_416"] = 416] = "NUMBER_416";
        StatusEnum[StatusEnum["NUMBER_417"] = 417] = "NUMBER_417";
        StatusEnum[StatusEnum["NUMBER_426"] = 426] = "NUMBER_426";
        StatusEnum[StatusEnum["NUMBER_500"] = 500] = "NUMBER_500";
        StatusEnum[StatusEnum["NUMBER_501"] = 501] = "NUMBER_501";
        StatusEnum[StatusEnum["NUMBER_502"] = 502] = "NUMBER_502";
        StatusEnum[StatusEnum["NUMBER_503"] = 503] = "NUMBER_503";
        StatusEnum[StatusEnum["NUMBER_504"] = 504] = "NUMBER_504";
        StatusEnum[StatusEnum["NUMBER_505"] = 505] = "NUMBER_505";
    })(StatusEnum = Response.StatusEnum || (Response.StatusEnum = {}));
})(Response = exports.Response || (exports.Response = {}));
class Security {
}
exports.Security = Security;
class SecurityEntry {
}
exports.SecurityEntry = SecurityEntry;
class SecurityEntryLinks {
}
exports.SecurityEntryLinks = SecurityEntryLinks;
class SecurityIdentity {
}
exports.SecurityIdentity = SecurityIdentity;
class SecurityIdentityLinks {
}
exports.SecurityIdentityLinks = SecurityIdentityLinks;
class SecurityMapping {
}
exports.SecurityMapping = SecurityMapping;
class SecurityMappingLinks {
}
exports.SecurityMappingLinks = SecurityMappingLinks;
class SecurityRights {
}
exports.SecurityRights = SecurityRights;
class StreamSummaries {
}
exports.StreamSummaries = StreamSummaries;
class StreamSummariesLinks {
}
exports.StreamSummariesLinks = StreamSummariesLinks;
class StreamValue {
}
exports.StreamValue = StreamValue;
class StreamValues {
}
exports.StreamValues = StreamValues;
class Substatus {
}
exports.Substatus = Substatus;
(function (Substatus) {
    var SubstatusEnum;
    (function (SubstatusEnum) {
        SubstatusEnum[SubstatusEnum["NUMBER_100"] = 100] = "NUMBER_100";
        SubstatusEnum[SubstatusEnum["NUMBER_101"] = 101] = "NUMBER_101";
        SubstatusEnum[SubstatusEnum["NUMBER_200"] = 200] = "NUMBER_200";
        SubstatusEnum[SubstatusEnum["NUMBER_201"] = 201] = "NUMBER_201";
        SubstatusEnum[SubstatusEnum["NUMBER_202"] = 202] = "NUMBER_202";
        SubstatusEnum[SubstatusEnum["NUMBER_203"] = 203] = "NUMBER_203";
        SubstatusEnum[SubstatusEnum["NUMBER_204"] = 204] = "NUMBER_204";
        SubstatusEnum[SubstatusEnum["NUMBER_205"] = 205] = "NUMBER_205";
        SubstatusEnum[SubstatusEnum["NUMBER_206"] = 206] = "NUMBER_206";
        SubstatusEnum[SubstatusEnum["NUMBER_300"] = 300] = "NUMBER_300";
        SubstatusEnum[SubstatusEnum["NUMBER_301"] = 301] = "NUMBER_301";
        SubstatusEnum[SubstatusEnum["NUMBER_302"] = 302] = "NUMBER_302";
        SubstatusEnum[SubstatusEnum["NUMBER_303"] = 303] = "NUMBER_303";
        SubstatusEnum[SubstatusEnum["NUMBER_304"] = 304] = "NUMBER_304";
        SubstatusEnum[SubstatusEnum["NUMBER_305"] = 305] = "NUMBER_305";
        SubstatusEnum[SubstatusEnum["NUMBER_306"] = 306] = "NUMBER_306";
        SubstatusEnum[SubstatusEnum["NUMBER_307"] = 307] = "NUMBER_307";
        SubstatusEnum[SubstatusEnum["NUMBER_400"] = 400] = "NUMBER_400";
        SubstatusEnum[SubstatusEnum["NUMBER_401"] = 401] = "NUMBER_401";
        SubstatusEnum[SubstatusEnum["NUMBER_402"] = 402] = "NUMBER_402";
        SubstatusEnum[SubstatusEnum["NUMBER_403"] = 403] = "NUMBER_403";
        SubstatusEnum[SubstatusEnum["NUMBER_404"] = 404] = "NUMBER_404";
        SubstatusEnum[SubstatusEnum["NUMBER_405"] = 405] = "NUMBER_405";
        SubstatusEnum[SubstatusEnum["NUMBER_406"] = 406] = "NUMBER_406";
        SubstatusEnum[SubstatusEnum["NUMBER_407"] = 407] = "NUMBER_407";
        SubstatusEnum[SubstatusEnum["NUMBER_408"] = 408] = "NUMBER_408";
        SubstatusEnum[SubstatusEnum["NUMBER_409"] = 409] = "NUMBER_409";
        SubstatusEnum[SubstatusEnum["NUMBER_410"] = 410] = "NUMBER_410";
        SubstatusEnum[SubstatusEnum["NUMBER_411"] = 411] = "NUMBER_411";
        SubstatusEnum[SubstatusEnum["NUMBER_412"] = 412] = "NUMBER_412";
        SubstatusEnum[SubstatusEnum["NUMBER_413"] = 413] = "NUMBER_413";
        SubstatusEnum[SubstatusEnum["NUMBER_414"] = 414] = "NUMBER_414";
        SubstatusEnum[SubstatusEnum["NUMBER_415"] = 415] = "NUMBER_415";
        SubstatusEnum[SubstatusEnum["NUMBER_416"] = 416] = "NUMBER_416";
        SubstatusEnum[SubstatusEnum["NUMBER_417"] = 417] = "NUMBER_417";
        SubstatusEnum[SubstatusEnum["NUMBER_426"] = 426] = "NUMBER_426";
        SubstatusEnum[SubstatusEnum["NUMBER_500"] = 500] = "NUMBER_500";
        SubstatusEnum[SubstatusEnum["NUMBER_501"] = 501] = "NUMBER_501";
        SubstatusEnum[SubstatusEnum["NUMBER_502"] = 502] = "NUMBER_502";
        SubstatusEnum[SubstatusEnum["NUMBER_503"] = 503] = "NUMBER_503";
        SubstatusEnum[SubstatusEnum["NUMBER_504"] = 504] = "NUMBER_504";
        SubstatusEnum[SubstatusEnum["NUMBER_505"] = 505] = "NUMBER_505";
    })(SubstatusEnum = Substatus.SubstatusEnum || (Substatus.SubstatusEnum = {}));
})(Substatus = exports.Substatus || (exports.Substatus = {}));
class SummaryValue {
}
exports.SummaryValue = SummaryValue;
class SystemLanding {
}
exports.SystemLanding = SystemLanding;
class SystemLandingLinks {
}
exports.SystemLandingLinks = SystemLandingLinks;
class SystemStatus {
}
exports.SystemStatus = SystemStatus;
class Table {
}
exports.Table = Table;
class TableCategory {
}
exports.TableCategory = TableCategory;
class TableCategoryLinks {
}
exports.TableCategoryLinks = TableCategoryLinks;
class TableData {
}
exports.TableData = TableData;
class TableLinks {
}
exports.TableLinks = TableLinks;
class TimeRule {
}
exports.TimeRule = TimeRule;
class TimeRuleLinks {
}
exports.TimeRuleLinks = TimeRuleLinks;
class TimeRulePlugIn {
}
exports.TimeRulePlugIn = TimeRulePlugIn;
class TimeRulePlugInLinks {
}
exports.TimeRulePlugInLinks = TimeRulePlugInLinks;
class TimedValue {
}
exports.TimedValue = TimedValue;
class TimedValues {
}
exports.TimedValues = TimedValues;
class Unit {
}
exports.Unit = Unit;
class UnitClass {
}
exports.UnitClass = UnitClass;
class UnitClassLinks {
}
exports.UnitClassLinks = UnitClassLinks;
class UnitLinks {
}
exports.UnitLinks = UnitLinks;
class UserInfo {
}
exports.UserInfo = UserInfo;
class Value {
}
exports.Value = Value;
class Version {
}
exports.Version = Version;
class HttpBasicAuth {
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
        requestOptions.strictSSL = false;
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    applyToRequest(_) {
    }
}
exports.VoidAuth = VoidAuth;
var AnalysisApiApiKeys;
(function (AnalysisApiApiKeys) {
})(AnalysisApiApiKeys = exports.AnalysisApiApiKeys || (exports.AnalysisApiApiKeys = {}));
class AnalysisApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[AnalysisApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    analysisCreateSecurityEntry(webId, securityEntry, applyToChildren) {
        const localVarPath = this.basePath + '/analyses/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisCreateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling analysisCreateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisDelete(webId) {
        const localVarPath = this.basePath + '/analyses/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisDelete.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisDeleteSecurityEntry(name, webId, applyToChildren) {
        const localVarPath = this.basePath + '/analyses/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling analysisDeleteSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisDeleteSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/analyses/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/analyses';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling analysisGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisGetCategories(webId, selectedFields) {
        const localVarPath = this.basePath + '/analyses/{webId}/categories'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisGetCategories.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisGetSecurity(webId, userIdentity, forceRefresh, selectedFields) {
        const localVarPath = this.basePath + '/analyses/{webId}/security'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisGetSecurity.');
        }
        if (userIdentity === null || userIdentity === undefined) {
            throw new Error('Required parameter userIdentity was null or undefined when calling analysisGetSecurity.');
        }
        if (userIdentity !== undefined) {
            queryParameters['userIdentity'] = userIdentity;
        }
        if (forceRefresh !== undefined) {
            queryParameters['forceRefresh'] = forceRefresh;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisGetSecurityEntries(webId, nameFilter, selectedFields) {
        const localVarPath = this.basePath + '/analyses/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisGetSecurityEntries.');
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisGetSecurityEntryByName(name, webId, selectedFields) {
        const localVarPath = this.basePath + '/analyses/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling analysisGetSecurityEntryByName.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisGetSecurityEntryByName.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisUpdate(webId, analysis) {
        const localVarPath = this.basePath + '/analyses/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisUpdate.');
        }
        if (analysis === null || analysis === undefined) {
            throw new Error('Required parameter analysis was null or undefined when calling analysisUpdate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: analysis,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisUpdateSecurityEntry(name, webId, securityEntry, applyToChildren) {
        const localVarPath = this.basePath + '/analyses/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling analysisUpdateSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisUpdateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling analysisUpdateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.AnalysisApi = AnalysisApi;
var AnalysisCategoryApiApiKeys;
(function (AnalysisCategoryApiApiKeys) {
})(AnalysisCategoryApiApiKeys = exports.AnalysisCategoryApiApiKeys || (exports.AnalysisCategoryApiApiKeys = {}));
class AnalysisCategoryApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[AnalysisCategoryApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    analysisCategoryCreateSecurityEntry(webId, securityEntry, applyToChildren) {
        const localVarPath = this.basePath + '/analysiscategories/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisCategoryCreateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling analysisCategoryCreateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisCategoryDelete(webId) {
        const localVarPath = this.basePath + '/analysiscategories/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisCategoryDelete.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisCategoryDeleteSecurityEntry(name, webId, applyToChildren) {
        const localVarPath = this.basePath + '/analysiscategories/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling analysisCategoryDeleteSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisCategoryDeleteSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisCategoryGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/analysiscategories/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisCategoryGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisCategoryGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/analysiscategories';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling analysisCategoryGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisCategoryGetSecurity(webId, userIdentity, forceRefresh, selectedFields) {
        const localVarPath = this.basePath + '/analysiscategories/{webId}/security'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisCategoryGetSecurity.');
        }
        if (userIdentity === null || userIdentity === undefined) {
            throw new Error('Required parameter userIdentity was null or undefined when calling analysisCategoryGetSecurity.');
        }
        if (userIdentity !== undefined) {
            queryParameters['userIdentity'] = userIdentity;
        }
        if (forceRefresh !== undefined) {
            queryParameters['forceRefresh'] = forceRefresh;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisCategoryGetSecurityEntries(webId, nameFilter, selectedFields) {
        const localVarPath = this.basePath + '/analysiscategories/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisCategoryGetSecurityEntries.');
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisCategoryGetSecurityEntryByName(name, webId, selectedFields) {
        const localVarPath = this.basePath + '/analysiscategories/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling analysisCategoryGetSecurityEntryByName.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisCategoryGetSecurityEntryByName.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisCategoryUpdate(webId, category) {
        const localVarPath = this.basePath + '/analysiscategories/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisCategoryUpdate.');
        }
        if (category === null || category === undefined) {
            throw new Error('Required parameter category was null or undefined when calling analysisCategoryUpdate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: category,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisCategoryUpdateSecurityEntry(name, webId, securityEntry, applyToChildren) {
        const localVarPath = this.basePath + '/analysiscategories/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling analysisCategoryUpdateSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisCategoryUpdateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling analysisCategoryUpdateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.AnalysisCategoryApi = AnalysisCategoryApi;
var AnalysisRuleApiApiKeys;
(function (AnalysisRuleApiApiKeys) {
})(AnalysisRuleApiApiKeys = exports.AnalysisRuleApiApiKeys || (exports.AnalysisRuleApiApiKeys = {}));
class AnalysisRuleApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[AnalysisRuleApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    analysisRuleCreateAnalysisRule(webId, analysisRule) {
        const localVarPath = this.basePath + '/analysisrules/{webId}/analysisrules'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisRuleCreateAnalysisRule.');
        }
        if (analysisRule === null || analysisRule === undefined) {
            throw new Error('Required parameter analysisRule was null or undefined when calling analysisRuleCreateAnalysisRule.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: analysisRule,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisRuleDelete(webId) {
        const localVarPath = this.basePath + '/analysisrules/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisRuleDelete.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisRuleGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/analysisrules/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisRuleGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisRuleGetAnalysisRules(webId, maxCount, nameFilter, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex) {
        const localVarPath = this.basePath + '/analysisrules/{webId}/analysisrules'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisRuleGetAnalysisRules.');
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (startIndex !== undefined) {
            queryParameters['startIndex'] = startIndex;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisRuleGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/analysisrules';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling analysisRuleGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisRuleUpdate(webId, analysisRule) {
        const localVarPath = this.basePath + '/analysisrules/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisRuleUpdate.');
        }
        if (analysisRule === null || analysisRule === undefined) {
            throw new Error('Required parameter analysisRule was null or undefined when calling analysisRuleUpdate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: analysisRule,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.AnalysisRuleApi = AnalysisRuleApi;
var AnalysisRulePlugInApiApiKeys;
(function (AnalysisRulePlugInApiApiKeys) {
})(AnalysisRulePlugInApiApiKeys = exports.AnalysisRulePlugInApiApiKeys || (exports.AnalysisRulePlugInApiApiKeys = {}));
class AnalysisRulePlugInApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[AnalysisRulePlugInApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    analysisRulePlugInGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/analysisruleplugins/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisRulePlugInGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisRulePlugInGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/analysisruleplugins';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling analysisRulePlugInGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.AnalysisRulePlugInApi = AnalysisRulePlugInApi;
var AnalysisTemplateApiApiKeys;
(function (AnalysisTemplateApiApiKeys) {
})(AnalysisTemplateApiApiKeys = exports.AnalysisTemplateApiApiKeys || (exports.AnalysisTemplateApiApiKeys = {}));
class AnalysisTemplateApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[AnalysisTemplateApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    analysisTemplateCreateFromAnalysis(analysisWebId, name) {
        const localVarPath = this.basePath + '/analysistemplates';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (analysisWebId === null || analysisWebId === undefined) {
            throw new Error('Required parameter analysisWebId was null or undefined when calling analysisTemplateCreateFromAnalysis.');
        }
        if (analysisWebId !== undefined) {
            queryParameters['analysisWebId'] = analysisWebId;
        }
        if (name !== undefined) {
            queryParameters['name'] = name;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisTemplateCreateSecurityEntry(webId, securityEntry, applyToChildren) {
        const localVarPath = this.basePath + '/analysistemplates/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisTemplateCreateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling analysisTemplateCreateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisTemplateDelete(webId) {
        const localVarPath = this.basePath + '/analysistemplates/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisTemplateDelete.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisTemplateDeleteSecurityEntry(name, webId, applyToChildren) {
        const localVarPath = this.basePath + '/analysistemplates/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling analysisTemplateDeleteSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisTemplateDeleteSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisTemplateGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/analysistemplates/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisTemplateGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisTemplateGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/analysistemplates';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling analysisTemplateGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisTemplateGetCategories(webId, selectedFields) {
        const localVarPath = this.basePath + '/analysistemplates/{webId}/categories'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisTemplateGetCategories.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisTemplateGetSecurity(webId, userIdentity, forceRefresh, selectedFields) {
        const localVarPath = this.basePath + '/analysistemplates/{webId}/security'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisTemplateGetSecurity.');
        }
        if (userIdentity === null || userIdentity === undefined) {
            throw new Error('Required parameter userIdentity was null or undefined when calling analysisTemplateGetSecurity.');
        }
        if (userIdentity !== undefined) {
            queryParameters['userIdentity'] = userIdentity;
        }
        if (forceRefresh !== undefined) {
            queryParameters['forceRefresh'] = forceRefresh;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisTemplateGetSecurityEntries(webId, nameFilter, selectedFields) {
        const localVarPath = this.basePath + '/analysistemplates/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisTemplateGetSecurityEntries.');
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisTemplateGetSecurityEntryByName(name, webId, selectedFields) {
        const localVarPath = this.basePath + '/analysistemplates/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling analysisTemplateGetSecurityEntryByName.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisTemplateGetSecurityEntryByName.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisTemplateUpdate(webId, template) {
        const localVarPath = this.basePath + '/analysistemplates/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisTemplateUpdate.');
        }
        if (template === null || template === undefined) {
            throw new Error('Required parameter template was null or undefined when calling analysisTemplateUpdate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: template,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    analysisTemplateUpdateSecurityEntry(name, webId, securityEntry, applyToChildren) {
        const localVarPath = this.basePath + '/analysistemplates/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling analysisTemplateUpdateSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling analysisTemplateUpdateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling analysisTemplateUpdateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.AnalysisTemplateApi = AnalysisTemplateApi;
var AssetDatabaseApiApiKeys;
(function (AssetDatabaseApiApiKeys) {
})(AssetDatabaseApiApiKeys = exports.AssetDatabaseApiApiKeys || (exports.AssetDatabaseApiApiKeys = {}));
class AssetDatabaseApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[AssetDatabaseApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    assetDatabaseAddReferencedElement(webId, referencedElementWebId, referenceType) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/referencedelements'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseAddReferencedElement.');
        }
        if (referencedElementWebId === null || referencedElementWebId === undefined) {
            throw new Error('Required parameter referencedElementWebId was null or undefined when calling assetDatabaseAddReferencedElement.');
        }
        if (referencedElementWebId !== undefined) {
            queryParameters['referencedElementWebId'] = referencedElementWebId;
        }
        if (referenceType !== undefined) {
            queryParameters['referenceType'] = referenceType;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseCreateAnalysisCategory(webId, analysisCategory) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/analysiscategories'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseCreateAnalysisCategory.');
        }
        if (analysisCategory === null || analysisCategory === undefined) {
            throw new Error('Required parameter analysisCategory was null or undefined when calling assetDatabaseCreateAnalysisCategory.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: analysisCategory,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseCreateAnalysisTemplate(webId, template) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/analysistemplates'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseCreateAnalysisTemplate.');
        }
        if (template === null || template === undefined) {
            throw new Error('Required parameter template was null or undefined when calling assetDatabaseCreateAnalysisTemplate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: template,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseCreateAttributeCategory(webId, attributeCategory) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/attributecategories'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseCreateAttributeCategory.');
        }
        if (attributeCategory === null || attributeCategory === undefined) {
            throw new Error('Required parameter attributeCategory was null or undefined when calling assetDatabaseCreateAttributeCategory.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: attributeCategory,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseCreateElement(webId, element) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/elements'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseCreateElement.');
        }
        if (element === null || element === undefined) {
            throw new Error('Required parameter element was null or undefined when calling assetDatabaseCreateElement.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: element,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseCreateElementCategory(webId, elementCategory) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/elementcategories'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseCreateElementCategory.');
        }
        if (elementCategory === null || elementCategory === undefined) {
            throw new Error('Required parameter elementCategory was null or undefined when calling assetDatabaseCreateElementCategory.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: elementCategory,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseCreateElementTemplate(webId, template) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/elementtemplates'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseCreateElementTemplate.');
        }
        if (template === null || template === undefined) {
            throw new Error('Required parameter template was null or undefined when calling assetDatabaseCreateElementTemplate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: template,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseCreateEnumerationSet(webId, enumerationSet) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/enumerationsets'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseCreateEnumerationSet.');
        }
        if (enumerationSet === null || enumerationSet === undefined) {
            throw new Error('Required parameter enumerationSet was null or undefined when calling assetDatabaseCreateEnumerationSet.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: enumerationSet,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseCreateEventFrame(webId, eventFrame) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/eventframes'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseCreateEventFrame.');
        }
        if (eventFrame === null || eventFrame === undefined) {
            throw new Error('Required parameter eventFrame was null or undefined when calling assetDatabaseCreateEventFrame.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: eventFrame,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseCreateSecurityEntry(webId, securityEntry, applyToChildren, securityItem) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseCreateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling assetDatabaseCreateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        if (securityItem !== undefined) {
            queryParameters['securityItem'] = securityItem;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseCreateTable(webId, table) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/tables'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseCreateTable.');
        }
        if (table === null || table === undefined) {
            throw new Error('Required parameter table was null or undefined when calling assetDatabaseCreateTable.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: table,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseCreateTableCategory(webId, tableCategory) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/tablecategories'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseCreateTableCategory.');
        }
        if (tableCategory === null || tableCategory === undefined) {
            throw new Error('Required parameter tableCategory was null or undefined when calling assetDatabaseCreateTableCategory.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: tableCategory,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseDelete(webId) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseDelete.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseDeleteSecurityEntry(name, webId, applyToChildren, securityItem) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling assetDatabaseDeleteSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseDeleteSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        if (securityItem !== undefined) {
            queryParameters['securityItem'] = securityItem;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseExport(webId, endTime, exportMode, startTime) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/export'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseExport.');
        }
        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }
        if (exportMode !== undefined) {
            queryParameters['exportMode'] = exportMode;
        }
        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseFindAnalyses(webId, field, maxCount, query, selectedFields, sortField, sortOrder, startIndex) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/analyses'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseFindAnalyses.');
        }
        if (field === null || field === undefined) {
            throw new Error('Required parameter field was null or undefined when calling assetDatabaseFindAnalyses.');
        }
        if (field !== undefined) {
            queryParameters['field'] = field;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (query !== undefined) {
            queryParameters['query'] = query;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (startIndex !== undefined) {
            queryParameters['startIndex'] = startIndex;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseFindElementAttributes(webId, attributeCategory, attributeDescriptionFilter, attributeNameFilter, attributeType, elementCategory, elementDescriptionFilter, elementNameFilter, elementTemplate, elementType, maxCount, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/elementattributes'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseFindElementAttributes.');
        }
        if (attributeCategory !== undefined) {
            queryParameters['attributeCategory'] = attributeCategory;
        }
        if (attributeDescriptionFilter !== undefined) {
            queryParameters['attributeDescriptionFilter'] = attributeDescriptionFilter;
        }
        if (attributeNameFilter !== undefined) {
            queryParameters['attributeNameFilter'] = attributeNameFilter;
        }
        if (attributeType !== undefined) {
            queryParameters['attributeType'] = attributeType;
        }
        if (elementCategory !== undefined) {
            queryParameters['elementCategory'] = elementCategory;
        }
        if (elementDescriptionFilter !== undefined) {
            queryParameters['elementDescriptionFilter'] = elementDescriptionFilter;
        }
        if (elementNameFilter !== undefined) {
            queryParameters['elementNameFilter'] = elementNameFilter;
        }
        if (elementTemplate !== undefined) {
            queryParameters['elementTemplate'] = elementTemplate;
        }
        if (elementType !== undefined) {
            queryParameters['elementType'] = elementType;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (startIndex !== undefined) {
            queryParameters['startIndex'] = startIndex;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseFindEventFrameAttributes(webId, attributeCategory, attributeDescriptionFilter, attributeNameFilter, attributeType, endTime, eventFrameCategory, eventFrameDescriptionFilter, eventFrameNameFilter, eventFrameTemplate, maxCount, referencedElementNameFilter, searchFullHierarchy, searchMode, selectedFields, sortField, sortOrder, startIndex, startTime) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/eventframeattributes'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseFindEventFrameAttributes.');
        }
        if (attributeCategory !== undefined) {
            queryParameters['attributeCategory'] = attributeCategory;
        }
        if (attributeDescriptionFilter !== undefined) {
            queryParameters['attributeDescriptionFilter'] = attributeDescriptionFilter;
        }
        if (attributeNameFilter !== undefined) {
            queryParameters['attributeNameFilter'] = attributeNameFilter;
        }
        if (attributeType !== undefined) {
            queryParameters['attributeType'] = attributeType;
        }
        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }
        if (eventFrameCategory !== undefined) {
            queryParameters['eventFrameCategory'] = eventFrameCategory;
        }
        if (eventFrameDescriptionFilter !== undefined) {
            queryParameters['eventFrameDescriptionFilter'] = eventFrameDescriptionFilter;
        }
        if (eventFrameNameFilter !== undefined) {
            queryParameters['eventFrameNameFilter'] = eventFrameNameFilter;
        }
        if (eventFrameTemplate !== undefined) {
            queryParameters['eventFrameTemplate'] = eventFrameTemplate;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (referencedElementNameFilter !== undefined) {
            queryParameters['referencedElementNameFilter'] = referencedElementNameFilter;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (searchMode !== undefined) {
            queryParameters['searchMode'] = searchMode;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (startIndex !== undefined) {
            queryParameters['startIndex'] = startIndex;
        }
        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseGetAnalysisCategories(webId, selectedFields) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/analysiscategories'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseGetAnalysisCategories.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseGetAnalysisTemplates(webId, field, maxCount, query, selectedFields, sortField, sortOrder) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/analysistemplates'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseGetAnalysisTemplates.');
        }
        if (field === null || field === undefined) {
            throw new Error('Required parameter field was null or undefined when calling assetDatabaseGetAnalysisTemplates.');
        }
        if (field !== undefined) {
            queryParameters['field'] = field;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (query !== undefined) {
            queryParameters['query'] = query;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseGetAttributeCategories(webId, selectedFields) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/attributecategories'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseGetAttributeCategories.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/assetdatabases';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling assetDatabaseGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseGetElementCategories(webId, selectedFields) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/elementcategories'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseGetElementCategories.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseGetElementTemplates(webId, field, maxCount, query, selectedFields, sortField, sortOrder) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/elementtemplates'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseGetElementTemplates.');
        }
        if (field === null || field === undefined) {
            throw new Error('Required parameter field was null or undefined when calling assetDatabaseGetElementTemplates.');
        }
        if (field !== undefined) {
            queryParameters['field'] = field;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (query !== undefined) {
            queryParameters['query'] = query;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseGetElements(webId, categoryName, descriptionFilter, elementType, maxCount, nameFilter, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, templateName) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/elements'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseGetElements.');
        }
        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }
        if (descriptionFilter !== undefined) {
            queryParameters['descriptionFilter'] = descriptionFilter;
        }
        if (elementType !== undefined) {
            queryParameters['elementType'] = elementType;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (startIndex !== undefined) {
            queryParameters['startIndex'] = startIndex;
        }
        if (templateName !== undefined) {
            queryParameters['templateName'] = templateName;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseGetEnumerationSets(webId, selectedFields) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/enumerationsets'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseGetEnumerationSets.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseGetEventFrames(webId, canBeAcknowledged, categoryName, endTime, isAcknowledged, maxCount, nameFilter, referencedElementNameFilter, referencedElementTemplateName, searchFullHierarchy, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime, templateName) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/eventframes'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseGetEventFrames.');
        }
        if (canBeAcknowledged !== undefined) {
            queryParameters['canBeAcknowledged'] = canBeAcknowledged;
        }
        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }
        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }
        if (isAcknowledged !== undefined) {
            queryParameters['isAcknowledged'] = isAcknowledged;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (referencedElementNameFilter !== undefined) {
            queryParameters['referencedElementNameFilter'] = referencedElementNameFilter;
        }
        if (referencedElementTemplateName !== undefined) {
            queryParameters['referencedElementTemplateName'] = referencedElementTemplateName;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (searchMode !== undefined) {
            queryParameters['searchMode'] = searchMode;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (severity !== undefined) {
            queryParameters['severity'] = severity;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (startIndex !== undefined) {
            queryParameters['startIndex'] = startIndex;
        }
        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }
        if (templateName !== undefined) {
            queryParameters['templateName'] = templateName;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseGetReferencedElements(webId, categoryName, descriptionFilter, elementType, maxCount, nameFilter, selectedFields, sortField, sortOrder, startIndex, templateName) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/referencedelements'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseGetReferencedElements.');
        }
        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }
        if (descriptionFilter !== undefined) {
            queryParameters['descriptionFilter'] = descriptionFilter;
        }
        if (elementType !== undefined) {
            queryParameters['elementType'] = elementType;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (startIndex !== undefined) {
            queryParameters['startIndex'] = startIndex;
        }
        if (templateName !== undefined) {
            queryParameters['templateName'] = templateName;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseGetSecurity(webId, securityItem, userIdentity, forceRefresh, selectedFields) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/security'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseGetSecurity.');
        }
        if (securityItem === null || securityItem === undefined) {
            throw new Error('Required parameter securityItem was null or undefined when calling assetDatabaseGetSecurity.');
        }
        if (userIdentity === null || userIdentity === undefined) {
            throw new Error('Required parameter userIdentity was null or undefined when calling assetDatabaseGetSecurity.');
        }
        if (securityItem !== undefined) {
            queryParameters['securityItem'] = securityItem;
        }
        if (userIdentity !== undefined) {
            queryParameters['userIdentity'] = userIdentity;
        }
        if (forceRefresh !== undefined) {
            queryParameters['forceRefresh'] = forceRefresh;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseGetSecurityEntries(webId, nameFilter, securityItem, selectedFields) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseGetSecurityEntries.');
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (securityItem !== undefined) {
            queryParameters['securityItem'] = securityItem;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseGetSecurityEntryByName(name, webId, securityItem, selectedFields) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling assetDatabaseGetSecurityEntryByName.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseGetSecurityEntryByName.');
        }
        if (securityItem !== undefined) {
            queryParameters['securityItem'] = securityItem;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseGetTableCategories(webId, selectedFields) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/tablecategories'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseGetTableCategories.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseGetTables(webId, selectedFields) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/tables'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseGetTables.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseImport(webId, importMode) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/import'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseImport.');
        }
        if (importMode !== undefined) {
            queryParameters['importMode'] = importMode;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseRemoveReferencedElement(webId, referencedElementWebId) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/referencedelements'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseRemoveReferencedElement.');
        }
        if (referencedElementWebId === null || referencedElementWebId === undefined) {
            throw new Error('Required parameter referencedElementWebId was null or undefined when calling assetDatabaseRemoveReferencedElement.');
        }
        if (referencedElementWebId !== undefined) {
            queryParameters['referencedElementWebId'] = referencedElementWebId;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseUpdate(webId, database) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseUpdate.');
        }
        if (database === null || database === undefined) {
            throw new Error('Required parameter database was null or undefined when calling assetDatabaseUpdate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: database,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetDatabaseUpdateSecurityEntry(name, webId, securityEntry, applyToChildren, securityItem) {
        const localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling assetDatabaseUpdateSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetDatabaseUpdateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling assetDatabaseUpdateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        if (securityItem !== undefined) {
            queryParameters['securityItem'] = securityItem;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.AssetDatabaseApi = AssetDatabaseApi;
var AssetServerApiApiKeys;
(function (AssetServerApiApiKeys) {
})(AssetServerApiApiKeys = exports.AssetServerApiApiKeys || (exports.AssetServerApiApiKeys = {}));
class AssetServerApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[AssetServerApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    assetServerCreateAssetDatabase(webId, database) {
        const localVarPath = this.basePath + '/assetservers/{webId}/assetdatabases'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetServerCreateAssetDatabase.');
        }
        if (database === null || database === undefined) {
            throw new Error('Required parameter database was null or undefined when calling assetServerCreateAssetDatabase.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: database,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetServerCreateSecurityEntry(webId, securityEntry, applyToChildren, securityItem) {
        const localVarPath = this.basePath + '/assetservers/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetServerCreateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling assetServerCreateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        if (securityItem !== undefined) {
            queryParameters['securityItem'] = securityItem;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetServerCreateSecurityIdentity(webId, securityIdentity) {
        const localVarPath = this.basePath + '/assetservers/{webId}/securityidentities'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetServerCreateSecurityIdentity.');
        }
        if (securityIdentity === null || securityIdentity === undefined) {
            throw new Error('Required parameter securityIdentity was null or undefined when calling assetServerCreateSecurityIdentity.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityIdentity,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetServerCreateSecurityMapping(webId, securityMapping) {
        const localVarPath = this.basePath + '/assetservers/{webId}/securitymappings'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetServerCreateSecurityMapping.');
        }
        if (securityMapping === null || securityMapping === undefined) {
            throw new Error('Required parameter securityMapping was null or undefined when calling assetServerCreateSecurityMapping.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityMapping,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetServerCreateUnitClass(webId, unitClass) {
        const localVarPath = this.basePath + '/assetservers/{webId}/unitclasses'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetServerCreateUnitClass.');
        }
        if (unitClass === null || unitClass === undefined) {
            throw new Error('Required parameter unitClass was null or undefined when calling assetServerCreateUnitClass.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: unitClass,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetServerDeleteSecurityEntry(name, webId, applyToChildren, securityItem) {
        const localVarPath = this.basePath + '/assetservers/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling assetServerDeleteSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetServerDeleteSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        if (securityItem !== undefined) {
            queryParameters['securityItem'] = securityItem;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetServerGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/assetservers/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetServerGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetServerGetAnalysisRulePlugIns(webId, selectedFields) {
        const localVarPath = this.basePath + '/assetservers/{webId}/analysisruleplugins'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetServerGetAnalysisRulePlugIns.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetServerGetByName(name, selectedFields) {
        const localVarPath = this.basePath + '/assetservers#name';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling assetServerGetByName.');
        }
        if (name !== undefined) {
            queryParameters['name'] = name;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetServerGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/assetservers#path';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling assetServerGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetServerGetDatabases(webId, selectedFields) {
        const localVarPath = this.basePath + '/assetservers/{webId}/assetdatabases'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetServerGetDatabases.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetServerGetSecurity(webId, securityItem, userIdentity, forceRefresh, selectedFields) {
        const localVarPath = this.basePath + '/assetservers/{webId}/security'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetServerGetSecurity.');
        }
        if (securityItem === null || securityItem === undefined) {
            throw new Error('Required parameter securityItem was null or undefined when calling assetServerGetSecurity.');
        }
        if (userIdentity === null || userIdentity === undefined) {
            throw new Error('Required parameter userIdentity was null or undefined when calling assetServerGetSecurity.');
        }
        if (securityItem !== undefined) {
            queryParameters['securityItem'] = securityItem;
        }
        if (userIdentity !== undefined) {
            queryParameters['userIdentity'] = userIdentity;
        }
        if (forceRefresh !== undefined) {
            queryParameters['forceRefresh'] = forceRefresh;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetServerGetSecurityEntries(webId, nameFilter, securityItem, selectedFields) {
        const localVarPath = this.basePath + '/assetservers/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetServerGetSecurityEntries.');
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (securityItem !== undefined) {
            queryParameters['securityItem'] = securityItem;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetServerGetSecurityEntryByName(name, webId, securityItem, selectedFields) {
        const localVarPath = this.basePath + '/assetservers/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling assetServerGetSecurityEntryByName.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetServerGetSecurityEntryByName.');
        }
        if (securityItem !== undefined) {
            queryParameters['securityItem'] = securityItem;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetServerGetSecurityIdentities(webId, field, maxCount, query, selectedFields, sortField, sortOrder) {
        const localVarPath = this.basePath + '/assetservers/{webId}/securityidentities'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetServerGetSecurityIdentities.');
        }
        if (field !== undefined) {
            queryParameters['field'] = field;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (query !== undefined) {
            queryParameters['query'] = query;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetServerGetSecurityIdentitiesForUser(webId, userIdentity, selectedFields) {
        const localVarPath = this.basePath + '/assetservers/{webId}/securityidentities#userIdentity'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetServerGetSecurityIdentitiesForUser.');
        }
        if (userIdentity === null || userIdentity === undefined) {
            throw new Error('Required parameter userIdentity was null or undefined when calling assetServerGetSecurityIdentitiesForUser.');
        }
        if (userIdentity !== undefined) {
            queryParameters['userIdentity'] = userIdentity;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetServerGetSecurityMappings(webId, field, maxCount, query, selectedFields, sortField, sortOrder) {
        const localVarPath = this.basePath + '/assetservers/{webId}/securitymappings'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetServerGetSecurityMappings.');
        }
        if (field !== undefined) {
            queryParameters['field'] = field;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (query !== undefined) {
            queryParameters['query'] = query;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetServerGetTimeRulePlugIns(webId, selectedFields) {
        const localVarPath = this.basePath + '/assetservers/{webId}/timeruleplugins'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetServerGetTimeRulePlugIns.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetServerGetUnitClasses(webId, selectedFields) {
        const localVarPath = this.basePath + '/assetservers/{webId}/unitclasses'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetServerGetUnitClasses.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetServerList(selectedFields) {
        const localVarPath = this.basePath + '/assetservers';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    assetServerUpdateSecurityEntry(name, webId, securityEntry, applyToChildren, securityItem) {
        const localVarPath = this.basePath + '/assetservers/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling assetServerUpdateSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling assetServerUpdateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling assetServerUpdateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        if (securityItem !== undefined) {
            queryParameters['securityItem'] = securityItem;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.AssetServerApi = AssetServerApi;
var AttributeApiApiKeys;
(function (AttributeApiApiKeys) {
})(AttributeApiApiKeys = exports.AttributeApiApiKeys || (exports.AttributeApiApiKeys = {}));
class AttributeApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[AttributeApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    attributeCreateAttribute(webId, attribute) {
        const localVarPath = this.basePath + '/attributes/{webId}/attributes'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeCreateAttribute.');
        }
        if (attribute === null || attribute === undefined) {
            throw new Error('Required parameter attribute was null or undefined when calling attributeCreateAttribute.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: attribute,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeCreateConfig(webId) {
        const localVarPath = this.basePath + '/attributes/{webId}/config'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeCreateConfig.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeDelete(webId) {
        const localVarPath = this.basePath + '/attributes/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeDelete.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/attributes/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeGetAttributes(webId, categoryName, maxCount, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startIndex, templateName, valueType) {
        const localVarPath = this.basePath + '/attributes/{webId}/attributes'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeGetAttributes.');
        }
        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (showExcluded !== undefined) {
            queryParameters['showExcluded'] = showExcluded;
        }
        if (showHidden !== undefined) {
            queryParameters['showHidden'] = showHidden;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (startIndex !== undefined) {
            queryParameters['startIndex'] = startIndex;
        }
        if (templateName !== undefined) {
            queryParameters['templateName'] = templateName;
        }
        if (valueType !== undefined) {
            queryParameters['valueType'] = valueType;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/attributes';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling attributeGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeGetCategories(webId, selectedFields) {
        const localVarPath = this.basePath + '/attributes/{webId}/categories'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeGetCategories.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeGetMultiple(asParallel, includeMode, path, selectedFields, webId) {
        const localVarPath = this.basePath + '/attributes/multiple';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (asParallel !== undefined) {
            queryParameters['asParallel'] = asParallel;
        }
        if (includeMode !== undefined) {
            queryParameters['includeMode'] = includeMode;
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (webId !== undefined) {
            queryParameters['webId'] = webId;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeGetValue(webId, selectedFields) {
        const localVarPath = this.basePath + '/attributes/{webId}/value'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeGetValue.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeSetValue(webId, value) {
        const localVarPath = this.basePath + '/attributes/{webId}/value'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeSetValue.');
        }
        if (value === null || value === undefined) {
            throw new Error('Required parameter value was null or undefined when calling attributeSetValue.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: value,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeUpdate(webId, attribute) {
        const localVarPath = this.basePath + '/attributes/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeUpdate.');
        }
        if (attribute === null || attribute === undefined) {
            throw new Error('Required parameter attribute was null or undefined when calling attributeUpdate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: attribute,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.AttributeApi = AttributeApi;
var AttributeCategoryApiApiKeys;
(function (AttributeCategoryApiApiKeys) {
})(AttributeCategoryApiApiKeys = exports.AttributeCategoryApiApiKeys || (exports.AttributeCategoryApiApiKeys = {}));
class AttributeCategoryApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[AttributeCategoryApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    attributeCategoryCreateSecurityEntry(webId, securityEntry, applyToChildren) {
        const localVarPath = this.basePath + '/attributecategories/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeCategoryCreateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling attributeCategoryCreateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeCategoryDelete(webId) {
        const localVarPath = this.basePath + '/attributecategories/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeCategoryDelete.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeCategoryDeleteSecurityEntry(name, webId, applyToChildren) {
        const localVarPath = this.basePath + '/attributecategories/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling attributeCategoryDeleteSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeCategoryDeleteSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeCategoryGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/attributecategories/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeCategoryGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeCategoryGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/attributecategories';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling attributeCategoryGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeCategoryGetSecurity(webId, userIdentity, forceRefresh, selectedFields) {
        const localVarPath = this.basePath + '/attributecategories/{webId}/security'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeCategoryGetSecurity.');
        }
        if (userIdentity === null || userIdentity === undefined) {
            throw new Error('Required parameter userIdentity was null or undefined when calling attributeCategoryGetSecurity.');
        }
        if (userIdentity !== undefined) {
            queryParameters['userIdentity'] = userIdentity;
        }
        if (forceRefresh !== undefined) {
            queryParameters['forceRefresh'] = forceRefresh;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeCategoryGetSecurityEntries(webId, nameFilter, selectedFields) {
        const localVarPath = this.basePath + '/attributecategories/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeCategoryGetSecurityEntries.');
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeCategoryGetSecurityEntryByName(name, webId, selectedFields) {
        const localVarPath = this.basePath + '/attributecategories/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling attributeCategoryGetSecurityEntryByName.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeCategoryGetSecurityEntryByName.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeCategoryUpdate(webId, category) {
        const localVarPath = this.basePath + '/attributecategories/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeCategoryUpdate.');
        }
        if (category === null || category === undefined) {
            throw new Error('Required parameter category was null or undefined when calling attributeCategoryUpdate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: category,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeCategoryUpdateSecurityEntry(name, webId, securityEntry, applyToChildren) {
        const localVarPath = this.basePath + '/attributecategories/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling attributeCategoryUpdateSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeCategoryUpdateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling attributeCategoryUpdateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.AttributeCategoryApi = AttributeCategoryApi;
var AttributeTemplateApiApiKeys;
(function (AttributeTemplateApiApiKeys) {
})(AttributeTemplateApiApiKeys = exports.AttributeTemplateApiApiKeys || (exports.AttributeTemplateApiApiKeys = {}));
class AttributeTemplateApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[AttributeTemplateApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    attributeTemplateCreateAttributeTemplate(webId, template) {
        const localVarPath = this.basePath + '/attributetemplates/{webId}/attributetemplates'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeTemplateCreateAttributeTemplate.');
        }
        if (template === null || template === undefined) {
            throw new Error('Required parameter template was null or undefined when calling attributeTemplateCreateAttributeTemplate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: template,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeTemplateDelete(webId) {
        const localVarPath = this.basePath + '/attributetemplates/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeTemplateDelete.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeTemplateGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/attributetemplates/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeTemplateGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeTemplateGetAttributeTemplates(webId, selectedFields) {
        const localVarPath = this.basePath + '/attributetemplates/{webId}/attributetemplates'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeTemplateGetAttributeTemplates.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeTemplateGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/attributetemplates';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling attributeTemplateGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeTemplateGetCategories(webId, selectedFields) {
        const localVarPath = this.basePath + '/attributetemplates/{webId}/categories'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeTemplateGetCategories.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeTemplateUpdate(webId, template) {
        const localVarPath = this.basePath + '/attributetemplates/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling attributeTemplateUpdate.');
        }
        if (template === null || template === undefined) {
            throw new Error('Required parameter template was null or undefined when calling attributeTemplateUpdate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: template,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.AttributeTemplateApi = AttributeTemplateApi;
var AttributeTraitApiApiKeys;
(function (AttributeTraitApiApiKeys) {
})(AttributeTraitApiApiKeys = exports.AttributeTraitApiApiKeys || (exports.AttributeTraitApiApiKeys = {}));
class AttributeTraitApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[AttributeTraitApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    attributeTraitGet(name, selectedFields) {
        const localVarPath = this.basePath + '/attributetraits/{name}'
            .replace('{' + 'name' + '}', String(name));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling attributeTraitGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    attributeTraitGetByCategory(category, selectedFields) {
        const localVarPath = this.basePath + '/attributetraits';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (category === null || category === undefined) {
            throw new Error('Required parameter category was null or undefined when calling attributeTraitGetByCategory.');
        }
        if (category !== undefined) {
            queryParameters['category'] = category;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.AttributeTraitApi = AttributeTraitApi;
var BatchApiApiKeys;
(function (BatchApiApiKeys) {
})(BatchApiApiKeys = exports.BatchApiApiKeys || (exports.BatchApiApiKeys = {}));
class BatchApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[BatchApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    batchExecute(batch) {
        const localVarPath = this.basePath + '/batch';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (batch === null || batch === undefined) {
            throw new Error('Required parameter batch was null or undefined when calling batchExecute.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: batch,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.BatchApi = BatchApi;
var CalculationApiApiKeys;
(function (CalculationApiApiKeys) {
})(CalculationApiApiKeys = exports.CalculationApiApiKeys || (exports.CalculationApiApiKeys = {}));
class CalculationApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[CalculationApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    calculationGetAtIntervals(endTime, expression, sampleInterval, selectedFields, startTime, webId) {
        const localVarPath = this.basePath + '/calculation/intervals';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }
        if (expression !== undefined) {
            queryParameters['expression'] = expression;
        }
        if (sampleInterval !== undefined) {
            queryParameters['sampleInterval'] = sampleInterval;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }
        if (webId !== undefined) {
            queryParameters['webId'] = webId;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    calculationGetAtRecorded(endTime, expression, selectedFields, startTime, webId) {
        const localVarPath = this.basePath + '/calculation/recorded';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }
        if (expression !== undefined) {
            queryParameters['expression'] = expression;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }
        if (webId !== undefined) {
            queryParameters['webId'] = webId;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    calculationGetAtTimes(expression, selectedFields, sortOrder, time, webId) {
        const localVarPath = this.basePath + '/calculation/times';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (expression !== undefined) {
            queryParameters['expression'] = expression;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (time !== undefined) {
            queryParameters['time'] = time;
        }
        if (webId !== undefined) {
            queryParameters['webId'] = webId;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    calculationGetSummary(calculationBasis, endTime, expression, sampleInterval, sampleType, selectedFields, startTime, summaryDuration, summaryType, timeType, webId) {
        const localVarPath = this.basePath + '/calculation/summary';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (calculationBasis !== undefined) {
            queryParameters['calculationBasis'] = calculationBasis;
        }
        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }
        if (expression !== undefined) {
            queryParameters['expression'] = expression;
        }
        if (sampleInterval !== undefined) {
            queryParameters['sampleInterval'] = sampleInterval;
        }
        if (sampleType !== undefined) {
            queryParameters['sampleType'] = sampleType;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }
        if (summaryDuration !== undefined) {
            queryParameters['summaryDuration'] = summaryDuration;
        }
        if (summaryType !== undefined) {
            queryParameters['summaryType'] = summaryType;
        }
        if (timeType !== undefined) {
            queryParameters['timeType'] = timeType;
        }
        if (webId !== undefined) {
            queryParameters['webId'] = webId;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.CalculationApi = CalculationApi;
var ChannelApiApiKeys;
(function (ChannelApiApiKeys) {
})(ChannelApiApiKeys = exports.ChannelApiApiKeys || (exports.ChannelApiApiKeys = {}));
class ChannelApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[ChannelApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    channelInstances() {
        const localVarPath = this.basePath + '/channels/instances';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.ChannelApi = ChannelApi;
var ConfigurationApiApiKeys;
(function (ConfigurationApiApiKeys) {
})(ConfigurationApiApiKeys = exports.ConfigurationApiApiKeys || (exports.ConfigurationApiApiKeys = {}));
class ConfigurationApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[ConfigurationApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    configurationDelete(key) {
        const localVarPath = this.basePath + '/system/configuration/{key}'
            .replace('{' + 'key' + '}', String(key));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (key === null || key === undefined) {
            throw new Error('Required parameter key was null or undefined when calling configurationDelete.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    configurationGet(key) {
        const localVarPath = this.basePath + '/system/configuration/{key}'
            .replace('{' + 'key' + '}', String(key));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (key === null || key === undefined) {
            throw new Error('Required parameter key was null or undefined when calling configurationGet.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    configurationList() {
        const localVarPath = this.basePath + '/system/configuration';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.ConfigurationApi = ConfigurationApi;
var DataServerApiApiKeys;
(function (DataServerApiApiKeys) {
})(DataServerApiApiKeys = exports.DataServerApiApiKeys || (exports.DataServerApiApiKeys = {}));
class DataServerApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[DataServerApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    dataServerCreateEnumerationSet(webId, enumerationSet) {
        const localVarPath = this.basePath + '/dataservers/{webId}/enumerationsets'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling dataServerCreateEnumerationSet.');
        }
        if (enumerationSet === null || enumerationSet === undefined) {
            throw new Error('Required parameter enumerationSet was null or undefined when calling dataServerCreateEnumerationSet.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: enumerationSet,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    dataServerCreatePoint(webId, pointDTO) {
        const localVarPath = this.basePath + '/dataservers/{webId}/points'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling dataServerCreatePoint.');
        }
        if (pointDTO === null || pointDTO === undefined) {
            throw new Error('Required parameter pointDTO was null or undefined when calling dataServerCreatePoint.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: pointDTO,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    dataServerGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/dataservers/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling dataServerGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    dataServerGetByName(name, selectedFields) {
        const localVarPath = this.basePath + '/dataservers#name';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling dataServerGetByName.');
        }
        if (name !== undefined) {
            queryParameters['name'] = name;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    dataServerGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/dataservers#path';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling dataServerGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    dataServerGetEnumerationSets(webId, selectedFields) {
        const localVarPath = this.basePath + '/dataservers/{webId}/enumerationsets'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling dataServerGetEnumerationSets.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    dataServerGetPoints(webId, maxCount, nameFilter, selectedFields, startIndex) {
        const localVarPath = this.basePath + '/dataservers/{webId}/points'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling dataServerGetPoints.');
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (startIndex !== undefined) {
            queryParameters['startIndex'] = startIndex;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    dataServerList(selectedFields) {
        const localVarPath = this.basePath + '/dataservers';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.DataServerApi = DataServerApi;
var ElementApiApiKeys;
(function (ElementApiApiKeys) {
})(ElementApiApiKeys = exports.ElementApiApiKeys || (exports.ElementApiApiKeys = {}));
class ElementApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[ElementApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    elementAddReferencedElement(webId, referencedElementWebId, referenceType) {
        const localVarPath = this.basePath + '/elements/{webId}/referencedelements'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementAddReferencedElement.');
        }
        if (referencedElementWebId === null || referencedElementWebId === undefined) {
            throw new Error('Required parameter referencedElementWebId was null or undefined when calling elementAddReferencedElement.');
        }
        if (referencedElementWebId !== undefined) {
            queryParameters['referencedElementWebId'] = referencedElementWebId;
        }
        if (referenceType !== undefined) {
            queryParameters['referenceType'] = referenceType;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementCreateAnalysis(webId, analysis) {
        const localVarPath = this.basePath + '/elements/{webId}/analyses'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementCreateAnalysis.');
        }
        if (analysis === null || analysis === undefined) {
            throw new Error('Required parameter analysis was null or undefined when calling elementCreateAnalysis.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: analysis,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementCreateAttribute(webId, attribute) {
        const localVarPath = this.basePath + '/elements/{webId}/attributes'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementCreateAttribute.');
        }
        if (attribute === null || attribute === undefined) {
            throw new Error('Required parameter attribute was null or undefined when calling elementCreateAttribute.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: attribute,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementCreateConfig(webId, includeChildElements) {
        const localVarPath = this.basePath + '/elements/{webId}/config'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementCreateConfig.');
        }
        if (includeChildElements !== undefined) {
            queryParameters['includeChildElements'] = includeChildElements;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementCreateElement(webId, element) {
        const localVarPath = this.basePath + '/elements/{webId}/elements'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementCreateElement.');
        }
        if (element === null || element === undefined) {
            throw new Error('Required parameter element was null or undefined when calling elementCreateElement.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: element,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementCreateSearchByAttribute() {
        const localVarPath = this.basePath + '/elements/searchbyattribute';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementCreateSecurityEntry(webId, securityEntry, applyToChildren) {
        const localVarPath = this.basePath + '/elements/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementCreateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling elementCreateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementDelete(webId) {
        const localVarPath = this.basePath + '/elements/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementDelete.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementDeleteSecurityEntry(name, webId, applyToChildren) {
        const localVarPath = this.basePath + '/elements/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling elementDeleteSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementDeleteSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementExecuteSearchByAttribute(searchId, categoryName, descriptionFilter, maxCount, nameFilter, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex) {
        const localVarPath = this.basePath + '/elements/searchbyattribute/{searchId}'
            .replace('{' + 'searchId' + '}', String(searchId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (searchId === null || searchId === undefined) {
            throw new Error('Required parameter searchId was null or undefined when calling elementExecuteSearchByAttribute.');
        }
        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }
        if (descriptionFilter !== undefined) {
            queryParameters['descriptionFilter'] = descriptionFilter;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (startIndex !== undefined) {
            queryParameters['startIndex'] = startIndex;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementFindElementAttributes(webId, attributeCategory, attributeDescriptionFilter, attributeNameFilter, attributeType, elementCategory, elementDescriptionFilter, elementNameFilter, elementTemplate, elementType, maxCount, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex) {
        const localVarPath = this.basePath + '/elements/{webId}/elementattributes'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementFindElementAttributes.');
        }
        if (attributeCategory !== undefined) {
            queryParameters['attributeCategory'] = attributeCategory;
        }
        if (attributeDescriptionFilter !== undefined) {
            queryParameters['attributeDescriptionFilter'] = attributeDescriptionFilter;
        }
        if (attributeNameFilter !== undefined) {
            queryParameters['attributeNameFilter'] = attributeNameFilter;
        }
        if (attributeType !== undefined) {
            queryParameters['attributeType'] = attributeType;
        }
        if (elementCategory !== undefined) {
            queryParameters['elementCategory'] = elementCategory;
        }
        if (elementDescriptionFilter !== undefined) {
            queryParameters['elementDescriptionFilter'] = elementDescriptionFilter;
        }
        if (elementNameFilter !== undefined) {
            queryParameters['elementNameFilter'] = elementNameFilter;
        }
        if (elementTemplate !== undefined) {
            queryParameters['elementTemplate'] = elementTemplate;
        }
        if (elementType !== undefined) {
            queryParameters['elementType'] = elementType;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (startIndex !== undefined) {
            queryParameters['startIndex'] = startIndex;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/elements/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementGetAnalyses(webId, maxCount, selectedFields, sortField, sortOrder, startIndex) {
        const localVarPath = this.basePath + '/elements/{webId}/analyses'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementGetAnalyses.');
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (startIndex !== undefined) {
            queryParameters['startIndex'] = startIndex;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementGetAttributes(webId, categoryName, maxCount, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startIndex, templateName, valueType) {
        const localVarPath = this.basePath + '/elements/{webId}/attributes'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementGetAttributes.');
        }
        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (showExcluded !== undefined) {
            queryParameters['showExcluded'] = showExcluded;
        }
        if (showHidden !== undefined) {
            queryParameters['showHidden'] = showHidden;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (startIndex !== undefined) {
            queryParameters['startIndex'] = startIndex;
        }
        if (templateName !== undefined) {
            queryParameters['templateName'] = templateName;
        }
        if (valueType !== undefined) {
            queryParameters['valueType'] = valueType;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/elements';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling elementGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementGetCategories(webId, selectedFields) {
        const localVarPath = this.basePath + '/elements/{webId}/categories'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementGetCategories.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementGetElements(webId, categoryName, descriptionFilter, elementType, maxCount, nameFilter, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, templateName) {
        const localVarPath = this.basePath + '/elements/{webId}/elements'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementGetElements.');
        }
        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }
        if (descriptionFilter !== undefined) {
            queryParameters['descriptionFilter'] = descriptionFilter;
        }
        if (elementType !== undefined) {
            queryParameters['elementType'] = elementType;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (startIndex !== undefined) {
            queryParameters['startIndex'] = startIndex;
        }
        if (templateName !== undefined) {
            queryParameters['templateName'] = templateName;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementGetEventFrames(webId, canBeAcknowledged, categoryName, endTime, isAcknowledged, maxCount, nameFilter, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime, templateName) {
        const localVarPath = this.basePath + '/elements/{webId}/eventframes'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementGetEventFrames.');
        }
        if (canBeAcknowledged !== undefined) {
            queryParameters['canBeAcknowledged'] = canBeAcknowledged;
        }
        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }
        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }
        if (isAcknowledged !== undefined) {
            queryParameters['isAcknowledged'] = isAcknowledged;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (searchMode !== undefined) {
            queryParameters['searchMode'] = searchMode;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (severity !== undefined) {
            queryParameters['severity'] = severity;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (startIndex !== undefined) {
            queryParameters['startIndex'] = startIndex;
        }
        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }
        if (templateName !== undefined) {
            queryParameters['templateName'] = templateName;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementGetMultiple(asParallel, includeMode, path, selectedFields, webId) {
        const localVarPath = this.basePath + '/elements/multiple';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (asParallel !== undefined) {
            queryParameters['asParallel'] = asParallel;
        }
        if (includeMode !== undefined) {
            queryParameters['includeMode'] = includeMode;
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (webId !== undefined) {
            queryParameters['webId'] = webId;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementGetReferencedElements(webId, categoryName, descriptionFilter, elementType, maxCount, nameFilter, selectedFields, sortField, sortOrder, startIndex, templateName) {
        const localVarPath = this.basePath + '/elements/{webId}/referencedelements'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementGetReferencedElements.');
        }
        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }
        if (descriptionFilter !== undefined) {
            queryParameters['descriptionFilter'] = descriptionFilter;
        }
        if (elementType !== undefined) {
            queryParameters['elementType'] = elementType;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (startIndex !== undefined) {
            queryParameters['startIndex'] = startIndex;
        }
        if (templateName !== undefined) {
            queryParameters['templateName'] = templateName;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementGetSecurity(webId, userIdentity, forceRefresh, selectedFields) {
        const localVarPath = this.basePath + '/elements/{webId}/security'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementGetSecurity.');
        }
        if (userIdentity === null || userIdentity === undefined) {
            throw new Error('Required parameter userIdentity was null or undefined when calling elementGetSecurity.');
        }
        if (userIdentity !== undefined) {
            queryParameters['userIdentity'] = userIdentity;
        }
        if (forceRefresh !== undefined) {
            queryParameters['forceRefresh'] = forceRefresh;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementGetSecurityEntries(webId, nameFilter, selectedFields) {
        const localVarPath = this.basePath + '/elements/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementGetSecurityEntries.');
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementGetSecurityEntryByName(name, webId, selectedFields) {
        const localVarPath = this.basePath + '/elements/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling elementGetSecurityEntryByName.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementGetSecurityEntryByName.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementRemoveReferencedElement(webId, referencedElementWebId) {
        const localVarPath = this.basePath + '/elements/{webId}/referencedelements'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementRemoveReferencedElement.');
        }
        if (referencedElementWebId === null || referencedElementWebId === undefined) {
            throw new Error('Required parameter referencedElementWebId was null or undefined when calling elementRemoveReferencedElement.');
        }
        if (referencedElementWebId !== undefined) {
            queryParameters['referencedElementWebId'] = referencedElementWebId;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementUpdate(webId, element) {
        const localVarPath = this.basePath + '/elements/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementUpdate.');
        }
        if (element === null || element === undefined) {
            throw new Error('Required parameter element was null or undefined when calling elementUpdate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: element,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementUpdateSecurityEntry(name, webId, securityEntry, applyToChildren) {
        const localVarPath = this.basePath + '/elements/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling elementUpdateSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementUpdateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling elementUpdateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.ElementApi = ElementApi;
var ElementCategoryApiApiKeys;
(function (ElementCategoryApiApiKeys) {
})(ElementCategoryApiApiKeys = exports.ElementCategoryApiApiKeys || (exports.ElementCategoryApiApiKeys = {}));
class ElementCategoryApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[ElementCategoryApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    elementCategoryCreateSecurityEntry(webId, securityEntry, applyToChildren) {
        const localVarPath = this.basePath + '/elementcategories/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementCategoryCreateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling elementCategoryCreateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementCategoryDelete(webId) {
        const localVarPath = this.basePath + '/elementcategories/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementCategoryDelete.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementCategoryDeleteSecurityEntry(name, webId, applyToChildren) {
        const localVarPath = this.basePath + '/elementcategories/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling elementCategoryDeleteSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementCategoryDeleteSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementCategoryGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/elementcategories/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementCategoryGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementCategoryGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/elementcategories';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling elementCategoryGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementCategoryGetSecurity(webId, userIdentity, forceRefresh, selectedFields) {
        const localVarPath = this.basePath + '/elementcategories/{webId}/security'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementCategoryGetSecurity.');
        }
        if (userIdentity === null || userIdentity === undefined) {
            throw new Error('Required parameter userIdentity was null or undefined when calling elementCategoryGetSecurity.');
        }
        if (userIdentity !== undefined) {
            queryParameters['userIdentity'] = userIdentity;
        }
        if (forceRefresh !== undefined) {
            queryParameters['forceRefresh'] = forceRefresh;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementCategoryGetSecurityEntries(webId, nameFilter, selectedFields) {
        const localVarPath = this.basePath + '/elementcategories/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementCategoryGetSecurityEntries.');
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementCategoryGetSecurityEntryByName(name, webId, selectedFields) {
        const localVarPath = this.basePath + '/elementcategories/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling elementCategoryGetSecurityEntryByName.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementCategoryGetSecurityEntryByName.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementCategoryUpdate(webId, elementCategory) {
        const localVarPath = this.basePath + '/elementcategories/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementCategoryUpdate.');
        }
        if (elementCategory === null || elementCategory === undefined) {
            throw new Error('Required parameter elementCategory was null or undefined when calling elementCategoryUpdate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: elementCategory,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementCategoryUpdateSecurityEntry(name, webId, securityEntry, applyToChildren) {
        const localVarPath = this.basePath + '/elementcategories/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling elementCategoryUpdateSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementCategoryUpdateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling elementCategoryUpdateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.ElementCategoryApi = ElementCategoryApi;
var ElementTemplateApiApiKeys;
(function (ElementTemplateApiApiKeys) {
})(ElementTemplateApiApiKeys = exports.ElementTemplateApiApiKeys || (exports.ElementTemplateApiApiKeys = {}));
class ElementTemplateApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[ElementTemplateApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    elementTemplateCreateAttributeTemplate(webId, template) {
        const localVarPath = this.basePath + '/elementtemplates/{webId}/attributetemplates'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementTemplateCreateAttributeTemplate.');
        }
        if (template === null || template === undefined) {
            throw new Error('Required parameter template was null or undefined when calling elementTemplateCreateAttributeTemplate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: template,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementTemplateCreateSecurityEntry(webId, securityEntry, applyToChildren) {
        const localVarPath = this.basePath + '/elementtemplates/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementTemplateCreateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling elementTemplateCreateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementTemplateDelete(webId) {
        const localVarPath = this.basePath + '/elementtemplates/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementTemplateDelete.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementTemplateDeleteSecurityEntry(name, webId, applyToChildren) {
        const localVarPath = this.basePath + '/elementtemplates/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling elementTemplateDeleteSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementTemplateDeleteSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementTemplateGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/elementtemplates/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementTemplateGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementTemplateGetAnalysisTemplates(webId, selectedFields) {
        const localVarPath = this.basePath + '/elementtemplates/{webId}/analysistemplates'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementTemplateGetAnalysisTemplates.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementTemplateGetAttributeTemplates(webId, selectedFields, showInherited) {
        const localVarPath = this.basePath + '/elementtemplates/{webId}/attributetemplates'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementTemplateGetAttributeTemplates.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (showInherited !== undefined) {
            queryParameters['showInherited'] = showInherited;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementTemplateGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/elementtemplates';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling elementTemplateGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementTemplateGetCategories(webId, selectedFields, showInherited) {
        const localVarPath = this.basePath + '/elementtemplates/{webId}/categories'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementTemplateGetCategories.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (showInherited !== undefined) {
            queryParameters['showInherited'] = showInherited;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementTemplateGetSecurity(webId, userIdentity, forceRefresh, selectedFields) {
        const localVarPath = this.basePath + '/elementtemplates/{webId}/security'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementTemplateGetSecurity.');
        }
        if (userIdentity === null || userIdentity === undefined) {
            throw new Error('Required parameter userIdentity was null or undefined when calling elementTemplateGetSecurity.');
        }
        if (userIdentity !== undefined) {
            queryParameters['userIdentity'] = userIdentity;
        }
        if (forceRefresh !== undefined) {
            queryParameters['forceRefresh'] = forceRefresh;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementTemplateGetSecurityEntries(webId, nameFilter, selectedFields) {
        const localVarPath = this.basePath + '/elementtemplates/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementTemplateGetSecurityEntries.');
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementTemplateGetSecurityEntryByName(name, webId, selectedFields) {
        const localVarPath = this.basePath + '/elementtemplates/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling elementTemplateGetSecurityEntryByName.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementTemplateGetSecurityEntryByName.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementTemplateUpdate(webId, template) {
        const localVarPath = this.basePath + '/elementtemplates/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementTemplateUpdate.');
        }
        if (template === null || template === undefined) {
            throw new Error('Required parameter template was null or undefined when calling elementTemplateUpdate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: template,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    elementTemplateUpdateSecurityEntry(name, webId, securityEntry, applyToChildren) {
        const localVarPath = this.basePath + '/elementtemplates/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling elementTemplateUpdateSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling elementTemplateUpdateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling elementTemplateUpdateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.ElementTemplateApi = ElementTemplateApi;
var EnumerationSetApiApiKeys;
(function (EnumerationSetApiApiKeys) {
})(EnumerationSetApiApiKeys = exports.EnumerationSetApiApiKeys || (exports.EnumerationSetApiApiKeys = {}));
class EnumerationSetApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[EnumerationSetApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    enumerationSetCreateSecurityEntry(webId, securityEntry, applyToChildren) {
        const localVarPath = this.basePath + '/enumerationsets/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling enumerationSetCreateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling enumerationSetCreateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    enumerationSetCreateValue(webId, enumerationValue) {
        const localVarPath = this.basePath + '/enumerationsets/{webId}/enumerationvalues'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling enumerationSetCreateValue.');
        }
        if (enumerationValue === null || enumerationValue === undefined) {
            throw new Error('Required parameter enumerationValue was null or undefined when calling enumerationSetCreateValue.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: enumerationValue,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    enumerationSetDelete(webId) {
        const localVarPath = this.basePath + '/enumerationsets/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling enumerationSetDelete.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    enumerationSetDeleteSecurityEntry(name, webId, applyToChildren) {
        const localVarPath = this.basePath + '/enumerationsets/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling enumerationSetDeleteSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling enumerationSetDeleteSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    enumerationSetGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/enumerationsets/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling enumerationSetGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    enumerationSetGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/enumerationsets';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling enumerationSetGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    enumerationSetGetSecurity(webId, userIdentity, forceRefresh, selectedFields) {
        const localVarPath = this.basePath + '/enumerationsets/{webId}/security'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling enumerationSetGetSecurity.');
        }
        if (userIdentity === null || userIdentity === undefined) {
            throw new Error('Required parameter userIdentity was null or undefined when calling enumerationSetGetSecurity.');
        }
        if (userIdentity !== undefined) {
            queryParameters['userIdentity'] = userIdentity;
        }
        if (forceRefresh !== undefined) {
            queryParameters['forceRefresh'] = forceRefresh;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    enumerationSetGetSecurityEntries(webId, nameFilter, selectedFields) {
        const localVarPath = this.basePath + '/enumerationsets/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling enumerationSetGetSecurityEntries.');
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    enumerationSetGetSecurityEntryByName(name, webId, selectedFields) {
        const localVarPath = this.basePath + '/enumerationsets/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling enumerationSetGetSecurityEntryByName.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling enumerationSetGetSecurityEntryByName.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    enumerationSetGetValues(webId, selectedFields) {
        const localVarPath = this.basePath + '/enumerationsets/{webId}/enumerationvalues'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling enumerationSetGetValues.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    enumerationSetUpdate(webId, enumerationSet) {
        const localVarPath = this.basePath + '/enumerationsets/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling enumerationSetUpdate.');
        }
        if (enumerationSet === null || enumerationSet === undefined) {
            throw new Error('Required parameter enumerationSet was null or undefined when calling enumerationSetUpdate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: enumerationSet,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    enumerationSetUpdateSecurityEntry(name, webId, securityEntry, applyToChildren) {
        const localVarPath = this.basePath + '/enumerationsets/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling enumerationSetUpdateSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling enumerationSetUpdateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling enumerationSetUpdateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.EnumerationSetApi = EnumerationSetApi;
var EnumerationValueApiApiKeys;
(function (EnumerationValueApiApiKeys) {
})(EnumerationValueApiApiKeys = exports.EnumerationValueApiApiKeys || (exports.EnumerationValueApiApiKeys = {}));
class EnumerationValueApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[EnumerationValueApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    enumerationValueDeleteEnumerationValue(webId) {
        const localVarPath = this.basePath + '/enumerationvalues/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling enumerationValueDeleteEnumerationValue.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    enumerationValueGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/enumerationvalues/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling enumerationValueGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    enumerationValueGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/enumerationvalues';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling enumerationValueGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    enumerationValueUpdateEnumerationValue(webId, enumerationValue) {
        const localVarPath = this.basePath + '/enumerationvalues/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling enumerationValueUpdateEnumerationValue.');
        }
        if (enumerationValue === null || enumerationValue === undefined) {
            throw new Error('Required parameter enumerationValue was null or undefined when calling enumerationValueUpdateEnumerationValue.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: enumerationValue,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.EnumerationValueApi = EnumerationValueApi;
var EventFrameApiApiKeys;
(function (EventFrameApiApiKeys) {
})(EventFrameApiApiKeys = exports.EventFrameApiApiKeys || (exports.EventFrameApiApiKeys = {}));
class EventFrameApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[EventFrameApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    eventFrameAcknowledge(webId) {
        const localVarPath = this.basePath + '/eventframes/{webId}/acknowledge'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameAcknowledge.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameCaptureValues(webId) {
        const localVarPath = this.basePath + '/eventframes/{webId}/attributes/capture'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameCaptureValues.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameCreateAnnotation(webId, annotation) {
        const localVarPath = this.basePath + '/eventframes/{webId}/annotations'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameCreateAnnotation.');
        }
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling eventFrameCreateAnnotation.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: annotation,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameCreateAttribute(webId, attribute) {
        const localVarPath = this.basePath + '/eventframes/{webId}/attributes'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameCreateAttribute.');
        }
        if (attribute === null || attribute === undefined) {
            throw new Error('Required parameter attribute was null or undefined when calling eventFrameCreateAttribute.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: attribute,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameCreateConfig(webId, includeChildElements) {
        const localVarPath = this.basePath + '/eventframes/{webId}/config'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameCreateConfig.');
        }
        if (includeChildElements !== undefined) {
            queryParameters['includeChildElements'] = includeChildElements;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameCreateEventFrame(webId, eventFrame) {
        const localVarPath = this.basePath + '/eventframes/{webId}/eventframes'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameCreateEventFrame.');
        }
        if (eventFrame === null || eventFrame === undefined) {
            throw new Error('Required parameter eventFrame was null or undefined when calling eventFrameCreateEventFrame.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: eventFrame,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameCreateSearchByAttribute() {
        const localVarPath = this.basePath + '/eventframes/searchbyattribute';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameCreateSecurityEntry(webId, securityEntry, applyToChildren) {
        const localVarPath = this.basePath + '/eventframes/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameCreateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling eventFrameCreateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameDelete(webId) {
        const localVarPath = this.basePath + '/eventframes/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameDelete.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameDeleteAnnotation(id, webId) {
        const localVarPath = this.basePath + '/eventframes/{webId}/annotations/{id}'
            .replace('{' + 'id' + '}', String(id))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling eventFrameDeleteAnnotation.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameDeleteAnnotation.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameDeleteSecurityEntry(name, webId, applyToChildren) {
        const localVarPath = this.basePath + '/eventframes/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling eventFrameDeleteSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameDeleteSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameExecuteSearchByAttribute(searchId, canBeAcknowledged, endTime, isAcknowledged, maxCount, nameFilter, referencedElementNameFilter, searchFullHierarchy, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime) {
        const localVarPath = this.basePath + '/eventframes/searchbyattribute/{searchId}'
            .replace('{' + 'searchId' + '}', String(searchId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (searchId === null || searchId === undefined) {
            throw new Error('Required parameter searchId was null or undefined when calling eventFrameExecuteSearchByAttribute.');
        }
        if (canBeAcknowledged !== undefined) {
            queryParameters['canBeAcknowledged'] = canBeAcknowledged;
        }
        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }
        if (isAcknowledged !== undefined) {
            queryParameters['isAcknowledged'] = isAcknowledged;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (referencedElementNameFilter !== undefined) {
            queryParameters['referencedElementNameFilter'] = referencedElementNameFilter;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (searchMode !== undefined) {
            queryParameters['searchMode'] = searchMode;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (severity !== undefined) {
            queryParameters['severity'] = severity;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (startIndex !== undefined) {
            queryParameters['startIndex'] = startIndex;
        }
        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameFindEventFrameAttributes(webId, attributeCategory, attributeDescriptionFilter, attributeNameFilter, attributeType, endTime, eventFrameCategory, eventFrameDescriptionFilter, eventFrameNameFilter, eventFrameTemplate, maxCount, referencedElementNameFilter, searchFullHierarchy, searchMode, selectedFields, sortField, sortOrder, startIndex, startTime) {
        const localVarPath = this.basePath + '/eventframes/{webId}/eventframeattributes'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameFindEventFrameAttributes.');
        }
        if (attributeCategory !== undefined) {
            queryParameters['attributeCategory'] = attributeCategory;
        }
        if (attributeDescriptionFilter !== undefined) {
            queryParameters['attributeDescriptionFilter'] = attributeDescriptionFilter;
        }
        if (attributeNameFilter !== undefined) {
            queryParameters['attributeNameFilter'] = attributeNameFilter;
        }
        if (attributeType !== undefined) {
            queryParameters['attributeType'] = attributeType;
        }
        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }
        if (eventFrameCategory !== undefined) {
            queryParameters['eventFrameCategory'] = eventFrameCategory;
        }
        if (eventFrameDescriptionFilter !== undefined) {
            queryParameters['eventFrameDescriptionFilter'] = eventFrameDescriptionFilter;
        }
        if (eventFrameNameFilter !== undefined) {
            queryParameters['eventFrameNameFilter'] = eventFrameNameFilter;
        }
        if (eventFrameTemplate !== undefined) {
            queryParameters['eventFrameTemplate'] = eventFrameTemplate;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (referencedElementNameFilter !== undefined) {
            queryParameters['referencedElementNameFilter'] = referencedElementNameFilter;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (searchMode !== undefined) {
            queryParameters['searchMode'] = searchMode;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (startIndex !== undefined) {
            queryParameters['startIndex'] = startIndex;
        }
        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/eventframes/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameGetAnnotationById(id, webId, selectedFields) {
        const localVarPath = this.basePath + '/eventframes/{webId}/annotations/{id}'
            .replace('{' + 'id' + '}', String(id))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling eventFrameGetAnnotationById.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameGetAnnotationById.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameGetAnnotations(webId, selectedFields) {
        const localVarPath = this.basePath + '/eventframes/{webId}/annotations'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameGetAnnotations.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameGetAttributes(webId, categoryName, maxCount, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startIndex, templateName, valueType) {
        const localVarPath = this.basePath + '/eventframes/{webId}/attributes'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameGetAttributes.');
        }
        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (showExcluded !== undefined) {
            queryParameters['showExcluded'] = showExcluded;
        }
        if (showHidden !== undefined) {
            queryParameters['showHidden'] = showHidden;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (startIndex !== undefined) {
            queryParameters['startIndex'] = startIndex;
        }
        if (templateName !== undefined) {
            queryParameters['templateName'] = templateName;
        }
        if (valueType !== undefined) {
            queryParameters['valueType'] = valueType;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/eventframes';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling eventFrameGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameGetCategories(webId, selectedFields) {
        const localVarPath = this.basePath + '/eventframes/{webId}/categories'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameGetCategories.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameGetEventFrames(webId, canBeAcknowledged, categoryName, endTime, isAcknowledged, maxCount, nameFilter, referencedElementNameFilter, referencedElementTemplateName, searchFullHierarchy, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime, templateName) {
        const localVarPath = this.basePath + '/eventframes/{webId}/eventframes'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameGetEventFrames.');
        }
        if (canBeAcknowledged !== undefined) {
            queryParameters['canBeAcknowledged'] = canBeAcknowledged;
        }
        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }
        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }
        if (isAcknowledged !== undefined) {
            queryParameters['isAcknowledged'] = isAcknowledged;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (referencedElementNameFilter !== undefined) {
            queryParameters['referencedElementNameFilter'] = referencedElementNameFilter;
        }
        if (referencedElementTemplateName !== undefined) {
            queryParameters['referencedElementTemplateName'] = referencedElementTemplateName;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (searchMode !== undefined) {
            queryParameters['searchMode'] = searchMode;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (severity !== undefined) {
            queryParameters['severity'] = severity;
        }
        if (sortField !== undefined) {
            queryParameters['sortField'] = sortField;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (startIndex !== undefined) {
            queryParameters['startIndex'] = startIndex;
        }
        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }
        if (templateName !== undefined) {
            queryParameters['templateName'] = templateName;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameGetMultiple(asParallel, includeMode, path, selectedFields, webId) {
        const localVarPath = this.basePath + '/eventframes/multiple';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (asParallel !== undefined) {
            queryParameters['asParallel'] = asParallel;
        }
        if (includeMode !== undefined) {
            queryParameters['includeMode'] = includeMode;
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (webId !== undefined) {
            queryParameters['webId'] = webId;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameGetReferencedElements(webId, selectedFields) {
        const localVarPath = this.basePath + '/eventframes/{webId}/referencedelements'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameGetReferencedElements.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameGetSecurity(webId, userIdentity, forceRefresh, selectedFields) {
        const localVarPath = this.basePath + '/eventframes/{webId}/security'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameGetSecurity.');
        }
        if (userIdentity === null || userIdentity === undefined) {
            throw new Error('Required parameter userIdentity was null or undefined when calling eventFrameGetSecurity.');
        }
        if (userIdentity !== undefined) {
            queryParameters['userIdentity'] = userIdentity;
        }
        if (forceRefresh !== undefined) {
            queryParameters['forceRefresh'] = forceRefresh;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameGetSecurityEntries(webId, nameFilter, selectedFields) {
        const localVarPath = this.basePath + '/eventframes/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameGetSecurityEntries.');
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameGetSecurityEntryByName(name, webId, selectedFields) {
        const localVarPath = this.basePath + '/eventframes/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling eventFrameGetSecurityEntryByName.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameGetSecurityEntryByName.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameUpdate(webId, eventFrame) {
        const localVarPath = this.basePath + '/eventframes/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameUpdate.');
        }
        if (eventFrame === null || eventFrame === undefined) {
            throw new Error('Required parameter eventFrame was null or undefined when calling eventFrameUpdate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: eventFrame,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameUpdateAnnotation(id, webId, annotation) {
        const localVarPath = this.basePath + '/eventframes/{webId}/annotations/{id}'
            .replace('{' + 'id' + '}', String(id))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling eventFrameUpdateAnnotation.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameUpdateAnnotation.');
        }
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling eventFrameUpdateAnnotation.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: annotation,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    eventFrameUpdateSecurityEntry(name, webId, securityEntry, applyToChildren) {
        const localVarPath = this.basePath + '/eventframes/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling eventFrameUpdateSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling eventFrameUpdateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling eventFrameUpdateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.EventFrameApi = EventFrameApi;
var HomeApiApiKeys;
(function (HomeApiApiKeys) {
})(HomeApiApiKeys = exports.HomeApiApiKeys || (exports.HomeApiApiKeys = {}));
class HomeApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[HomeApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    homeGet() {
        const localVarPath = this.basePath + '/';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.HomeApi = HomeApi;
var PointApiApiKeys;
(function (PointApiApiKeys) {
})(PointApiApiKeys = exports.PointApiApiKeys || (exports.PointApiApiKeys = {}));
class PointApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[PointApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    pointDelete(webId) {
        const localVarPath = this.basePath + '/points/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling pointDelete.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    pointGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/points/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling pointGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    pointGetAttributeByName(name, webId, selectedFields) {
        const localVarPath = this.basePath + '/points/{webId}/attributes/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling pointGetAttributeByName.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling pointGetAttributeByName.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    pointGetAttributes(webId, name, nameFilter, selectedFields) {
        const localVarPath = this.basePath + '/points/{webId}/attributes'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling pointGetAttributes.');
        }
        if (name !== undefined) {
            queryParameters['name'] = name;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    pointGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/points';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling pointGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    pointGetMultiple(asParallel, includeMode, path, selectedFields, webId) {
        const localVarPath = this.basePath + '/points/multiple';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (asParallel !== undefined) {
            queryParameters['asParallel'] = asParallel;
        }
        if (includeMode !== undefined) {
            queryParameters['includeMode'] = includeMode;
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (webId !== undefined) {
            queryParameters['webId'] = webId;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    pointUpdate(webId, pointDTO) {
        const localVarPath = this.basePath + '/points/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling pointUpdate.');
        }
        if (pointDTO === null || pointDTO === undefined) {
            throw new Error('Required parameter pointDTO was null or undefined when calling pointUpdate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: pointDTO,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.PointApi = PointApi;
var SecurityIdentityApiApiKeys;
(function (SecurityIdentityApiApiKeys) {
})(SecurityIdentityApiApiKeys = exports.SecurityIdentityApiApiKeys || (exports.SecurityIdentityApiApiKeys = {}));
class SecurityIdentityApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[SecurityIdentityApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    securityIdentityDelete(webId) {
        const localVarPath = this.basePath + '/securityidentities/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling securityIdentityDelete.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    securityIdentityGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/securityidentities/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling securityIdentityGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    securityIdentityGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/securityidentities';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling securityIdentityGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    securityIdentityGetSecurity(webId, userIdentity, forceRefresh, selectedFields) {
        const localVarPath = this.basePath + '/securityidentities/{webId}/security'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling securityIdentityGetSecurity.');
        }
        if (userIdentity === null || userIdentity === undefined) {
            throw new Error('Required parameter userIdentity was null or undefined when calling securityIdentityGetSecurity.');
        }
        if (userIdentity !== undefined) {
            queryParameters['userIdentity'] = userIdentity;
        }
        if (forceRefresh !== undefined) {
            queryParameters['forceRefresh'] = forceRefresh;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    securityIdentityGetSecurityEntries(webId, nameFilter, selectedFields) {
        const localVarPath = this.basePath + '/securityidentities/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling securityIdentityGetSecurityEntries.');
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    securityIdentityGetSecurityEntryByName(name, webId, selectedFields) {
        const localVarPath = this.basePath + '/securityidentities/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling securityIdentityGetSecurityEntryByName.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling securityIdentityGetSecurityEntryByName.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    securityIdentityGetSecurityMappings(webId, selectedFields) {
        const localVarPath = this.basePath + '/securityidentities/{webId}/securitymappings'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling securityIdentityGetSecurityMappings.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    securityIdentityUpdate(webId, securityIdentity) {
        const localVarPath = this.basePath + '/securityidentities/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling securityIdentityUpdate.');
        }
        if (securityIdentity === null || securityIdentity === undefined) {
            throw new Error('Required parameter securityIdentity was null or undefined when calling securityIdentityUpdate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityIdentity,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.SecurityIdentityApi = SecurityIdentityApi;
var SecurityMappingApiApiKeys;
(function (SecurityMappingApiApiKeys) {
})(SecurityMappingApiApiKeys = exports.SecurityMappingApiApiKeys || (exports.SecurityMappingApiApiKeys = {}));
class SecurityMappingApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[SecurityMappingApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    securityMappingDelete(webId) {
        const localVarPath = this.basePath + '/securitymappings/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling securityMappingDelete.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    securityMappingGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/securitymappings/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling securityMappingGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    securityMappingGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/securitymappings';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling securityMappingGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    securityMappingGetSecurity(webId, userIdentity, forceRefresh, selectedFields) {
        const localVarPath = this.basePath + '/securitymappings/{webId}/security'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling securityMappingGetSecurity.');
        }
        if (userIdentity === null || userIdentity === undefined) {
            throw new Error('Required parameter userIdentity was null or undefined when calling securityMappingGetSecurity.');
        }
        if (userIdentity !== undefined) {
            queryParameters['userIdentity'] = userIdentity;
        }
        if (forceRefresh !== undefined) {
            queryParameters['forceRefresh'] = forceRefresh;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    securityMappingGetSecurityEntries(webId, nameFilter, selectedFields) {
        const localVarPath = this.basePath + '/securitymappings/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling securityMappingGetSecurityEntries.');
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    securityMappingGetSecurityEntryByName(name, webId, selectedFields) {
        const localVarPath = this.basePath + '/securitymappings/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling securityMappingGetSecurityEntryByName.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling securityMappingGetSecurityEntryByName.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    securityMappingUpdate(webId, securityMapping) {
        const localVarPath = this.basePath + '/securitymappings/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling securityMappingUpdate.');
        }
        if (securityMapping === null || securityMapping === undefined) {
            throw new Error('Required parameter securityMapping was null or undefined when calling securityMappingUpdate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityMapping,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.SecurityMappingApi = SecurityMappingApi;
var StreamApiApiKeys;
(function (StreamApiApiKeys) {
})(StreamApiApiKeys = exports.StreamApiApiKeys || (exports.StreamApiApiKeys = {}));
class StreamApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[StreamApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    streamGetChannel(webId, includeInitialValues) {
        const localVarPath = this.basePath + '/streams/{webId}/channel'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamGetChannel.');
        }
        if (includeInitialValues !== undefined) {
            queryParameters['includeInitialValues'] = includeInitialValues;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamGetEnd(webId, desiredUnits, selectedFields) {
        const localVarPath = this.basePath + '/streams/{webId}/end'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamGetEnd.');
        }
        if (desiredUnits !== undefined) {
            queryParameters['desiredUnits'] = desiredUnits;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamGetInterpolated(webId, desiredUnits, endTime, filterExpression, includeFilteredValues, interval, selectedFields, startTime, timeZone) {
        const localVarPath = this.basePath + '/streams/{webId}/interpolated'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamGetInterpolated.');
        }
        if (desiredUnits !== undefined) {
            queryParameters['desiredUnits'] = desiredUnits;
        }
        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }
        if (filterExpression !== undefined) {
            queryParameters['filterExpression'] = filterExpression;
        }
        if (includeFilteredValues !== undefined) {
            queryParameters['includeFilteredValues'] = includeFilteredValues;
        }
        if (interval !== undefined) {
            queryParameters['interval'] = interval;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamGetInterpolatedAtTimes(webId, desiredUnits, filterExpression, includeFilteredValues, selectedFields, sortOrder, time, timeZone) {
        const localVarPath = this.basePath + '/streams/{webId}/interpolatedattimes'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamGetInterpolatedAtTimes.');
        }
        if (desiredUnits !== undefined) {
            queryParameters['desiredUnits'] = desiredUnits;
        }
        if (filterExpression !== undefined) {
            queryParameters['filterExpression'] = filterExpression;
        }
        if (includeFilteredValues !== undefined) {
            queryParameters['includeFilteredValues'] = includeFilteredValues;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (time !== undefined) {
            queryParameters['time'] = time;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamGetPlot(webId, desiredUnits, endTime, intervals, selectedFields, startTime, timeZone) {
        const localVarPath = this.basePath + '/streams/{webId}/plot'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamGetPlot.');
        }
        if (desiredUnits !== undefined) {
            queryParameters['desiredUnits'] = desiredUnits;
        }
        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }
        if (intervals !== undefined) {
            queryParameters['intervals'] = intervals;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamGetRecorded(webId, boundaryType, desiredUnits, endTime, filterExpression, includeFilteredValues, maxCount, selectedFields, startTime, timeZone) {
        const localVarPath = this.basePath + '/streams/{webId}/recorded'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamGetRecorded.');
        }
        if (boundaryType !== undefined) {
            queryParameters['boundaryType'] = boundaryType;
        }
        if (desiredUnits !== undefined) {
            queryParameters['desiredUnits'] = desiredUnits;
        }
        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }
        if (filterExpression !== undefined) {
            queryParameters['filterExpression'] = filterExpression;
        }
        if (includeFilteredValues !== undefined) {
            queryParameters['includeFilteredValues'] = includeFilteredValues;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamGetRecordedAtTime(webId, time, desiredUnits, retrievalMode, selectedFields, timeZone) {
        const localVarPath = this.basePath + '/streams/{webId}/recordedattime'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamGetRecordedAtTime.');
        }
        if (time === null || time === undefined) {
            throw new Error('Required parameter time was null or undefined when calling streamGetRecordedAtTime.');
        }
        if (time !== undefined) {
            queryParameters['time'] = time;
        }
        if (desiredUnits !== undefined) {
            queryParameters['desiredUnits'] = desiredUnits;
        }
        if (retrievalMode !== undefined) {
            queryParameters['retrievalMode'] = retrievalMode;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamGetRecordedAtTimes(webId, desiredUnits, retrievalMode, selectedFields, sortOrder, time, timeZone) {
        const localVarPath = this.basePath + '/streams/{webId}/recordedattimes'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamGetRecordedAtTimes.');
        }
        if (desiredUnits !== undefined) {
            queryParameters['desiredUnits'] = desiredUnits;
        }
        if (retrievalMode !== undefined) {
            queryParameters['retrievalMode'] = retrievalMode;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (time !== undefined) {
            queryParameters['time'] = time;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamGetSummary(webId, calculationBasis, endTime, filterExpression, sampleInterval, sampleType, selectedFields, startTime, summaryDuration, summaryType, timeType, timeZone) {
        const localVarPath = this.basePath + '/streams/{webId}/summary'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamGetSummary.');
        }
        if (calculationBasis !== undefined) {
            queryParameters['calculationBasis'] = calculationBasis;
        }
        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }
        if (filterExpression !== undefined) {
            queryParameters['filterExpression'] = filterExpression;
        }
        if (sampleInterval !== undefined) {
            queryParameters['sampleInterval'] = sampleInterval;
        }
        if (sampleType !== undefined) {
            queryParameters['sampleType'] = sampleType;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }
        if (summaryDuration !== undefined) {
            queryParameters['summaryDuration'] = summaryDuration;
        }
        if (summaryType !== undefined) {
            queryParameters['summaryType'] = summaryType;
        }
        if (timeType !== undefined) {
            queryParameters['timeType'] = timeType;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamGetValue(webId, desiredUnits, selectedFields, time, timeZone) {
        const localVarPath = this.basePath + '/streams/{webId}/value'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamGetValue.');
        }
        if (desiredUnits !== undefined) {
            queryParameters['desiredUnits'] = desiredUnits;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (time !== undefined) {
            queryParameters['time'] = time;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamUpdateValue(webId, value, bufferOption, updateOption) {
        const localVarPath = this.basePath + '/streams/{webId}/value'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamUpdateValue.');
        }
        if (value === null || value === undefined) {
            throw new Error('Required parameter value was null or undefined when calling streamUpdateValue.');
        }
        if (bufferOption !== undefined) {
            queryParameters['bufferOption'] = bufferOption;
        }
        if (updateOption !== undefined) {
            queryParameters['updateOption'] = updateOption;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: value,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamUpdateValues(webId, values, bufferOption, updateOption) {
        const localVarPath = this.basePath + '/streams/{webId}/recorded'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamUpdateValues.');
        }
        if (values === null || values === undefined) {
            throw new Error('Required parameter values was null or undefined when calling streamUpdateValues.');
        }
        if (bufferOption !== undefined) {
            queryParameters['bufferOption'] = bufferOption;
        }
        if (updateOption !== undefined) {
            queryParameters['updateOption'] = updateOption;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: values,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.StreamApi = StreamApi;
var StreamSetApiApiKeys;
(function (StreamSetApiApiKeys) {
})(StreamSetApiApiKeys = exports.StreamSetApiApiKeys || (exports.StreamSetApiApiKeys = {}));
class StreamSetApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[StreamSetApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    streamSetGetChannel(webId, categoryName, includeInitialValues, nameFilter, searchFullHierarchy, showExcluded, showHidden, templateName) {
        const localVarPath = this.basePath + '/streamsets/{webId}/channel'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamSetGetChannel.');
        }
        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }
        if (includeInitialValues !== undefined) {
            queryParameters['includeInitialValues'] = includeInitialValues;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (showExcluded !== undefined) {
            queryParameters['showExcluded'] = showExcluded;
        }
        if (showHidden !== undefined) {
            queryParameters['showHidden'] = showHidden;
        }
        if (templateName !== undefined) {
            queryParameters['templateName'] = templateName;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetGetChannelAdHoc(webId, includeInitialValues) {
        const localVarPath = this.basePath + '/streamsets/channel';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamSetGetChannelAdHoc.');
        }
        if (webId !== undefined) {
            queryParameters['webId'] = webId;
        }
        if (includeInitialValues !== undefined) {
            queryParameters['includeInitialValues'] = includeInitialValues;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetGetEnd(webId, categoryName, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, templateName) {
        const localVarPath = this.basePath + '/streamsets/{webId}/end'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamSetGetEnd.');
        }
        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (showExcluded !== undefined) {
            queryParameters['showExcluded'] = showExcluded;
        }
        if (showHidden !== undefined) {
            queryParameters['showHidden'] = showHidden;
        }
        if (templateName !== undefined) {
            queryParameters['templateName'] = templateName;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetGetEndAdHoc(webId, selectedFields) {
        const localVarPath = this.basePath + '/streamsets/end';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamSetGetEndAdHoc.');
        }
        if (webId !== undefined) {
            queryParameters['webId'] = webId;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetGetInterpolated(webId, categoryName, endTime, filterExpression, includeFilteredValues, interval, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, startTime, templateName, timeZone) {
        const localVarPath = this.basePath + '/streamsets/{webId}/interpolated'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamSetGetInterpolated.');
        }
        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }
        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }
        if (filterExpression !== undefined) {
            queryParameters['filterExpression'] = filterExpression;
        }
        if (includeFilteredValues !== undefined) {
            queryParameters['includeFilteredValues'] = includeFilteredValues;
        }
        if (interval !== undefined) {
            queryParameters['interval'] = interval;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (showExcluded !== undefined) {
            queryParameters['showExcluded'] = showExcluded;
        }
        if (showHidden !== undefined) {
            queryParameters['showHidden'] = showHidden;
        }
        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }
        if (templateName !== undefined) {
            queryParameters['templateName'] = templateName;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetGetInterpolatedAdHoc(webId, endTime, filterExpression, includeFilteredValues, interval, selectedFields, startTime, timeZone) {
        const localVarPath = this.basePath + '/streamsets/interpolated';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamSetGetInterpolatedAdHoc.');
        }
        if (webId !== undefined) {
            queryParameters['webId'] = webId;
        }
        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }
        if (filterExpression !== undefined) {
            queryParameters['filterExpression'] = filterExpression;
        }
        if (includeFilteredValues !== undefined) {
            queryParameters['includeFilteredValues'] = includeFilteredValues;
        }
        if (interval !== undefined) {
            queryParameters['interval'] = interval;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetGetInterpolatedAtTimes(webId, time, categoryName, filterExpression, includeFilteredValues, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortOrder, templateName, timeZone) {
        const localVarPath = this.basePath + '/streamsets/{webId}/interpolatedattimes'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamSetGetInterpolatedAtTimes.');
        }
        if (time === null || time === undefined) {
            throw new Error('Required parameter time was null or undefined when calling streamSetGetInterpolatedAtTimes.');
        }
        if (time !== undefined) {
            queryParameters['time'] = time;
        }
        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }
        if (filterExpression !== undefined) {
            queryParameters['filterExpression'] = filterExpression;
        }
        if (includeFilteredValues !== undefined) {
            queryParameters['includeFilteredValues'] = includeFilteredValues;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (showExcluded !== undefined) {
            queryParameters['showExcluded'] = showExcluded;
        }
        if (showHidden !== undefined) {
            queryParameters['showHidden'] = showHidden;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (templateName !== undefined) {
            queryParameters['templateName'] = templateName;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetGetInterpolatedAtTimesAdHoc(time, webId, filterExpression, includeFilteredValues, selectedFields, sortOrder, timeZone) {
        const localVarPath = this.basePath + '/streamsets/interpolatedattimes';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (time === null || time === undefined) {
            throw new Error('Required parameter time was null or undefined when calling streamSetGetInterpolatedAtTimesAdHoc.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamSetGetInterpolatedAtTimesAdHoc.');
        }
        if (time !== undefined) {
            queryParameters['time'] = time;
        }
        if (webId !== undefined) {
            queryParameters['webId'] = webId;
        }
        if (filterExpression !== undefined) {
            queryParameters['filterExpression'] = filterExpression;
        }
        if (includeFilteredValues !== undefined) {
            queryParameters['includeFilteredValues'] = includeFilteredValues;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetGetPlot(webId, categoryName, endTime, intervals, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, startTime, templateName, timeZone) {
        const localVarPath = this.basePath + '/streamsets/{webId}/plot'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamSetGetPlot.');
        }
        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }
        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }
        if (intervals !== undefined) {
            queryParameters['intervals'] = intervals;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (showExcluded !== undefined) {
            queryParameters['showExcluded'] = showExcluded;
        }
        if (showHidden !== undefined) {
            queryParameters['showHidden'] = showHidden;
        }
        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }
        if (templateName !== undefined) {
            queryParameters['templateName'] = templateName;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetGetPlotAdHoc(webId, endTime, intervals, selectedFields, startTime, timeZone) {
        const localVarPath = this.basePath + '/streamsets/plot';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamSetGetPlotAdHoc.');
        }
        if (webId !== undefined) {
            queryParameters['webId'] = webId;
        }
        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }
        if (intervals !== undefined) {
            queryParameters['intervals'] = intervals;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetGetRecorded(webId, boundaryType, categoryName, endTime, filterExpression, includeFilteredValues, maxCount, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, startTime, templateName, timeZone) {
        const localVarPath = this.basePath + '/streamsets/{webId}/recorded'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamSetGetRecorded.');
        }
        if (boundaryType !== undefined) {
            queryParameters['boundaryType'] = boundaryType;
        }
        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }
        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }
        if (filterExpression !== undefined) {
            queryParameters['filterExpression'] = filterExpression;
        }
        if (includeFilteredValues !== undefined) {
            queryParameters['includeFilteredValues'] = includeFilteredValues;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (showExcluded !== undefined) {
            queryParameters['showExcluded'] = showExcluded;
        }
        if (showHidden !== undefined) {
            queryParameters['showHidden'] = showHidden;
        }
        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }
        if (templateName !== undefined) {
            queryParameters['templateName'] = templateName;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetGetRecordedAdHoc(webId, boundaryType, endTime, filterExpression, includeFilteredValues, maxCount, selectedFields, startTime, timeZone) {
        const localVarPath = this.basePath + '/streamsets/recorded';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamSetGetRecordedAdHoc.');
        }
        if (webId !== undefined) {
            queryParameters['webId'] = webId;
        }
        if (boundaryType !== undefined) {
            queryParameters['boundaryType'] = boundaryType;
        }
        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }
        if (filterExpression !== undefined) {
            queryParameters['filterExpression'] = filterExpression;
        }
        if (includeFilteredValues !== undefined) {
            queryParameters['includeFilteredValues'] = includeFilteredValues;
        }
        if (maxCount !== undefined) {
            queryParameters['maxCount'] = maxCount;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetGetRecordedAtTime(webId, time, categoryName, nameFilter, retrievalMode, searchFullHierarchy, selectedFields, showExcluded, showHidden, templateName, timeZone) {
        const localVarPath = this.basePath + '/streamsets/{webId}/recordedattime'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamSetGetRecordedAtTime.');
        }
        if (time === null || time === undefined) {
            throw new Error('Required parameter time was null or undefined when calling streamSetGetRecordedAtTime.');
        }
        if (time !== undefined) {
            queryParameters['time'] = time;
        }
        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (retrievalMode !== undefined) {
            queryParameters['retrievalMode'] = retrievalMode;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (showExcluded !== undefined) {
            queryParameters['showExcluded'] = showExcluded;
        }
        if (showHidden !== undefined) {
            queryParameters['showHidden'] = showHidden;
        }
        if (templateName !== undefined) {
            queryParameters['templateName'] = templateName;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetGetRecordedAtTimeAdHoc(time, webId, retrievalMode, selectedFields, timeZone) {
        const localVarPath = this.basePath + '/streamsets/recordedattime';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (time === null || time === undefined) {
            throw new Error('Required parameter time was null or undefined when calling streamSetGetRecordedAtTimeAdHoc.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamSetGetRecordedAtTimeAdHoc.');
        }
        if (time !== undefined) {
            queryParameters['time'] = time;
        }
        if (webId !== undefined) {
            queryParameters['webId'] = webId;
        }
        if (retrievalMode !== undefined) {
            queryParameters['retrievalMode'] = retrievalMode;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetGetRecordedAtTimes(webId, time, categoryName, nameFilter, retrievalMode, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortOrder, templateName, timeZone) {
        const localVarPath = this.basePath + '/streamsets/{webId}/recordedattimes'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamSetGetRecordedAtTimes.');
        }
        if (time === null || time === undefined) {
            throw new Error('Required parameter time was null or undefined when calling streamSetGetRecordedAtTimes.');
        }
        if (time !== undefined) {
            queryParameters['time'] = time;
        }
        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (retrievalMode !== undefined) {
            queryParameters['retrievalMode'] = retrievalMode;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (showExcluded !== undefined) {
            queryParameters['showExcluded'] = showExcluded;
        }
        if (showHidden !== undefined) {
            queryParameters['showHidden'] = showHidden;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (templateName !== undefined) {
            queryParameters['templateName'] = templateName;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetGetRecordedAtTimesAdHoc(time, webId, retrievalMode, selectedFields, sortOrder, timeZone) {
        const localVarPath = this.basePath + '/streamsets/recordedattimes';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (time === null || time === undefined) {
            throw new Error('Required parameter time was null or undefined when calling streamSetGetRecordedAtTimesAdHoc.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamSetGetRecordedAtTimesAdHoc.');
        }
        if (time !== undefined) {
            queryParameters['time'] = time;
        }
        if (webId !== undefined) {
            queryParameters['webId'] = webId;
        }
        if (retrievalMode !== undefined) {
            queryParameters['retrievalMode'] = retrievalMode;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetGetSummaries(webId, calculationBasis, categoryName, endTime, filterExpression, nameFilter, sampleInterval, sampleType, searchFullHierarchy, selectedFields, showExcluded, showHidden, startTime, summaryDuration, summaryType, templateName, timeType, timeZone) {
        const localVarPath = this.basePath + '/streamsets/{webId}/summary'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamSetGetSummaries.');
        }
        if (calculationBasis !== undefined) {
            queryParameters['calculationBasis'] = calculationBasis;
        }
        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }
        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }
        if (filterExpression !== undefined) {
            queryParameters['filterExpression'] = filterExpression;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (sampleInterval !== undefined) {
            queryParameters['sampleInterval'] = sampleInterval;
        }
        if (sampleType !== undefined) {
            queryParameters['sampleType'] = sampleType;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (showExcluded !== undefined) {
            queryParameters['showExcluded'] = showExcluded;
        }
        if (showHidden !== undefined) {
            queryParameters['showHidden'] = showHidden;
        }
        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }
        if (summaryDuration !== undefined) {
            queryParameters['summaryDuration'] = summaryDuration;
        }
        if (summaryType !== undefined) {
            queryParameters['summaryType'] = summaryType;
        }
        if (templateName !== undefined) {
            queryParameters['templateName'] = templateName;
        }
        if (timeType !== undefined) {
            queryParameters['timeType'] = timeType;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetGetSummariesAdHoc(webId, calculationBasis, endTime, filterExpression, sampleInterval, sampleType, selectedFields, startTime, summaryDuration, summaryType, timeType, timeZone) {
        const localVarPath = this.basePath + '/streamsets/summary';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamSetGetSummariesAdHoc.');
        }
        if (webId !== undefined) {
            queryParameters['webId'] = webId;
        }
        if (calculationBasis !== undefined) {
            queryParameters['calculationBasis'] = calculationBasis;
        }
        if (endTime !== undefined) {
            queryParameters['endTime'] = endTime;
        }
        if (filterExpression !== undefined) {
            queryParameters['filterExpression'] = filterExpression;
        }
        if (sampleInterval !== undefined) {
            queryParameters['sampleInterval'] = sampleInterval;
        }
        if (sampleType !== undefined) {
            queryParameters['sampleType'] = sampleType;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (startTime !== undefined) {
            queryParameters['startTime'] = startTime;
        }
        if (summaryDuration !== undefined) {
            queryParameters['summaryDuration'] = summaryDuration;
        }
        if (summaryType !== undefined) {
            queryParameters['summaryType'] = summaryType;
        }
        if (timeType !== undefined) {
            queryParameters['timeType'] = timeType;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetGetValues(webId, categoryName, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, templateName, time, timeZone) {
        const localVarPath = this.basePath + '/streamsets/{webId}/value'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamSetGetValues.');
        }
        if (categoryName !== undefined) {
            queryParameters['categoryName'] = categoryName;
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (searchFullHierarchy !== undefined) {
            queryParameters['searchFullHierarchy'] = searchFullHierarchy;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (showExcluded !== undefined) {
            queryParameters['showExcluded'] = showExcluded;
        }
        if (showHidden !== undefined) {
            queryParameters['showHidden'] = showHidden;
        }
        if (templateName !== undefined) {
            queryParameters['templateName'] = templateName;
        }
        if (time !== undefined) {
            queryParameters['time'] = time;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetGetValuesAdHoc(webId, selectedFields, time, timeZone) {
        const localVarPath = this.basePath + '/streamsets/value';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamSetGetValuesAdHoc.');
        }
        if (webId !== undefined) {
            queryParameters['webId'] = webId;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        if (time !== undefined) {
            queryParameters['time'] = time;
        }
        if (timeZone !== undefined) {
            queryParameters['timeZone'] = timeZone;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetUpdateValue(webId, values, bufferOption, updateOption) {
        const localVarPath = this.basePath + '/streamsets/{webId}/value'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamSetUpdateValue.');
        }
        if (values === null || values === undefined) {
            throw new Error('Required parameter values was null or undefined when calling streamSetUpdateValue.');
        }
        if (bufferOption !== undefined) {
            queryParameters['bufferOption'] = bufferOption;
        }
        if (updateOption !== undefined) {
            queryParameters['updateOption'] = updateOption;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: values,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetUpdateValueAdHoc(values, bufferOption, updateOption) {
        const localVarPath = this.basePath + '/streamsets/value';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (values === null || values === undefined) {
            throw new Error('Required parameter values was null or undefined when calling streamSetUpdateValueAdHoc.');
        }
        if (bufferOption !== undefined) {
            queryParameters['bufferOption'] = bufferOption;
        }
        if (updateOption !== undefined) {
            queryParameters['updateOption'] = updateOption;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: values,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetUpdateValues(webId, values, bufferOption, updateOption) {
        const localVarPath = this.basePath + '/streamsets/{webId}/recorded'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling streamSetUpdateValues.');
        }
        if (values === null || values === undefined) {
            throw new Error('Required parameter values was null or undefined when calling streamSetUpdateValues.');
        }
        if (bufferOption !== undefined) {
            queryParameters['bufferOption'] = bufferOption;
        }
        if (updateOption !== undefined) {
            queryParameters['updateOption'] = updateOption;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: values,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    streamSetUpdateValuesAdHoc(values, bufferOption, updateOption) {
        const localVarPath = this.basePath + '/streamsets/recorded';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (values === null || values === undefined) {
            throw new Error('Required parameter values was null or undefined when calling streamSetUpdateValuesAdHoc.');
        }
        if (bufferOption !== undefined) {
            queryParameters['bufferOption'] = bufferOption;
        }
        if (updateOption !== undefined) {
            queryParameters['updateOption'] = updateOption;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: values,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.StreamSetApi = StreamSetApi;
var SystemApiApiKeys;
(function (SystemApiApiKeys) {
})(SystemApiApiKeys = exports.SystemApiApiKeys || (exports.SystemApiApiKeys = {}));
class SystemApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[SystemApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    systemCacheInstances() {
        const localVarPath = this.basePath + '/system/cacheinstances';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    systemLanding() {
        const localVarPath = this.basePath + '/system';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    systemStatus() {
        const localVarPath = this.basePath + '/system/status';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    systemUserInfo() {
        const localVarPath = this.basePath + '/system/userinfo';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    systemVersions() {
        const localVarPath = this.basePath + '/system/versions';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.SystemApi = SystemApi;
var TableApiApiKeys;
(function (TableApiApiKeys) {
})(TableApiApiKeys = exports.TableApiApiKeys || (exports.TableApiApiKeys = {}));
class TableApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[TableApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    tableCreateSecurityEntry(webId, securityEntry, applyToChildren) {
        const localVarPath = this.basePath + '/tables/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling tableCreateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling tableCreateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    tableDelete(webId) {
        const localVarPath = this.basePath + '/tables/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling tableDelete.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    tableDeleteSecurityEntry(name, webId, applyToChildren) {
        const localVarPath = this.basePath + '/tables/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling tableDeleteSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling tableDeleteSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    tableGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/tables/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling tableGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    tableGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/tables';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling tableGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    tableGetCategories(webId, selectedFields) {
        const localVarPath = this.basePath + '/tables/{webId}/categories'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling tableGetCategories.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    tableGetData(webId, selectedFields) {
        const localVarPath = this.basePath + '/tables/{webId}/data'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling tableGetData.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    tableGetSecurity(webId, userIdentity, forceRefresh, selectedFields) {
        const localVarPath = this.basePath + '/tables/{webId}/security'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling tableGetSecurity.');
        }
        if (userIdentity === null || userIdentity === undefined) {
            throw new Error('Required parameter userIdentity was null or undefined when calling tableGetSecurity.');
        }
        if (userIdentity !== undefined) {
            queryParameters['userIdentity'] = userIdentity;
        }
        if (forceRefresh !== undefined) {
            queryParameters['forceRefresh'] = forceRefresh;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    tableGetSecurityEntries(webId, nameFilter, selectedFields) {
        const localVarPath = this.basePath + '/tables/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling tableGetSecurityEntries.');
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    tableGetSecurityEntryByName(name, webId, selectedFields) {
        const localVarPath = this.basePath + '/tables/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling tableGetSecurityEntryByName.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling tableGetSecurityEntryByName.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    tableUpdate(webId, table) {
        const localVarPath = this.basePath + '/tables/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling tableUpdate.');
        }
        if (table === null || table === undefined) {
            throw new Error('Required parameter table was null or undefined when calling tableUpdate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: table,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    tableUpdateData(webId, data) {
        const localVarPath = this.basePath + '/tables/{webId}/data'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling tableUpdateData.');
        }
        if (data === null || data === undefined) {
            throw new Error('Required parameter data was null or undefined when calling tableUpdateData.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: data,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    tableUpdateSecurityEntry(name, webId, securityEntry, applyToChildren) {
        const localVarPath = this.basePath + '/tables/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling tableUpdateSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling tableUpdateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling tableUpdateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.TableApi = TableApi;
var TableCategoryApiApiKeys;
(function (TableCategoryApiApiKeys) {
})(TableCategoryApiApiKeys = exports.TableCategoryApiApiKeys || (exports.TableCategoryApiApiKeys = {}));
class TableCategoryApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[TableCategoryApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    tableCategoryCreateSecurityEntry(webId, securityEntry, applyToChildren) {
        const localVarPath = this.basePath + '/tablecategories/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling tableCategoryCreateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling tableCategoryCreateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    tableCategoryDelete(webId) {
        const localVarPath = this.basePath + '/tablecategories/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling tableCategoryDelete.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    tableCategoryDeleteSecurityEntry(name, webId, applyToChildren) {
        const localVarPath = this.basePath + '/tablecategories/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling tableCategoryDeleteSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling tableCategoryDeleteSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    tableCategoryGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/tablecategories/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling tableCategoryGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    tableCategoryGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/tablecategories';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling tableCategoryGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    tableCategoryGetSecurity(webId, userIdentity, forceRefresh, selectedFields) {
        const localVarPath = this.basePath + '/tablecategories/{webId}/security'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling tableCategoryGetSecurity.');
        }
        if (userIdentity === null || userIdentity === undefined) {
            throw new Error('Required parameter userIdentity was null or undefined when calling tableCategoryGetSecurity.');
        }
        if (userIdentity !== undefined) {
            queryParameters['userIdentity'] = userIdentity;
        }
        if (forceRefresh !== undefined) {
            queryParameters['forceRefresh'] = forceRefresh;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    tableCategoryGetSecurityEntries(webId, nameFilter, selectedFields) {
        const localVarPath = this.basePath + '/tablecategories/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling tableCategoryGetSecurityEntries.');
        }
        if (nameFilter !== undefined) {
            queryParameters['nameFilter'] = nameFilter;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    tableCategoryGetSecurityEntryByName(name, webId, selectedFields) {
        const localVarPath = this.basePath + '/tablecategories/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling tableCategoryGetSecurityEntryByName.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling tableCategoryGetSecurityEntryByName.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    tableCategoryUpdate(webId, tableCategory) {
        const localVarPath = this.basePath + '/tablecategories/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling tableCategoryUpdate.');
        }
        if (tableCategory === null || tableCategory === undefined) {
            throw new Error('Required parameter tableCategory was null or undefined when calling tableCategoryUpdate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: tableCategory,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    tableCategoryUpdateSecurityEntry(name, webId, securityEntry, applyToChildren) {
        const localVarPath = this.basePath + '/tablecategories/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling tableCategoryUpdateSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling tableCategoryUpdateSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling tableCategoryUpdateSecurityEntry.');
        }
        if (applyToChildren !== undefined) {
            queryParameters['applyToChildren'] = applyToChildren;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: securityEntry,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.TableCategoryApi = TableCategoryApi;
var TimeRuleApiApiKeys;
(function (TimeRuleApiApiKeys) {
})(TimeRuleApiApiKeys = exports.TimeRuleApiApiKeys || (exports.TimeRuleApiApiKeys = {}));
class TimeRuleApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[TimeRuleApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    timeRuleDelete(webId) {
        const localVarPath = this.basePath + '/timerules/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling timeRuleDelete.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    timeRuleGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/timerules/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling timeRuleGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    timeRuleGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/timerules';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling timeRuleGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    timeRuleUpdate(webId, timeRule) {
        const localVarPath = this.basePath + '/timerules/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling timeRuleUpdate.');
        }
        if (timeRule === null || timeRule === undefined) {
            throw new Error('Required parameter timeRule was null or undefined when calling timeRuleUpdate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: timeRule,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.TimeRuleApi = TimeRuleApi;
var TimeRulePlugInApiApiKeys;
(function (TimeRulePlugInApiApiKeys) {
})(TimeRulePlugInApiApiKeys = exports.TimeRulePlugInApiApiKeys || (exports.TimeRulePlugInApiApiKeys = {}));
class TimeRulePlugInApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[TimeRulePlugInApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    timeRulePlugInGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/timeruleplugins/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling timeRulePlugInGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    timeRulePlugInGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/timeruleplugins';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling timeRulePlugInGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.TimeRulePlugInApi = TimeRulePlugInApi;
var UnitApiApiKeys;
(function (UnitApiApiKeys) {
})(UnitApiApiKeys = exports.UnitApiApiKeys || (exports.UnitApiApiKeys = {}));
class UnitApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[UnitApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    unitDelete(webId) {
        const localVarPath = this.basePath + '/units/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling unitDelete.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    unitGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/units/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling unitGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    unitGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/units';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling unitGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    unitUpdate(webId, unitDTO) {
        const localVarPath = this.basePath + '/units/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling unitUpdate.');
        }
        if (unitDTO === null || unitDTO === undefined) {
            throw new Error('Required parameter unitDTO was null or undefined when calling unitUpdate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: unitDTO,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.UnitApi = UnitApi;
var UnitClassApiApiKeys;
(function (UnitClassApiApiKeys) {
})(UnitClassApiApiKeys = exports.UnitClassApiApiKeys || (exports.UnitClassApiApiKeys = {}));
class UnitClassApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'basicAuth': new HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setApiKey(key, value) {
        this.authentications[UnitClassApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.basicAuth.username = username;
    }
    set password(password) {
        this.authentications.basicAuth.password = password;
    }
    unitClassCreateUnit(webId, unitDTO) {
        const localVarPath = this.basePath + '/unitclasses/{webId}/units'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling unitClassCreateUnit.');
        }
        if (unitDTO === null || unitDTO === undefined) {
            throw new Error('Required parameter unitDTO was null or undefined when calling unitClassCreateUnit.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: unitDTO,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    unitClassDelete(webId) {
        const localVarPath = this.basePath + '/unitclasses/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling unitClassDelete.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    unitClassGet(webId, selectedFields) {
        const localVarPath = this.basePath + '/unitclasses/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling unitClassGet.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    unitClassGetByPath(path, selectedFields) {
        const localVarPath = this.basePath + '/unitclasses';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling unitClassGetByPath.');
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    unitClassGetCanonicalUnit(webId, selectedFields) {
        const localVarPath = this.basePath + '/unitclasses/{webId}/canonicalunit'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling unitClassGetCanonicalUnit.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    unitClassGetUnits(webId, selectedFields) {
        const localVarPath = this.basePath + '/unitclasses/{webId}/units'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling unitClassGetUnits.');
        }
        if (selectedFields !== undefined) {
            queryParameters['selectedFields'] = selectedFields;
        }
        let useFormData = false;
        let requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    unitClassUpdate(webId, unitClassDTO) {
        const localVarPath = this.basePath + '/unitclasses/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let formParams = {};
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling unitClassUpdate.');
        }
        if (unitClassDTO === null || unitClassDTO === undefined) {
            throw new Error('Required parameter unitClassDTO was null or undefined when calling unitClassUpdate.');
        }
        let useFormData = false;
        let requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: unitClassDTO,
        };
        this.authentications.basicAuth.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.UnitClassApi = UnitClassApi;
//# sourceMappingURL=piwebapi.js.map