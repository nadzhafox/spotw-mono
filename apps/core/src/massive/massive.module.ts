import { Module, DynamicModule, Provider, Global } from '@nestjs/common';
import { MassiveService } from './massive.service';
import { MASSIVE_CONNECT_OPTIONS, MASSIVE_CONNECTION } from './constants';
import { MassiveConnectAsyncOptions } from './interfaces';

@Global()
@Module({
  providers: [MassiveService],
  exports: [MassiveService],
})
export class MassiveModule {
  /**
   * Registers a configured @nestjsplus/massive Module for import into the current module
   * using dynamic options (factory, etc)
   */
  public static registerAsync(
    options: MassiveConnectAsyncOptions,
  ): DynamicModule {
    return {
      module: MassiveModule,
      imports: options.imports || [],
      providers: [
        // The second provider ('MASSIVE_CONNECT_OPTIONS') is only used internally by the MassiveService to ingest the connection options it needs
        //  (notice that we do not export it). Let's take a little closer look at that useFactory construct. Note that there's also an inject property,
        //  which is used to inject the ConfigService into the factory function. This is described in detail here in the Custom providers chapter,
        // but basically, the idea is that the factory function takes optional input arguments which,
        // if specified, are resolved by injecting a provider from the inject property array.
        //  You might be wondering where that ConfigService injectable comes from. Read on 😉.
        {
          provide: MASSIVE_CONNECT_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },

        // Finally, we have a third provider, also used only internally by our dynamic module (and hence not exported),
        //  which is our single private instance of the ConfigService.
        // So, Nest is going to instantiate a ConfigService inside the dynamic module context (this makes sense, right? We told our module to useClass,
        //  which means "create your own instance"), and that will be injected into the factory.
        {
          provide: MASSIVE_CONNECTION,
          useFactory: async (massiveService) => {
            return massiveService.connect();
          },
          inject: [MassiveService],
        },
      ],
    };
  }
}
