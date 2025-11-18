# Design System Documentation

## 📋 Содержание

1. [Основы](#основы)
2. [Цветовая палитра](#цветовая-палитра)
3. [Типографика](#типографика)
4. [Spacing & Layout](#spacing--layout)
5. [Компоненты](#компоненты)
6. [Паттерны](#паттерны)
7. [Состояния](#состояния)

---

## Основы

### Принципы дизайна
- **Консистентность**: Единообразие во всех элементах интерфейса
- **Читаемость**: Четкая иерархия и легкое восприятие информации
- **Эффективность**: Минимизация когнитивной нагрузки
- **Адаптивность**: Гибкость для различных типов данных

---

## Цветовая палитра

### Primary Colors
```css
--primary-primary02: /* Green accent - используется в трендах вверх */
```

### Semantic Colors
```css
/* Success / Trend Up */
--success-bg: rgba(22, 163, 74, 0.05);      /* green-600/5 */
--success-border: rgba(22, 163, 74, 0.20);  /* green-600/20 */
--success-text: var(--primary-primary02);

/* Error / Trend Down */
--error-bg: rgba(248, 113, 113, 0.05);      /* red-400/5 */
--error-border: rgba(248, 113, 113, 0.20);  /* red-400/20 */
--error-text: #f87171;                       /* red-400 */

/* Warning / Hot */
--warning-bg: rgba(234, 88, 12, 0.05);      /* orange-600/5 */
--warning-border: rgba(234, 88, 12, 0.20);  /* orange-600/20 */
--warning-text: #ea580c;                     /* orange-600 */
```

### Neutral Colors
```css
/* Text */
--text-primary: /* Основной текст */
--text-secondary: /* Вторичный текст */
--text-tertiary: /* Tertiary текст */
--text-light: /* Светлый текст (на темном фоне) */
--text-blue: /* Синий акцент для курсора */

/* Backgrounds */
--bg-surface1: /* Основной фон */
--bg-surface2: #FDFDFD;                     /* rgb(252, 252, 252) - Карточки */
--bg-surface3: /* с opacity-50 */
--bg-highlight: /* Hover состояния */
--bg-dark1: /* Темный фон для тултипов */
--bg-depth-2: /* Глубина для контейнеров */

/* Stroke / Borders */
--stroke-stroke2: /* Основные border */
--stroke-subtle: /* Тонкие разделители с opacity-10 */
--stroke-borderborder: /* Акцентные borders */

/* Shades */
--shade01-100: /* white - для иконок на цветном фоне */
--shade04-50: /* с opacity-50 - скелетоны */
--shade04-100: /* для dark mode OAuth button */
--shade05-30: /* с opacity-30 - icon background dark mode active */
--shade07-20: /* с opacity-20 - icon background light mode active */
--shade07-40: /* с opacity-40 - графики (Social media) */
--shade07-50: /* с opacity-50 - input borders default */
--shade07-60: /* с opacity-60 - графики (Direct) паттерн */
--shade08-80: /* с opacity-80 - активная кнопка тулбара */
--shade08-100: /* Градиентная часть графиков (Others) */
--shade09-100: /* Вторая часть градиента */

/* Chart Colors */
--chart-green: /* Активный бар в графике */

/* Gradients */
--gradient-purple: linear-gradient(to bottom, #d8b4fe, #d8b4fe);       /* purple-300 */
--gradient-orange: linear-gradient(to bottom, #fed7aa, #fdba74);       /* orange-200 → orange-300 */
--gradient-green: linear-gradient(to bottom, #d1fae5, #bbf7d0);        /* emerald-100 → green-200 */
--gradient-cyan: linear-gradient(to bottom, #cffafe, #a5f3fc);         /* cyan-100 → cyan-200 */
--gradient-blue: linear-gradient(to bottom, #2563eb, #1e40af);         /* blue-600 → blue-800 */
--gradient-zinc-dark: linear-gradient(to bottom, #27272a, #27272a);    /* zinc-800 - для dark button */
--gradient-white-light: linear-gradient(to bottom, #ffffff, #e5e5e5);  /* white → neutral-200 - для light button */

/* Secondary */
--secondary-secondary04: /* Для price badge */
```

### Brand Icon Colors
```css
/* Notion, Bootstrap, Wordpress, Swift */
--icon-black: /* Text-Primary */

/* After Effects */
--icon-ae-purple: #d8b4fe;                  /* purple-300 */
--icon-ae-dark: #0f172a;                    /* slate-900 */

/* Sketch */
--icon-sketch-amber-600: #d97706;
--icon-sketch-amber-500: #f59e0b;
--icon-sketch-amber-400: #fbbf24;
--icon-sketch-yellow: #fef3c7;              /* yellow-100 */

/* Figma */
--icon-figma-emerald: #10b981;              /* emerald-500 */
--icon-figma-purple: #a855f7;               /* purple-500 */
--icon-figma-orange: #ea580c;               /* orange-600 */
--icon-figma-red: #f87171;                  /* red-400 */
--icon-figma-cyan: #22d3ee;                 /* cyan-400 */

/* Photoshop */
--icon-ps-cyan: #22d3ee;                    /* cyan-400 */
--icon-ps-dark: #064e3b;                    /* emerald-950 */

/* Blender */
--icon-blender-orange: #f97316;             /* orange-500 */
--icon-blender-sky: #075985;                /* sky-800 */

/* HTML */
--icon-html-blue-600: #2563eb;
--icon-html-blue-800: #1e40af;
```

---

## Типографика

### Font Family
```css
--font-primary: 'Inter Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Font Sizes
```css
--font-size-xs: 12px;    /* Captions, labels */
--font-size-sm: 14px;    /* Body small, buttons */
--font-size-base: 16px;  /* Body */
--font-size-lg: 18px;    /* Subtitles */
--font-size-xl: 20px;    /* Card titles */
--font-size-2xl: 24px;   /* Section headers */
--font-size-3xl: 48px;   /* Large numbers (text-5xl) */
--font-size-4xl: 60px;   /* Hero numbers (text-6xl) */
```

### Font Weights
```css
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Line Heights
```css
--line-height-tight: 16px;      /* leading-4 */
--line-height-normal: 20px;     /* leading-5 */
--line-height-relaxed: 24px;    /* leading-6 */
--line-height-loose: 28px;      /* leading-7 */
--line-height-xl: 60px;         /* для text-5xl */
--line-height-2xl: 75px;        /* для text-6xl */
```

### Text Styles

#### Headings
- **H1 (Card Title)**: 20px / Semibold / Line height 28px
- **Body**: 16px / Semibold / Line height 24px
- **Body Small**: 14px / Regular or Semibold / Line height 20px or 16px
- **Caption**: 12px / Regular or Semibold / Line height 20px or 16px

#### Tracking
```css
letter-spacing: -0.02em; /* tracking-tight */
```

---

## Spacing & Layout

### Spacing Scale
```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
```

### Border Radius
```css
--radius-xs: 1px;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 20px;
--radius-3xl: 32px;
--radius-full: 48px;        /* для кнопок/инпутов */
--radius-pill: 90px;        /* для поисков/дропдаунов */
--radius-circle: 64px;      /* для аватаров */
--radius-avatar: 44px;      /* малые аватары */
--radius-round: 96px;       /* большие аватары */
```

### Shadows

#### Card Shadows (основные)
```css
--shadow-card-1: 0px 6px 4px -4px rgba(8, 8, 8, 0.05);
--shadow-card-2: 0px 5px 1.5px -4px rgba(8, 8, 8, 0.09);
/* Используются вместе */
```

#### KPI Card Shadows (многослойные)
```css
--shadow-kpi-1: 0px 5px 1.5px -4px rgba(8, 8, 8, 0.09);
--shadow-kpi-2: 0px 6px 4px -4px rgba(8, 8, 8, 0.05);
--shadow-kpi-3: 0px 6px 13px 0px rgba(8, 8, 8, 0.03);
--shadow-kpi-4: 0px 24px 24px -16px rgba(8, 8, 8, 0.04);
--shadow-kpi-5: 0px 2.15px 0.5px -2px rgba(0, 0, 0, 0.25);
--shadow-kpi-6: 0px 0px 36px -8px rgba(0, 0, 0, 0.05);
```

#### Hover Shadows
```css
--shadow-hover-1: 0px 1px 4px 0px rgba(0, 0, 0, 0.05);
--shadow-hover-2: 0px 8px 8px -2px rgba(0, 0, 0, 0.08);
--shadow-hover-inset: inset 0px 0px 0px 3px rgba(255, 255, 255, 1.00);
```

#### Button Gradient Shadow
```css
--shadow-gradient-button: inset 2px 0px 8px 2px rgba(248, 248, 248, 0.20);
```

### Borders

#### Border Width
```css
--border-width-thin: 1px;
--border-width-medium: 1.5px;
--border-width-thick: 2px;
--border-width-avatar: 3px;
```

#### Border Offset
```css
--border-offset-default: -1.50px;  /* для outline */
--border-offset-tight: -0.75px;
--border-offset-icon: -0.75px;
--border-offset-small: -0.38px;
--border-offset-half: -0.50px;
```

### Opacity Scale
```css
--opacity-10: 0.1;
--opacity-20: 0.2;
--opacity-40: 0.4;
--opacity-50: 0.5;
--opacity-60: 0.6;
--opacity-80: 0.8;
```

---

## Компоненты

### 1. Cards

#### Basic Card
- **Padding**: 12px
- **Border Radius**: 32px
- **Background**: #FDFDFD (Backgrounds-surface2)
- **Shadow**: --shadow-card-1 + --shadow-card-2
- **Border**: 1.5px outline, offset -1.5px
- **Sizes**:
  - Small: 384px (w-96)
  - Medium: 728px
  - Large: 800px
  - Extra Large: 1180px

#### Card Header
- **Height**: 48px
- **Padding**: 12px (y), 20px (x) для title
- **Title**: 20px semibold, leading-28px
- **Gap**: 8px

#### Feature Card (Horizontal Scroll)
- **Width**: 208px (w-52)
- **Padding**: 20px
- **Radius**: 32px
- **Background**: Backgrounds-highlight
- **Border**: 1.5px, Stroke-Subtle/10
- **Icon Container**: 64×64px, radius 32px, gradient background
- **Gap**: 80px между иконкой и контентом

#### KPI Card (Large)
- **Padding**: 48px (x), 32px (y)
- **Active State**:
  - Background: surface2
  - 6 shadow layers
  - Border: Stroke-BorderBorder
- **Value**: 60px (text-6xl), medium weight, 75px line-height
- **Icon**: 24×24px
- **Label**: 16px semibold

---

### 2. Buttons

#### Icon Button (Round)
- **Size**: 48×48px
- **Radius**: 90px
- **States**:
  - Default: transparent
  - Active: border 1.5px Stroke-Stroke2

#### Icon Button (Dark Gradient)
- **Size**: 48×48px
- **Radius**: 32px
- **Background**: linear-gradient zinc-800
- **Shadow**: inset 2px 0 8px 2px rgba(248,248,248,0.2)
- **Border**: white/40, 1.5px
- **Icon**: 24×24px, Text-Light

#### Chip/Tag Button
- **Min-width**: 208px (flex-1)
- **Padding**: 12px
- **Radius**: 48px
- **Border**: 1.5px Stroke-Stroke2
- **Icon**: 24×24px (20px внутренний)
- **Font**: 14px semibold
- **Layout**: center aligned

#### Send Button (Message Input)
- **Height**: 44px (h-11)
- **Padding**: 28px (x), 16px (y)
- **Radius**: 32px
- **Font**: 14px semibold, Text-Light
- **Variants**:
  - **Dark (Light Mode: True)**:
    - Gradient: zinc-800 → zinc-800
    - Shadow: inset 2px 0px 8px 2px rgba(248, 248, 248, 0.20)
    - Border: white/40, 1.5px
  - **Light (Light Mode: False / Dark theme)**:
    - Gradient: white → neutral-200
    - Shadow: inset 2px 0px 8px 2px rgba(24, 24, 24, 0.20)
    - Border: white/60, 1.5px

#### OAuth Button (Sign in with Google)
- **Height**: 48px
- **Padding**: 28px (x), 14px (y)
- **Radius**: 90px
- **Font**: 14px semibold
- **Icon**: Google logo (24×24px, 20px inner)
- **Gap**: 16px между иконкой и текстом
- **Layout**: center aligned
- **States**:
  - **Default (Light Mode)**:
    - Background: Backgrounds-surface1
    - Text: Text-Secondary
    - Border: none
  - **Hover (Light Mode)**:
    - Background: Backgrounds-surface1
    - Shadows: 5 layers
      - 0px 1px 4px 0px rgba(0, 0, 0, 0.05)
      - 0px 8px 8px -2px rgba(0, 0, 0, 0.08)
      - inset 0px 0px 0px 3px rgba(255, 255, 255, 1.00)
    - Border: 1.5px zinc-100
    - Backdrop blur: 32px
  - **Active/Pressed (Light Mode)**:
    - Background: Backgrounds-surface1
    - Shadows: 6 layers
      - 0px 0.5px 1px 0px rgba(0, 0, 0, 0.05)
      - 0px 2px 2px -0.5px rgba(0, 0, 0, 0.08)
      - inset 0px 0px 0px 1.5px rgba(255, 255, 255, 1.00)
      - 0px 0px 8px 2px rgba(8, 8, 8, 0.03)
      - 0px 0px 16px 0px rgba(0, 0, 0, 0.05)
      - inset 2px 0px 8px 2px rgba(248, 248, 248, 0.20)
    - Border: 1.5px zinc-100
  - **Dark Mode**:
    - Background: shade04-100
    - Text: Text-Light
    - No shadows

---

### 3. Inputs

#### Text Input
- **Height**: 48px
- **Padding**: 20px (x), 12px (y)
- **Radius**: 48px
- **Border**: 1.5px Stroke-Stroke2
- **Placeholder**: opacity-50, Text-Secondary, 14px

#### Search Input
- **Width**: 288px (collapsed), 360px (expanded)
- **Height**: 48px
- **Padding**: 12px (left), 20px (right)
- **Radius**: 90px
- **Background**: surface1
- **Icon**: 24×24px (left)
- **Font**: 14px

#### Select Dropdown
- **Height**: 48px
- **Padding**: 20px (left), 12px (right)
- **Radius**: 90px
- **Border**: 1.5px Stroke-Stroke2
- **Chevron**: 24×24px (right)
- **Font**: 14px Text-Secondary

#### Textarea / Rich Text Editor
- **Height**: 160px (h-40)
- **Radius**: 16px
- **Border**: 1.5px Stroke-Stroke2
- **Toolbar**:
  - Background: surface3/50
  - Border-bottom: 1.5px Stroke-Subtle/10
  - Buttons: 40×40px, radius 12px
  - Active button: shade08-80/80
- **Resize Handle**: 6px + 10px dots, gray-500/40

#### Tags Input (Multi-chip)
- **Radius**: 32px
- **Padding**: 10px
- **Border**: 1.5px Stroke-Stroke2
- **Min-height**: 28px

#### Checkbox
- **Size**: 24×24px
- **Border**: 2px Stroke-Stroke2
- **Radius**: 6px (rounded-md)

#### Message Input (Compose)
- **Width**: 1020px или full-width
- **Padding**: 4px
- **Radius**: 80px (rounded-[80px])
- **Background**: Backgrounds-surface2
- **Border**: 1px outline Stroke-Stroke2, offset -1px
- **Layout**: space-between
- **Left Side**:
  - Avatar icon: 44×44px, rounded-90px, icon 24×24px Text-Secondary
  - Username: 14px normal, line-clamp-3, Text-Primary
  - Cursor: 2px × 16px, Text-Blue, rounded-sm
- **Right Side**: Send button (44px height)

#### Input Field States (Auth Forms)
- **Height**: 48px
- **Padding**: 20px (x), 12px (y)
- **Radius**: 48px
- **Font**: 14px
- **States**:
  - **Default**:
    - Border: 1.5px Stroke-BorderBorder
    - Placeholder: Text-Secondary/50
  - **Default (Alt variant)**:
    - Border: 1.5px shade07-50/50
  - **Focus**:
    - Border: 1.5px Text-Blue
    - Cursor: 2px × 16px, Text-Blue, rounded-sm
    - Input text: Text-Primary
  - **Filled**:
    - Border: 1.5px Stroke-BorderBorder
    - Text: Text-Primary
    - Checkmark icon: 24×24px (20px inner), Primary-primary02, right side
  - **Error**:
    - Border: 1.5px Primary-primary03
    - Text: Text-Primary
    - Error icon (X): 24×24px, Primary-primary03, right side

#### Floating Label Input
- **Label**:
  - Position: absolute top-left, 20px from left, 16px from top
  - Font: 12px
  - Color: Text-Tertiary
  - Background: surface behind label (для четкости)
- **Input**: стандартные параметры 48px height
- **State**: Label "floats" вверх при focus/filled

#### Password Input
- **Height**: 48px
- **Padding**: 20px (x), 12px (y)
- **Radius**: 48px
- **Dots**:
  - Size: 6×6px
  - Rounded: full
  - Color: Text-Primary
  - Gap: 4px между dots
- **Eye icon**: 24×24px, right side, Text-Secondary (toggle visibility)

---

### 4. Badges & Tags

#### Trend Badge
- **Padding**: 8px (x), 6px (y)
- **Radius**: 8px (rounded-lg)
- **Icon**: 16×16px
- **Font**: 14px semibold
- **Variants**:
  - **Up**: green-600/5 bg, green-600/20 border, Primary-primary02 text
  - **Down**: red-400/5 bg, red-400/20 border, red-400 text
- **Large variant**: 16px font (base size)

#### Status Badge (Small)
- **Height**: 20px
- **Padding**: 8px (x)
- **Radius**: 4px
- **Font**: 12px
- **Variants**:
  - **New**: green-600/5 bg, green-600/20 border
  - **Hot**: orange-600/5 bg, orange-600/20 border

#### Price Badge
- **Padding**: 12px (x), 6px (y)
- **Radius**: 12px
- **Background**: Secondary-secondary04
- **Text**: shade01-100, 14px semibold

#### Unread Indicator
- **Size**: 12×12px
- **Rounded**: full
- **Color**: Primary-primary02

---

### 5. Forms

#### Form Label
- **Font**: 14px semibold
- **Gap**: 6px с info icon
- **Info Icon**: 16×16px, opacity-50, Text-Tertiary

#### Form Layout
- **Label → Input gap**: 16px
- **Form groups gap**: 32px

#### File Upload Zone
- **Height**: 240px (h-60)
- **Padding**: 32px (x), 64px (y)
- **Radius**: 32px
- **Background**: surface3/50
- **Icon**: 32×32px, Text-Secondary
- **Text**: 14px, "Browse" - bold, остальное - normal

#### Auth Form Card
- **Width**: 480px
- **Padding**: 64px
- **Radius**: 32px
- **Background**: Backgrounds-surface2
- **Shadow**: --shadow-card-1 + --shadow-card-2
- **Border**: 1.5px outline
- **Structure**:
  - Form Title: 24px (text-2xl) medium, leading-36px, Text-Primary
  - Form Fields: gap 32px
  - OAuth Section: 32px gap from fields
  - Footer Text: 32px gap from OAuth

#### Auth Form Footer
- **Layout**: horizontal, center aligned
- **Text**: 14px normal, Text-Secondary
- **Link**: 14px semibold, Text-Primary, underline on hover
- **Variants**:
  - Sign in: "Need an account?" → "Sign up"
  - Sign up: "Already have an account?" → "Sign in"
- **Gap**: 8px между текстом и ссылкой

#### "Forgot password" Link
- **Font**: 14px semibold
- **Color**: Text-Primary
- **Position**: right aligned под password input
- **Hover**: underline

---

### 6. Tables

#### Data Table
- **Row Padding**: 16px
- **Row Border**: 1.5px Stroke-Subtle/10 (bottom)
- **Header**:
  - Padding: 16px
  - Font: 12px, opacity-80, Text-Tertiary
  - Border-bottom: 1.5px
- **Cell Font**: 14px Text-Primary
- **Checkbox**: 24×24px, border-2

#### Table Row States
- **Default**: transparent
- **Hover**:
  - Background: Backgrounds-highlight
  - Radius: 16px
  - Shadow: 3 layers
  - Border: zinc-100, 1.5px
  - Action buttons появляются

#### Product Cell
- **Image**: 64×64px, rounded-xl
- **Title**: 16px semibold, line-clamp-1
- **Subtitle**: 14px Text-Secondary

#### Progress Bar (stacked)
- **Height**: 12px (h-3)
- **Radius**: 1px (rounded-[1px])
- **Gap**: 2px (0.5)
- **Colors**:
  - shade07-40/40 (Social media)
  - shade07-60/60 pattern (Direct - вертикальные линии 2px)
  - shade08-100 → shade09-100 gradient (Others)
  - Chart-Green (активный)

---

### 7. Navigation

#### Tab Filter
- **Height**: 48px
- **Padding**: 24px (x), 12px (y)
- **Radius**: 48px
- **Font**: 14px semibold
- **States**:
  - Default: transparent, Text-Secondary
  - Active: border 1.5px Stroke-Stroke2, Text-Primary
- **Gap**: 4px между табами

---

### 8. Charts

#### Bar Chart
- **Bar Width**: 48px
- **Bar Radius**: 8-10px (rounded-lg)
- **Bar Gap**: 20px
- **Colors**:
  - Default: shade07-40/40
  - Pattern: shade08-100 с diagonal overlay
  - Active: Chart-Green
- **Label**: 12px Text-Tertiary, centered below

#### Diagonal Pattern (для столбцов)
- **Opacity**: 10%
- **Rotation**: -45deg
- **Grid**: 96×96px squares, 1px outline
- **Gap**: 3px

#### Chart Data Point
- **Dot Size**: 12×12px
- **Background**: surface2
- **Border**: 3px Chart-Green
- **Rounded**: full

#### Chart Tooltip
- **Background**: Backgrounds-dark1
- **Padding**: 8px (x), 6px (y)
- **Radius**: 6px
- **Font**: 12px semibold, Text-Light
- **Arrow**: 8×4px triangle

---

### 9. Avatars

#### Sizes
- **Extra Large**: 64×64px, rounded-96px
- **Large**: 48×48px, rounded-64px
- **Medium**: 32×32px, rounded-44px
- **Small**: 20×20px, rounded-96px

#### "View All" Avatar
- **Size**: 64×64px
- **Background**: surface2
- **Border**: 1.5px Stroke-Stroke2
- **Icon**: 24×24px arrow

#### Avatar with Online Status
- **Avatar**: 44×44px, rounded-44px
- **Background**: Backgrounds-surface1
- **Online Indicator**:
  - Size: 12×12px, rounded-full
  - Position: bottom-right (31px, 31px from top-left)
  - Color: Primary-primary02
  - Border: 2px Backgrounds-surface2 (для контраста)

---

### 10. List Items

#### User List Item
- **Height**: 64px
- **Padding**: 12px
- **Radius**: 16px (rounded-2xl)
- **Gap**: 16px
- **Layout**:
  - Avatar: 44×44px with online indicator
  - Username: 14px semibold, line-clamp-1, Text-Primary
  - Email/Subtitle: 12px, line-clamp-1, Text-Secondary

#### Settings List Item
- **Height**: 64px
- **Padding**: 12px
- **Radius**: 16px (rounded-2xl)
- **Gap**: 16px
- **Icon Container**: 44×44px, rounded-44px
- **States**:
  - **Default**: Backgrounds-surface1 bg, Text-Secondary icon
  - **Hover (Light Mode)**: Backgrounds-highlight bg
  - **Hover (Dark Mode)**: Backgrounds-highlight bg
  - **Active (Light Mode)**:
    - Background: shade07-20/20
    - Icon: Text-Primary
    - Shadow: 3 layers + inset
    - Border: zinc-100, 1px
  - **Active (Dark Mode)**:
    - Background: shade05-30/30
    - Icon: Text-Primary
    - Border: zinc-100, 1px
    - NO shadows
- **Text**:
  - Title: 14px semibold, line-clamp-1, Text-Primary
  - Description: 12px, line-clamp-1, Text-Secondary

---

### 11. Messages / Notifications

#### Message List
- **Width**: 384px
- **Gap between items**: 4px (gap-1)

#### Message Item
- **Height**: 64px (h-16) or auto with padding
- **Padding**: 12px
- **Gap**: 20px (avatar to content)
- **Avatar**: 48×48px, rounded-64px
- **States**:
  - **Default**: transparent
  - **Hover (Light Mode)**:
    - Background: Backgrounds-highlight
    - Radius: 20px
    - Shadow: 3 layers + inset
    - Border: zinc-100, 1.5px
  - **Hover (Dark Mode)**:
    - Background: Backgrounds-highlight
    - Radius: 20px
    - Border: zinc-100, 1.5px
    - **NO shadows** (отличие от light mode)

#### Message Content
- **Username**: 16px semibold, line-clamp-1, Text-Primary
- **Time**: 12px Text-Tertiary
- **Preview**: 14px Text-Secondary, line-clamp-1
- **Unread Dot**:
  - Size: 12×12px, rounded-full
  - **Unread**: Primary-primary02, full opacity
  - **Read**: Text-Tertiary, opacity-50

---

### 12. Panels & Cards

#### Settings Panel
- **Width**: 384px
- **Padding**: 12px
- **Radius**: 32px
- **Background**: Backgrounds-surface2
- **Shadow**: --shadow-card-1 + --shadow-card-2
- **Border**: 1.5px outline
- **Structure**:
  - Search input (top): 12px gap
  - List items: no gap между ними
- **Search Input Variants**:
  - **Light Mode**: no border
  - **Dark Mode**: border 1.5px Stroke-Subtle

---

### 13. Accordion / FAQ

#### Accordion Item
- **Padding**: 32px (y)
- **Border**: 1.5px Stroke-Subtle/10 (bottom)
- **Gap**: 20px (между header и content)
- **Header**:
  - Layout: space-between
  - Title: 20px semibold, leading-28px, Text-Primary
  - Icon: 24×24px, Text-Secondary
    - Collapsed: Plus (cross)
    - Expanded: Minus (horizontal line)
- **Content** (когда expanded):
  - Text: 16px normal, leading-24px, Text-Primary

---

### 14. Loading States

#### Skeleton
- **Avatar**: 48×48px circle, shade08-100 / shade04-50/50
- **Lines**:
  - Short: 96px × 8px
  - Long: 208px × 8px
- **Radius**: 2px (rounded-sm)

#### Shimmer Effect
- **Colors**: shade08-100 или shade04-50/50
- **Animation**: 1.5s duration

---

### 15. Empty States

#### Empty State (No Results)
- **Container**: centered, vertical layout
- **Title**: 24px (text-2xl) medium, leading-36px (leading-9), Text-Primary, line-clamp-1
- **Button**:
  - Height: 48px
  - Padding: 28px (x), 14px (y)
  - Radius: 32px
  - Border: 1.5px Stroke-Stroke2
  - Text: 14px semibold, Text-Secondary, center aligned
- **Gap**: 24px между элементами

---

### 16. Special Effects

#### Fade Overlay (для горизонтального скролла)
- **Width**: 112px (w-28)
- **Height**: full container
- **Position**: absolute right
- **Gradient**: white → white/0 (left to right)

#### Hover Card Shadow (Messages, Table rows)
```css
box-shadow:
  0px 1px 4px 0px rgba(0, 0, 0, 0.05),
  0px 8px 8px -2px rgba(0, 0, 0, 0.08),
  inset 0px 0px 0px 3px rgba(255, 255, 255, 1.00);
outline: 1.5px solid #f4f4f5; /* zinc-100 */
```

#### Depth Container
- **Background**: Backgrounds-Depth-2
- **Padding**: 8px
- **Radius**: 32px
- **Border**: 1.5px Stroke-Subtle/10, offset -0.75px

---

## Паттерны

### Dashboard Layouts

#### Card Grid
- **3 columns** на desktop
- **Gap**: 16px
- **Container padding**: 12px

#### KPI Row (Depth Container)
- 2 KPI cards side by side
- Active card: elevated с тенями
- Inactive card: flat, no background

---

### Form Patterns

#### Editable List (Highlights)
- **List Item**:
  - Padding: 12px
  - Radius: 48px
  - Border: 1.5px
  - Plus icon (left) + Drag handle (right): opacity-50
  - Placeholder: opacity-50, 14px
- **Gap**: 12px между items

#### Compatibility Grid
- **Min-width**: 208px per item
- **Flex-wrap**: 3 columns
- **Gap**: 12px
- **Icon + Text**: center aligned

---

### Data Visualization

#### Comparison Pattern (большая цифра)
- **Symbol**: 48px (text-5xl) Tertiary + **Value**: 60px (text-6xl) Primary
- **Trend Badge**: large 16px font
- **Comparison text**: 12px Text-Tertiary

#### Horizontal Carousel
- **Container**: overflow-x hidden
- **Item width**: 208px
- **Gap**: 16px
- **Fade overlay**: right side 112px
- **Arrow navigation**: 48×48px buttons

---

## Состояния

### Interactive States

#### Default
- Transparent or base color
- No shadows

#### Hover
- Background: Backgrounds-highlight
- Border: zinc-100
- Multiple shadows

#### Active/Focus
- Border: 1.5px primary color
- Background highlight

#### Disabled
- Opacity: 0.5
- Cursor: not-allowed

---

## Иконки

### Icon System
- **Sizes**: 16px, 20px, 24px, 32px
- **Stroke Width**: 1.5px (default), 0.75px (small)
- **Style**: Outline

### Common Icons
- Search: magnifying glass
- Chevron: down/right arrows
- Edit: pen
- Delete: trash
- Close: X
- Drag: horizontal lines
- Trend: arrows up/down
- Plus: circle with +

---

## Размеры компонентов (Reference)

| Компонент | Размер |
|-----------|--------|
| Card (small) | 384px |
| Card (medium) | 728px |
| Card (large) | 800px |
| Card (XL) | 1180px |
| Button (icon) | 48×48px |
| Input (height) | 48px |
| Search (width) | 288-360px |
| Chip (min-width) | 208px |
| Avatar (XL) | 64×64px |
| Avatar (L) | 48×48px |
| Avatar (M) | 32×32px |
| Avatar (S) | 20×20px |
| Icon (default) | 24×24px |
| Badge (height) | 20px |
| Trend badge | auto |
| Checkbox | 24×24px |
| Unread dot | 12×12px |
| Online indicator | 12×12px |
| Avatar (w/ status) | 44×44px |
| Settings icon | 44×44px |
| List item (height) | 64px |
| Settings panel | 384px |

---

### 17. Transaction/Order List Items

#### Transaction Row (Full Layout - 1528px)
- **Padding**: 16px (p-4)
- **Radius**: 16px (rounded-2xl)
- **Gap**: 24px (gap-6) between sections
- **Layout**: checkbox + product info + status + price + datetime + user

#### Transaction Row (Medium Layout - 884px)
- **Padding**: 16px (p-4)
- **Radius**: 16px (rounded-2xl)
- **Gap**: 24px (gap-6)
- **Layout**: checkbox + product info + status + price + user (no datetime)

#### Transaction Row (Compact Layout - 628px)
- **Padding**: 16px (p-4)
- **Radius**: 16px (rounded-2xl)
- **Gap**: 24px (gap-6)
- **Layout**: checkbox + product info + status + price (no user, no datetime)

#### Transaction Row (Minimal Layout - 320px)
- **Padding**: 12px (p-3)
- **Radius**: 16px (rounded-2xl)
- **Gap**: 24px (gap-6)
- **Layout**: product info + action tags only (no checkbox, status, price)

#### Product Section (Left Side)
- **Width**: 576px (full), 384px (medium/compact/minimal)
- **Gap**: 20px (gap-5) between elements
- **Layout**:
  - Checkbox: 24×24px
  - Product Image: 64×64px, rounded-xl
  - Product Info: flex-1
    - **Title**: 16px semibold, leading-24px, Text-Primary, line-clamp-1
    - **Subtitle**: 14px normal, leading-20px, Text-Secondary (when no action tags)
    - **Action Tags**: horizontal list, gap-8px (when no subtitle)

#### Action Tags (Chip Buttons)
- **Padding**: pl-1 pr-1.5 py-1 (4px left, 6px right, 4px vertical)
- **Radius**: 6px (rounded-md)
- **Font**: 14px semibold
- **Icon**: 16×16px container (12px inner icon)
- **Gap**: 8px between tags, 4px icon-to-text
- **States**:
  - **Default**:
    - Background: transparent
    - Text: Text-Secondary, opacity-80
    - Icon: Text-Secondary
    - No border
  - **Hover/Active**:
    - Border: 1.5px outline, offset -1.5px, Stroke-Stroke2
    - Text: Text-Primary, opacity-80
    - Icon: Text-Primary
- **Layout**: inline-flex, left-4px offset (-4px relative positioning)

#### Data Section (Right Side)
- **Layout**: flex-1, space-between, py-2 (8px vertical)
- **Gap**: varies by layout
- **Elements**:
  - **Status Badge**: w-28 (112px)
  - **Price**: w-20 (80px), 14px normal, Text-Primary
  - **Datetime**: w-28 (112px), 14px normal, Text-Primary
  - **User Info**: w-64 (256px), gap-12px
    - Avatar: 36×36px, rounded-[64px]
    - Name: w-28 (112px), 14px normal, Text-Primary, line-clamp-1

#### Row States

##### Selected/Hover (Light Mode)
```css
background: Backgrounds-highlight;
border-radius: 16px;
box-shadow:
  0px 1px 4px 0px rgba(0, 0, 0, 0.05),
  0px 8px 8px -2px rgba(0, 0, 0, 0.08),
  inset 0px 0px 0px 3px rgba(255, 255, 255, 1.00);
outline: 1.5px solid #f4f4f5; /* zinc-100 */
outline-offset: -1.5px;
```

##### Default (with border variant)
```css
box-shadow:
  0px 1px 4px 0px rgba(0, 0, 0, 0.05),
  0px 8px 8px -2px rgba(0, 0, 0, 0.08),
  inset 0px 0px 0px 3px rgba(255, 255, 255, 1.00);
border-bottom: 1.5px solid Stroke-Subtle/10; /* or Stroke-Subtle for stronger */
```

##### No Hover (Basic)
```css
background: Backgrounds-highlight (когда не в hover);
outline: 1.5px solid #f4f4f5; /* zinc-100 */
outline-offset: -1.5px;
/* NO shadows */
```

#### Checkbox States (Transaction Row)
- **Size**: 24×24px
- **Radius**: 6px (rounded-md)
- **States**:
  - **Placeholder (Default)**:
    - Border: 2px Stroke-Stroke2
    - Background: transparent
  - **Placeholder (Hover Row)**:
    - Border: 2px Stroke-Highlight/50
    - Background: transparent

#### Loading State (Skeleton)
- **Checkbox**: 24×24px, rounded-md
  - Light mode: opacity-80, shade09-100
  - Dark mode: opacity-80, shade04-100
- **Image**: 64×64px, rounded-xl
  - Light mode: shade09-100
  - Dark mode: shade04-100
- **Text Lines**:
  - Short: w-24 (96px), h-2 (8px), rounded
  - Long: w-40 (160px), h-2 (8px), rounded
  - Color: shade09-100 (light) / shade04-100 (dark)
- **Avatar**: 36×36px, rounded-[64px]
  - Color: shade09-100 (light) / shade04-100 (dark)
- **Price/Status/User**: w-12 to w-28, h-2, rounded
  - Color: shade09-100 (light) / shade04-100 (dark)

---

### 18. Date & Time Pickers

#### Calendar / Date Picker
- **Width**: 320px (w-80)
- **Padding**: 16px (p-4)
- **Radius**: 32px
- **Background**: Backgrounds-surface1
- **Shadow**: 5-layer KPI shadows
- **Outline**: 1.5px white, offset -1.5px
- **Backdrop-blur**: 32px
- **Gap**: 8px (gap-2) between header and calendar grid

#### Calendar Header
- **Height**: 48px
- **Layout**: space-between
- **Navigation Buttons**:
  - Size: 48×48px
  - Radius: 90px (rounded-[90px])
  - Icon: 24×24px arrows
  - **States**:
    - **Prev (default)**: no border, Text-Secondary icon
    - **Next (active)**: outline 1.5px Stroke-Stroke2, Text-Primary icon
- **Month/Year Label**: 16px semibold, Text-Primary, centered

#### Week Days Row
- **Cell Size**: 44×44px (w-11 h-11)
- **Padding**: 8px (p-2)
- **Radius**: 40px (rounded-[40px])
- **Text**: 12px normal, opacity-50, Text-Secondary
- **Labels**: Su, Mo, Tu, We, Th, Fr, Sa
- **Layout**: 7 columns

#### Day Cells
- **Size**: 44×44px (w-11 h-11)
- **Padding**: 10px (p-2.5)
- **Radius**: 40px (rounded-[40px])
- **Text**: 14px normal, centered
- **Layout**: 7×5 grid (35 cells total)

##### Day Cell States
- **Week day label**: opacity-50, Text-Secondary, 12px
- **Disabled (previous/next month)**: opacity-50, Text-Secondary
- **Hidden disabled** (for grid alignment): opacity-0
- **Default (current month)**: Text-Primary
- **Today**:
  - Background: Backgrounds-dark1
  - Text: Text-Light
  - Radius: 40px
- **Hover**:
  - Outline: 1.5px Backgrounds-dark1, offset -1.5px
  - Text: Text-Primary

#### Time Picker
- **Width**: 288px (w-72)
- **Height**: 384px (h-96)
- **Padding**: 16px (p-4)
- **Card styles**: same as Calendar (5-layer shadows, outline, backdrop-blur)

#### Time Picker Header
- **Height**: 48px (h-12)
- **Layout**: space-between
- **Left side**:
  - Clock icon: 24×24px, Text-Primary
  - Selected time: 16px semibold, Text-Primary
  - Gap: 12px
- **Right side**: Close button (optional, can be opacity-0)

#### Time List
- **Item Height**: auto (p-3)
- **Padding**: 12px (p-3)
- **Gap**: 12px between icon and text
- **Text**: 14px normal
- **Checkmark Icon**: 24×24px container (14px inner), Text-Primary
- **Layout**: vertical list, scrollable

##### Time Item States
- **Default**:
  - Text: Text-Secondary
  - No icon (opacity-0)
  - No background
- **Selected**:
  - Text: Text-Primary
  - Checkmark icon visible (not opacity-0)
  - No background
- **Hover (Light Mode)**:
  - Background: shade04-100
  - Radius: 12px (rounded-xl)
  - Text: Text-Primary
- **Hover (Dark Mode)**:
  - Background: shade08-70/70
  - Radius: 12px (rounded-xl)
  - Text: Text-Primary

---

### 19. Modal Dialog - Reschedule

#### Modal Container
- **Widths**: 320px (compact) or 480px (standard)
- **Padding**: 12px (p-3)
- **Card styles**: 5-layer KPI shadows, backdrop-blur 32px

#### Product Info Header Card
- **Padding**: 16px (p-4)
- **Background**: Backgrounds-surface2
- **Radius**: 20px (rounded-[20px])
- **Outline**: 1.5px Stroke-Subtle/10 or Stroke-Subtle (stronger variant)
- **Layout**: horizontal, gap-20px (gap-5)
- **Elements**:
  - **Product Image**: 64×64px, rounded-xl
  - **Product Info**: flex-1
    - **Title Row**: space-between layout
      - Title: 18px (text-lg) medium, Text-Primary, line-clamp-1
      - Price Badge: 64px width (w-16), can be opacity-0 to hide
    - **Subtitle**: 14px normal, opacity-80, Text-Secondary

#### Modal Content Section
- **Padding**: 12px (p-3) compact or 20px (p-5) standard
- **Gap**: 16px or 32px (gap-4 or gap-8) between sections
- **Layout**: vertical flex column

#### Modal Title & Description
- **Title**:
  - Font: 30px (text-3xl) semibold
  - Line-height: 40px (leading-10)
  - Color: Text-Primary
- **Description**:
  - Font: 16px normal
  - Line-height: 24px
  - Color: Text-Tertiary

#### Modal Input Layout
- **Vertical (full width)**: each input takes full width, gap-12px
- **Horizontal (2 columns)**: flex-1 inputs, gap-12px (gap-3)
- Uses Floating Label Inputs (Date/Time fields)

#### Modal Action Buttons
- **Layout**: inline-flex, justify-end, gap-12px (gap-3)
- **Cancel Button**:
  - Height: 48px (h-12)
  - Padding: 28px (x), 14px (y)
  - Radius: 32px
  - Outline: 1.5px Stroke-Stroke2
  - Text: 14px semibold, Text-Secondary, centered
  - Full-width on compact (flex-1)
- **Primary Button** (Reschedule/Create):
  - Padding: 28px (x), 16px (y)
  - Same gradient button styles as Send button
  - Text: 14px semibold, Text-Light
  - Full-width on compact (flex-1)

---

### 20. Modal Overlays & Backdrops

#### Light Mode Overlay
- **Background**: shade03-100
- **Opacity**: 90%
- **Coverage**: full modal container (w-full h-full)
- **Position**: absolute, top-0, left-0

#### Dark Mode Overlay
- **Background**: shade07-70/70
- **Opacity**: 70% (built into color)
- **Coverage**: full modal container
- **Position**: absolute, top-0, left-0

#### Popup Positioning (Calendar/Time Picker over Modal)
- **Position**: absolute
- **Z-index**: above overlay
- **Common positions**:
  - Calendar: left-70px, top-45px (from modal)
  - Time Picker: left-100px, top-8px (from modal)

---

## Цветовая палитра (дополнение)

### Modal & Overlay Shades
```css
--shade03-100: /* Light overlay background (opacity-90) */
--shade07-70: /* Dark overlay background with /70 opacity */
--shade08-70: /* Dark mode hover background for time picker with /70 opacity */
```

### Input Focus
```css
--stroke-focus: /* Stroke-Focus - для focused/selected input borders */
```

---

### 21. Tooltips

#### Tooltip
- **Padding**: 8px (x), 6px (y)
- **Radius**: 6px (rounded-md)
- **Background**: Backgrounds-dark1
- **Text**: 12px normal, Text-Light
- **Layout**: inline-flex, center aligned

#### Tooltip Arrow (Triangle)
- **Size**: 8×4px (w-2 h-1)
- **Background**: Backgrounds-dark1
- **Rotation**: depends on position
  - **Right**: rotate-90deg
  - **Left**: rotate-270deg
  - **Top**: rotate-0deg
  - **Bottom**: rotate-180deg
- **Position**: adjacent to tooltip content

#### Tooltip Positioning
- **data-position="right"**: arrow on left side, rotated 90deg
- **data-position="left"**: arrow on right side, rotated 270deg
- **data-position="top"**: arrow on bottom, rotated 0deg
- **data-position="bottom"**: arrow on top, rotated 180deg

---

### 22. Info & Help Icons

#### Info Icon (Large)
- **Outer Size**: 24×24px
- **Inner Icon**: 16×16px
- **Color**: Text-Tertiary (default)
- **Usage**: Form labels, descriptions
- **Opacity**: can be 50% for subtle appearance

#### Help Icon (Small)
- **Outer Size**: 16×16px
- **Inner Icon**: 14×14px (3.5×3.5px visual area)
- **Color**: Text-Tertiary or Text-Secondary
- **Usage**: Inline help, small labels

---

### 23. Password Input Extended

#### Password Input with "Forgot password?" Link
- **Layout**: floating label + input + link
- **Floating Label**: "Password", 12px, Text-Primary
- **Link Position**: top-right, floating label level
- **Link Styles**:
  - Font: 12px normal
  - Color: Text-Secondary (default)
  - Hover: Text-Primary + underline
  - Background: Backgrounds-surface2 (floating label background)

#### Password Dots
- **Dot Size**: 6×6px (w-1.5 h-1.5)
- **Shape**: rounded-full
- **Color**: Text-Tertiary (placeholder), Text-Primary (filled)
- **Gap**: 4px (gap-1) between dots
- **Layout**: horizontal inline-flex

#### Password Input States

##### State 1: Empty (Default Border)
```css
outline: 1.5px Stroke-Stroke2;
/* 7 dots, Text-Tertiary color */
```

##### State 2: Empty (Alt Border)
```css
outline: 1.5px shade07-50/50;
/* 7 dots, Text-Tertiary color */
```

##### State 3: Typing (Cursor Visible)
```css
outline: 1.5px shade07-50/50;
/* Cursor: 2×16px (w-0.5 h-4), Text-Blue, rounded-sm */
/* Dots: opacity-0 while typing */
/* Eye icon: opacity-0 */
```

##### State 4: Filled (10 characters)
```css
outline: 1.5px shade07-50/50;
/* 10 dots, Text-Primary color */
/* Cursor after dots */
/* Eye icon: visible (Text-Tertiary) */
```

##### State 5: Revealed (Plain Text)
```css
outline: 1.5px shade07-50/50;
/* Plain text: "pa55w0rd!", 14px medium */
/* Cursor visible */
/* Eye icon: open state (Text-Tertiary) */
```

##### State 6: Error
```css
outline: 1.5px Primary-primary03;
/* 4 dots, Text-Primary color */
/* Cursor visible */
/* Eye icon: visible */
```

#### Eye Icon (Toggle Visibility)
- **Size**: 24×24px (outer), 16×16px (inner container)
- **Icon Size**: 14×14px (3.5×3.5px visual area)
- **Position**: right side, 12px from edge
- **Color**: Text-Tertiary
- **States**:
  - **Hidden password**: eye-slash icon
  - **Visible password**: eye-open icon

---

### 24. Dropdowns & Selects

#### Select Dropdown (Standard)
- **Width**: 160px (w-40), max-width 176px (max-w-44)
- **Height**: 48px
- **Padding**: 20px (left), 12px (right)
- **Radius**: 90px
- **Border**: 1.5px outline, offset -1.5px, Stroke-Stroke2
- **Text**: 14px normal, Text-Secondary
- **Layout**: space-between, overflow hidden

#### Dropdown Chevron Icon
- **Size**: 24×24px
- **Inner Arrow**: 4×8px (w-1 h-2), rotated 90deg
- **Color**: Text-Secondary
- **Position**: right side
- **Radius**: rounded-sm
- **Outline**: 1.5px, offset -0.75px

---

### 25. Time Range Filter Tabs

#### Tab Button
- **Height**: 48px (h-12)
- **Padding**: 24px (x), 12px (y)
- **Radius**: 48px
- **Font**: 14px semibold
- **Gap**: 4px (gap-1) between tabs
- **Layout**: inline-flex

#### Tab States
- **Default**:
  - Background: transparent
  - Text: Text-Secondary
  - No border
- **Active**:
  - Outline: 1.5px Stroke-Stroke2, offset -1.5px
  - Text: Text-Primary
  - Background: transparent

#### Tab Options
- **1D**: 1 Day
- **7D**: 7 Days (often default active)
- **1M**: 1 Month
- **6M**: 6 Months
- **1Y**: 1 Year

---

### 26. Stacked Progress Bars

#### Progress Bar Container
- **Height**: 12px (h-3)
- **Layout**: inline-flex, gap-2px (gap-0.5)
- **Full Width**: 524px (typical example)
- **Radius**: 1px (rounded-[1px]) on segments

#### Progress Segments (3 types)

##### Segment Type 1: Social Media (Solid)
```css
background: shade07-40/40;
border-radius: 1px;
/* Variable width based on percentage */
```

##### Segment Type 2: Direct (Striped Pattern)
```css
background: shade07-60/60;
border-radius: 0.5px; /* on individual stripes */
/* Vertical stripes: 2px width (w-0.5), gap 1px (gap-px) */
/* Layout: flex with gap-px between 13 stripes */
```

##### Segment Type 3: Others (Gradient)
```css
background: linear-gradient(to right, shade08-100, shade09-100);
border: 1px solid Stroke-Stroke2;
border-radius: 1px;
/* Variable width based on percentage */
```

#### Progress Bar Pattern Implementation
- **Stripe Width**: 2px (w-0.5)
- **Stripe Gap**: 1px (gap-px)
- **Stripe Height**: 12px (h-3), matches container
- **Stripe Count**: typically 13 stripes per segment
- **Stripe Radius**: 0.5px (rounded-[0.50px])

---

### 27. Search Input

#### Search Input Container
- **Width**: 320px (w-80)
- **Padding**: 12px (p-3)
- **Radius**: 90px (rounded-[90px]) - pill shaped
- **Background**: Backgrounds-surface2
- **Layout**: inline-flex, items-center
- **Gap**: 8px (gap-2) between icon and text

#### Search States

##### State 1: Default (Empty)
```css
/* Container */
background: Backgrounds-surface2;
border-radius: 90px;
padding: 12px;

/* Icon - Magnifying Glass */
width: 24px;
height: 24px;
/* Circle outline */
outline: 1.5px Text-Secondary;
outline-offset: -0.75px;
/* Position: circle at 6.75px, 4.48px from top-left */

/* Placeholder Text */
color: Text-Secondary;
font-size: 14px;
content: "Search anything...";
```

##### State 2: Focused (Typing)
```css
/* Container */
background: Backgrounds-surface2;
border-radius: 90px;
padding: 12px;
/* Multi-layer shadow */
box-shadow:
  0px 1.96px 2.28px 0px rgba(0, 0, 0, 0.03),
  0px 4.58px 5.32px 0px rgba(0, 0, 0, 0.04),
  0px 8.39px 9.75px 0px rgba(0, 0, 0, 0.05),
  0px 14.42px 16.76px 0px rgba(0, 0, 0, 0.06),
  0px 24.76px 28.78px 0px rgba(0, 0, 0, 0.07),
  0px 53px 62px 0px rgba(0, 0, 0, 0.10);
backdrop-filter: blur(32px);

/* Icon - Blue */
outline: 1.5px Text-Blue;

/* Input Text */
color: Text-Primary;
font-size: 14px;
content: "Core dashboard";

/* Cursor */
width: 2px (w-0.5);
height: 16px (h-4);
background: Text-Blue;
border-radius: 2px (rounded-sm);
```

##### State 3: Light Mode Variant
```css
/* Container */
background: Backgrounds-surface2;
border-radius: 90px;
padding: 12px;
/* Light mode shadow layers */
box-shadow:
  0px 1.08px 2.56px 0px rgba(18, 10, 7, 0.02),
  0px 2.51px 5.97px 0px rgba(18, 10, 7, 0.03),
  0px 4.61px 10.94px 0px rgba(18, 10, 7, 0.04),
  0px 7.93px 18.82px 0px rgba(18, 10, 7, 0.04),
  0px 13.61px 32.31px 0px rgba(18, 10, 7, 0.05),
  0px 29px 69px 0px rgba(18, 10, 7, 0.07);
backdrop-filter: blur(32px);
```

##### State 4: Dark Mode Variant
```css
/* Container */
background: Stroke-Subtle/10;
border-radius: 90px;
padding: 12px;
outline: 1px white;
/* Similar shadow structure with adjusted opacity */
```

#### Search Icon Specifications
- **Size**: 24×24px (w-6 h-6)
- **Circle Position**: offset 6.75px (left), 4.48px (top) from container
- **Circle Size**: 12×12px (w-3 h-3)
- **Circle Stroke**: 1.5px
- **Handle**: positioned bottom-right of circle

---

### 28. Chart Tooltip with Data Point

#### Tooltip Structure
- **Width**: 80px (w-20)
- **Layout**: flex-col, items-center, gap-4px (gap-1)

#### Tooltip Box
```css
/* Container */
padding: 8px (p-2);
background: Backgrounds-dark1;
border-radius: 8px (rounded-lg);
display: flex;
flex-direction: column;
gap: 2px (gap-0.5);

/* Label */
color: Text-Light;
font-size: 12px;
font-weight: 600;
opacity: 0.8;
content: "Earning";

/* Value */
color: Text-Light;
font-size: 12px;
content: "$52,480.00";
```

#### Arrow Triangle
```css
/* Triangle pointing down */
width: 10px (w-2.5);
height: 6px (h-1.5);
background: Backgrounds-dark1;
/* Creates pointed arrow effect */
```

#### Data Point Circle
```css
/* Circle */
width: 12px (w-3);
height: 12px (h-3);
background: Backgrounds-surface2;
border-radius: 9999px (rounded-full);
border: 3px solid Primary-primary02;
```

#### Tooltip Positioning
- **Alignment**: Center-aligned with data point
- **Arrow**: Connects tooltip box to data point
- **Gap**: 4px (gap-1) between tooltip and data point

---

### 29. Status Badges

#### Badge Container
- **Height**: 20px (h-5)
- **Padding**: 8px horizontal (px-2)
- **Radius**: 4px (rounded)
- **Font**: 12px (text-xs)
- **Layout**: inline-flex, items-center

#### Badge Variants

##### "New" Badge (Success/Green)
```css
background: green-600/5;        /* rgba(22, 163, 74, 0.05) */
outline: 1.5px green-600/20;    /* rgba(22, 163, 74, 0.20) */
outline-offset: -1.5px;
color: Primary-primary02;       /* Green text */
content: "New";
```

##### "Hot" Badge (Warning/Orange)
```css
background: orange-600/5;       /* rgba(234, 88, 12, 0.05) */
outline: 1.5px orange-600/20;   /* rgba(234, 88, 12, 0.20) */
outline-offset: -1.5px;
color: orange-600;              /* #ea580c */
content: "Hot";
```

#### Semantic Badge Colors
```css
/* Success - Green */
--badge-success-bg: rgba(22, 163, 74, 0.05);
--badge-success-border: rgba(22, 163, 74, 0.20);
--badge-success-text: var(--primary-primary02);

/* Warning - Orange */
--badge-warning-bg: rgba(234, 88, 12, 0.05);
--badge-warning-border: rgba(234, 88, 12, 0.20);
--badge-warning-text: #ea580c;
```

---

### 30. Navigation Menu

#### Menu Container
- **Width**: 256px (w-64)
- **Radius**: 32px (rounded-[32px])
- **Background**: Backgrounds-surface2
- **Layout**: flex-col

#### Light Mode Menu
```css
/* Container */
background: Backgrounds-surface2;
border-radius: 32px;
/* 7-layer shadow system */
box-shadow:
  0px 1.08px 2.56px 0px rgba(18, 10, 7, 0.02),
  0px 2.51px 5.97px 0px rgba(18, 10, 7, 0.03),
  0px 4.61px 10.94px 0px rgba(18, 10, 7, 0.04),
  0px 7.93px 18.82px 0px rgba(18, 10, 7, 0.04),
  0px 13.61px 32.31px 0px rgba(18, 10, 7, 0.05),
  0px 29px 69px 0px rgba(18, 10, 7, 0.07),
  0px 100px 80px 0px rgba(18, 10, 7, 0.07);
```

#### Dark Mode Menu
```css
/* Container */
background: Backgrounds-surface2;
border-radius: 32px;
outline: 1px Stroke-Subtle;
/* Darker shadow layers with higher opacity */
box-shadow:
  0px 1.96px 2.28px 0px rgba(0, 0, 0, 0.50),
  0px 4.58px 5.32px 0px rgba(0, 0, 0, 0.60),
  0px 8.39px 9.75px 0px rgba(0, 0, 0, 0.65),
  0px 14.42px 16.76px 0px rgba(0, 0, 0, 0.70),
  0px 24.76px 28.78px 0px rgba(0, 0, 0, 0.75),
  0px 53px 62px 0px rgba(0, 0, 0, 0.80);
```

#### Menu Section
```css
/* Section Container */
padding: 12px (p-3);
display: flex;
flex-direction: column;
```

#### Menu Item States

##### Default State
```css
/* Item */
height: 48px (h-12);
padding: 12px (p-3);
border-radius: 16px (rounded-2xl);
display: inline-flex;
gap: 16px (gap-4);

/* Icon */
width: 24px (w-6);
height: 24px (h-6);

/* Text */
color: Text-Secondary;
font-size: 14px;
font-weight: 600;
flex: 1;
```

##### Hover State
```css
/* Same structure as default */
/* Visual feedback on hover (typically lighter background) */
data-property-1: "hover";
```

##### Active State (Light Mode)
```css
/* Item */
height: 48px (h-12);
padding: 12px (p-3);
background: Backgrounds-pop;
border-radius: 16px (rounded-2xl);
/* 3-layer shadow */
box-shadow:
  0px 1px 2px 0px rgba(18, 10, 7, 0.05),
  0px 5px 5px 0px rgba(18, 10, 7, 0.05),
  0px 20px 20px 0px rgba(18, 10, 7, 0.05);
outline: 1px zinc-100;

/* Text */
color: Text-Primary;
font-size: 14px;
font-weight: 600;

data-property-1: "active";
```

##### Active State (Dark Mode)
```css
/* Item */
background: Backgrounds-pop;
border-radius: 16px (rounded-2xl);
outline: 1px zinc-100;
/* No shadow in dark mode active state */

/* Text */
color: Text-Primary;
font-size: 14px;
font-weight: 600;
```

#### Menu Footer Section
```css
/* Footer Container */
padding: 12px (p-3);
border-top: 1px solid Stroke-Subtle/10;  /* Light mode */
border-top: 1px solid Stroke-Subtle;     /* Dark mode - stronger border */

/* Footer Item (e.g., "Log out") */
height: 48px (h-12);
padding: 12px (p-3);
border-radius: 16px (rounded-2xl);
color: Text-Secondary;
font-size: 14px;
font-weight: 600;
```

#### Menu Items List
Common navigation items:
- **My shop** - with icon
- **Analytics** - typically active by default
- **Orders** - with icon
- **Products** - with icon
- **Settings** - with icon
- **Log out** - in footer section (Text-Secondary)

#### Menu Shadow Comparison
- **Light Mode**: 7 shadow layers, opacity 0.02 → 0.07
- **Dark Mode**: 6 shadow layers, opacity 0.50 → 0.80
- **Active Item (Light)**: 3 shadow layers at 0.05 opacity each
- **Active Item (Dark)**: No shadow, relies on outline only

---

### 31. Multi-line Progress Bars (Horizontal Bar Chart)

#### Chart Container
- **Width**: 556px (demo container)
- **Height**: 548px (demo container)
- **Radius**: 5px (rounded-[5px])
- **Border**: 1px purple-500 (for demo/debug purposes)
- **Overflow**: hidden
- **Usage**: Visualization of multiple data series as horizontal bars

#### Progress Bar Area
- **Width**: 524px (w-[524px])
- **Left Padding**: 16px from container edge
- **Top Padding**: 16px from container edge

#### Individual Progress Bar
- **Height**: 12px (h-3)
- **Layout**: inline-flex, gap-2px (gap-0.5) between segments
- **Radius**: 1px (rounded-[1px]) per segment
- **Vertical Spacing**: 56px between bars (positions: 16, 72, 128, 184, 240, 296, 352, 408, 464, 520px)

#### Bar Segments (2-segment composition)

##### Segment 1: Primary Value
```css
background: shade07-40/40;
border-radius: 1px;
height: 12px;
/* Variable widths based on data:
   w-24 (96px), w-52 (208px), w-48 (192px),
   w-60 (240px), w-36 (144px), w-72 (288px), etc.
*/
```

##### Segment 2: Secondary Value
```css
background: shade08-100;
border-radius: 1px;
height: 12px;
/* Variable widths based on data:
   w-60 (240px), w-20 (80px), w-16 (64px),
   w-40 (160px), w-14 (56px), w-24 (96px), etc.
*/
```

#### Bar Positioning
- **Position**: absolute
- **Layout**: 10 horizontal bars
- **Vertical positions** (top values):
  - Bar 1: 16px
  - Bar 2: 72px
  - Bar 3: 128px
  - Bar 4: 184px
  - Bar 5: 240px
  - Bar 6: 296px
  - Bar 7: 352px
  - Bar 8: 408px
  - Bar 9: 464px
  - Bar 10: 520px
- **Step**: 56px between each bar

#### Typical Width Combinations (examples from code)
```
Bar 1: 96px + 240px = 336px total
Bar 2: 208px + 80px = 288px total
Bar 3: 192px + 64px = 256px total
Bar 4: 240px + 160px = 400px total
Bar 5: 144px + 56px = 200px total
Bar 6: 240px + 80px = 320px total
Bar 7: 288px + 96px = 384px total
Bar 8: 192px + 288px = 480px total
Bar 9: 192px + 144px = 336px total
Bar 10: 224px + 64px = 288px total
```

#### Usage Pattern
- **Data Visualization**: Comparing two values across multiple categories
- **Color Coding**:
  - shade07-40/40 (lighter, 40% opacity) for primary/baseline value
  - shade08-100 (solid) for secondary/comparison value
- **Responsive**: Width adjusts based on data percentage
- **Gap**: Consistent 2px separation between segments

#### Implementation Notes
- Each bar is a separate container with `left-[16px]` and specific `top-[Xpx]`
- Segments use `inline-flex` with `gap-0.5` (2px)
- All segments have consistent height (12px) and radius (1px)
- Total width of segments determines the visual proportion
- Container overflow hidden to ensure clean boundaries

---

### 32. Extended Product/Order Table (Advanced List Item)

#### Table Container
- **Width**: 2421px (demo showing Light + Dark modes side-by-side)
- **Height**: 1824px
- **Layout**: Two columns (1148px each) showing Light Mode and Dark Mode variants
- **Row Width**: 1148px (w-[1148px])
- **Padding**: 16px (p-4) per row
- **Gap**: 24px (gap-6) between product section and data section

#### Row Layout Structure

##### Product Section (Left Side)
```css
/* Container */
width: 384px (w-96);
height: 64px (h-16);
display: flex;
align-items: center;
gap: 20px (gap-5);

/* Components */
1. Checkbox (24×24px)
2. Product Image (64×64px, rounded-xl)
3. Product Info (flex-1)
```

##### Data Section (Right Side)
```css
/* Container */
flex: 1;
padding-y: 8px (py-2);
display: flex;
justify-content: space-between / start (depending on layout variant);
align-items: center;

/* Columns (Layout Variant 1 - Full Data) */
1. Status Badge (w-20) - 80px
2. Price (w-14) - 56px
3. Revenue + Trend (w-36) - 144px
4. Time Metric 1 (w-24) - 96px
5. Time Metric 2 (w-24) - 96px

/* Columns (Layout Variant 2 - Simplified) */
1. Revenue + Trend (w-36) - 144px
2. Progress Bar (flex-1) - 3-segment composition
Gap: 48px (gap-12) between columns
```

#### Product Section Components

##### Checkbox
```css
/* Default State */
width: 24px (w-6);
height: 24px (h-6);
border: 2px solid Stroke-Stroke2;
border-radius: 6px (rounded-md);
data-status: "placeholder";

/* In Highlighted Row (Dark Mode) */
border: 2px solid Stroke-Highlight/50;
```

##### Product Image
```css
/* Normal State */
width: 64px (w-16);
height: 64px (h-16);
border-radius: 12px (rounded-xl);
src: "https://placehold.co/64x64";

/* Skeleton State (Light Mode) */
background: Backgrounds-surface1;
no src attribute;

/* Skeleton State (Dark Mode) */
background: Backgrounds-pop;
no src attribute;
```

##### Product Info - Normal State
```css
/* Title */
font-family: 'Inter Display';
font-size: 16px (text-base);
font-weight: 600;
line-height: 24px (leading-6);
letter-spacing: -0.01em (tracking-tight);
color: Text-Primary;
line-clamp: 1;
content: "Bento Matte 3D Illustration";

/* Subtitle */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 400;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Secondary;
opacity: 0.8;
content: "UI Design Kit" or "25 Sep - 4 Oct";
```

##### Product Info - With Action Buttons
```css
/* Title positioned absolutely */
position: absolute;
left: 0;
top: 6px;
width: 240px (w-60);

/* Action Buttons Container */
position: absolute;
left: -4px;
top: 34px;
display: inline-flex;
gap: 8px (gap-2);
```

##### Product Info - Skeleton State
```css
/* Title Skeleton */
width: 176px (w-44);
height: 8px (h-2);
background: Backgrounds-surface1 (light) / Backgrounds-pop (dark);
border-radius: 2px (rounded-sm);
position: top-[8px];

/* Subtitle Skeleton */
width: 80px (w-20);
height: 8px (h-2);
background: Backgrounds-surface1 (light) / Backgrounds-pop (dark);
border-radius: 2px (rounded-sm);
position: top-0;
```

#### Action Buttons (Chip Buttons)

##### Button Container
```css
padding-left: 4px (pl-1);
padding-right: 6px (pr-1.5);
padding-y: 4px (py-1);
border-radius: 6px (rounded-md);
display: flex;
align-items: center;
gap: 4px (gap-1);
```

##### Button States

**Default State**:
```css
background: transparent;
outline: none;
icon-color: Text-Secondary;
text-color: Text-Secondary;
opacity: 0.8;
data-property-1: "default";
```

**Hover State (Light Mode)**:
```css
outline: 1.5px solid Stroke-Stroke2;
outline-offset: -1.5px;
icon-color: Text-Primary;
text-color: Text-Primary;
opacity: 0.8;
data-property-1: "hover";
```

**Hover State (Dark Mode)**:
```css
outline: 1.5px solid shade05-50/50;
outline-offset: -1.5px;
icon-color: Text-Primary;
text-color: Text-Primary;
opacity: 0.8;
data-property-1: "hover";
```

##### Button Icon
```css
width: 16px (w-4);
height: 16px (h-4);
/* Inner icon outline */
width: 12px (w-3);
height: 12px (h-3);
outline: 1.5px;
outline-offset: -0.75px;
```

##### Button Text
```css
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 600;
line-height: 16px (leading-4);
letter-spacing: -0.01em (tracking-tight);
opacity: 0.8;
```

##### Button Types
- **Edit**: Icon at left-[2.50px] top-[2.05px]
- **Delete**: Icon at left-[1.83px] top-[1.83px]
- **Share**: Icon at left-[1.83px] top-[1.83px]

#### Data Section Components

##### Status Badge - "Offline"
```css
/* Container */
width: 80px (w-20);
padding: 8px 12px (px-2 py-1.5);
background: red-600/5;        /* rgba(220, 38, 38, 0.05) */
border-radius: 8px (rounded-lg);
outline: 1.5px solid red-600/20;  /* rgba(220, 38, 38, 0.20) */
outline-offset: -1.5px;
display: inline-flex;
justify-content: center;
gap: 8px (gap-2);
data-property-1: "False";

/* Text */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 600;
line-height: 16px (leading-4);
letter-spacing: -0.01em (tracking-tight);
color: Primary-primary03;    /* Red error color */
content: "Offline";
```

##### Price
```css
/* Container */
width: 56px (w-14);

/* Text */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 400;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Primary;
content: "$98.00";
```

##### Revenue + Trend Badge
```css
/* Container */
width: 144px (w-36);
display: inline-flex;
align-items: center;
gap: 8px (gap-2);

/* Revenue Value */
width: 48px (w-12);
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 400;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Primary;
content: "$3,200" or "128k";
```

##### Trend Badge (Up)
```css
/* Container */
padding: 6px 8px (px-2 py-1.5);
background: green-600/5;
border-radius: 8px (rounded-lg);
outline: 1.5px solid green-600/20;
outline-offset: -1.5px;
display: flex;
align-items: center;
gap: 4px (gap-1);
data-trend: "up";

/* Icon */
width: 16px (w-4);
height: 16px (h-4);
/* Arrow components */
- Vertical bar: w-[2.67px] h-1.5, rotate-180, outline Primary-primary02
- Horizontal bar: w-2 h-0, rotate-180, outline Primary-primary02

/* Percentage Text */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 600;
line-height: 16px (leading-4);
letter-spacing: -0.01em (tracking-tight);
color: Primary-primary02;  /* Green success color */
content: "36.8%";
```

##### Time Metric with Mini Progress Bar
```css
/* Container */
width: 96px (w-24);
padding-y: 2px (py-0.5);
border-radius: 8px (rounded-lg);
display: inline-flex;
align-items: center;
gap: 8px (gap-2);
data-property-1: "01";

/* Time Text */
width: 32px (w-8);
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 400;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Primary;
content: "48m";

/* Mini Progress Bar */
width: 32px (w-8);
height: 6px (h-1.5);
background: shade07-40/40;
border-radius: 2px (rounded-sm);
position: relative;

/* Mini Progress Fill */
width: 4px (w-1);
height: 6px (h-1.5);
background: Chart-Green;
border-radius: 2px (rounded-sm);
position: absolute;
left: 0;
top: 0;
```

##### Full Progress Bar (3-Segment)
```css
/* Container */
flex: 1;
height: 12px (h-3);
position: relative;
data-property-1: "01";

/* Segment Container */
display: inline-flex;
gap: 2px (gap-0.5);

/* Segment 1: Solid */
width: 96px (w-24);
height: 12px (h-3);
background: shade07-40/40;
border-radius: 1px (rounded-[1px]);

/* Segment 2: Striped (13 stripes) */
display: flex;
gap: 1px (gap-px);
/* Each stripe */
width: 2px (w-0.5);
height: 12px (h-3);
background: shade07-60/60;
border-radius: 0.5px (rounded-[0.50px]);

/* Segment 3: Gradient */
width: 240px (w-60);
height: 12px (h-3);
background: linear-gradient(to right, shade08-100, shade09-100);
border-radius: 1px (rounded-[1px]);
border: 1px solid Stroke-Stroke2;
```

##### Simple 2-Segment Progress Bar
```css
/* Container */
flex: 1;
height: 12px (h-3);
position: relative;

/* Segment Container */
display: inline-flex;
gap: 2px (gap-0.5);

/* Segment 1 */
width: 96px (w-24);
height: 12px (h-3);
background: shade07-40/40;
border-radius: 1px (rounded-[1px]);

/* Segment 2 */
width: 240px (w-60);
height: 12px (h-3);
background: shade08-100 or Chart-Green;
border-radius: 1px (rounded-[1px]);
```

#### Row States

##### Default Row
```css
padding: 16px (p-4);
display: inline-flex;
gap: 24px (gap-6);
overflow: hidden;
/* No background, radius, or outline */
```

##### Row with Bottom Border (Light Mode)
```css
padding: 16px (p-4);
border-bottom: 1.5px solid Stroke-Subtle/10;
display: inline-flex;
gap: 24px (gap-6);
overflow: hidden;
```

##### Row with Bottom Border (Dark Mode)
```css
padding: 16px (p-4);
border-bottom: 1.5px solid Stroke-Subtle;
display: inline-flex;
gap: 24px (gap-6);
overflow: hidden;
```

##### Hover/Selected Row (Light Mode)
```css
padding: 16px (p-4);
background: Backgrounds-highlight;
border-radius: 16px (rounded-2xl);
/* Multi-layer shadow system */
box-shadow:
  0px 1px 4px 0px rgba(0, 0, 0, 0.05),
  0px 8px 8px -2px rgba(0, 0, 0, 0.08),
  inset 0px 0px 0px 3px rgba(255, 255, 255, 1.00);
outline: 1.5px solid zinc-100;
outline-offset: -1.5px;
display: inline-flex;
gap: 24px (gap-6);
overflow: hidden;
```

##### Hover/Selected Row (Dark Mode)
```css
padding: 16px (p-4);
background: Backgrounds-highlight;
border-radius: 16px (rounded-2xl);
outline: 1.5px solid zinc-100;
outline-offset: -1.5px;
display: inline-flex;
gap: 24px (gap-6);
overflow: hidden;
/* NO shadows in dark mode */
/* Checkbox border changes to Stroke-Highlight/50 */
```

#### Skeleton Loading State

##### Product Section Skeleton
```css
/* Checkbox - same as normal */
/* Image */
width: 64px;
height: 64px;
background: Backgrounds-surface1 (light) / Backgrounds-pop (dark);
border-radius: 12px;

/* Title Bar */
width: 176px (w-44);
height: 8px (h-2);
background: Backgrounds-surface1 (light) / Backgrounds-pop (dark);
border-radius: 2px;
position: top-[8px];

/* Subtitle Bar */
width: 80px (w-20);
height: 8px (h-2);
background: Backgrounds-surface1 (light) / Backgrounds-pop (dark);
border-radius: 2px;
position: top-0;
```

##### Data Section Skeleton
```css
/* Status Badge Skeleton */
width: 80px (w-20);
height: 28px (h-7);
/* Bar inside */
width: 56px (w-14);
height: 8px (h-2);
background: Backgrounds-surface1 (light) / Backgrounds-pop (dark);
border-radius: 2px;
position: top-[10px];

/* Price Skeleton */
width: 56px (w-14);
height: 24px (h-6);
/* Bar inside */
width: 56px (w-14);
height: 8px (h-2);
background: Backgrounds-surface1 (light) / Backgrounds-pop (dark);
border-radius: 2px;
position: top-[8px];

/* Revenue Skeleton */
width: 144px (w-36);
height: 28px (h-7);
/* Bar inside */
width: 128px (w-32);
height: 8px (h-2);
background: Backgrounds-surface1 (light) / Backgrounds-pop (dark);
border-radius: 2px;
position: top-[10px];

/* Time Metric Skeletons (×2) */
width: 96px (w-24);
height: 28px (h-7);
/* Bar inside */
width: 56px (w-14);
height: 8px (h-2);
background: Backgrounds-surface1 (light) / Backgrounds-pop (dark);
border-radius: 2px;
position: top-[10px];
```

#### Layout Variants

##### Variant 1: Full Data Table
- Product Section (checkbox, image, title, subtitle)
- Status Badge
- Price
- Revenue + Trend Badge
- Time Metric 1 (with mini progress)
- Time Metric 2 (with mini progress)

##### Variant 2: Simplified with Progress Bar
- Product Section (checkbox, image, title, date range)
- Revenue + Trend Badge
- 3-Segment Progress Bar (flex-1)
- Gap: 48px (gap-12) between columns

##### Variant 3: With Action Buttons
- Product Section with Action Buttons replacing subtitle
- Same data columns as Variant 1 or 2
- Buttons appear on hover/selected state

##### Variant 4: Compact with 2-Segment Bar
- Product Section (checkbox, image, title, subtitle OR action buttons)
- Revenue + Trend Badge
- Simple 2-Segment Progress Bar (flex-1)

#### Row Vertical Positions (in demo)
- Row 1 (Default): top-[16px]
- Row 2 (Hover/Selected): top-[156px]
- Row 3 (With Bottom Border): top-[296px]
- Row 4 (Skeleton Loading): top-[436px]
- Row 5 (Simplified Layout): top-[576px]
- Row 6 (Hover with Actions): top-[716px]
- Row 7 (Simple 2-Segment): top-[856px]
- Row 8 (Hover, Buttons in Subtitle): top-[1029px]

#### Color Tokens Used

##### New Colors
```css
--chart-green: /* Active bar color in mini progress */
--stroke-highlight-50: /* shade05-50/50 - Dark mode action button hover */
```

##### Existing Colors
```css
--primary-primary02: /* Green - trend up arrow and text */
--primary-primary03: /* Red - offline badge text */
--text-primary: /* Main text color */
--text-secondary: /* Secondary text and default button state */
--backgrounds-highlight: /* Hover/selected row background */
--backgrounds-surface1: /* Skeleton loading (light mode) */
--backgrounds-pop: /* Skeleton loading (dark mode) */
--stroke-stroke2: /* Default checkbox, action button hover (light) */
--stroke-subtle: /* Bottom border (dark mode, full opacity) */
--stroke-subtle-10: /* Bottom border (light mode, 10% opacity) */
--stroke-highlight-50: /* Checkbox in highlighted row (dark mode) */
--shade07-40-40: /* Progress bar background, 40% opacity */
--shade07-60-60: /* Striped progress segment, 60% opacity */
--shade08-100: /* Gradient start, solid segment */
--shade09-100: /* Gradient end */
```

#### Typography

##### Product Title
```css
font-family: 'Inter Display';
font-size: 16px;
font-weight: 600;
line-height: 24px;
letter-spacing: -0.01em;
```

##### Product Subtitle / Date Range
```css
font-family: 'Inter Display';
font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: -0.01em;
opacity: 0.8;
```

##### Data Values (Price, Revenue, Time)
```css
font-family: 'Inter Display';
font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: -0.01em;
```

##### Badge Text (Status, Trend, Buttons)
```css
font-family: 'Inter Display';
font-size: 14px;
font-weight: 600;
line-height: 16px;
letter-spacing: -0.01em;
```

#### Shadow Systems

##### Hover/Selected Row (Light Mode)
```css
/* 3-layer system */
box-shadow:
  0px 1px 4px 0px rgba(0, 0, 0, 0.05),
  0px 8px 8px -2px rgba(0, 0, 0, 0.08),
  inset 0px 0px 0px 3px rgba(255, 255, 255, 1.00);
```

##### Hover/Selected Row (Dark Mode)
```css
/* No shadows, only outline */
outline: 1.5px solid zinc-100;
```

#### Implementation Notes
- Table supports both Light and Dark mode variants
- Multiple layout variants for different data display needs
- Skeleton loading states for all components
- Action buttons appear on hover/selected rows (optional)
- Progress bars can be simple (2-segment) or complex (3-segment with stripes/gradient)
- Mini progress bars in time metric columns for quick visual feedback
- Responsive column widths with fixed product section
- Typography uses Inter Display with consistent tracking-tight
- All interactive elements have proper hover/focus states
- Border styles differ between light (subtle/10) and dark (subtle full) modes
- Checkbox appearance changes in highlighted rows (dark mode)

---

### 33. Modal Dialogs & Toggle Switches

#### Dialog Container
- **Width**: 573px (w-[573px])
- **Padding**: 48px (p-12)
- **Background**: Backgrounds-surface1
- **Radius**: 32px (rounded-[32px])
- **Backdrop Blur**: 32px (backdrop-blur-[32px])
- **Layout**: flex-col, gap-32px (gap-8)

#### Dialog Shadow Variants

##### Variant 1: Standard Shadow
```css
/* 5-layer shadow system */
box-shadow:
  0px 5px 1.5px -4px rgba(8, 8, 8, 0.09),
  0px 6px 4px -4px rgba(8, 8, 8, 0.05),
  0px 6px 13px 0px rgba(8, 8, 8, 0.03),
  0px 24px 24px -16px rgba(8, 8, 8, 0.04),
  0px 2.15px 0.5px -2px rgba(0, 0, 0, 0.25);
outline: 1px;
outline-offset: -1px;
backdrop-filter: blur(32px);
```

##### Variant 2: Enhanced Shadow with Inset Highlight
```css
/* 5-layer shadow system + inset highlight */
box-shadow:
  0px 24px 24px -16px rgba(8, 8, 8, 0.08),
  0px 6px 13px 0px rgba(8, 8, 8, 0.12),
  0px 6px 4px -4px rgba(8, 8, 8, 0.16),
  0px 5px 1.5px -4px rgba(8, 8, 8, 0.20),
  0px 2.15px 0.5px -2px rgba(0, 0, 0, 0.25),
  inset 2px 4px 16px 0px rgba(253, 253, 253, 0.05);
outline: 1px solid white/40;
outline-offset: -1px;
backdrop-filter: blur(32px);
```

#### Dialog Components

##### Icon Container
```css
/* Container */
width: 64px (w-16);
height: 64px (h-16);
border-radius: 80px (rounded-[80px]);
overflow: hidden;
position: relative;

/* Variants */
background: red-600/20;      /* Delete/Alert dialogs */
background: shade08-100;     /* Status/Settings dialogs */
```

##### Alert Icon (Delete/Warning)
```css
/* Icon Container */
width: 24px (w-6);
height: 24px (h-6);
position: absolute;
left: 20px;
top: 20px;

/* Exclamation Mark Shape */
/* Vertical line */
width: 20px (w-5);
height: 16px (h-4);
left: 2.51px;
top: 2.66px;
outline: 1.5px Primary-primary03;
outline-offset: -0.75px;

/* Dot */
width: 2px (w-0.5);
height: 2px (h-0.5);
left: 11px;
top: 14.50px;
background: Primary-primary03;
border-radius: 9999px (rounded-full);
```

##### Settings/Layers Icon
```css
/* Icon Container */
width: 24px (w-6);
height: 24px (h-6);
position: absolute;
left: 20px;
top: 20px;

/* Small square */
width: 8px (w-2);
height: 6px (h-1.5);
left: 8px;
top: 10px;
border-radius: 2px (rounded-sm);
outline: 1.5px;
outline-offset: -0.75px;

/* Large square */
width: 16px (w-4);
height: 16px (h-4);
left: 3px;
top: 3px;
border-radius: 4px (rounded);
outline: 1.5px;
outline-offset: -0.75px;

/* Icon color variants */
outline-color: Text-Primary;           /* Light mode status dialog */
outline-color: Backgrounds-surface1;   /* Dark mode status dialog */
```

##### Dialog Title
```css
font-family: 'Inter Display';
font-size: 30px (text-3xl);
font-weight: 600;
line-height: 40px (leading-10);
letter-spacing: -0.01em (tracking-tight);
color: Text-Primary;
align-self: stretch;
```

##### Dialog Description
```css
font-family: 'Inter Display';
font-size: 16px (text-base);
font-weight: 400;
line-height: 24px (leading-6);
letter-spacing: -0.01em (tracking-tight);
color: Text-Tertiary;
align-self: stretch;

/* Mixed color text (Status dialog) */
/* Normal text: Text-Tertiary */
/* Highlighted word: Primary-primary02 (e.g., "Active") */
```

#### Button Styles

##### Cancel Button (Outline)
```css
/* Container */
flex: 1;
height: 48px (h-12);
padding: 14px 28px (px-7 py-3.5);
border-radius: 32px (rounded-[32px]);
outline: 1.5px solid Stroke-Stroke2;
outline-offset: -1.5px;
display: flex;
justify-content: center;
align-items: center;
gap: 8px (gap-2);
overflow: hidden;

/* Text */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 600;
line-height: 16px (leading-4);
letter-spacing: -0.01em (tracking-tight);
color: Text-Secondary;
text-align: center;
```

##### Primary Action Button - Dark Mode
```css
/* Container */
flex: 1;
padding: 16px 28px (px-7 py-4);
background: linear-gradient(to bottom, #27272a, #27272a); /* zinc-800 */
border-radius: 32px (rounded-[32px]);
box-shadow: inset 2px 0px 8px 2px rgba(248, 248, 248, 0.20);
outline: 1.5px solid white/40;
outline-offset: -1.5px;
display: flex;
justify-content: center;
align-items: center;
gap: 10px (gap-2.5);
overflow: hidden;

/* Text */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 600;
line-height: 16px (leading-4);
letter-spacing: -0.01em (tracking-tight);
color: Text-Light;

/* Attributes */
data-light-mode: "True";
data-state: "Default";
data-style: "Button";
```

##### Primary Action Button - Light Mode
```css
/* Container */
flex: 1;
padding: 16px 28px (px-7 py-4);
background: linear-gradient(to bottom, #ffffff, #e5e5e5); /* white → neutral-200 */
border-radius: 32px (rounded-[32px]);
box-shadow: inset 2px 0px 8px 2px rgba(24, 24, 24, 0.20);
outline: 1.5px solid white/60;
outline-offset: -1.5px;
display: flex;
justify-content: center;
align-items: center;
gap: 10px (gap-2.5);
overflow: hidden;

/* Text */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 600;
line-height: 16px (leading-4);
letter-spacing: -0.01em (tracking-tight);
color: Text-Light;

/* Attributes */
data-light-mode: "False";
data-state: "Default";
data-style: "Button";
```

#### Toggle Switch Component

##### Toggle Container
```css
/* Outer Container */
align-self: stretch;
padding: 4px (p-1);
border-radius: 36px (rounded-[36px]);
outline: 1.5px solid Stroke-Stroke2;
outline-offset: -1.5px;
display: inline-flex;
gap: 8px (gap-2);
overflow: hidden;

/* Attributes */
data-property-1: "Active" or "Deactive";
```

##### Toggle Button - Active State
```css
/* Container */
flex: 1;
padding: 16px 24px (px-6 py-4);
background: green-600/10;  /* rgba(22, 163, 74, 0.10) */
border-radius: 32px (rounded-[32px]);
outline: 1.5px solid green-600/20;  /* rgba(22, 163, 74, 0.20) */
outline-offset: -1.5px;
display: flex;
justify-content: center;
align-items: center;
gap: 8px (gap-2);
overflow: hidden;

/* Text */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 600;
line-height: 16px (leading-4);
letter-spacing: -0.01em (tracking-tight);
color: Primary-primary02;  /* Green */
content: "Active";
```

##### Toggle Button - Deactive State (Selected)
```css
/* Container */
flex: 1;
padding: 16px 24px (px-6 py-4);
background: red-600/10;  /* rgba(220, 38, 38, 0.10) */
border-radius: 32px (rounded-[32px]);
outline: 1.5px solid red-600/20;  /* rgba(220, 38, 38, 0.20) */
outline-offset: -1.5px;
display: flex;
justify-content: center;
align-items: center;
gap: 8px (gap-2);
overflow: hidden;

/* Text */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 600;
line-height: 16px (leading-4);
letter-spacing: -0.01em (tracking-tight);
color: Primary-primary03;  /* Red */
content: "Deactive";
```

##### Toggle Button - Inactive/Default State
```css
/* Container */
flex: 1;
padding: 14px 24px (px-6 py-3.5);
border-radius: 32px (rounded-[32px]);
display: flex;
justify-content: center;
align-items: center;
gap: 8px (gap-2);
overflow: hidden;
/* No background, no outline */

/* Text */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 600;
line-height: 16px (leading-4);
letter-spacing: -0.01em (tracking-tight);
color: Text-Secondary;
content: "Active" or "Deactive";
```

#### Product Preview (Share Dialog)

##### Product Preview Container
```css
/* Container */
align-self: stretch;
display: inline-flex;
align-items: center;
gap: 24px (gap-6);
```

##### Product Image
```css
width: 80px (w-20);
height: 80px (h-20);
border-radius: 16px (rounded-2xl);
src: "https://placehold.co/80x80";
```

##### Product Info
```css
/* Container */
display: inline-flex;
flex-direction: column;
justify-content: center;
align-items: start;
gap: 4px (gap-1);

/* Product Name */
width: 240px (w-60);
font-family: 'Inter Display';
font-size: 20px (text-xl);
font-weight: 600;
line-height: 28px (leading-7);
letter-spacing: -0.01em (tracking-tight);
color: Text-Primary;
line-clamp: 1;
content: "Core Dashboard Builder 1.0";

/* Product Category */
font-family: 'Inter Display';
font-size: 16px (text-base);
font-weight: 400;
line-height: 24px (leading-6);
letter-spacing: -0.01em (tracking-tight);
color: Text-Secondary;
opacity: 0.8;
content: "UI Design Kit";
```

#### Social Media Buttons

##### Social Buttons Container
```css
/* Container */
align-self: stretch;
display: inline-flex;
justify-content: end;
align-items: start;
gap: 12px (gap-3);
flex-wrap: wrap;
content: start;
```

##### Social Media Button
```css
/* Container */
flex: 1;
min-width: 192px (min-w-48);
padding: 12px 28px (px-7 py-3);
border-radius: 32px (rounded-[32px]);
outline: 1.5px solid Stroke-Stroke2;
outline-offset: -1.5px;
display: flex;
justify-content: center;
align-items: center;
gap: 8px (gap-2);
overflow: hidden;

/* Attributes */
data-property-1: "ig" | "x" | "fb" | "tr";

/* Icon Container */
width: 24px (w-6);
height: 24px (h-6);
position: relative;
overflow: hidden;

/* Icon Shape */
width: 20px (w-5);
height: 20px (h-5);
background: Text-Secondary;
/* Position varies by platform */
left: 1.50px, top: 1.50px;  /* Instagram, Facebook */
left: 2.46px, top: 2.25px;  /* X/Twitter */
left: 2.96px, top: 1.50px;  /* Threads */
```

#### Dialog Types

##### Type 1: Delete Confirmation Dialog
```css
/* Icon */
background: red-600/20;
icon-color: Primary-primary03;

/* Title */
content: "Are you sure?";

/* Description */
content: "This will definitely delete 4 products, and all data will be removed. This action cannot be undone.";
color: Text-Tertiary;

/* Buttons */
- Cancel (outline)
- Delete (gradient primary)
```

##### Type 2: Status Change Dialog
```css
/* Icon */
background: shade08-100;
icon-color: Text-Primary / Backgrounds-surface1;

/* Title */
content: "Set products status";

/* Description */
content: "You're changing the status of 4 products to [Active]. This action can be changed at any time.";
/* Mixed colors: Text-Tertiary + Primary-primary02 */

/* Toggle Switch */
- Active / Deactive states
```

##### Type 3: Share Product Dialog
```css
/* Title Only (no icon) */
content: "Share this product";

/* Product Preview */
- Image: 80×80px, rounded-2xl
- Name: 20px/600, line-clamp-1
- Category: 16px/400, opacity-0.8

/* Social Media Buttons */
- 4 buttons: Instagram, X, Facebook, Threads
- flex-wrap grid, min-w-48

/* Copy Link Button */
- Gradient primary button
```

#### Button Layout Patterns

##### Two-Button Layout
```css
/* Container */
align-self: stretch;
display: inline-flex;
gap: 12px (gap-3);

/* Buttons */
- Left: Cancel (outline, flex-1)
- Right: Primary action (gradient, flex-1)
```

##### Social Grid + Full-Width Button
```css
/* Container */
align-self: stretch;
display: flex;
flex-direction: column;
gap: 12px (gap-3);

/* Social Grid */
- 4 buttons in flex-wrap grid
- min-width: 192px per button

/* Copy Link Button */
- Full-width gradient button
```

#### Shadow Layer Breakdown

##### Standard Shadow (5 layers)
```css
Layer 1: 0px 5px 1.5px -4px rgba(8,8,8,0.09)
Layer 2: 0px 6px 4px -4px rgba(8,8,8,0.05)
Layer 3: 0px 6px 13px 0px rgba(8,8,8,0.03)
Layer 4: 0px 24px 24px -16px rgba(8,8,8,0.04)
Layer 5: 0px 2.15px 0.5px -2px rgba(0,0,0,0.25)
```

##### Enhanced Shadow (6 layers)
```css
Layer 1: 0px 24px 24px -16px rgba(8,8,8,0.08)
Layer 2: 0px 6px 13px 0px rgba(8,8,8,0.12)
Layer 3: 0px 6px 4px -4px rgba(8,8,8,0.16)
Layer 4: 0px 5px 1.5px -4px rgba(8,8,8,0.20)
Layer 5: 0px 2.15px 0.5px -2px rgba(0,0,0,0.25)
Inset: 2px 4px 16px 0px rgba(253,253,253,0.05)
```

#### Color Tokens Used

##### Backgrounds
```css
--backgrounds-surface1: /* Dialog background */
```

##### Icons
```css
--primary-primary02: /* Green - active state, success */
--primary-primary03: /* Red - alert icon, deactive state */
```

##### Text
```css
--text-primary: /* Dialog title, product name */
--text-secondary: /* Cancel button, social icons, inactive toggle */
--text-tertiary: /* Dialog description */
--text-light: /* Primary button text */
```

##### Borders & Outlines
```css
--stroke-stroke2: /* Outline buttons, toggle container */
white/40: /* Enhanced dialog outline, dark button */
white/60: /* Light button outline */
```

##### Toggle States
```css
green-600/10: /* Active toggle background */
green-600/20: /* Active toggle outline */
red-600/10: /* Deactive toggle background */
red-600/20: /* Deactive toggle outline */
red-600/20: /* Alert icon background */
```

##### Gradients
```css
zinc-800 → zinc-800: /* Dark mode button */
white → neutral-200: /* Light mode button */
```

#### Typography System

##### Dialog Title
```css
font-family: 'Inter Display';
font-size: 30px;
font-weight: 600;
line-height: 40px;
letter-spacing: -0.01em;
```

##### Product Name
```css
font-family: 'Inter Display';
font-size: 20px;
font-weight: 600;
line-height: 28px;
letter-spacing: -0.01em;
```

##### Dialog Description / Product Category
```css
font-family: 'Inter Display';
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.01em;
```

##### Button Text / Toggle Text
```css
font-family: 'Inter Display';
font-size: 14px;
font-weight: 600;
line-height: 16px;
letter-spacing: -0.01em;
```

#### Implementation Notes
- All dialogs use 48px padding (p-12)
- Consistent 32px gap (gap-8) between dialog sections
- Two shadow variants: standard (lighter) and enhanced (with inset highlight)
- Buttons use 32px radius for pill shape
- Toggle switches have 4px padding in outer container, 36px radius
- Social media buttons have min-width to maintain grid layout
- Icons positioned absolutely at 20px from top-left within 64px container
- Backdrop blur 32px for glassmorphism effect
- All text uses Inter Display with tracking-tight (-0.01em)
- Primary action buttons have inset shadows for depth
- Toggle states use semantic colors (green for active, red for deactive)
- Product preview maintains 4px gap between name and category
- Social button grid uses flex-wrap with 12px gap

---

### 34. File Download Card & Archive Icon

#### Download Card Container
```css
/* Container */
width: 664px (w-[664px]);
padding: 24px (p-6);
border-radius: 24px (rounded-3xl);
outline: 1.5px solid Stroke-Stroke2;
outline-offset: -1.5px;
display: inline-flex;
justify-content: space-between;
align-items: center;
```

#### File Info Section
```css
/* Container */
display: inline-flex;
flex-direction: column;
justify-content: start;
align-items: start;
gap: 8px (gap-2);
```

##### File Name
```css
font-family: 'Inter Display';
font-size: 16px (text-base);
font-weight: 600;
line-height: 24px (leading-6);
letter-spacing: -0.01em (tracking-tight);
color: Text-Primary;
content: "Bento Pro v 2.0 – Illustration Kit.zip";
```

##### File Details Row
```css
/* Container */
display: inline-flex;
justify-content: start;
align-items: center;
gap: 8px (gap-2);

/* File Size Text */
font-family: 'Inter Display';
font-size: 16px (text-base);
font-weight: 400;
line-height: 24px (leading-6);
letter-spacing: -0.01em (tracking-tight);
color: Text-Secondary;
content: "128 MB";
```

#### Archive Icon (4-Bar Visualization)
```css
/* Icon Container */
width: 24px (w-6);
height: 24px (h-6);
position: relative;

/* Bar 1 */
width: 18px (w-[18px]);
height: 2px (h-0.5);
left: 3px;
top: 6.50px;
background: Text-Secondary;
border-radius: 9999px (rounded-full);

/* Bar 2 */
width: 18px (w-[18px]);
height: 2px (h-0.5);
left: 3px;
top: 10.50px;
background: Text-Secondary;
border-radius: 9999px (rounded-full);

/* Bar 3 */
width: 18px (w-[18px]);
height: 2px (h-0.5);
left: 3px;
top: 14.50px;
background: Text-Secondary;
border-radius: 9999px (rounded-full);

/* Bar 4 */
width: 18px (w-[18px]);
height: 2px (h-0.5);
left: 3px;
top: 18.50px;
background: Text-Secondary;
border-radius: 9999px (rounded-full);
```

#### Download Button
```css
/* Container */
width: 48px (w-12);
height: 48px (h-12);
padding: 14px (p-3.5);
background: linear-gradient(to bottom, #27272a, #27272a); /* zinc-800 */
border-radius: 32px (rounded-[32px]);
display: inline-flex;
justify-content: center;
align-items: center;
overflow: hidden;

/* Download Icon */
width: 20px (w-5);
height: 20px (h-5);
position: relative;
/* Icon color: Text-Light or white */
```

#### Implementation Notes
- Card width 664px with 24px padding
- Archive icon shows 4 horizontal bars (6.5, 10.5, 14.5, 18.5px vertical positions)
- Download button uses zinc-800 gradient background
- File name uses semibold (600), file size uses regular (400)
- Outline border 1.5px with Stroke-Stroke2 color
- Icon and text use Text-Secondary color
- Download button positioned at right with 32px border-radius
- All text uses Inter Display with tracking-tight

---

### 35. Products Table - List View with Header

#### Table Container
```css
/* Container */
width: 1180px (w-[1180px]);
height: auto;
padding: 24px (p-6);
background: Backgrounds-surface1;
border-radius: 24px (rounded-3xl);
outline: 1.5px solid Stroke-Stroke2;
outline-offset: -1.5px;
display: inline-flex;
flex-direction: column;
gap: 24px (gap-6);
```

#### Table Header Section
```css
/* Header Container */
align-self: stretch;
display: inline-flex;
justify-content: space-between;
align-items: center;
```

##### Header Title
```css
font-family: 'Inter Display';
font-size: 24px (text-2xl);
font-weight: 500;
line-height: 32px (leading-8);
letter-spacing: -0.01em (tracking-tight);
color: Text-Primary;
content: "Products";
```

##### Header Actions Container
```css
/* Container */
display: inline-flex;
justify-content: end;
align-items: start;
gap: 12px (gap-3);
```

#### Search Input
```css
/* Container */
width: 288px (w-72);
padding: 10px 20px (px-5 py-2.5);
background: Backgrounds-surface1;
border-radius: 32px (rounded-[32px]);
outline: 1.5px solid Stroke-Stroke2;
outline-offset: -1.5px;
display: flex;
align-items: center;
gap: 8px (gap-2);

/* Search Icon */
width: 24px (w-6);
height: 24px (h-6);
color: Text-Secondary;

/* Search Glass Circle */
width: 10px (w-2.5);
height: 10px (h-2.5);
left: 4.75px;
top: 4.75px;
outline: 1.5px;
outline-offset: -0.75px;
border-radius: 9999px (rounded-full);

/* Search Handle */
width: 6px (w-1.5);
height: 6px (h-1.5);
left: 13.76px;
top: 13.76px;
outline: 1.5px;
outline-offset: -0.75px;

/* Input Text */
flex: 1;
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 400;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Secondary;
placeholder: "Search products...";
```

#### View Toggle Buttons
```css
/* Toggle Container */
display: inline-flex;
justify-content: end;
align-items: start;
gap: 8px (gap-2);
```

##### Grid View Button (Active State)
```css
/* Container */
width: 44px (w-11);
height: 44px (h-11);
padding: 10px (p-2.5);
background: Backgrounds-highlight;
border-radius: 12px (rounded-xl);
outline: 1.5px solid zinc-100;
outline-offset: -1.5px;
box-shadow:
  0px 1px 4px 0px rgba(0, 0, 0, 0.05),
  0px 8px 8px -2px rgba(0, 0, 0, 0.08),
  inset 0px 0px 0px 3px rgba(255, 255, 255, 1.00);
display: inline-flex;
justify-content: center;
align-items: center;

/* Grid Icon (4 squares in 2×2) */
width: 24px (w-6);
height: 24px (h-6);

/* Small Squares (×4) */
width: 8px (w-2);
height: 8px (h-2);
border-radius: 2px (rounded-sm);
background: Text-Primary;
positions:
  - top-left: left-3px, top-3px;
  - top-right: left-13px, top-3px;
  - bottom-left: left-3px, top-13px;
  - bottom-right: left-13px, top-13px;
```

##### List View Button (Inactive State)
```css
/* Container */
width: 44px (w-11);
height: 44px (h-11);
padding: 10px (p-2.5);
border-radius: 12px (rounded-xl);
outline: 1.5px solid Stroke-Stroke2;
outline-offset: -1.5px;
display: inline-flex;
justify-content: center;
align-items: center;
/* No background, no shadow */

/* List Icon (3 horizontal lines) */
width: 24px (w-6);
height: 24px (h-6);

/* Lines (×3) */
width: 18px (w-[18px]);
height: 2px (h-0.5);
background: Text-Secondary;
border-radius: 9999px (rounded-full);
positions:
  - Line 1: left-3px, top-7px;
  - Line 2: left-3px, top-11px;
  - Line 3: left-3px, top-15px;
```

#### Table Column Headers
```css
/* Header Row Container */
align-self: stretch;
display: inline-flex;
align-items: center;
gap: 48px (gap-12);
padding: 0px 16px (px-4);

/* Column Labels */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 600;
line-height: 16px (leading-4);
letter-spacing: -0.01em (tracking-tight);
color: Text-Secondary;

/* Column Widths */
- Product: auto (flex section with image + text)
- Status: auto
- Price: auto
- Sales: auto
- Ratings: auto
- Views: auto
```

#### Table Row - Default State
```css
/* Row Container */
align-self: stretch;
padding: 16px (p-4);
display: inline-flex;
align-items: center;
gap: 48px (gap-12);
```

##### Product Cell
```css
/* Container */
display: inline-flex;
align-items: center;
gap: 24px (gap-6);

/* Checkbox */
width: 24px (w-6);
height: 24px (h-6);
border-radius: 8px (rounded-lg);
outline: 1.5px solid Stroke-Stroke2;
outline-offset: -1.5px;

/* Product Image */
width: 64px (w-16);
height: 64px (h-16);
border-radius: 12px (rounded-xl);
src: placeholder;

/* Product Info */
display: inline-flex;
flex-direction: column;
gap: 4px (gap-1);

/* Product Title */
font-family: 'Inter Display';
font-size: 16px (text-base);
font-weight: 600;
line-height: 24px (leading-6);
letter-spacing: -0.01em (tracking-tight);
color: Text-Primary;
content: "Dashboard App Builder 1.0";

/* Product Subtitle */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 400;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Secondary;
opacity: 0.8;
content: "UI Design Kit";
```

##### Status Badge
```css
/* Container */
padding: 6px 12px (px-3 py-1.5);
background: green-600/5;
border-radius: 20px (rounded-[20px]);
outline: 1.5px solid green-600/20;
outline-offset: -1.5px;

/* Text */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 600;
line-height: 16px (leading-4);
letter-spacing: -0.01em (tracking-tight);
color: Primary-primary02;  /* Green */
content: "Online";

/* Offline Variant */
background: red-600/5;
outline: 1.5px solid red-600/20;
color: Primary-primary03;  /* Red */
content: "Offline";
```

##### Price Cell
```css
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 400;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Primary;
content: "$48.00";
```

##### Sales Cell (with Badge)
```css
/* Container */
display: inline-flex;
align-items: center;
gap: 12px (gap-3);

/* Sales Value */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 400;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Primary;
content: "$1,024.04";

/* Price Badge */
padding: 4px 8px (px-2 py-1);
background: green-600/5;
border-radius: 6px (rounded-md);
outline: 1.5px solid green-600/20;
outline-offset: -1.5px;

/* Badge Text */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 600;
line-height: 16px (leading-4);
letter-spacing: -0.01em (tracking-tight);
color: Primary-primary02;
content: "$48";
```

##### Ratings Cell
```css
/* Container */
display: inline-flex;
align-items: center;
gap: 8px (gap-2);

/* Star Rating Display */
display: inline-flex;
align-items: center;
gap: 4px (gap-1);

/* Star Icon (×5) */
width: 16px (w-4);
height: 16px (h-4);
color: #fbbf24;  /* amber-400 for filled stars */
color: Text-Secondary;  /* for empty stars */

/* Rating Count */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 400;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Secondary;
content: "(124)";
```

##### Views Cell
```css
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 400;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Primary;
content: "1.2k";
```

#### Table Row - Hover State (Light Mode)
```css
/* Row Container */
padding: 16px (p-4);
background: Backgrounds-highlight;
border-radius: 16px (rounded-2xl);
outline: 1.5px solid zinc-100;
outline-offset: -1.5px;
box-shadow:
  0px 1px 4px 0px rgba(0, 0, 0, 0.05),
  0px 8px 8px -2px rgba(0, 0, 0, 0.08),
  inset 0px 0px 0px 3px rgba(255, 255, 255, 1.00);
display: inline-flex;
align-items: center;
gap: 24px (gap-6);

/* Action Buttons appear in Product cell, replacing subtitle */
```

##### Action Buttons (on Hover)
```css
/* Buttons Container */
display: inline-flex;
justify-content: start;
align-items: start;
gap: 8px (gap-2);

/* Button (Edit/Delete/Unpublish) */
padding: 6px 12px (px-3 py-1.5);
border-radius: 12px (rounded-xl);
outline: 1.5px solid Stroke-Stroke2;
outline-offset: -1.5px;
display: inline-flex;
justify-content: center;
align-items: center;
gap: 8px (gap-2);

/* Button Text */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 600;
line-height: 16px (leading-4);
letter-spacing: -0.01em (tracking-tight);
color: Text-Secondary;

/* Button Hover (Light Mode) */
background: Backgrounds-highlight;
box-shadow:
  0px 1px 4px 0px rgba(0, 0, 0, 0.05),
  0px 8px 8px -2px rgba(0, 0, 0, 0.08),
  inset 0px 0px 0px 3px rgba(255, 255, 255, 1.00);

/* Button Hover (Dark Mode) */
background: Stroke-Highlight/50;  /* shade05-50/50 */
/* No shadow in dark mode */
```

#### Table Row - With Bottom Border
```css
/* Row Container */
padding: 16px (p-4);
border-bottom: 1.5px solid Stroke-Subtle/10;  /* Light mode */
border-bottom: 1.5px solid Stroke-Subtle;  /* Dark mode */
display: inline-flex;
align-items: center;
gap: 48px (gap-12);
```

#### Table Row - Skeleton Loading State

##### Skeleton Product Section
```css
/* Checkbox - same as normal */

/* Image Skeleton */
width: 64px (w-16);
height: 64px (h-16);
background: shade09-100 (light) / shade04-100 (dark);
border-radius: 12px (rounded-xl);

/* Title Bar */
width: 176px (w-44);
height: 8px (h-2);
background: shade09-100 (light) / shade04-100 (dark);
border-radius: 2px;

/* Subtitle Bar */
width: 80px (w-20);
height: 8px (h-2);
background: shade09-100 (light) / shade04-100 (dark);
border-radius: 2px;
```

##### Skeleton Data Cells
```css
/* Status Badge Skeleton */
width: 80px (w-20);
height: 28px (h-7);
/* Bar inside */
width: 56px (w-14);
height: 8px (h-2);
background: shade09-100 (light) / shade04-100 (dark);
border-radius: 2px;

/* Price/Sales/Views Skeleton */
width: 56px (w-14);
height: 24px (h-6);
/* Bar inside */
width: 56px (w-14);
height: 8px (h-2);
background: shade09-100 (light) / shade04-100 (dark);
border-radius: 2px;

/* Ratings Skeleton */
width: 96px (w-24);
height: 24px (h-6);
/* Bar inside */
width: 80px (w-20);
height: 8px (h-2);
background: shade09-100 (light) / shade04-100 (dark);
border-radius: 2px;
```

#### Mini Progress Bar (in Time Metrics)
```css
/* Container */
display: inline-flex;
flex-direction: column;
gap: 8px (gap-2);

/* Value Text */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 400;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Primary;

/* Progress Bar */
width: 100%;
height: 6px (h-1.5);
background: shade07-40/40;
border-radius: 1px;
position: relative;

/* Active Fill */
width: variable (e.g., 60%);
height: 6px (h-1.5);
background: Chart-Green;
border-radius: 1px;
position: absolute;
left: 0;
top: 0;
```

#### Implementation Notes
- Table container 1180px with 24px padding, rounded-3xl
- Header with 24px title (500 weight) + search (288px pill) + view toggle (grid/list icons)
- Column headers use 14px/600 semibold, Text-Secondary
- Row gap 48px between columns, 24px gap in hover state
- Product cell: checkbox + 64px image + title/subtitle with 4px gap
- Status badges: green for Online, red for Offline with 5% bg + 20% outline
- Hover state (light): Backgrounds-highlight + 3-layer shadow + zinc-100 outline
- Hover state (dark): Backgrounds-highlight + NO shadow + zinc-100 outline
- Action buttons appear on hover, replacing product subtitle
- Bottom border: Stroke-Subtle/10 (light) or Stroke-Subtle (dark)
- Skeleton uses shade09-100 (light) or shade04-100 (dark) for loading bars
- Mini progress bars: 6px height, Chart-Green fill, shade07-40/40 background
- Star ratings: amber-400 for filled, Text-Secondary for empty
- View toggle: active state has highlight bg + shadow + zinc-100 outline
- Search icon uses 10px circle + 6px handle with 1.5px outlines
- All text Inter Display with tracking-tight (-0.01em)

---

### 36. Product Grid View - Cards Layout

#### Grid Container
```css
/* Container */
width: 1180px (w-[1180px]);
display: flex;
flex-wrap: wrap;
justify-content: start;
align-items: start;
gap: 24px (gap-6);
content: start;
```

#### Product Card - Default State
```css
/* Card Container */
width: 373.33px (w-[373.33px]);
display: inline-flex;
flex-direction: column;
justify-content: start;
align-items: start;
gap: 16px (gap-4);
```

##### Product Image Container
```css
/* Image Wrapper */
width: 373.33px (w-[373.33px]);
height: 230px (h-[230px]);
position: relative;
border-radius: 24px (rounded-3xl);
overflow: hidden;

/* Product Image */
width: 100%;
height: 100%;
object-fit: cover;
src: placeholder;
```

##### Product Card Info
```css
/* Info Container */
align-self: stretch;
display: inline-flex;
flex-direction: column;
gap: 8px (gap-2);

/* Product Name */
font-family: 'Inter Display';
font-size: 20px (text-xl);
font-weight: 600;
line-height: 28px (leading-7);
letter-spacing: -0.01em (tracking-tight);
color: Text-Primary;
line-clamp: 1;
content: "Dashboard App Builder 1.0";

/* Category + Rating Row */
display: inline-flex;
justify-content: space-between;
align-items: center;

/* Category */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 400;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Secondary;
opacity: 0.8;
content: "UI Design Kit";

/* Rating Section */
display: inline-flex;
align-items: center;
gap: 8px (gap-2);

/* Star Icon (×5) */
width: 16px (w-4);
height: 16px (h-4);
color: #fbbf24;  /* amber-400 for filled */
color: Text-Secondary;  /* for empty */

/* Rating Count */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 400;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Secondary;
content: "(124)";
```

#### Product Card - Hover State
```css
/* Image Wrapper on Hover */
position: relative;

/* Hover Overlay */
width: 373.33px (w-[373.33px]);
height: 230px (h-[230px]);
position: absolute;
left: 0;
top: 0;
background: Backgrounds-dark1;
opacity: 0.3;
border-radius: 24px (rounded-3xl);
z-index: 1;

/* Checkbox on Hover */
width: 24px (w-6);
height: 24px (h-6);
position: absolute;
left: 16px;
top: 16px;
background: white;
border-radius: 8px (rounded-lg);
outline: 1.5px solid Stroke-Stroke2;
outline-offset: -1.5px;
z-index: 2;
```

##### Action Buttons (Below Image on Hover)
```css
/* Buttons Container */
align-self: stretch;
display: inline-flex;
justify-content: start;
align-items: start;
gap: 8px (gap-2);

/* Button */
flex: 1;
padding: 6px 12px (px-3 py-1.5);
border-radius: 12px (rounded-xl);
outline: 1.5px solid Stroke-Stroke2;
outline-offset: -1.5px;
display: flex;
justify-content: center;
align-items: center;
gap: 8px (gap-2);

/* Button Text */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 600;
line-height: 16px (leading-4);
letter-spacing: -0.01em (tracking-tight);
color: Text-Secondary;
content: "Edit" | "Delete" | "Unpublish";

/* Button Hover State (Light Mode) */
background: Backgrounds-highlight;
box-shadow:
  0px 1px 4px 0px rgba(0, 0, 0, 0.05),
  0px 8px 8px -2px rgba(0, 0, 0, 0.08),
  inset 0px 0px 0px 3px rgba(255, 255, 255, 1.00);

/* Button Hover State (Dark Mode) */
background: Stroke-Highlight/50;
/* No shadow */
```

##### Price Badge
```css
/* Container */
padding: 6px 12px (px-3 py-1.5);
background: green-600/5;
border-radius: 20px (rounded-[20px]);
outline: 1.5px solid green-600/20;
outline-offset: -1.5px;
display: inline-flex;
justify-content: center;
align-items: center;

/* Text */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 600;
line-height: 16px (leading-4);
letter-spacing: -0.01em (tracking-tight);
color: Primary-primary02;
content: "$48.00";
```

#### Grid Layout Patterns
```css
/* 3-column grid */
grid-template-columns: repeat(3, 373.33px);
gap: 24px (gap-6);

/* Card widths */
- Card width: 373.33px
- Image height: 230px
- Card gap (image to info): 16px
- Info internal gap: 8px
```

#### Implementation Notes
- Grid uses flex-wrap with 24px gap for 3-column layout
- Each card 373.33px wide with 24px gap (fits in 1180px container)
- Product image 373.33px × 230px with rounded-3xl corners
- Hover overlay: Backgrounds-dark1 at 30% opacity
- Checkbox appears on hover at top-left (16px, 16px) with white background
- Action buttons (Edit/Delete/Unpublish) appear below image on hover
- Product name 20px/600 with line-clamp-1 truncation
- Category text 14px/400 with 0.8 opacity
- Star ratings: amber-400 filled, Text-Secondary empty
- Price badge: green-600/5 bg + green-600/20 outline + Primary-primary02 text
- Category + Rating row uses space-between alignment
- All text Inter Display with tracking-tight
- Buttons use same hover styles as list view (highlight bg + shadows in light mode)

---

### 37. Comments/Reviews System - Threaded Layout

#### Comments Container
```css
/* Container */
width: auto;
display: inline-flex;
flex-direction: column;
justify-content: start;
align-items: start;
gap: 24px (gap-6);
```

#### Comment Item - Default
```css
/* Item Container */
align-self: stretch;
display: inline-flex;
align-items: start;
gap: 24px (gap-6);
position: relative;
```

##### Checkbox
```css
width: 24px (w-6);
height: 24px (h-6);
border-radius: 8px (rounded-lg);
outline: 1.5px solid Stroke-Stroke2;
outline-offset: -1.5px;
margin-top: 12px;  /* Aligns with avatar top */
```

##### User Avatar
```css
/* Avatar Container */
width: 48px (w-12);
height: 48px (h-12);
position: relative;
overflow: hidden;
border-radius: 80px (rounded-[80px]);

/* Avatar Image */
width: 100%;
height: 100%;
object-fit: cover;
src: placeholder;

/* Unread Indicator (green dot) */
width: 8px (w-2);
height: 8px (h-2);
position: absolute;
left: 38px;
top: 2px;
background: Primary-primary02;  /* Green */
border-radius: 9999px (rounded-full);
outline: 1.5px solid Backgrounds-surface1;
outline-offset: -0.75px;
z-index: 10;
```

##### Comment Content
```css
/* Content Container */
flex: 1;
display: inline-flex;
flex-direction: column;
gap: 16px (gap-4);
```

###### User Info Row
```css
/* Info Row Container */
align-self: stretch;
display: inline-flex;
justify-content: space-between;
align-items: center;

/* Left: User Info */
display: inline-flex;
align-items: center;
gap: 16px (gap-4);

/* Username */
font-family: 'Inter Display';
font-size: 16px (text-base);
font-weight: 600;
line-height: 24px (leading-6);
letter-spacing: -0.01em (tracking-tight);
color: Text-Primary;
content: "Juxtopposed";

/* Handle + Timestamp */
display: inline-flex;
align-items: center;
gap: 8px (gap-2);

/* @Handle */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 400;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Secondary;
opacity: 0.8;
content: "@juxtopposed";

/* Dot Separator */
width: 4px (w-1);
height: 4px (h-1);
background: Text-Secondary;
opacity: 0.8;
border-radius: 9999px (rounded-full);

/* Timestamp */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 400;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Secondary;
opacity: 0.8;
content: "2h";
```

###### Product Preview (Right Side)
```css
/* Preview Container */
width: 208px (w-52);
display: inline-flex;
align-items: center;
gap: 12px (gap-3);

/* Product Image */
width: 48px (w-12);
height: 48px (h-12);
border-radius: 8px (rounded-lg);
src: placeholder;

/* Product Info */
display: inline-flex;
flex-direction: column;
gap: 2px (gap-0.5);

/* Product Name */
width: 148px (w-37);
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 600;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Primary;
line-clamp: 1;
content: "Dashboard App Builder 1.0";

/* Product Price */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 400;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Secondary;
opacity: 0.8;
content: "$48.00";
```

###### Comment Text
```css
align-self: stretch;
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 400;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Primary;
content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...";
```

###### Action Buttons Row
```css
/* Buttons Container */
align-self: stretch;
display: inline-flex;
justify-content: start;
align-items: start;
gap: 8px (gap-2);

/* Button (Reply/Like/Remove) */
padding: 6px 12px (px-3 py-1.5);
border-radius: 12px (rounded-xl);
outline: 1.5px solid Stroke-Stroke2;
outline-offset: -1.5px;
display: inline-flex;
justify-content: center;
align-items: center;
gap: 8px (gap-2);

/* Button Icon */
width: 16px (w-4);
height: 16px (h-4);
color: Text-Secondary;

/* Button Text */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 600;
line-height: 16px (leading-4);
letter-spacing: -0.01em (tracking-tight);
color: Text-Secondary;
content: "Reply" | "Like" | "Remove";

/* Like Button with Count */
content: "Like · 2";

/* Button Hover (Light Mode) */
background: Backgrounds-highlight;
box-shadow:
  0px 1px 4px 0px rgba(0, 0, 0, 0.05),
  0px 8px 8px -2px rgba(0, 0, 0, 0.08),
  inset 0px 0px 0px 3px rgba(255, 255, 255, 1.00);

/* Button Hover (Dark Mode) */
background: Stroke-Highlight/50;
/* No shadow */
```

#### Nested Reply
```css
/* Reply Container */
padding-left: 96px (pl-24);  /* Indent for nesting */
display: inline-flex;
align-items: start;
gap: 24px (gap-6);
position: relative;
```

##### Reply Connector Line
```css
/* Connector Shape */
width: 8px (w-2);
height: 9px (h-[9px]);
position: absolute;
left: 58px;  /* Positioned from checkbox */
top: 36px;
border-radius: 1px;
outline: 1.5px solid Stroke-Stroke2;
outline-offset: -0.75px;

/* Visual: L-shaped connector from parent avatar to reply */
/* Creates visual thread connection */
```

#### Reply Input Form
```css
/* Form Container */
align-self: stretch;
padding-left: 96px (pl-24);
display: inline-flex;
flex-direction: column;
gap: 16px (gap-4);
```

##### Reply Input Field
```css
/* Input Container */
align-self: stretch;
padding: 12px 16px (px-4 py-3);
background: Backgrounds-surface1;
border-radius: 16px (rounded-2xl);
outline: 1.5px solid Stroke-Stroke2;
outline-offset: -1.5px;
display: inline-flex;
align-items: center;
gap: 12px (gap-3);

/* Input Text */
flex: 1;
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 400;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Secondary;
placeholder: "@juxtopposed ";

/* @Mention styling */
color: Primary-primary02;  /* Green for mentions */

/* Send Button */
width: 32px (w-8);
height: 32px (h-8);
padding: 8px (p-2);
background: linear-gradient(to bottom, #27272a, #27272a);  /* zinc-800 */
border-radius: 20px (rounded-[20px]);
display: inline-flex;
justify-content: center;
align-items: center;

/* Send Icon */
width: 16px (w-4);
height: 16px (h-4);
color: white;
```

#### Dark Mode Variants
```css
/* Comment item background (dark) */
background: Backgrounds-surface2;  /* Optional card background */

/* Borders (dark) */
outline: Stroke-Subtle;  /* Stronger borders */

/* Unread indicator outline (dark) */
outline-color: Backgrounds-surface2;  /* Matches dark background */

/* Connector line (dark) */
outline-color: Stroke-Subtle;
```

#### Implementation Notes
- Comments use 24px gap between items
- Checkbox 24×24px aligned with avatar top (12px margin-top)
- Avatar 48×48px rounded-full with optional green unread dot (8px, positioned 38px left, 2px top)
- User info row: username 16px/600 + handle/timestamp 14px/400 with 0.8 opacity
- Dot separator: 4px circle between handle and timestamp
- Product preview: 48px image + name/price (208px total width)
- Comment text 14px/400 with full stretch width
- Action buttons: Reply, Like (with count), Remove
- Nested replies indented 96px (pl-24) with L-shaped connector line
- Connector line: 8×9px at 58px left, 36px top with rounded outline
- Reply input: @mention in Primary-primary02 (green), zinc-800 send button
- Send button: 32×32px with 16px icon, rounded-[20px]
- Button hover: same 3-layer shadow system as other components (light mode only)
- All text Inter Display with tracking-tight
- Unread indicator has 1.5px outline matching surface background
- Product preview uses gap-3 (12px) between image and info

---

### 38. Scheduled Products Table - Simplified Layout

#### Table Container
```css
/* Container */
width: auto;
padding: 24px (p-6);
background: Backgrounds-surface1;
border-radius: 24px (rounded-3xl);
outline: 1.5px solid Stroke-Stroke2;
outline-offset: -1.5px;
display: inline-flex;
flex-direction: column;
gap: 24px (gap-6);
```

#### Table Header
```css
/* Header Container */
align-self: stretch;
display: inline-flex;
justify-content: space-between;
align-items: center;
```

##### Header Title
```css
font-family: 'Inter Display';
font-size: 20px (text-xl);
font-weight: 600;
line-height: 28px (leading-7);
letter-spacing: -0.01em (tracking-tight);
color: Text-Primary;
content: "5 scheduled products";
```

##### Header Actions
```css
/* Actions Container */
display: inline-flex;
justify-content: end;
align-items: start;
gap: 12px (gap-3);
```

###### Search Input
```css
/* Same as Products Table search */
width: 288px (w-72);
padding: 10px 20px (px-5 py-2.5);
background: Backgrounds-surface1;
border-radius: 32px (rounded-[32px]);
outline: 1.5px solid Stroke-Stroke2;
outline-offset: -1.5px;
display: flex;
align-items: center;
gap: 8px (gap-2);

/* Search Icon + Input */
/* Same styling as Block #35 */
```

###### Sort Dropdown
```css
/* Dropdown Container */
width: 176px (w-44);
padding: 10px 20px (px-5 py-2.5);
background: Backgrounds-surface1;
border-radius: 32px (rounded-[32px]);
outline: 1.5px solid Stroke-Stroke2;
outline-offset: -1.5px;
display: inline-flex;
justify-content: space-between;
align-items: center;
gap: 8px (gap-2);

/* Dropdown Text */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 400;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Primary;
content: "Newest first";

/* Chevron Icon */
width: 24px (w-6);
height: 24px (h-6);
color: Text-Secondary;

/* Chevron Shape */
width: 12px (w-3);
height: 12px (h-3);
left: 6px;
top: 8.50px;
outline: 1.5px;
outline-offset: -0.75px;
/* Rotated 45° to create down-pointing chevron */
```

#### Table Row - Default State
```css
/* Row Container */
align-self: stretch;
padding: 16px (p-4);
display: inline-flex;
align-items: center;
gap: 48px (gap-12);
```

##### Product Section
```css
/* Container */
display: inline-flex;
align-items: center;
gap: 24px (gap-6);

/* Checkbox */
width: 24px (w-6);
height: 24px (h-6);
border-radius: 8px (rounded-lg);
outline: 1.5px solid Stroke-Stroke2;
outline-offset: -1.5px;

/* Product Image */
width: 64px (w-16);
height: 64px (h-16);
border-radius: 12px (rounded-xl);
src: placeholder;

/* Product Info */
display: inline-flex;
flex-direction: column;
gap: 4px (gap-1);

/* Product Title */
font-family: 'Inter Display';
font-size: 16px (text-base);
font-weight: 600;
line-height: 24px (leading-6);
letter-spacing: -0.01em (tracking-tight);
color: Text-Primary;
content: "Dashboard App Builder 1.0";

/* Product Category */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 400;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Secondary;
opacity: 0.8;
content: "UI Design Kit";
```

##### Price Badge
```css
/* Container */
padding: 6px 12px (px-3 py-1.5);
background: green-600/5;
border-radius: 20px (rounded-[20px]);
outline: 1.5px solid green-600/20;
outline-offset: -1.5px;

/* Text */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 600;
line-height: 16px (leading-4);
letter-spacing: -0.01em (tracking-tight);
color: Primary-primary02;
content: "$48.00";
```

##### Scheduled DateTime
```css
/* Container */
display: inline-flex;
flex-direction: column;
gap: 4px (gap-1);

/* Date */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 400;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Primary;
content: "Dec 24, 2024";

/* Time */
font-family: 'Inter Display';
font-size: 14px (text-sm);
font-weight: 400;
line-height: 20px (leading-5);
letter-spacing: -0.01em (tracking-tight);
color: Text-Secondary;
opacity: 0.8;
content: "2:00 PM";
```

#### Table Row - Hover State
```css
/* Same hover styling as Products Table */
padding: 16px (p-4);
background: Backgrounds-highlight;
border-radius: 16px (rounded-2xl);
outline: 1.5px solid zinc-100;
outline-offset: -1.5px;
box-shadow:
  0px 1px 4px 0px rgba(0, 0, 0, 0.05),
  0px 8px 8px -2px rgba(0, 0, 0, 0.08),
  inset 0px 0px 0px 3px rgba(255, 255, 255, 1.00);

/* Action buttons appear, replacing product category */
```

#### Table Row - Skeleton Loading
```css
/* Same skeleton pattern as Products Table */
/* Image: 64×64px shade09-100/shade04-100 */
/* Title bar: 176×8px */
/* Category bar: 80×8px */
/* Price badge skeleton: 80×28px with 56×8px bar */
/* DateTime skeleton: 2 bars 96×8px stacked with 4px gap */
```

#### Implementation Notes
- Simplified table with 3 main columns: Product, Price, Scheduled DateTime
- Header title 20px/600 (smaller than full Products table)
- Sort dropdown 176px with "Newest first" text + chevron icon
- Search input 288px (same as Products table)
- Row structure: checkbox + 64px image + title/category + price badge + date/time
- DateTime column: date (Text-Primary) + time (Text-Secondary with 0.8 opacity)
- Gap between columns: 48px (gap-12)
- Hover state: same as Products table with action buttons
- Action buttons replace category text on hover
- Price badge: green-600/5 bg + green-600/20 outline
- Skeleton loading uses same pattern as Products table
- All text Inter Display with tracking-tight
- Container padding 24px with rounded-3xl
- Chevron icon 12×12px rotated 45° for dropdown indicator

---

**Последнее обновление**: Блок #38
**Статус**: В процессе сборки
**Добавлено**: File Download Card (#34) - 664px card з archive icon (4 bars), file info, download button; Products Table - List View (#35) - 1180px table з header (24px title, 288px search, grid/list view toggle), table columns (Product, Status, Price, Sales, Ratings, Views), multiple row states (default, hover з action buttons, bottom border, skeleton loading), mini progress bars, star ratings, status badges (Online/Offline); Product Grid View (#36) - 373.33px cards у 3-column flex-wrap grid, hover overlay (Backgrounds-dark1 30% opacity), checkbox на hover (top-left), action buttons (Edit/Delete/Unpublish), price badge, star ratings, product info з line-clamp; Comments/Reviews System (#37) - threaded layout з checkbox, 48px avatar з unread indicator (8px green dot), user info (username 16px/600, @handle, timestamp), product preview (48px image + name/price), comment text, action buttons (Reply, Like з count, Remove), nested replies з 96px indent, L-shaped connector line (8×9px), reply input з @mention styling (Primary-primary02), zinc-800 send button; Scheduled Products Table (#38) - simplified layout з header (20px/600 title "5 scheduled products", 288px search, 176px sort dropdown "Newest first" з chevron icon), table rows (checkbox, 64px image, title/category, price badge, scheduled datetime: date + time з 4px gap), hover state з action buttons, skeleton loading states
