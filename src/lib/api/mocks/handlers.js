import { rest } from 'msw';
import { addHours } from 'date-fns';

import apiConfig from '../../../services/config';

export const handlers = [
  rest.post(apiConfig.auth, (_req, res, ctx) => {
    // const { email, password } = req.body;
    return res(
      ctx.status(200),
      ctx.json({
        access: '123',
        refresh: '321',
        user_type: 'superuser',
      }),
    );
  }),
  rest.post(apiConfig.userList, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        accessToken: '1234',
        exp: addHours(new Date(), 1),
        user: {
          email: 'jan@wp.pl',
          name: 'Jan',
        },
      }),
    );
  }),
  rest.get(apiConfig.userDetails, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        email: 'jan@wp.pl',
        first_name: 'Jan',
        last_name: 'Kowalski',
      }),
    );
  }),
  rest.post(apiConfig.offerSearch, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 'ok',
      }),
    );
  }),
  rest.get(apiConfig.offerList, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 'f350c299-fbb0-4616-9a4c-eb8caccf42d7',
          city: 'Barcelona',
          country: 'Spain',
          title: 'Cosy apartment',
          photo: 'https://picsum.photos/seed/picsum/200/300',
        },
      ]),
    );
  }),
];
