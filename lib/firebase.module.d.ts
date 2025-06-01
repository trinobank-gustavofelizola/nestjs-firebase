import { DynamicModule } from "@nestjs/common";
import { FirebaseModuleAsyncOptions, FirebaseModuleOptions } from "./firebase.interface";
export declare class FirebaseModule {
    static forRoot(options: FirebaseModuleOptions): DynamicModule;
    static forRootAsync(options: FirebaseModuleAsyncOptions): DynamicModule;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
}
