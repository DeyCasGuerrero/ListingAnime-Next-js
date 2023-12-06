import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

export default function ScriptSearch() {

    const router = useRouter();
    const [value, setValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            console.log(value);

            if (value === '') {
                console.log("El valor está vacío");
                router.push('/Search')
            } else {
                console.log("El valor es", value);
                router.push(`/Search/${decodeURIComponent(value.toLowerCase())}`)
            }
        }
    }

    const handleMouseClick = () => {
        if (value === '') {
            console.log("El valor está vacío");
            router.push('/Search')
        } else {
            console.log("El valor es", value);
            router.push(`/Search/${decodeURIComponent(value.toLowerCase())}`)
        }
    }

    return {
        handleKeyDown,
        value,
        handleChange,
        handleMouseClick,
    }

}