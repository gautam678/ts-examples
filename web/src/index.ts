import { User } from "./models/User";

const user = new User({ name: "Gautam", id: 2 });

user.sync.save();
