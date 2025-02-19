import { ApiException } from "./ApiException";

export class ForbiddenException extends ApiException {
    public readonly message: string = ''

    constructor() {
        super('You are not allowed to delete this record');
    }
}