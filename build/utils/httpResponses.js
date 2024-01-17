"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpStatus = exports.httpResponses = void 0;
const ServiceResponse_1 = require("../@types/ServiceResponse");
var StatusTypes;
(function (StatusTypes) {
    StatusTypes["OK"] = "OK";
    StatusTypes["BadRequest"] = "BadRequest";
    StatusTypes["Unauthorized"] = "Unauthorized";
    StatusTypes["Forbidden"] = "Forbidden";
    StatusTypes["NotFound"] = "NotFound";
    StatusTypes["TimeoutError"] = "TimeoutError";
    StatusTypes["TooManyRequests"] = "TooManyRequests";
    StatusTypes["MethodNotAllowed"] = "MethodNotAllowed";
    StatusTypes["ExpectationFailed"] = "ExpectationFailed";
    StatusTypes["InternalServerError"] = "InternalServerError";
    StatusTypes["UnProcessableEntity"] = "UnProcessableEntity";
    StatusTypes["UnSupportedMediaType"] = "UnSupportedMediaType";
})(StatusTypes || (StatusTypes = {}));
const httpStatus = {
    [StatusTypes.OK]: { statusCode: 200, message: 'OK' },
    [StatusTypes.BadRequest]: { statusCode: 400, message: 'Bad Request' },
    [StatusTypes.Unauthorized]: { statusCode: 401, message: 'Unauthorized' },
    [StatusTypes.Forbidden]: { statusCode: 403, message: 'Forbidden' },
    [StatusTypes.NotFound]: { statusCode: 404, message: 'Not found' },
    [StatusTypes.TimeoutError]: { statusCode: 408, message: 'Request timeout' },
    [StatusTypes.TooManyRequests]: { statusCode: 429, message: 'Too many requests' },
    [StatusTypes.MethodNotAllowed]: { statusCode: 405, message: 'Method Not Allowed' },
    [StatusTypes.ExpectationFailed]: { statusCode: 417, message: 'Expectation Failed' },
    [StatusTypes.InternalServerError]: { statusCode: 500, message: 'Internal Server Error' },
    [StatusTypes.UnProcessableEntity]: { statusCode: 422, message: 'Unprocessable Entity' },
    [StatusTypes.UnSupportedMediaType]: { statusCode: 415, message: 'Unsupported Media Type' }
};
exports.httpStatus = httpStatus;
let httpResponses = {};
exports.httpResponses = httpResponses;
Object.keys(StatusTypes).forEach(status => {
    httpResponses[status] = ({ message = httpStatus[status].message, data = {}, success = true, error = null, errMessage = null, fix = httpStatus[status].statusCode < 300 ? null : 'please contact support', newAccessToken = null }) => {
        return new ServiceResponse_1.ServiceResponse(message, data, success, httpStatus[status].statusCode, error, errMessage, fix, newAccessToken);
    };
});
