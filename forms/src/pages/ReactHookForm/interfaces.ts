export interface IErrors {
    name?: string;
    age?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    gender?: string;
    conditions?: string;
    img?: string;
    country?: string;
}

export interface IForm {
    name: string | undefined;
    age: number;
    email: string | undefined;
    password: string | undefined;
    confirmPassword: string | undefined;
    gender: string | undefined;
    conditions: boolean | undefined;
    img: File | undefined | unknown;
    country: string | undefined;
}
