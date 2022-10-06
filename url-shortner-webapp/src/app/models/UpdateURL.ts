export class UpdateURL {
    new_long_url: string;
    special_code: string;
    stub: string;

    constructor(json?: any) {
        if (json) {
            this.new_long_url = json.new_long_url;
            this.special_code = json.special_code;
            this.stub = json.stub;
        }
        else{
            this.new_long_url = "";
            this.special_code = "";
            this.stub = "";
        }
    }
}