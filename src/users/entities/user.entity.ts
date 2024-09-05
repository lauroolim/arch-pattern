import { Entity, Column, PrimaryColumn } from 'typeorm';
import * as crypto from 'crypto';

export enum UserRole {
    Admin = 'admin',
    User = 'user'
}

@Entity()
export class User {
    constructor(props: {
        email: string;
        name: string;
        password: string;
        role?: UserRole;
    }, id?: string) {
        Object.assign(this, props);
        this.id = id ?? crypto.randomUUID();
        this.role = this.role ?? UserRole.User;
    }

    @PrimaryColumn()
    id: string;

    @Column({ unique: true })
    email: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column({ type: 'simple-enum' })
    role: UserRole;

    async setPassword(password: string): Promise<void> {
        const salt = crypto.randomBytes(10).toString('hex');
        const hash = crypto.createHash('sha256').update(password + salt).digest('hex');
        this.password = hash;
    }
}
