/* Dependencies */
import { ModuleMetadata, Type } from '@nestjs/common/interfaces';

/* Interfaces */
import { MassiveConnectOptions } from './massive-module-options.interface';
import { MassiveOptionsFactory } from './massive-options-factory.interface';

export interface MassiveConnectAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useFactory: (
    ...args: any[]
  ) => Promise<MassiveConnectOptions> | MassiveConnectOptions;
}
