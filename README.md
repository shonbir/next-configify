## Next-Description

**next-configify** is just a small extension to the existing <b>@itgorillaz/configify</b> project with following 2 features which I needed in my own project.

1. environment profile (dev, prod, stage, test) based configuration files loading
2. register configuration properties as environment variables e.g. ```app.my.property --> APP_MY_PROPERTY```

***how to? 'environment profile' and  'configuration properties to env vars'*** 
### Overwrite Default Options

You can add module otions by providing an object as argumento to the `forRootAsync()` method:

```js
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
  
```

for rest of the Readme please go  [@it-gorillaz/configify
](https://github.com/it-gorillaz/configify)
## License

This code is licensed under the [MIT License](./LICENSE.txt).

All files located in the node_modules and external directories are externally maintained libraries used by this software which have their own licenses; we recommend you read them, as their terms may differ from the terms in the MIT License.
