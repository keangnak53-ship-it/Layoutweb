import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white';
}

const Logo = ({ variant = 'default' }: LogoProps) => {
  const brandBlue = '#001A33';
  const textColor = variant === 'white' ? '#FFFFFF' : brandBlue;
  const subTextColor = variant === 'white' ? 'rgba(255,255,255,0.7)' : '#7f8c8d';

  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '14px'}}>
       {/* Official Image Logo */}
       <img 
         src="/images/kimmex-logo.png" 
         alt="Kimmex Logo Icon" 
         style={{
           height: '48px',
           width: 'auto',
           objectFit: 'contain',
           flexShrink: 0
         }} 
       />
       
       <div style={{display: 'flex', flexDirection: 'column'}}>
         <span style={{
           fontSize: '20px', 
           fontWeight: '900', 
           color: textColor, 
           textTransform: 'uppercase', 
           lineHeight: '0.9',
           letterSpacing: '0.5px'
         }}>KIMMEX</span>
         <span style={{
           fontSize: '9px', 
           fontWeight: '700', 
           color: subTextColor, 
           textTransform: 'uppercase', 
           letterSpacing: '0.4px',
           marginTop: '4px',
           lineHeight: '1.2',
           maxWidth: '180px'
         }}>Construction & Investment CO.,LTD.</span>
       </div>
    </div>
  );
};

export default Logo;
