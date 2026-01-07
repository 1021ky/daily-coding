import { main } from './index';

// TODO： fizzbuzzのテストをする
test('main prints greeting', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    main();
    expect(spy).toHaveBeenCalledWith('hello from TypeScript on Docker');
    spy.mockRestore();
});