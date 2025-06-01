"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path = tslib_1.__importStar(require("node:path"));
const testing_1 = require("@nestjs/testing");
const admin = tslib_1.__importStar(require("firebase-admin"));
const jest_mock_extended_1 = require("jest-mock-extended");
const firebase_constants_1 = require("./firebase.constants");
const firebase_module_1 = require("./firebase.module");
describe("FirebaseModule", () => {
    jest.spyOn(admin, "initializeApp").mockReturnValue((0, jest_mock_extended_1.mock)());
    const googleApplicationCredential = path.join(__dirname, "../../../dummy.firebase.amin.key.json");
    class TestService {
        createFirebaseModuleOptions() {
            return {
                googleApplicationCredential,
            };
        }
    }
    describe("forRoot", () => {
        it("should provide the firebase admin", async () => {
            const module = await testing_1.Test.createTestingModule({
                imports: [firebase_module_1.FirebaseModule.forRoot({ googleApplicationCredential })],
            }).compile();
            const firebase = module.get(firebase_constants_1.FirebaseConstants.FIREBASE_TOKEN);
            expect(firebase).toBeDefined();
        });
    });
    describe("forRootAsync", () => {
        describe("when the `useFactory` option is used", () => {
            it("should provide the firebase admin", async () => {
                const module = await testing_1.Test.createTestingModule({
                    imports: [
                        firebase_module_1.FirebaseModule.forRootAsync({
                            useFactory: () => ({ googleApplicationCredential }),
                        }),
                    ],
                }).compile();
                const firebase = module.get(firebase_constants_1.FirebaseConstants.FIREBASE_TOKEN);
                expect(firebase).toBeDefined();
            });
        });
        describe("when the `useClass` option is used", () => {
            it("should provide firebase admin", async () => {
                const module = await testing_1.Test.createTestingModule({
                    imports: [
                        firebase_module_1.FirebaseModule.forRootAsync({
                            useClass: TestService,
                        }),
                    ],
                }).compile();
                const firebase = module.get(firebase_constants_1.FirebaseConstants.FIREBASE_TOKEN);
                expect(firebase).toBeDefined();
            });
        });
    });
});
//# sourceMappingURL=firebase.module.spec.js.map