

export const loopFriends = (friends: Friend[])=>{
     let updatedFriends = []
        for(let i=0;i++,i < friends.length;){
            if(friends[i].isPinned){
                updatedFriends.push(friends[i])
            }
        }
        for(let i=0;i++,i < friends.length;){
            if(!friends[i].isPinned){
                updatedFriends.push(friends[i])
            }
        }
        return updatedFriends
    }