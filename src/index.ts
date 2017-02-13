import * as _  from "lodash";
import * as  Hapi  from "hapi";

import * as Person from "./lib/person";

const server: Hapi.Server = new Hapi.Server();
const serverOptions: { port: number, host: string} = { port: 3000, host: "localhost" };
server.connection(serverOptions);

server.route({
  method: "GET",
  path: "/",
  handler(request, reply) {
    const address: Person.Address = new Person.Address("country", "city", "street", 123);
    address.zipCode = _.add(1000, address.zipCode);

    reply(`Hello, stranger! Your address is ${address.toString()}`);
  },
});

server.route({
  method: "GET",
  path: "/{firstname}-{lastname}",
  handler(request, reply) {
    const fullName: Person.FullName = new Person.FullName(request.params.firstname, request.params.lastname);

    reply(fullName.getFullName());
  },
});

server.start((error) => {
  if (error) {
    throw error;
  }
  console.log(`Server running at: ${server.info.uri}`);
});

type Callback = (error?: Error | null, result?: string) => void;
function start(callback: Callback) {
  if (process.env.NODE_ENV === "test") {
    return callback(new Error("test"));
  }

  return callback(null, "bla");
}
