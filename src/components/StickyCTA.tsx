import React, { useState, useEffect } from 'react';
import './StickyCTA.css';

export const StickyCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 600px
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`sticky-cta-bar ${isVisible ? 'visible' : ''}`}>
            <div className="sticky-cta-container">
                <a href="tel:01085330140" className="sticky-btn phone-btn">
                    📞 전화하기
                </a>
                <a href="http://pf.kakao.com/_FzsBG/chat" target="_blank" rel="noopener noreferrer" className="sticky-btn kakao-btn">
                    💬 카카오톡
                </a>
            </div>
        </div>
    );
};
