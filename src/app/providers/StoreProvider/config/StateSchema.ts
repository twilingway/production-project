import { CounterSchema } from 'entities/Counter';
import { IUserSchema } from 'entities/User';

export interface IStateSchema {
  counter: CounterSchema;
  user: IUserSchema;
}
