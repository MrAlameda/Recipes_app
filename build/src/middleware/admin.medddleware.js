"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adminValidate = (req, res, next) => {
    const role = req.user.role;
    if (role == "admin") {
        return next();
    }
    else {
        res.status(401).json({ message: "acces denied" });
    }
};
exports.default = adminValidate;
