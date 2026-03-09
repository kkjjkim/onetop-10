import React from 'react';
import { motion } from 'motion/react';
import './TurningPoint.css';

// -------------------------------------------------------------
// [TurningPoint 컴포넌트]
// 일반적인 접근(매출 의존)과 '경영지도사 설계'의 차이점을 극명하게 비교하는 테이블(표) 섹션입니다.
// Framer Motion을 사용하여 표 안의 각 행(Row)들이 위에서 아래로 차례대로(stagger) 나타나도록 구현했습니다.
// -------------------------------------------------------------
export const TurningPoint: React.FC = () => {
    // 표 전체(<tbody>)에 적용되는 순차적 등장 제어 객체
    const tableContainerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    // 표의 각 줄(<tr>)에 적용되는 등장 애니메이션 객체
    const rowVariants = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="turning-section bg-white">
            <div className="container">
                {/* 섹션 상단 제목: 화면에 보일 때 부드럽게 위로 올라오며 나타납니다 */}
                <motion.div
                    className="turning-header text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>같은 기업인데 자금이 <span className="text-primary-color">10배</span> 차이 나는 이유,<br />아십니까?</h2>
                    <p className="turning-subtitle">
                        대표님이 매출로만 은행 문을 두드리고 계실 때,<br />
                        옆집 사장님은 매출 없이도 정부에서 수억을 받고 있습니다. 차이는 딱 하나입니다. <strong>기업을 어떻게 설계했느냐.</strong>
                    </p>
                </motion.div>

                {/* 프리미엄 인포그래픽 (CSS 디자인) */}
                <motion.div
                    className="turning-graphic-wrapper mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="css-infographic-container">
                        <div className="css-info-card basic-card">
                            <div className="card-header">현재 상태 (매출 의존)</div>
                            <div className="chart-area basic-chart">
                                <div className="bar b1"></div>
                                <div className="bar b2"></div>
                                <div className="bar b3"></div>
                            </div>
                            <div className="card-footer">자금: <strong>매출액 비례</strong></div>
                        </div>

                        <div className="vs-badge">VS</div>

                        <div className="css-info-card premium-card">
                            <div className="card-header highlight">원탑 설계 전환 후</div>
                            <div className="chart-area premium-chart">
                                <div className="bar p1"></div>
                                <div className="bar p2"></div>
                                <div className="bar p3"></div>
                                <div className="bar p4">
                                    <span className="multiplier">10x</span>
                                </div>
                            </div>
                            <div className="card-footer">자금: <strong>매출 무관, 다중 수혜</strong></div>
                        </div>
                    </div>
                </motion.div>



                {/* 추가된 4가지 핵심 설계 방법 (상세 설명 영역) */}
                <motion.div
                    className="turning-details mt-10"
                    variants={tableContainerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.div className="detail-card" variants={rowVariants}>
                        <div className="detail-num text-primary-color drop-shadow-sm">①</div>
                        <div className="detail-text">
                            <h3>기업 인증 세팅</h3>
                            <p>벤처기업, 이노비즈, 메인비즈 — 어떤 인증을 갖고 있느냐에 따라 신청 가능한 자금의 종류와 규모가 완전히 달라집니다.</p>
                        </div>
                    </motion.div>

                    <motion.div className="detail-card" variants={rowVariants}>
                        <div className="detail-num text-primary-color drop-shadow-sm">②</div>
                        <div className="detail-text">
                            <h3>연구소·연구전담부서 설립</h3>
                            <p>기업부설연구소가 있으면 R&D 정부과제, 세제 혜택, 기술보증기금 보증까지 한꺼번에 열립니다.</p>
                        </div>
                    </motion.div>

                    <motion.div className="detail-card" variants={rowVariants}>
                        <div className="detail-num text-primary-color drop-shadow-sm">③</div>
                        <div className="detail-text">
                            <h3>사업계획서 설계</h3>
                            <p>심사위원이 보는 포인트는 정해져 있습니다. 같은 사업이라도 어떻게 쓰느냐에 따라 통과율이 갈립니다.</p>
                        </div>
                    </motion.div>

                    <motion.div className="detail-card" variants={rowVariants}>
                        <div className="detail-num text-primary-color drop-shadow-sm">④</div>
                        <div className="detail-text">
                            <h3>자금 신청 순서 전략</h3>
                            <p>정책자금 → 지원사업 → 바우처, 어떤 순서로 쌓아야 다음 단계에서 더 큰 자금을 받을 수 있는지가 중요합니다.</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* 하단 클로징 문구 */}
                <motion.div
                    className="turning-closing text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{ marginTop: '32px' }} /* 그리드 gap(24px)에 맞추거나 살짝 넓게 간격 조정 */
                >
                    <p className="closing-text font-medium text-lg text-dark-gray">
                        이 네 가지를 어떻게 세팅하느냐에 따라 받을 수 있는 자금의 규모가 완전히 달라집니다.<br />
                        <strong>그리고 이걸 설계하는 게 경영지도사가 하는 일입니다.</strong>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
