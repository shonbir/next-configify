import { SecretsManagerClient } from '@aws-sdk/client-secrets-manager';
import { SSMClient } from '@aws-sdk/client-ssm';

/**
 * The configuration options interface
 */
export interface ConfigfyModuleOptions {
  /**
   * then environment name to load environemnt specific file.
   * 
   *  e.g. if envProfile: 'prod';  ```applicaition-prod.yml or application-prod.json or .prod.env``` files will be loaded in addition to default files
   */
  envProfile?: string
  /**
   * If config file is json or yaml(yml) then key will be sparatd by this separator stirng.
   * 
   * The default value is dot (.)
   * 
   * eg. 
   * ```
   * //application.json
   * {"app": { "ssl": { "enabled": true,}} }
   *  ```
   * and  the separator is set to "_", then key will be registered  as ```app_ssl_enabled=true```
   * this behavior is same with yaml files as well
   */
  nestedConfigPropertySeparator?: string;
  /**
   * If config file is yaml(yml) then key will be in uppercase.
   * The default value is false;
   * 
   eg. 
   * ```
   * //application.json
   * {"app": { "ssl": { "enabled": true,}} }
   *  ```
   * and  the separator is set to "_", then key will be registered as ```APP_SSL_ENABLED=true```
   * this behavior is same with yaml files as well
   */
  uppercaseConfigProperty?: boolean;
  /**
   * Ignores any config file.
   * The default value is false;
   */
  ignoreConfigFile?: boolean;

  /**
   * Ignores environment variables
   * The default value is false;
   */
  ignoreEnvVars?: boolean;

  /**
   * The path of the configuration files
   */
  configFilePath?: string | string[];

  /**
   * Expands variables
   * The default value is true
   */
  expandConfig?: boolean;

  /**
   * The AWS Secrets Manager Client
   * If no client is provided, the module will create one.
   */
  secretsManagerClient?: SecretsManagerClient;

  /**
   * The AWS Systems Manager Client
   * If no client is provided, the module will create one.
   */
  ssmClient?: SSMClient;
}

/**
 * The default module options
 */
export const DefaultConfigfyModuleOptions: ConfigfyModuleOptions = {
  ignoreConfigFile: false,
  ignoreEnvVars: false,
  expandConfig: true,
};
