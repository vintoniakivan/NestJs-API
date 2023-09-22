import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'User Role Value' })
  @IsString({ message: 'Must be string' })
  readonly value: string;
  @ApiProperty({
    example: 'Admin has permissions for...',
    description: 'Describe role',
  })
  @IsString({ message: 'Must be string' })
  readonly descriptions: string;
}
