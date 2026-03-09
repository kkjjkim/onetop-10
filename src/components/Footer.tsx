import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
    return (
        <footer className="footer-section bg-dark text-center">
            <div className="container">
                <div className="footer-content">
                    <h4>(주)원탑경영컨설팅</h4>
                    <p className="footer-info">
                        대표: 김경중 | 사업자등록번호: 520-81-02461<br />
                        주소: 경기도 성남시 분당구 황새울로 200번길 36, 519호<br />
                        대표번호: 010-8533-0140 | 이메일: onetopkkj@gmail.com
                    </p>
                    <p className="footer-copyright mt-24">
                        &copy; {new Date().getFullYear()} Onetop Management Consulting. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
