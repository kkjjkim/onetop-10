import React from 'react';
import { motion } from 'motion/react';
import './Warning.css';

// -------------------------------------------------------------
// [Warning 컴포넌트]
// 불법 브로커의 위험성을 경고하고, 왜 '국가공인 경영지도사'에게 맡겨야 하는지
// 설득하는 매우 중요한 섹션입니다. 
// 배경을 어둡게(bg-dark) 처리하여 경각심을 줍니다.
// -------------------------------------------------------------
export const Warning: React.FC = () => {
    // 경고 리스트 및 뉴스 기사 카드에 적용할 순차적 등장(stagger) 애니메이션 속성
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    // 개별 요소(아이템)가 위로 살짝 올라오며 나타나는 애니메이션
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="warning-section bg-dark">
            <div className="container">
                <div className="warning-content text-center">
                    {/* 상단 메인 경고 문구: 뷰포트에 들어올 때 서서히 나타남 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="warning-title text-inverse">
                            대표님 배를 불려야 할 정부 지원금이<br />
                            <span className="text-primary-color">불법 브로커의 배</span>를 불리고 있습니다.
                        </h2>
                    </motion.div>

                    {/* 3대 불법 브로커 피해 사례 카드 (순차적 등장) */}
                    <motion.div
                        className="warning-cards"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <motion.div className="warning-card" variants={itemVariants}>
                            <span className="warning-icon">⚠️</span>
                            <h3>수천만 원의 성공 보수 요구</h3>
                            <p>착수금, 성공 보수 명목으로 지원금의 10~20%를 부당하게 갈취합니다.</p>
                        </motion.div>
                        <motion.div className="warning-card" variants={itemVariants}>
                            <span className="warning-icon">📄</span>
                            <h3>서류 위조 및 조작</h3>
                            <p>매출을 부풀리거나 가짜 직원을 등록해 추후 대표님만 법적 처벌을 받습니다.</p>
                        </motion.div>
                        <motion.div className="warning-card" variants={itemVariants}>
                            <span className="warning-icon">👔</span>
                            <h3>고액 보험 가입 강요</h3>
                            <p>컨설팅을 미끼로 대표님 명의의 불필요한 고액 보험 가입을 종용합니다.</p>
                        </motion.div>
                    </motion.div>

                    {/* 솔루션 및 정부 단속 정보 영역 */}
                    <div className="warning-solution mt-80">
                        <motion.div
                            className="gov-warning mb-40 text-left"
                            style={{ background: 'rgba(255,255,255,0.05)', padding: '32px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-inverse mb-16" style={{ fontSize: '1.5rem' }}>🚨 정부도 심각하게 보고 있습니다.</h3>
                            <p className="text-inverse" style={{ fontSize: '1.125rem', opacity: 0.9 }}>
                                2026년부터 중기부·금융위·경찰청이 합동으로 불법 브로커 단속에 나섰고, 신고포상제까지 도입되었습니다.<br /><br />
                                <strong style={{ color: '#FF4D4F' }}>브로커에게 맡기면 대표님이 피해자가 됩니다.</strong><br />
                                정책자금 회수, 대출 제한, 수사 의뢰까지 갈 수 있습니다.
                            </p>
                        </motion.div>

                        {/* 실제 뉴스 기사 래퍼 (순차적 등장) */}
                        <motion.div
                            className="news-cards-container mt-40 mb-40"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <motion.div className="news-card" variants={itemVariants}>
                                <span className="news-meta">뉴스1 | 2025.12</span>
                                <h4>"중기부, 정책자금 브로커 차단 칼 빼다...신고포상제 운영"</h4>
                            </motion.div>
                            <motion.div className="news-card" variants={itemVariants}>
                                <span className="news-meta">이투데이 | 2025.12</span>
                                <h4>"소진공, 불법브로커 신고포상제 도입...자진신고 시 면책"</h4>
                            </motion.div>
                            <motion.div className="news-card" variants={itemVariants}>
                                <span className="news-meta">쿠키뉴스 | 2025.9</span>
                                <h4>"정책자금 불법 브로커 3개월간 151건 적발"</h4>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-inverse" style={{ fontSize: '1.75rem' }}>그러면 누구한테 맡겨야 할까요?</h3>
                            <p className="mt-24" style={{ fontSize: '1.125rem', opacity: 0.9 }}>
                                <strong>경영지도사법에 근거한 국가공인 경영지도사.</strong><br /><br />
                                법적으로 기업 경영 진단과 지도가 가능한 유일한 국가자격입니다.<br />
                                'XX센터', 'XX연구소', 'XX컨설팅'은 자격이 아닙니다.<br />
                                <strong>중소벤처기업부가 공인한 진짜 전문가, 경영지도사에게 맡기셔야 합니다.</strong>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
