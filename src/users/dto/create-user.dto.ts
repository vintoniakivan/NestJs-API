import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'User email' })
  @IsString({ message: 'Must be string' })
  @IsEmail({}, { message: 'Not valid email' })
  readonly email: string;
  @ApiProperty({ example: 'tgfhgf', description: 'User password' })
  @IsString({ message: 'Must be string' })
  @Length(4, 16, { message: 'Not less 4 and not more 16' })
  readonly password: string;
}
