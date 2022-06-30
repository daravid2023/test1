import { useMemo, useState } from "react";

export function useArrayCarousel(initialData = [], formatter = null) {
    const [data] = useState(typeof formatter === "function" ? formatter(initialData) : initialData);
    const [currentIndex, setCurrentIndex] = useState(0);

    const hasNext = useMemo(
        () => currentIndex < data.length - 1,
        [currentIndex, data.length]
    );

    const hasPrev = useMemo(() => currentIndex > 0, [currentIndex]);

    const next = () => {
        if (!hasNext) return;
        setCurrentIndex(currentIndex + 1);
    };

    const prev = () => {
        if (!hasPrev) return;
        setCurrentIndex(currentIndex - 1);
    };

    const reset = () => {
        if (currentIndex === 0) return;
        setCurrentIndex(0);
    };

    return {
        carousel: data,
        hasNext,
        hasPrev,
        currentIndex,
        next,
        prev,
        reset,
    };
}
