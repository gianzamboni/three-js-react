'use client';

import { useEffect, useRef } from "react";

export const useScrollMemory = (storageKey: string = 'scrollTop') => {

	const scrollTop = useRef(0);

	useEffect(() => {
    scrollTop.current = parseFloat(localStorage.getItem(storageKey) || '0');

		document.body.scrollTo({ top: scrollTop.current, behavior: 'instant' } as ScrollToOptions);

		const handleBodyScroll = () => {
			scrollTop.current = document.body.scrollTop;
		};

		document.body.addEventListener('scroll', handleBodyScroll, { passive: true });

		return () => {
			localStorage.setItem(storageKey, String(scrollTop.current));
			document.body.removeEventListener('scroll', handleBodyScroll);
		};
	}, []);
};

export default useScrollMemory;


