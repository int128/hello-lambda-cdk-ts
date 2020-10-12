#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { HelloLambdaCdkTsStack } from '../lib/hello-lambda-cdk-ts-stack';

const app = new cdk.App();
new HelloLambdaCdkTsStack(app, 'HelloLambdaCdkTsStack');
