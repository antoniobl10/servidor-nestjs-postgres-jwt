import { IsString } from "class-validator";

export class CreateUserDto {

    email: string;
    password: string;
    name?: string;

}
