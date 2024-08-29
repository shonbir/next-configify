import { Configuration, Value } from '../../src';

export interface YmlJsonContent {
  host: string;
}

@Configuration()
export class ComplexYmlConfiguration {

  @Value('nested.myEnvKey')
  myEnvKey: string;

  @Value('any-key')
  anyKey: string;

  @Value('aws-secrets-manager.secret')
  awsSecretsManagerSecret: string;

  @Value('aws-parameter-store.secret')
  awsParameterStoreSecret: string;

  @Value('expanded-key')
  expandedEnv: string;

  @Value('number-content', { parse: parseInt })
  numberContent: number;

  @Value('boolean-content', { parse: (value: any) => !!value })
  booleanContent: boolean;

  @Value('json-content', {
    parse: (value: any) => { if(value) return JSON.parse(value)},
  })
  jsonContent: YmlJsonContent;
}
