import {rest} from "msw";
import {List} from "./componentHttp";

export const handlers = [
  rest.get<List>('/list', (req, res, ctx) => {
    return res(
      ctx.json([
        {
        description: 'Pack food for home',
        complete: true,
      },
        {
          description: 'Do some home work',
          complete: false,
        },
      ] as List)
    )
  }),
]