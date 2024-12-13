export function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c => {
    const randomValue = crypto.getRandomValues(new Uint8Array(1))[0];
    return (c ^ randomValue & 15 >> c / 4).toString(16);
  });
}
export const assignUUIDToNullIds = array => {
  array.forEach(item => {
    // If the id is null, assign a uuid
    if (item.id === null) {
      item.id = uuidv4();
    }

    // If there are children, recursively assign UUIDs to them
    if (item.children && item.children.length > 0) {
      assignUUIDToNullIds(item.children);
    }
  });
  return array;
};
export const fetchSelectedIdFromTreeStructure = (id, array) => {
  try {
    for (const item of array) {
      // Check if the id or typeId matches
      if (item.id === id || item.typeId === id) {
        return item.id;
      }

      // If children exist, recursively check the children
      if (item.children && item.children.length > 0) {
        const foundId = fetchSelectedIdFromTreeStructure(id, item.children);
        if (foundId) {
          return foundId;
        }
      }
    }
    return ""; // Return empty string if no match is found
  } catch (error) {
    console.error("Error in fetchSelectedIdFromTreeStructure:", error);
    return "";
  }
};