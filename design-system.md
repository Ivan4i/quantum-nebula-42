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
--primary-primary01: /* Blue accent - используется для курсора, фокуса */
--primary-primary02: /* Green accent - используется в трендах вверх, Active badges */
--primary-primary03: /* Red accent - используется для Offline badges, ошибок */
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

### Background Colors (Extended)
```css
/* Additional Backgrounds */
--bg-pop: /* Backgrounds-pop - для dark mode category tags */
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

### 16. Request Cards

#### Request Card (Wide - Grid Layout)
- **Width**: 596px
- **Radius**: 32px (rounded-[32px])
- **Background**: shade09-30/30
- **Border**: 1px outline Stroke-Stroke2, offset -1px
- **Structure**:
  - **Header**:
    - Padding: 20px (p-5)
    - Background: Backgrounds-surface2
    - Border-bottom: 1.5px Stroke-Subtle/10
    - Layout: horizontal, gap 16px
    - Product Image: 80×80px (w-20 h-20), rounded-xl
    - Status Badge: "In progress" variant
    - Title: 20px (text-xl) semibold, leading-28px, line-clamp-1
  - **Body**:
    - Layout: 2-column grid
    - Each cell: padding 20px (p-5)
    - Borders: right 1.5px, bottom 1.5px, Stroke-Subtle/10
- **Dark Mode Variant**:
  - Shadow: --shadow-card-1 + --shadow-card-2
  - Header: bg-shade03-90/90, border-Stroke-Subtle
  - Body: bg-shade02-100
  - Borders: Stroke-Subtle (without opacity)

#### Request Card (Narrow - Stack Layout)
- **Width**: 320px (w-80)
- **Radius**: 20px (rounded-[20px])
- **Background**: shade09-30/30
- **Border**: 1px outline Stroke-Stroke2, offset -1px
- **Structure**:
  - **Header**:
    - Padding: 12px (p-3)
    - Background: Backgrounds-surface2
    - Border-bottom: 1.5px Stroke-Subtle/10
    - Layout: horizontal, gap 16px
    - Product Image: 64×64px (w-16 h-16), rounded-xl
    - Status Badge: "In progress" variant
    - Title: 20px (text-xl) semibold, leading-28px, line-clamp-1
  - **Body**:
    - Layout: single column stack
    - Each row: padding 12px (p-3)
    - Border-bottom: 1.5px Stroke-Subtle/10
- **Dark Mode Variant**: Same as Wide card

#### Request Card (Extra Wide - Stack Layout)
- **Width**: 600px
- **Radius**: 32px (rounded-[32px])
- **Background**: shade09-30/30
- **Border**: 1px outline Stroke-Stroke2, offset -1px
- **Structure**:
  - **Header**:
    - Padding: 32px (p-8)
    - Background: Backgrounds-surface2
    - Border-bottom: 1.5px Stroke-Subtle/10
    - Layout: horizontal, gap 32px
    - Product Image: 80×80px (w-20 h-20), rounded-xl
    - Status Badge: "In progress" variant
    - Title: 24px (text-2xl) medium, leading-36px, line-clamp-1
  - **Body**:
    - Layout: single column stack
    - Each row: padding 32px (x), 20px (y) - px-8 py-5
    - Border-bottom: 1.5px Stroke-Subtle/10
- **Dark Mode Variant**: Same as Wide card

#### Request Card Data Fields
- **Field Label**: 14px normal, leading-20px, Text-Secondary
- **Field Value**: 14px semibold, leading-16px, Text-Primary
- **Special Value Types**:
  - **Date**: format "Aug 20, 2044" or "July 01, 2044"
  - **Code**: 14px bold for Purchase code
  - **Price**: 14px semibold
  - **Status Badge**: For "Product downloaded" field
    - Yes: green-600/5 bg, green-600/20 border, Primary-primary02 text
    - data-status="Succeeded"
- **Info Icon** (для Market fee, Price):
  - Size: 20×20px (w-5 h-5)
  - Icon: circle with "i"
  - Color: gray-500
  - Position: next to label

#### Request Card Fields Structure
Standard fields displayed:
1. **Request send**: Date value
2. **Reason**: Text value (e.g., "Download link is broken")
3. **Product downloaded**: Badge value (Yes/No)
4. **Purchase date**: Date value
5. **Purchase code**: Bold code value
6. **Request ID**: Code value
7. **Market fee**: Price with info icon
8. **Price**: Price with info icon

---

### 17. Interactions Card (Statistics)

#### Interactions Card
- **Width**: 320px (w-80)
- **Padding**: 12px (x), 12px (top), 24px (bottom) - px-3 pt-3 pb-6
- **Background**: Backgrounds-surface2
- **Radius**: 32px (rounded-[32px])
- **Shadow**: --shadow-card-1 + --shadow-card-2
- **Border**: 1.5px outline, offset -1.5px
- **Layout**: flex-col, gap 16px
- **Variant**: First card has fixed height 320px (h-80)

#### Card Header
- **Height**: 48px (h-12)
- **Padding**: 12px (x), 10px (y) - px-3 py-2.5
- **Title**: "Interactions"
  - Font: 20px (text-xl) semibold
  - Line height: 28px (leading-7)
  - Color: Text-Primary
- **Layout**: horizontal, gap 8px

#### Card Body
- **Padding**: 12px (px-3)
- **Gap**: 24px (gap-6) between sections
- **Inner container**: gap 20px (gap-5) between items

#### Interaction Item
- **Layout**: horizontal, gap 16px
- **Components**:
  - Icon container (left)
  - Content area (flex-1, right)
- **Gap**: 20px (gap-5) between items

#### Icon Container
- **Size**: 40×40px (w-10 h-10)
- **Background**: Backgrounds-surface1
- **Radius**: 40px (rounded-[40px])
- **Icon**: 16×16px (w-4 h-4)
  - Position: absolute, left-[11px] top-[11px] (centered)
  - Color: Text-Primary
  - Stroke: 1.5px outline, offset -0.75px
- **Icon Types**:
  - **Posts**: User profile + message bubble icon
  - **Videos**: Play button + camera icon
  - **Newsletter**: Stacked document icon
  - **Social**: Share/network nodes icon

#### Content Area
- **Layout**: flex-col, gap 8px (gap-2)
- **Components**:
  - Label row (top)
  - Progress bar (bottom)

#### Label Row
- **Layout**: justify-between, items-center
- **Left Side**: Category name + count
  - **Primary text**: 16px (text-base) semibold, leading-24px, Text-Primary
  - **Count text**: 16px (text-base) semibold, leading-24px, Text-Secondary
  - Format: "Posts (1,235)" or "Videos (80)"
- **Right Side**: Percentage
  - Font: 16px (text-base) semibold, leading-24px
  - Color: Text-Primary
  - Examples: "40.8%", "23.6%", "10.7%", "1.25%"

#### Progress Bar
- **Height**: 12px (h-3)
- **Background**: shade09-100
- **Radius**: 2px (rounded-sm)
- **Layout**: 2-segment gradient bar
  - **Segment 1**:
    - Gradient: from-neutral-200/30 to-neutral-500/30
    - Radius: rounded-tl-sm rounded-bl-sm
  - **Segment 2**:
    - Gradient: from-neutral-200/30 to-neutral-500/30
    - Radius: rounded-tr-sm rounded-br-sm
- **Widths vary** by percentage (examples):
  - Posts (40.8%): w-28 + w-16 (112px + 64px)
  - Videos (23.6%): w-16 + w-24 (64px + 96px)
  - Newsletter (10.7%): w-16 + w-20 (64px + 80px)
  - Social (1.25%): w-5 + w-8 (20px + 32px)

#### Interaction Types (Standard Set)
1. **Posts**:
   - Icon: User profile + message
   - Example: 1,235 items, 40.8%
2. **Videos**:
   - Icon: Play button + camera
   - Example: 80 items, 23.6%
3. **Newsletter**:
   - Icon: Stacked documents
   - Example: 136 items, 10.7%
4. **Social**:
   - Icon: Network/share nodes
   - Example: 566 items, 1.25%

---

### 18. Insights Cards (Metrics Dashboard)

#### Insights Card (Wide - 1560px)
- **Width**: 1560px
- **Padding**: 12px (p-3)
- **Background**: Backgrounds-surface2
- **Radius**: 32px (rounded-[32px])
- **Shadow**: --shadow-card-1 + --shadow-card-2
- **Border**: 1.5px outline, offset -1.5px
- **Layout**: flex-col, gap 8px (gap-2)
- **Structure**:
  - **Header**: Title + Dropdown filter
  - **Body**: 3 metrics in row, gap 64px (gap-16)

#### Insights Card (Medium - 916px)
- **Width**: 916px
- **Padding**: 12px (p-3)
- **Background**: Backgrounds-surface2
- **Radius**: 32px
- **Shadow**: --shadow-card-1 + --shadow-card-2
- **Border**: 1.5px outline, offset -1.5px
- **Layout**: flex-col, gap 8px (gap-2)
- **Body**: 3 metrics with overflow, gap 44px (gap-11)
- **Fade Overlay**: Positioned at right edge

#### Insights Card (Narrow - 320px)
- **Width**: 320px (w-80)
- **Padding**: 12px (p-3)
- **Background**: Backgrounds-surface2
- **Radius**: 32px
- **Shadow**: --shadow-card-1 + --shadow-card-2
- **Border**: 1.5px outline, offset -1.5px
- **Layout**: flex-col with horizontal scroll
- **Body**: 3 metrics without icons, gap 32px (gap-8)
- **Dropdown**: Hidden (opacity-0)
- **Fade Overlay**: Positioned at right edge

#### Header Section
- **Layout**: justify-between, items-center
- **Left Side**: Title "Insights"
  - Padding: 20px (x) - px-5
  - Height: 48px (h-12)
  - Font: 20px (text-xl) semibold, leading-28px
  - Color: Text-Primary
- **Right Side**: Dropdown filter (optional)
  - Width: 160px (w-40), max-width 176px (max-w-44)
  - Height: 48px (h-12)
  - Padding: 20px (left), 12px (right), 12px (y) - pl-5 pr-3 py-3
  - Radius: 90px (rounded-[90px])
  - Border: 1.5px Stroke-Stroke2, offset -1.5px
  - Text: "Last 7 days" (14px, Text-Secondary)
  - Chevron: 24×24px, rotated 90deg

#### Body Section (Wide/Medium)
- **Padding**: 20px (p-5)
- **Layout**: inline-flex
- **Gap**:
  - Wide: 64px (gap-16)
  - Medium: 44px (gap-11)
  - Narrow: 32px (gap-8)

#### Body Section (Narrow)
- **Padding**: 12px (p-3)
- **Content width**: 876px (allows horizontal scroll)
- **No icon containers** in narrow variant

#### Metric Item
- **Layout**: flex-1, gap 20px (gap-5)
- **Components**:
  - Icon container (left, optional)
  - Content area (right, flex-1)

#### Icon Container (Wide/Medium only)
- **Size**: 48×48px (w-12)
- **Background**:
  - **Default**: Backgrounds-surface1
  - **Hover State**: Backgrounds-highlight
- **Padding**: 12px (p-3)
- **Radius**: 32px (rounded-[32px])
- **Layout**: flex-col, justify-between (space-between)
- **Icons**:
  - **Top Icon**: 24×24px (w-6 h-6)
    - Color: Text-Primary
    - Stroke: 1.5px, offset -0.75px
  - **Bottom Icon**: 24×24px, opacity-50
    - Color: Text-Secondary
    - Decorative/secondary indicator

#### Metric Icon Types
- **Product views**: Shopping bag + chart icon
- **Engagement rate**: Cursor click + chart icon
- **Interactions**: Chat bubbles + chart icon

#### Content Area
- **Layout**: flex-col
- **Components**:
  - Title row
  - Main value
  - Trend badge + comparison text
  - Secondary metrics (right aligned)

#### Title Row
- **Height**: 24px (h-6)
- **Layout**: horizontal, gap 8px
- **Title**:
  - Font: 16px (text-base) semibold, leading-24px
  - Color: Text-Primary
  - Line clamp: 1

#### Main Value
- **Font**: 60px (text-6xl) medium
- **Line height**: 75px (leading-[75px])
- **Color**: Text-Primary
- **Examples**: "106k", "12.6%", "59.9K"

#### Trend Badge & Comparison
- **Layout**: inline-flex, gap 8px (gap-2)
- **Gap below main value**: 12px (gap-3)
- **Trend Badge**:
  - Padding: 8px (x), 6px (y) - px-2 py-1.5
  - Background: green-600/5 (success)
  - Border: 1.5px green-600/20, offset -1.5px
  - Radius: 8px (rounded-lg)
  - Gap: 4px (gap-1)
  - **Icon**: 16×16px (w-4 h-4)
    - Arrow up (rotated 180deg for uptrend)
    - Color: Primary-primary02
    - Stroke: 1.5px, offset -0.75px
  - **Text**: 14px semibold, Primary-primary02
  - **Attribute**: data-trend="up"
- **Comparison Text**:
  - Font: 14px (text-sm) normal, leading-20px
  - Color: Text-Tertiary
  - Content: "vs last year"

#### Secondary Metrics (Right Column)
- **Layout**: flex-col, justify-between, items-end
- **Padding-top**: 12px (pt-3)
- **Gap**: space-between (auto)
- **Metric Row**:
  - **Label**: 12px (text-xs), Text-Tertiary, right aligned
  - **Value Container**: horizontal, gap 4px
    - **Icon** (optional): 24×24px, Primary-primary02 arrow
    - **Value**: 20px (text-xl) semibold, Text-Primary, right aligned

#### Secondary Metric Examples
1. **New customers**:
   - Label: "New customers"
   - Value: "42.6%" with uptrend arrow
2. **Product reached**:
   - Label: "Product reached"
   - Value: "34,002" (no icon)

#### Fade Overlay (for overflow variants)
- **Width**: 64px (w-16)
- **Height**: 192px (h-48)
- **Position**: absolute
  - Medium: left-[853px] top-[60px]
  - Narrow: left-[287px] top-[60px]
- **Gradient**:
  - **Light Mode**: from-white to-white/0 (left to right)
  - **Dark Mode**: from-zinc-900 to-zinc-900/0 (left to right)
- **Direction**: gradient-to-l (from right)

#### Dark Mode Variant
- **Card border**: outline-white instead of default
- **Shadow**: --shadow-card-2 with rgba(8,8,8,0.50)
- **Icon backgrounds**: Backgrounds-highlight
- **Fade gradient**: zinc-900 colors

---

### 19. Toggle Switches

#### Toggle Switch (Standard)
- **Width**: 44px (w-11)
- **Height**: 24px (h-6)
- **Padding**: 2px (p-0.5)
- **Radius**: 32px (rounded-[32px])
- **Toggle Knob**: 20×20px (w-5 h-5)
  - Radius: 24px (rounded-3xl)
  - Shadows: Multi-layer
    - 0px 2px 4px 0px rgba(0,0,0,0.20)
    - inset 0px -1px 1px 0px rgba(0,0,0,0.10)

#### Toggle States

**ON State (Dark Mode):**
- **Background**: gradient zinc-800 → zinc-800
- **Border**: 1.5px white/40, offset -1.5px
- **Shadow**: inset 2px 0px 8px 2px rgba(248,248,248,0.20)
- **Knob Position**: justify-end (right)
- **Knob Color**: neutral-50 (white)
- **Knob Shadow**: inset 0px 2px 2px rgba(255,255,255,1.00)

**ON State (Light Mode):**
- **Background**: gradient neutral-200 → zinc-100
- **Border**: 1.5px white/40, offset -1.5px
- **Shadow**: inset 2px 0px 8px 2px rgba(248,248,248,0.20)
- **Knob Position**: justify-end (right)
- **Knob Color**: shade04-100
- **Knob Shadow**: inset 0px 2px 2px rgba(255,255,255,0.05)

**ON State (Alternative - Pressed):**
- **Background**: gradient zinc-300 → gray-200
- **Border**: 1.5px white/40, offset -1.5px
- **Shadow**: inset 2px 0px 8px 1px rgba(248,248,248,0.19)
- **Knob Position**: justify-end (right)
- **Knob Color**: shade02-100
- **Knob Shadow**: inset 0px 2px 2px rgba(255,255,255,0.12)

**OFF State:**
- **Background**: Backgrounds-surface1 or Backgrounds-surface2-(on-overlay)
- **Border**: 1.5px Stroke-Stroke2, offset -1.5px
- **Shadow**: inset 2px 0px 8px 2px rgba(248,248,248,0.05)
- **Knob Position**: justify-start (left)
- **Knob Color**: neutral-50 (white)
- **Knob Shadow**: inset 0px 2px 2px rgba(255,255,255,1.00)

---

### 20. Navigation & Menu Items

#### Navigation Item (Sidebar/Menu)
- **Height**: 48px (h-12)
- **Padding**: 12px (p-3)
- **Radius**: 16px (rounded-2xl)
- **Layout**: horizontal, gap 16px
- **Components**:
  - Icon: 24×24px
  - Label: 14px semibold

#### Navigation Item States

**Default:**
- **Background**: transparent
- **Icon**: Text-Secondary
- **Text**: Text-Secondary, 14px semibold

**Hover (Light Mode):**
- **Background**: Backgrounds-pop
- **Radius**: 16px (rounded-2xl)
- **Shadow**: Multi-layer
  - 0px 1px 4px 0px rgba(0,0,0,0.05)
  - 0px 8px 8px -2px rgba(0,0,0,0.08)
  - inset 0px 0px 0px 3px rgba(255,255,255,1.00)
- **Border**: 1px zinc-100, offset -1px
- **Icon**: Text-Primary
- **Text**: Text-Primary, 14px semibold

**Active:**
- **Background**: Backgrounds-pop
- **Radius**: 16px (rounded-2xl)
- **Icon**: Text-Primary
- **Text**: Text-Primary, 14px semibold

#### Navigation Icon
- **Size**: 24×24px (w-6 h-6)
- **Stroke**: 1.5px, offset -0.75px
- **Examples**: User profile, Pin/Location icon

---

### 21. Search Results / Product List Cards

#### Search Results Container
- **Width**: 384px (w-96)
- **Padding**: 12px (p-3)
- **Background**: Backgrounds-surface2
- **Radius**: 32px (rounded-[32px])
- **Shadow**: Multi-layer KPI shadows
  - 0px 5px 1.5px -4px rgba(8,8,8,0.09)
  - 0px 6px 4px -4px rgba(8,8,8,0.05)
  - 0px 6px 13px 0px rgba(8,8,8,0.03)
  - 0px 24px 24px -16px rgba(8,8,8,0.04)
  - 0px 2.15px 0.5px -2px rgba(0,0,0,0.25)
  - 0px 0px 10px 0px rgba(0,0,0,0.05)
- **Border**: 1px outline Stroke-Subtle/10, offset -1px
- **Gap**: 12px (gap-3) between sections

#### Dark Mode Variant
- **Shadow**: Enhanced dark shadows
  - 0px 5px 1.5px -4px rgba(8,8,8,0.09)
  - 0px 6px 4px -4px rgba(8,8,8,0.05)
  - 0px 6px 13px 0px rgba(8,8,8,0.03)
  - 0px 24px 24px -16px rgba(8,8,8,0.04)
  - 0px 2.15px 0.5px -2px rgba(0,0,0,0.80)
  - 0px 0px 10px 0px rgba(0,0,0,1.00)
  - inset 0px 0px 12px 4px rgba(250,250,250,0.05)
- **Border**: 1px outline Stroke-Stroke2, offset -1px

#### Section Header
- **Padding**: 12px (p-3)
- **Text**: "Best match" / "Suggestions"
  - Font: 14px (text-sm) normal, leading-20px
  - Color: Text-Secondary

#### Product List Item
- **Padding**: 12px (p-3)
- **Radius**: 20px (rounded-[20px])
- **Layout**: justify-start, gap 32px (gap-8)
- **States**: default, hover

#### Product List Item - Default State
- **Background**: transparent
- **Product Info**:
  - Image: 64×64px (w-16 h-16), rounded-xl
  - Title: 16px semibold, Text-Primary, flex-1
- **Price Info** (right aligned):
  - Price: 16px semibold, Text-Primary
  - Status Badge: 24px height (h-6)

#### Product List Item - Hover State (Light Mode)
- **Background**: Backgrounds-highlight
- **Radius**: 20px (rounded-[20px])
- **Shadow**: Multi-layer
  - 0px 1px 4px 0px rgba(0,0,0,0.05)
  - 0px 8px 8px -2px rgba(0,0,0,0.08)
  - inset 0px 0px 0px 3px rgba(255,255,255,1.00)
- **Border**: 1.5px zinc-100, offset -1.5px

#### Product List Item - Hover State (Dark Mode)
- **Background**: Backgrounds-highlight
- **Radius**: 20px (rounded-[20px])
- **Border**: 1.5px zinc-100, offset -1.5px
- **NO shadows** (отличие от light mode)

#### Product Status Badges
- **Height**: 24px (h-6)
- **Padding**: 8px (x), 2px (y) - px-2 py-0.5
- **Radius**: 8px (rounded-lg)
- **Font**: 12px (text-xs) normal, leading-20px

**Active Status:**
- **Background**: green-600/5
- **Border**: 1.5px green-600/20, offset -1.5px
- **Text**: Primary-primary02
- **Content**: "Active"
- **Attribute**: data-state="Active"

**Offline/Deactive Status:**
- **Background**: red-400/5
- **Border**: 1.5px red-400/20, offset -1.5px
- **Text**: red-400
- **Content**: "Offline"
- **Attribute**: data-state="Deactive"

#### Suggestion List Item
- **Padding**: 12px (p-3)
- **Radius**: 20px (rounded-[20px])
- **Layout**: horizontal, gap 32px (gap-8)
- **Components**:
  - Avatar: 64×64px, rounded-xl (overflow), image rounded-[64px]
  - User Info: flex-col, gap 4px
  - Action Button: 48×48px circular

#### User Info (Suggestion)
- **Name**: 16px semibold, Text-Primary
- **Role**: 12px normal, Text-Secondary
- **Layout**: flex-col, gap 4px (gap-1)

#### Action Button (Arrow)
- **Size**: 48×48px (w-12 h-12)
- **Padding**: 20px (p-5) - визуальный padding
- **Radius**: 96px (rounded-[96px]) - полностью круглый
- **Border**: 1.5px Stroke-Stroke2, offset -1.5px
- **Icon**: 24×24px arrow right
  - Color: Text-Secondary
  - Stroke: 1.5px, offset -0.75px
- **Attribute**: data-property-1="default"

---

### 22. Author Profile Card

#### Author Profile Card
- **Padding**: 32px (p-8)
- **Background**: Backgrounds-surface2
- **Radius**: 32px (rounded-[32px])
- **Layout**: flex-col, gap 32px
- **Structure**:
  - **Header Section**: User info + Status badge
  - **Gallery Section**: 4 portfolio images
  - **Footer Section**: Category tags + Response time

#### Header Section
- **Layout**: justify-between, items-start
- **Left Side**: Avatar + User info
- **Right Side**: Status badge
- **Gap**: 20px between avatar and user info

#### Avatar with Online Status
- **Container**: 56×56px (w-14 h-14)
- **Background**: Backgrounds-surface1
- **Radius**: 44px (rounded-[44px])
- **Image**: 64×64px (w-16 h-16)
  - Position: absolute, left-0 top-0
  - Radius: 64px (rounded-[64px])
  - Extends beyond container
- **Online Indicator**:
  - Size: 16×16px (w-4 h-4)
  - Position: absolute, left-[42px] top-[42px]
  - Background: Primary-primary02
  - Radius: full (rounded-full)
  - Border: 3px Backgrounds-surface2

#### User Info
- **Width**: 320px (w-80)
- **Layout**: flex-col
- **Username**:
  - Format: "@maximus"
  - Font: 20px (text-xl) semibold
  - Line height: 28px (leading-7)
  - Color: Text-Primary
- **Bio/Tagline**:
  - Font: 14px (text-sm) normal
  - Line height: 20px (leading-5)
  - Color: Text-Secondary
  - Example: "Dream Big. Think Different. Do Great!"

#### Status Badge (Top Creator)
- **Variant**: Success/Green style
- **Padding**: 8px (x), 6px (y) - px-2 py-1.5
- **Background**: green-600/5
- **Border**: 1.5px outline, green-600/20, offset -1.5px
- **Radius**: 8px (rounded-lg)
- **Text**: 14px semibold, leading-16px, Primary-primary02
- **Content**: "Top #1 creator"
- **Attribute**: data-status="Succeeded"

#### Gallery/Portfolio Section
- **Layout**: inline-flex, gap 16px
- **Images**: 4 images, each flex-1
- **Image Specs**:
  - Height: 192px (h-48)
  - Width: flex-1 (equal distribution, ~262px each)
  - Radius: 16px (rounded-2xl)
  - Object-fit: cover (assumed)

#### Footer Section
- **Layout**: justify-between, items-center
- **Left Side**: Category tags
- **Right Side**: Response time text

#### Category Tags
- **Height**: 24px (h-6)
- **Padding**: 12px (x), 6px (y) - px-3 py-1.5
- **Radius**: 8px (rounded-md)
- **Gap**: 8px (gap-2) between tags
- **Background**:
  - **Light Mode**: Backgrounds-surface1
  - **Dark Mode**: Backgrounds-pop
- **Text**:
  - Font: 12px (text-xs) normal
  - Line height: 20px (leading-5)
  - Color: Text-Secondary
  - Alignment: center
- **Examples**: "Mobile App", "3D Illustrations", "UI Design Kit", "Fonts"

#### Response Time Info
- **Font**: 14px (text-sm) normal
- **Line height**: 20px (leading-5)
- **Color**: Text-Secondary
- **Opacity**: 0.8 (opacity-80)
- **Example**: "Average response time in 20 mins"

#### Mode Variants
- **Light Mode** (data-light-mode="true"):
  - Tags background: Backgrounds-surface1
- **Dark Mode** (data-light-mode="false"):
  - Tags background: Backgrounds-pop

---

### 23. Buttons & Action Components

#### Gradient Button (Text + Icon)
- **Height**: 44px (h-11)
- **Padding**: 28px (x), 16px (y) - px-7 py-4
- **Radius**: 32px (rounded-[32px])
- **Layout**: inline-flex, gap 16px (gap-4)
- **Font**: 14px (text-sm) semibold, leading-16px
- **Icon**: 24×24px (w-6 h-6)
- **Text**: "Create" or similar action
- **Variants**:

**Dark Variant (Light Mode):**
- **Background**: gradient zinc-800 → zinc-800
- **Border**: 1.5px white/40, offset -1.5px
- **Shadow**: inset 2px 0px 8px 2px rgba(248,248,248,0.20)
- **Text Color**: Text-Light (white)
- **Icon Color**: Text-Light (white)

**Light Variant (Dark Mode):**
- **Background**: gradient white → neutral-200
- **Border**: 1.5px white/60, offset -1.5px
- **Shadow**: inset 2px 0px 8px 2px rgba(24,24,24,0.20)
- **Text Color**: Text-Primary (dark)
- **Icon Color**: Text-Primary (dark)

#### Gradient Icon Button (Icon Only)
- **Size**: 48×48px (w-12 h-12)
- **Padding**: 12px (p-3)
- **Radius**: 32px (rounded-[32px])
- **Icon**: 24×24px (w-6 h-6) centered
- **Variants**: Same as Gradient Button (Dark/Light)

**Dark Variant:**
- **Background**: gradient zinc-800 → zinc-800
- **Border**: 1.5px white/40, offset -1.5px
- **Shadow**: inset 2px 0px 8px 2px rgba(248,248,248,0.20)
- **Icon**: Text-Light, stroke 1.5px, offset -0.75px

**Light Variant:**
- **Background**: gradient white → neutral-200
- **Border**: 1.5px white/60, offset -1.5px
- **Shadow**: inset 2px 0px 8px 2px rgba(24,24,24,0.20)
- **Icon**: Text-Primary, stroke 1.5px, offset -0.75px

#### Icon Button (Wide - with Border)
- **Width**: 192px (w-48)
- **Height**: 48px (h-12)
- **Padding**: 12px (p-3)
- **Radius**: 90px (rounded-[90px])
- **Border**: 1.5px Stroke-Stroke2, offset -1.5px
- **Background**: transparent or Backgrounds-surface1
- **Icon**: 24×24px (w-6 h-6)
  - Color: Text-Secondary
  - Stroke: 1.5px, offset -0.75px
- **Layout**: center aligned
- **States**: default, hover, active

#### Circular Arrow Button (Large)
- **Size**: 64×64px (w-16 h-16)
- **Padding**: 20px (p-5) - визуальный padding
- **Radius**: 96px (rounded-[96px]) - полностью круглый
- **Border**: 1.5px Stroke-Stroke2, offset -1.5px
- **Background**: transparent or Backgrounds-surface1
- **Icon**: 24×24px arrow
  - Color: Text-Secondary
  - Stroke: 1.5px, offset -0.75px
- **States**:

**Default:**
- **Background**: transparent or Backgrounds-surface1
- **Border**: 1.5px Stroke-Stroke2
- **Icon**: Text-Secondary

**Hover:**
- **Background**: Backgrounds-highlight
- **Border**: 1.5px Stroke-Stroke2
- **Icon**: Text-Primary
- **Shadow**: hover shadows (3 layers)

**Disabled:**
- **Opacity**: 0.3 (opacity-30)
- **Background**: transparent or Backgrounds-surface1
- **Border**: 1.5px Stroke-Stroke2
- **Icon**: Text-Secondary
- **Cursor**: not-allowed

#### Avatar Placeholder (Circle)
- **Size**: 48×48px (w-12 h-12)
- **Radius**: 64px (rounded-[64px]) or rounded-full
- **Layout**: flex, center aligned
- **Variants**:

**With Border:**
- **Background**: Backgrounds-surface1 or Backgrounds-surface2
- **Border**: 1.5px Stroke-Stroke2, offset -1.5px
- **Icon** (optional): 24×24px user profile icon
  - Color: Text-Secondary
  - Stroke: 1.5px, offset -0.75px

**Without Border:**
- **Background**: Backgrounds-surface1
- **Border**: none
- **Icon** (optional): 24×24px user profile icon
  - Color: Text-Secondary
  - Stroke: 1.5px, offset -0.75px

---

### 24. Search Input States & Variants

#### Search Input (Comprehensive States)
- **Width**: 240px (w-60) standard
- **Height**: 48px
- **Padding**: 12px (left), 20px (right), 12px (y) - pl-3 pr-5 py-3
- **Radius**: 90px (rounded-[90px])
- **Font**: 14px normal, leading-20px
- **Icon**: 24×24px search icon (left side)
- **Text**: "Search products" placeholder

#### Search Input States

**Default (No Border):**
- **Background**: Backgrounds-surface1
- **Border**: none
- **Icon**: Text-Secondary
- **Placeholder**: Text-Secondary, 14px normal

**Default (With Border - Dark Mode):**
- **Background**: Backgrounds-surface1
- **Border**: 1.5px outline Stroke-Subtle/10, offset -1.5px
- **Icon**: Text-Secondary
- **Placeholder**: Text-Secondary, 14px normal

**Disabled:**
- **Opacity**: 0.5 (opacity-50)
- **Background**: Backgrounds-surface1
- **Border**: none
- **Icon**: Text-Secondary
- **Placeholder**: Text-Secondary
- **Cursor**: not-allowed

**Hover/Elevated:**
- **Background**: Backgrounds-surface2
- **Border**: 1.5px outline Stroke-Stroke2, offset -1.5px
- **Shadow**: KPI shadows (6 layers)
  - 0px 5px 1.5px -4px rgba(8,8,8,0.09)
  - 0px 6px 4px -4px rgba(8,8,8,0.05)
  - 0px 6px 13px 0px rgba(8,8,8,0.03)
  - 0px 24px 24px -16px rgba(8,8,8,0.04)
  - 0px 2.15px 0.5px -2px rgba(0,0,0,0.25)
- **Backdrop blur**: 32px (backdrop-blur-[32px])
- **Icon**: Text-Secondary

**Placeholder with Cursor:**
- **Background**: Backgrounds-surface2
- **Border**: 1.5px outline Stroke-Stroke2, offset -1.5px
- **Placeholder**: Text-Secondary, opacity-50
- **Cursor**: 0×16px line, Primary-primary01 outline 1.5px, offset -0.75px
- **Position**: Cursor at left-[44px] top-[16px]

**Focused (Light Mode):**
- **Background**: Backgrounds-surface2
- **Border**: 1.5px outline Stroke-Stroke2, offset -1.5px
- **Shadow**: Inset shadows
  - inset 0px 0px 0px 3px rgba(255,255,255,1.00)
  - inset 0px 4px 4px 0px rgba(157,157,157,0.10)
- **Icon**: Text-Blue (search icon becomes blue)
- **Text**: Text-Primary (entered text)
- **Cursor**: 0×16px line, Primary-primary01
- **Layout**: justify-between (when clear button appears)

**Focused (Dark Mode):**
- **Background**: Backgrounds-surface2
- **Border**: 1.5px outline Stroke-Stroke2, offset -1.5px
- **Shadow**: Inset shadows
  - inset 0px 0px 0px 3px rgba(40,40,40,0.10)
  - inset 0px 4px 4px 0px rgba(18,18,18,0.81)
- **Icon**: Text-Blue
- **Text**: Text-Primary
- **Cursor**: 0×16px line, Primary-primary01

**Focused with Clear Button:**
- **Same as Focused state** plus:
- **Clear Button**: 24×24px icon (right side)
  - Icon: X/close icon (w-5 h-5)
  - Position: left-[2.75px] top-[2.75px] within 24px container
  - Color: Text-Secondary
  - Stroke: 1.5px, offset -0.75px
- **Layout**: justify-between

---

### 25. Time Indicators & Progress

#### Time + Progress Indicator
- **Layout**: inline-flex, gap 8px (gap-2)
- **Padding**: 2px (y) - py-0.5
- **Radius**: 8px (rounded-lg)
- **Components**:
  - Time text (left)
  - Progress bar (right)

#### Time Text
- **Width**: 32px (w-8)
- **Font**: 14px (text-sm) normal, leading-20px
- **Color**: Text-Primary
- **Alignment**: justify-start
- **Content**: Duration format (e.g., "48m")

#### Inline Progress Bar (Small)
- **Width**: 32px (w-8)
- **Height**: 6px (h-1.5)
- **Background**: shade07-40/40
- **Radius**: 2px (rounded-sm)
- **Filled Portion**:
  - Background: Chart-Green
  - Radius: rounded-sm
  - Width: varies by percentage (w-6, w-5, w-3, w-1)
  - Position: left-0 top-0

#### Progress Bar Width Variants
- **75% progress**: w-6 (24px of 32px)
- **62.5% progress**: w-5 (20px of 32px)
- **37.5% progress**: w-3 (12px of 32px)
- **12.5% progress**: w-1 (4px of 32px)

---

### 26. Table Headers & Toolbars

#### Dashboard/Table Header
- **Width**: 1180px (or container width)
- **Padding**: 12px (p-3)
- **Layout**: justify-between, items-center
- **Structure**:
  - **Left Side**: Title + Search input
  - **Right Side**: Tab filters or Action buttons

#### Header Title Section
- **Height**: 48px (h-12)
- **Padding**: 20px left (pl-5)
- **Layout**: horizontal, gap 24px (gap-6)
- **Title**:
  - Font: 20px (text-xl) semibold, leading-28px
  - Color: Text-Primary
  - Examples: "Products", "4 products selected"
- **Search Input**:
  - Width: 288px (w-72)
  - Standard search input component
  - Attribute: data-light-mode="True", data-state="default"

#### Selection State Header (Bulk Actions)
- **Title**: Shows count (e.g., "4 products selected")
- **Deselect Button**:
  - Padding: 28px (x), 14px (y) - px-7 py-3.5
  - Radius: 32px (rounded-[32px])
  - Border: 1.5px outline Stroke-Stroke2, offset -1.5px
  - Text: 14px semibold, Text-Secondary, center aligned
  - Content: "Deselect"

#### Bulk Action Buttons
- **Layout**: horizontal, gap 12px (gap-3)
- **Button Style**:
  - Padding: 28px (x), 12px (y) - px-7 py-3
  - Radius: 32px (rounded-[32px])
  - Border: 1.5px outline Stroke-Stroke2, offset -1.5px
  - Text: 14px semibold, Text-Secondary, center aligned
  - Examples: "Delete", "Set status"
- **States**: default (shown), hover, active

---

### 27. Status Badges (Extended)

#### Status Badge - Offline/Error Variant
- **Padding**: 8px (x), 6px (y) - px-2 py-1.5
- **Background**: red-600/5
- **Border**: 1.5px outline red-600/20, offset -1.5px
- **Radius**: 8px (rounded-lg)
- **Text**:
  - Font: 14px semibold, leading-16px
  - Color: Primary-primary03 (red)
  - Content: "Offline"
- **Layout**: inline-flex, center aligned, gap 8px (gap-2)

#### Status Badge - Active/Success Variant (Detailed)
- **Padding**: 8px (x), 6px (y) - px-2 py-1.5
- **Background**: green-600/5
- **Border**: 1.5px outline green-600/20, offset -1.5px
- **Radius**: 8px (rounded-lg)
- **Text**:
  - Font: 14px semibold, leading-16px
  - Color: Primary-primary02 (green)
  - Content: "Active"
- **Layout**: inline-flex, center aligned, gap 8px (gap-2)

---

### 28. Table Header Row (Detailed)

#### Table Header Row
- **Width**: 1148px (container width)
- **Padding**: 16px (p-4)
- **Border-bottom**: 1.5px Stroke-Subtle/10
- **Layout**: inline-flex, gap 24px (gap-6), justify-start
- **Overflow**: hidden

#### Header Structure
- **Left Section**: Checkbox + "Product" label (384px, w-96)
  - Layout: horizontal, gap 20px (gap-5)
- **Right Section**: Column headers (flex-1)
  - Layout: justify-between, items-center
  - Padding: 8px (y) - py-2

#### Checkbox Column
- **Checkbox**: 24×24px
  - Status attribute: data-status="placeholder"
  - Container: relative overflow-hidden
  - Element: 24×24px at left-0 top-0
  - Border: 2px Stroke-Stroke2, rounded-md
- **Label**: "Product"
  - Font: 12px (text-xs) normal, leading-20px
  - Color: Text-Tertiary
  - Opacity: 0.8 (opacity-80)

#### Column Headers (Standard)
- **Font**: 12px (text-xs) normal, leading-20px
- **Color**: Text-Tertiary
- **Opacity**: 0.8 (opacity-80)
- **Layout**: flex-col or inline-flex, gap 10px (gap-2.5)
- **Alignment**: justify-start, items-start

#### Column Widths
- **Product**: 384px (w-96) - includes checkbox
- **Status**: 80px (w-20)
- **Price**: 56px (w-14)
- **Sales**: 144px (w-36)
- **Views**: 96px (w-24)
- **Like**: 96px (w-24)

---

### 29. Action Buttons (Small/Compact)

#### Delete Button (Compact)
- **Padding**: 4px (left), 6px (right), 4px (y) - pl-1 pr-1.5 py-1
- **Radius**: 6px (rounded-md)
- **Layout**: inline-flex, gap 4px (gap-1)
- **Icon**: 16×16px (w-4 h-4)
  - Inner icon: 12×12px (w-3 h-3)
  - Position: left-[1.83px] top-[1.83px]
  - Stroke: 1.5px, offset -0.75px
- **Text**: 14px semibold, leading-16px
- **Opacity**: 0.8 (opacity-80) on text

#### Delete Button States

**Default:**
- **Background**: transparent
- **Border**: none
- **Icon**: Text-Secondary
- **Text**: Text-Secondary, opacity-80

**Active/Hover:**
- **Background**: transparent
- **Border**: 1.5px outline Stroke-Stroke2, offset -1.5px
- **Icon**: Text-Primary
- **Text**: Text-Primary, opacity-80

---

### 30. Checkbox States (Extended)

#### Checkbox (Unchecked)
- **Size**: 24×24px (w-6 h-6)
- **Border**: 2px Stroke-Stroke2
- **Radius**: 6px (rounded-md)
- **Background**: transparent
- **State**: data-status="placeholder"

#### Checkbox (Checked/Indeterminate)
- **Size**: 24×24px (w-6 h-6)
- **Border**: 2px Primary-primary01
- **Opacity**: 0.3 (opacity-30) on border
- **Radius**: 6px (rounded-md)
- **Inner Fill**:
  - Size: 16×16px (w-4 h-4)
  - Position: left-[4px] top-[4px] (centered)
  - Background: Primary-primary01
  - Radius: 4px (rounded-sm)
  - No opacity (full opacity)

---

### 31. Special Effects

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
| Request Card (Wide) | 596px |
| Request Card (Extra Wide) | 600px |
| Request Card (Narrow) | 320px |
| Author Profile Avatar | 64×64px |
| Author Profile Avatar Container | 56×56px |
| Online Indicator (Author) | 16×16px |
| Category Tag (height) | 24px |
| Portfolio Image (height) | 192px |
| Interactions Card | 320px |
| Interaction Icon Container | 40×40px |
| Interaction Icon | 16×16px |
| Interaction Progress Bar (height) | 12px |
| Insights Card (Wide) | 1560px |
| Insights Card (Medium) | 916px |
| Insights Card (Narrow) | 320px |
| Insights Icon Container | 48×48px |
| Insights Main Value | 60px (text) |
| Insights Trend Badge Icon | 16×16px |
| Insights Secondary Value | 20px (text) |
| Insights Fade Overlay | 64×192px |
| Toggle Switch | 44×24px |
| Toggle Knob | 20×20px |
| Navigation Item (height) | 48px |
| Navigation Icon | 24×24px |
| Search Results Container | 384px |
| Product List Item Image | 64×64px |
| Product Status Badge (height) | 24px |
| Suggestion Avatar | 64×64px |
| Action Button (Arrow) | 48×48px |
| Gradient Button (text) | 44px (height) |
| Gradient Icon Button | 48×48px |
| Icon Button (Wide) | 192×48px |
| Circular Arrow Button (Large) | 64×64px |
| Avatar Placeholder | 48×48px |
| Search Input (standard) | 240×48px |
| Search Input (wide) | 288×48px |
| Time + Progress Indicator | 32px (each element) |
| Inline Progress Bar (small) | 32×6px |
| Dashboard Header | 1180px (width) |
| Bulk Action Button | auto×48px |
| Deselect Button | auto×48px |
| Status Badge (Offline) | auto×24px |
| Table Header Row | 1148px (width) |
| Table Header Checkbox | 24×24px |
| Delete Button (compact) | auto (16×16px icon) |
| Checkbox (checked inner fill) | 16×16px |

---

**Последнее обновление**: Блок #25
**Статус**: В процессе сборки
**Добавлено**: Table Header Row (1148px detailed structure with checkbox + column headers: Product, Status, Price, Sales, Views, Like - all with specific widths and 12px text-xs styling), Action Buttons Small/Compact (Delete button with 16×16px icon, 6px radius, default and active/hover states), Checkbox States Extended (unchecked with Stroke-Stroke2 border, checked/indeterminate with Primary-primary01 border at opacity-30 + 16×16px inner fill)
