// @ts-nocheck
import { lambdahandler } from '../src';
import { expect } from 'chai';
import * as event from './fixtures/sns.event.json';

describe('index: ...', () => {
  beforeEach(() => {});

  afterEach(() => {});

  it('index: should retrieve records', async () => {
    let expected = 1;
    let result = await lambdahandler(event);
    let body = JSON.parse(result['body']);
    expect(body.records).to.be.equal(expected);
  });
});
