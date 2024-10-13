'use client';

import { useEffect, useRef } from 'react';
import Categories from "@/components/Categories";
import Contact from "@/components/contact";
import FeaturedProducts from "@/components/feature-products";
import Header from "@/components/Header";

export default function Home() {
  const scrollingRef = useRef<number | null>(null);

  useEffect(() => {
    let target = window.scrollY;
    let current = window.scrollY;

    const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animate = () => {
      const diff = target - current;
      const delta = Math.abs(diff) < 0.1 ? diff : diff * 0.1;
      
      if (Math.abs(delta) < 0.1) {
        window.scrollTo(0, target);
        scrollingRef.current = null;
        return;
      }
      
      current += delta;
      window.scrollTo(0, Math.round(current));
      scrollingRef.current = requestAnimationFrame(animate);
    };

    const smoothScroll = (e: WheelEvent) => {
      e.preventDefault();

      const scrollAmount = ease(Math.min(Math.abs(e.deltaY) / 100, 1)) * (e.deltaY > 0 ? 1 : -1) * window.innerHeight * 0.5;
      target = Math.max(0, Math.min(target + scrollAmount, document.body.scrollHeight - window.innerHeight));

      if (!scrollingRef.current) {
        scrollingRef.current = requestAnimationFrame(animate);
      }
    };

    window.addEventListener('wheel', smoothScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', smoothScroll);
      if (scrollingRef.current) {
        cancelAnimationFrame(scrollingRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Header/>
      <Categories/> 
      <FeaturedProducts/>
      <Contact/>
    </div>
  );
}