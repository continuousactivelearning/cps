/**
 * Helper utility to safely convert MongoDB ObjectId values to strings
 * regardless of how they're represented in the data.
 */

/**
 * Safely converts any MongoDB ObjectId representation to a string
 * Handles various MongoDB ObjectId formats:
 * - String values
 * - Extended JSON format { $oid: "..." }
 * - MongoDB ObjectId objects with toString()
 * - Fallback to string conversion for other cases
 * 
 * @param id - The ID value to convert (could be string, object, etc.)
 * @param fallback - Optional fallback value if id is null/undefined
 * @returns A string representation of the ID
 */
export const mongoIdToString = (id: any, fallback?: string): string => {
  if (id === null || id === undefined) {
    return fallback || '';
  }

  // Already a string
  if (typeof id === 'string') {
    return id;
  }

  // MongoDB extended JSON format { $oid: "..." }
  if (typeof id === 'object' && id.$oid) {
    return id.$oid;
  }

  // MongoDB ObjectId object with toString method
  if (typeof id === 'object' && typeof id.toString === 'function') {
    return id.toString();
  }

  // Fallback to String constructor for any other types
  return String(id);
};

export default mongoIdToString;
