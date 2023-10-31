import { Transform } from "class-transformer";
import { IsString, MinLength, IsEmail } from "class-validator";

export class LoginDto {

    @IsEmail()
    email: string;

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(3)
    password: string;
}