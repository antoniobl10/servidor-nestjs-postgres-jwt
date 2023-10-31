import { Type } from "class-transformer";
import { IsDate, IsString } from "class-validator";

export class CreateBlogDto {

    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsDate()
    @Type(() => Date)
    date: Date;

    @IsString()
    author: string;

    @IsString()
    content: string;
}
