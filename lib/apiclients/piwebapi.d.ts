/// <reference types="request" />
/// <reference types="node" />
import request = require('request');
import http = require('http');
export declare class Analysis {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'Path': string;
    'AnalysisRulePlugInName': string;
    'AutoCreated': boolean;
    'CategoryNames': Array<string>;
    'GroupId': number;
    'HasNotification': boolean;
    'HasTarget': boolean;
    'HasTemplate': boolean;
    'IsConfigured': boolean;
    'IsTimeRuleDefinedByTemplate': boolean;
    'MaximumQueueSize': number;
    'OutputTime': string;
    'Priority': string;
    'PublishResults': boolean;
    'Status': string;
    'TargetWebId': string;
    'TemplateName': string;
    'TimeRulePlugInName': string;
    'Links': AnalysisLinks;
}
export declare class AnalysisCategory {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'Path': string;
    'Links': AnalysisCategoryLinks;
}
export declare class AnalysisCategoryLinks {
    'Self': string;
    'Database': string;
    'Security': string;
    'SecurityEntries': string;
}
export declare class AnalysisLinks {
    'Self': string;
    'Target': string;
    'Database': string;
    'Categories': string;
    'Template': string;
    'AnalysisRule': string;
    'AnalysisRulePlugIn': string;
    'TimeRule': string;
    'TimeRulePlugIn': string;
    'Security': string;
    'SecurityEntries': string;
}
export declare class AnalysisRule {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'Path': string;
    'ConfigString': string;
    'DisplayString': string;
    'EditorType': string;
    'HasChildren': boolean;
    'IsConfigured': boolean;
    'IsInitializing': boolean;
    'PlugInName': string;
    'SupportedBehaviors': Array<string>;
    'VariableMapping': string;
    'Links': AnalysisRuleLinks;
}
export declare class AnalysisRuleLinks {
    'Self': string;
    'AnalysisRules': string;
    'Analysis': string;
    'AnalysisTemplate': string;
    'Parent': string;
    'PlugIn': string;
}
export declare class AnalysisRulePlugIn {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'Path': string;
    'AssemblyFileName': string;
    'AssemblyID': string;
    'AssemblyLoadProperties': Array<string>;
    'AssemblyTime': Date;
    'CompatibilityVersion': number;
    'IsBrowsable': boolean;
    'IsNonEditableConfig': boolean;
    'LoadedAssemblyTime': Date;
    'LoadedVersion': string;
    'Version': string;
    'Links': AnalysisRulePlugInLinks;
}
export declare class AnalysisRulePlugInLinks {
    'Self': string;
    'AssetServer': string;
}
export declare class AnalysisTemplate {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'Path': string;
    'AnalysisRulePlugInName': string;
    'CategoryNames': Array<string>;
    'CreateEnabled': boolean;
    'GroupId': number;
    'HasNotificationTemplate': boolean;
    'HasTarget': boolean;
    'OutputTime': string;
    'TargetName': string;
    'TimeRulePlugInName': string;
    'Links': AnalysisTemplateLinks;
}
export declare class AnalysisTemplateLinks {
    'Self': string;
    'Database': string;
    'Categories': string;
    'AnalysisRule': string;
    'AnalysisRulePlugIn': string;
    'TimeRule': string;
    'TimeRulePlugIn': string;
    'Target': string;
    'Security': string;
    'SecurityEntries': string;
}
export declare class Annotation {
    'Id': string;
    'Name': string;
    'Description': string;
    'Value': any;
    'Creator': string;
    'CreationDate': Date;
    'Modifier': string;
    'ModifyDate': Date;
    'Links': AnnotationLinks;
}
export declare class AnnotationLinks {
    'Self': string;
    'Owner': string;
}
export declare class AssetDatabase {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'Path': string;
    'ExtendedProperties': {
        [key: string]: Value;
    };
    'Links': AssetDatabaseLinks;
}
export declare class AssetDatabaseLinks {
    'Self': string;
    'Elements': string;
    'ElementTemplates': string;
    'EventFrames': string;
    'AssetServer': string;
    'ElementCategories': string;
    'AttributeCategories': string;
    'TableCategories': string;
    'AnalysisCategories': string;
    'AnalysisTemplates': string;
    'EnumerationSets': string;
    'Tables': string;
    'Security': string;
    'SecurityEntries': string;
}
export declare class AssetServer {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'Path': string;
    'IsConnected': boolean;
    'ServerVersion': string;
    'ExtendedProperties': {
        [key: string]: Value;
    };
    'Links': AssetServerLinks;
}
export declare class AssetServerLinks {
    'Self': string;
    'Databases': string;
    'SecurityIdentities': string;
    'SecurityMappings': string;
    'UnitClasses': string;
    'AnalysisRulePlugIns': string;
    'TimeRulePlugIns': string;
    'Security': string;
    'SecurityEntries': string;
}
export declare class Attribute {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'Path': string;
    'Type': string;
    'TypeQualifier': string;
    'DefaultUnitsName': string;
    'DataReferencePlugIn': string;
    'ConfigString': string;
    'IsConfigurationItem': boolean;
    'IsExcluded': boolean;
    'IsHidden': boolean;
    'IsManualDataEntry': boolean;
    'HasChildren': boolean;
    'CategoryNames': Array<string>;
    'Step': boolean;
    'TraitName': string;
    'Links': AttributeLinks;
}
export declare class AttributeCategory {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'Path': string;
    'Links': AttributeCategoryLinks;
}
export declare class AttributeCategoryLinks {
    'Self': string;
    'Database': string;
    'Security': string;
    'SecurityEntries': string;
}
export declare class AttributeLinks {
    'Self': string;
    'Attributes': string;
    'Element': string;
    'EventFrame': string;
    'Parent': string;
    'Template': string;
    'InterpolatedData': string;
    'RecordedData': string;
    'PlotData': string;
    'SummaryData': string;
    'Value': string;
    'EndValue': string;
    'Point': string;
    'Categories': string;
    'EnumerationSet': string;
    'Trait': string;
}
export declare class AttributeTemplate {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'Path': string;
    'Type': string;
    'TypeQualifier': string;
    'DefaultUnitsName': string;
    'DefaultValue': any;
    'DataReferencePlugIn': string;
    'ConfigString': string;
    'IsConfigurationItem': boolean;
    'IsExcluded': boolean;
    'IsHidden': boolean;
    'IsManualDataEntry': boolean;
    'HasChildren': boolean;
    'CategoryNames': Array<string>;
    'TraitName': string;
    'Links': AttributeTemplateLinks;
}
export declare class AttributeTemplateLinks {
    'Self': string;
    'AttributeTemplates': string;
    'ElementTemplate': string;
    'Parent': string;
    'Categories': string;
    'Trait': string;
}
export declare class AttributeTrait {
    'Name': string;
    'Abbreviation': string;
    'AllowChildAttributes': boolean;
    'AllowDuplicates': boolean;
    'IsAllowedOnRootAttribute': boolean;
    'IsTypeInherited': boolean;
    'IsUOMInherited': boolean;
    'RequireNumeric': boolean;
    'RequireString': boolean;
    'Links': AttributeTraitLinks;
}
export declare class AttributeTraitLinks {
    'Self': string;
}
export declare class CacheInstance {
    'Id': string;
    'LastRefreshTime': Date;
    'WillRefreshAfter': Date;
    'ScheduledExpirationTime': Date;
    'User': string;
}
export declare class DataServer {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Path': string;
    'IsConnected': boolean;
    'ServerVersion': string;
    'Links': DataServerLinks;
}
export declare class DataServerLinks {
    'Self': string;
    'Points': string;
    'EnumerationSets': string;
}
export declare class Element {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'Path': string;
    'TemplateName': string;
    'HasChildren': boolean;
    'CategoryNames': Array<string>;
    'ExtendedProperties': {
        [key: string]: Value;
    };
    'Links': ElementLinks;
}
export declare class ElementCategory {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'Path': string;
    'Links': ElementCategoryLinks;
}
export declare class ElementCategoryLinks {
    'Self': string;
    'Database': string;
    'Security': string;
    'SecurityEntries': string;
}
export declare class ElementLinks {
    'Self': string;
    'Analyses': string;
    'Attributes': string;
    'Elements': string;
    'Database': string;
    'Parent': string;
    'Template': string;
    'Categories': string;
    'DefaultAttribute': string;
    'EventFrames': string;
    'InterpolatedData': string;
    'RecordedData': string;
    'PlotData': string;
    'SummaryData': string;
    'Value': string;
    'EndValue': string;
    'Security': string;
    'SecurityEntries': string;
}
export declare class ElementTemplate {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'Path': string;
    'AllowElementToExtend': boolean;
    'BaseTemplate': string;
    'InstanceType': string;
    'NamingPattern': string;
    'CategoryNames': Array<string>;
    'ExtendedProperties': {
        [key: string]: Value;
    };
    'Severity': string;
    'CanBeAcknowledged': boolean;
    'Links': ElementTemplateLinks;
}
export declare class ElementTemplateLinks {
    'Self': string;
    'AnalysisTemplates': string;
    'AttributeTemplates': string;
    'Database': string;
    'Categories': string;
    'BaseTemplate': string;
    'DefaultAttribute': string;
    'Security': string;
    'SecurityEntries': string;
}
export declare class EnumerationSet {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'Path': string;
    'Links': EnumerationSetLinks;
    'SerializeDescription': boolean;
}
export declare class EnumerationSetLinks {
    'Self': string;
    'Database': string;
    'DataServer': string;
    'Values': string;
    'Security': string;
    'SecurityEntries': string;
}
export declare class EnumerationValue {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'Value': number;
    'Path': string;
    'Links': EnumerationValueLinks;
    'SerializeWebId': boolean;
    'SerializeId': boolean;
    'SerializeDescription': boolean;
    'SerializePath': boolean;
    'SerializeLinks': boolean;
}
export declare class EnumerationValueLinks {
    'Self': string;
    'EnumerationSet': string;
}
export declare class Errors {
    'Errors': Array<string>;
}
export declare class EventFrame {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'Path': string;
    'TemplateName': string;
    'HasChildren': boolean;
    'CategoryNames': Array<string>;
    'ExtendedProperties': {
        [key: string]: Value;
    };
    'StartTime': Date;
    'EndTime': Date;
    'Severity': string;
    'AcknowledgedBy': string;
    'AcknowledgedDate': Date;
    'CanBeAcknowledged': boolean;
    'IsAcknowledged': boolean;
    'IsAnnotated': boolean;
    'IsLocked': boolean;
    'AreValuesCaptured': boolean;
    'RefElementWebIds': Array<string>;
    'Security': Security;
    'Links': EventFrameLinks;
}
export declare class EventFrameLinks {
    'Self': string;
    'Attributes': string;
    'EventFrames': string;
    'Database': string;
    'ReferencedElements': string;
    'PrimaryReferencedElement': string;
    'Parent': string;
    'Template': string;
    'DefaultAttribute': string;
    'Categories': string;
    'Annotations': string;
    'InterpolatedData': string;
    'RecordedData': string;
    'PlotData': string;
    'SummaryData': string;
    'Value': string;
    'EndValue': string;
    'Security': string;
    'SecurityEntries': string;
}
export declare class ItemAttribute {
    'Identifier': string;
    'IdentifierType': string;
    'Object': Attribute;
    'Exception': Errors;
}
export declare class ItemElement {
    'Identifier': string;
    'IdentifierType': string;
    'Object': Element;
    'Exception': Errors;
}
export declare class ItemEventFrame {
    'Identifier': string;
    'IdentifierType': string;
    'Object': EventFrame;
    'Exception': Errors;
}
export declare class ItemPoint {
    'Identifier': string;
    'IdentifierType': string;
    'Object': Point;
    'Exception': Errors;
}
export declare class ItemsAnalysis {
    'Items': Array<Analysis>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsAnalysisCategory {
    'Items': Array<AnalysisCategory>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsAnalysisLinks {
    'First': string;
    'Previous': string;
    'Next': string;
    'Last': string;
}
export declare class ItemsAnalysisRule {
    'Items': Array<AnalysisRule>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsAnalysisRulePlugIn {
    'Items': Array<AnalysisRulePlugIn>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsAnalysisTemplate {
    'Items': Array<AnalysisTemplate>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsAnnotation {
    'Items': Array<Annotation>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsAssetDatabase {
    'Items': Array<AssetDatabase>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsAssetServer {
    'Items': Array<AssetServer>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsAttribute {
    'Items': Array<Attribute>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsAttributeCategory {
    'Items': Array<AttributeCategory>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsAttributeTemplate {
    'Items': Array<AttributeTemplate>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsAttributeTrait {
    'Items': Array<AttributeTrait>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsCacheInstance {
    'Items': Array<CacheInstance>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsDataServer {
    'Items': Array<DataServer>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsElement {
    'Items': Array<Element>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsElementCategory {
    'Items': Array<ElementCategory>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsElementTemplate {
    'Items': Array<ElementTemplate>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsEnumerationSet {
    'Items': Array<EnumerationSet>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsEnumerationValue {
    'Items': Array<EnumerationValue>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsEventFrame {
    'Items': Array<EventFrame>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsItemAttribute {
    'Items': Array<ItemAttribute>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsItemElement {
    'Items': Array<ItemElement>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsItemEventFrame {
    'Items': Array<ItemEventFrame>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsItemPoint {
    'Items': Array<ItemPoint>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsItemsSubstatus {
    'Items': Array<ItemsSubstatus>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsPoint {
    'Items': Array<Point>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsPointAttribute {
    'Items': Array<PointAttribute>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsSecurityEntry {
    'Items': Array<SecurityEntry>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsSecurityIdentity {
    'Items': Array<SecurityIdentity>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsSecurityMapping {
    'Items': Array<SecurityMapping>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsSecurityRights {
    'Items': Array<SecurityRights>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsStreamSummaries {
    'Items': Array<StreamSummaries>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsStreamValue {
    'Items': Array<StreamValue>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsStreamValues {
    'Items': Array<StreamValues>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsSubstatus {
    'Items': Array<Substatus>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsSummaryValue {
    'Items': Array<SummaryValue>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsTable {
    'Items': Array<Table>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsTableCategory {
    'Items': Array<TableCategory>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsTimeRulePlugIn {
    'Items': Array<TimeRulePlugIn>;
    'Links': ItemsAnalysisLinks;
}
export declare class ItemsUnitClass {
    'Items': Array<UnitClass>;
    'Links': ItemsAnalysisLinks;
}
export declare class Landing {
    'Links': LandingLinks;
}
export declare class LandingLinks {
    'Self': string;
    'AssetServers': string;
    'DataServers': string;
    'Search': string;
    'System': string;
}
export declare class Point {
    'WebId': string;
    'Id': number;
    'Name': string;
    'Path': string;
    'Descriptor': string;
    'PointClass': string;
    'PointType': string;
    'DigitalSetName': string;
    'EngineeringUnits': string;
    'Step': boolean;
    'Future': boolean;
    'Links': PointLinks;
}
export declare class PointAttribute {
    'Name': string;
    'Value': any;
    'Links': PointAttributeLinks;
}
export declare class PointAttributeLinks {
    'Self': string;
    'Point': string;
}
export declare class PointLinks {
    'Self': string;
    'DataServer': string;
    'Attributes': string;
    'InterpolatedData': string;
    'RecordedData': string;
    'PlotData': string;
    'SummaryData': string;
    'Value': string;
    'EndValue': string;
}
export declare class Request {
    'Method': string;
    'Resource': string;
    'RequestTemplate': RequestTemplate;
    'Parameters': Array<string>;
    'Headers': {
        [key: string]: string;
    };
    'Content': string;
    'ParentIds': Array<string>;
}
export declare class RequestTemplate {
    'Resource': string;
}
export declare class Response {
    'Status': Response.StatusEnum;
    'Headers': {
        [key: string]: string;
    };
    'Content': any;
}
export declare namespace Response {
    enum StatusEnum {
        NUMBER_100,
        NUMBER_101,
        NUMBER_200,
        NUMBER_201,
        NUMBER_202,
        NUMBER_203,
        NUMBER_204,
        NUMBER_205,
        NUMBER_206,
        NUMBER_300,
        NUMBER_301,
        NUMBER_302,
        NUMBER_303,
        NUMBER_304,
        NUMBER_305,
        NUMBER_306,
        NUMBER_307,
        NUMBER_400,
        NUMBER_401,
        NUMBER_402,
        NUMBER_403,
        NUMBER_404,
        NUMBER_405,
        NUMBER_406,
        NUMBER_407,
        NUMBER_408,
        NUMBER_409,
        NUMBER_410,
        NUMBER_411,
        NUMBER_412,
        NUMBER_413,
        NUMBER_414,
        NUMBER_415,
        NUMBER_416,
        NUMBER_417,
        NUMBER_426,
        NUMBER_500,
        NUMBER_501,
        NUMBER_502,
        NUMBER_503,
        NUMBER_504,
        NUMBER_505,
    }
}
export declare class Security {
    'CanAnnotate': boolean;
    'CanDelete': boolean;
    'CanExecute': boolean;
    'CanRead': boolean;
    'CanReadData': boolean;
    'CanSubscribe': boolean;
    'CanSubscribeOthers': boolean;
    'CanWrite': boolean;
    'CanWriteData': boolean;
    'HasAdmin': boolean;
    'Rights': Array<string>;
}
export declare class SecurityEntry {
    'Name': string;
    'SecurityIdentityName': string;
    'AllowRights': Array<string>;
    'DenyRights': Array<string>;
    'Links': SecurityEntryLinks;
}
export declare class SecurityEntryLinks {
    'Self': string;
    'SecurableObject': string;
    'SecurityIdentity': string;
}
export declare class SecurityIdentity {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'Path': string;
    'IsEnabled': boolean;
    'Links': SecurityIdentityLinks;
}
export declare class SecurityIdentityLinks {
    'Self': string;
    'AssetServer': string;
    'SecurityMappings': string;
    'Security': string;
    'SecurityEntries': string;
}
export declare class SecurityMapping {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'Path': string;
    'Account': string;
    'SecurityIdentityWebId': string;
    'Links': SecurityMappingLinks;
}
export declare class SecurityMappingLinks {
    'Self': string;
    'AssetServer': string;
    'SecurityIdentity': string;
    'Security': string;
    'SecurityEntries': string;
}
export declare class SecurityRights {
    'OwnerWebId': string;
    'SecurityItem': string;
    'UserIdentity': string;
    'Links': AnnotationLinks;
}
export declare class StreamSummaries {
    'WebId': string;
    'Name': string;
    'Path': string;
    'Items': Array<SummaryValue>;
    'Links': StreamSummariesLinks;
}
export declare class StreamSummariesLinks {
    'Source': string;
}
export declare class StreamValue {
    'WebId': string;
    'Name': string;
    'Path': string;
    'Value': TimedValue;
    'Links': StreamSummariesLinks;
}
export declare class StreamValues {
    'WebId': string;
    'Name': string;
    'Path': string;
    'Items': Array<TimedValue>;
    'UnitsAbbreviation': string;
    'Links': StreamSummariesLinks;
}
export declare class Substatus {
    'Substatus': Substatus.SubstatusEnum;
    'Message': string;
}
export declare namespace Substatus {
    enum SubstatusEnum {
        NUMBER_100,
        NUMBER_101,
        NUMBER_200,
        NUMBER_201,
        NUMBER_202,
        NUMBER_203,
        NUMBER_204,
        NUMBER_205,
        NUMBER_206,
        NUMBER_300,
        NUMBER_301,
        NUMBER_302,
        NUMBER_303,
        NUMBER_304,
        NUMBER_305,
        NUMBER_306,
        NUMBER_307,
        NUMBER_400,
        NUMBER_401,
        NUMBER_402,
        NUMBER_403,
        NUMBER_404,
        NUMBER_405,
        NUMBER_406,
        NUMBER_407,
        NUMBER_408,
        NUMBER_409,
        NUMBER_410,
        NUMBER_411,
        NUMBER_412,
        NUMBER_413,
        NUMBER_414,
        NUMBER_415,
        NUMBER_416,
        NUMBER_417,
        NUMBER_426,
        NUMBER_500,
        NUMBER_501,
        NUMBER_502,
        NUMBER_503,
        NUMBER_504,
        NUMBER_505,
    }
}
export declare class SummaryValue {
    'Type': string;
    'Value': TimedValue;
}
export declare class SystemLanding {
    'ProductTitle': string;
    'ProductVersion': string;
    'Links': SystemLandingLinks;
}
export declare class SystemLandingLinks {
    'Self': string;
    'CacheInstances': string;
    'Configuration': string;
    'UserInfo': string;
    'Versions': string;
    'Status': string;
}
export declare class SystemStatus {
    'UpTimeInMinutes': number;
    'State': string;
    'CacheInstances': number;
}
export declare class Table {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'Path': string;
    'CategoryNames': Array<string>;
    'TimeZone': string;
    'ConvertToLocalTime': boolean;
    'Links': TableLinks;
}
export declare class TableCategory {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'Path': string;
    'Links': TableCategoryLinks;
}
export declare class TableCategoryLinks {
    'Self': string;
    'Database': string;
    'Security': string;
    'SecurityEntries': string;
}
export declare class TableData {
    'Columns': {
        [key: string]: string;
    };
    'Rows': Array<{
        [key: string]: any;
    }>;
}
export declare class TableLinks {
    'Self': string;
    'Database': string;
    'Data': string;
    'Categories': string;
    'Security': string;
    'SecurityEntries': string;
}
export declare class TimeRule {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'Path': string;
    'ConfigString': string;
    'ConfigStringStored': string;
    'DisplayString': string;
    'EditorType': string;
    'IsConfigured': boolean;
    'IsInitializing': boolean;
    'MergeDuplicatedItems': boolean;
    'PlugInName': string;
    'Links': TimeRuleLinks;
}
export declare class TimeRuleLinks {
    'Self': string;
    'Analysis': string;
    'AnalysisTemplate': string;
    'PlugIn': string;
}
export declare class TimeRulePlugIn {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'Path': string;
    'AssemblyFileName': string;
    'AssemblyID': string;
    'AssemblyLoadProperties': Array<string>;
    'AssemblyTime': Date;
    'CompatibilityVersion': number;
    'IsBrowsable': boolean;
    'IsNonEditableConfig': boolean;
    'LoadedAssemblyTime': Date;
    'LoadedVersion': string;
    'Version': string;
    'Links': TimeRulePlugInLinks;
}
export declare class TimeRulePlugInLinks {
    'Self': string;
    'AssetServer': string;
}
export declare class TimedValue {
    'Timestamp': Date;
    'UnitsAbbreviation': string;
    'Good': boolean;
    'Questionable': boolean;
    'Substituted': boolean;
    'Value': any;
    'Exception': Errors;
}
export declare class TimedValues {
    'Items': Array<TimedValue>;
    'UnitsAbbreviation': string;
}
export declare class Unit {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Abbreviation': string;
    'Description': string;
    'Path': string;
    'Factor': number;
    'Offset': number;
    'ReferenceFactor': number;
    'ReferenceOffset': number;
    'ReferenceUnitAbbreviation': string;
    'Links': UnitLinks;
}
export declare class UnitClass {
    'WebId': string;
    'Id': string;
    'Name': string;
    'Description': string;
    'CanonicalUnitName': string;
    'CanonicalUnitAbbreviation': string;
    'Path': string;
    'Links': UnitClassLinks;
}
export declare class UnitClassLinks {
    'Self': string;
    'CanonicalUnit': string;
    'Units': string;
    'AssetServer': string;
}
export declare class UnitLinks {
    'Self': string;
    'Class': string;
    'ReferenceUnit': string;
}
export declare class UserInfo {
    'IdentityType': string;
    'Name': string;
    'IsAuthenticated': boolean;
    'SID': string;
    'ImpersonationLevel': string;
}
export declare class Value {
    'Value': any;
    'Exception': Errors;
}
export declare class Version {
    'FullVersion': string;
    'MajorMinorRevision': string;
    'Build': string;
}
export interface Authentication {
    applyToRequest(requestOptions: request.Options): void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: request.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: request.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: request.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: request.Options): void;
}
export declare enum AnalysisApiApiKeys {
}
export declare class AnalysisApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: AnalysisApiApiKeys, value: string): void;
    username: string;
    password: string;
    analysisCreateSecurityEntry(webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    analysisDelete(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    analysisDeleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    analysisGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: Analysis;
    }>;
    analysisGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: Analysis;
    }>;
    analysisGetCategories(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsAnalysisCategory;
    }>;
    analysisGetSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityRights;
    }>;
    analysisGetSecurityEntries(webId: string, nameFilter?: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityEntry;
    }>;
    analysisGetSecurityEntryByName(name: string, webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: SecurityEntry;
    }>;
    analysisUpdate(webId: string, analysis: Analysis): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    analysisUpdateSecurityEntry(name: string, webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum AnalysisCategoryApiApiKeys {
}
export declare class AnalysisCategoryApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: AnalysisCategoryApiApiKeys, value: string): void;
    username: string;
    password: string;
    analysisCategoryCreateSecurityEntry(webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    analysisCategoryDelete(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    analysisCategoryDeleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    analysisCategoryGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: AnalysisCategory;
    }>;
    analysisCategoryGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: AnalysisCategory;
    }>;
    analysisCategoryGetSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityRights;
    }>;
    analysisCategoryGetSecurityEntries(webId: string, nameFilter?: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityEntry;
    }>;
    analysisCategoryGetSecurityEntryByName(name: string, webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: SecurityEntry;
    }>;
    analysisCategoryUpdate(webId: string, category: AnalysisCategory): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    analysisCategoryUpdateSecurityEntry(name: string, webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum AnalysisRuleApiApiKeys {
}
export declare class AnalysisRuleApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: AnalysisRuleApiApiKeys, value: string): void;
    username: string;
    password: string;
    analysisRuleCreateAnalysisRule(webId: string, analysisRule: AnalysisRule): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    analysisRuleDelete(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    analysisRuleGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: AnalysisRule;
    }>;
    analysisRuleGetAnalysisRules(webId: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number): Promise<{
        response: http.IncomingMessage;
        body: ItemsAnalysisRule;
    }>;
    analysisRuleGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: AnalysisRule;
    }>;
    analysisRuleUpdate(webId: string, analysisRule: AnalysisRule): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum AnalysisRulePlugInApiApiKeys {
}
export declare class AnalysisRulePlugInApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: AnalysisRulePlugInApiApiKeys, value: string): void;
    username: string;
    password: string;
    analysisRulePlugInGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: AnalysisRulePlugIn;
    }>;
    analysisRulePlugInGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: AnalysisRulePlugIn;
    }>;
}
export declare enum AnalysisTemplateApiApiKeys {
}
export declare class AnalysisTemplateApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: AnalysisTemplateApiApiKeys, value: string): void;
    username: string;
    password: string;
    analysisTemplateCreateFromAnalysis(analysisWebId: string, name?: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    analysisTemplateCreateSecurityEntry(webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    analysisTemplateDelete(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    analysisTemplateDeleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    analysisTemplateGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: AnalysisTemplate;
    }>;
    analysisTemplateGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: AnalysisTemplate;
    }>;
    analysisTemplateGetCategories(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsAnalysisCategory;
    }>;
    analysisTemplateGetSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityRights;
    }>;
    analysisTemplateGetSecurityEntries(webId: string, nameFilter?: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityEntry;
    }>;
    analysisTemplateGetSecurityEntryByName(name: string, webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: SecurityEntry;
    }>;
    analysisTemplateUpdate(webId: string, template: AnalysisTemplate): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    analysisTemplateUpdateSecurityEntry(name: string, webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum AssetDatabaseApiApiKeys {
}
export declare class AssetDatabaseApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: AssetDatabaseApiApiKeys, value: string): void;
    username: string;
    password: string;
    assetDatabaseAddReferencedElement(webId: string, referencedElementWebId: Array<string>, referenceType?: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetDatabaseCreateAnalysisCategory(webId: string, analysisCategory: AnalysisCategory): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetDatabaseCreateAnalysisTemplate(webId: string, template: AnalysisTemplate): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetDatabaseCreateAttributeCategory(webId: string, attributeCategory: AttributeCategory): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetDatabaseCreateElement(webId: string, element: Element): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetDatabaseCreateElementCategory(webId: string, elementCategory: ElementCategory): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetDatabaseCreateElementTemplate(webId: string, template: ElementTemplate): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetDatabaseCreateEnumerationSet(webId: string, enumerationSet: EnumerationSet): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetDatabaseCreateEventFrame(webId: string, eventFrame: EventFrame): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetDatabaseCreateSecurityEntry(webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean, securityItem?: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetDatabaseCreateTable(webId: string, table: Table): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetDatabaseCreateTableCategory(webId: string, tableCategory: TableCategory): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetDatabaseDelete(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetDatabaseDeleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean, securityItem?: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetDatabaseExport(webId: string, endTime?: string, exportMode?: Array<string>, startTime?: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetDatabaseFindAnalyses(webId: string, field: Array<string>, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number): Promise<{
        response: http.IncomingMessage;
        body: ItemsAnalysis;
    }>;
    assetDatabaseFindElementAttributes(webId: string, attributeCategory?: string, attributeDescriptionFilter?: string, attributeNameFilter?: string, attributeType?: string, elementCategory?: string, elementDescriptionFilter?: string, elementNameFilter?: string, elementTemplate?: string, elementType?: string, maxCount?: number, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number): Promise<{
        response: http.IncomingMessage;
        body: ItemsAttribute;
    }>;
    assetDatabaseFindEventFrameAttributes(webId: string, attributeCategory?: string, attributeDescriptionFilter?: string, attributeNameFilter?: string, attributeType?: string, endTime?: string, eventFrameCategory?: string, eventFrameDescriptionFilter?: string, eventFrameNameFilter?: string, eventFrameTemplate?: string, maxCount?: number, referencedElementNameFilter?: string, searchFullHierarchy?: boolean, searchMode?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsAttribute;
    }>;
    assetDatabaseGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: AssetDatabase;
    }>;
    assetDatabaseGetAnalysisCategories(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsAnalysisCategory;
    }>;
    assetDatabaseGetAnalysisTemplates(webId: string, field: Array<string>, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsAnalysisTemplate;
    }>;
    assetDatabaseGetAttributeCategories(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsAttributeCategory;
    }>;
    assetDatabaseGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: AssetDatabase;
    }>;
    assetDatabaseGetElementCategories(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsElementCategory;
    }>;
    assetDatabaseGetElementTemplates(webId: string, field: Array<string>, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsElementTemplate;
    }>;
    assetDatabaseGetElements(webId: string, categoryName?: string, descriptionFilter?: string, elementType?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsElement;
    }>;
    assetDatabaseGetEnumerationSets(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsEnumerationSet;
    }>;
    assetDatabaseGetEventFrames(webId: string, canBeAcknowledged?: boolean, categoryName?: string, endTime?: string, isAcknowledged?: boolean, maxCount?: number, nameFilter?: string, referencedElementNameFilter?: string, referencedElementTemplateName?: string, searchFullHierarchy?: boolean, searchMode?: string, selectedFields?: string, severity?: Array<string>, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string, templateName?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsEventFrame;
    }>;
    assetDatabaseGetReferencedElements(webId: string, categoryName?: string, descriptionFilter?: string, elementType?: string, maxCount?: number, nameFilter?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsElement;
    }>;
    assetDatabaseGetSecurity(webId: string, securityItem: Array<string>, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityRights;
    }>;
    assetDatabaseGetSecurityEntries(webId: string, nameFilter?: string, securityItem?: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityEntry;
    }>;
    assetDatabaseGetSecurityEntryByName(name: string, webId: string, securityItem?: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: SecurityEntry;
    }>;
    assetDatabaseGetTableCategories(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsTableCategory;
    }>;
    assetDatabaseGetTables(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsTable;
    }>;
    assetDatabaseImport(webId: string, importMode?: Array<string>): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetDatabaseRemoveReferencedElement(webId: string, referencedElementWebId: Array<string>): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetDatabaseUpdate(webId: string, database: AssetDatabase): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetDatabaseUpdateSecurityEntry(name: string, webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean, securityItem?: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum AssetServerApiApiKeys {
}
export declare class AssetServerApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: AssetServerApiApiKeys, value: string): void;
    username: string;
    password: string;
    assetServerCreateAssetDatabase(webId: string, database: AssetDatabase): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetServerCreateSecurityEntry(webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean, securityItem?: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetServerCreateSecurityIdentity(webId: string, securityIdentity: SecurityIdentity): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetServerCreateSecurityMapping(webId: string, securityMapping: SecurityMapping): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetServerCreateUnitClass(webId: string, unitClass: UnitClass): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetServerDeleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean, securityItem?: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    assetServerGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: AssetServer;
    }>;
    assetServerGetAnalysisRulePlugIns(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsAnalysisRulePlugIn;
    }>;
    assetServerGetByName(name: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: AssetServer;
    }>;
    assetServerGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: AssetServer;
    }>;
    assetServerGetDatabases(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsAssetDatabase;
    }>;
    assetServerGetSecurity(webId: string, securityItem: Array<string>, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityRights;
    }>;
    assetServerGetSecurityEntries(webId: string, nameFilter?: string, securityItem?: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityEntry;
    }>;
    assetServerGetSecurityEntryByName(name: string, webId: string, securityItem?: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: SecurityEntry;
    }>;
    assetServerGetSecurityIdentities(webId: string, field?: string, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityIdentity;
    }>;
    assetServerGetSecurityIdentitiesForUser(webId: string, userIdentity: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityIdentity;
    }>;
    assetServerGetSecurityMappings(webId: string, field?: string, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityMapping;
    }>;
    assetServerGetTimeRulePlugIns(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsTimeRulePlugIn;
    }>;
    assetServerGetUnitClasses(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsUnitClass;
    }>;
    assetServerList(selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsAssetServer;
    }>;
    assetServerUpdateSecurityEntry(name: string, webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean, securityItem?: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum AttributeApiApiKeys {
}
export declare class AttributeApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: AttributeApiApiKeys, value: string): void;
    username: string;
    password: string;
    attributeCreateAttribute(webId: string, attribute: Attribute): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    attributeCreateConfig(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    attributeDelete(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    attributeGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: Attribute;
    }>;
    attributeGetAttributes(webId: string, categoryName?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, valueType?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsAttribute;
    }>;
    attributeGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: Attribute;
    }>;
    attributeGetCategories(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsAttributeCategory;
    }>;
    attributeGetMultiple(asParallel?: boolean, includeMode?: string, path?: Array<string>, selectedFields?: string, webId?: Array<string>): Promise<{
        response: http.IncomingMessage;
        body: ItemsItemAttribute;
    }>;
    attributeGetValue(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: TimedValue;
    }>;
    attributeSetValue(webId: string, value: TimedValue): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    attributeUpdate(webId: string, attribute: Attribute): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum AttributeCategoryApiApiKeys {
}
export declare class AttributeCategoryApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: AttributeCategoryApiApiKeys, value: string): void;
    username: string;
    password: string;
    attributeCategoryCreateSecurityEntry(webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    attributeCategoryDelete(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    attributeCategoryDeleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    attributeCategoryGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: AttributeCategory;
    }>;
    attributeCategoryGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: AttributeCategory;
    }>;
    attributeCategoryGetSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityRights;
    }>;
    attributeCategoryGetSecurityEntries(webId: string, nameFilter?: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityEntry;
    }>;
    attributeCategoryGetSecurityEntryByName(name: string, webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: SecurityEntry;
    }>;
    attributeCategoryUpdate(webId: string, category: AttributeCategory): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    attributeCategoryUpdateSecurityEntry(name: string, webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum AttributeTemplateApiApiKeys {
}
export declare class AttributeTemplateApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: AttributeTemplateApiApiKeys, value: string): void;
    username: string;
    password: string;
    attributeTemplateCreateAttributeTemplate(webId: string, template: AttributeTemplate): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    attributeTemplateDelete(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    attributeTemplateGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: AttributeTemplate;
    }>;
    attributeTemplateGetAttributeTemplates(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsAttributeTemplate;
    }>;
    attributeTemplateGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: AttributeTemplate;
    }>;
    attributeTemplateGetCategories(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsAttributeCategory;
    }>;
    attributeTemplateUpdate(webId: string, template: AttributeTemplate): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum AttributeTraitApiApiKeys {
}
export declare class AttributeTraitApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: AttributeTraitApiApiKeys, value: string): void;
    username: string;
    password: string;
    attributeTraitGet(name: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: AttributeTrait;
    }>;
    attributeTraitGetByCategory(category: Array<string>, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsAttributeTrait;
    }>;
}
export declare enum BatchApiApiKeys {
}
export declare class BatchApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: BatchApiApiKeys, value: string): void;
    username: string;
    password: string;
    batchExecute(batch: any): Promise<{
        response: http.IncomingMessage;
        body: {
            [key: string]: Response;
        };
    }>;
}
export declare enum CalculationApiApiKeys {
}
export declare class CalculationApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: CalculationApiApiKeys, value: string): void;
    username: string;
    password: string;
    calculationGetAtIntervals(endTime?: string, expression?: string, sampleInterval?: string, selectedFields?: string, startTime?: string, webId?: string): Promise<{
        response: http.IncomingMessage;
        body: TimedValues;
    }>;
    calculationGetAtRecorded(endTime?: string, expression?: string, selectedFields?: string, startTime?: string, webId?: string): Promise<{
        response: http.IncomingMessage;
        body: TimedValues;
    }>;
    calculationGetAtTimes(expression?: string, selectedFields?: string, sortOrder?: string, time?: Array<string>, webId?: string): Promise<{
        response: http.IncomingMessage;
        body: TimedValues;
    }>;
    calculationGetSummary(calculationBasis?: string, endTime?: string, expression?: string, sampleInterval?: string, sampleType?: string, selectedFields?: string, startTime?: string, summaryDuration?: string, summaryType?: Array<string>, timeType?: string, webId?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSummaryValue;
    }>;
}
export declare enum ChannelApiApiKeys {
}
export declare class ChannelApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: ChannelApiApiKeys, value: string): void;
    username: string;
    password: string;
    channelInstances(): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum ConfigurationApiApiKeys {
}
export declare class ConfigurationApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: ConfigurationApiApiKeys, value: string): void;
    username: string;
    password: string;
    configurationDelete(key: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    configurationGet(key: string): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    configurationList(): Promise<{
        response: http.IncomingMessage;
        body: {
            [key: string]: any;
        };
    }>;
}
export declare enum DataServerApiApiKeys {
}
export declare class DataServerApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: DataServerApiApiKeys, value: string): void;
    username: string;
    password: string;
    dataServerCreateEnumerationSet(webId: string, enumerationSet: EnumerationSet): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    dataServerCreatePoint(webId: string, pointDTO: Point): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    dataServerGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: DataServer;
    }>;
    dataServerGetByName(name: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: DataServer;
    }>;
    dataServerGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: DataServer;
    }>;
    dataServerGetEnumerationSets(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsEnumerationSet;
    }>;
    dataServerGetPoints(webId: string, maxCount?: number, nameFilter?: string, selectedFields?: string, startIndex?: number): Promise<{
        response: http.IncomingMessage;
        body: ItemsPoint;
    }>;
    dataServerList(selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsDataServer;
    }>;
}
export declare enum ElementApiApiKeys {
}
export declare class ElementApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: ElementApiApiKeys, value: string): void;
    username: string;
    password: string;
    elementAddReferencedElement(webId: string, referencedElementWebId: Array<string>, referenceType?: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    elementCreateAnalysis(webId: string, analysis: Analysis): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    elementCreateAttribute(webId: string, attribute: Attribute): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    elementCreateConfig(webId: string, includeChildElements?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    elementCreateElement(webId: string, element: Element): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    elementCreateSearchByAttribute(): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    elementCreateSecurityEntry(webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    elementDelete(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    elementDeleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    elementExecuteSearchByAttribute(searchId: string, categoryName?: string, descriptionFilter?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    elementFindElementAttributes(webId: string, attributeCategory?: string, attributeDescriptionFilter?: string, attributeNameFilter?: string, attributeType?: string, elementCategory?: string, elementDescriptionFilter?: string, elementNameFilter?: string, elementTemplate?: string, elementType?: string, maxCount?: number, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number): Promise<{
        response: http.IncomingMessage;
        body: ItemsAttribute;
    }>;
    elementGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: Element;
    }>;
    elementGetAnalyses(webId: string, maxCount?: number, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number): Promise<{
        response: http.IncomingMessage;
        body: ItemsAnalysis;
    }>;
    elementGetAttributes(webId: string, categoryName?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, valueType?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsAttribute;
    }>;
    elementGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: Element;
    }>;
    elementGetCategories(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsElementCategory;
    }>;
    elementGetElements(webId: string, categoryName?: string, descriptionFilter?: string, elementType?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsElement;
    }>;
    elementGetEventFrames(webId: string, canBeAcknowledged?: boolean, categoryName?: string, endTime?: string, isAcknowledged?: boolean, maxCount?: number, nameFilter?: string, searchMode?: string, selectedFields?: string, severity?: Array<string>, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string, templateName?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsEventFrame;
    }>;
    elementGetMultiple(asParallel?: boolean, includeMode?: string, path?: Array<string>, selectedFields?: string, webId?: Array<string>): Promise<{
        response: http.IncomingMessage;
        body: ItemsItemElement;
    }>;
    elementGetReferencedElements(webId: string, categoryName?: string, descriptionFilter?: string, elementType?: string, maxCount?: number, nameFilter?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsElement;
    }>;
    elementGetSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityRights;
    }>;
    elementGetSecurityEntries(webId: string, nameFilter?: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityEntry;
    }>;
    elementGetSecurityEntryByName(name: string, webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: SecurityEntry;
    }>;
    elementRemoveReferencedElement(webId: string, referencedElementWebId: Array<string>): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    elementUpdate(webId: string, element: Element): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    elementUpdateSecurityEntry(name: string, webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum ElementCategoryApiApiKeys {
}
export declare class ElementCategoryApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: ElementCategoryApiApiKeys, value: string): void;
    username: string;
    password: string;
    elementCategoryCreateSecurityEntry(webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    elementCategoryDelete(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    elementCategoryDeleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    elementCategoryGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ElementCategory;
    }>;
    elementCategoryGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ElementCategory;
    }>;
    elementCategoryGetSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityRights;
    }>;
    elementCategoryGetSecurityEntries(webId: string, nameFilter?: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityEntry;
    }>;
    elementCategoryGetSecurityEntryByName(name: string, webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: SecurityEntry;
    }>;
    elementCategoryUpdate(webId: string, elementCategory: ElementCategory): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    elementCategoryUpdateSecurityEntry(name: string, webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum ElementTemplateApiApiKeys {
}
export declare class ElementTemplateApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: ElementTemplateApiApiKeys, value: string): void;
    username: string;
    password: string;
    elementTemplateCreateAttributeTemplate(webId: string, template: AttributeTemplate): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    elementTemplateCreateSecurityEntry(webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    elementTemplateDelete(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    elementTemplateDeleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    elementTemplateGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ElementTemplate;
    }>;
    elementTemplateGetAnalysisTemplates(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsAnalysisTemplate;
    }>;
    elementTemplateGetAttributeTemplates(webId: string, selectedFields?: string, showInherited?: boolean): Promise<{
        response: http.IncomingMessage;
        body: ItemsAttributeTemplate;
    }>;
    elementTemplateGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ElementTemplate;
    }>;
    elementTemplateGetCategories(webId: string, selectedFields?: string, showInherited?: boolean): Promise<{
        response: http.IncomingMessage;
        body: ItemsElementCategory;
    }>;
    elementTemplateGetSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityRights;
    }>;
    elementTemplateGetSecurityEntries(webId: string, nameFilter?: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityEntry;
    }>;
    elementTemplateGetSecurityEntryByName(name: string, webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityEntry;
    }>;
    elementTemplateUpdate(webId: string, template: ElementTemplate): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    elementTemplateUpdateSecurityEntry(name: string, webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum EnumerationSetApiApiKeys {
}
export declare class EnumerationSetApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: EnumerationSetApiApiKeys, value: string): void;
    username: string;
    password: string;
    enumerationSetCreateSecurityEntry(webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    enumerationSetCreateValue(webId: string, enumerationValue: EnumerationValue): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    enumerationSetDelete(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    enumerationSetDeleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    enumerationSetGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: EnumerationSet;
    }>;
    enumerationSetGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: EnumerationSet;
    }>;
    enumerationSetGetSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityRights;
    }>;
    enumerationSetGetSecurityEntries(webId: string, nameFilter?: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityEntry;
    }>;
    enumerationSetGetSecurityEntryByName(name: string, webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: SecurityEntry;
    }>;
    enumerationSetGetValues(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsEnumerationValue;
    }>;
    enumerationSetUpdate(webId: string, enumerationSet: EnumerationSet): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    enumerationSetUpdateSecurityEntry(name: string, webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum EnumerationValueApiApiKeys {
}
export declare class EnumerationValueApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: EnumerationValueApiApiKeys, value: string): void;
    username: string;
    password: string;
    enumerationValueDeleteEnumerationValue(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    enumerationValueGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: EnumerationValue;
    }>;
    enumerationValueGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: EnumerationValue;
    }>;
    enumerationValueUpdateEnumerationValue(webId: string, enumerationValue: EnumerationValue): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum EventFrameApiApiKeys {
}
export declare class EventFrameApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: EventFrameApiApiKeys, value: string): void;
    username: string;
    password: string;
    eventFrameAcknowledge(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    eventFrameCaptureValues(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    eventFrameCreateAnnotation(webId: string, annotation: Annotation): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    eventFrameCreateAttribute(webId: string, attribute: Attribute): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    eventFrameCreateConfig(webId: string, includeChildElements?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    eventFrameCreateEventFrame(webId: string, eventFrame: EventFrame): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    eventFrameCreateSearchByAttribute(): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    eventFrameCreateSecurityEntry(webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    eventFrameDelete(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    eventFrameDeleteAnnotation(id: string, webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    eventFrameDeleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    eventFrameExecuteSearchByAttribute(searchId: string, canBeAcknowledged?: boolean, endTime?: string, isAcknowledged?: boolean, maxCount?: number, nameFilter?: string, referencedElementNameFilter?: string, searchFullHierarchy?: boolean, searchMode?: string, selectedFields?: string, severity?: Array<string>, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    eventFrameFindEventFrameAttributes(webId: string, attributeCategory?: string, attributeDescriptionFilter?: string, attributeNameFilter?: string, attributeType?: string, endTime?: string, eventFrameCategory?: string, eventFrameDescriptionFilter?: string, eventFrameNameFilter?: string, eventFrameTemplate?: string, maxCount?: number, referencedElementNameFilter?: string, searchFullHierarchy?: boolean, searchMode?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsAttribute;
    }>;
    eventFrameGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: EventFrame;
    }>;
    eventFrameGetAnnotationById(id: string, webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: Annotation;
    }>;
    eventFrameGetAnnotations(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsAnnotation;
    }>;
    eventFrameGetAttributes(webId: string, categoryName?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, valueType?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsAttribute;
    }>;
    eventFrameGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: EventFrame;
    }>;
    eventFrameGetCategories(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsElementCategory;
    }>;
    eventFrameGetEventFrames(webId: string, canBeAcknowledged?: boolean, categoryName?: string, endTime?: string, isAcknowledged?: boolean, maxCount?: number, nameFilter?: string, referencedElementNameFilter?: string, referencedElementTemplateName?: string, searchFullHierarchy?: boolean, searchMode?: string, selectedFields?: string, severity?: Array<string>, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string, templateName?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsEventFrame;
    }>;
    eventFrameGetMultiple(asParallel?: boolean, includeMode?: string, path?: Array<string>, selectedFields?: string, webId?: Array<string>): Promise<{
        response: http.IncomingMessage;
        body: ItemsItemEventFrame;
    }>;
    eventFrameGetReferencedElements(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsElement;
    }>;
    eventFrameGetSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityRights;
    }>;
    eventFrameGetSecurityEntries(webId: string, nameFilter?: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityEntry;
    }>;
    eventFrameGetSecurityEntryByName(name: string, webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: SecurityEntry;
    }>;
    eventFrameUpdate(webId: string, eventFrame: EventFrame): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    eventFrameUpdateAnnotation(id: string, webId: string, annotation: Annotation): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    eventFrameUpdateSecurityEntry(name: string, webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum HomeApiApiKeys {
}
export declare class HomeApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: HomeApiApiKeys, value: string): void;
    username: string;
    password: string;
    homeGet(): Promise<{
        response: http.IncomingMessage;
        body: Landing;
    }>;
}
export declare enum PointApiApiKeys {
}
export declare class PointApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: PointApiApiKeys, value: string): void;
    username: string;
    password: string;
    pointDelete(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    pointGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: Point;
    }>;
    pointGetAttributeByName(name: string, webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: PointAttribute;
    }>;
    pointGetAttributes(webId: string, name?: Array<string>, nameFilter?: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsPointAttribute;
    }>;
    pointGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: Point;
    }>;
    pointGetMultiple(asParallel?: boolean, includeMode?: string, path?: Array<string>, selectedFields?: string, webId?: Array<string>): Promise<{
        response: http.IncomingMessage;
        body: ItemsItemPoint;
    }>;
    pointUpdate(webId: string, pointDTO: Point): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum SecurityIdentityApiApiKeys {
}
export declare class SecurityIdentityApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: SecurityIdentityApiApiKeys, value: string): void;
    username: string;
    password: string;
    securityIdentityDelete(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    securityIdentityGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: SecurityIdentity;
    }>;
    securityIdentityGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: SecurityIdentity;
    }>;
    securityIdentityGetSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityRights;
    }>;
    securityIdentityGetSecurityEntries(webId: string, nameFilter?: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityEntry;
    }>;
    securityIdentityGetSecurityEntryByName(name: string, webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: SecurityEntry;
    }>;
    securityIdentityGetSecurityMappings(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityMapping;
    }>;
    securityIdentityUpdate(webId: string, securityIdentity: SecurityIdentity): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum SecurityMappingApiApiKeys {
}
export declare class SecurityMappingApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: SecurityMappingApiApiKeys, value: string): void;
    username: string;
    password: string;
    securityMappingDelete(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    securityMappingGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: SecurityMapping;
    }>;
    securityMappingGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: SecurityMapping;
    }>;
    securityMappingGetSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityRights;
    }>;
    securityMappingGetSecurityEntries(webId: string, nameFilter?: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityEntry;
    }>;
    securityMappingGetSecurityEntryByName(name: string, webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: SecurityEntry;
    }>;
    securityMappingUpdate(webId: string, securityMapping: SecurityMapping): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum StreamApiApiKeys {
}
export declare class StreamApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: StreamApiApiKeys, value: string): void;
    username: string;
    password: string;
    streamGetChannel(webId: string, includeInitialValues?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    streamGetEnd(webId: string, desiredUnits?: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: TimedValue;
    }>;
    streamGetInterpolated(webId: string, desiredUnits?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, interval?: string, selectedFields?: string, startTime?: string, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: TimedValues;
    }>;
    streamGetInterpolatedAtTimes(webId: string, desiredUnits?: string, filterExpression?: string, includeFilteredValues?: boolean, selectedFields?: string, sortOrder?: string, time?: Array<string>, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: TimedValues;
    }>;
    streamGetPlot(webId: string, desiredUnits?: string, endTime?: string, intervals?: number, selectedFields?: string, startTime?: string, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: TimedValues;
    }>;
    streamGetRecorded(webId: string, boundaryType?: string, desiredUnits?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, maxCount?: number, selectedFields?: string, startTime?: string, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: TimedValues;
    }>;
    streamGetRecordedAtTime(webId: string, time: string, desiredUnits?: string, retrievalMode?: string, selectedFields?: string, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: TimedValue;
    }>;
    streamGetRecordedAtTimes(webId: string, desiredUnits?: string, retrievalMode?: string, selectedFields?: string, sortOrder?: string, time?: Array<string>, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: TimedValues;
    }>;
    streamGetSummary(webId: string, calculationBasis?: string, endTime?: string, filterExpression?: string, sampleInterval?: string, sampleType?: string, selectedFields?: string, startTime?: string, summaryDuration?: string, summaryType?: Array<string>, timeType?: string, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSummaryValue;
    }>;
    streamGetValue(webId: string, desiredUnits?: string, selectedFields?: string, time?: string, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: TimedValue;
    }>;
    streamUpdateValue(webId: string, value: TimedValue, bufferOption?: string, updateOption?: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    streamUpdateValues(webId: string, values: Array<TimedValue>, bufferOption?: string, updateOption?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSubstatus;
    }>;
}
export declare enum StreamSetApiApiKeys {
}
export declare class StreamSetApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: StreamSetApiApiKeys, value: string): void;
    username: string;
    password: string;
    streamSetGetChannel(webId: string, categoryName?: string, includeInitialValues?: boolean, nameFilter?: string, searchFullHierarchy?: boolean, showExcluded?: boolean, showHidden?: boolean, templateName?: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    streamSetGetChannelAdHoc(webId: Array<string>, includeInitialValues?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    streamSetGetEnd(webId: string, categoryName?: string, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, templateName?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsStreamValue;
    }>;
    streamSetGetEndAdHoc(webId: Array<string>, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsStreamValues;
    }>;
    streamSetGetInterpolated(webId: string, categoryName?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, interval?: string, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, startTime?: string, templateName?: string, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsStreamValues;
    }>;
    streamSetGetInterpolatedAdHoc(webId: Array<string>, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, interval?: string, selectedFields?: string, startTime?: string, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsStreamValues;
    }>;
    streamSetGetInterpolatedAtTimes(webId: string, time: Array<string>, categoryName?: string, filterExpression?: string, includeFilteredValues?: boolean, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortOrder?: string, templateName?: string, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsStreamValues;
    }>;
    streamSetGetInterpolatedAtTimesAdHoc(time: Array<string>, webId: Array<string>, filterExpression?: string, includeFilteredValues?: boolean, selectedFields?: string, sortOrder?: string, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsStreamValues;
    }>;
    streamSetGetPlot(webId: string, categoryName?: string, endTime?: string, intervals?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, startTime?: string, templateName?: string, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsStreamValues;
    }>;
    streamSetGetPlotAdHoc(webId: Array<string>, endTime?: string, intervals?: number, selectedFields?: string, startTime?: string, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsStreamValues;
    }>;
    streamSetGetRecorded(webId: string, boundaryType?: string, categoryName?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, startTime?: string, templateName?: string, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsStreamValues;
    }>;
    streamSetGetRecordedAdHoc(webId: Array<string>, boundaryType?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, maxCount?: number, selectedFields?: string, startTime?: string, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsStreamValues;
    }>;
    streamSetGetRecordedAtTime(webId: string, time: string, categoryName?: string, nameFilter?: string, retrievalMode?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, templateName?: string, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsStreamValues;
    }>;
    streamSetGetRecordedAtTimeAdHoc(time: string, webId: Array<string>, retrievalMode?: string, selectedFields?: string, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsStreamValue;
    }>;
    streamSetGetRecordedAtTimes(webId: string, time: Array<string>, categoryName?: string, nameFilter?: string, retrievalMode?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortOrder?: string, templateName?: string, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsStreamValues;
    }>;
    streamSetGetRecordedAtTimesAdHoc(time: Array<string>, webId: Array<string>, retrievalMode?: string, selectedFields?: string, sortOrder?: string, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsStreamValues;
    }>;
    streamSetGetSummaries(webId: string, calculationBasis?: string, categoryName?: string, endTime?: string, filterExpression?: string, nameFilter?: string, sampleInterval?: string, sampleType?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, startTime?: string, summaryDuration?: string, summaryType?: Array<string>, templateName?: string, timeType?: string, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsStreamSummaries;
    }>;
    streamSetGetSummariesAdHoc(webId: Array<string>, calculationBasis?: string, endTime?: string, filterExpression?: string, sampleInterval?: string, sampleType?: string, selectedFields?: string, startTime?: string, summaryDuration?: string, summaryType?: Array<string>, timeType?: string, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsStreamSummaries;
    }>;
    streamSetGetValues(webId: string, categoryName?: string, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, templateName?: string, time?: string, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsStreamValue;
    }>;
    streamSetGetValuesAdHoc(webId: Array<string>, selectedFields?: string, time?: string, timeZone?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsStreamValue;
    }>;
    streamSetUpdateValue(webId: string, values: Array<StreamValue>, bufferOption?: string, updateOption?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSubstatus;
    }>;
    streamSetUpdateValueAdHoc(values: Array<StreamValues>, bufferOption?: string, updateOption?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSubstatus;
    }>;
    streamSetUpdateValues(webId: string, values: Array<StreamValues>, bufferOption?: string, updateOption?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsItemsSubstatus;
    }>;
    streamSetUpdateValuesAdHoc(values: Array<StreamValues>, bufferOption?: string, updateOption?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsItemsSubstatus;
    }>;
}
export declare enum SystemApiApiKeys {
}
export declare class SystemApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: SystemApiApiKeys, value: string): void;
    username: string;
    password: string;
    systemCacheInstances(): Promise<{
        response: http.IncomingMessage;
        body: ItemsCacheInstance;
    }>;
    systemLanding(): Promise<{
        response: http.IncomingMessage;
        body: SystemLanding;
    }>;
    systemStatus(): Promise<{
        response: http.IncomingMessage;
        body: SystemStatus;
    }>;
    systemUserInfo(): Promise<{
        response: http.IncomingMessage;
        body: UserInfo;
    }>;
    systemVersions(): Promise<{
        response: http.IncomingMessage;
        body: {
            [key: string]: Version;
        };
    }>;
}
export declare enum TableApiApiKeys {
}
export declare class TableApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: TableApiApiKeys, value: string): void;
    username: string;
    password: string;
    tableCreateSecurityEntry(webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    tableDelete(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    tableDeleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    tableGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: Table;
    }>;
    tableGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: Table;
    }>;
    tableGetCategories(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsTableCategory;
    }>;
    tableGetData(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    tableGetSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityRights;
    }>;
    tableGetSecurityEntries(webId: string, nameFilter?: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityEntry;
    }>;
    tableGetSecurityEntryByName(name: string, webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: SecurityEntry;
    }>;
    tableUpdate(webId: string, table: Table): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    tableUpdateData(webId: string, data: TableData): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    tableUpdateSecurityEntry(name: string, webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum TableCategoryApiApiKeys {
}
export declare class TableCategoryApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: TableCategoryApiApiKeys, value: string): void;
    username: string;
    password: string;
    tableCategoryCreateSecurityEntry(webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    tableCategoryDelete(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    tableCategoryDeleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    tableCategoryGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: TableCategory;
    }>;
    tableCategoryGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: TableCategory;
    }>;
    tableCategoryGetSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityRights;
    }>;
    tableCategoryGetSecurityEntries(webId: string, nameFilter?: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: ItemsSecurityEntry;
    }>;
    tableCategoryGetSecurityEntryByName(name: string, webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: SecurityEntry;
    }>;
    tableCategoryUpdate(webId: string, tableCategory: TableCategory): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    tableCategoryUpdateSecurityEntry(name: string, webId: string, securityEntry: SecurityEntry, applyToChildren?: boolean): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum TimeRuleApiApiKeys {
}
export declare class TimeRuleApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: TimeRuleApiApiKeys, value: string): void;
    username: string;
    password: string;
    timeRuleDelete(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    timeRuleGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: TimeRule;
    }>;
    timeRuleGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: TimeRule;
    }>;
    timeRuleUpdate(webId: string, timeRule: TimeRule): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum TimeRulePlugInApiApiKeys {
}
export declare class TimeRulePlugInApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: TimeRulePlugInApiApiKeys, value: string): void;
    username: string;
    password: string;
    timeRulePlugInGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: TimeRulePlugIn;
    }>;
    timeRulePlugInGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: TimeRulePlugIn;
    }>;
}
export declare enum UnitApiApiKeys {
}
export declare class UnitApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: UnitApiApiKeys, value: string): void;
    username: string;
    password: string;
    unitDelete(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    unitGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: Unit;
    }>;
    unitGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: Unit;
    }>;
    unitUpdate(webId: string, unitDTO: Unit): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum UnitClassApiApiKeys {
}
export declare class UnitClassApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: any;
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setApiKey(key: UnitClassApiApiKeys, value: string): void;
    username: string;
    password: string;
    unitClassCreateUnit(webId: string, unitDTO: Unit): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    unitClassDelete(webId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    unitClassGet(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: UnitClass;
    }>;
    unitClassGetByPath(path: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: UnitClass;
    }>;
    unitClassGetCanonicalUnit(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: Unit;
    }>;
    unitClassGetUnits(webId: string, selectedFields?: string): Promise<{
        response: http.IncomingMessage;
        body: Unit;
    }>;
    unitClassUpdate(webId: string, unitClassDTO: UnitClass): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
