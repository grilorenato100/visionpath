import { InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
  rightElement?: ReactNode;
  className?: string; 
  placeholder?: string;
  type?: string;
  required?: boolean;
  id?: string;
}

export function Input({ label, icon, rightElement, className = '', ...props }: InputProps) {
  return (
    <div className={`space-y-2 ${className}`} id={`input-container-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-center gap-2 text-zinc-300 text-sm font-medium">
        {icon}
        <span>{label}</span>
      </div>
      <div className="relative">
        <input
          className="input-field pr-10 outline-none"
          {...props}
        />
        {rightElement && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {rightElement}
          </div>
        )}
      </div>
    </div>
  );
}
