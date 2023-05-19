import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  create(createClientDto: CreateClientDto) {
    const created = this.clientRepository.create(createClientDto);
    return this.clientRepository.save(created);
  }

  findAll() {
    return this.clientRepository.find();
  }

  findOne(id: number) {
    return this.clientRepository.findOneBy({ id });
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.clientRepository.update({ id }, updateClientDto);
  }

  async remove(id: number) {
    await this.clientRepository.delete(id);
  }
}
