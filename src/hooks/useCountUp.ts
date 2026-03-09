import { useState, useEffect, useRef } from 'react';

export const useCountUp = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let startTime: number | null = null;

                    const animate = (currentTime: number) => {
                        if (!startTime) startTime = currentTime;
                        const progress = currentTime - startTime;
                        const percentage = Math.min(progress / duration, 1);

                        // easeOutQuart
                        const easeOut = 1 - Math.pow(1 - percentage, 4);

                        setCount(Math.floor(end * easeOut));

                        if (percentage < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(end);
                        }
                    };

                    requestAnimationFrame(animate);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, [end, duration]);

    return { count, countRef };
};
