import { Configuration, Value } from '../../src';

@Configuration()
export class ComplexJsonConfiguration {

  @Value('nested.myEnvKey')
  myEnvKey: string;

  @Value('nested.any-key')
  anyKey: string;

  @Value('default-value')
  defaultValue: string;

  @Value('number-content', { parse: parseInt })
  numberContent: number;

  @Value('boolean-content', { parse: (value: any) => !!value })
  booleanContent: boolean;

  @Value('expanded-secret')
  awsSecretsManagerSecret: string;

  @Value('aws-parameter-store.secret')
  awsParameterStoreSecret: string;
}
