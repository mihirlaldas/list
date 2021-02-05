import {server} from "./mockServer";

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('should just run in some way', () => {
  expect(true).toEqual(true)
})
