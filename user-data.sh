#!/bin/bash

sudo apt update
sudo curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
git clone https://github.com/MasterElrond/rickroll
node rickroll/app.js
