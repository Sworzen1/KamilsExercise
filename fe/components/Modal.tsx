import AntDesign from "@expo/vector-icons/AntDesign";
import React, { FC, PropsWithChildren } from "react";
import {
  Modal as RNModal,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { BlurView } from "expo-blur";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, {
  interpolate,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useThemeColor } from "@/hooks/useThemeColor";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  onClose,
  children,
}) => {
  const { bottom: bottomInset } = useSafeAreaInsets();
  const height = useSharedValue(0);
  const backgroundColor = useThemeColor({}, "background");
  const iconColor = useThemeColor({}, "icon");

  const animatedHeight = useDerivedValue(
    () =>
      (height.value = withTiming(
        interpolate(Number(isOpen), [0, 1], [0, screenHeight * 0.5]),
        { duration: 200 },
      )),
    [isOpen],
  );

  return (
    <RNModal
      transparent
      visible={isOpen}
      onRequestClose={onClose}
      animationType="fade"
    >
      <BlurView
        intensity={15}
        tint="dark"
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: `rgba(0,0,0,0.4)`,
          },
        ]}
      >
        <Pressable onPress={onClose} style={{ flex: 1 }} />
        <Animated.View
          style={[
            styles.contentContainer,
            {
              backgroundColor: backgroundColor,
              height: animatedHeight,
              paddingBottom: bottomInset,
            },
          ]}
        >
          <Pressable
            onPress={onClose}
            style={{ alignSelf: "flex-end", marginRight: 20, marginBottom: 20 }}
          >
            <AntDesign name="close" size={32} color={iconColor} />
          </Pressable>
          {children}
        </Animated.View>
      </BlurView>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    position: "absolute",
    width: screenWidth,
    paddingTop: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    bottom: 0,
  },
});
