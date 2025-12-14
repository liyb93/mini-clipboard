import React from "react"

export const MultiTypeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="8" y="12" width="40" height="40" rx="4" fill="#3B82F6" fillOpacity="0.2" />
    <path d="M16 24H40" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
    <path d="M16 34H32" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
    <rect x="24" y="20" width="36" height="36" rx="4" fill="#10B981" fillOpacity="0.2" />
    <circle cx="42" cy="38" r="8" fill="#10B981" fillOpacity="0.4" />
    <rect x="16" y="8" width="32" height="32" rx="4" transform="rotate(-10 32 24)" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="4 4" />
  </svg>
)

export const TimelineIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 32H56" stroke="#E5E7EB" strokeWidth="4" strokeLinecap="round" />
    <circle cx="16" cy="32" r="6" fill="#F59E0B" />
    <circle cx="32" cy="32" r="6" fill="#3B82F6" />
    <circle cx="48" cy="32" r="6" fill="#10B981" />
    <path d="M32 24V16" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
    <rect x="24" y="8" width="16" height="8" rx="2" fill="#3B82F6" fillOpacity="0.2" />
  </svg>
)

export const PinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="32" cy="32" r="24" fill="#EC4899" fillOpacity="0.1" />
    <path d="M42 22L22 42" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
    <path d="M22 22L42 42" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
    <circle cx="32" cy="32" r="6" fill="#EC4899" />
    <path d="M32 26V14" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" />
    <circle cx="32" cy="12" r="4" fill="#8B5CF6" />
  </svg>
)

export const DirectPasteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="12" y="12" width="40" height="40" rx="8" fill="#F59E0B" fillOpacity="0.1" />
    <path d="M32 20V44" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
    <path d="M20 32H44" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
    <path d="M44 44L54 54" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
    <circle cx="54" cy="54" r="4" fill="#EF4444" />
  </svg>
)

export const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="28" cy="28" r="16" stroke="#3B82F6" strokeWidth="4" />
    <path d="M40 40L52 52" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" />
    <path d="M48 16L56 8" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
    <path d="M52 24L60 20" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
    <path d="M12 52H24" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
    <path d="M12 44H20" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
  </svg>
)

export const KeyboardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="8" y="16" width="48" height="32" rx="6" fill="#6366F1" fillOpacity="0.1" stroke="#6366F1" strokeWidth="3" />
    <path d="M20 32H24" stroke="#6366F1" strokeWidth="3" strokeLinecap="round" />
    <path d="M30 32H34" stroke="#6366F1" strokeWidth="3" strokeLinecap="round" />
    <path d="M40 32H44" stroke="#6366F1" strokeWidth="3" strokeLinecap="round" />
    <path d="M24 24V20" stroke="#F472B6" strokeWidth="3" strokeLinecap="round" />
    <rect x="36" y="10" width="16" height="16" rx="4" fill="#F472B6" transform="rotate(15 44 18)" />
    <text x="40" y="22" fill="white" fontSize="10" fontWeight="bold" transform="rotate(15 44 18)">⌘</text>
  </svg>
)

export const AppearanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="32" cy="32" r="24" stroke="#8B5CF6" strokeWidth="3" />
    <path d="M32 8V56" stroke="#8B5CF6" strokeWidth="3" strokeDasharray="4 4" />
    <path d="M32 8C45.2548 8 56 18.7452 56 32C56 45.2548 45.2548 56 32 56V8Z" fill="#8B5CF6" fillOpacity="0.2" />
    <circle cx="20" cy="24" r="4" fill="#F59E0B" />
    <circle cx="24" cy="40" r="4" fill="#EF4444" />
    <circle cx="44" cy="32" r="6" fill="#10B981" />
  </svg>
)

export const BatchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="16" y="16" width="32" height="32" rx="4" fill="#F472B6" fillOpacity="0.8" />
    <rect x="24" y="24" width="32" height="32" rx="4" fill="#60A5FA" fillOpacity="0.8" />
    <path d="M12 12L20 20" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
    <circle cx="12" cy="12" r="4" fill="#10B981" />
  </svg>
)

export const PrivacyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M32 8L12 16V30C12 42 20 52 32 58C44 52 52 42 52 30V16L32 8Z" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="3" />
    <path d="M24 32L30 38L40 26" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="50" cy="14" r="6" fill="#F59E0B" />
    <path d="M48 12L52 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M52 12L48 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
)
