export class URL {
    urlId!: number;
    long_url: string | undefined;
    special_code: string | undefined;
    stub: string | undefined;

    constructor(json?: any) {
        if (json) {
            this.urlId = json.urlId;
            this.long_url = json.long_url;
            this.special_code = json.special_code;
            this.stub = json.stub;
        }
    }
}