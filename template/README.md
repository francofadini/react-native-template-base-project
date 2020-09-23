## Running local

### Steps

1. Run `yarn install` for installing all the dependencies.
2. Run `cd ios && pod install & cd ..`
3. run '`yarn ios` or `yarn android` to run the app.

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