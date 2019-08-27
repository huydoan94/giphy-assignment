import { getPictures, getIsFetching, getErrorCode } from './Dashboard.selectors';

describe('Dashboard selectors', () => {
  it('getPictures should get its pictures', () => {
    const payload = ['picture-1', 'picture-2'];

    const result = getPictures({ dashboard: { pictures: payload } });
    expect(result).toEqual(payload);
  });

  it('getIsFetching should get its status', () => {
    const payload = true;

    const result = getIsFetching({ dashboard: { isFetching: payload } });
    expect(result).toBe(payload);
  });

  it('getErrorCode should get its error code', () => {
    const payload = 'some-error';

    const result = getErrorCode({ dashboard: { errorCode: payload } });
    expect(result).toBe(payload);
  });
});
