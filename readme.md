### How to use repository
1. Clone the repository
2. Run `npm install` command
3. Run `npm run service.generate` command where `service` is resourcemod component

You can integrate this repository as submodule to your own implementation of resourcemod ecosystem component.

#### Example 
I want to modify the registry API specification
1. git clone git@github.com:ResourceMod/openapi.git
2. npm run registry.preview
3. Open localhost:8080
4. Modify the API specification in registry.ts file
5. Run `npm run registry.generate`