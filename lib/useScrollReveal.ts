"use client";
import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
    const { threshold = 0.1, rootMargin = '0px', once = true } = options;
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) observer.unobserve(el);
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return { ref, isVisible };
}

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale';

export function useAnimateIn(direction: Direction = 'up', delay: number = 0) {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

    const getAnimationClass = useCallback(() => {
        if (!isVisible) return 'opacity-0';

        const base = 'opacity-100 transition-all duration-700 ease-out';
        const delays: Record<number, string> = {
            0: '',
            100: 'delay-100',
            200: 'delay-200',
            300: 'delay-300',
            400: 'delay-400',
            500: 'delay-500',
            600: 'delay-600',
            700: 'delay-700',
            800: 'delay-800',
        };

        const delayClass = delays[delay] || '';

        switch (direction) {
            case 'up':
                return `${base} translate-y-0 ${delayClass}`;
            case 'down':
                return `${base} translate-y-0 ${delayClass}`;
            case 'left':
                return `${base} translate-x-0 ${delayClass}`;
            case 'right':
                return `${base} translate-x-0 ${delayClass}`;
            case 'scale':
                return `${base} scale-100 ${delayClass}`;
            default:
                return `${base} ${delayClass}`;
        }
    }, [isVisible, direction, delay]);

    const hiddenClass = (() => {
        switch (direction) {
            case 'up': return 'opacity-0 translate-y-10';
            case 'down': return 'opacity-0 -translate-y-10';
            case 'left': return 'opacity-0 translate-x-10';
            case 'right': return 'opacity-0 -translate-x-10';
            case 'scale': return 'opacity-0 scale-95';
            default: return 'opacity-0';
        }
    })();

    return { ref, isVisible, animationClass: isVisible ? getAnimationClass() : hiddenClass };
}
