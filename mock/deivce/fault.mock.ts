import { defineMock, fail, send } from "../config";
import database from "../database";
const table = "device_type";
const API_BASE = "/device_type";
export default defineMock([
  {
    url: API_BASE,
    method: "GET",
    response(req, res, next) {
      const { page = 1, limit = 10 } = req.query;
      const data = database(table);
      const result = {
        total: data.total,
        list: data.page(page, limit),
      };
      send(res, result);
    },
  },
  {
    url: `${API_BASE}`,
    method: "POST",
    response(req, res, next) {
      const data = database(table).created(req.body);
      send(res, data);
    },
  },
  {
    url: `${API_BASE}/:id`,
    method: "GET",
    response(req, res, next) {
      const id = req.params.id as string;
      const data = database(table).find({ id });
      if (!data) {
        res.statusCode = 400;
        fail(res, 4000);
      } else {
        send(res, data);
      }
    },
  },
  {
    url: `${API_BASE}/:id`,
    method: "PUT",
    response(req, res, next) {
      const id = req.params.id as string;
      console.log("更新", id);
      const data = database(table).updated(id, req.body);
      send(res, data);
    },
  },
  {
    url: `${API_BASE}/:id`,
    method: "DELETE",
    response(req, res, next) {
      const id = req.params.id as string;
      const data = database(table).delete(id);
      send(res, data);
    },
  },
]);
