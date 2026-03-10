import React from 'react';
import { motion } from 'motion/react';
import './Hero.css';

// -------------------------------------------------------------
// [Hero 컴포넌트]
// 사용자가 웹사이트에 접속하자마자 가장 먼저 보는 최상단 화면입니다.
// 대표님의 강력한 메시지와 즉각적인 행동(CTA)을 유도하는 섹션입니다.
// Framer Motion(motion 라이브러리)을 사용해 부드럽게 나타나는 애니메이션을 적용했습니다.
// -------------------------------------------------------------
export const HeroB: React.FC = () => {

    return (
        <section className="hero-section bg-dark">
            <div className="container hero-layout">
                {/* 좌측 텍스트 영역: 화면에 들어올 때 투명도(opacity)와 위치(y)가 변하며 나타납니다 */}
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}         // 시작 상태: 투명하고 살짝 아래에 위치
                    whileInView={{ opacity: 1, y: 0 }}      // 화면에 보일 때: 선명해지며 원래 위치로
                    viewport={{ once: true, margin: "-100px" }} // 스크롤 시 한 번만 실행되도록 설정
                    transition={{ duration: 0.8, ease: "easeOut" }} // 0.8초 동안 부드럽게 전환
                >
                    <h1 style={{ wordBreak: 'keep-all' }}>
                        <span style={{ color: "var(--primary)", fontSize: "0.8em", display: "block", marginBottom: "8px" }}>[긴급] 2026년 정책자금</span>
                        정책자금, 한 번 반려되면<br />
                        <span style={{ whiteSpace: "nowrap" }}>6개월간 재신청이</span><br />
                        <span style={{ whiteSpace: "nowrap" }}>불가능합니다.</span>
                    </h1>
                    <p className="hero-subtitle">
                        서류 하나 잘못 쓰면 한도도 깎입니다.<br />
                        첫 시도에서 최대한 받아야 합니다.<br />
                        국가공인 경영지도사가 첫 신청부터 직접 설계합니다.
                    </p>
                    <div className="hero-actions">
                        <a href="https://forms.gle/Yd7BM5RXHQ2Dss1r9" target="_blank" rel="noopener noreferrer" className="btn-primary">무료 기업 진단 받기</a>
                    </div>
                    <div className="hero-social-proof">
                        <div className="proof-item">
                            <span className="proof-num">1,000+</span>
                            <span className="proof-label">대표 컨설팅 완료</span>
                        </div>
                        <div className="proof-item">
                            <span className="proof-num">국가공인</span>
                            <span className="proof-label">경영지도사</span>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} // 텍스트보다 0.2초 늦게 나타납니다
                >
                    {/* 뒤에 깔리는 추상적인 빛 모양 (CSS로 구현) */}
                    <div className="abstract-shape shape-1"></div>
                    <div className="abstract-shape shape-2"></div>

                    {/* 우측 대표님 프로필 사진 */}
                    <div className="hero-image-container">
                        <img src="/profile.jpeg" alt="원탑경영컨설팅 김경중 대표" className="hero-profile-img" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
