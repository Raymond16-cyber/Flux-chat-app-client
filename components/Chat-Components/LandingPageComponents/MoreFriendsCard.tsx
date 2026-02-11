import { View,Image, Text } from 'react-native';



const MoreCard = ({ hiddenFriends, hiddenCount }:{ hiddenFriends: Friend[], hiddenCount: number }) => {
  return (
    <View className="mr-4 items-center">
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 12,
          backgroundColor: "#4C1D95", // deep purple
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Mini stacked avatars */}
        {hiddenFriends.slice(0, 3).map((friend, index) => (
          <Image
            key={friend._id}
            source={{ uri: friend.profilePicture }}
            style={{
              width: 22,
              height: 22,
              borderRadius: 11,
              position: "absolute",
              top: 8 + index * 6,
              left: 8 + index * 6,
              borderWidth: 1,
              borderColor: "white",
            }}
          />
        ))}

        <Text
          style={{
            position: "absolute",
            bottom: 6,
            right: 6,
            color: "white",
            fontWeight: "bold",
            fontSize: 12,
          }}
        >
          +{hiddenCount}
        </Text>
      </View>
    </View>
  );
};

export default MoreCard;