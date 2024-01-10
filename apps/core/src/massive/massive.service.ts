// tslint:disable: variable-name
import { Injectable, Inject } from '@nestjs/common';
import { MASSIVE_CONNECT_OPTIONS } from './constants';

interface IMassiveService {
  connect(): Promise<any>;
}

@Injectable()
export class MassiveService implements IMassiveService {
  private _massiveClient;

  constructor(
    @Inject(MASSIVE_CONNECT_OPTIONS) private _massiveConnectOptions,
  ) {}

  async connect(): Promise<any> {
    return this._massiveClient
      ? this._massiveClient
      : (this._massiveClient = `await massive(
          this._massiveConnectOptions,
          this._massiveConfigOptions,
          this._massiveDriverOptions,
        )`);
  }
}
