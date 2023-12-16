"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeData = exports.isValidImage = exports.isValidDate = exports.isBoolean = exports.stripHTML = exports.isOverDaysOld = exports.isOfAge = exports.isValidAlphaNum = exports.isValidString = exports.isValidPhone = exports.isValidName = exports.isValidUserName = exports.isValidEmail = void 0;
const emailRegex = /^[a-z]+(_|\.)?[a-z0-9]*@[a-z]+\.[a-z]{2,}$/i;
const userNameRegex = /^[a-z0-9_]+$/;
const nameRegex = /^[a-z-]+$/i;
const phoneRegex = /^[0-9-+]+$/i;
const validStringRegex = /([^\s])/;
const alphaNumRegex = /^[a-z0-9]+$/i;
const htmlRegex = /<\/?[^>]+(>|$)/gi;
/**
 * @description Checks if input email is valid
 * @method function
 * @param {String} email - string to test if is valid email
 * @return {Boolean} returns true if is valid email
 * */
const isValidEmail = (email) => (email ? emailRegex.test(email) : false);
exports.isValidEmail = isValidEmail;
const isValidUserName = (userName) => (userName ? userNameRegex.test(userName) : false);
exports.isValidUserName = isValidUserName;
const isValidName = (name) => (name ? nameRegex.test(name) : false);
exports.isValidName = isValidName;
const isValidPhone = (phone) => (phone ? phoneRegex.test(phone) : false);
exports.isValidPhone = isValidPhone;
const isValidString = (str) => (str ? validStringRegex.test(str) : false);
exports.isValidString = isValidString;
const isValidAlphaNum = (str) => (str ? alphaNumRegex.test(str) : false);
exports.isValidAlphaNum = isValidAlphaNum;
const isOfAge = (dateOfBirth, requiredAge) => {
    if (!dateOfBirth)
        return false;
    if (Date.parse(dateOfBirth.toString()) > Date.now())
        return false;
    if (Date.parse(dateOfBirth.toString())) {
        const dob = new Date(dateOfBirth);
        const ageDiff = new Date(Date.now() - dob.getTime());
        const age = Math.abs(ageDiff.getUTCFullYear() - 1970);
        return age >= requiredAge;
    }
    return false;
};
exports.isOfAge = isOfAge;
const isOverDaysOld = (date, days) => {
    if (!date)
        return false;
    if (Date.parse(date.toString()) >= Date.now())
        return false;
    if (Date.parse(date.toString())) {
        const dateDiff = new Date(Date.now() - Date.parse(date));
        const dateDiffInDays = Math.abs(dateDiff.getUTCDate() - 1);
        return dateDiffInDays >= days;
    }
    return false;
};
exports.isOverDaysOld = isOverDaysOld;
const stripHTML = (html) => html.replace(htmlRegex, '');
exports.stripHTML = stripHTML;
const isBoolean = (val) => Boolean(val) === val;
exports.isBoolean = isBoolean;
const isValidDate = (datelike) => new Date(datelike) instanceof Date && !Number.isNaN(datelike) && typeof datelike !== 'boolean' && new Date(datelike).toString() !== 'Invalid Date';
exports.isValidDate = isValidDate;
const isValidImage = (mimetype) => {
    const validMimeTypes = {
        jpg: 'image/jpg',
        jpeg: 'image/jpeg',
        gif: 'image/gif',
        png: 'image/png',
        svg: 'image/svg+xml',
        webp: 'image/webp',
        bmp: 'image/bmp'
    };
    return mimetype ? validMimeTypes[mimetype.split('/')[1]] : false;
};
exports.isValidImage = isValidImage;
const sanitizeData = (fields, data) => {
    const sanitizedData = {};
    fields.forEach((field) => {
        if ((0, exports.isBoolean)(data[field])) {
            sanitizedData[field] = data[field];
            return;
        }
        if (typeof (data[field]) === 'number') {
            sanitizedData[field] = data[field];
            return;
        }
        if (data[field]) {
            sanitizedData[field] = data[field];
            if ((0, exports.isValidDate)(data[field])) {
                sanitizedData[field] = new Date(data[field]);
            }
        }
    });
    return sanitizedData;
};
exports.sanitizeData = sanitizeData;
