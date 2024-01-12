import { Injectable, Inject } from '@nestjs/common';
import { INIT_CONFIG } from './consts';
import * as _ from 'lodash'

@Injectable()
export class ConfigService {
  constructor(
    @Inject(INIT_CONFIG) private readonly configData: any,
  ) { }

  get<T>(key: keyof T): T[keyof T] {
    return this.configData[key];
  }
}
