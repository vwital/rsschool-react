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
    name: string;
    age: number;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
    conditions: boolean;
    img: File | undefined;
    country: string;
}
