import Log from '@dazn/lambda-powertools-logger';
import { Handler } from 'aws-lambda';
import middy from 'middy';
import moment from 'moment';

import { LambdaResponse } from './utils';

Log.debug('lambda executing...');

export const lambdahandler: Handler = async (event: any): Promise<LambdaResponse> => {
  Log.debug(`Event: ${ JSON.stringify(event) }.`);
  const hw: string = 'Dummy Function';
  Log.debug(`${ hw }`);

  return {
    statusCode: 200,
    body: JSON.stringify({
      time: moment.utc().toISOString(),
      records: event.Records.length,
    }),
  };
};

export const handler: Handler = middy(lambdahandler);
