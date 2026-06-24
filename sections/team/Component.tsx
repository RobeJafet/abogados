'use client'

import { TeamSection } from "./types";
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperCore } from 'swiper/types';
import { Navigation } from 'swiper/modules';
import ImageComponent from "@/components/ImageComponent";
import 'swiper/css';
import { useEffect, useRef, useState } from "react";

function debounce<F extends (...args: any[]) => any>(func: F, waitFor: number) {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const debounced = (...args: Parameters<F>) => {
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => func(...args), waitFor);
    };

    return debounced as (...args: Parameters<F>) => void;
}

export default function Equipo(section: TeamSection) {
    const nextRef = useRef<HTMLDivElement>(null);
    const prevRef = useRef<HTMLDivElement>(null);
    const swiperRef = useRef<SwiperCore | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [sliderValues, setSliderValues] = useState({
        OFF1: 26.22,
        OFF2: 78.62,
        OFF3: 130.92,
        restFrom: 0.524,
    });

    const handleResize = () => {
        if (window.innerWidth >= 768 && window.innerWidth < 993) {
            setSliderValues({
                OFF1: 21.22,
                OFF2: 64.1,
                OFF3: 110.92,
                restFrom: 0.4282,
            });
        } else if (window.innerWidth >= 993) {
            setSliderValues({
                OFF1: 18.22,
                OFF2: 55.62,
                OFF3: 70.92,
                restFrom: 0.32,
            });
        } else {
            setSliderValues({
                OFF1: 23.2,
                OFF2: 65.4,
                OFF3: 124.92,
                restFrom: 0.346,
            });
        }

        if (swiperRef.current) {
            applyScaleFromProgress(swiperRef.current);
        }
    };

    useEffect(() => {
        const debouncedHandleResize = debounce(handleResize, 250);

        window.addEventListener('resize', debouncedHandleResize);
        handleResize();

        return () => window.removeEventListener('resize', debouncedHandleResize);
    }, []);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.update();
        }
    }, [sliderValues]);

    const setChildrenTransition = (swiper: SwiperCore, speed: number) => {
        if (!swiper?.slides) return;
        const tf = 'cubic-bezier(0.19, 1, 0.22, 1)';
        swiper.slides.forEach((slideEl) => {
            const img = (slideEl as HTMLElement).querySelector<HTMLElement>('.scale-target');
            if (!img) return;
            img.style.transitionProperty = 'transform';
            img.style.transitionDuration = `${speed}ms`;
            img.style.transitionTimingFunction = tf;
        });
    };

    const applyScaleFromProgress = (swiper: SwiperCore) => {
        if (!swiper?.slides) return;

        const { OFF1, OFF2, OFF3, restFrom } = sliderValues;

        swiper.slides.forEach((slideEl) => {
            const slide = slideEl as HTMLElement;
            const img = slide.querySelector<HTMLElement>('.scale-target');
            if (!img) return;

            const p = (slide as any).progress ?? 0;
            const ap = Math.abs(p);

            const scale = 1 - restFrom * Math.min(ap, 1);

            let mag = 0;
            if (ap <= 1) {
                mag = OFF1 * ap;
            } else if (ap <= 2) {
                mag = OFF1 + (OFF2 - OFF1) * (ap - 1);
            } else if (ap <= 3) {
                mag = OFF2 + (OFF3 - OFF2) * (ap - 2);
            } else {
                mag = OFF3;
            }

            const dir = p > 0 ? 1 : p < 0 ? -1 : 0;
            const tx = dir * mag;

            img.style.transform = `translateX(${tx}%) scale(${scale})`;
            img.style.transformOrigin = 'center center';
            img.style.willChange = 'transform';
        });
    };

    return (
        <section id="equipo" className="pt-blue">
            <div className="container-fluid p-lat pt-blue">
                <div className="row justify-center">
                    <div className="w-6/12 text-center">
                    {section.headline && (
                        <p className="link text-blue">{section.headline}</p>
                    )}
                    {section.title && (
                        <h2 className="h1 pt-2">{section.title}</h2>
                    )}
                    </div>
                    <div className="w-10/12 pt-red">
                        <div className="pt-red border border-gray pt-red pb-red">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={30}
                                speed={800}
                                slidesPerView={3.32}
                                centeredSlides={true}
                                watchSlidesProgress
                                loop={true}
                                navigation={{
                                    nextEl: nextRef.current!,
                                    prevEl: prevRef.current!,
                                }}
                                style={{
                                    ["--swiper-wrapper-transition-timing-function" as string]:
                                        "cubic-bezier(0.19, 1, 0.22, 1)",
                                }}
                                onSetTransition={(swiper, speed) => {
                                    setChildrenTransition(swiper, speed);
                                }}
                                onSetTranslate={(swiper) => {
                                    applyScaleFromProgress(swiper);
                                }}
                                onSwiper={(s) => {
                                    swiperRef.current = s;
                                    setActiveIndex(s.realIndex);
                                    applyScaleFromProgress(s);
                                }}
                                onSlideChange={(s) => setActiveIndex(s.realIndex)}

                            >
                                {section?.team?.map((member, index) => (
                                    <SwiperSlide key={member._key}>
                                        <div className={`scale-target transform-gpu will-change-transform team-slide-card p-[10px] border rounded-[20px] ${activeIndex === index ? 'border-gray' : 'border-transparent'}`}>
                                            <ImageComponent image={member.image} optionalAlt={member.name} sizes="50vw" classContainer="rounded-[15px] overflow-hidden" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                                <div className="flex gap-[10px] pt-yellow justify-center">
                                    <div className="prev-arrow cursor-pointer w-[30px] h-[30px] bg-blue flex items-center justify-center rounded-full" ref={prevRef}>
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.64673 0.494946L0.989874 6.1518L6.64673 11.8087M0.989874 6.1518H12.3036" stroke="white" strokeWidth="1.4"/>
                                        </svg>
                                    </div>
                                    <div className="next-arrow cursor-pointer w-[30px] h-[30px] bg-blue flex items-center justify-center rounded-full" ref={nextRef}>
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.65674 0.494946L11.3136 6.1518L5.65674 11.8087M11.3136 6.1518H-0.000115871" stroke="white" strokeWidth="1.4"/>
                                        </svg>
                                    </div>
                                </div>
                                
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
