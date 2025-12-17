import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="flex space-x-2">
                <span className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"></span>
                <span className="w-4 h-4 bg-blue-600 rounded-full animate-bounce delay-150"></span>
                <span className="w-4 h-4 bg-blue-600 rounded-full animate-bounce delay-300"></span>
            </div>
        </div>
    );
};

export default Loading;