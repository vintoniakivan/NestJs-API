import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class BanUserDto {
  @ApiProperty({ example: 20, description: 'User Id' })
  @IsInt({ message: 'Must be integer' })
  readonly userId: number;
  @ApiProperty({ example: 'Baned because...', description: 'Ban reason' })
  @IsString({ message: 'Must be string' })
  readonly reason: string;
}
