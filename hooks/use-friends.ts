import { View, Text } from 'react-native'
import React from 'react'

const useFriends = () => {
    const friends: Friend[] = [
        {
            _id: '1',
            name: 'John',
            username: 'johndoe',
            profilePicture: 'https://image.tmdb.org/t/p/w500/3HsIAbHWbFDUbY2jfj4wqEjGC3b.jpg',
            isOnline: true,
            lastMessage: "Hey, how are you?"
        },
        {
            _id: '2',
            name: 'Jane',
            username: 'janesmith',
            profilePicture: 'https://image.tmdb.org/t/p/w500/oJ7g2CifqpStmoYQyaLQgEU32qO.jpg',
            isOnline: false,
            lastMessage: "Are you coming to the party?"
        },
        {
            _id: '3',
            name: 'Bob',
            username: 'bobsmith',
            profilePicture: 'https://image.tmdb.org/t/p/w500/3HsIAbHWbFDUbY2jfj4wqEjGC3b.jpg',
            isOnline: true,
            lastMessage: "Let's catch up later."
        },
        {
            _id: '4',
            name: 'Alice',
            username: 'alicesmith',
            profilePicture: 'https://image.tmdb.org/t/p/w500/oJ7g2CifqpStmoYQyaLQgEU32qO.jpg',
            isOnline: false,
            lastMessage: "Can you send me the report?"
        },
        {
            _id: '5',
            name: 'Charlie',
            username: 'charliesmith',
            profilePicture: 'https://image.tmdb.org/t/p/w500/3HsIAbHWbFDUbY2jfj4wqEjGC3b.jpg',
            isOnline: true,
            isPinned: true,
            lastMessage: "Don't forget our meeting tomorrow."
        },
        {
            _id: '6',
            name: 'Dave',
            username: 'davesmith',
            profilePicture: 'https://image.tmdb.org/t/p/w500/oJ7g2CifqpStmoYQyaLQgEU32qO.jpg',
            isOnline: false,
            isPinned: true,
            lastMessage: "Happy Birthday!"
        }
        ];
    return { friends }
}

export default useFriends