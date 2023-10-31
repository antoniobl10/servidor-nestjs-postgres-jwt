import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Auth } from '../auth/decorators/auth.decorator';
import { Role } from '../common/enums/rol.enum';
import { ActiveUser } from '../common/decorators/active-user.decorator';
import { UserActiveInterface } from '../common/interfaces/user-active.interface';

@Auth(Role.USER)
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto, @ActiveUser() user: UserActiveInterface) {
    return this.commentsService.create(createCommentDto, user);
  }

  @Get()
  findAll(@ActiveUser() user: UserActiveInterface) {
    return this.commentsService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: number, @ActiveUser() user: UserActiveInterface) {
    return this.commentsService.findOne(id, user);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCommentDto: UpdateCommentDto, @ActiveUser() user: UserActiveInterface) {
    return this.commentsService.update(id, updateCommentDto, user);
  }

  @Delete(':id')
  remove(@Param('id') id: number, @ActiveUser() user: UserActiveInterface) {
    return this.commentsService.remove(id, user);
  }
}
