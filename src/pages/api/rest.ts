import { NextApiRequest, NextApiResponse } from 'next';

// This function handles RESTful API requests
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Check the request method
    switch (req.method) {
        case 'GET':
            // Handle GET requests
            res.status(200).json({ message: 'GET request successful' });
            break;
        case 'POST':
            // Handle POST requests
            const data = req.body;
            res.status(201).json({ message: 'POST request successful', data });
            break;
        case 'PUT':
            // Handle PUT requests
            const updateData = req.body;
            res.status(200).json({ message: 'PUT request successful', updateData });
            break;
        case 'DELETE':
            // Handle DELETE requests
            res.status(204).end(); // No content to return
            break;
        default:
            // Handle any other HTTP method
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
            break;
    }
}