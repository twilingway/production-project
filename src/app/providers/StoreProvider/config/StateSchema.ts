import { CounterSchema } from 'entities/Counter';
import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUserName';

export interface IStateSchema {
  counter: CounterSchema;
  user: IUserSchema;
  loginForm: ILoginSchema;
}
