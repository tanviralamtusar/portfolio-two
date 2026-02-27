"use client";
import React, { useRef } from "react";
import { motion, useInView, Variant, Transition } from "framer-motion";

interface TimelineVariant {
    y?: number;
    opacity?: number;
    filter?: string;
    transition?: Transition;
}

interface TimelineVariants {
    visible: (i: number) => TimelineVariant;
    hidden: TimelineVariant;
}

interface TimelineContentProps {
    as?: keyof JSX.IntrinsicElements;
    animationNum: number;
    timelineRef: React.RefObject<HTMLElement>;
    customVariants: TimelineVariants;
    className?: string;
    children: React.ReactNode;
}

export const TimelineContent: React.FC<TimelineContentProps> = ({
    as: Component = "div",
    animationNum,
    timelineRef,
    customVariants,
    className,
    children,
}) => {
    const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

    const MotionComponent = motion(Component as any);

    return (
        <MotionComponent
            variants={customVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={animationNum}
            className={className}
        >
            {children}
        </MotionComponent>
    );
};
