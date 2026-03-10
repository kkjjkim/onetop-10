import React from 'react';
import { motion } from 'motion/react';
import './FinalCTA.css';

// -------------------------------------------------------------
// [FinalCTA 컴포넌트]
// 랜딩페이지의 가장 마지막에 위치하여 고객의 최종 전환(전화 및 카카오톡 상담)을
// 강력하게 유도하는 영역입니다. 배경색을 짙은 색(bg-dark)으로 전환하여 
// 버튼이 매우 눈에 띄게 설계되었습니다.
// -------------------------------------------------------------
export const FinalCTA: React.FC = () => {

    return (
        <section className="final-cta-section bg-dark text-center">
            <div className="container">
                {/* 뷰포트에 들어올 때 투명도와 스케일이 부드럽게 커지는 효과 */}
                <motion.div
                    className="final-cta-layout"
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-inverse">자금 문제는 전략으로 풀립니다.<br />전략은 전문가가 만들어야 합니다.</h2>
                    <p className="final-cta-desc mt-24">
                        지금 5분만 내어주시면, 앞으로 1년의 자금 전략이 달라집니다.
                    </p>

                    <div className="cta-action-group mt-80">
                        {/* 전화 연결 버튼: 무한 펄스 효과 CSS는 FinalCTA.css의 .pulse-btn 처리 */}
                        <a href="tel:01085330140" className="btn-primary btn-large pulse-btn">
                            지금 바로 통화하기 (010-8533-0140)
                        </a>
                        {/* 카카오톡 상담 연결 버튼 */}
                        <a href="https://forms.gle/Yd7BM5RXHQ2Dss1r9" target="_blank" rel="noopener noreferrer" className="btn-secondary btn-large">
                            카카오톡으로 빠른 상담 예약
                        </a>
                    </div>

                    {/* 고객 안심/신뢰 강화 라벨 */}
                    <div className="final-trust-badge mt-80">
                        <span className="check text-primary-color">✓</span>
                        <span>국가공인 경영지도사 직접 상담</span>
                        <span className="check text-primary-color ml-16">✓</span>
                        <span>상담 후 계약 의무 없음</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
