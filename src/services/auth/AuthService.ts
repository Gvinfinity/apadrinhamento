import { AxiosError, AxiosResponse } from "axios";
import { Api } from "../ApiConfig";
import { ApiException } from "../../errors/ApiException";
import { UnauthorizedException } from "../../errors/UnauthorizedException";

interface LoginData {
    email: string;
    password: string;
}

const login = async (authData: LoginData): Promise<AxiosResponse> => {
    try {
        const response = await Api().post('/auth/login', authData);
        return response;
    } catch (error: unknown) {
        if (error instanceof AxiosError && error.status === 401) {
            throw new UnauthorizedException('Usuário ou senha inválidos.');
        }
        throw new ApiException('Erro ao buscar os registros.')
    }
}

const logout = async (): Promise<void> => {
    await Api().post('/auth/logout');
}

const verify = async (): Promise<void> => {
    await Api().get('/auth/verify');
}

export const authService = { login, logout, verify }
