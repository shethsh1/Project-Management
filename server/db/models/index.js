

const User = require("./user");
const Project = require("./project")
const User_Project = require("./userProject")





// associations
User.belongsToMany(Project, { through: User_Project });

//User.hasMany(Project)

/*
User.hasMany(Conversation);
Conversation.belongsTo(User, { as: "user1" });
Conversation.belongsTo(User, { as: "user2" });
Message.belongsTo(Conversation);
Conversation.hasMany(Message);
*/
module.exports = {
  User,
  Project,
  User_Project
};
