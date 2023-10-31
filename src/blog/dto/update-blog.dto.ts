import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogDto } from './create-blog.dto';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateBlogDto extends PartialType(CreateBlogDto) {

    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsDate()
    @Type(() => Date)
    @IsOptional()
    date: Date;

    @IsString()
    @IsOptional()
    author: string;

    @IsString()
    @IsOptional()
    content: string;
}
