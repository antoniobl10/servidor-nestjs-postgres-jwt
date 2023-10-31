import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogArticle } from './entities/blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {

  constructor(
    @InjectRepository(BlogArticle)
    private readonly blogRepository : Repository<BlogArticle>,
  ) {}

  async create(createBlogDto: CreateBlogDto) {
    return await this.blogRepository.save(createBlogDto);
  }

  async findAll() {
    return await this.blogRepository.find();
  }

  async findOne(id: number) {
    return await this.blogRepository.findOneBy({ id });
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    return await this.blogRepository.update(id, updateBlogDto);
  }

  async remove(id: number) {
    // en MySQL si que me muestra los ids, PERO en la petición no los muestra
    return await this.blogRepository.softDelete({ id }); 
  }
}
