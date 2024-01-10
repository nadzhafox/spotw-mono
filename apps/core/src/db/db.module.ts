import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { PostgresConnectionProvider } from './postgres-connection.provider';

@Module({
  providers: [DbService, PostgresConnectionProvider],
  exports: [DbService],
})
export class DbModule {}
