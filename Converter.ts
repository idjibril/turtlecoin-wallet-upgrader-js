// Copyright (C) 2019 ExtraHash
//
// Please see the included LICENSE file for more information.
import * as child from 'child_process';
import os from 'os';
import path from 'path';

export default function convertWallet(walletPath: string, password: string) {
  let executionCommand: string = '';
  let binPath: string = '';
  switch (os.platform()) {
    case 'linux':
      binPath = path.resolve(__dirname, 'bin/wallet-upgrader-linux');
      executionCommand = `${binPath} -w "${walletPath}" -p "${password}"`;
      break;
    case 'win32':
      binPath = path.resolve(__dirname, 'bin\\wallet-upgrader.exe');
      executionCommand = `${binPath} -w "${walletPath}" -p "${password}"`;
      break;
    /* case 'darwin':
      binPath = path.resolve(__dirname, 'bin/wallet-upgrader-darwin');
      executionCommand = `${binPath} -w "${walletPath}" -p "${password}"`;
      break;
    */
    default:
      console.log('You are using an unsupported operating system.');
      console.log('Exited with status code 1');
      return 1;
  }

  console.log('Launching wallet-upgrader child process.');

  // eslint-disable-next-line no-unused-vars
  child.exec(executionCommand, (err, stdout, stderr) => {
    if (err) {
      console.log(stdout);
      console.log('Conversion failed!');
      console.log('Exited with status code 1');
      return 1;
    }
    console.log(stdout);
    console.log('Exited with status code 0');
    return 0;
  });
  return 0;
}
