import { Type } from "class-transformer";
import { IsDate, IsObject, IsOptional, IsString } from "class-validator";

export class CreateCommentDto {

    @IsString()
    author: string;

    @IsDate()
    @Type(() => Date)
    date: Date;

    @IsString()
    content: string;

    @IsString()
    @IsOptional()
    blog?: string;
}
