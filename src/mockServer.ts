import {setupServer} from "msw/node";
import {rest} from "msw";

interface ListItem {
  itemDescription: string
  complete: boolean
}

type ListResponseBody = Array<ListItem>

export const server = setupServer(
  rest.post<ListResponseBody>('/list', (req, res, ctx) => {
    const [item1, ..._] = req.body
    return res(
      ctx.json({
        item1,
        firstName: 'John'
      })
    )
  }),

  rest.get<ListItem>('/list/0', (req, res, ctx) => {
    const listItem = req.body
    return res(
      ctx.json({
        listItem,
        firstName: 'John'
      })
    )
  }),
)