import { IsString, Matches } from 'class-validator';

export class CreateClientDto {
  @IsString()
  readonly name: string;
  @IsString()
  @Matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, {
    message: 'Invalid email format',
  })
  readonly email: string;
  
  @IsString()
  readonly phone: string;
  @IsString()
  readonly address: string;
}

