import React from 'react';

// ExampleComponent is a functional React component that demonstrates how to create reusable components in Next.js.
const ExampleComponent: React.FC = () => {
    return (
        <div className="p-4 bg-blue-100 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Example Component</h2>
            <p className="mt-2 text-gray-700">
                This is an example of a reusable component in a Next.js application using TypeScript and Tailwind CSS.
            </p>
        </div>
    );
};

export default ExampleComponent;