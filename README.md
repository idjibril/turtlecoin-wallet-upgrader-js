# turtlecoin-wallet-upgrader-js

A Javascript module that wraps wallet-upgrader into an easily useable function in javascript.

Warning: this module is very large (~28mb) because it needs to include 3 binaries. The macOS binary has been removed for now due to wallet-upgrader not working on mac, bringing the module size down a bit, but it will be re-added at a later date.

## installing

```
yarn add turtlecoin-wallet-upgrader
```

```
npm i turtlecoin-wallet-upgrader
```

## usage

```ts
// call this import anything you'd like
import convertWallet from 'turtlecoin-wallet-upgrader';

// will return 0 if converted successfully, 1 if otherwise
convertedSuccessfully = convertWallet('/path/to/wallet', 'password');
```

The path parameter takes both a relative and absolute path. Mac is currently unsupported.
