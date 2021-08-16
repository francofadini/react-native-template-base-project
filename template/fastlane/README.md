fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew install fastlane`

> Make sure to create a `.env` file inside fastlane directory.

# Available Actions
## iOS
### ios dist_testing
```
fastlane ios dist_testing
```
Build & Upload to AppCenter (iOS - Testing)
### ios dist_store
```
fastlane ios dist_store
```
Build & Upload to TestFlight (iOS - Production)

----

## Android (Not implemented)
### android dist_testing
```
fastlane android dist_testing
```


----

More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
