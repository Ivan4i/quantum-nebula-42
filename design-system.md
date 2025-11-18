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

/* Pending */
--pending-bg: rgba(245, 158, 11, 0.05);     /* amber-500/5 */
--pending-border: rgba(245, 158, 11, 0.20); /* amber-500/20 */
--pending-text: #f59e0b;                     /* amber-500 */

/* Closed / Neutral */
--closed-bg: rgba(shade07, 0.10);           /* shade07-10/10 */
--closed-border: rgba(shade08, 0.10);       /* shade08-10/10 */
--closed-text: Text-Secondary;
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
--stroke-highlight: /* Highlight border для interactive элементов (50% opacity) */

/* Shades */
--shade01-100: /* white - для иконок на цветном фоне */
--shade04-50: /* с opacity-50 - скелетоны */
--shade04-100: /* для dark mode OAuth button */
--shade05-30: /* с opacity-30 - icon background dark mode active */
--shade07-10: /* с opacity-10 - Closed badge background */
--shade07-20: /* с opacity-20 - icon background light mode active */
--shade07-40: /* с opacity-40 - графики (Social media) */
--shade07-50: /* с opacity-50 - input borders default */
--shade07-60: /* с opacity-60 - графики (Direct) паттерн */
--shade08-10: /* с opacity-10 - Closed badge border */
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

#### Transaction Table Card
- **Width**: 592px
- **Background**: Backgrounds-surface2
- **Radius**: 32px
- **Shadow**: --shadow-card-1 + --shadow-card-2
- **Border**: 1.5px outline, offset -1.5px
- **Gap**: 12px (gap-3) между секциями
- **Overflow**: hidden
- **Dark Mode Variant**:
  - Border: outline-white (вместо default)
  - Shadow: 0px 5px 1.5px -4px rgba(8,8,8,0.50) (более заметная вторая тень)

#### Transaction Table Header Section
- **Padding**: 12px
- **Layout**: space-between
- **Title Section**:
  - Padding-left: 20px
  - Title: 20px semibold, leading-28px, Text-Primary
- **Search Input** (embedded):
  - Width: 288px (w-72)
  - Padding: 12px (left), 20px (right), 12px (y)
  - Radius: 90px
  - Background: Backgrounds-surface1
  - Font: 14px, Text-Secondary
  - Icon: 24×24px search icon (left)
  - **Light Mode (True)**: no border
  - **Dark Mode (False)**: border 1.5px Stroke-Subtle

#### Transaction Table Structure
- **Container Padding**: 16px (horizontal), 16px (bottom)
- **Header Row**:
  - Padding: 16px
  - Border-bottom: 1.5px Stroke-Subtle/10 (light mode)
  - Border-bottom: 1.5px Stroke-Subtle (dark mode)
  - Font: 12px, Text-Tertiary, opacity-80
  - Gap: 20px (gap-5) между колонками
- **Data Row**:
  - Padding: 16px
  - Border-bottom: 1.5px Stroke-Subtle/10 (light mode)
  - Border-bottom: 1.5px Stroke-Subtle (dark mode)
  - Font: 14px
  - Line-height: 20px (leading-5)
- **Last Row** (skeleton loading): no border

#### Transaction Table Columns
- **Date Column**: 128px (w-32)
  - Layout: horizontal, gap 4px
  - Date: Text-Primary, line-clamp-1
  - Time: Text-Secondary, line-clamp-1
- **Status Column**: 112px (w-28)
  - Contains status badge
- **Earnings Column**: 96px (w-24)
  - Text: Text-Primary, line-clamp-1
  - Align: left
- **Fee Column**: 56px (w-14)
  - Text: Text-Secondary, line-clamp-1
  - Align: left
- **Net Column**: 80px (w-20)
  - Text: Text-Primary, line-clamp-1
  - Align: right

#### Transaction Status Badge
- **Height**: 28px (h-7)
- **Padding**: 8px (x), 2px (y - py-0.5)
- **Radius**: 8px (rounded-lg)
- **Border**: 1.5px outline, offset -1.5px
- **Font**: 14px semibold, leading-16px (leading-4)
- **Layout**: center aligned, gap 8px (если с иконкой)
- **Variants**:
  - **Pending**:
    - Background: rgba(245, 158, 11, 0.05) /* amber-500/5 */
    - Border: rgba(245, 158, 11, 0.20) /* amber-500/20 */
    - Text: #f59e0b /* amber-500 */
  - **Succeeded**:
    - Background: rgba(22, 163, 74, 0.05) /* green-600/5 */
    - Border: rgba(22, 163, 74, 0.20) /* green-600/20 */
    - Text: Primary-primary02
  - **Paid**:
    - Background: rgba(22, 163, 74, 0.05) /* green-600/5 */
    - Border: rgba(22, 163, 74, 0.20) /* green-600/20 */
    - Text: Primary-primary02

#### Transaction Skeleton Row
- **Structure**: same column widths as data rows
- **Skeleton Bar**:
  - Height: 8px (h-2)
  - Rounded: 4px (rounded)
  - Vertical position: centered (top-[8px] or top-[10px])
- **Colors**:
  - Light Mode: shade09-100
  - Dark Mode: shade04-100
- **Bar Widths**:
  - Date: 112px (w-28)
  - Status: 64px (w-16)
  - Earnings: 64px (w-16)
  - Fee: 36px (w-9)
  - Net: 48px (w-12, right-aligned at 39px offset)

#### Product Order Table
- **Width**: 1180px
- **Container Padding**: 16px (horizontal), 32px (bottom - pb-8)
- **Gap**: 24px (gap-6) между Product и остальными колонками
- **Layout**:
  - Product section: 384px (w-96)
  - Flex-1 container для остальных колонок (space-between)

#### Product Order Table Header
- **Padding**: 16px
- **Border-bottom**: 1.5px Stroke-Subtle/10 (light mode) или Stroke-Subtle (dark mode)
- **Gap**: 24px (gap-6) - matches data row gap
- **Font**: 12px, Text-Tertiary, opacity-80
- **Checkbox**: 24×24px, border-2 Stroke-Stroke2
- **Columns**:
  - Product: 384px (checkbox + label)
  - Status: 112px (w-28)
  - Price: 80px (w-20)
  - Time: 112px (w-28)
  - Customer: 192px (w-48)

#### Product Order Table Row
- **Padding**: 16px
- **Gap**: 24px (gap-6) между секциями
- **Height**: 64px (data row) или auto (skeleton)
- **States**:
  - **Default (Light Mode)**:
    - Background: transparent
    - Border-bottom: none
  - **Default (Dark Mode)**:
    - Background: transparent
    - Border-bottom: none
  - **Hover (Light Mode)**:
    - Background: Backgrounds-highlight
    - Radius: 16px (rounded-2xl)
    - Shadow: --shadow-hover-1 + --shadow-hover-2 + --shadow-hover-inset (3 layers)
    - Border: 1.5px zinc-100
    - Action buttons появляются
  - **Hover (Dark Mode)**:
    - Background: Backgrounds-highlight
    - Radius: 16px (rounded-2xl)
    - Border: 1.5px zinc-100
    - NO shadows (отличие от light mode)
    - Checkbox border: Stroke-Highlight/50
    - Action buttons появляются
  - **Underline (Divider row)**:
    - Border-bottom: 1.5px Stroke-Subtle/10 (light mode)
    - Border-bottom: 1.5px Stroke-Subtle (dark mode)

#### Product Cell (Enhanced)
- **Width**: 384px (w-96)
- **Height**: 64px (h-16)
- **Gap**: 20px (gap-5) между элементами
- **Checkbox**: 24×24px, border-2, rounded-md
- **Product Image**: 64×64px, rounded-xl
- **Content Section**:
  - Title: 16px (text-base) semibold, leading-24px (leading-6), Text-Primary, line-clamp-1
  - Subtitle: 14px, Text-Secondary, opacity-80
- **With Action Buttons** (показываются при hover):
  - Subtitle заменяется на row actions
  - Buttons появляются с левым отступом -4px

#### Row Action Buttons
- **Height**: 24px (h-6)
- **Padding**: 4px (left - pl-1), 6px (right - pr-1.5), 4px (y - py-1)
- **Radius**: 6px (rounded-md)
- **Gap**: 8px (gap-2) между кнопками, 4px (gap-1) между иконкой и текстом
- **Font**: 14px semibold, leading-16px (leading-4)
- **Icon**: 16×16px (w-4 h-4), stroke 1.5px, offset -0.75px
- **States**:
  - **Default**:
    - Background: transparent
    - Text: Text-Secondary, opacity-80
    - Icon: Text-Secondary
  - **Hover**:
    - Background: transparent
    - Border: 1.5px Stroke-Stroke2
    - Text: Text-Primary, opacity-80
    - Icon: Text-Primary
- **Button Types**:
  - Detail: eye icon
  - Refund: arrow return icon
  - Decline: X icon

#### Product Order Status Badge
- **Height**: 28px
- **Padding**: 8px (x), 6px (y - py-1.5)
- **Radius**: 8px (rounded-lg)
- **Border**: 1.5px outline, offset -1.5px
- **Font**: 14px semibold, leading-16px (leading-4)
- **Variants**:
  - **Succeeded**:
    - Background: rgba(22, 163, 74, 0.05) /* green-600/5 */
    - Border: rgba(22, 163, 74, 0.20) /* green-600/20 */
    - Text: Primary-primary02
  - **In progress** (Pending):
    - Background: rgba(245, 158, 11, 0.05) /* amber-500/5 */
    - Border: rgba(245, 158, 11, 0.20) /* amber-500/20 */
    - Text: #f59e0b /* amber-500 */
  - **Closed** (новый neutral variant):
    - Background: rgba(shade07, 0.10) /* shade07-10/10 */
    - Border: rgba(shade08, 0.10) /* shade08-10/10 */
    - Text: Text-Secondary

#### Product Order Table Columns (Data)
- **Product Column**: 384px (w-96)
  - Checkbox + Image + Title/Subtitle or Action Buttons
- **Status Column**: 112px (w-28)
  - Status badge
- **Price Column**: 80px (w-20)
  - Text: Text-Primary, 14px, line-clamp-1
- **Time Column**: 112px (w-28)
  - Text: Text-Primary, 14px, line-clamp-1
  - Format: "14 Mar, 3:15 PM"
- **Customer Column**: 192px (w-48)
  - Avatar: 36×36px (w-9 h-9), rounded-[64px]
  - Name: 112px (w-28), Text-Primary, 14px, line-clamp-1
  - Gap: 12px (gap-3) между avatar и name

#### Product Order Skeleton Row
- **Structure**: same layout as data row
- **Skeleton Elements**:
  - Checkbox: 24×24px, opacity-80, rounded-md
  - Product Image: 64×64px, rounded-xl
  - Product Title Lines: 2 lines
    - Line 1: 96px (w-24), height 8px (h-2)
    - Line 2: 160px (w-40), height 8px (h-2)
    - Gap: 8px (gap-2)
    - Vertical offset: 12px from top
  - Status: 64px (w-16), height 8px (h-2)
  - Price: 48px (w-12), height 8px (h-2)
  - Time: 112px (w-28), height 8px (h-2)
  - Customer Avatar: 36×36px, rounded-[64px]
  - Customer Name: 64px (w-16), height 8px (h-2)
- **Colors**:
  - Light Mode: shade09-100
  - Dark Mode: shade04-100
- **All skeleton bars**: rounded 4px (rounded)

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
| Transaction table | 592px |
| Product order table | 1180px |
| Button (icon) | 48×48px |
| Row action button | 24px height |
| Input (height) | 48px |
| Search (width) | 288-360px |
| Chip (min-width) | 208px |
| Avatar (XL) | 64×64px |
| Avatar (L) | 48×48px |
| Avatar (M) | 32×32px |
| Avatar (S) | 20×20px |
| Customer avatar | 36×36px |
| Icon (default) | 24×24px |
| Icon (small) | 16×16px |
| Badge (height) | 20px |
| Trend badge | auto |
| Transaction status badge | 28px |
| Product status badge | 28px |
| Checkbox | 24×24px |
| Unread dot | 12×12px |
| Online indicator | 12×12px |
| Avatar (w/ status) | 44×44px |
| Settings icon | 44×44px |
| List item (height) | 64px |
| Table row (height) | 64px |
| Settings panel | 384px |

---

**Последнее обновление**: Блок #19
**Статус**: В процессе сборки
**Добавлено**: Product Order Table (1180px), Product Cell with checkbox (384px × 64px), Row Action Buttons (Detail/Refund/Decline), Product Order Status Badge (Succeeded/In progress/Closed), Customer Avatar (36×36px), Product Order Skeleton Row, Closed/Neutral status variant (shade07-10, shade08-10), Stroke-Highlight token, Enhanced table hover states with action buttons
