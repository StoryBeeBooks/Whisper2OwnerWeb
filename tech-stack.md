# K12Path Tech Stack & Constraints
## Technical Anchor Document for Consistent Development

---

## Table of Contents
1. [Overview](#overview)
2. [Core Framework](#core-framework)
3. [Styling & Animation](#styling--animation)
4. [3D Graphics](#3d-graphics)
5. [Authentication & Database](#authentication--database)
6. [Data Management](#data-management)
7. [UI Components](#ui-components)
8. [TypeScript Standards](#typescript-standards)
9. [Component Patterns](#component-patterns)
10. [File Structure](#file-structure)
11. [Prohibited Patterns](#prohibited-patterns)
12. [Version Reference](#version-reference)

---

## Overview

This document serves as the **technical anchor** for the K12Path project. It defines exact versions, allowed patterns, and strict constraints to ensure consistency across the codebase and prevent deprecated or incompatible code suggestions.

**Last Verified:** December 2024

---

## Core Framework

### Next.js 16 (App Router)

| Aspect | Specification |
|--------|---------------|
| Version | `^16.0.10` |
| Router | **App Router ONLY** |
| Rendering | Server Components by default, Client Components when needed |
| Language | TypeScript (strict mode) |

**✅ ALLOWED:**
```typescript
// App Router file-based routing
src/app/page.tsx          // Home page
src/app/dashboard/page.tsx // Dashboard page
src/app/layout.tsx        // Root layout

// Client Components (when interactivity needed)
'use client';

// Server Components (default, no directive needed)
export default function Page() { ... }

// Metadata export
export const metadata: Metadata = { ... }
```

**❌ PROHIBITED:**
```typescript
// Pages Router (DO NOT USE)
pages/index.tsx           // WRONG
pages/_app.tsx            // WRONG
pages/api/hello.ts        // WRONG (use src/app/api/ instead)

// getServerSideProps / getStaticProps (Pages Router patterns)
export async function getServerSideProps() { ... }  // WRONG
export async function getStaticProps() { ... }      // WRONG
```

### React 19

| Aspect | Specification |
|--------|---------------|
| Version | `^19.2.3` |
| Components | Functional components ONLY |
| State Management | React Context + hooks |

**✅ ALLOWED:**
```typescript
// Functional components
function MyComponent({ prop }: Props) { ... }
const MyComponent: React.FC<Props> = ({ prop }) => { ... }

// Hooks
useState, useEffect, useRef, useCallback, useMemo, useLayoutEffect
useContext (with custom contexts)

// React 19 features
use() hook for promises (in client components)
```

**❌ PROHIBITED:**
```typescript
// Class components
class MyComponent extends React.Component { ... }  // WRONG

// Legacy lifecycle methods
componentDidMount() { ... }  // WRONG
componentWillReceiveProps() { ... }  // WRONG
```

---

## Styling & Animation

### Tailwind CSS 3.4

| Aspect | Specification |
|--------|---------------|
| Version | `^3.4.14` |
| Config | `tailwind.config.ts` (TypeScript) |
| PostCSS | `^8.4.47` |

**✅ ALLOWED:**
```typescript
// Utility classes
className="flex items-center gap-4 p-6 bg-warm-white"

// Custom luxury theme classes (defined in tailwind.config.ts)
className="font-display text-luxury-black tracking-luxury"
className="shadow-luxury-elevated rounded-luxury"
className="bg-warm-card border-warm-sand"

// Responsive prefixes
className="md:flex lg:grid-cols-3"

// Arbitrary values (use sparingly)
className="w-[350px] top-[10%]"
```

**❌ PROHIBITED:**
```typescript
// Inline styles (except for dynamic values from JS)
style={{ color: 'red' }}  // WRONG for static styles

// CSS Modules
import styles from './Component.module.css'  // WRONG

// Styled-components or Emotion
styled.div`...`  // WRONG
```

### GSAP 3.14 (Animation Library)

| Aspect | Specification |
|--------|---------------|
| Version | `^3.14.2` |
| Plugins | ScrollTrigger (registered) |

**✅ ALLOWED:**
```typescript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin (client-side only)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Timeline animations
gsap.timeline()
  .to(element, { opacity: 1, duration: 0.3 })
  .to(element, { y: 0, ease: 'power2.out' });

// ScrollTrigger
gsap.to(element, {
  scrollTrigger: {
    trigger: element,
    start: 'top center',
    end: 'bottom center',
  },
  opacity: 1,
});
```

**❌ PROHIBITED:**
```typescript
// Framer Motion (DO NOT USE)
import { motion } from 'framer-motion';  // WRONG
<motion.div animate={{ ... }} />          // WRONG

// React Spring
import { useSpring } from 'react-spring';  // WRONG

// CSS animations for complex sequences
@keyframes complexAnimation { ... }  // Use GSAP instead
```

---

## 3D Graphics

### Three.js with React Three Fiber

| Library | Version |
|---------|---------|
| Three.js | `^0.182.0` |
| @react-three/fiber | `^9.4.2` |
| @react-three/drei | `^10.7.7` |

**✅ ALLOWED:**
```typescript
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { 
  Environment, 
  Html, 
  Cloud, 
  Sky, 
  useGLTF,
  Preload 
} from '@react-three/drei';
import * as THREE from 'three';

// Canvas setup
<Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
  <Suspense fallback={null}>
    <MyModel />
    <Environment preset="sunset" />
  </Suspense>
</Canvas>

// useFrame for animation loops
useFrame((state, delta) => {
  meshRef.current.rotation.y += delta;
});

// Modern Three.js geometry (r125+)
new THREE.BoxGeometry(1, 1, 1);
new THREE.SphereGeometry(1, 32, 32);

// GLB/GLTF loading with useGLTF
const { scene, nodes, materials } = useGLTF('/model.glb');

// Preloading assets
useGLTF.preload('/model.glb');
```

**❌ PROHIBITED:**
```typescript
// Deprecated geometry constructors (pre-r125)
new THREE.BoxBufferGeometry()    // WRONG - use BoxGeometry
new THREE.SphereBufferGeometry() // WRONG - use SphereGeometry
new THREE.Geometry()             // WRONG - removed in r125

// Deprecated Face3
new THREE.Face3()  // WRONG - removed

// Direct DOM manipulation for 3D
document.getElementById('canvas').appendChild(renderer.domElement)  // WRONG

// Legacy Three.js patterns
geometry.vertices  // WRONG - use BufferGeometry attributes
geometry.faces     // WRONG - removed
```

---

## Authentication & Database

### WorkOS AuthKit (Primary Authentication)

| Aspect | Specification |
|--------|---------------|
| Version | `@workos-inc/authkit-nextjs ^0.20.0` |
| Method | Google OAuth via WorkOS |
| Session | `workos_session` cookie (httpOnly, secure) |

**✅ ALLOWED:**
```typescript
// Server-side auth (in API routes or Server Components)
import { getUser } from '@workos-inc/authkit-nextjs';
const { user } = await getUser({ ensureSignedIn: true });

// Client-side auth check (via API route)
const res = await fetch('/api/auth/session');
const { user } = await res.json();

// Sign in/out
import { signIn, signOut, getSignInUrl, getSignOutUrl } from '@workos-inc/authkit-nextjs';
```

**❌ PROHIBITED:**
```typescript
// Old Supabase auth patterns (REMOVED)
supabase.auth.getSession()           // WRONG - use WorkOS
supabase.auth.signIn()               // WRONG - use WorkOS
supabase.auth.onAuthStateChange()    // WRONG - use WorkOS
```

### Supabase (Data Storage Only)

| Aspect | Specification |
|--------|---------------|
| Version | `@supabase/supabase-js ^2.89.0` |
| Usage | User Profiles, Subscriptions, XP Events (NOT authentication) |

**✅ ALLOWED:**
```typescript
import { createClient } from '@supabase/supabase-js';

// Lazy initialization pattern (see src/lib/supabase.ts)
export function getSupabase(): SupabaseClient { ... }

// Admin client for server-side operations (bypasses RLS)
import { createAdminClient } from '@/lib/supabase-admin';

// Environment variables
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY (server-side only)
WORKOS_CLIENT_ID
WORKOS_API_KEY
WORKOS_COOKIE_PASSWORD
```

### Auth Architecture Overview

```
User clicks "Sign In" → WorkOS (Google OAuth) → Cookie set
        ↓
Client fetches /api/auth/session → Gets user info + profile.id
        ↓
API routes use admin client → Query Supabase data by profile.id
        ↓
Subscriptions, XP, progress stored in Supabase
```

---

## Data Management

### JSON-Based Flat Files

| Aspect | Specification |
|--------|---------------|
| Location | `src/data/*.json` |
| Usage | Static content, app registry, translations |
| Search | Fuse.js for fuzzy search |

**✅ ALLOWED:**
```typescript
// Import JSON data
import appsRegistry from '@/data/apps-registry.json';
import landingContent from '@/data/landing-content.json';

// Fuse.js for search
import Fuse from 'fuse.js';
const fuse = new Fuse(items, {
  keys: ['name_zh', 'name_en', 'tags_zh', 'tags_en'],
  threshold: 0.3,
});
```

**❌ PROHIBITED:**
```typescript
// SQL queries in components
SELECT * FROM apps WHERE ...  // WRONG - no SQL database currently

// GraphQL
import { gql } from '@apollo/client';  // WRONG - not in stack
```

### XYFlow (React Flow)

| Aspect | Specification |
|--------|---------------|
| Version | `@xyflow/react ^12.10.0` |
| Layout | elkjs `^0.11.0` |
| Usage | Node graphs, flow diagrams |

**✅ ALLOWED:**
```typescript
import { ReactFlow, useNodesState, useEdgesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
```

---

## UI Components

### Headless UI

| Aspect | Specification |
|--------|---------------|
| Version | `@headlessui/react ^2.2.9` |
| Usage | Accessible, unstyled UI primitives |

**✅ ALLOWED:**
```typescript
import { Dialog, Menu, Transition, Listbox } from '@headlessui/react';
```

### Lucide React (Icons)

| Aspect | Specification |
|--------|---------------|
| Version | `lucide-react ^0.454.0` |
| Style | Outline/line icons (matches luxury design) |

**✅ ALLOWED:**
```typescript
import { Search, Menu, X, ChevronDown } from 'lucide-react';

<Search className="w-5 h-5 text-luxury-gray" />
```

**❌ PROHIBITED:**
```typescript
// Heroicons (not in stack)
import { SearchIcon } from '@heroicons/react/outline';  // WRONG

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // WRONG

// Filled icon styles (prefer outline per design.md)
```

---

## TypeScript Standards

### Configuration

| Setting | Value |
|---------|-------|
| Strict Mode | `true` |
| Target | `ES2017` |
| Module | `esnext` |
| Module Resolution | `bundler` |

### Interfaces vs Types

**✅ REQUIRED: Use `interface` for object shapes**
```typescript
// Object shapes - use interface
interface User {
  id: string;
  name: string;
  email: string;
}

interface AppData {
  id: string;
  name_zh: string;
  name_en: string;
  tags_zh: string[];
  tags_en: string[];
}

// Props - use interface
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}
```

**✅ ALLOWED: Use `type` for unions, primitives, utilities**
```typescript
// Union types
type Locale = 'en' | 'zh';
type ButtonVariant = 'primary' | 'secondary' | 'ghost';

// Utility types
type PartialUser = Partial<User>;
type UserKeys = keyof User;
```

**❌ PROHIBITED:**
```typescript
// Types for object shapes
type User = {  // WRONG - use interface
  id: string;
  name: string;
}

// any type (except when absolutely necessary)
const data: any = ...;  // WRONG - be explicit
```

### Path Aliases

```typescript
// Use @/ alias for src directory
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import type { User } from '@/types';
```

---

## Component Patterns

### File Naming

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `AuthModal.tsx`, `LanguageSwitcher.tsx` |
| Hooks | camelCase with `use` prefix | `useGraphLayout.ts` |
| Utilities | camelCase | `registry.ts`, `supabase.ts` |
| Types | PascalCase | `index.ts` (exports interfaces) |
| Pages | lowercase | `page.tsx`, `layout.tsx` |

### Component Structure

**✅ REQUIRED PATTERN:**
```typescript
'use client'; // Only if needed for interactivity

import React from 'react';
// External imports
import { gsap } from 'gsap';
// Internal imports
import { Button } from '@/components/ui/Button';
import type { User } from '@/types';

// Interface definition
interface MyComponentProps {
  title: string;
  user: User;
  onAction?: () => void;
}

// Functional component
export function MyComponent({ title, user, onAction }: MyComponentProps) {
  // Hooks at top
  const [state, setState] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  // Effects
  useEffect(() => {
    // Effect logic
  }, [dependency]);
  
  // Event handlers
  const handleClick = useCallback(() => {
    onAction?.();
  }, [onAction]);
  
  // Render
  return (
    <div ref={ref} className="...">
      {/* JSX */}
    </div>
  );
}
```

### Context Pattern

```typescript
// Create context with explicit type
interface AuthContextType {
  user: User | null;
  login: (credentials: Credentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook for consuming context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
```

---

## File Structure

```
k12path-landing/
├── public/
│   ├── images/
│   ├── sw.js
│   └── [static-apps]/        # Standalone HTML/JS apps
├── src/
│   ├── app/                  # App Router pages
│   │   ├── page.tsx          # Home
│   │   ├── layout.tsx        # Root layout
│   │   ├── globals.css       # Global styles
│   │   ├── api/              # API routes
│   │   ├── dashboard/        # Dashboard pages
│   │   └── [feature]/        # Feature pages
│   ├── components/
│   │   ├── ui/               # Reusable UI components
│   │   ├── layout/           # Layout components
│   │   ├── sections/         # Page sections
│   │   └── auth/             # Auth-related components
│   ├── context/              # React contexts
│   ├── data/                 # JSON data files
│   ├── hooks/                # Custom hooks
│   ├── lib/                  # Utility libraries
│   └── types/                # TypeScript types
├── supabase/
│   └── migrations/           # Database migrations
└── [config files]
```

---

## Prohibited Patterns

### Framework Anti-Patterns

| Pattern | Why Prohibited |
|---------|----------------|
| Pages Router | Project uses App Router exclusively |
| getServerSideProps / getStaticProps | App Router uses different data fetching |
| Class components | Functional components only |
| CSS Modules | Use Tailwind CSS |
| Framer Motion | Use GSAP for animations |

### Code Anti-Patterns

| Pattern | Why Prohibited |
|---------|----------------|
| `any` type | Defeats TypeScript benefits |
| `type` for objects | Use `interface` |
| Inline styles (static) | Use Tailwind classes |
| Direct DOM manipulation | Use React refs |
| `var` keyword | Use `const` / `let` |

### Three.js Anti-Patterns

| Pattern | Why Prohibited |
|---------|----------------|
| `BoxBufferGeometry` | Deprecated - use `BoxGeometry` |
| `SphereBufferGeometry` | Deprecated - use `SphereGeometry` |
| `Geometry` class | Removed in r125 |
| `Face3` | Removed - use BufferGeometry |
| `geometry.vertices` | Use BufferGeometry attributes |

---

## Version Reference

### Production Dependencies
```json
{
  "next": "^16.0.10",
  "react": "^19.2.3",
  "react-dom": "^19.2.3",
  "three": "^0.182.0",
  "@react-three/fiber": "^9.4.2",
  "@react-three/drei": "^10.7.7",
  "gsap": "^3.14.2",
  "@supabase/supabase-js": "^2.89.0",
  "next-auth": "^4.24.13",
  "@headlessui/react": "^2.2.9",
  "@xyflow/react": "^12.10.0",
  "@workos-inc/authkit-nextjs": "^0.20.0",
  "lucide-react": "^0.454.0",
  "fuse.js": "^7.1.0",
  "tailwindcss": "^3.4.14",
  "typescript": "^5.6.3"
}
```

### Development Dependencies
```json
{
  "@types/node": "^20.17.6",
  "@types/react": "^19.2.7",
  "@types/react-dom": "^19.2.3",
  "@types/three": "^0.182.0",
  "eslint": "^9.39.1",
  "eslint-config-next": "^16.0.10",
  "autoprefixer": "^10.4.20",
  "postcss": "^8.4.47"
}
```

---

## Quick Reference Card

### Before Writing Code, Verify:
- [ ] Using App Router patterns (not Pages Router)
- [ ] Component is functional (not class-based)
- [ ] Using `interface` for object shapes
- [ ] Animations use GSAP (not Framer Motion)
- [ ] Three.js uses modern geometry classes
- [ ] Styles use Tailwind classes (not inline/CSS modules)
- [ ] Icons from Lucide React (outline style)
- [ ] Path imports use `@/` alias

### Common Mistakes to Avoid:
1. Using `getServerSideProps` → Use Server Components or Route Handlers
2. Using `motion.div` → Use `gsap.to()` with refs
3. Using `BoxBufferGeometry` → Use `BoxGeometry`
4. Using `type MyProps = { }` → Use `interface MyProps { }`
5. Using `pages/` directory → Use `src/app/` directory

---

*This document should be updated when dependencies are upgraded or new patterns are established.*

*Last updated: January 2025*
*Version: 1.1 - Updated auth to WorkOS AuthKit*
