import React from 'react';

import './Button.css';
import { cls } from '@/utils/cls';
import Image from 'next/image';


export interface ButtonProps {
  /** 버튼 사이즈 */
  size?: 'small' | 'medium' | 'large';
  /** 버튼의 유형은 컨테이너의 속성에 따라 4개의 형태로 사용합니다. */
  type?: 'filled' | 'line' | 'line_sub' | 'none';
  /** 버튼은 아이콘의 여부에 따라 아이콘 + 텍스트 버튼, 텍스트 버튼, 아이콘 버튼이라는
3개의 패턴으로 사용합니다. */
  pattern?: 'icon' | 'text' | 'icon_text' | 'text_icon';
  /** icon 이미지 */
  icon?: string;
  /** 버튼 라벨 */
  label?: string;
  /** disabled */
  disabled?:boolean;
  /** onClick Handler */
  onClick?: () => void;
}

/** 액션 버튼은 사용자 동작을 확인하거나 실행하는데 사용됩니다. */
export const Button = ({
  size = 'medium',
  label,
  type = 'filled',
  icon,
  pattern,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cls('rounded-[6px] text-white flex justify-center gap-[4px] items-center bg-white font-[600] tracking-[-0.32px] leading-[140%] py-[10px]',
        pattern === 'icon' ? 'px-[10px]' : 'px-[16px]',
        disabled ? '!bg-dw-gray-300':'',
        sizeStyle(size),
        typeStyle(type),
      )}
      {...props}
    >
      {(icon && (pattern === 'icon' || pattern === 'icon_text')) && (
        <Image src={icon} alt='icon' width={20} height={20} className='w-[20px] h-[20px]'/>
      )}
      {label}
      {(icon && (pattern === 'text_icon')) && (
        <Image src={icon} alt='icon' width={20} height={20} className='w-[20px] h-[20px]'/>
      )}
    </button>
  );
};

export const sizeStyle = (size:ButtonProps['size']) => {
  switch(size){
    case 'small' : 
      return 'text-[12px]';
    case 'medium':
      return 'text-[14px]';
    case 'large':
      return 'text-[16px]';
    default: return '';
  }
}

export const typeStyle = (type: ButtonProps['type']) => {
  switch(type){
    case 'filled':
      return '!bg-dw-primary-600';
    case 'line':
      return 'border-[1px] border-dw-primary-500 !text-dw-primary-500';
    case 'line_sub': 
      return 'border-[1px] border-dw-gray-300 text-black';
    case 'none': 
      return 'text-black';
    default: return '';
  }
}
