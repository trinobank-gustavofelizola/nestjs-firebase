"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirebaseAdmin = void 0;
const tslib_1 = require("tslib");
const admin = tslib_1.__importStar(require("firebase-admin"));
const createInstances = (app, initDatabase = false) => ({
    auth: app.auth(),
    messaging: app.messaging(),
    firestore: app.firestore(),
    database: initDatabase ? app.database() : undefined,
    storage: app.storage(),
    remoteConfig: app.remoteConfig(),
});
const getFirebaseAdmin = (options) => {
    if (!options || Object.values(options).filter((v) => !!v).length === 0) {
        return createInstances(admin.initializeApp());
    }
    const { googleApplicationCredential: serviceAccountPath, ...appOptions } = options;
    return createInstances(admin.initializeApp({
        credential: serviceAccountPath
            ? admin.credential.cert(serviceAccountPath)
            : undefined,
        ...appOptions,
    }), !!appOptions.databaseURL);
};
exports.getFirebaseAdmin = getFirebaseAdmin;
//# sourceMappingURL=getFirebaseAdmin.js.map