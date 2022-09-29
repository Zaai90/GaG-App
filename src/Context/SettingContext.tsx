import React, { createContext, ReactNode, useContext, useState } from "react";

interface SettingProviderProps {
    children: ReactNode;
}

interface SettingContextValues {
    isSoundOn: boolean;
    setIsSoundOn: React.Dispatch<React.SetStateAction<boolean>>
    isVibrationOn: boolean;
    setIsVibrationOn: React.Dispatch<React.SetStateAction<boolean>>
    isNotificationsOn: boolean;
    setIsNotificationsOn: React.Dispatch<React.SetStateAction<boolean>>
    toggleSound: () => void;

}

const SettingContext = createContext({} as SettingContextValues);

function SettingsProvider({ children }: SettingProviderProps) {
    const [isSoundOn, setIsSoundOn] = useState<boolean>(true);
    const [isVibrationOn, setIsVibrationOn] = useState<boolean>(true);
    const [isNotificationsOn, setIsNotificationsOn] = useState<boolean>(true);
    function toggleSound() {
        setIsSoundOn((prev) => !prev);
    }

    return (
        <SettingContext.Provider
            value={{
                isSoundOn,
                isVibrationOn,
                isNotificationsOn,
                setIsSoundOn,
                setIsVibrationOn,
                setIsNotificationsOn,
                toggleSound,
            }}
        >
            {children}
        </SettingContext.Provider>
    );
}


export const useSettings = () => useContext(SettingContext);


export default SettingsProvider;
