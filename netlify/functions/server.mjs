import server from "../../dist/server/server.js";

export default async (req) => {
  return server.fetch(req, {}, {});
};

export const config = {
  path: "/*",
  preferStatic: true,
};
