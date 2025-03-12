import { getCurrentYear, getFooterCopy, getLatestNotification } from '../utils';

describe('getCurrentYear', () => {
  beforeEach(() => {
    const mockDate = new Date('2023-01-01T00:00:00Z');
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return the current year', () => {
    expect(getCurrentYear()).toBe(2023);
  });
});

describe('getFooterCopy', () => {
  it('returns correct string when isIndex is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  it('returns correct string when isIndex is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });
});

describe('getLatestNotification', () => {
  it('returns the correct HTML string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
