import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@sptw/config';
import { ConfigSchema } from './config.typebox';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) { }

  getHello(): string {
    console.log('log core app hello!');
    return 'Hello core app!';
  }

  getEvent() {
    // SELECT ST_AsGeoJSON(ST_GeomFromGML('<gml:Point><gml:coordinates>1,1</gml:coordinates></gml:Point>'));
  }

  createEvent() {
    // ST_AsGeoJSON
  }
}
