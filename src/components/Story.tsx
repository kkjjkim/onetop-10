import React from 'react';
import { motion } from 'motion/react';
import './Story.css';

// -------------------------------------------------------------
// [Story 컴포넌트]
// 대표님의 진정성과 스토리(은행권 6년 근무 등)를 나열하는 섹션입니다.
// 좌측에는 텍스트 스토리, 우측에는 요약된 자격 증명 카드(Profile)가 배치됩니다.
// -------------------------------------------------------------
export const Story: React.FC = () => {

    return (
        <section className="story-section bg-secondary">
            <div className="container">
                <div className="story-layout">
                    {/* 좌측 텍스트 영역: 아래에서 위로 스르륵 올라오는 애니메이션 적용 */}
                    <motion.div
                        className="story-text"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="eyebrow-text">CEO STORY</span>
                        <h2>"제가 이 일을 하는<br />확고한 이유가 있습니다."</h2>
                        <p className="mt-24">
                            은행에서 6년간 일하면서 많은 대표님들을 만났습니다.<br />
                            기술도 있고, 열정도 있는데<br />
                            '서류가 부족합니다', '매출이 낮습니다'<br />
                            이 한마디에 돌아가시는 분들을 수없이 봤습니다.
                        </p>
                        <p className="mt-24">
                            그때 생각했습니다.<br />
                            <strong>이분들한테 필요한 건 돈이 아니라<br />
                                돈이 흐르는 구조를 만들어주는 사람이라고.</strong>
                        </p>
                        <p className="mt-24">
                            그래서 경영지도사 자격을 따고,<br />
                            창업진흥원 예비위원으로 활동하면서<br />
                            자금을 심사하는 쪽의 시각을 직접 배웠습니다.
                        </p>
                        <p className="mt-24">
                            <strong>지금은 그 경험을 대표님 편에서 씁니다.</strong>
                        </p>
                    </motion.div>

                    {/* 우측 프로필/자격 증명 영역: 텍스트 렌더링 이후 0.2초 딜레이를 두고 우측에서 좌측으로 들어옵니다 */}
                    <motion.div
                        className="story-profile"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="profile-credentials-card">
                            <h3>김경중 대표</h3>
                            <ul>
                                <li><span className="check">✓</span> 국가공인 경영지도사</li>
                                <li><span className="check">✓</span> 은행권 6년 근무</li>
                                <li><span className="check">✓</span> 창업진흥원 예비위원</li>
                                <li><span className="check">✓</span> 성남산업진흥원 자문위원</li>
                                <li><span className="check">✓</span> 1,000명+ 1:1 컨설팅 완료</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
