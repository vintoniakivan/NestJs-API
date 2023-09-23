import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../users/users.model';
import { Roles } from '../auth/decorators/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @ApiOperation({ summary: 'Create post' })
  @ApiResponse({ status: 200, type: [Post] })
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  createPost(@Body() dto: CreatePostDto, @UploadedFile() image) {
    const file = this.postService.create(dto, image);
    return file;
  }

  @ApiOperation({ summary: 'Get all' })
  @ApiResponse({ status: 200, type: [Post] })
  @Roles('USER')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.postService.getAllPosts();
  }
}
