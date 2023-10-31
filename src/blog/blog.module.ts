import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { BlogArticle } from './entities/blog.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([BlogArticle]), AuthModule],
  controllers: [BlogController],
  providers: [BlogService],
  exports: [TypeOrmModule]
})
export class BlogModule {}
