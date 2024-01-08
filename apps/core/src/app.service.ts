import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {


  getHello(): void {
    console.log('log core app hello!')
    // return 'Hello core app!';
  }

  getEvent() {
    // SELECT ST_AsGeoJSON(ST_GeomFromGML('<gml:Point><gml:coordinates>1,1</gml:coordinates></gml:Point>'));
  }

  createEvent() {
    // ST_AsGeoJSON
  }
}
