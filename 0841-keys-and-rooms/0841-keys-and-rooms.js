/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  const keys = [rooms[0]];
  const visited = [0];
  
  while (keys.length) {
    const toBeVisited = keys.pop();
    
    toBeVisited.forEach(room => {
      const newKeys = rooms[room];
      
      if (!visited.includes(room)) {    
        keys.push(newKeys);
        visited.push(room);
      }
    })
  }

  return visited.length === rooms.length;
};