#!/bin/sh

cat $1 |gunzip - >$1.2 && mv $1 $1.bak && mv $1.2 $1
