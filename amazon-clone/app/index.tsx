import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`${process.env.EXPO_PUBLIC_API_URL}/articles`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
}
