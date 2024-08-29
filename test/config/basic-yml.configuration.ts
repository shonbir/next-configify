import { Configuration, Value } from '../../src';

@Configuration()
export class BasicYmlConfiguration {
  @Value('application.any-key-one')
  anyKeyOne: string;

  @Value('application.any-key-two')
  anyKeyTwo: string;
  
  @Value('application.myEnvKey')
  myEnvKey: string;
}
