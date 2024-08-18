export interface IFormState {
    name: string | undefined;
    age: number;
    email: string | undefined;
    password: string | undefined;
    confirmPassword: string | undefined;
    gender: string | undefined;
    conditions: boolean | undefined;
    img: File | undefined | unknown | string;
    country: string | undefined;
}
