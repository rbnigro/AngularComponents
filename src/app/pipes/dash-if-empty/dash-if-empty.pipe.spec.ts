import { DashIfEmptyPipe } from './dash-if-empty.pipe';

describe('DashIfEmptyPipe', () => {
  it('create an instance', () => {
    const pipe = new DashIfEmptyPipe();
    expect(pipe).toBeTruthy();
  });
});
