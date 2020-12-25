import { User } from "./models/User";

const user = new User({name: "Oleh", age: 33});
user.set({name: "new name"})
console.log(user.get("name"));
