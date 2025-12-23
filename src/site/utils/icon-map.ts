// Centralized icon mapping utility
// This utility provides a reusable way to map icon names to Lucide React icons
import type { ComponentType } from 'react';
import {
  // Contact icons
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Clock,
  // Social icons
  Instagram,
  Facebook,
  // Service icons
  Shirt,
  Truck,
  Package,
  Weight,
  // Process icons
  Smartphone,
  Droplets,
  SmilePlus,
  // Story icons
  Heart,
  Leaf,
  // Stats icons
  Users,
  Scale,
  Calendar,
  // Trust icons
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  // FAQ icons
  HelpCircle,
  Plus,
  Minus,
  // Other icons
  Sparkles,
} from 'lucide-react';

// Central icon map - single source of truth for all icons
export const iconMap: Record<string, ComponentType<any>> = {
  // Contact icons
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Clock,
  // Social icons
  Instagram,
  Facebook,
  // Service icons
  Shirt,
  Truck,
  Package,
  Weight,
  // Process icons
  Smartphone,
  Droplets,
  SmilePlus,
  // Story icons
  Heart,
  Leaf,
  // Stats icons
  Users,
  Scale,
  Calendar,
  // Trust icons
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  // FAQ icons
  HelpCircle,
  Plus,
  Minus,
  // Other icons
  Sparkles,
};

/**
 * Get an icon component by name
 * @param iconName - Name of the icon (must match a key in iconMap)
 * @returns The icon component or null if not found
 */
export const getIcon = (iconName: string): ComponentType<any> | null => {
  return iconMap[iconName] || null;
};

/**
 * Check if an icon exists in the map
 * @param iconName - Name of the icon to check
 * @returns true if icon exists, false otherwise
 */
export const hasIcon = (iconName: string): boolean => {
  return iconName in iconMap;
};

