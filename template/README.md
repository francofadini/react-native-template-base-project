# Setup

0. Run `git init && git add . && git commit -m "Innitial commit from m2gen template"` in order to init a repo
1. Run `yarn install` for installing all the dependencies.
2. Run `cd ios && pod install & cd ..`
3. run '`yarn ios` or `yarn android` to run the app.
4. Update env variables preffix [here](./appcenter-pre-build.sh).
4. Create `.env.testing` and `.env.production` files with all the variables found [here](./src/tools/env/env-tool.ts) and [here](./fastlane/Fastfile).
6. Update signing configuration for iOS.
7. Add signing keys for android.

# Usage

## iOS Development

### Available schemes 

- RNBaseProject
- RNBaseProjectTesting

### Running ios via CLI

`yarn ios --scheme=RNBaseProjectTesting`

## Android Development

### Available variants

- ftestingDebug
- ftestingRelease
- productionDebug
- productionRelease

### Running android via CLI
`yarn android --variant=ftestingDebug --appIdSuffix=testing` or
`yarn android --variant=productionDebug`

## iOS Distribution

In order to  distribute iOS app there are 2 options.

1. AppCenter
2. Fastlane

## AppCenter

AppCenter app configuration is really easy and stright foward. take a look [here](https://docs.microsoft.com/en-us/appcenter/build/react-native/ios/).

## Fastlane

Sometimes AppCenter could be too slow, and after 30 min build will crash on free version. But, fastlane came to the rescue.

### Beta Distribuition

Run `fastlane ios dist_testing` in order to

1. Fetch devices register on AppCenter
2. Register missing devices on Apple Developer Account
3. Check and Download certificates and provisioning profiles needed. Fastlane will create any missing piece)
4. Increment de build number with commits count number
5. Tag the current branch with ex. build/testing/v15
6. Build the app
7. Upload the app to appcenter, and notify all colaborators!

Easy right ?

### Store Distribution

Run `fastlane ios dist_store` in order to

1. Check and Download certificates and provisioning profiles needed. Fastlane will create any missing piece)
2. Build the app
3. Upload the app to Testflight

Note: No tagging, or build number bumping is done here, as we assume you will always distribute a beta version first.


# Recomendations

Use Visual Studio Code with a `.vscode/launch.json` file.
Recommended `launch.json` file content
```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Testing Android",
      "cwd": "${workspaceFolder}",
      "type": "reactnative",
      "request": "launch",
      "platform": "android",
      "runArguments": ["--variant=ftestingDebug","--appIdSuffix=testing"]
    },
    {
      "name": "Debug Testing iOS",
      "cwd": "${workspaceFolder}",
      "type": "reactnative",
      "request": "launch",
      "platform": "ios",
      "runArguments": ["--scheme=RNBaseProjectTesting"]
    }
  ],
  "compounds": [
    {
        "name": "Debug Testing iOS/Android",
        "configurations": ["Debug Testing Android", "Debug Testing iOS"]
    }
  ]
}
```