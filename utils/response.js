// Returns 200 Success
exports.success = (res, data) =>
  res.status(200).json(data);

// Returns 500 Internal Server Error
exports.serverError = (res, jsonMessage) =>
  res.status(500).json({ error: typeof jsonMessage === 'object' ? jsonMessage : { message: jsonMessage || 'Server Error' } });

// Returns 401 Unauthorized
exports.serverUnauthorized = (res, jsonMessage) =>
  res.status(401).json({ error: typeof jsonMessage === 'object' ? jsonMessage : { message: jsonMessage || 'Unauthorized' } });

// Returns 403 PermissionDenied
exports.permissionDenied = (res, jsonMessage) =>
  res.status(403).json({ error: typeof jsonMessage === 'object' ? jsonMessage : { message: jsonMessage || 'Permission Denied' } });

// Returns 400 Validation Error
exports.validationError = (res, jsonMessage) =>
  res.status(400).json({ error: typeof jsonMessage === 'object' ? jsonMessage : { message: jsonMessage || 'Validation Error' } });

// Returns 404 Not Found Error
exports.notFoundError = (res, jsonMessage) =>
  res.status(404).json({ error: typeof jsonMessage === 'object' ? jsonMessage : { message: jsonMessage || 'Not Found Error' } });
