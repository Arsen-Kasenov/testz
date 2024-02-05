import React from 'react'

const Page = () => {
    const accountCharacter = {
        name: 'John Doe',
        age: 30,
        gender: 'Male',
        occupation: 'Developer',
        avatar: 'https://example.com/avatar.jpg',
        rating: 4.5,
        friends: 100,
        money: 500,
        mail: 'john.doe@example.com',
        accountAge: '2 years',
        status: 'Active',
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Account Character</h1>
            <div className="bg-gray-200 p-4 rounded-lg">
                <p className="text-lg">
                    Name: {accountCharacter.name}
                </p>
                <p className="text-lg">
                    Age: {accountCharacter.age}
                </p>
                <p className="text-lg">
                    Gender: {accountCharacter.gender}
                </p>
                <p className="text-lg">
                    Occupation: {accountCharacter.occupation}
                </p>
                <p className="text-lg">
                    Rating: {accountCharacter.rating}
                </p>
                <p className="text-lg">
                    Friends: {accountCharacter.friends}
                </p>
                <p className="text-lg">
                    Money: {accountCharacter.money}
                </p>
                <p className="text-lg">
                    Mail: {accountCharacter.mail}
                </p>
                <p className="text-lg">
                    Account Age: {accountCharacter.accountAge}
                </p>
                <p className="text-lg">
                    Status: {accountCharacter.status}
                </p>
            </div>
        </div>
    )
}

export default Page
