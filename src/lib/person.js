"use strict";
var FullName = (function () {
    function FullName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    FullName.prototype.getFullName = function () {
        if (this.firstName == null || this.lastName == null) {
            return "";
        }
        return "Your name is " + this.firstName + " " + this.lastName + "!";
    };
    return FullName;
}());
exports.FullName = FullName;
var Address = (function () {
    function Address(country, city, street, zipCode) {
        this.country = country;
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
    }
    Address.prototype.toString = function () {
        return this.country + " " + this.city + " " + this.street + " " + this.zipCode;
    };
    return Address;
}());
exports.Address = Address;
