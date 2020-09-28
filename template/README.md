## Running local

### Steps

0. Run `git init && git add . && git commit -m "Innitial commit from m2gen template"` in order to init a repo
1. Run `yarn install` for installing all the dependencies.
2. Run `cd ios && pod install & cd ..`
3. run '`yarn ios` or `yarn android` to run the app.
4. Create `.env` with all the variables found [here](./src/tools/env/env-tool.ts).
4. Update env variables preffix on [.env](./.env) and [here](./appcenter-pre-build.sh).
5. Update Auth0 domain on [android manifest](./android/app/src/main/AndroidManifest.xml).
6. Update signing configuration for iOS.
7. Add signing keys for android. 

### Recomendations

Use Visual Studio Code with a `.vscode/launch.json` file.
Recommended `launch.json` file content
```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Android",
      "cwd": "${workspaceFolder}",
      "type": "reactnative",
      "request": "launch",
      "platform": "android"
    },
    {
      "name": "Debug iOS",
      "cwd": "${workspaceFolder}",
      "type": "reactnative",
      "request": "launch",
      "platform": "ios",
    }
  ],
  "compounds": [
    {
        "name": "iOS/Android",
        "configurations": ["Debug Android", "Debug iOS"]
    }
  ]
}
```