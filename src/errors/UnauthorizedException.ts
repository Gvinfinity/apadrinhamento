import { ApiException } from "./ApiException";

export class UnauthorizedException extends ApiException {
    public readonly message: string = ''

    constructor(message?: string) {
        super(message || 'Unauthorized.');
    }
}