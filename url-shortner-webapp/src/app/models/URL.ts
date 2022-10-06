export class URL {
    long_url: string;
    special_code: string;
    stub: string;

    constructor(json?: any) {
        if (json) {
            this.long_url = json.long_url;
            this.special_code = json.special_code;
            this.stub = json.stub;
        }
        else{
            this.long_url = "";
            this.special_code = "";
            this.stub = "";
        }
    }
}