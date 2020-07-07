## Running local

### Requisites
- Visual Studio Code installed

### Steps

1. Run `npm install` for installing all the dependencies.
2. Create a `.vscode` directory.
3. Create a `launch.json` inside the `.vscode` directory.
4. Add this content to `launch.json` file.

    ```json
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
          "name": "Debug iOS (Simulator)",
          "cwd": "${workspaceFolder}",
          "type": "reactnative",
          "request": "launch",
          "platform": "ios",
        }
      ]
    }
    ```
5. Go to debug tab on Visual Studio Code, select the configuration and hit RUN.