import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { BlogArticle } from './entities/blog.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BlogArticle])],
  controllers: [BlogController],
  providers: [BlogService],
  exports: [TypeOrmModule]
})
export class BlogModule {}
