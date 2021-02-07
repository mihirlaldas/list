import {server} from "./mockServer";
import ComponentHttp from "./componentHttp";
import {render, screen} from "@testing-library/react";

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('should just run in some way', async () => {
  render(<ComponentHttp/>)
  const itemPackFoodForHome = await screen.findByText("Pack food for home")
  const itemDoSomeHomework = await screen.findByText("Do some home work")
  expect(itemPackFoodForHome).toBeInTheDocument()
  expect(itemDoSomeHomework).toBeInTheDocument()
})
