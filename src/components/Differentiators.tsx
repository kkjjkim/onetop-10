import React from 'react';
import { motion } from 'motion/react';
import { useCountUp } from '../hooks/useCountUp';
import './Differentiators.css';

// -------------------------------------------------------------
// [Differentiators 컴포넌트]
// 다른 컨설팅 업체들과 원탑경영컨설팅만의 차별점 4가지를 
// 최신 트렌드인 Bento(도시락 격자) 스타일로 나열하는 섹션입니다.
// Framer Motion을 이용하여 Bento 박스들이 시차를 두고(stagger) 등장합니다.
// -------------------------------------------------------------
export const Differentiators: React.FC = () => {
    // 순차적 등장을 위한 부모 컨테이너 variants
    const bentoContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    // 각 Bento 카드의 애니메이션 속성
    const bentoItem = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } }
    };

    // 숫자 카운트업 커스텀 훅 세팅 (1000명, 1 (1:1), 12 (12개월))
    const count1 = useCountUp(1000, 2000);
    const count2 = useCountUp(1, 2000); // 1:1 대표 직접 상담
    const count3 = useCountUp(12, 2000); // 12개월 밀착 관리

    return (
        <section className="diff-section bg-white">
            <div className="container">
                {/* 섹션 최상단 도입부 타이틀: 아래에서 위로 나타남 */}
                <motion.div
                    className="diff-header text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="eyebrow-text">OUR DIFFERENCE</span>
                    <h2>컨설팅 업체는 많지만,<br />결과를 약속하는 곳은 흔치 않습니다.</h2>
                </motion.div>

                {/* 4개의 차별점 Bento Grid 컨테이너 */}
                <motion.div
                    className="diff-grid-bento"
                    variants={bentoContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.div className="diff-bento-card card-large" variants={bentoItem}>
                        <div className="bento-content">
                            <div className="bento-num">01</div>
                            <h3>성공보수 없는 정액 컨설팅</h3>
                            <p>대부분의 업체는 확보 금액의 5~20%를 가져갑니다.<br />10억 받으면 1~2억이 수수료입니다.<br />저는 정액제입니다. 얼마를 확보하든 추가 비용이 없습니다.</p>
                        </div>
                    </motion.div>

                    <motion.div className="diff-bento-card" variants={bentoItem}>
                        <div className="bento-content">
                            <div className="bento-num">02</div>
                            <h3>영업사원 없는 1:1 직통 케어</h3>
                            <p>대형 업체는 상담은 영업사원, 실무는 주니어가 합니다.<br />저는 경영지도사 본인이 처음부터 끝까지 함께합니다.</p>
                        </div>
                    </motion.div>

                    <motion.div className="diff-bento-card bg-primary-light" variants={bentoItem}>
                        <div className="bento-content">
                            <div className="bento-num text-primary-color">03</div>
                            <h3 className="text-primary-color">1회성 컨설팅 종료 NO,<br />1년 밀착 관리</h3>
                            <p>사업계획서 한 장 써주고 끝나는 게 아닙니다.<br />1년간 대표님의 자금 전략을 함께 관리합니다.</p>
                        </div>
                    </motion.div>

                    <motion.div className="diff-bento-card" variants={bentoItem}>
                        <div className="bento-content">
                            <div className="bento-num">04</div>
                            <h3>목표 미달 시 100% 환불</h3>
                            <p>조건 없습니다. 12개월 내 목표 미달 시 전액 환불.<br />이건 자신 있기 때문에 하는 약속입니다.</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* 통계 수치 카운트업 영역 (useCountUp 훅 연동 완료) */}
                <motion.div
                    className="diff-stats bg-secondary mt-80"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="stat-item">
                        <span className="stat-num text-primary-color" ref={count1.countRef}>{count1.count.toLocaleString()}+</span>
                        <span className="stat-label">누적 컨설팅 달성</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-num text-primary-color" ref={count2.countRef}>{count2.count}:1</span>
                        <span className="stat-label">대표 직접 상담</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-num text-primary-color" ref={count3.countRef}>{count3.count}개월</span>
                        <span className="stat-label">밀착 관리</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
