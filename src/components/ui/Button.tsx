import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-md transform hover:-translate-y-1';

  const variants = {
    primary: 'bg-shopee text-white hover:bg-shopee-hover',
    outline:
      'border-2 border-shopee text-shopee hover:bg-shopee hover:text-white',
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;
