import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';

export class UpdateClientDto extends PartialType(CreateClientDto) {
  readonly name?: string;
  readonly email?: string;
  readonly phone?: string;
  readonly address?: string;
}
