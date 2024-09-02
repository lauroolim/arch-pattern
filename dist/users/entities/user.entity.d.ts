export declare enum UserRole {
    Admin = "admin",
    User = "user"
}
export declare class User {
    constructor(props: {
        email: string;
        name: string;
        password: string;
        role?: UserRole;
    }, id?: string);
    id: string;
    email: string;
    name: string;
    password: string;
    role: UserRole;
    setPassword(password: string): Promise<void>;
}
