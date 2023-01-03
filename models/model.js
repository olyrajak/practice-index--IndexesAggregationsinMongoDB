var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, index: true },
    mobileNo: { type: number, minlength: 10, required: true },
    family: {
      father: { type: String, required: true },
      mother: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
);
UserSchema.index({ name: 1, mobileNo: 1 });
// UserSchema.index({ name: 1 });
UserSchema.index({ "family.father": 1 });
var User = mongoose.model("User", UserSchema);

module.exports = User;
