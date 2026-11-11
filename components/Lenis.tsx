"use client";
import { useEffect } from 'react';
import Lenis from 'lenis';

export type LenisController = {
    scrollTo: (target: string | number | HTMLElement) => void;
};

let controller: LenisController | null = null;

export function scrollToWithLenis(target: string) {
    if (controller) {
        controller.scrollTo(target);
        return true;
    }

    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    return false;
}

export default function LenisScroll() {
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            return;
        }

        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            syncTouch: true,
        });

        controller = {
            scrollTo: (target) => lenis.scrollTo(target),
        };

        let animationFrameId: number;

        const raf = (time: number) => {
            lenis.raf(time);
            animationFrameId = requestAnimationFrame(raf);
        };

        animationFrameId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(animationFrameId);
            controller = null;
            lenis.destroy();
        };
    }, []);

    return null;
}
