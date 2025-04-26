import { Request, Response, NextFunction } from 'express';

function logRequests(req: Request, res: Response, next: NextFunction): void {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const methodColor = '\x1b[35m'; // Magenta color for HTTP method
  const pathColor = '\x1b[36m'; // Cyan color for URL path
  const resetColor = '\x1b[0m'; // Reset color to default
  const timeStampColor = '\x1b[32m'; // Time stamp color

  console.log(
    `${timeStampColor}[${timestamp}] ${methodColor}method:${resetColor} ${req.method}   ${pathColor}path:${resetColor} ${req.url}`,
  );

  const start = Date.now();
  res.on('close', () => {
    const end = Date.now();
    const responseTime = end - start;
    console.log(
      `${methodColor}method:${resetColor} ${req.method}   ${pathColor}path:${resetColor} ${req.url} ${methodColor}response success:${resetColor} ${res.statusCode} - ${res.statusCode} - ${responseTime}ms`,
    );
  });
  next();
}

export default logRequests;
