import { Test, TestingModule } from '@nestjs/testing';
import { ClientService } from './client.service';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ClientService', () => {
  let clientService: ClientService;
  let clientRepository: Repository<Client>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ ClientService,
        {
          provide: getRepositoryToken(Client),
          useClass: Repository,
        },
      ],
    }).compile();

    clientService = module.get<ClientService>(ClientService);
    clientRepository = module.get<Repository<Client>>(getRepositoryToken(Client));
  });

  it('should create a client', async () => {
    const createClientDto = { name: 'John Tester', email: 'johntester@example.com', phone: '0123456789', address: '123 Second St' };

    const savedClient = new Client();
    savedClient.id = 1;
    savedClient.name = 'John Tester';
    savedClient.email = 'johntester@example.com';
    savedClient.phone = '0123456789';
    savedClient.address = '123 Second St';

    jest.spyOn(clientRepository, 'create').mockReturnValue(savedClient);
    jest.spyOn(clientRepository, 'save').mockResolvedValue(savedClient);

    const result = await clientService.create(createClientDto);

    expect(result).toEqual(savedClient);
    expect(clientRepository.create).toHaveBeenCalledWith(createClientDto);
    expect(clientRepository.save).toHaveBeenCalledWith(savedClient);
  });

  it('should find a client by id', async () => {
    const clientId = 1;
    const client = new Client();
    client.id = clientId;
    client.name = 'John Doe';

    jest.spyOn(clientRepository, 'findOneBy').mockResolvedValue(client);

    const result = await clientService.findOne(clientId);
    expect(result).toEqual(client);
    expect(clientRepository.findOneBy).toHaveBeenCalledWith({ 'id':clientId });
  });

  it('should find all clients', async () => {
    const clients = [
      { id: 1, name: 'John Doe', email: 'testemail@gmail.com', phone: '0123456789', address: '123 Main St' },
      { id: 2, name: 'Jane Smith', email: 'testemail2@gmail.com', phone: '1234567890', address: '123 Second St' },
    ];

    jest.spyOn(clientRepository, 'find').mockResolvedValue(clients);

    const result = await clientService.findAll();

    expect(result).toEqual(clients);
    expect(clientRepository.find).toHaveBeenCalled();
  });
});
