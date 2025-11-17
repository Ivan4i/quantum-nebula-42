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

### Dashboard Colors
```css
/* KPI Icons */
--bg-pop: /* Icon container background (альтернатива surface1) */

/* Heatmap */
--shade04-50: /* с opacity-50 - heatmap light mode base */
--shade08-70: /* с opacity-70 - heatmap dark mode base */
--shade05-100: /* Dark mode progress bars */
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

#### Data Table (Product Table)
Комплексная таблица данных с поддержкой поиска, фильтрации, сортировки и множественных responsive layouts.

##### Table Header Section
Полный хедер таблицы с поиском, фильтрами и легендой.

###### Header Layout
- **Structure**: vertical stack, gap-20px
- **Top Row**: Title + Search + Tab Filters
- **Bottom Row**: Legend / Key

###### Search Input (Header)
- **Width**: 288px (collapsed)
- **Height**: 48px
- **Padding**: 12px (left for icon), 20px (right)
- **Radius**: 90px
- **Background**: Backgrounds-surface1
- **Icon**: 24×24px Search icon (left aligned)
- **Font**: 14px Text-Secondary
- **States**:
  - Default: icon only visible, no input visible
  - Expanded: 360px width with input field

###### Tab Filters (Header)
- **Container**: horizontal flex, gap-4px
- **Tab Button**:
  - Height: 48px
  - Padding: 24px (x), 12px (y)
  - Radius: 48px (rounded-full)
  - Font: 14px semibold
  - Gap: 4px между табами
  - **States**:
    - **Default**:
      - Background: transparent
      - Text: Text-Secondary
      - Border: none
    - **Active**:
      - Background: transparent
      - Border: 1.5px Stroke-Stroke2
      - Text: Text-Primary
  - **Tab Variants**: Market, Traffic sources, Viewers, etc.

###### Table Legend / Key
- **Layout**: horizontal, gap-12px
- **Legend Item**:
  - Gap: 8px между indicator и label
  - **Color Indicator**:
    - Size: 12×12px (w-3 h-3)
    - Radius: rounded-[1px]
    - Colors:
      - Followers: bg-Chart-Green
      - Others: bg-shade08-100 или gradient (from-shade08-100 to-shade09-100)
  - **Label**:
    - Font: 12px
    - Color: Text-Tertiary
    - Text: "Followers", "Others", etc.

###### Table Title
- **Font**: 20px semibold, leading-28px
- **Color**: Text-Primary
- **Position**: left aligned в header row

##### Table Structure
- **Container**: full width
- **Border**: none на внешнем контейнере
- **Background**: transparent
- **Spacing**: 16px между header и первой строкой

##### Table Rows (Default)
Используется компонент Product List Item (см. Product List Item section) с интеграцией в табличную структуру.

- **Row Padding**: 16px (p-4)
- **Row Gap**: 0 (строки идут вплотную)
- **Row Border**:
  - **Variant 1**: border-bottom 1.5px Stroke-Subtle/10 (subtle divider)
  - **Variant 2**: border-bottom 1.5px Stroke-Subtle (visible divider)
  - **Variant 3 (Hover/Selected)**: no border, использует radius + shadows

##### Table Row Content Layout
См. Product List Item для детальной структуры. Основные элементы:
- **Checkbox**: 24×24px, rounded-md, border-2 Stroke-Stroke2
- **Product Image**: 64×64px, rounded-xl
- **Product Info**: Title (16px semibold) + Subtitle/Actions (14px)
- **Stats Block**: Value + Trend Badge
- **Progress Bar**: Chart visualization с Followers/Others

##### Table Row States
- **Default**:
  - Background: transparent
  - Border-bottom: 1.5px Stroke-Subtle/10 или Stroke-Subtle
  - No radius, no shadows

- **Hover (Property-2="True" / with shadows)**:
  - Background: Backgrounds-highlight
  - Radius: 16px (rounded-2xl) или 20px (для 375px)
  - Shadow: 3 layers
    - 0px 1px 4px 0px rgba(0, 0, 0, 0.05)
    - 0px 8px 8px -2px rgba(0, 0, 0, 0.08)
    - inset 0px 0px 0px 3px rgba(255, 255, 255, 1.00)
  - Border: 1.5px outline zinc-100, offset -1.5px
  - Border-bottom удаляется
  - Action buttons (Edit, Delete, Share) появляются

- **Hover (Property-2="False" / no shadows)**:
  - Background: Backgrounds-highlight
  - Radius: 16px (rounded-2xl)
  - Border: 1.5px outline zinc-100, offset -1.5px
  - Border-bottom удаляется
  - NO shadows (компактный вариант для 375px)

- **Underline Variant**:
  - Border-bottom: 1.5px Stroke-Subtle (более заметный divider)
  - Background: transparent
  - No radius, no hover effects

- **Selected**:
  - Checkbox: checked state, border-2 Stroke-Highlight/50
  - Progress bar может быть dimmed (opacity-5)
  - Row визуально выделена через checkbox

##### Action Buttons (Appear on Hover)
- **Container**: horizontal flex, gap-8px
- **Button**:
  - Padding: 4px (left), 6px (right), 4px (y)
  - Radius: 6px (rounded-md)
  - Background: transparent
  - Border: none (default)
  - Gap: 4px между icon и text
  - **Icon**: 16×16px, Text-Secondary
  - **Text**: 14px semibold, Text-Secondary, opacity-80
  - **Hover**:
    - Border: 1.5px Stroke-Stroke2
    - Text: Text-Primary (full opacity)
  - **Variants**:
    - Edit: pen icon
    - Delete: trash icon
    - Share: share icon

##### Responsive Table Layouts

###### Desktop (1920px)
- **Total Width**: ~1528px
- **Left Section (Product)**: 512px (w-[512px])
- **Stats + Progress Gap**: 176px (gap-44)
- **Stats Block**: 144px (w-36)
- **Progress Bar**: full width variants

###### Tablet (1024px)
- **Total Width**: ~884px
- **Left Section (Product)**: 320px (w-80)
- **Stats + Progress Gap**: 24px (gap-6)
- **Stats Block**: 144px (w-36)
- **Progress Bar**: smaller widths

###### Mobile Landscape (768px)
- **Total Width**: ~628px
- **Left Section (Product)**: 320px (w-80)
- **Right Section**: vertical stack
  - Stats на top
  - Progress на bottom
  - Gap: 8px (gap-2)

###### Mobile Portrait (375px)
- **Total Width**: 288px (w-72)
- **Layout**: compact vertical
- **Padding**: 16px (p-4)
- **Radius**: 20px (на hover)
- **Elements stack vertically**
- **Progress Bar**: smaller segments

##### Chart Tooltip Component
Tooltip для отображения детальных данных при hover на графиках и progress bars.

###### Tooltip Structure
- **Padding**: 8px (x), 6px (y)
- **Radius**: 6px (rounded-md)
- **Background**: Backgrounds-dark1
- **Font**: 12px semibold
- **Color**: Text-Light
- **Layout**: vertical stack, gap-4px (для нескольких значений)

###### Tooltip Content
- **Single Value**:
  - Format: "Label: Value"
  - Example: "Followers: 640,128"
- **Multiple Values**:
  - Each line: Label + Value
  - Gap: 4px между строками
  - Example:
    - "Followers: 640,128"
    - "Others: 234,567"

###### Tooltip Arrow
- **Size**: 8px (width) × 4px (height)
- **Shape**: triangle (border trick или SVG)
- **Color**: matches Backgrounds-dark1
- **Position**: bottom center или top center (зависит от placement)

###### Tooltip Positioning
- **Trigger**: hover на progress bar segment
- **Placement**: above the element
- **Offset**: 8px от trigger element
- **Arrow**: points to center of trigger

###### Tooltip States
- **Hidden**: opacity-0, pointer-events-none
- **Visible**: opacity-100, smooth transition (150ms)

##### Light Mode vs Dark Mode

###### Light Mode (data-light-mode="True")
- **Row Background**: transparent → Backgrounds-highlight (hover)
- **Row Border**: zinc-100 (hover)
- **Shadows**: 3 layers на hover (если Property-2="True")
- **Text**: Text-Primary, Text-Secondary
- **Progress Bars**: стандартные цвета

###### Dark Mode (data-light-mode="False")
- **Row Background**: transparent → Backgrounds-highlight (hover)
- **Row Border**: zinc-100 (hover)
- **Shadows**: NO shadows на hover (отличие от light mode)
- **Text**: Text-Light variants
- **Tooltip**: остается dark1 background в обоих режимах

##### Data Attributes
```html
data-light-mode="True" | "False"        <!-- Theme mode -->
data-property-1="1920" | "1024" | "768" | "375"  <!-- Screen size -->
data-property-2="True" | "False"        <!-- Hover with shadows -->
data-property-3="01" | "02" | "03"      <!-- Progress variant -->
data-status="placeholder"                <!-- Row state -->
data-trend="up" | "down"                <!-- Trend direction -->
```

##### Usage Notes
- Таблица автоматически адаптируется под размер экрана
- На мобильных устройствах (768px и ниже) stats и progress стекаются вертикально
- Action buttons появляются только при hover (desktop)
- Tooltip показывается при hover на progress bar segments
- В Dark Mode тени отключены для более flat дизайна
- Border-bottom используется для разделения строк в default state
- При hover border-bottom удаляется, добавляется radius и shadows
- Checkbox позволяет выбирать множественные строки
- Tab filters в header позволяют переключать наборы данных
- Legend/Key помогает идентифицировать цвета в progress bars

#### Progress Bar Component
Универсальный компонент прогресс-бара с поддержкой множественных вариантов и состояний.

##### Basic Structure
- **Height**: 12px (h-3)
- **Radius**: 1px (rounded-[1px])
- **Gap**: 2px (gap-0.5) между сегментами
- **Layout**: horizontal flex, inline-flex

##### Segment Types

###### 1. Placeholder Segment
- **Background**: shade07-40/40
- **Radius**: rounded-[1px]
- **Widths** (различные варианты):
  - Extra small: w-8 (32px), w-9 (36px), w-10 (40px), w-11 (44px)
  - Small: w-12 (48px), w-14 (56px), w-16 (64px)
  - Medium: w-20 (80px), w-24 (96px), w-28 (112px)
  - Large: w-40 (160px), w-44 (176px), w-48 (192px)
  - Extra large: w-52 (208px), w-64 (256px)

###### 2. Divider Pattern Segment
- **Count**: 13 vertical lines
- **Width**: w-0.5 (2px) each
- **Height**: h-3 (12px)
- **Background**: shade07-60/60
- **Radius**: rounded-[0.50px]
- **Gap**: gap-px (1px) between lines
- **Usage**: Разделитель между placeholder и active bar для визуального эффекта

###### 3. Active Bar Segment
- **Radius**: rounded-[1px]
- **Border**: 1px Stroke-Stroke2 (optional, для Chart-Green и Gradient)
- **Widths** (различные варианты):
  - Small: w-24 (96px), w-28 (112px), w-32 (128px)
  - Medium: w-48 (192px), w-52 (208px), w-56 (224px), w-60 (240px)
  - Large: w-72 (288px), w-80 (320px), w-96 (384px)
  - Custom: w-[457px] (1828px), flex-1 (fills remaining space)
- **Color Variants**:
  - **Standard**: bg-shade08-100
  - **Chart Green**: bg-Chart-Green (для метрик с позитивными показателями)
  - **Gradient**: bg-gradient-to-r from-shade08-100 to-shade09-100

##### Progress Bar Patterns

###### Pattern 1: Simple Two-Segment
```html
<div className="inline-flex gap-0.5">
  <div className="w-24 h-3 bg-shade07-40/40 rounded-[1px]" />
  <div className="w-96 h-3 bg-shade08-100 rounded-[1px]" />
</div>
```
- Использование: базовый прогресс без дополнительных деталей
- Пропорции: любые комбинации placeholder + active bar

###### Pattern 2: Three-Segment with Divider
```html
<div className="inline-flex gap-0.5">
  <div className="w-40 h-3 bg-shade07-40/40 rounded-[1px]" />
  <div className="flex gap-px">
    <div className="w-0.5 h-3 bg-shade07-60/60 rounded-[0.50px]" />
    <!-- repeat 13 times -->
  </div>
  <div className="w-72 h-3 bg-gradient-to-r from-shade08-100 to-shade09-100 rounded-[1px] border border-Stroke-Stroke2" />
</div>
```
- Использование: детализированный прогресс с визуальным разделителем
- Компоненты: placeholder + 13 divider lines + gradient bar

###### Pattern 3: Highlighted Progress (Chart Green)
```html
<div className="inline-flex gap-0.5">
  <div className="w-48 h-3 bg-shade07-40/40 rounded-[1px]" />
  <div className="w-96 h-3 bg-Chart-Green rounded-[1px]" />
</div>
```
- Использование: для позитивных метрик, достижений
- Цвет: Chart-Green для акцента

###### Pattern 4: Stacked Multi-Segment (Complex)
```html
<div className="inline-flex gap-0.5">
  <div className="w-8 h-3 bg-shade07-40/40 rounded-[1px]" />
  <div className="flex gap-px">
    <!-- 13 divider lines -->
  </div>
  <div className="w-72 h-3 bg-Chart-Green rounded-[1px] border border-Stroke-Stroke2" />
</div>
```
- Использование: сложный прогресс с множественными категориями
- Описан в Product List Item component

##### States

###### Active State
- **Active Bar**: full opacity (100%)
- **Colors**: Chart-Green, shade08-100, или gradient
- **Border**: optional 1px Stroke-Stroke2

###### Inactive/Disabled State
- **Active Bar**: opacity-5 (5% opacity)
- **Placeholder**: остается без изменений
- **Usage**: неактивные или завершенные задачи

##### Common Proportions

| Placeholder Width | Active Bar Width | Use Case |
|------------------|-----------------|----------|
| w-24 (96px) | w-[457px] | Малый прогресс, большой бар |
| w-40 (160px) | w-72 (288px) | С divider pattern |
| w-48 (192px) | w-96 (384px) | Сбалансированный |
| w-20 (80px) | w-56 (224px) | Компактный с Chart-Green |
| w-64 (256px) | w-80 (320px) | Большой placeholder |
| w-52 (208px) | w-96 (384px) | Средний вариант |
| w-16 (64px) | flex-1 | Минимальный placeholder, гибкий бар |

##### Responsive Behavior
- На мобильных устройствах прогресс-бары автоматически масштабируются
- Используйте flex-1 для адаптивной ширины active bar
- Placeholder сохраняет фиксированную ширину

##### Usage Notes
- Всегда используйте gap-0.5 для консистентности
- Для позитивных метрик используйте Chart-Green
- Для нейтральных данных - shade08-100
- Для градиентных эффектов - from-shade08-100 to-shade09-100
- Divider pattern добавляет визуальную детализацию
- Inactive state (opacity-5) для завершенных или недоступных элементов

#### Product List Item
Адаптивный компонент строки таблицы/списка продуктов с поддержкой разных размеров экрана и состояний.

##### Basic Structure
- **Padding**: 16px (p-4)
- **Radius**: 16px (hover/selected) или 20px (для альтернативного варианта)
- **Layout**: horizontal, space-between
- **Gap**: 24px (gap-6) между основными секциями

##### Left Section (Product Info)
- **Width**:
  - Desktop (1920px): 512px (w-[512px])
  - Tablet (1024px): 320px (w-80)
  - Mobile (768px/375px): 320px (w-80)
- **Height**: 64px (h-16)
- **Gap**: 20px между элементами
- **Elements**:
  - Checkbox: 24×24px, rounded-md, border-2
  - Product Image: 64×64px, rounded-xl
  - Content: flex-1

##### Product Content (Text Area)
- **Title**: 16px semibold, leading-6, Text-Primary, line-clamp-1
- **Subtitle Variants**:
  - **Action Buttons** (Variant 1):
    - Gap: 8px между кнопками
    - Button: pl-1 pr-1.5 py-1, rounded-md
    - Icon: 16×16px, Text-Secondary
    - Text: 14px semibold, Text-Secondary, opacity-80
    - Hover: border 1.5px Stroke-Stroke2, Text-Primary
  - **Date Range** (Variant 2):
    - Text: 14px normal, Text-Secondary, opacity-80

##### Right Section (Stats & Progress)
- **Layout**: horizontal, center aligned
- **Gap**:
  - Desktop (1920px): 176px (gap-44)
  - Tablet (1024px): 24px (gap-6)
  - Mobile (768px/375px): vertical stack, gap-2

##### Stats Block
- **Width**: 144px (w-36)
- **Layout**: vertical stack, gap-2.5
- **Elements**:
  - Value: 14px normal, Text-Primary, leading-5
  - Trend Badge:
    - Padding: 8px (x), 6px (y)
    - Radius: 8px (rounded-lg)
    - Border: 1.5px outline, offset -1.5px
    - Icon: 16×16px
    - Text: 14px semibold
    - Variants:
      - Up: green-600/5 bg, green-600/20 border, Primary-primary02 text
      - Down: red-400/5 bg, red-400/20 border, red-400 text

##### Progress Bar Section
- **Height**: 12px (h-3)
- **Layout**: horizontal, gap-0.5
- **Segments**:
  - Placeholder: w-8 (32px) or w-24 (96px) or w-14 (56px), bg-shade07-40/40, rounded-[1px]
  - Divider pattern: 13 vertical lines, w-0.5 (2px), h-3, bg-shade07-60/60, rounded-[0.50px], gap-px
  - Active bar:
    - Width: w-72 (288px) or w-48 (192px) or w-36 (144px) or w-28 (112px) or flex-1
    - Variants:
      - Green: bg-Chart-Green, rounded-[1px], border Stroke-Stroke2
      - Gradient: bg-gradient-to-r from-shade08-100 to-shade09-100, rounded-[1px], border Stroke-Stroke2
    - States:
      - Active: full opacity
      - Inactive: opacity-5

##### Responsive Breakpoints
- **1920px**: full layout, gap-44
- **1024px**: reduced gaps (gap-6), smaller progress bars
- **768px**: vertical stats layout, smaller progress bars
- **375px**: compact mobile view, stacked layout

##### States
- **Default**:
  - Background: transparent
  - Border: none
  - Checkbox: border-2 Stroke-Stroke2

- **Hover** (Property-2="True"):
  - Background: Backgrounds-highlight
  - Radius: 16px (rounded-2xl) or 20px (для 375px)
  - Shadow: 3 layers
    - 0px 1px 4px 0px rgba(0, 0, 0, 0.05)
    - 0px 8px 8px -2px rgba(0, 0, 0, 0.08)
    - inset 0px 0px 0px 3px rgba(255, 255, 255, 1.00)
  - Border: 1.5px outline zinc-100, offset -1.5px
  - Action buttons: visible

- **Hover (Property-2="False" / no highlight)**:
  - Background: Backgrounds-highlight
  - Radius: 16px (rounded-2xl)
  - Border: 1.5px outline zinc-100, offset -1.5px
  - No shadows (для 375px компактного варианта)

- **Border Variant**:
  - Border-bottom: 1.5px
    - Stroke-Subtle/10 (subtle divider)
    - Stroke-Subtle (visible divider)
  - No radius, no shadows

- **Selected**:
  - Checkbox: border-2 Stroke-Highlight/50 (half opacity)
  - Progress bar может быть dim (opacity-5)

##### Data Attributes
```html
data-property-1="1920" | "1024" | "768" | "375"  <!-- Screen size -->
data-property-2="True" | "False"                  <!-- Hover with shadows -->
data-property-3="01" | "02" | "03"                <!-- Progress variant -->
data-status="placeholder"                          <!-- Checkbox state -->
data-trend="up" | "down"                          <!-- Trend direction -->
```

##### Usage Notes
- Компонент адаптируется под разные размеры экрана автоматически
- В мобильной версии (375px) статистика и прогресс бар располагаются вертикально
- Action buttons появляются только при hover
- Progress bar поддерживает 3 варианта: короткий (01), средний (02), длинный (03)

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

### 8. Charts & Data Visualization

#### Line Chart
Линейный график для отображения трендов во времени.

- **Container**: full width
- **Grid Lines**: horizontal, 1px Stroke-Stroke2
- **Y-Axis Labels**: 12px Text-Tertiary, opacity-80, right-aligned
- **X-Axis Labels**: 12px Text-Tertiary, opacity-80, center-aligned
- **Line**: Chart-Green или zinc-300, 3px stroke
- **Data Point**:
  - Dot: 12×12px, rounded-full
  - Background: surface2
  - Border: 3px Chart-Green или Primary-primary02
- **Tooltip**:
  - Background: Backgrounds-dark1
  - Padding: 8px (x), 6px (y)
  - Radius: 8px (rounded-lg)
  - Font: 12px, Text-Light
  - Arrow: 10px (w) × 6px (h) triangle
  - Content: Date + Value
- **Highlight Area**: outline 3px offset -1.5px для selected region

#### Bar Chart (Stacked/Grouped)
Столбчатый график с поддержкой паттернов и множественных сегментов.

- **Bar Width**: 16px (w-4)
- **Bar Gap**: 4px (gap-1)
- **Bar Radius**: 1px (rounded-[1px])
- **Bar Height**: variable (h-56 max для 224px)
- **Colors**:
  - **Placeholder**: shade07-40/40
  - **Pattern Bar**: shade08-100 с diagonal overlay
  - **Active**: Chart-Green
  - **Inactive**: opacity-20
- **Segments**:
  - Placeholder segment: bg-shade07-40/40
  - Pattern bar: bg-shade08-100 + diagonal pattern overlay
  - Divider lines: w-0.5, h-3, gap-px, bg-shade07-60/60
- **Label**: 12px Text-Tertiary, opacity-80, centered below
- **Tooltip**:
  - Shows date + multiple values
  - Format: "26 Feb, 2044" + list of metrics
  - Gap: 4px между значениями

##### Diagonal Pattern Overlay
Диагональный паттерн для столбцов графика.

- **Opacity**: 10%
- **Rotation**: -45deg (origin-top-left -rotate-45)
- **Grid**: 96×96px squares (w-24 h-24)
- **Outline**: 1px outline-Text-Tertiary
- **Gap**: 3px (gap-[3px])
- **Count**: ~46 квадратов для покрытия бара
- **Usage**: визуальное отличие категорий данных (Search, Social media)

#### Donut Chart (Pie Chart)
Круговая диаграмма с центральным текстом.

- **Size**: 288×288px (w-72 h-72)
- **Segments**: conic-gradient для секций
- **Colors**:
  - Chart-Green для основного сегмента
  - rgba(123, 123, 123, 0.20) для вторичных
  - rgba(211.34, 211.34, 211.34, 0.40) для третичных
- **Center Content**:
  - Value: 48px (text-5xl), medium weight, 60px leading
  - Label: 16px semibold, Text-Secondary, line-clamp-1
  - Gap: 4px (gap-1)
- **Tooltip**:
  - Position: absolute, на сегменте
  - Background: Backgrounds-dark1
  - Arrow: 10px × 6px pointing to segment
  - Content: Label + Value
- **Breakdown List**:
  - Icons: 24×24px device/category icons
  - Labels: 12px Text-Tertiary
  - Values: 16px semibold Text-Primary
  - Gap: 4px между items

#### Heatmap
Тепловая карта для отображения активности по времени и дням.

- **Container**: 656×320px (w-[656px] h-80)
- **Cell Size**: 96×20px (w-24 h-5)
- **Cell Radius**: 2px (rounded)
- **Cell Gap**: 2px (gap-0.5)
- **Layout**: flex-wrap, 7 columns (days) × 16 rows (time slots)
- **Opacity Levels**:
  - **Light Mode**:
    - Least: opacity-25 (shade04-100)
    - Medium: opacity-50
    - High: opacity-75
    - Most: opacity-100
  - **Dark Mode**:
    - Least: opacity-25 (shade08-70/70)
    - Medium: opacity-50
    - High: opacity-75
    - Most: opacity-100
- **Highlight Cell**: bg-Chart-Green (full opacity)
- **Axis Labels**:
  - Y-Axis (Time): 12px Text-Tertiary, opacity-80
    - Format: "12:00 am", "4:00 am", "8:00 am", etc.
  - X-Axis (Days): 12px Text-Tertiary, opacity-80, center-aligned
    - Format: "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"
- **Tooltip**:
  - Background: Backgrounds-dark1
  - Padding: 8px
  - Radius: 8px
  - Content: Label + Value ("Sales: 1,024")
  - Arrow: pointing down to cell
- **Legend**:
  - Text: 12px Text-Primary, opacity-80
  - Samples: 48×8px (w-12 h-2) rectangles
  - Opacity progression: 5%, 10%, 20% (или 20%, 30%, 50% для dark mode)
  - Gap: 2px (gap-0.5)

#### Chart Data Point
- **Dot Size**: 12×12px
- **Background**: surface2
- **Border**: 3px Chart-Green или Primary-primary02
- **Rounded**: full
- **Position**: absolute, centered on data point

#### Chart Tooltip (Universal)
Универсальный tooltip для всех типов графиков.

- **Background**: Backgrounds-dark1
- **Padding**: 8px (x), 6px (y)
- **Radius**: 6px (rounded-md) или 8px (rounded-lg)
- **Font**: 12px, Text-Light
- **Arrow**: 8-10px (width) × 4-6px (height) triangle
  - Shape: border trick или SVG
  - Color: matches Backgrounds-dark1
  - Position: bottom center или top center
- **Content Formats**:
  - **Single Value**: "Label: Value"
  - **Multiple Values**:
    - Vertical stack, gap-0.5 или gap-1
    - Each line: Label (Text-Secondary) + Value (Text-Light)
    - Example: "Direct: 559,128" + "Search: 336,256" + "Other: 346,546"
  - **Date Header**: opacity-80, above values
- **States**:
  - Hidden: opacity-0, pointer-events-none
  - Visible: opacity-100, transition 150ms
- **Positioning**: 8px offset от trigger element

---

### 9. Dashboard Components

#### Overview Card (KPI Card)
Комплексные карточки для отображения ключевых метрик с трендами и предпросмотром данных.

##### Container
- **Padding**: 24px (p-6)
- **Radius**: 32px (rounded-[32px])
- **Background**: Backgrounds-surface2
- **Border**: 1.5px outline Stroke-Stroke2, offset -1.5px
- **Shadow**: --shadow-card-1 + --shadow-card-2
- **Layout**: vertical stack, gap-24px (gap-6)

##### Icon Container
- **Size**: 64×64px (w-16 h-16)
- **Radius**: 32px (rounded-[32px])
- **Background Variants**:
  - **Primary**: Backgrounds-surface1
  - **Alternative**: bg-pop (для выделения)
- **Icon**: 24×24px, Text-Secondary
- **Border**: 1px outline Stroke-Stroke2 (optional)

##### Large Number Display
- **Symbol**: 48px (text-5xl), Text-Tertiary
  - Examples: "$", "€", "#"
  - Line height: 60px
- **Value**: 60px (text-6xl), medium weight, Text-Primary
  - Line height: 75px (leading-[75px])
  - Tracking: -0.02em (tracking-tight)
  - Format: "320k", "857", "1.2M"
- **Layout**: horizontal, baseline aligned
- **Gap**: 4px между symbol и value

##### Trend Badge (Integrated)
- **Padding**: 8px (x), 6px (y)
- **Radius**: 8px (rounded-lg)
- **Border**: 1.5px outline, offset -1.5px
- **Icon**: 16×16px (arrow up/down)
- **Text**: 14px semibold
- **Gap**: 4px между icon и text
- **Variants**:
  - **Up**:
    - Background: green-600/5 (rgba(22, 163, 74, 0.05))
    - Border: green-600/20 (rgba(22, 163, 74, 0.20))
    - Text: Primary-primary02
    - Icon: arrow-up
  - **Down**:
    - Background: red-400/5 (rgba(248, 113, 113, 0.05))
    - Border: red-400/20 (rgba(248, 113, 113, 0.20))
    - Text: red-400
    - Icon: arrow-down

##### Label / Description
- **Font**: 16px semibold
- **Color**: Text-Secondary
- **Line height**: 24px (leading-6)
- **Line clamp**: 1 (text-ellipsis)
- **Examples**: "Total customers", "New customers", "Revenue"

##### Preview Chart (Mini Indicator)
- **Type**: outline indicator (small line chart or bar)
- **Size**: varies (typically 48-64px wide, 16-24px tall)
- **Stroke**: 1px Chart-Green или Primary-primary02
- **Opacity**: 60-80%
- **Position**: integrated в card layout

##### Layout Structure
```
┌─────────────────────────────┐
│ [Icon Container]            │
│                             │
│ [$] [320k]                  │  ← Symbol + Large Number
│ [↑ 12%]                     │  ← Trend Badge
│                             │
│ Total customers             │  ← Label
│ [mini chart preview]        │  ← Preview Chart (optional)
└─────────────────────────────┘
```

##### Responsive Behavior
- **Desktop (1920px+)**:
  - Full layout с icon, large number, trend, label, preview
  - Padding: 24px
  - Gap: 24px
- **Tablet (768-1024px)**:
  - Compact layout
  - Padding: 20px
  - Gap: 16px
- **Mobile (375px)**:
  - Minimal padding: 16px
  - Gap: 12px
  - Preview chart может быть скрыт

##### Light Mode vs Dark Mode
- **Light Mode**:
  - Background: Backgrounds-surface2
  - Shadows: 2 layers
  - Icon container: surface1
  - Text: Text-Primary, Text-Secondary, Text-Tertiary
- **Dark Mode**:
  - Background: Backgrounds-surface2 (dark variant)
  - NO shadows (flat design)
  - Icon container: surface1 или bg-pop
  - Text: Text-Light variants

##### States
- **Default**:
  - Standard shadows
  - Border: Stroke-Stroke2
- **Hover**:
  - Может добавляться subtle highlight
  - Cursor: pointer (если interactive)
- **Active/Selected**:
  - Border: может меняться на Stroke-BorderBorder
  - Background: может осветляться

##### Usage Notes
- Icon container помогает визуально идентифицировать тип метрики
- Large numbers (60px) обеспечивают instant readability
- Trend badges показывают изменение метрики (рост/падение)
- Preview charts дают контекст изменения во времени
- Symbol ($, €, #) помогает понять единицы измерения
- В Dark Mode убираются тени для более flat дизайна

#### Icon Container (Standalone)
Контейнер для иконок с поддержкой различных стилей и состояний.

##### Basic Sizes
- **Large**: 64×64px (w-16 h-16), radius 32px
- **Medium**: 48×48px (w-12 h-12), radius 24px
- **Small**: 44×44px (w-11 h-11), radius 22px

##### Backgrounds
- **Primary**: Backgrounds-surface1
- **Alternative**: bg-pop (для KPI cards)
- **Active (Light Mode)**: shade07-20/20
- **Active (Dark Mode)**: shade05-30/30

##### Icon Sizing
- **Large container (64×64px)**: icon 24×24px
- **Medium container (48×48px)**: icon 20×20px
- **Small container (44×44px)**: icon 20×20px

##### Border
- **Default**: 1px outline Stroke-Stroke2 (optional)
- **Active**: 1px zinc-100

##### States
- **Default**:
  - Background: surface1 или bg-pop
  - Icon: Text-Secondary
- **Hover**:
  - Background: Backgrounds-highlight
  - Icon: Text-Primary
- **Active**:
  - Background: shade07-20/20 (Light) или shade05-30/30 (Dark)
  - Icon: Text-Primary
  - Border: zinc-100

##### Usage
- Settings icons
- Category indicators
- Dashboard KPI icons
- Action containers

#### Special Features

##### Horizontal Scroll with Fade Overlay
Паттерн для горизонтального скролла с плавным затуханием на краю.

###### Container
- **Overflow**: overflow-x-auto, overflow-y-hidden
- **Scroll Behavior**: smooth
- **Padding**: зависит от контента
- **Gap**: 16px (gap-4) между items

###### Fade Overlay
- **Width**: 112px (w-28)
- **Height**: full container height
- **Position**: absolute right-0
- **Gradient**:
  - **Light Mode**: linear-gradient(to left, white, rgba(255, 255, 255, 0))
  - **Dark Mode**: linear-gradient(to left, #000, rgba(0, 0, 0, 0))
- **Pointer Events**: none (для кликабельности под градиентом)

###### Scroll Items
- **Width**: fixed (например, 208px для product cards)
- **Display**: inline-flex
- **Gap**: 16px

###### Usage
- Product carousels
- Share products section
- Feature lists
- Image galleries

##### Country List with Progress Bars
Список стран с индикаторами прогресса и флагами.

###### List Item Structure
- **Height**: auto (зависит от контента)
- **Padding**: 8px (y), 0 (x)
- **Layout**: horizontal, space-between
- **Gap**: 12px

###### Flag Icon
- **Size**: 24×24px (rounded-sm или rounded-md)
- **Border**: optional 1px
- **Format**: SVG или emoji flag

###### Country Name
- **Font**: 14px semibold
- **Color**: Text-Primary
- **Line clamp**: 1

###### Progress Bar
- **Height**: 12px (h-3)
- **Width**: flexible (flex-1 или fixed)
- **Variants**: См. Progress Bar Component
- **Colors**:
  - **Light Mode**: standard colors
  - **Dark Mode**: shade05-100 для active bar

###### Value Display
- **Font**: 14px normal
- **Color**: Text-Secondary
- **Format**: "1,234" или "12%"

###### Layout
```
[🇺🇸] United States  [████░░░] 45%
[🇬🇧] United Kingdom [███░░░░] 32%
[🇩🇪] Germany        [██░░░░░] 18%
```

##### Usage Notes
- Fade overlay предотвращает резкий обрыв контента при скролле
- Country list с progress bars отлично подходит для geographic analytics
- Icon containers обеспечивают визуальную консистентность
- В Dark Mode progress bars используют shade05-100 для better contrast

---

### 10. Avatars

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
| Product list item (1920px) | 1528px |
| Product list item (1024px) | 884px |
| Product list item (768px) | 628px |
| Product list item (375px) | 288px (w-72) |
| Product image | 64×64px |
| Progress bar (height) | 12px |
| Table legend indicator | 12×12px |
| Chart tooltip arrow | 8×4px |
| Action button icon | 16×16px |
| KPI card icon container | 64×64px |
| KPI card large number | 60px (text-6xl) |
| KPI card symbol | 48px (text-5xl) |
| Icon container (large) | 64×64px |
| Icon container (medium) | 48×48px |
| Icon container (small) | 44×44px |
| Donut chart | 288×288px |
| Heatmap | 656×320px |
| Heatmap cell | 96×20px |
| Bar chart bar width | 16px |
| Fade overlay width | 112px |
| Country flag icon | 24×24px |

---

**Последнее обновление**: Блок #21 - Dashboard Components
**Статус**: В процессе сборки
**Добавлено**:
- **Блок #21**: Dashboard Components - комплексные компоненты для дашбордов и аналитики
  - **Overview Card (KPI Card)**:
    - Container: 24px padding, 32px radius, surface2 background
    - Icon Container: 64×64px, 32px radius, surface1 или bg-pop
    - Large Number Display: 60px value (text-6xl) + 48px symbol (text-5xl)
    - Trend Badge: integrated с up/down variants, green/red colors
    - Label: 16px semibold description
    - Preview Chart: mini indicators для контекста
    - Responsive behavior: Desktop (24px) → Tablet (20px) → Mobile (16px)
    - Light/Dark Mode: shadows в light, flat в dark
    - States: Default, Hover, Active/Selected
  - **Icon Container (Standalone)**:
    - 3 размера: Large (64×64px), Medium (48×48px), Small (44×44px)
    - Backgrounds: surface1, bg-pop, shade07-20/20 (light active), shade05-30/30 (dark active)
    - Icon sizing: 24px, 20px по размеру контейнера
    - States: Default, Hover, Active с border variants
  - **Charts & Data Visualization**:
    - **Line Chart**: grid lines, axis labels (12px), data points (12×12px), tooltips
    - **Bar Chart**: 16px bars, diagonal pattern overlay (-45deg, 96×96px grid, 10% opacity)
    - **Donut Chart**: 288×288px, conic-gradient, center content (48px value + 16px label)
    - **Heatmap**: 656×320px, cells 96×20px, opacity levels (25/50/75/100%), axis labels
    - **Chart Tooltip**: universal, 8px/6px padding, dark1 background, 8-10px arrow
  - **Special Features**:
    - **Horizontal Scroll with Fade Overlay**: 112px gradient, pointer-events-none
    - **Country List with Progress Bars**: flags (24×24px), progress (12px), values
  - **Dashboard Colors**: bg-pop, shade04-50, shade08-70, shade05-100
  - **Component Sizes**: 14 новых размеров в reference table
- **Блок #20**: Data Table (Product Table) - комплексная таблица данных
  - Table Header Section с search, filters, legend
  - Table Rows с Product List Item integration
  - Responsive layouts: 4 breakpoints (1920/1024/768/375px)
  - Chart Tooltip Component
  - Action Buttons на hover
  - Light/Dark Mode с shadow differences
- **Блок #19**: Progress Bar Component
  - 3 типа сегментов, 4 паттерна компоновки
  - Множественные размеры и цветовые варианты
  - States: Active, Inactive/Disabled
- **Блок #18**: Product List Item
  - Адаптивный компонент с 4 breakpoints
  - Multiple states и variants
  - Stats block with trend badge
- **Блок #17**: Auth Forms
  - OAuth Button (5 states)
  - Input Field States
  - Auth Form Card
