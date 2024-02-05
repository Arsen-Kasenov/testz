import React from 'react';

const ShopPage: React.FC = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Welcome to our Shop!</h1>
            <div className="grid grid-cols-3 gap-4">
                {/* Product 1 */}
                <div className="bg-white p-4 shadow">
                    <h2 className="text-lg font-semibold mb-2">Product 1</h2>
                    <p className="text-gray-500 mb-2">Description of Product 1</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
                </div>

                {/* Product 2 */}
                <div className="bg-white p-4 shadow">
                    <h2 className="text-lg font-semibold mb-2">Product 2</h2>
                    <p className="text-gray-500 mb-2">Description of Product 2</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
                </div>

                {/* Product 3 */}
                <div className="bg-white p-4 shadow">
                    <h2 className="text-lg font-semibold mb-2">Product 3</h2>
                    <p className="text-gray-500 mb-2">Description of Product 3</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;