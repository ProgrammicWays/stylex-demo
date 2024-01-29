export let presets: (string | (string | {
    modules: boolean;
})[] | (string | {
    runtime: string;
})[])[];
export let plugins: ((string | {
    dev: boolean;
    test: boolean;
    stylexSheetName: string;
    genConditionalClasses: boolean;
    unstable_moduleResolution: {
        type: string;
        rootDir: string;
    };
})[] | (string | {
    root: string[];
    alias: {
        '#root': string;
        '#src': string;
    };
})[])[];
