// Lesson Data (100 lessons)
const lessons = [
    {
        title: "Lesson 1: Introduction to HTML",
        content: `
            <p>HTML (HyperText Markup Language) is the backbone of web pages, structuring content like text, images, and links. It uses tags to define elements, creating a tree-like structure called the DOM (Document Object Model). HTML5, the latest version, adds semantic tags and multimedia support, enabling accessible, interactive sites. Learning HTML unlocks web development’s foundation.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<html>
    <body>
        <p>Hello, World!</p>
    </body>
</html>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>Hello, World!</p>
            </section>
        `
    },
    {
        title: "Lesson 2: Basic Structure with <html>",
        content: `
            <p>The <code>&lt;html&gt;</code> tag is the root of an HTML document, containing all other tags. It’s a container, typically including <code>&lt;head&gt;</code> for metadata and <code>&lt;body&gt;</code> for content. The <code>lang</code> attribute (e.g., <code>lang="en"</code>) aids accessibility, telling browsers and screen readers the page’s language. It sets up every web page.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<html lang="en">
    <head>
        <title>My Page</title>
    </head>
    <body>
        <p>Content</p>
    </body>
</html>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>Content</p>
            </section>
        `
    },
    {
        title: "Lesson 3: Metadata with <head>",
        content: `
            <p>The <code>&lt;head&gt;</code> tag holds metadata about the document, like the title, character set, and links to stylesheets. It’s invisible to users but critical for browsers and search engines. Elements like <code>&lt;title&gt;</code> and <code>&lt;meta&gt;</code> inside it define page properties. The head ensures proper rendering and SEO.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<head>
    <title>My Site</title>
    <meta charset="UTF-8">
</head>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>[Head content is invisible]</p>
            </section>
        `
    },
    {
        title: "Lesson 4: Content with <body>",
        content: `
            <p>The <code>&lt;body&gt;</code> tag contains all visible content, like text, images, and links. It’s the main area users interact with, holding elements like <code>&lt;p&gt;</code>, <code>&lt;div&gt;</code>, or <code>&lt;img&gt;</code>. It’s a block-level element, structuring the page’s layout. The body brings websites to life.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<body>
    <h1>Welcome</h1>
    <p>This is my site.</p>
</body>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <h1>Welcome</h1>
                <p>This is my site.</p>
            </section>
        `
    },
    {
        title: "Lesson 5: Headings with <h1> to <h6>",
        content: `
            <p>Headings (<code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>) organize content hierarchically, with <code>&lt;h1&gt;</code> as the most important (largest) and <code>&lt;h6&gt;</code> the least. They’re block-level, semantic elements, aiding SEO and accessibility. Screen readers use them for navigation. Headings clarify structure and emphasis.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<h1>Main Title</h1>
<h2>Subtitle</h2>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <h1>Main Title</h1>
                <h2>Subtitle</h2>
            </section>
        `
    },
    {
        title: "Lesson 6: Paragraphs with <p>",
        content: `
            <p>The <code>&lt;p&gt;</code> tag defines a paragraph, grouping text for readability. It’s a block-level element, adding spacing before and after. Paragraphs are essential for articles, descriptions, or stories, ensuring clear content flow. They’re simple but vital for web text.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<p>This is a paragraph.</p>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>This is a paragraph.</p>
            </section>
        `
    },
    {
        title: "Lesson 7: Links with <a>",
        content: `
            <p>The <code>&lt;a&gt;</code> tag creates hyperlinks, connecting pages or resources via the <code>href</code> attribute. It’s an inline element, often wrapping text or images. The <code>target</code> attribute (e.g., <code>_blank</code>) controls link behavior. Links enable navigation, making the web interconnected.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<a href="https://example.com">Visit</a>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <a href="https://example.com">Visit</a>
            </section>
        `
    },
    {
        title: "Lesson 8: Images with <img>",
        content: `
            <p>The <code>&lt;img&gt;</code> tag embeds images, using <code>src</code> for the file path and <code>alt</code> for accessibility. It’s a self-closing, inline element, enhancing visual appeal. The <code>alt</code> text aids screen readers and SEO. Images make pages engaging and informative.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<img src="photo.jpg" alt="A photo">
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>[Image placeholder]</p>
            </section>
        `
    },
    {
        title: "Lesson 9: Lists with <ul> and <ol>",
        content: `
            <p>The <code>&lt;ul&gt;</code> tag creates unordered (bulleted) lists, while <code>&lt;ol&gt;</code> makes ordered (numbered) ones. Both are block-level, containing <code>&lt;li&gt;</code> items. Lists organize content, like menus or steps, improving readability. They’re semantic and accessible.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </section>
        `
    },
    {
        title: "Lesson 10: List Items with <li>",
        content: `
            <p>The <code>&lt;li&gt;</code> tag defines items in <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> lists. It’s a block-level element, holding text, links, or other content. List items structure information clearly, aiding navigation and comprehension. They’re essential for organized content.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<ol>
    <li>First</li>
    <li>Second</li>
</ol>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <ol>
                    <li>First</li>
                    <li>Second</li>
                </ol>
            </section>
        `
    },
    {
        title: "Lesson 11: Divisions with <div>",
        content: `
            <p>The <code>&lt;div&gt;</code> tag is a block-level container for grouping content or styling. It’s non-semantic, often used for layout with CSS classes or IDs. Divs are versatile, structuring sections like headers or columns. They’re a core tool for web design.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<div>
    <p>Content</p>
</div>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <div>
                    <p>Content</p>
                </div>
            </section>
        `
    },
    {
        title: "Lesson 12: Spans with <span>",
        content: `
            <p>The <code>&lt;span&gt;</code> tag is an inline container for styling or scripting small text portions. It’s non-semantic, often used with CSS classes to highlight words or phrases. Spans add flexibility without breaking text flow. They’re perfect for minor tweaks.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<p>Text with <span>highlight</span>.</p>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>Text with <span>highlight</span>.</p>
            </section>
        `
    },
    {
        title: "Lesson 13: Formatting with <strong> and <em>",
        content: `
            <p>The <code>&lt;strong&gt;</code> tag indicates important text, typically bold, while <code>&lt;em&gt;</code> shows emphasis, usually italicized. Both are inline and semantic, aiding accessibility and SEO. They convey meaning, not just style, to users and screen readers. They enhance text clarity.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<p><strong>Bold</strong> and <em>italic</em>.</p>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p><strong>Bold</strong> and <em>italic</em>.</p>
            </section>
        `
    },
    {
        title: "Lesson 14: Line Breaks with <br>",
        content: `
            <p>The <code>&lt;br&gt;</code> tag inserts a line break within text, forcing content to the next line. It’s a self-closing, inline element, useful for addresses or poems. Overuse can harm accessibility; CSS is often better for spacing. Breaks control text flow simply.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<p>Line one<br>Line two</p>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>Line one<br>Line two</p>
            </section>
        `
    },
    {
        title: "Lesson 15: Horizontal Rules with <hr>",
        content: `
            <p>The <code>&lt;hr&gt;</code> tag creates a thematic break, like a horizontal line, to separate sections. It’s a self-closing, block-level element, often styled with CSS. It signals a content shift, enhancing readability. Horizontal rules add visual structure to pages.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<p>Section one</p>
<hr>
<p>Section two</p>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>Section one</p>
                <hr>
                <p>Section two</p>
            </section>
        `
    },
    {
        title: "Lesson 16: Semantic Elements Overview",
        content: `
            <p>Semantic elements, like <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, or <code>&lt;article&gt;</code>, describe their purpose clearly. They’re block-level, improving accessibility and SEO by defining content roles. Unlike <code>&lt;div&gt;</code>, they convey meaning to browsers and screen readers. Semantics make code intuitive and structured.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<header>
    <h1>My Site</h1>
</header>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <header>
                    <h1>My Site</h1>
                </header>
            </section>
        `
    },
    {
        title: "Lesson 17: Headers with <header>",
        content: `
            <p>The <code>&lt;header&gt;</code> tag defines introductory content, like logos, navbars, or titles. It’s a block-level, semantic element, often at the page or section top. It aids accessibility by marking key areas. Headers set the tone for user experience.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<header>
    <h1>Welcome</h1>
</header>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <header>
                    <h1>Welcome</h1>
                </header>
            </section>
        `
    },
    {
        title: "Lesson 18: Footers with <footer>",
        content: `
            <p>The <code>&lt;footer&gt;</code> tag holds closing content, like copyrights or contact info. It’s a block-level, semantic element, typically at the page or section bottom. It clarifies structure for screen readers and SEO. Footers provide essential endnotes.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<footer>
    <p>© 2025</p>
</footer>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <footer>
                    <p>© 2025</p>
                </footer>
            </section>
        `
    },
    {
        title: "Lesson 19: Navigation with <nav>",
        content: `
            <p>The <code>&lt;nav&gt;</code> tag marks navigation links, like menus or breadcrumbs. It’s a block-level, semantic element, helping screen readers identify key navigation areas. It often contains <code>&lt;ul&gt;</code> or <code>&lt;a&gt;</code> tags. Navs guide users efficiently.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<nav>
    <a href="#">Home</a>
</nav>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <nav>
                    <a href="#">Home</a>
                </nav>
            </section>
        `
    },
    {
        title: "Lesson 20: Articles with <article>",
        content: `
            <p>The <code>&lt;article&gt;</code> tag represents standalone content, like blog posts or news items. It’s a block-level, semantic element, reusable across contexts. It aids SEO and accessibility by defining complete units. Articles make content modular and clear.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<article>
    <h2>News</h2>
    <p>Story here.</p>
</article>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <article>
                    <h2>News</h2>
                    <p>Story here.</p>
                </article>
            </section>
        `
    },
    {
        title: "Lesson 21: Sections with <section>",
        content: `
            <p>The <code>&lt;section&gt;</code> tag groups related content, like chapters or tabs. It’s a block-level, semantic element, often with a heading. It clarifies structure for accessibility and SEO, unlike generic <code>&lt;div&gt;</code>. Sections organize pages logically.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<section>
    <h2>Part</h2>
    <p>Details.</p>
</section>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <section>
                    <h2>Part</h2>
                    <p>Details.</p>
                </section>
            </section>
        `
    },
    {
        title: "Lesson 22: Main Content with <main>",
        content: `
            <p>The <code>&lt;main&gt;</code> tag holds the primary content, like articles or forms, excluding headers or footers. It’s a block-level, semantic element, used once per page. It helps screen readers focus on the core section. Main clarifies page focus.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<main>
    <p>Main content.</p>
</main>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <main>
                    <p>Main content.</p>
                </main>
            </section>
        `
    },
    {
        title: "Lesson 23: Forms with <form>",
        content: `
            <p>The <code>&lt;form&gt;</code> tag creates interactive forms for user input, like text or buttons. It’s a block-level element, using <code>action</code> and <code>method</code> attributes to process data. Forms are essential for logins or surveys, enabling user engagement.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<form action="/submit">
    <input type="text">
</form>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <form action="/submit">
                    <input type="text">
                </form>
            </section>
        `
    },
    {
        title: "Lesson 24: Inputs with <input>",
        content: `
            <p>The <code>&lt;input&gt;</code> tag creates fields for user data, like text or checkboxes. It’s a self-closing, inline element, with types like <code>text</code> or <code>radio</code>. Attributes like <code>name</code> or <code>required</code> add functionality. Inputs power form interactions.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<input type="text" name="name">
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <input type="text" name="name">
            </section>
        `
    },
    {
        title: "Lesson 25: Labels with <label>",
        content: `
            <p>The <code>&lt;label&gt;</code> tag describes an <code>&lt;input&gt;</code>, improving accessibility. It’s inline, linked via the <code>for</code> attribute to an input’s <code>id</code>. Clicking a label focuses its input, aiding usability. Labels clarify form fields for all users.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<label for="name">Name:</label>
<input id="name" type="text">
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <label for="name">Name:</label>
                <input id="name" type="text">
            </section>
        `
    },
    {
        title: "Lesson 26: Buttons with <button>",
        content: `
            <p>The <code>&lt;button&gt;</code> tag creates clickable elements, often for form submission. It’s an inline-block element, with types like <code>submit</code> or <code>button</code>. Accessible with <code>aria-label</code>, buttons trigger actions. They’re key for interactivity.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<button>Click</button>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <button>Click</button>
            </section>
        `
    },
    {
        title: "Lesson 27: Textareas with <textarea>",
        content: `
            <p>The <code>&lt;textarea&gt;</code> tag allows multi-line text input, ideal for comments or messages. It’s a block-level element, with <code>rows</code> and <code>cols</code> for size. It’s accessible with labels, supporting longer user input. Textareas enhance form flexibility.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<textarea rows="4" cols="50"></textarea>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <textarea rows="4" cols="50"></textarea>
            </section>
        `
    },
    {
        title: "Lesson 28: Select Menus with <select>",
        content: `
            <p>The <code>&lt;select&gt;</code> tag creates dropdown menus, with <code>&lt;option&gt;</code> tags for choices. It’s an inline-block element, accessible via keyboard and screen readers. The <code>name</code> attribute sends data. Selects simplify user choices in forms.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<select name="choice">
    <option>Option 1</option>
    <option>Option 2</option>
</select>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <select name="choice">
                    <option>Option 1</option>
                    <option>Option 2</option>
                </select>
            </section>
        `
    },
    {
        title: "Lesson 29: Options with <option>",
        content: `
            <p>The <code>&lt;option&gt;</code> tag defines items in a <code>&lt;select&gt;</code> dropdown. It uses the <code>value</code> attribute for submitted data, with <code>selected</code> for defaults. It’s accessible, ensuring clear choices. Options make dropdowns functional and user-friendly.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<select>
    <option value="a">A</option>
    <option value="b">B</option>
</select>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <select>
                    <option value="a">A</option>
                    <option value="b">B</option>
                </select>
            </section>
        `
    },
    {
        title: "Lesson 30: Tables with <table>",
        content: `
            <p>The <code>&lt;table&gt;</code> tag organizes data in rows and columns, ideal for schedules or stats. It’s a block-level element, containing <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>, or <code>&lt;th&gt;</code>. Accessible with captions, tables present data clearly. They’re powerful for structured displays.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<table>
    <tr>
        <td>Cell</td>
    </tr>
</table>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <table>
                    <tr>
                        <td>Cell</td>
                    </tr>
                </table>
            </section>
        `
    },
    {
        title: "Lesson 31: Table Rows with <tr>",
        content: `
            <p>The <code>&lt;tr&gt;</code> tag defines a table row, holding <code>&lt;td&gt;</code> or <code>&lt;th&gt;</code> cells. It’s a block-level element, organizing data horizontally. Rows ensure consistent layouts, crucial for table clarity. They’re the backbone of table structure.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<table>
    <tr>
        <td>Row 1</td>
    </tr>
</table>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <table>
                    <tr>
                        <td>Row 1</td>
                    </tr>
                </table>
            </section>
        `
    },
    {
        title: "Lesson 32: Table Cells with <td>",
        content: `
            <p>The <code>&lt;td&gt;</code> tag creates a table data cell, holding text, images, or links. It’s a block-level element within <code>&lt;tr&gt;</code>, aligned in columns. Cells display content clearly, supporting accessibility. They’re essential for table functionality.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<tr>
    <td>Data</td>
</tr>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <table>
                    <tr>
                        <td>Data</td>
                    </tr>
                </table>
            </section>
        `
    },
    {
        title: "Lesson 33: Table Headers with <th>",
        content: `
            <p>The <code>&lt;th&gt;</code> tag defines a table header cell, often bold and centered. It’s a block-level element, using <code>scope</code> (e.g., <code>col</code>) for accessibility. Headers label columns or rows, aiding screen readers. They clarify table structure.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<tr>
    <th scope="col">Header</th>
</tr>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <table>
                    <tr>
                        <th scope="col">Header</th>
                    </tr>
                </table>
            </section>
        `
    },
    {
        title: "Lesson 34: Table Captions with <caption>",
        content: `
            <p>The <code>&lt;caption&gt;</code> tag adds a title to a <code>&lt;table&gt;</code>, summarizing its content. It’s a block-level element, placed right after the table tag. Captions aid accessibility, explaining purpose to screen readers. They make tables more informative.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<table>
    <caption>Data</caption>
    <tr>
        <td>Cell</td>
    </tr>
</table>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <table>
                    <caption>Data</caption>
                    <tr>
                        <td>Cell</td>
                    </tr>
                </table>
            </section>
        `
    },
    {
        title: "Lesson 35: Table Bodies with <tbody>",
        content: `
            <p>The <code>&lt;tbody&gt;</code> tag groups the main data rows in a <code>&lt;table&gt;</code>. It’s a block-level element, used with <code>&lt;thead&gt;</code> or <code>&lt;tfoot&gt;</code> for structure. It aids accessibility by defining content scope. Table bodies organize data clearly.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<table>
    <tbody>
        <tr>
            <td>Cell</td>
        </tr>
    </tbody>
</table>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <table>
                    <tbody>
                        <tr>
                            <td>Cell</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        `
    },
    {
        title: "Lesson 36: Table Heads with <thead>",
        content: `
            <p>The <code>&lt;thead&gt;</code> tag groups header rows in a <code>&lt;table&gt;</code>, typically with <code>&lt;th&gt;</code>. It’s a block-level element, enhancing table structure for accessibility. It separates headers from data, aiding clarity. Table heads improve data presentation.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<table>
    <thead>
        <tr>
            <th>Header</th>
        </tr>
    </thead>
</table>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <table>
                    <thead>
                        <tr>
                            <th>Header</th>
                        </tr>
                    </thead>
                </table>
            </section>
        `
    },
    {
        title: "Lesson 37: Audio with <audio>",
        content: `
            <p>The <code>&lt;audio&gt;</code> tag embeds sound, like music or podcasts, with <code>src</code> or <code>&lt;source&gt;</code>. It’s a block-level element, offering controls via the <code>controls</code> attribute. It’s accessible with captions, enhancing multimedia. Audio enriches user experiences.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<audio controls>
    <source src="sound.mp3" type="audio/mp3">
</audio>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>[Audio placeholder - requires a source]</p>
            </section>
        `
    },
    {
        title: "Lesson 38: Video with <video>",
        content: `
            <p>The <code>&lt;video&gt;</code> tag embeds clips, using <code>src</code> or <code>&lt;source&gt;</code> for files. It’s a block-level element, with <code>controls</code> for playback and <code>poster</code> for thumbnails. Accessible with captions, videos boost engagement. They’re vital for dynamic content.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<video controls>
    <source src="clip.mp4" type="video/mp4">
</video>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>[Video placeholder - requires a source]</p>
            </section>
        `
    },
    {
        title: "Lesson 39: Iframes with <iframe>",
        content: `
            <p>The <code>&lt;iframe&gt;</code> tag embeds external content, like maps or videos, within a page. It’s a block-level element, using <code>src</code> and <code>width</code>/<code>height</code>. Accessibility requires a <code>title</code>. Iframes integrate third-party content seamlessly.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<iframe src="https://example.com" width="300" height="200"></iframe>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>[Iframe placeholder - requires a source]</p>
            </section>
        `
    },
    {
        title: "Lesson 40: Meta Tags with <meta>",
        content: `
            <p>The <code>&lt;meta&gt;</code> tag provides metadata, like <code>charset</code> or <code>description</code>, in the <code>&lt;head&gt;</code>. It’s self-closing, affecting rendering or SEO. It’s invisible but critical for browsers and search engines. Meta tags optimize page performance.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<meta charset="UTF-8">
<meta name="description" content="My site">
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>[Meta tags are invisible]</p>
            </section>
        `
    },
    {
        title: "Lesson 41: Title Tags with <title>",
        content: `
            <p>The <code>&lt;title&gt;</code> tag sets the page’s name, shown in browser tabs. It’s a block-level element in <code>&lt;head&gt;</code>, vital for SEO and accessibility. Clear titles help users and search engines understand content. Titles define page identity.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<title>My Page</title>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>[Title is visible in browser tab]</p>
            </section>
        `
    },
    {
        title: "Lesson 42: Links to Styles with <link>",
        content: `
            <p>The <code>&lt;link&gt;</code> tag connects external resources, like CSS, via <code>href</code> and <code>rel</code>. It’s self-closing, placed in <code>&lt;head&gt;</code>. It’s invisible but shapes design and functionality. Links enable modular, reusable styles.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<link rel="stylesheet" href="style.css">
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>[Link is invisible]</p>
            </section>
        `
    },
    {
        title: "Lesson 43: Comments with <!-- -->",
        content: `
            <p>HTML comments (<code>&lt;!-- --&gt;</code>) annotate code, invisible to users. They explain structure or disable elements for debugging. Comments aid collaboration and maintenance, keeping code clear. They’re a developer’s tool for clarity.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<!-- This is a comment -->
<p>Visible text</p>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>Visible text</p>
            </section>
        `
    },
    {
        title: "Lesson 44: IDs with id Attribute",
        content: `
            <p>The <code>id</code> attribute assigns a unique identifier to an element, used for CSS or JavaScript. It’s global, ensuring one-per-page uniqueness. IDs enable precise targeting, like linking to sections. They’re key for dynamic functionality.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<div id="unique">Content</div>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <div id="unique">Content</div>
            </section>
        `
    },
    {
        title: "Lesson 45: Classes with class Attribute",
        content: `
            <p>The <code>class</code> attribute assigns reusable identifiers to elements for styling or scripting. It’s global, allowing multiple classes (e.g., <code>class="btn primary"</code>). Classes group elements logically, streamlining design. They’re essential for consistent styling.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<div class="box">Content</div>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <div class="box">Content</div>
            </section>
        `
    },
    {
        title: "Lesson 46: Anchors with href Attribute",
        content: `
            <p>The <code>href</code> attribute in <code>&lt;a&gt;</code> specifies a link’s destination, like URLs or anchors (e.g., <code>#top</code>). It’s required for functionality, supporting absolute or relative paths. Hrefs enable navigation, connecting the web. They’re core to hyperlinks.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<a href="#section">Jump</a>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <a href="#section">Jump</a>
            </section>
        `
    },
    {
        title: "Lesson 47: Alt Text with alt Attribute",
        content: `
            <p>The <code>alt</code> attribute in <code>&lt;img&gt;</code> provides text descriptions for accessibility. It’s required, aiding screen readers and SEO when images fail to load. Clear alt text describes content or function. It ensures images are inclusive.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<img src="logo.png" alt="Company logo">
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>[Image placeholder]</p>
            </section>
        `
    },
    {
        title: "Lesson 48: Source with src Attribute",
        content: `
            <p>The <code>src</code> attribute specifies file paths for <code>&lt;img&gt;</code>, <code>&lt;video&gt;</code>, or <code>&lt;audio&gt;</code>. It’s required for media, supporting relative or absolute URLs. Src links content, enabling visuals or sound. It’s vital for multimedia.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<img src="pic.jpg" alt="Picture">
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>[Image placeholder]</p>
            </section>
        `
    },
    {
        title: "Lesson 49: Character Sets with charset",
        content: `
            <p>The <code>charset</code> attribute in <code>&lt;meta&gt;</code> defines the character encoding, like <code>UTF-8</code>. It’s in <code>&lt;head&gt;</code>, ensuring correct text display across languages. It’s critical for accessibility and rendering. Charsets prevent garbled content.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<meta charset="UTF-8">
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>[Charset is invisible]</p>
            </section>
        `
    },
    {
        title: "Lesson 50: Viewport with <meta name=\"viewport\">",
        content: `
            <p>The <code>&lt;meta name="viewport"&gt;</code> tag sets responsive scaling, like <code>width=device-width</code>. It’s in <code>&lt;head&gt;</code>, optimizing mobile display. It’s invisible but ensures layouts adapt to screens. Viewports are key for responsive design.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>[Viewport is invisible]</p>
            </section>
        `
    },
    {
        title: "Lesson 51: Side Content with <aside>",
        content: `
            <p>The <code>&lt;aside&gt;</code> tag defines supplementary content, like sidebars or callouts, related to the main content. It’s a semantic, block-level element, often used for ads, related links, or notes. It clarifies content hierarchy for screen readers and search engines, enhancing accessibility. Placed within <code>&lt;main&gt;</code> or standalone, it organizes layouts logically. Asides make pages more engaging and structured.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<aside>
    <h3>Related Links</h3>
    <p>More info here.</p>
</aside>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <aside>
                    <h3>Related Links</h3>
                    <p>More info here.</p>
                </aside>
            </section>
        `
    },
    {
        title: "Lesson 52: Figures with <figure>",
        content: `
            <p>The <code>&lt;figure&gt;</code> tag groups self-contained content, like images or diagrams, with optional captions. It’s a semantic, block-level element, enhancing accessibility by linking visuals to descriptions. Often paired with <code>&lt;figcaption&gt;</code>, it clarifies context for users and search engines. Figures are ideal for illustrations or charts. They improve content clarity and presentation.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<figure>
    <img src="chart.jpg" alt="Data chart">
    <figcaption>A sample data chart.</figcaption>
</figure>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <figure>
                    <p>[Image placeholder]</p>
                    <figcaption>A sample data chart.</figcaption>
                </figure>
            </section>
        `
    },
    {
        title: "Lesson 53: Captions with <figcaption>",
        content: `
            <p>The <code>&lt;figcaption&gt;</code> tag provides a caption for a <code>&lt;figure&gt;</code>, describing its content, like an image or table. It’s a block-level element, placed before or after the figure’s content. Captions aid accessibility by explaining visuals for screen readers. They’re semantic, improving SEO and user understanding. Figcaptions make figures more informative and engaging.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<figure>
    <img src="photo.jpg" alt="Scene">
    <figcaption>A scenic view.</figcaption>
</figure>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <figure>
                    <p>[Image placeholder]</p>
                    <figcaption>A scenic view.</figcaption>
                </figure>
            </section>
        `
    },
    {
        title: "Lesson 54: Block Quotes with <blockquote>",
        content: `
            <p>The <code>&lt;blockquote&gt;</code> tag indicates a lengthy quotation, often indented by browsers. It’s a block-level, semantic element, used for excerpts from other sources, like books or speeches. The <code>cite</code> attribute can link to the source URL. It enhances accessibility by marking quoted content clearly. Blockquotes add credibility and depth to pages.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<blockquote cite="source.com">
    <p>Words of wisdom.</p>
</blockquote>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <blockquote cite="source.com">
                    <p>Words of wisdom.</p>
                </blockquote>
            </section>
        `
    },
    {
        title: "Lesson 55: Inline Quotes with <q>",
        content: `
            <p>The <code>&lt;q&gt;</code> tag marks short, inline quotations, typically wrapped in quotes by browsers. It’s a semantic, inline element, ideal for brief phrases within text. The <code>cite</code> attribute references the source, aiding credibility. Unlike <code>&lt;blockquote&gt;</code>, it flows with surrounding content. Inline quotes enhance readability and attribution.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<p>She said, <q>Carpe diem!</q></p>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>She said, <q>Carpe diem!</q></p>
            </section>
        `
    },
    {
        title: "Lesson 56: Email Inputs with type=\"email\"",
        content: `
            <p>The <code>type="email"</code> attribute on <code>&lt;input&gt;</code> creates a field for email addresses, with built-in validation. It’s an inline element, ensuring users enter valid formats (e.g., user@domain.com). Mobile keyboards optimize for email entry, improving usability. The <code>pattern</code> attribute can refine validation further. Email inputs streamline form accuracy and user experience.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<input type="email" name="email" required>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <input type="email" name="email" required>
            </section>
        `
    },
    {
        title: "Lesson 57: Password Inputs with type=\"password\"",
        content: `
            <p>The <code>type="password"</code> attribute on <code>&lt;input&gt;</code> hides typed characters, ideal for secure fields like logins. It’s inline, showing dots or asterisks to protect privacy. Attributes like <code>minlength</code> enforce security rules. It pairs with <code>&lt;label&gt;</code> for accessibility. Password inputs ensure safe, user-friendly form interactions.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<input type="password" name="pass" required>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <input type="password" name="pass" required>
            </section>
        `
    },
    {
        title: "Lesson 58: Checkboxes with type=\"checkbox\"",
        content: `
            <p>The <code>type="checkbox"</code> attribute on <code>&lt;input&gt;</code> creates toggleable boxes for multiple selections, like preferences. It’s inline, using the <code>value</code> attribute for submitted data. The <code>checked</code> attribute pre-selects options. Checkboxes are accessible with <code>&lt;label&gt;</code>, aiding screen readers. They’re versatile for forms requiring flexibility.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<input type="checkbox" name="option" value="yes"> Agree
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <input type="checkbox" name="option" value="yes"> Agree
            </section>
        `
    },
    {
        title: "Lesson 59: Radio Buttons with type=\"radio\"",
        content: `
            <p>The <code>type="radio"</code> attribute on <code>&lt;input&gt;</code> creates buttons for single-choice selections, like survey options. It’s inline, requiring the same <code>name</code> for grouping. The <code>value</code> attribute sends the chosen option, with <code>checked</code> for defaults. Radio buttons are clear with <code>&lt;label&gt;</code>, ensuring accessibility. They simplify decision-making in forms.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<input type="radio" name="choice" value="a"> Option A
<input type="radio" name="choice" value="b"> Option B
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <input type="radio" name="choice" value="a"> Option A<br>
                <input type="radio" name="choice" value="b"> Option B
            </section>
        `
    },
    {
        title: "Lesson 60: File Uploads with type=\"file\"",
        content: `
            <p>The <code>type="file"</code> attribute on <code>&lt;input&gt;</code> allows users to upload files, like images or PDFs. It’s inline, often requiring <code>enctype="multipart/form-data"</code> in the form. The <code>accept</code> attribute filters file types (e.g., <code>.jpg</code>). It’s accessible with <code>&lt;label&gt;</code> for clarity. File inputs enable rich user contributions.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<input type="file" name="upload" accept=".jpg,.png">
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <input type="file" name="upload" accept=".jpg,.png">
            </section>
        `
    },
    {
        title: "Lesson 61: Column Span with colspan",
        content: `
            <p>The <code>colspan</code> attribute on <code>&lt;td&gt;</code> or <code>&lt;th&gt;</code> merges cells across columns in a table. It takes a number (e.g., <code>colspan="2"</code>), spanning that many columns. It’s useful for headers or grouped data, enhancing table layouts. Accessibility requires clear context for merged cells. Colspan adds flexibility to table design.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<table>
    <tr>
        <th colspan="2">Merged Header</th>
    </tr>
    <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
    </tr>
</table>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <table>
                    <tr>
                        <th colspan="2">Merged Header</th>
                    </tr>
                    <tr>
                        <td>Cell 1</td>
                        <td>Cell 2</td>
                    </tr>
                </table>
            </section>
        `
    },
    {
        title: "Lesson 62: Row Span with rowspan",
        content: `
            <p>The <code>rowspan</code> attribute on <code>&lt;td&gt;</code> or <code>&lt;th&gt;</code> merges cells across rows in a table. It takes a number (e.g., <code>rowspan="2"</code>), spanning that many rows. It’s ideal for grouping data vertically, like in schedules. Accessibility needs clear labeling for merged cells. Rowspan enhances table structure and readability.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<table>
    <tr>
        <td rowspan="2">Merged Cell</td>
        <td>Cell 1</td>
    </tr>
    <tr>
        <td>Cell 2</td>
    </tr>
</table>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <table>
                    <tr>
                        <td rowspan="2">Merged Cell</td>
                        <td>Cell 1</td>
                    </tr>
                    <tr>
                        <td>Cell 2</td>
                    </tr>
                </table>
            </section>
        `
    },
    {
        title: "Lesson 63: Table Footers with <tfoot>",
        content: `
            <p>The <code>&lt;tfoot&gt;</code> tag groups footer rows in a <code>&lt;table&gt;</code>, often for summaries like totals. It’s a block-level element, used with <code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code>. It aids accessibility by defining table conclusions. Table footers clarify data summaries for users.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<table>
    <tfoot>
        <tr>
            <td>Total</td>
        </tr>
    </tfoot>
</table>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <table>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                        </tr>
                    </tfoot>
                </table>
            </section>
        `
    },
    {
        title: "Lesson 64: Column Groups with <colgroup>",
        content: `
            <p>The <code>&lt;colgroup&gt;</code> tag defines groups of table columns for styling or structure, placed before <code>&lt;thead&gt;</code>. It’s a block-level element, containing <code>&lt;col&gt;</code> tags with attributes like <code>span</code>. It simplifies formatting, like setting column widths. Colgroups enhance table consistency and accessibility.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<table>
    <colgroup>
        <col span="2">
    </colgroup>
    <tr>
        <td>Cell</td>
        <td>Cell</td>
    </tr>
</table>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <table>
                    <colgroup>
                        <col span="2">
                    </colgroup>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                </table>
            </section>
        `
    },
    {
        title: "Lesson 65: Columns with <col>",
        content: `
            <p>The <code>&lt;col&gt;</code> tag specifies properties for table columns within a <code>&lt;colgroup&gt;</code>, like width or style. It’s a self-closing element, using <code>span</code> to affect multiple columns. It’s invisible but aids consistent formatting. Columns streamline table design for clarity.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<colgroup>
    <col span="1" class="highlighted-col">
</colgroup>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <table>
                    <colgroup>
                        <col span="1">
                    </colgroup>
                    <tr>
                        <td>Cell</td>
                    </tr>
                </table>
            </section>
        `
    },
    {
        title: "Lesson 66: Ordered Lists with <ol>",
        content: `
            <p>The <code>&lt;ol&gt;</code> tag creates ordered lists with numbered items, ideal for steps or rankings. It’s a block-level, semantic element, containing <code>&lt;li&gt;</code> tags. Attributes like <code>type</code> (e.g., <code>1</code>, <code>a</code>) customize numbering. Ordered lists ensure clear, sequential presentation.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<ol>
    <li>Step 1</li>
    <li>Step 2</li>
</ol>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <ol>
                    <li>Step 1</li>
                    <li>Step 2</li>
                </ol>
            </section>
        `
    },
    {
        title: "Lesson 67: Description Lists with <dl>",
        content: `
            <p>The <code>&lt;dl&gt;</code> tag creates description lists, pairing terms (<code>&lt;dt&gt;</code>) with details (<code>&lt;dd&gt;</code>). It’s a block-level, semantic element, ideal for glossaries or FAQs. It enhances accessibility by structuring relationships clearly. Description lists organize complex data intuitively.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<dl>
    <dt>Term</dt>
    <dd>Definition</dd>
</dl>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <dl>
                    <dt>Term</dt>
                    <dd>Definition</dd>
                </dl>
            </section>
        `
    },
    {
        title: "Lesson 68: Description Terms with <dt>",
        content: `
            <p>The <code>&lt;dt&gt;</code> tag defines a term in a <code>&lt;dl&gt;</code> description list, paired with <code>&lt;dd&gt;</code>. It’s a block-level element, providing the subject for definitions. It’s semantic, aiding accessibility and clarity. Terms anchor list structures effectively.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
</dl>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <dl>
                    <dt>HTML</dt>
                    <dd>HyperText Markup Language</dd>
                </dl>
            </section>
        `
    },
    {
        title: "Lesson 69: Descriptions with <dd>",
        content: `
            <p>The <code>&lt;dd&gt;</code> tag provides details for a <code>&lt;dt&gt;</code> term in a <code>&lt;dl&gt;</code>. It’s a block-level element, explaining or defining the term. It’s semantic, ensuring accessibility for screen readers. Descriptions make lists informative and structured.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<dl>
    <dt>Tag</dt>
    <dd>A markup element</dd>
</dl>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <dl>
                    <dt>Tag</dt>
                    <dd>A markup element</dd>
                </dl>
            </section>
        `
    },
    {
        title: "Lesson 70: Preformatted Text with <pre>",
        content: `
            <p>The <code>&lt;pre&gt;</code> tag displays text with fixed formatting, preserving spaces and line breaks. It’s a block-level element, ideal for code or ASCII art. It’s accessible, maintaining readability for technical content. Preformatted text ensures precise presentation.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<pre>
    Code block
        Indented
</pre>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <pre>
    Code block
        Indented
                </pre>
            </section>
        `
    },
    {
        title: "Lesson 71: Code Snippets with <code>",
        content: `
            <p>The <code>&lt;code&gt;</code> tag marks inline code snippets, typically in a monospace font. It’s a semantic, inline element, used for commands or syntax within text. It aids accessibility by distinguishing code from prose. Code tags clarify technical content.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<p>Use <code>print()</code> to output text.</p>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>Use <code>print()</code> to output text.</p>
            </section>
        `
    },
    {
        title: "Lesson 72: Keyboard Input with <kbd>",
        content: `
            <p>The <code>&lt;kbd&gt;</code> tag indicates user input, like keyboard shortcuts, often in a monospace font. It’s a semantic, inline element, enhancing clarity for tutorials. It’s accessible, helping screen readers convey instructions. Keyboard tags improve technical documentation.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<p>Press <kbd>Ctrl+S</kbd> to save.</p>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>Press <kbd>Ctrl+S</kbd> to save.</p>
            </section>
        `
    },
    {
        title: "Lesson 73: Sample Output with <samp>",
        content: `
            <p>The <code>&lt;samp&gt;</code> tag shows sample output from programs, like error messages, in a monospace font. It’s a semantic, inline element, used in technical docs. It aids accessibility by marking output clearly. Sample tags enhance instructional content.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<p>Error: <samp>File not found</samp></p>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>Error: <samp>File not found</samp></p>
            </section>
        `
    },
    {
        title: "Lesson 74: Variables with <var>",
        content: `
            <p>The <code>&lt;var&gt;</code> tag denotes variables in math or code, often italicized. It’s a semantic, inline element, clarifying placeholders or identifiers. It’s accessible, aiding screen readers in technical contexts. Variables enhance precision in documentation.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<p>Let <var>x</var> = 5;</p>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>Let <var>x</var> = 5;</p>
            </section>
        `
    },
    {
        title: "Lesson 75: Embedded Objects with <object>",
        content: `
            <p>The <code>&lt;object&gt;</code> tag embeds multimedia, like PDFs or Flash, with <code>data</code> for the source. It’s a block-level element, supporting fallback content if the object fails. It’s less common now but useful for specific plugins. Objects add versatile media support.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<object data="file.pdf" type="application/pdf">
    <p>Fallback text</p>
</object>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>[Object placeholder - requires a source]</p>
            </section>
        `
    },
    {
        title: "Lesson 76: Media Sources with <source>",
        content: `
            <p>The <code>&lt;source&gt;</code> tag specifies media files for <code>&lt;video&gt;</code> or <code>&lt;audio&gt;</code>, allowing multiple formats. It’s a self-closing element, using <code>src</code> and <code>type</code>. It ensures compatibility across browsers. Sources optimize media delivery and accessibility.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<video controls>
    <source src="clip.mp4" type="video/mp4">
</video>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>[Video placeholder - requires source files]</p>
            </section>
        `
    },
    {
        title: "Lesson 77: Captions with <track>",
        content: `
            <p>The <code>&lt;track&gt;</code> tag adds subtitles or captions to <code>&lt;video&gt;</code> or <code>&lt;audio&gt;</code>, using <code>src</code> for WebVTT files. It’s self-closing, with <code>kind</code> (e.g., <code>subtitles</code>) and <code>srclang</code>. It boosts accessibility for diverse users. Tracks enhance media comprehension.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<video controls>
    <track src="subs.vtt" kind="subtitles" srclang="en">
</video>
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>[Video with captions placeholder]</p>
            </section>
        `
    },
    {
        title: "Lesson 78: Embedded Content with <embed>",
        content: `
            <p>The <code>&lt;embed&gt;</code> tag inserts external content, like Flash or applets, without fallback. It’s a self-closing, block-level element, using <code>src</code> and <code>type</code>. It’s less used today due to security but fits specific cases. Embeds add quick multimedia integration.</p>
            <p><strong>Code Example:</strong></p>
            <pre>
<embed src="animation.swf" type="application/x-shockwave-flash">
            </pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>[Embed placeholder - requires a source]</p>
            </section>
        `
    },
    {
        title: "Lesson 79
