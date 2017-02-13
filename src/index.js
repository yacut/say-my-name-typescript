"use strict";
var _ = require("lodash");
var Hapi = require("hapi");
var Person = require("./lib/person");
var server = new Hapi.Server();
var serverOptions = { port: 3000, host: "localhost" };
server.connection(serverOptions);
server.route({
    method: "GET",
    path: "/",
    handler: function (request, reply) {
        var address = new Person.Address("country", "city", "street", 123);
        address.zipCode = _.add(1000, address.zipCode);
        reply("Hello, stranger! Your address is " + address.toString());
    },
});
server.route({
    method: "GET",
    path: "/{firstname}-{lastname}",
    handler: function (request, reply) {
        var fullName = new Person.FullName(request.params.firstname, request.params.lastname);
        reply(fullName.getFullName());
    },
});
server.start(function (error) {
    if (error) {
        throw error;
    }
    console.log("Server running at: " + server.info.uri);
});
function start(callback) {
    if (process.env.NODE_ENV === "test") {
        return callback(new Error("test"));
    }
    return callback(null, "bla");
}
