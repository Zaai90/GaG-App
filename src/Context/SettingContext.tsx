import React, { createContext, ReactNode, useContext } from "react";
import useAsyncStorage from "../Hooks/Storage";

interface SettingProviderProps {
  children: ReactNode;
}

interface SettingContextValues {
    isSoundOn: boolean;
    isVibrationOn: boolean;
    isNotificationsOn: boolean;
    toggleSound: () => void;
    toggleVibration: () => void;
    toggleNotifications: () => void;
}

const SettingContext = createContext({} as SettingContextValues);

function SettingsProvider({ children }: SettingProviderProps) {
    const [isSoundOn, setIsSoundOn] = useAsyncStorage<boolean>("SoundSettingOn", true);
    const [isVibrationOn, setIsVibrationOn] = useAsyncStorage<boolean>("VibrationSettingOn", true);
    const [isNotificationsOn, setIsNotificationsOn] = useAsyncStorage<boolean>("NotificationSettingOn", true);

    function toggleSound() {
        setIsSoundOn(!isSoundOn);
    }

    function toggleVibration() {
        setIsVibrationOn(!isVibrationOn);
    }

    function toggleNotifications() {
        setIsNotificationsOn(!isNotificationsOn);
    }

    return (
        <SettingContext.Provider
            value={{
                isSoundOn,
                isVibrationOn,
                isNotificationsOn,
                toggleSound,
                toggleVibration,
                toggleNotifications,
            }}
        >
            {children}
        </SettingContext.Provider>
    );
}

export const useSettings = () => useContext(SettingContext);

export default SettingsProvider;
