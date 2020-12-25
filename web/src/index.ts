import { User } from "./models/User";

const user = new User({name: "Oleh", age: 33});
user.get("name");
console.log(user.get("age"));
