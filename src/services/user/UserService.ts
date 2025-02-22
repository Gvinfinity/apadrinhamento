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

enum Course {
    CC = "CC",
    EC = "EC",
}

enum Role {
    bixe = "bixe",
    veterane = "veterane",
}

export interface IUserGet {
    id:         string;
    name:       string;
    email:      string;
    status:     boolean;
    role:       Role;
    course:     Course;
    pronouns:   string[];
    ethnicity:  string[];
    city?:      string;
    lgbt:       string[];
    parties:    number;
    hobby?:     string;
    music?:     string;
    games?:     string;
    sports?:    string;
    picture:    string;
}

interface IStatus {
    vets: number;
    bixes: number;
    total: number;
    approved: number;
    pending: number;
}


async function update(userId: string, data: formType): Promise<IUser> {

    const response = await Api().put(`/users/${userId}`, data);
    return response.data;
}

async function get(userId: string): Promise<IUserGet> {

    const response = await Api().get(`/users/${userId}`);
    return response.data.user;
}

async function getPendingApprovals(): Promise<IUserGet[]> {
    const response = await Api().get(`/users/getPendingApproval`);
    return response.data;
}

async function approveUser(userId: string): Promise<void> {
    await Api().put(`/users/${userId}/approve`);
}

async function getStats(): Promise<IStatus> {
    const response = await Api().get(`/users/stats`);
    return response.data;
}

export default { update, get, getPendingApprovals, approveUser, getStats };