import React from 'react';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import './Recommended.css';

export const Recommended: React.FC = () => {
    const contentFade = useScrollFadeIn();

    return (
        <section className="recommended-section bg-white">
            <div className="container">
                <div className="rec-layout" ref={contentFade.ref}>
                    <div className={`fade-in ${contentFade.className}`}>
                        <h2 className="text-center">이런 대표님께 추천합니다.</h2>

                        <div className="rec-list mt-80">
                            <div className="rec-item">
                                <span className="check">✓</span>
                                <p>은행에서 원하는 만큼 대출 한도가 안 나오시는 대표님</p>
                            </div>
                            <div className="rec-item">
                                <span className="check">✓</span>
                                <p>정책자금이 있다는 건 아는데 어디서부터 시작해야 할지 막막하신 대표님</p>
                            </div>
                            <div className="rec-item">
                                <span className="check">✓</span>
                                <p>기존 컨설팅 업체에 실망하거나 수수료만 과도하게 지출하신 대표님</p>
                            </div>
                            <div className="rec-item">
                                <span className="check">✓</span>
                                <p>사업은 잘 되는데 자금 구조가 불안하여 시스템을 갖추고 싶으신 대표님</p>
                            </div>
                            <div className="rec-item">
                                <span className="check">✓</span>
                                <p>매출 없이도 자금을 확보할 수 있는 전략이 필요한 초기 창업자</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
