const moongoose = require("mongoose");

const userSchema = moongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, require: true },
    password: { type: String, required: true },
    profilePhoto: {
        type: String,
        required: true,
        default: "https://user-images.githubusercontent.com/109169835/209937711-b697a38f-a150-43ab-8f55-3b62a59d1eaf.png"
    }
}, { timestamps: true });

const User = moongoose.model("User", userSchema);

module.exports = User;
