export interface TheorySection {
  id: string;
  title: string;
  content: string;
  demo: string;
  code: string;
  keyPoints: string[];
  examples: {
    title: string;
    code: string;
    description: string;
  }[];
  bestPractices: string[];
  commonMistakes: string[];
}

export const theoryData: TheorySection[] = [
  {
    id: "introduction",
    title: "CSS Box Model Introduction",
    content: `The CSS Box Model is the fundamental concept that describes how every HTML element is rendered as a rectangular box. Understanding this model is crucial for mastering CSS layouts and positioning.

The Four Areas of the Box Model:

• Content Area: The innermost area where your actual content (text, images, etc.) is displayed. The width and height properties control this area by default.

• Padding Area: The space between the content and the border. Padding is transparent but inherits the background color of the element. It cannot have negative values.

• Border Area: The border surrounds the padding and content. It can be styled with different widths, styles, and colors. Borders add to the element's total dimensions.

• Margin Area: The outermost area that creates space between the element and its neighbors. Margins are always transparent and can have negative values.

How Dimensions Are Calculated:

By default (content-box), the total width of an element is:
Total Width = width + padding-left + padding-right + border-left + border-right + margin-left + margin-right

The same applies to height with vertical properties.

Why This Matters:

Understanding the box model is essential because:
- It affects how elements are sized and positioned
- It determines spacing between elements
- It's crucial for creating responsive layouts
- It helps debug layout issues
- It's the foundation for advanced CSS techniques

Browser Developer Tools:

Modern browsers show the box model visually in their developer tools, making it easier to understand how each area contributes to the element's total size.`,
    demo: "box-model-intro",
    code: `/* Basic Box Model Example */
.box {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 2px solid #333;
  margin: 10px;
}

/* Total width = 200 + 20*2 + 2*2 + 10*2 = 264px */
/* Total height = 100 + 20*2 + 2*2 + 10*2 = 164px */`,
    keyPoints: [
      "Every HTML element is a rectangular box",
      "Four areas: content, padding, border, margin",
      "Default sizing includes only content area",
      "Total dimensions include all areas",
      "Foundation for all CSS layout",
    ],
    examples: [
      {
        title: "Basic Box",
        code: `.simple-box {
  width: 200px;
  height: 100px;
  padding: 15px;
  border: 2px solid blue;
  margin: 10px;
  background-color: lightblue;
}`,
        description:
          "A simple box demonstrating all four areas of the box model.",
      },
      {
        title: "Nested Boxes",
        code: `.outer-box {
  width: 300px;
  padding: 20px;
  border: 3px solid red;
  margin: 15px;
}

.inner-box {
  width: 100%;
  padding: 10px;
  border: 1px solid blue;
  background-color: lightgreen;
}`,
        description:
          "Nested boxes showing how the box model applies to parent-child relationships.",
      },
    ],
    bestPractices: [
      "Use browser dev tools to visualize the box model",
      "Always consider total dimensions when sizing elements",
      "Use consistent spacing patterns throughout your design",
      "Understand how box model affects responsive design",
    ],
    commonMistakes: [
      "Forgetting that padding and border add to element size",
      "Not accounting for margin collapse",
      "Mixing different box-sizing models inconsistently",
      "Ignoring the visual box model in browser dev tools",
    ],
  },
  {
    id: "background-color",
    title: "Background Color",
    content: `Background color is one of the most commonly used CSS properties, but understanding exactly where it applies is crucial for effective design.

Coverage Area:

Background color fills the content area AND the padding area, but NOT the margin area. This is an important distinction that affects how your designs appear.

Syntax and Values:

• Named Colors: red, blue, green, transparent
• Hex Values: #ff0000, #00ff00, #0000ff
• RGB Values: rgb(255, 0, 0), rgba(255, 0, 0, 0.5)
• HSL Values: hsl(0, 100%, 50%), hsla(0, 100%, 50%, 0.5)

Transparency:

The 'transparent' keyword or alpha values in rgba()/hsla() allow the parent's background to show through. This is useful for layering effects.

Inheritance:

Background colors don't inherit by default, but you can use 'inherit' to force inheritance from the parent element.

Best Practices:

- Always consider contrast for accessibility
- Use CSS custom properties for consistent color schemes
- Consider how background colors interact with borders
- Test colors in both light and dark themes
- Use semantic color names in your CSS custom properties

Common Use Cases:

- Creating visual hierarchy
- Highlighting important content
- Defining sections and containers
- Creating hover and focus states
- Building color-coded systems`,
    demo: "background-color",
    code: `/* Background Color Examples */
.content-box {
  background-color: #ff6b6b;
  padding: 20px;
  margin: 10px;
}

.transparent-box {
  background-color: rgba(255, 107, 107, 0.5);
  padding: 15px;
}

.gradient-box {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  padding: 20px;
}`,
    keyPoints: [
      "Fills content and padding areas only",
      "Does not extend into margins",
      "Supports various color formats",
      "Can be transparent or semi-transparent",
      "Essential for visual hierarchy",
    ],
    examples: [
      {
        title: "Solid Colors",
        code: `.red-box { background-color: #ff0000; }
.blue-box { background-color: rgb(0, 0, 255); }
.green-box { background-color: hsl(120, 100%, 50%); }`,
        description: "Different ways to specify solid background colors.",
      },
      {
        title: "Transparent Backgrounds",
        code: `.semi-transparent {
  background-color: rgba(255, 0, 0, 0.5);
}

.fully-transparent {
  background-color: transparent;
}`,
        description: "Using transparency for layering effects.",
      },
      {
        title: "CSS Custom Properties",
        code: `:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
}

.primary-bg {
  background-color: var(--primary-color);
}`,
        description: "Using CSS variables for consistent color schemes.",
      },
    ],
    bestPractices: [
      "Use CSS custom properties for color consistency",
      "Ensure sufficient contrast for accessibility",
      "Test colors in different lighting conditions",
      "Consider color blindness when choosing colors",
      "Use semantic naming for color variables",
    ],
    commonMistakes: [
      "Assuming background extends into margins",
      "Poor color contrast for accessibility",
      "Hardcoding colors instead of using variables",
      "Not testing colors in dark mode",
      "Forgetting about print styles",
    ],
  },
  {
    id: "width-height",
    title: "Width and Height",
    content: `Width and height are fundamental properties that control the dimensions of the content area. Understanding how they work is essential for precise layout control.

Default Behavior:

By default, width and height only affect the content area. Padding, borders, and margins are added to these dimensions, which can make sizing unpredictable.

Value Types:

• Length Units: px, em, rem, vh, vw, ch, ex
• Percentage: Relative to the parent container's dimensions
• Auto: Browser calculates the size automatically
• Intrinsic Sizing: max-content, min-content, fit-content

Width Specifics:

- Block elements default to 100% of their container width
- Inline elements ignore width settings
- Percentage widths are relative to the parent's width
- Auto width fills available space for block elements

Height Specifics:

- Most elements default to auto height (content-driven)
- Percentage heights require parent to have explicit height
- Auto height adjusts to content size
- Viewport units (vh) are useful for full-height layouts

Responsive Considerations:

- Use max-width instead of fixed width for responsiveness
- Consider using clamp() for fluid typography and spacing
- Viewport units help create responsive layouts
- Intrinsic sizing keywords provide content-aware dimensions

Common Patterns:

- Full-width containers: width: 100%
- Centered containers: width: 90%; max-width: 1200px
- Square elements: width: 200px; height: 200px
- Responsive images: width: 100%; height: auto

Performance Notes:

Changing width and height triggers layout recalculation, which can be expensive. Use transform: scale() for animations when possible.`,
    demo: "width-height",
    code: `/* Width and Height Examples */
.fixed-size {
  width: 300px;
  height: 200px;
}

.percentage-size {
  width: 50%;
  height: 100px;
}

.auto-size {
  width: auto; /* Default */
  height: auto; /* Default */
}

.responsive-size {
  width: 100%;
  max-width: 600px;
  height: auto;
}`,
    keyPoints: [
      "Control content area dimensions",
      "Default behavior varies by element type",
      "Percentage values relative to parent",
      "Auto values calculated by browser",
      "Foundation for responsive design",
    ],
    examples: [
      {
        title: "Fixed Dimensions",
        code: `.card {
  width: 300px;
  height: 200px;
  border: 1px solid #ccc;
}`,
        description: "Fixed width and height for consistent sizing.",
      },
      {
        title: "Responsive Images",
        code: `.responsive-image {
  width: 100%;
  height: auto;
  max-width: 500px;
}`,
        description: "Responsive image that scales with container.",
      },
      {
        title: "Viewport Units",
        code: `.hero-section {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}`,
        description: "Full viewport dimensions for hero sections.",
      },
    ],
    bestPractices: [
      "Use relative units for responsive design",
      "Set max-width on images for responsiveness",
      "Use viewport units for full-screen layouts",
      "Consider content when setting heights",
      "Test on various screen sizes",
    ],
    commonMistakes: [
      "Using fixed widths for responsive design",
      "Forgetting height: auto for images",
      "Not considering content overflow",
      "Mixing absolute and relative units inconsistently",
      "Setting height: 100% without parent height",
    ],
  },
  {
    id: "padding",
    title: "Padding",
    content: `Padding creates internal spacing within an element, between the content and the border. It's essential for creating breathing room and improving readability.

How Padding Works:

Padding increases the element's total size and inherits the background color. Unlike margins, padding cannot be negative and doesn't collapse.

Shorthand Syntax:

• One value: padding: 20px; (all sides)
• Two values: padding: 10px 20px; (vertical horizontal)
• Three values: padding: 10px 20px 15px; (top horizontal bottom)
• Four values: padding: 10px 15px 20px 25px; (top right bottom left)

Individual Properties:

- padding-top: Controls top padding
- padding-right: Controls right padding  
- padding-bottom: Controls bottom padding
- padding-left: Controls left padding

Percentage Values:

Percentage padding is always calculated relative to the parent's WIDTH, even for top and bottom padding. This can create responsive square or rectangular shapes.

Use Cases:

• Content Spacing: Creating space around text and images
• Button Padding: Making clickable areas larger and more comfortable
• Container Padding: Preventing content from touching edges
• Responsive Spacing: Using em/rem units for scalable spacing

Best Practices:

- Use consistent padding values throughout your design
- Consider using CSS custom properties for spacing scales
- Use em/rem units for scalable padding
- Be mindful of how padding affects total element size
- Use padding for internal spacing, margin for external spacing

Accessibility Considerations:

Adequate padding improves touch targets on mobile devices and makes content more readable by preventing text from touching container edges.

Common Patterns:

- Card padding: padding: 1.5rem 2rem
- Button padding: padding: 0.75rem 1.5rem
- Container padding: padding: 0 1rem
- Responsive padding: padding: clamp(1rem, 4vw, 2rem)`,
    demo: "padding",
    code: `/* Padding Examples */
.equal-padding {
  padding: 20px; /* All sides */
}

.vertical-horizontal {
  padding: 10px 20px; /* vertical horizontal */
}

.individual-sides {
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-left: 15px;
}

.four-values {
  padding: 10px 15px 20px 25px; /* top right bottom left */
}`,
    keyPoints: [
      "Creates internal spacing within elements",
      "Inherits background color",
      "Cannot be negative",
      "Adds to element's total size",
      "Essential for readability and usability",
    ],
    examples: [
      {
        title: "Button Padding",
        code: `.button {
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
}`,
        description: "Comfortable padding for clickable buttons.",
      },
      {
        title: "Card Content",
        code: `.card {
  padding: 1.5rem;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}`,
        description: "Generous padding for card content readability.",
      },
      {
        title: "Responsive Padding",
        code: `.container {
  padding: clamp(1rem, 5vw, 3rem);
  max-width: 1200px;
  margin: 0 auto;
}`,
        description: "Responsive padding that scales with viewport.",
      },
    ],
    bestPractices: [
      "Use consistent spacing scale throughout design",
      "Employ relative units for scalable spacing",
      "Consider touch target sizes for mobile",
      "Use CSS custom properties for spacing values",
      "Test padding on different screen sizes",
    ],
    commonMistakes: [
      "Inconsistent padding values across similar elements",
      "Using fixed pixel values for all screen sizes",
      "Forgetting padding affects total element size",
      "Not considering touch targets on mobile",
      "Mixing padding and margin for same purpose",
    ],
  },
  {
    id: "border",
    title: "Border",
    content: `Borders create visible boundaries around elements and are positioned between the padding and margin areas. They're essential for visual design and user interface elements.

Border Components:

Every border has three properties:
• Width: How thick the border is
• Style: How the border looks (solid, dashed, etc.)
• Color: What color the border is

Border Styles:

- solid: A single solid line
- dashed: A series of dashes
- dotted: A series of dots
- double: Two solid lines
- groove: Appears carved into the page
- ridge: Appears raised from the page
- inset: Appears embedded in the page
- outset: Appears raised from the page
- none: No border (default)
- hidden: Same as none but with different specificity

Shorthand vs Individual Properties:

Shorthand: border: 2px solid #333;
Individual: 
- border-width: 2px;
- border-style: solid;
- border-color: #333;

Side-Specific Borders:

You can control each side independently:
- border-top: 3px solid red;
- border-right: 2px dashed blue;
- border-bottom: 1px dotted green;
- border-left: 4px double purple;

Border and Box Model:

Borders add to the element's total dimensions unless you use box-sizing: border-box. This is crucial for layout calculations.

Advanced Techniques:

• Border Images: Using images as borders
• Multiple Borders: Using box-shadow to simulate multiple borders
• Gradient Borders: Creating colorful border effects
• Responsive Borders: Using viewport units or clamp()

Common Use Cases:

- Form field styling
- Button designs
- Card and container boundaries
- Dividers between sections
- Focus indicators for accessibility
- Decorative elements

Performance Considerations:

Border changes can trigger repaints but not layout recalculation, making them relatively performant for animations.`,
    demo: "border",
    code: `/* Border Examples */
.simple-border {
  border: 2px solid #333;
}

.individual-borders {
  border-top: 3px solid red;
  border-right: 2px dashed blue;
  border-bottom: 1px dotted green;
  border-left: 4px double purple;
}

.styled-border {
  border-width: 2px;
  border-style: solid;
  border-color: #ff6b6b;
}

.no-border {
  border: none; /* or border: 0; */
}`,
    keyPoints: [
      "Three components: width, style, color",
      "Positioned between padding and margin",
      "Adds to element's total dimensions",
      "Can be styled individually per side",
      "Essential for visual boundaries",
    ],
    examples: [
      {
        title: "Form Input Borders",
        code: `.input {
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-radius: 4px;
}

.input:focus {
  border-color: #007bff;
  outline: none;
}`,
        description: "Subtle borders for form inputs with focus states.",
      },
      {
        title: "Card Borders",
        code: `.card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  background-color: white;
}`,
        description: "Light borders for card components.",
      },
      {
        title: "Decorative Borders",
        code: `.highlight-box {
  border-left: 4px solid #ff6b6b;
  padding-left: 1rem;
  background-color: #fff5f5;
}`,
        description: "Accent border for highlighting content.",
      },
    ],
    bestPractices: [
      "Use consistent border styles across components",
      "Consider border-box sizing for predictable layouts",
      "Use subtle colors for non-interactive borders",
      "Provide clear focus indicators with borders",
      "Test border visibility in different themes",
    ],
    commonMistakes: [
      "Forgetting borders add to element dimensions",
      "Using borders that are too thick or distracting",
      "Inconsistent border styles across similar elements",
      "Not providing focus indicators for accessibility",
      "Using borders when box-shadow might be better",
    ],
  },
  {
    id: "border-radius",
    title: "Border Radius",
    content: `Border radius creates rounded corners on elements, transforming sharp rectangular boxes into softer, more modern shapes. It's essential for contemporary web design.

How Border Radius Works:

Border radius affects both the border and the background, creating smooth curves at the corners. It doesn't affect the content area directly but can clip content if overflow is hidden.

Syntax Options:

• Single value: border-radius: 10px; (all corners)
• Two values: border-radius: 10px 20px; (top-left/bottom-right, top-right/bottom-left)
• Four values: border-radius: 10px 15px 20px 25px; (clockwise from top-left)

Individual Corner Control:

- border-top-left-radius: 10px;
- border-top-right-radius: 15px;
- border-bottom-right-radius: 20px;
- border-bottom-left-radius: 25px;

Percentage Values:

Percentage values create elliptical curves and are relative to the element's dimensions. 50% on a square creates a perfect circle.

Advanced Techniques:

• Elliptical Corners: border-radius: 50px 20px; (horizontal/vertical radii)
• Complex Shapes: Combining different corner radii
• Responsive Radius: Using viewport units or clamp()
• Pill Shapes: Using large radius values (999px or 50%)

Common Patterns:

- Subtle rounding: border-radius: 4px 8px;
- Button styling: border-radius: 6px;
- Card design: border-radius: 12px;
- Circular avatars: border-radius: 50%;
- Pill buttons: border-radius: 999px;

Design Considerations:

- Consistent radius values create visual harmony
- Larger elements can handle larger radius values
- Consider the relationship between border-radius and padding
- Test how radius affects content positioning

Browser Support:

Border radius is well-supported across all modern browsers. Vendor prefixes are no longer needed.

Accessibility:

Rounded corners can improve visual hierarchy and make interfaces feel more approachable, but ensure sufficient contrast remains at the edges.`,
    demo: "border-radius",
    code: `/* Border Radius Examples */
.rounded-corners {
  border-radius: 10px; /* All corners */
}

.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%; /* Perfect circle */
}

.individual-corners {
  border-top-left-radius: 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 40px;
}

.elliptical {
  border-radius: 50px 20px; /* horizontal vertical */
}`,
    keyPoints: [
      "Creates rounded corners on elements",
      "Affects both border and background",
      "Can be set individually per corner",
      "Percentage values create elliptical curves",
      "Essential for modern UI design",
    ],
    examples: [
      {
        title: "Button Styles",
        code: `.btn-rounded {
  border-radius: 6px;
  padding: 10px 20px;
  background-color: #007bff;
}

.btn-pill {
  border-radius: 999px;
  padding: 10px 24px;
}`,
        description: "Different border radius styles for buttons.",
      },
      {
        title: "Avatar Images",
        code: `.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.avatar-rounded {
  border-radius: 12px;
}`,
        description: "Circular and rounded avatar styles.",
      },
      {
        title: "Card Components",
        code: `.card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.card-header {
  border-radius: 12px 12px 0 0;
}`,
        description: "Rounded cards with selective corner rounding.",
      },
    ],
    bestPractices: [
      "Use consistent radius values across similar elements",
      "Consider element size when choosing radius values",
      "Use overflow: hidden when radius clips content",
      "Test radius values at different screen sizes",
      "Create a radius scale for design consistency",
    ],
    commonMistakes: [
      "Using inconsistent radius values across components",
      "Making radius too large for small elements",
      "Forgetting overflow: hidden when needed",
      "Not considering how radius affects child elements",
      "Using border-radius without considering content",
    ],
  },
  {
    id: "box-sizing",
    title: "Box Sizing",
    content: `Box-sizing is one of the most important CSS properties for predictable layouts. It fundamentally changes how the box model calculates dimensions.

The Problem with Content-Box:

By default, CSS uses content-box sizing, where width and height only apply to the content area. Padding and borders are added to these dimensions, making the total size larger than expected.

Example with content-box:
- width: 200px; padding: 20px; border: 2px solid;
- Total width = 200 + 40 + 4 = 244px

The Solution: Border-Box:

With border-box sizing, width and height include the content, padding, AND border. This makes sizing much more predictable.

Example with border-box:
- width: 200px; padding: 20px; border: 2px solid;
- Total width = 200px (padding and border are included)

Global Border-Box Reset:

Most developers now use a global reset:
\`\`\`css
*, *::before, *::after {
  box-sizing: border-box;
}
\`\`\`

When to Use Each:

• border-box: Almost always (default recommendation)
• content-box: When you specifically need the old behavior
• inherit: To inherit from parent element

Benefits of Border-Box:

- Predictable sizing for responsive design
- Easier percentage-based layouts
- Simplified grid and flexbox calculations
- More intuitive behavior for developers
- Better for component-based design

Layout Implications:

Border-box makes it much easier to:
- Create equal-width columns
- Build responsive grids
- Size elements with percentages
- Combine fixed and flexible dimensions

Performance:

Box-sizing changes don't affect performance significantly, but they can prevent layout thrashing by making dimensions more predictable.

Best Practices:

- Use border-box globally in your CSS reset
- Be consistent across your entire project
- Document any exceptions where content-box is needed
- Consider box-sizing when creating reusable components

Common Gotchas:

- Third-party components might expect content-box
- SVG elements don't support border-box
- Some form elements have quirky box-sizing behavior`,
    demo: "box-sizing",
    code: `/* Box Sizing Examples */
.content-box {
  box-sizing: content-box; /* Default */
  width: 200px;
  padding: 20px;
  border: 2px solid #333;
  /* Total width: 244px */
}

.border-box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 2px solid #333;
  /* Total width: 200px */
}

/* Global border-box (recommended) */
* {
  box-sizing: border-box;
}`,
    keyPoints: [
      "Changes how width and height are calculated",
      "Border-box includes padding and border in dimensions",
      "Content-box is the default but less intuitive",
      "Global border-box reset is recommended",
      "Essential for predictable layouts",
    ],
    examples: [
      {
        title: "Global Reset",
        code: `*, *::before, *::after {
  box-sizing: border-box;
}

html {
  font-size: 16px;
  line-height: 1.5;
}`,
        description: "Universal border-box reset for consistent sizing.",
      },
      {
        title: "Responsive Grid",
        code: `.grid-item {
  box-sizing: border-box;
  width: 33.333%;
  padding: 1rem;
  border: 1px solid #ccc;
  float: left;
}`,
        description: "Border-box makes percentage-based grids predictable.",
      },
      {
        title: "Form Elements",
        code: `.form-control {
  box-sizing: border-box;
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}`,
        description: "Border-box ensures form elements fit their containers.",
      },
    ],
    bestPractices: [
      "Use border-box globally for consistency",
      "Apply reset early in your CSS",
      "Document any content-box exceptions",
      "Test with third-party components",
      "Consider box-sizing in component design",
    ],
    commonMistakes: [
      "Mixing box-sizing models inconsistently",
      "Not applying global reset early enough",
      "Assuming all elements support border-box",
      "Forgetting about third-party component expectations",
      "Not documenting box-sizing decisions",
    ],
  },
  {
    id: "margin",
    title: "Margin",
    content: `Margins create space outside the border, between elements. They're crucial for layout spacing but have unique behaviors that differ from padding.

Margin Characteristics:

• Transparent: Margins are always transparent
• Can be negative: Unlike padding, margins can overlap elements
• Collapse: Adjacent vertical margins can collapse into one
• Auto centering: margin: 0 auto centers block elements

Shorthand Syntax:

Same as padding:
• One value: margin: 20px; (all sides)
• Two values: margin: 10px 20px; (vertical horizontal)
• Three values: margin: 10px 20px 15px; (top horizontal bottom)
• Four values: margin: 10px 15px 20px 25px; (clockwise from top)

Margin Collapsing:

One of the most confusing aspects of CSS. Vertical margins between adjacent elements collapse to the larger of the two values.

Examples of margin collapsing:
- Two paragraphs with 20px bottom and 30px top margins = 30px gap
- Parent and child margins can collapse through
- Empty elements can collapse their own top and bottom margins

Auto Margins:

Auto margins are powerful for centering and space distribution:
- margin: 0 auto; centers block elements horizontally
- margin-left: auto; pushes element to the right
- margin-right: auto; pushes element to the left

Negative Margins:

Negative margins can:
- Pull elements closer together
- Create overlapping effects
- Extend elements beyond their containers
- Adjust positioning without affecting other elements

Percentage Margins:

Like padding, percentage margins are calculated relative to the parent's WIDTH, even for top and bottom margins.

Common Patterns:

- Centering: margin: 0 auto;
- Vertical spacing: margin-bottom: 1.5rem;
- Negative overlap: margin-top: -20px;
- Reset margins: margin: 0;

Best Practices:

- Use consistent margin scales
- Prefer margin-bottom for vertical spacing
- Be aware of margin collapsing
- Use margin for external spacing, padding for internal
- Consider using CSS logical properties for international layouts

Debugging Margins:

Browser dev tools show margins in orange, making it easy to visualize spacing issues.`,
    demo: "margin",
    code: `/* Margin Examples */
.basic-margin {
  margin: 20px; /* All sides */
}

.center-element {
  width: 300px;
  margin: 0 auto; /* Center horizontally */
}

.negative-margin {
  margin-top: -10px; /* Overlap above element */
}

.individual-margins {
  margin-top: 10px;
  margin-right: 15px;
  margin-bottom: 20px;
  margin-left: 25px;
}`,
    keyPoints: [
      "Creates space outside the border",
      "Always transparent",
      "Can be negative for overlapping",
      "Vertical margins can collapse",
      "Auto margins enable centering",
    ],
    examples: [
      {
        title: "Centering Elements",
        code: `.centered-container {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
}

.centered-text {
  text-align: center;
  margin: 2rem auto;
  max-width: 600px;
}`,
        description: "Using auto margins for horizontal centering.",
      },
      {
        title: "Vertical Spacing",
        code: `.article > * + * {
  margin-top: 1.5rem;
}

.section {
  margin-bottom: 3rem;
}`,
        description: "Consistent vertical spacing between elements.",
      },
      {
        title: "Negative Margins",
        code: `.overlap-header {
  margin-top: -50px;
  position: relative;
  z-index: 1;
}

.pull-left {
  margin-left: -20px;
}`,
        description: "Using negative margins for special effects.",
      },
    ],
    bestPractices: [
      "Use consistent margin scales throughout design",
      "Prefer margin-bottom for vertical rhythm",
      "Understand and plan for margin collapsing",
      "Use auto margins for centering",
      "Consider logical properties for internationalization",
    ],
    commonMistakes: [
      "Not understanding margin collapsing behavior",
      "Inconsistent margin values across similar elements",
      "Using margins when padding would be more appropriate",
      "Forgetting margins are transparent",
      "Not considering negative margin effects on layout",
    ],
  },
  {
    id: "display",
    title: "Display",
    content: `The display property is fundamental to CSS layout, determining how an element behaves and interacts with other elements. It's one of the most powerful properties in CSS.

Block Elements:

Block elements:
- Take up the full width of their container
- Start on a new line
- Can have width, height, margin, and padding
- Stack vertically by default

Examples: div, p, h1-h6, section, article

Inline Elements:

Inline elements:
- Only take up as much width as needed
- Don't start on a new line
- Ignore width and height properties
- Vertical margin and padding don't affect layout

Examples: span, a, strong, em, code

Inline-Block Elements:

Inline-block combines the best of both:
- Flow inline like text
- Accept width, height, margin, and padding
- Useful for navigation items and buttons

Display: None vs Visibility: Hidden:

- display: none: Removes element completely from layout
- visibility: hidden: Hides element but preserves its space

Modern Layout Values:

• flex: Creates a flex container for flexible layouts
• grid: Creates a grid container for two-dimensional layouts
• inline-flex: Inline version of flex
• inline-grid: Inline version of grid

Table Display Values:

- display: table; (acts like <table>)
- display: table-cell; (acts like <td>)
- display: table-row; (acts like <tr>)

List Display Values:

- display: list-item; (creates list item with bullet/number)

Flow Layout:

Understanding normal document flow is crucial:
1. Block elements stack vertically
2. Inline elements flow horizontally
3. Text wraps to new lines as needed

Responsive Considerations:

Display values often change at different breakpoints:
- Mobile: display: block;
- Desktop: display: flex;

Accessibility:

Be careful with display: none as it removes content from screen readers. Use visibility: hidden or aria-hidden for visual-only hiding.

Performance:

Changing display can trigger layout recalculation, which is expensive. Plan display changes carefully for animations.`,
    demo: "display",
    code: `/* Display Examples */
.block-element {
  display: block;
  width: 100%;
  height: 50px;
}

.inline-element {
  display: inline;
  /* width/height ignored */
}

.inline-block-element {
  display: inline-block;
  width: 100px;
  height: 50px;
}

.hidden-element {
  display: none; /* Completely hidden */
}

.flex-container {
  display: flex;
  justify-content: center;
}`,
    keyPoints: [
      "Controls element layout behavior",
      "Block elements stack vertically",
      "Inline elements flow horizontally",
      "Inline-block combines both behaviors",
      "Modern values enable advanced layouts",
    ],
    examples: [
      {
        title: "Navigation Menu",
        code: `.nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  display: inline-block;
  margin-right: 1rem;
}`,
        description: "Using display for horizontal navigation.",
      },
      {
        title: "Responsive Display",
        code: `.mobile-menu {
  display: block;
}

@media (min-width: 768px) {
  .mobile-menu {
    display: none;
  }
  
  .desktop-menu {
    display: flex;
  }
}`,
        description: "Changing display values for responsive design.",
      },
      {
        title: "Grid Layout",
        code: `.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.grid-item {
  display: flex;
  flex-direction: column;
}`,
        description: "Modern layout with CSS Grid and Flexbox.",
      },
    ],
    bestPractices: [
      "Understand default display values for elements",
      "Use semantic HTML with appropriate display values",
      "Consider accessibility when hiding elements",
      "Plan responsive display changes",
      "Use modern layout methods (flex, grid) when appropriate",
    ],
    commonMistakes: [
      "Using display: none for accessibility-sensitive content",
      "Not understanding inline vs block behavior",
      "Overriding semantic element display unnecessarily",
      "Not considering responsive display changes",
      "Using table display for non-tabular layouts",
    ],
  },
  {
    id: "css-reset",
    title: "CSS Reset",
    content: `CSS Reset removes inconsistent default browser styling to create a clean, predictable foundation for your designs. It's essential for cross-browser compatibility.

Why CSS Reset is Needed:

Different browsers apply different default styles:
- Margins and padding vary between browsers
- Font sizes and line heights differ
- List styles and form elements look different
- Box-sizing defaults vary

Types of CSS Resets:

• Full Reset: Removes all default styling (Eric Meyer's reset)
• Normalize: Preserves useful defaults while fixing inconsistencies
• Modern Reset: Focuses on modern browsers and best practices

Essential Reset Rules:

\`\`\`css
/* Box sizing reset */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Remove default margins and padding */
* {
  margin: 0;
  padding: 0;
}

/* Set consistent font and line height */
html {
  font-family: system-ui, sans-serif;
  line-height: 1.6;
}

/* Remove list styles */
ul, ol {
  list-style: none;
}

/* Reset form elements */
button, input, select, textarea {
  font: inherit;
  border: none;
  background: none;
}

/* Remove link underlines */
a {
  text-decoration: none;
  color: inherit;
}
\`\`\`

Modern Reset Considerations:

- Use system fonts for better performance
- Set consistent focus styles for accessibility
- Reset form elements to inherit font properties
- Consider dark mode preferences
- Include print styles

Box-Sizing Reset:

The most important modern reset:
\`\`\`css
*, *::before, *::after {
  box-sizing: border-box;
}
\`\`\`

Accessibility in Resets:

- Preserve focus indicators
- Maintain semantic meaning
- Don't remove outline completely
- Consider reduced motion preferences

Performance Benefits:

- Reduces unexpected layout shifts
- Provides consistent baseline across browsers
- Prevents style inheritance issues
- Makes debugging easier

Best Practices:

- Apply reset at the beginning of your CSS
- Document any custom reset rules
- Test across multiple browsers
- Consider using a well-maintained reset library
- Update reset rules as browser support changes

Popular Reset Libraries:

- Normalize.css: Preserves useful defaults
- Reset.css: Complete style removal
- Modern-normalize: Modern browser focus
- Sanitize.css: Opinionated defaults`,
    demo: "css-reset",
    code: `/* CSS Reset Example */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

ul, ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  border: none;
  background: none;
  cursor: pointer;
}`,
    keyPoints: [
      "Removes inconsistent browser defaults",
      "Creates predictable styling foundation",
      "Essential for cross-browser compatibility",
      "Should be applied early in CSS",
      "Modern resets focus on box-sizing and accessibility",
    ],
    examples: [
      {
        title: "Minimal Modern Reset",
        code: `*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}`,
        description: "A minimal reset focusing on the most important rules.",
      },
      {
        title: "Form Reset",
        code: `input, button, textarea, select {
  font: inherit;
  color: inherit;
}

button {
  border: none;
  background: none;
  cursor: pointer;
}

input:focus, textarea:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}`,
        description: "Specific reset rules for form elements.",
      },
      {
        title: "Accessibility-Focused Reset",
        code: `@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

:focus {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}`,
        description: "Reset that considers accessibility preferences.",
      },
    ],
    bestPractices: [
      "Apply reset before other styles",
      "Use a well-tested reset library",
      "Document any custom reset rules",
      "Test across multiple browsers",
      "Consider accessibility in reset choices",
    ],
    commonMistakes: [
      "Applying reset after other styles",
      "Removing all focus indicators",
      "Not testing reset across browsers",
      "Using outdated reset techniques",
      "Forgetting to reset form elements",
    ],
  },
  {
    id: "main-container",
    title: "Main Container",
    content: `Main containers are wrapper elements that control the overall layout and width of your content. They're the foundation of responsive, centered layouts.

Purpose of Containers:

Containers serve several important functions:
- Control maximum content width
- Center content horizontally
- Provide consistent padding/margins
- Create responsive breakpoints
- Establish layout boundaries

Basic Container Pattern:

\`\`\`css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
\`\`\`

Responsive Container Strategies:

• Fluid Containers: width: 100%; max-width: 1200px;
• Fixed Containers: Different fixed widths at breakpoints
• Hybrid Containers: Combination of fluid and fixed

Container Sizing:

Common max-width values:
- Small sites: 800px - 1000px
- Medium sites: 1200px - 1400px
- Large sites: 1600px - 1920px

Padding Strategies:

- Fixed padding: padding: 0 20px;
- Responsive padding: padding: 0 clamp(1rem, 4vw, 2rem);
- Breakpoint-based: Different padding at different sizes

Multiple Container Types:

Many sites use different container sizes:
- .container-sm: max-width: 800px;
- .container-md: max-width: 1200px;
- .container-lg: max-width: 1600px;
- .container-fluid: width: 100%;

CSS Grid Containers:

Modern approach using CSS Grid:
\`\`\`css
.container {
  display: grid;
  grid-template-columns: 
    1fr min(1200px, 100% - 2rem) 1fr;
}

.container > * {
  grid-column: 2;
}
\`\`\`

Flexbox Containers:

Using flexbox for centering:
\`\`\`css
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
\`\`\`

Accessibility Considerations:

- Ensure sufficient padding for touch targets
- Consider reading width (45-75 characters)
- Maintain proper heading hierarchy
- Provide skip links for navigation

Performance:

- Use CSS custom properties for consistent sizing
- Avoid unnecessary nesting
- Consider container queries for component-based design

Best Practices:

- Establish container system early in project
- Use consistent naming conventions
- Document container usage guidelines
- Test on various screen sizes
- Consider content-first approach to sizing`,
    demo: "main-container",
    code: `/* Main Container Examples */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.fluid-container {
  width: 100%;
  max-width: 100%;
  padding: 0 15px;
}

.centered-container {
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
}

/* Responsive containers */
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
}`,
    keyPoints: [
      "Control overall content width and centering",
      "Provide consistent padding and margins",
      "Essential for responsive design",
      "Create layout boundaries",
      "Foundation for grid systems",
    ],
    examples: [
      {
        title: "Basic Container",
        code: `.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}`,
        description: "Standard container with responsive padding.",
      },
      {
        title: "Multiple Container Sizes",
        code: `.container-sm { max-width: 576px; }
.container-md { max-width: 768px; }
.container-lg { max-width: 992px; }
.container-xl { max-width: 1200px; }

.container-sm,
.container-md,
.container-lg,
.container-xl {
  margin: 0 auto;
  padding: 0 1rem;
}`,
        description: "Multiple container sizes for different content types.",
      },
      {
        title: "CSS Grid Container",
        code: `.grid-container {
  display: grid;
  grid-template-columns: 
    1fr 
    min(1200px, calc(100% - 2rem)) 
    1fr;
  grid-column-gap: 1rem;
}

.grid-container > * {
  grid-column: 2;
}`,
        description: "Modern container using CSS Grid.",
      },
    ],
    bestPractices: [
      "Use max-width for responsive behavior",
      "Center with margin: 0 auto",
      "Provide adequate padding for mobile",
      "Consider content-first sizing approach",
      "Use consistent container naming",
    ],
    commonMistakes: [
      "Using fixed width instead of max-width",
      "Forgetting padding for mobile devices",
      "Inconsistent container sizes across pages",
      "Not considering very wide screens",
      "Overcomplicating container systems",
    ],
  },
  {
    id: "max-width",
    title: "Maximum Width",
    content: `Max-width sets the maximum width an element can have, making it essential for responsive design and preventing content from becoming too wide on large screens.

How Max-Width Works:

Max-width acts as a ceiling for the width property. If the calculated width exceeds max-width, max-width takes precedence.

Responsive Design Foundation:

Max-width is crucial for responsive design:
- Prevents content from stretching too wide
- Maintains readability on large screens
- Creates flexible layouts that adapt to screen size
- Essential for mobile-first design

Common Patterns:

• Responsive Images: max-width: 100%; height: auto;
• Centered Containers: max-width: 1200px; margin: 0 auto;
• Flexible Components: width: 100%; max-width: 400px;
• Reading Width: max-width: 65ch; (optimal for text)

Value Types:

- Length units: px, em, rem, vw
- Percentage: Relative to parent container
- none: No maximum width (default)
- Intrinsic sizing: max-content, min-content, fit-content

Max-Width vs Width:

- width: 100%; max-width: 600px; (flexible up to 600px)
- width: 600px; (always 600px, not responsive)

Responsive Images:

The most common use case:
\`\`\`css
img {
  max-width: 100%;
  height: auto;
}
\`\`\`

Typography and Readability:

Optimal reading width:
\`\`\`css
.text-content {
  max-width: 65ch; /* 65 characters wide */
  line-height: 1.6;
}
\`\`\`

Container Queries:

Modern approach with container queries:
\`\`\`css
.component {
  max-width: 100%;
  container-type: inline-size;
}
\`\`\`

Flexbox Integration:

Max-width works well with flexbox:
\`\`\`css
.flex-item {
  flex: 1;
  max-width: 300px;
}
\`\`\`

Grid Integration:

In CSS Grid layouts:
\`\`\`css
.grid-item {
  max-width: 100%;
  justify-self: center;
}
\`\`\`

Performance Considerations:

- Max-width changes can trigger layout recalculation
- Use CSS custom properties for consistent values
- Consider using clamp() for more sophisticated responsive sizing

Accessibility:

- Prevents text lines from becoming too long
- Improves readability for users with dyslexia
- Maintains comfortable reading experience
- Works well with zoom functionality

Best Practices:

- Always use max-width for responsive images
- Set max-width on text containers for readability
- Use consistent max-width values across your design
- Test on various screen sizes
- Consider content-first approach to max-width values`,
    demo: "max-width",
    code: `/* Max Width Examples */
.responsive-box {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.text-container {
  max-width: 65ch; /* Optimal reading width */
  line-height: 1.6;
}

.image-responsive {
  width: 100%;
  max-width: 100%;
  height: auto;
}

.card {
  width: 100%;
  max-width: 400px;
  padding: 20px;
}`,
    keyPoints: [
      "Sets maximum width constraint",
      "Essential for responsive design",
      "Prevents content from becoming too wide",
      "Works with percentage and auto widths",
      "Improves readability on large screens",
    ],
    examples: [
      {
        title: "Responsive Images",
        code: `img {
  max-width: 100%;
  height: auto;
  display: block;
}

.hero-image {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}`,
        description: "Making images responsive with max-width.",
      },
      {
        title: "Text Content",
        code: `.article-content {
  max-width: 65ch;
  margin: 0 auto;
  line-height: 1.6;
  font-size: 1.125rem;
}

.sidebar-text {
  max-width: 45ch;
  font-size: 0.875rem;
}`,
        description: "Optimal reading widths for different content types.",
      },
      {
        title: "Component Constraints",
        code: `.card {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.modal {
  width: 90vw;
  max-width: 600px;
  margin: 0 auto;
}`,
        description: "Using max-width for component sizing.",
      },
    ],
    bestPractices: [
      "Use max-width for all responsive images",
      "Set reading-optimal widths for text content",
      "Combine with width: 100% for flexibility",
      "Use consistent max-width values",
      "Test on various screen sizes",
    ],
    commonMistakes: [
      "Using fixed width instead of max-width",
      "Not setting max-width on images",
      "Ignoring optimal reading widths",
      "Inconsistent max-width values",
      "Not testing on large screens",
    ],
  },
  {
    id: "min-width",
    title: "Minimum Width",
    content: `Min-width sets the minimum width an element must have, preventing elements from becoming too narrow and maintaining layout integrity across different screen sizes.

How Min-Width Works:

Min-width acts as a floor for the width property. If the calculated width is less than min-width, min-width takes precedence.

Preventing Layout Collapse:

Min-width prevents:
- Buttons from becoming too narrow to click
- Text containers from becoming unreadable
- Navigation items from overlapping
- Form fields from becoming unusable
- Sidebar content from disappearing

Common Use Cases:

• Buttons: min-width: 120px; (comfortable click target)
• Form Fields: min-width: 200px; (usable input area)
• Navigation Items: min-width: 80px; (readable labels)
• Sidebar: min-width: 250px; (functional sidebar)
• Cards: min-width: 300px; (readable content)

Responsive Design:

Min-width is crucial for:
- Maintaining usability on small screens
- Preventing content from becoming illegible
- Ensuring interactive elements remain clickable
- Preserving layout structure

Flexbox Integration:

In flexible layouts:
\`\`\`css
.flex-item {
  flex: 1;
  min-width: 200px; /* Prevents shrinking too much */
}
\`\`\`

Grid Integration:

In CSS Grid:
\`\`\`css
.grid-item {
  min-width: 250px;
  width: 100%;
}
\`\`\`

Value Types:

- Length units: px, em, rem, vw
- Percentage: Relative to parent container
- 0: No minimum width (default)
- Intrinsic sizing: max-content, min-content, fit-content

Button Design:

Essential for usable buttons:
\`\`\`css
.button {
  min-width: 120px;
  padding: 0.75rem 1.5rem;
  text-align: center;
}
\`\`\`

Form Elements:

Maintaining usability:
\`\`\`css
.input-field {
  width: 100%;
  min-width: 200px;
  max-width: 400px;
}
\`\`\`

Navigation Design:

Preventing menu collapse:
\`\`\`css
.nav-item {
  min-width: 80px;
  text-align: center;
}
\`\`\`

Accessibility Considerations:

- Ensures touch targets meet minimum size requirements (44px)
- Maintains readability for users with visual impairments
- Prevents content from becoming unusable when zoomed
- Supports keyboard navigation by maintaining clickable areas

Performance:

- Min-width changes can trigger layout recalculation
- Use CSS custom properties for consistent values
- Consider using clamp() for sophisticated responsive behavior

Best Practices:

- Set min-width on interactive elements
- Use consistent min-width values for similar components
- Test on various screen sizes and zoom levels
- Consider touch target guidelines (minimum 44px)
- Document min-width decisions for team consistency

Common Patterns:

- Responsive sidebar: min-width: 250px; width: 25%;
- Flexible button: min-width: 120px; width: auto;
- Form field: min-width: 200px; width: 100%;
- Navigation item: min-width: 80px; flex: 1;`,
    demo: "min-width",
    code: `/* Min Width Examples */
.button {
  min-width: 120px;
  padding: 0.75rem 1.5rem;
  text-align: center;
}

.sidebar {
  width: 25%;
  min-width: 250px;
}

.input-field {
  width: 100%;
  min-width: 200px;
  max-width: 400px;
}

.flexible-box {
  width: 50%;
  min-width: 250px;
  max-width: 500px;
}`,
    keyPoints: [
      "Sets minimum width constraint",
      "Prevents elements from becoming too narrow",
      "Essential for usability and accessibility",
      "Works with flexible layouts",
      "Maintains layout integrity",
    ],
    examples: [
      {
        title: "Button Sizing",
        code: `.btn {
  min-width: 120px;
  padding: 0.75rem 1.5rem;
  text-align: center;
  border: none;
  border-radius: 4px;
}

.btn-small {
  min-width: 80px;
  padding: 0.5rem 1rem;
}`,
        description: "Ensuring buttons maintain usable sizes.",
      },
      {
        title: "Form Controls",
        code: `.form-control {
  width: 100%;
  min-width: 200px;
  max-width: 400px;
  padding: 0.75rem;
  border: 1px solid #ccc;
}

.form-control-small {
  min-width: 150px;
}`,
        description: "Maintaining form field usability.",
      },
      {
        title: "Flexible Grid",
        code: `.grid-item {
  flex: 1;
  min-width: 250px;
  padding: 1rem;
  margin: 0.5rem;
}

@media (max-width: 768px) {
  .grid-item {
    min-width: 100%;
  }
}`,
        description: "Responsive grid with minimum widths.",
      },
    ],
    bestPractices: [
      "Set min-width on all interactive elements",
      "Use consistent values for similar components",
      "Consider touch target accessibility guidelines",
      "Test with different content lengths",
      "Document min-width decisions",
    ],
    commonMistakes: [
      "Not setting min-width on buttons and form fields",
      "Using min-width values that are too small",
      "Inconsistent min-width across similar elements",
      "Not considering mobile touch targets",
      "Forgetting to test with varying content",
    ],
  },
  {
    id: "max-min-height",
    title: "Maximum & Minimum Height",
    content: `Maximum and minimum height properties control the vertical dimensions of elements, essential for creating flexible layouts that adapt to content while maintaining design integrity.

Max-Height Applications:

Max-height is commonly used for:
- Scrollable content areas
- Modal dialogs that shouldn't exceed viewport
- Image containers that need size limits
- Text areas with overflow handling
- Dropdown menus with scroll

Min-Height Applications:

Min-height ensures:
- Containers maintain minimum visual presence
- Hero sections fill viewport appropriately
- Cards have consistent heights in grids
- Sidebars maintain functional height
- Content areas don't collapse when empty

Viewport-Based Heights:

Modern responsive design uses viewport units:
- min-height: 100vh; (full viewport height)
- max-height: 80vh; (80% of viewport)
- height: clamp(300px, 50vh, 600px); (responsive range)

Scrollable Content Pattern:

Common pattern for content areas:
\`\`\`css
.content-area {
  max-height: 400px;
  overflow-y: auto;
  padding: 1rem;
  border: 1px solid #ddd;
}
\`\`\`

Hero Section Pattern:

Full-height hero sections:
\`\`\`css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
\`\`\`

Card Grid Consistency:

Equal height cards:
\`\`\`css
.card {
  min-height: 300px;
  max-height: 500px;
  overflow: hidden;
}
\`\`\`

Modal Dialog Sizing:

Responsive modal heights:
\`\`\`css
.modal {
  max-height: 90vh;
  min-height: 200px;
  overflow-y: auto;
}
\`\`\`

Flexbox Integration:

Height constraints in flex layouts:
\`\`\`css
.flex-container {
  display: flex;
  min-height: 100vh;
}

.flex-item {
  flex: 1;
  min-height: 200px;
  max-height: 600px;
}
\`\`\`

Grid Integration:

Height control in CSS Grid:
\`\`\`css
.grid-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
\`\`\`

Responsive Considerations:

- Use viewport units for responsive heights
- Consider content overflow at different screen sizes
- Test on devices with different aspect ratios
- Account for virtual keyboards on mobile devices

Accessibility:

- Ensure content remains accessible when constrained
- Provide scroll indicators when content overflows
- Maintain sufficient height for touch targets
- Consider users who zoom content

Performance:

- Height changes can trigger layout recalculation
- Use CSS custom properties for consistent values
- Consider using contain property for performance optimization

Common Patterns:

- Sticky footer: min-height: 100vh; on container
- Scrollable sidebar: max-height: calc(100vh - 60px);
- Responsive hero: min-height: clamp(400px, 50vh, 800px);
- Modal content: max-height: 80vh; overflow-y: auto;

Best Practices:

- Always provide fallbacks for viewport units
- Test height constraints with varying content amounts
- Use overflow properties appropriately
- Consider print styles for height-constrained elements
- Document height decisions for team consistency

Debugging Tips:

- Use browser dev tools to visualize height constraints
- Check for content overflow issues
- Test with different content lengths
- Verify behavior on various screen sizes`,
    demo: "max-min-height",
    code: `/* Height Constraints Examples */
.flexible-container {
  min-height: 300px;
  max-height: 600px;
  overflow-y: auto;
}

.hero-section {
  min-height: 100vh;
  max-height: 800px;
}

.card-content {
  min-height: 200px;
  max-height: 400px;
  overflow: hidden;
}

.textarea {
  min-height: 100px;
  max-height: 300px;
  resize: vertical;
}`,
    keyPoints: [
      "Control vertical element dimensions",
      "Max-height prevents excessive height",
      "Min-height ensures minimum presence",
      "Essential for responsive layouts",
      "Work well with overflow properties",
    ],
    examples: [
      {
        title: "Hero Section",
        code: `.hero {
  min-height: 100vh;
  max-height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}`,
        description: "Full-height hero with maximum constraint.",
      },
      {
        title: "Scrollable Content",
        code: `.content-area {
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}`,
        description: "Content area with scroll when needed.",
      },
      {
        title: "Card Grid",
        code: `.card {
  min-height: 250px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card-content {
  flex: 1;
  overflow-y: auto;
}`,
        description: "Consistent card heights in grid layouts.",
      },
    ],
    bestPractices: [
      "Use viewport units for responsive heights",
      "Combine with overflow for content management",
      "Test with varying content amounts",
      "Consider mobile viewport differences",
      "Provide fallbacks for older browsers",
    ],
    commonMistakes: [
      "Not accounting for content overflow",
      "Using fixed heights instead of constraints",
      "Forgetting mobile viewport considerations",
      "Not testing with different content lengths",
      "Ignoring accessibility implications",
    ],
  },
  {
    id: "overflow",
    title: "Overflow",
    content: `Overflow controls what happens when content is larger than its container. It's essential for handling dynamic content, creating scrollable areas, and preventing layout breaks.

Overflow Values:

• visible (default): Content overflows the container boundaries
• hidden: Clips content that exceeds the container
• scroll: Always shows scrollbars, even if not needed
• auto: Shows scrollbars only when content overflows
• clip: Similar to hidden but more performant

Directional Control:

- overflow-x: Controls horizontal overflow
- overflow-y: Controls vertical overflow
- overflow: Shorthand for both directions

Common Use Cases:

• Scrollable Content: overflow-y: auto; for long content
• Image Cropping: overflow: hidden; for image containers
• Horizontal Scrolling: overflow-x: auto; for wide tables
• Text Truncation: Combined with text-overflow: ellipsis
• Modal Content: overflow-y: auto; for long modal content

Scrollable Container Pattern:

\`\`\`css
.scrollable {
  height: 300px;
  overflow-y: auto;
  padding: 1rem;
  border: 1px solid #ddd;
}
\`\`\`

Text Truncation Pattern:

\`\`\`css
.truncate {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
\`\`\`

Horizontal Scroll Pattern:

\`\`\`css
.horizontal-scroll {
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  padding: 1rem 0;
}
\`\`\`

Performance Considerations:

- overflow: hidden can improve performance by preventing repaints
- overflow: clip is more performant than hidden
- Scrollable areas can impact scroll performance
- Use contain property for better performance

Accessibility:

- Ensure scrollable areas are keyboard accessible
- Provide visual indicators for scrollable content
- Consider focus management in scrollable areas
- Test with screen readers

Mobile Considerations:

- Touch scrolling behavior varies by device
- Consider momentum scrolling: -webkit-overflow-scrolling: touch;
- Account for virtual keyboards affecting viewport
- Test scroll behavior on various devices

Flexbox and Grid:

Overflow behavior in modern layouts:
\`\`\`css
.flex-container {
  display: flex;
  overflow-x: auto;
}

.grid-container {
  display: grid;
  overflow: hidden; /* Prevents grid blowout */
}
\`\`\`

Styling Scrollbars:

Custom scrollbar styling:
\`\`\`css
.scrollable::-webkit-scrollbar {
  width: 8px;
}

.scrollable::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.scrollable::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}
\`\`\`

Common Patterns:

- Card with scrollable content: max-height + overflow-y: auto
- Horizontal navigation: display: flex + overflow-x: auto
- Image gallery: overflow: hidden for cropping
- Code blocks: overflow-x: auto for long lines
- Modal body: overflow-y: auto for long content

Debugging Overflow:

- Use browser dev tools to identify overflow sources
- Add temporary borders to visualize container boundaries
- Check for negative margins causing overflow
- Verify box-sizing settings

Best Practices:

- Use overflow: auto instead of scroll when possible
- Provide visual cues for scrollable content
- Test overflow behavior with varying content amounts
- Consider performance implications of scrollable areas
- Ensure accessibility for keyboard and screen reader users

Modern Alternatives:

- CSS Container Queries for responsive overflow handling
- CSS Scroll Snap for better scroll experiences
- Intersection Observer API for scroll-based interactions`,
    demo: "overflow",
    code: `/* Overflow Examples */
.scrollable-content {
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
}

.hidden-overflow {
  width: 200px;
  height: 100px;
  overflow: hidden;
}

.text-ellipsis {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.scroll-both {
  width: 300px;
  height: 200px;
  overflow: scroll;
}`,
    keyPoints: [
      "Controls content that exceeds container",
      "Four main values: visible, hidden, scroll, auto",
      "Can be controlled per axis",
      "Essential for scrollable interfaces",
      "Affects performance and accessibility",
    ],
    examples: [
      {
        title: "Scrollable Sidebar",
        code: `.sidebar {
  width: 250px;
  height: 100vh;
  overflow-y: auto;
  padding: 1rem;
  background-color: #f8f9fa;
}

.sidebar-content {
  padding-bottom: 2rem;
}`,
        description: "Sidebar that scrolls when content overflows.",
      },
      {
        title: "Horizontal Card Scroll",
        code: `.card-container {
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  padding: 1rem 0;
  scroll-snap-type: x mandatory;
}

.card {
  flex: 0 0 300px;
  scroll-snap-align: start;
}`,
        description: "Horizontal scrolling card layout.",
      },
      {
        title: "Text Truncation",
        code: `.title {
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.multiline-truncate {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`,
        description: "Single and multi-line text truncation.",
      },
    ],
    bestPractices: [
      "Use auto instead of scroll when possible",
      "Provide visual indicators for scrollable content",
      "Test with keyboard navigation",
      "Consider mobile touch scrolling",
      "Style scrollbars for better UX",
    ],
    commonMistakes: [
      "Using scroll instead of auto",
      "Not providing scrollable content indicators",
      "Forgetting keyboard accessibility",
      "Not testing on mobile devices",
      "Ignoring scrollbar styling",
    ],
  },
];
