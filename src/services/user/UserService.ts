import { Api } from "../ApiConfig";

import { formType } from "../../pages";

export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    status: boolean;
    role: string;
}

async function update(userId: string, data: formType): Promise<IUser> {

    const response = await Api().put(`/users/${userId}`, data);
    return response.data;
}

export default { update };