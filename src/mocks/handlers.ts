import { rest } from "msw";

export const handlers = [
  rest.get("/listings", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: "Stuff" }));
  }),
];
