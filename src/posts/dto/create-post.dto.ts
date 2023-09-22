import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ example: 'Post Title', description: 'Post Title' })
  @IsString({ message: 'Must be string' })
  readonly title: string;
  @ApiProperty({ example: 'Lorem ipsum...', description: 'Post content' })
  @IsString({ message: 'Must be string' })
  readonly content: string;
  @ApiProperty({ example: 10, description: 'UserId' })
  @IsInt({ message: 'Must be integer' })
  readonly userId: number;
}
