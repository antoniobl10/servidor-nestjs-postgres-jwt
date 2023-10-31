import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { blogComment } from './entities/comment.entity';
import { BlogArticle } from './../blog/entities/blog.entity';
import { BlogModule } from '../blog/blog.module';
import { BlogService } from '../blog/blog.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([blogComment]), BlogModule, AuthModule],
  controllers: [CommentsController],
  providers: [CommentsService, BlogService],
})
export class CommentsModule {}
