export = config;
declare function config(env: any, argv: any): {
    entry: string;
    mode: string;
    output: {
        filename: string;
        path: string;
    };
    plugins: any[];
    resolve: {
        modules: string[];
        extensions: string[];
    };
    module: {
        rules: {
            test: RegExp;
            exclude: RegExp;
            use: string[];
        }[];
    };
};
