import { ThemedText } from "@/components/ThemedText";
import { useCallback } from "react";
import {
  createNotifications,
  FadeInFadeOut,
  useNotificationController,
} from "react-native-notificated";
import { NotificationsType } from "react-native-notificated/lib/typescript/types/config";
import { Pressable } from "react-native";

const notificationVariants = {
  default: { bg: "blue", textColor: "white" },
  error: { bg: "red", textColor: "white" },
  success: { bg: "green", textColor: "white" },
  warning: { bg: "yellow", textColor: "orange" },
};

const createNotificationVariant =
  (status: NotificationsType) =>
  ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }): JSX.Element => {
    const { remove } = useNotificationController();
    const removeNotification = useCallback(() => remove(), [remove]);

    const { bg, textColor } = notificationVariants[status];

    return (
      <Pressable
        onPress={removeNotification}
        style={{
          backgroundColor: bg,
          borderRadius: 12,
          padding: 16,
          width: "100%",
        }}
      >
        <ThemedText
          type="subtitle"
          style={{ color: textColor, marginBottom: 4 }}
        >
          {title}
        </ThemedText>
        <ThemedText type="defaultSemiBold" style={{ color: textColor }}>
          {description}
        </ThemedText>
      </Pressable>
    );
  };

export const { NotificationsProvider } = createNotifications({
  defaultStylesSettings: {
    globalConfig: {
      defaultIconType: "no-icon",
      multiline: 8,
    },
  },
  duration: 5000,
  gestureConfig: {
    direction: "full",
    x: { activationDistances: 100, activationVelocities: 5 },
    y: { activationDistances: 100, activationVelocities: 5 },
  },
  isNotch: true,
  animationConfig: FadeInFadeOut,
  notificationPosition: "top",
  variants: {
    error: {
      component: createNotificationVariant("error"),
    },
    info: {
      component: createNotificationVariant("default"),
    },
    success: {
      component: createNotificationVariant("success"),
    },
    warning: {
      component: createNotificationVariant("warning"),
    },
  },
});
