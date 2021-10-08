const development = {
  users: "/users",
  panelUsers: "/panelusers",
  openings: "/openings",
  deleteOpening:"/openings/path1",
};

export function getAllEndpoints() {
  return Object.keys(development).reduce(function (acc, item) {
    acc[item] = development[item];
    return acc;
  }, {});
}

export function getBaseURL() {
  return "http://localhost:3003";
}
