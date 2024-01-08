import { Inject, Injectable } from '@nestjs/common';
import { POSTGRES_CONNECTION } from './postgres-connection.provider';

@Injectable()
export class DbService {
    constructor(@Inject(POSTGRES_CONNECTION) private db: any) {
        this.getSomething();
    }

    async getSomething() {
        const res = await this.db.query('SELECT * from spatial_ref_sys limit 1')
        console.log(res.rows)
    }
}
