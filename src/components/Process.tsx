import React from 'react';
import { motion } from 'motion/react';
import './Process.css';

// -------------------------------------------------------------
// [Process 컴포넌트]
// 고객이 컨설팅을 의뢰했을 때 진행되는 3단계 과정을 보여줍니다.
// 부모 컨테이너가 뷰포트에 들어올 때 자식 카드들이 순서대로(stagger) 등장합니다.
// -------------------------------------------------------------
export const Process: React.FC = () => {
    // 부모 격자(Grid) 애니메이션 속성: 자식들을 0.2초 간격으로 나타나게 함
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    // 개별 단계(Step) 카드 애니메이션 속성: 아래에서 위로 살짝 올라오며 등장
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
    };

    return (
        <section className="process-section bg-secondary">
            <div className="container">
                {/* 섹션 상단 제목 영역: 뷰포트 진입 시 위로 페이드인 */}
                <motion.div
                    className="process-header text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="eyebrow-text">HOW IT WORKS</span>
                    <h2>단 3단계로 끝나는 자금 조달 프로세스</h2>
                    <p className="process-subtitle mt-24">
                        대표님은 전화 한 통만 해주세요. 복잡한 서류 작업과 심사 대비는 모두 전문가가 처리합니다.
                    </p>
                </motion.div>

                {/* 3단계 프로세스 카드 영역: staggerChildren 효과 적용 */}
                <motion.div
                    className="process-steps mt-80"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.div className="step-card" variants={itemVariants}>
                        <div className="step-number text-primary-color">01</div>
                        <div className="step-info">
                            <h3>전화/카카오톡 신청</h3>
                            <p>5분의 짧은 상담으로 기업 현황을 진단하고 조달 가능성을 타진합니다.</p>
                        </div>
                    </motion.div>

                    <motion.div className="step-card" variants={itemVariants}>
                        <div className="step-number text-primary-color">02</div>
                        <div className="step-info">
                            <h3>맞춤 로드맵 설계 및 계약</h3>
                            <p>어떤 부처, 어떤 자금을 노려야 하는지 전략을 브리핑하고 밀착 관리를 시작합니다.</p>
                        </div>
                    </motion.div>

                    <motion.div className="step-card" variants={itemVariants}>
                        <div className="step-number text-primary-color">03</div>
                        <div className="step-info">
                            <h3>실행 및 자금 확보</h3>
                            <p>사업계획서 작성, 인증 준비, 신청까지 경영지도사가 직접 함께합니다.</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
