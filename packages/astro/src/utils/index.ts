import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// TODO Lario: consider remove clsx
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
