import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ConfigService } from '@sptw/config';

@Injectable()
export class EventService {
  constructor(private configService: ConfigService) {
    // configService.get('part-of-all-app-options')
  }

  create(createEventDto: CreateEventDto) {
    return 'This action adds a new event';
  }

  findAll() {
    return `This action returns all event`;
  }

  findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
