import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { blogComment } from './entities/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogArticle } from './../blog/entities/blog.entity';
import { UserActiveInterface } from '../common/interfaces/user-active.interface';
import { Role } from 'src/common/enums/rol.enum';

@Injectable()
export class CommentsService {


  constructor(
    @InjectRepository(blogComment)
    private readonly commentRepository: Repository<blogComment>,

    @InjectRepository(BlogArticle)
    private readonly blogRepository: Repository<BlogArticle>,
  ) {

  }

  async create(createCommentDto: CreateCommentDto, user: UserActiveInterface) {
    const blog = await this.validateBlogArticle(createCommentDto.blog);

    return await this.commentRepository.save({
      ...createCommentDto,
      blog: blog,
      userEmail: user.email,
    });
  }

  async findAll(user: UserActiveInterface) {
    if (user.role === Role.ADMIN) {
      return await this.commentRepository.find();
    }

    return await this.commentRepository.find({
      where: { userEmail: user.email },
    });
  }

  async findOne(id: number, user: UserActiveInterface) {
    const cat = await this.commentRepository.findOneBy({ id });

    if (!cat) {
      throw new BadRequestException('Comment not found');
    }

    this.validateOwnership(cat, user);

    return cat;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto, user: UserActiveInterface) {
    await this.findOne(id, user);
    return await this.commentRepository.update(id, {
      ...updateCommentDto,
      blog: updateCommentDto.blog ? await this.validateBlogArticle(updateCommentDto.blog) : undefined,
      userEmail: user.email,
    })
  }

  async remove(id: number, user: UserActiveInterface) {
    await this.findOne(id, user);
    return await this.commentRepository.softDelete({ id });
  }

  private validateOwnership(comment: blogComment, user: UserActiveInterface) {
    if (user.role !== Role.ADMIN && comment.userEmail !== user.email) {
      throw new UnauthorizedException();
    }
  }

  private async validateBlogArticle(titleBlog: string) {
    const blog = await this.blogRepository.findOneBy({ title: titleBlog });

    if (!blog) {
      throw new BadRequestException('Blog title article not found');
    }

    return blog;
  }


}
