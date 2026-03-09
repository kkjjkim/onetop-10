import React from 'react';
import { motion } from 'motion/react';
import './Empathy.css';

// -------------------------------------------------------------
// [Empathy 컴포넌트]
// 타겟 고객(대표님들)이 겪고 있는 고충을 나열하여 공감대를 형성하는 섹션입니다.
// 컨테이너가 화면에 보일 때 내부 카드들이 순차적으로 하나씩 나타납니다 (staggerChildren).
// -------------------------------------------------------------
export const Empathy: React.FC = () => {
    // 부모 컨테이너(grid)에 적용할 애니메이션 제어 객체
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1 // 0.1초 간격으로 자식 요소 등장
            }
        }
    };

    // 개별 카드에 적용할 애니메이션 요소
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const cards = [
        { icon: "🏦", text: "은행 갔더니 매출이 부족하다고 거절당했어요." },
        { icon: "🧭", text: "정책자금이 있다는데, 뭐부터 해야 할지 모르겠어요." },
        { icon: "💸", text: "컨설팅 받았는데 수수료만 나가고 결과가 없었어요." },
        { icon: "📝", text: "사업계획서를 어떻게 써야 통과되는 건지..." },
        { icon: "📉", text: "정부지원사업에 신청했는데 탈락했어요..." },
        { icon: "🤷", text: "주변에 물어봐도 다들 모르겠다고만 하고..." }
    ];

    return (
        <section className="empathy-section bg-secondary">
            <div className="container">
                {/* 상단 헤더: 아래에서 위로 등장 */}
                <motion.div
                    className="empathy-header text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2>"혹시 이런 경험, 있으신가요?"</h2>
                </motion.div>

                {/* 6개의 고충 카드 그리드: 순차적으로 하나씩 나타납니다 */}
                <motion.div
                    className="empathy-grid mt-40"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {cards.map((card, idx) => (
                        <motion.div key={idx} className="empathy-card" variants={itemVariants}>
                            <div className="card-icon">{card.icon}</div>
                            <div className="card-text">{card.text}</div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="empathy-emphasis text-center mt-80 mb-40">
                    <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.4 }}>
                        "대표님 혼자 감당하셨죠.<br />
                        <span className="text-primary-color">그게 제일 힘든 겁니다.</span>"
                    </h2>
                </div>

                {/* 하단 CTA(행동 유도) 버튼 배치 영역 */}
                <motion.div
                    className="empathy-cta text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h3>이제 혼자 고민하지 마세요. 5분이면 방향이 보입니다.</h3>
                    <a href="http://pf.kakao.com/_FzsBG/chat" target="_blank" rel="noopener noreferrer" className="btn-primary mt-4">무료 상담 신청하기</a>
                </motion.div>
            </div>
        </section>
    );
};
