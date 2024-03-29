"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRoutes = void 0;
const express_1 = __importDefault(require("express"));
const profile_controller_1 = require("./profile.controller");
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const router = express_1.default.Router();
router.post('/create-profile', (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER), profile_controller_1.ProfileController.createProfile);
router.get('/:user_id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER), profile_controller_1.ProfileController.getSingleProfileByUserId);
router.put('/update/:user_id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER), profile_controller_1.ProfileController.updateSingleProfileByUserId);
exports.ProfileRoutes = router;
