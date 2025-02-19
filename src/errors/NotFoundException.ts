import { ApiException } from "./ApiException";

export class NotFoundException extends ApiException {
    public readonly message: string = ''

    constructor() {
        super('Record not found in the database!');
    }
}