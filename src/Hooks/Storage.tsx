import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';

export default function useAsyncStorage<T>(key: string, defaultValue: T) {

    const [loading, setLoading] = useState<boolean>(true);
    const [value, setValue] = useState<T | undefined>();

    async function getValueFromAsyncStorage(): Promise<void> {
        try {
            setLoading(true);
            setValue(defaultValue);

            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                setValue(JSON.parse(value));
            }
        } catch (error: any) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getValueFromAsyncStorage();
    }, [key])

    const handleSetValue = useCallback(async (newValue: T) => {
        const stringifiedValue = JSON.stringify(newValue);
        await AsyncStorage.setItem(key, stringifiedValue);
        setValue(newValue);
        setLoading(false);
    }, [key]);

    const handleRemoveValue = useCallback(async () => {
        await AsyncStorage.removeItem(key);
        setValue(undefined);
        setLoading(false);
    }, [key]);

    return [
        value,
        handleSetValue,
        handleRemoveValue,
        loading,
    ] as [T, typeof setValue, () => Promise<void>, boolean]


} 