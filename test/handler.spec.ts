// @ts-nocheck
import { lambdahandler } from '../src';
import { expect } from 'chai';
import * as sinon from 'sinon';
import 'mocha';
import moment from 'moment';
import * as event from './fixtures/sns.event.json';

describe('time: ...', () => {

  before(function() {
    this.clock = sinon.useFakeTimers(new Date(2012, 1, 10).getTime());
  });

  after(function() {
    this.clock.restore();
  });

  it('time: should return 200 always!', async () => {
    const result = await lambdahandler(event);
    const { time }  = JSON.parse(result.body);
    expect(time).to.be.equal(moment()
      .utc()
      .toISOString());
  });
});
