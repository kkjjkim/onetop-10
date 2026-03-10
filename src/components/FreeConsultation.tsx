import React from 'react';
import { motion } from 'motion/react';
import './FreeConsultation.css';

export const FreeConsultation: React.FC = () => {
    // 컨테이너 애니메이션
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    // 아이템 애니메이션
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="fc-section bg-primary-light">
            <div className="container">
                <div className="fc-layout">
                    <motion.div
                        className="fc-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>무료 상담만 받아도<br />이걸 바로 알려드립니다.</h2>
                        <p className="fc-subtitle mt-24">
                            상담 받으셨다고 무조건 계약하실 필요 없습니다.<br />
                            단 5분의 통화로 현재 우리 기업의 객관적인 자금 조달 위치를 파악하세요.
                        </p>
                    </motion.div>

                    <motion.div
                        className="fc-cards"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <motion.div className="fc-card" variants={itemVariants}>
                            <div className="fc-icon">①</div>
                            <h3>정책자금·지원사업 리스트</h3>
                            <p>지금 대표님 기업이 당장 신청 가능한 유효 자금 목록을 도출합니다.</p>
                        </motion.div>
                        <motion.div className="fc-card" variants={itemVariants}>
                            <div className="fc-icon">②</div>
                            <h3>필요 인증 및 세팅 가이드</h3>
                            <p>어떤 인증(벤처, 이노비즈 등)을 먼저 받아야 자금 규모가 커지는지 진단합니다.</p>
                        </motion.div>
                        <motion.div className="fc-card" variants={itemVariants}>
                            <div className="fc-icon">③</div>
                            <h3>자금 조달 순서 로드맵</h3>
                            <p>올해 안에 실행 가능한 최적의 자금 신청 순서를 전략적으로 구성합니다.</p>
                        </motion.div>
                        <motion.div className="fc-card" variants={itemVariants}>
                            <div className="fc-icon">④</div>
                            <h3>사업계획서 핵심 포인트</h3>
                            <p>심사위원이 평가 시 가장 중요하게 보는 핵심 합격 포인트를 짚어드립니다.</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="fc-cta text-center mt-80"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <a href="https://forms.gle/Yd7BM5RXHQ2Dss1r9" target="_blank" rel="noopener noreferrer" className="btn-primary">무료 진단 신청하기</a>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};
