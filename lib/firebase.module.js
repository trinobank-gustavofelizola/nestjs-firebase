"use strict";
var FirebaseModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const firebase_constants_1 = require("./firebase.constants");
const util_1 = require("./util");
let FirebaseModule = FirebaseModule_1 = class FirebaseModule {
    static forRoot(options) {
        const provider = {
            provide: firebase_constants_1.FirebaseConstants.FIREBASE_TOKEN,
            useValue: (0, util_1.getFirebaseAdmin)(options),
        };
        return {
            exports: [provider],
            module: FirebaseModule_1,
            providers: [provider],
        };
    }
    static forRootAsync(options) {
        const firebaseProvider = {
            inject: [firebase_constants_1.FirebaseConstants.FIREBASE_MODULE],
            provide: firebase_constants_1.FirebaseConstants.FIREBASE_TOKEN,
            useFactory: (options) => (0, util_1.getFirebaseAdmin)(options),
        };
        const asyncProviders = FirebaseModule_1.createAsyncProviders(options);
        return {
            module: FirebaseModule_1,
            imports: [...(options.imports || [])],
            providers: [...asyncProviders, firebaseProvider],
            exports: [firebaseProvider],
        };
    }
    static createAsyncProviders(options) {
        if (options.useFactory || options.useExisting) {
            return [FirebaseModule_1.createAsyncOptionsProvider(options)];
        }
        return [
            FirebaseModule_1.createAsyncOptionsProvider(options),
            {
                provide: options.useClass,
                useClass: options.useClass,
                inject: options.inject,
            },
        ];
    }
    static createAsyncOptionsProvider(options) {
        if (options.useFactory) {
            return {
                provide: firebase_constants_1.FirebaseConstants.FIREBASE_MODULE,
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        }
        return {
            provide: firebase_constants_1.FirebaseConstants.FIREBASE_MODULE,
            useFactory: async (optionsFactory) => await optionsFactory.createFirebaseModuleOptions(),
            inject: options.useClass ? [options.useClass] : [],
        };
    }
};
exports.FirebaseModule = FirebaseModule;
exports.FirebaseModule = FirebaseModule = FirebaseModule_1 = tslib_1.__decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({})
], FirebaseModule);
//# sourceMappingURL=firebase.module.js.map