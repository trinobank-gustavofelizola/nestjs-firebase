"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectFirebaseAdmin = InjectFirebaseAdmin;
const common_1 = require("@nestjs/common");
const firebase_constants_1 = require("./firebase.constants");
function InjectFirebaseAdmin() {
    return (0, common_1.Inject)(firebase_constants_1.FirebaseConstants.FIREBASE_TOKEN);
}
//# sourceMappingURL=firebase.decorator.js.map