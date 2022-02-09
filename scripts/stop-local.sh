#!/bin/bash

kill $(jps | grep tdc-api | cut -d' ' -f 1) $(jps | grep cfp-app | cut -d' ' -f 1)
