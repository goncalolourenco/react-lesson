let globalPrefix = "id";
let lastId = 0;

export function nextId(localPrefix) {
  lastId++;
  return `${localPrefix || globalPrefix}${lastId}`;
}
