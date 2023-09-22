import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Role name' })
  @IsString({ message: 'Must be string' })
  readonly value: string;
  @ApiProperty({ example: 20, description: 'User Id' })
  @IsInt({ message: 'Must be integer' })
  readonly userId: number;
}
