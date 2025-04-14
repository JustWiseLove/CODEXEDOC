// Lesson Data (100 lessons)
const lessons = [
    {
        title: "Lesson 1: Introduction to HTML",
        content: `
            <p>HTML (HyperText Markup Language) is the backbone of web pages, structuring content like text, images, and links. It uses tags to define elements, creating a tree-like structure called the DOM (Document Object Model). HTML5, the latest version, adds semantic tags and multimedia support, enabling accessible, interactive sites. Learning HTML unlocks web development’s foundation.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;html&gt;
    &lt;body&gt;
        &lt;p&gt;Hello, World!&lt;/p&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>
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
            <pre><code>&lt;html lang="en"&gt;
    &lt;head&gt;
        &lt;title&gt;My Page&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;p&gt;Content&lt;/p&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>
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
            <pre><code>&lt;head&gt;
    &lt;title&gt;My Site&lt;/title&gt;
    &lt;meta charset="UTF-8"&gt;
&lt;/head&gt;</code></pre>
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
            <pre><code>&lt;body&gt;
    &lt;h1&gt;Welcome&lt;/h1&gt;
    &lt;p&gt;This is my site.&lt;/p&gt;
&lt;/body&gt;</code></pre>
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
            <pre><code>&lt;h1&gt;Main Title&lt;/h1&gt;
&lt;h2&gt;Subtitle&lt;/h2&gt;</code></pre>
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
            <pre><code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code></pre>
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
            <pre><code>&lt;a href="https://example.com"&gt;Visit&lt;/a&gt;</code></pre>
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
            <pre><code>&lt;img src="photo.jpg" alt="A photo"&gt;</code></pre>
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
            <pre><code>&lt;ul&gt;
    &lt;li&gt;Item 1&lt;/li&gt;
    &lt;li&gt;Item 2&lt;/li&gt;
&lt;/ul&gt;</code></pre>
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
            <pre><code>&lt;ol&gt;
    &lt;li&gt;First&lt;/li&gt;
    &lt;li&gt;Second&lt;/li&gt;
&lt;/ol&gt;</code></pre>
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
            <pre><code>&lt;div&gt;
    &lt;p&gt;Content&lt;/p&gt;
&lt;/div&gt;</code></pre>
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
            <pre><code>&lt;p&gt;Text with &lt;span&gt;highlight&lt;/span&gt;.&lt;/p&gt;</code></pre>
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
            <pre><code>&lt;p&gt;&lt;strong&gt;Bold&lt;/strong&gt; and &lt;em&gt;italic&lt;/em&gt;.&lt;/p&gt;</code></pre>
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
            <pre><code>&lt;p&gt;Line one&lt;br&gt;Line two&lt;/p&gt;</code></pre>
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
            <pre><code>&lt;p&gt;Section one&lt;/p&gt;
&lt;hr&gt;
&lt;p&gt;Section two&lt;/p&gt;</code></pre>
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
            <pre><code>&lt;header&gt;
    &lt;h1&gt;My Site&lt;/h1&gt;
&lt;/header&gt;</code></pre>
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
            <pre><code>&lt;header&gt;
    &lt;h1&gt;Welcome&lt;/h1&gt;
&lt;/header&gt;</code></pre>
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
            <pre><code>&lt;footer&gt;
    &lt;p&gt;© 2025&lt;/p&gt;
&lt;/footer&gt;</code></pre>
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
            <pre><code>&lt;nav&gt;
    &lt;a href="#"&gt;Home&lt;/a&gt;
&lt;/nav&gt;</code></pre>
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
            <pre><code>&lt;article&gt;
    &lt;h2&gt;News&lt;/h2&gt;
    &lt;p&gt;Story here.&lt;/p&gt;
&lt;/article&gt;</code></pre>
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
            <pre><code>&lt;section&gt;
    &lt;h2&gt;Part&lt;/h2&gt;
    &lt;p&gt;Details.&lt;/p&gt;
&lt;/section&gt;</code></pre>
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
            <pre><code>&lt;main&gt;
    &lt;p&gt;Main content.&lt;/p&gt;
&lt;/main&gt;</code></pre>
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
            <pre><code>&lt;form action="/submit"&gt;
    &lt;input type="text"&gt;
&lt;/form&gt;</code></pre>
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
            <pre><code>&lt;input type="text" name="name"&gt;</code></pre>
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
            <pre><code>&lt;label for="name"&gt;Name:&lt;/label&gt;
&lt;input id="name" type="text"&gt;</code></pre>
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
            <pre><code>&lt;button&gt;Click&lt;/button&gt;</code></pre>
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
            <pre><code>&lt;textarea rows="4" cols="50"&gt;&lt;/textarea&gt;</code></pre>
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
            <pre><code>&lt;select name="choice"&gt;
    &lt;option&gt;Option 1&lt;/option&gt;
    &lt;option&gt;Option 2&lt;/option&gt;
&lt;/select&gt;</code></pre>
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
            <pre><code>&lt;select&gt;
    &lt;option value="a"&gt;A&lt;/option&gt;
    &lt;option value="b"&gt;B&lt;/option&gt;
&lt;/select&gt;</code></pre>
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
            <pre><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;td&gt;Cell&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>
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
            <pre><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;td&gt;Row 1&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>
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
            <pre><code>&lt;tr&gt;
    &lt;td&gt;Data&lt;/td&gt;
&lt;/tr&gt;</code></pre>
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
            <pre><code>&lt;tr&gt;
    &lt;th scope="col"&gt;Header&lt;/th&gt;
&lt;/tr&gt;</code></pre>
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
            <pre><code>&lt;table&gt;
    &lt;caption&gt;Data&lt;/caption&gt;
    &lt;tr&gt;
        &lt;td&gt;Cell&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>
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
            <pre><code>&lt;table&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;Cell&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
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
            <pre><code>&lt;table&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;Header&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
&lt;/table&gt;</code></pre>
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
            <pre><code>&lt;audio controls&gt;
    &lt;source src="sound.mp3" type="audio/mp3"&gt;
&lt;/audio&gt;</code></pre>
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
            <pre><code>&lt;video controls&gt;
    &lt;source src="clip.mp4" type="video/mp4"&gt;
&lt;/video&gt;</code></pre>
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
            <pre><code>&lt;iframe src="https://example.com" width="300" height="200"&gt;&lt;/iframe&gt;</code></pre>
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
            <pre><code>&lt;meta charset="UTF-8"&gt;
&lt;meta name="description" content="My site"&gt;</code></pre>
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
            <pre><code>&lt;title&gt;My Page&lt;/title&gt;</code></pre>
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
            <pre><code>&lt;link rel="stylesheet" href="style.css"&gt;</code></pre>
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
            <pre><code>&lt;!-- This is a comment --&gt;
&lt;p&gt;Visible text&lt;/p&gt;</code></pre>
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
            <pre><code>&lt;div id="unique"&gt;Content&lt;/div&gt;</code></pre>
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
            <pre><code>&lt;div class="box"&gt;Content&lt;/div&gt;</code></pre>
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
            <pre><code>&lt;a href="#section"&gt;Jump&lt;/a&gt;</code></pre>
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
            <pre><code>&lt;img src="logo.png" alt="Company logo"&gt;</code></pre>
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
            <pre><code>&lt;img src="pic.jpg" alt="Picture"&gt;</code></pre>
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
            <pre><code>&lt;meta charset="UTF-8"&gt;</code></pre>
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
            <pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre>
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
            <pre><code>&lt;aside&gt;
    &lt;h3&gt;Related Links&lt;/h3&gt;
    &lt;p&gt;More info here.&lt;/p&gt;
&lt;/aside&gt;</code></pre>
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
            <pre><code>&lt;figure&gt;
    &lt;img src="chart.jpg" alt="Data chart"&gt;
    &lt;figcaption&gt;A sample data chart.&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>
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
            <pre><code>&lt;figure&gt;
    &lt;img src="photo.jpg" alt="Scene"&gt;
    &lt;figcaption&gt;A scenic view.&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>
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
            <pre><code>&lt;blockquote cite="source.com"&gt;
    &lt;p&gt;Words of wisdom.&lt;/p&gt;
&lt;/blockquote&gt;</code></pre>
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
            <pre><code>&lt;p&gt;She said, &lt;q&gt;Carpe diem!&lt;/q&gt;&lt;/p&gt;</code></pre>
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
            <pre><code>&lt;input type="email" name="email" required&gt;</code></pre>
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
            <pre><code>&lt;input type="password" name="pass" required&gt;</code></pre>
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
            <pre><code>&lt;input type="checkbox" name="option" value="yes"&gt; Agree</code></pre>
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
            <pre><code>&lt;input type="radio" name="choice" value="a"&gt; Option A
&lt;input type="radio" name="choice" value="b"&gt; Option B</code></pre>
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
            <pre><code>&lt;input type="file" name="upload" accept=".jpg,.png"&gt;</code></pre>
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
            <pre><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;th colspan="2"&gt;Merged Header&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Cell 1&lt;/td&gt;
        &lt;td&gt;Cell 2&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>
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
            <pre><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;td rowspan="2"&gt;Merged Cell&lt;/td&gt;
        &lt;td&gt;Cell 1&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Cell 2&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>
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
            <pre><code>&lt;table&gt;
    &lt;tfoot&gt;
        &lt;tr&gt;
            &lt;td&gt;Total&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tfoot&gt;
&lt;/table&gt;</code></pre>
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
            <pre><code>&lt;table&gt;
    &lt;colgroup&gt;
        &lt;col span="2"&gt;
    &lt;/colgroup&gt;
    &lt;tr&gt;
        &lt;td&gt;Cell&lt;/td&gt;
        &lt;td&gt;Cell&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>
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
            <pre><code>&lt;colgroup&gt;
    &lt;col span="1" class="highlighted-col"&gt;
&lt;/colgroup&gt;</code></pre>
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
            <pre><code>&lt;ol&gt;
    &lt;li&gt;Step 1&lt;/li&gt;
    &lt;li&gt;Step 2&lt;/li&gt;
&lt;/ol&gt;</code></pre>
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
            <pre><code>&lt;dl&gt;
    &lt;dt&gt;Term&lt;/dt&gt;
    &lt;dd&gt;Definition&lt;/dd&gt;
&lt;/dl&gt;</code></pre>
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
            <pre><code>&lt;dl&gt;
    &lt;dt&gt;HTML&lt;/dt&gt;
    &lt;dd&gt;HyperText Markup Language&lt;/dd&gt;
&lt;/dl&gt;</code></pre>
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
            <pre><code>&lt;dl&gt;
    &lt;dt&gt;Tag&lt;/dt&gt;
    &lt;dd&gt;A markup element&lt;/dd&gt;
&lt;/dl&gt;</code></pre>
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
            <pre><code>&lt;pre&gt;
    Code block
        Indented
&lt;/pre&gt;</code></pre>
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
            <pre><code>&lt;p&gt;Use &lt;code&gt;print()&lt;/code&gt; to output text.&lt;/p&gt;</code></pre>
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
            <pre><code>&lt;p&gt;Press &lt;kbd&gt;Ctrl+S&lt;/kbd&gt; to save.&lt;/p&gt;</code></pre>
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
            <pre><code>&lt;p&gt;Error: &lt;samp&gt;File not found&lt;/samp&gt;&lt;/p&gt;</code></pre>
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
            <pre><code>&lt;p&gt;Let &lt;var&gt;x&lt;/var&gt; = 5;&lt;/p&gt;</code></pre>
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
            <pre><code>&lt;object data="file.pdf" type="application/pdf"&gt;
    &lt;p&gt;Fallback text&lt;/p&gt;
&lt;/object&gt;</code></pre>
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
            <pre><code>&lt;video controls&gt;
    &lt;source src="clip.mp4" type="video/mp4"&gt;
&lt;/video&gt;</code></pre>
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
            <pre><code>&lt;video controls&gt;
    &lt;track src="subs.vtt" kind="subtitles" srclang="en"&gt;
&lt;/video&gt;</code></pre>
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
            <pre><code>&lt;embed src="animation.swf" type="application/x-shockwave-flash"&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>[Embed placeholder - requires a source]</p>
            </section>
        `
    },
    {
        title: "Lesson 79: Parameter Elements with <param>",
        content: `
            <p>The <code>&lt;param&gt;</code> tag defines parameters for an <code>&lt;object&gt;</code> element, like settings for plugins. It’s a self-closing, void element, using <code>name</code> and <code>value</code> attributes. Though less common today, it’s useful for legacy multimedia or specific applets. Parameters customize embedded content behavior.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;object data="movie.swf"&gt;
    &lt;param name="autoplay" value="true"&gt;
&lt;/object&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>[Object with param placeholder - requires source]</p>
            </section>
        `
    },
    {
        title: "Lesson 80: Canvas Graphics with <canvas>",
        content: `
            <p>The <code>&lt;canvas&gt;</code> tag creates a drawing area for JavaScript graphics, like charts or animations. It’s a block-level element, requiring <code>width</code> and <code>height</code>. Fallback content displays if unsupported. Canvas enables dynamic, interactive visuals.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;canvas id="myCanvas" width="200" height="100"&gt;&lt;/canvas&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <canvas width="200" height="100">[Canvas not supported]</canvas>
            </section>
        `
    },
    {
        title: "Lesson 81: SVG Graphics with <svg>",
        content: `
            <p>The <code>&lt;svg&gt;</code> tag embeds scalable vector graphics, ideal for icons or diagrams. It’s a block-level element, supporting shapes like <code>&lt;circle&gt;</code> or <code>&lt;path&gt;</code>. It’s accessible with <code>title</code> tags. SVG ensures crisp visuals across devices.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;svg width="100" height="100"&gt;
    &lt;circle cx="50" cy="50" r="40" fill="blue"/&gt;
&lt;/svg&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <svg width="100" height="100">
                    <circle cx="50" cy="50" r="40" fill="blue"/>
                </svg>
            </section>
        `
    },
    {
        title: "Lesson 82: Progress Bars with <progress>",
        content: `
            <p>The <code>&lt;progress&gt;</code> tag shows task completion, like downloads, with <code>value</code> and <code>max</code> attributes. It’s an inline-block, semantic element, accessible for screen readers. Stylable with CSS, it visualizes dynamic updates. Progress bars enhance user feedback.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;progress value="50" max="100"&gt;&lt;/progress&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <progress value="50" max="100"></progress>
            </section>
        `
    },
    {
        title: "Lesson 83: Meters with <meter>",
        content: `
            <p>The <code>&lt;meter&gt;</code> tag displays a scalar value within a range, like battery levels, using <code>value</code>, <code>min</code>, and <code>max</code>. It’s an inline-block, semantic element, with accessibility support. It’s stylable for visual clarity. Meters convey precise measurements.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;meter value="75" min="0" max="100"&gt;&lt;/meter&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <meter value="75" min="0" max="100"></meter>
            </section>
        `
    },
    {
        title: "Lesson 84: Details with <details>",
        content: `
            <p>The <code>&lt;details&gt;</code> tag creates a collapsible section, hiding content until clicked, with a <code>&lt;summary&gt;</code> for the toggle. It’s a block-level, semantic element, accessible by default. Ideal for FAQs, it saves space. Details improve content organization.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;details&gt;
    &lt;summary&gt;Click me&lt;/summary&gt;
    &lt;p&gt;Hidden content.&lt;/p&gt;
&lt;/details&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <details>
                    <summary>Click me</summary>
                    <p>Hidden content.</p>
                </details>
            </section>
        `
    },
    {
        title: "Lesson 85: Summaries with <summary>",
        content: `
            <p>The <code>&lt;summary&gt;</code> tag defines the visible heading for a <code>&lt;details&gt;</code> element, toggling its content. It’s a block-level element, accessible for keyboard and screen readers. It’s stylable for clarity. Summaries make collapsible sections intuitive.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;details&gt;
    &lt;summary&gt;More Info&lt;/summary&gt;
    &lt;p&gt;Details here.&lt;/p&gt;
&lt;/details&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <details>
                    <summary>More Info</summary>
                    <p>Details here.</p>
                </details>
            </section>
        `
    },
    {
        title: "Lesson 86: Dialogs with <dialog>",
        content: `
            <p>The <code>&lt;dialog&gt;</code> tag creates modal or non-modal popups, controlled by JavaScript’s <code>show()</code> or <code>showModal()</code>. It’s a block-level element, accessible with <code>aria-label</code>. Fallback content displays if unsupported. Dialogs enhance interactive UI elements.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;dialog id="myDialog"&gt;
    &lt;p&gt;Popup content.&lt;/p&gt;
&lt;/dialog&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>[Dialog requires JavaScript - placeholder]</p>
            </section>
        `
    },
    {
        title: "Lesson 87: Data Lists with <datalist>",
        content: `
            <p>The <code>&lt;datalist&gt;</code> tag provides autocomplete suggestions for <code>&lt;input&gt;</code> fields, linked via the <code>list</code> attribute. It’s a block-level element, containing <code>&lt;option&gt;</code> tags. It’s accessible, enhancing form usability. Datalists streamline user input.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;input list="suggestions"&gt;
&lt;datalist id="suggestions"&gt;
    &lt;option value="Option 1"&gt;
    &lt;option value="Option 2"&gt;
&lt;/datalist&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <input list="suggestions">
                <datalist id="suggestions">
                    <option value="Option 1">
                    <option value="Option 2">
                </datalist>
            </section>
        `
    },
    {
        title: "Lesson 88: Output Elements with <output>",
        content: `
            <p>The <code>&lt;output&gt;</code> tag displays results of calculations or user actions, often in forms. It’s an inline-block, semantic element, linked via <code>for</code> to inputs. It’s accessible, aiding dynamic interfaces. Outputs clarify interactive feedback.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;form oninput="result.value=parseInt(a.value)+parseInt(b.value)"&gt;
    &lt;input type="number" id="a"&gt; +
    &lt;input type="number" id="b"&gt; =
    &lt;output name="result" for="a b"&gt;&lt;/output&gt;
&lt;/form&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
                    <input type="number" id="a"> +
                    <input type="number" id="b"> =
                    <output name="result" for="a b"></output>
                </form>
            </section>
        `
    },
    {
        title: "Lesson 89: Superscripts with <sup>",
        content: `
            <p>The <code>&lt;sup&gt;</code> tag raises text as a superscript, like exponents or footnotes. It’s an inline element, semantic for math or references. It’s accessible, maintaining readability. Superscripts add precision to technical or academic content.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;p&gt;E=mc&lt;sup&gt;2&lt;/sup&gt;&lt;/p&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>E=mc<sup>2</sup></p>
            </section>
        `
    },
    {
        title: "Lesson 90: Subscripts with <sub>",
        content: `
            <p>The <code>&lt;sub&gt;</code> tag lowers text as a subscript, used for chemical formulas or indices. It’s an inline, semantic element, ensuring clarity in technical contexts. It’s accessible for screen readers. Subscripts enhance scientific or mathematical displays.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;p&gt;H&lt;sub&gt;2&lt;/sub&gt;O&lt;/p&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>H<sub>2</sub>O</p>
            </section>
        `
    },
    {
        title: "Lesson 91: Marked Text with <mark>",
        content: `
            <p>The <code>&lt;mark&gt;</code> tag highlights text for emphasis, typically with a yellow background. It’s an inline, semantic element, useful for search results or notes. It’s accessible, distinguishable by screen readers. Marks draw attention to key information.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;p&gt;Key &lt;mark&gt;term&lt;/mark&gt; here.&lt;/p&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>Key <mark>term</mark> here.</p>
            </section>
        `
    },
    {
        title: "Lesson 92: Deleted Text with <del>",
        content: `
            <p>The <code>&lt;del&gt;</code> tag marks text as removed, often with a strikethrough. It’s a semantic element, inline or block, used for edits or updates. The <code>cite</code> attribute explains changes. Deleted text clarifies revisions for accessibility.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;p&gt;Old &lt;del&gt;price&lt;/del&gt; new price.&lt;/p&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>Old <del>price</del> new price.</p>
            </section>
        `
    },
    {
        title: "Lesson 93: Inserted Text with <ins>",
        content: `
            <p>The <code>&lt;ins&gt;</code> tag indicates added text, often underlined. It’s a semantic element, inline or block, used with <code>&lt;del&gt;</code> for edits. The <code>cite</code> attribute links to reasons. Inserted text highlights updates accessibly.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;p&gt;New &lt;ins&gt;feature&lt;/ins&gt; added.&lt;/p&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>New <ins>feature</ins> added.</p>
            </section>
        `
    },
    {
        title: "Lesson 94: Addresses with <address>",
        content: `
            <p>The <code>&lt;address&gt;</code> tag provides contact information, like emails or locations. It’s a block-level, semantic element, often italicized by browsers. It aids accessibility and SEO by marking contact data. Addresses clarify author or organization details.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;address&gt;
    Email: info@example.com
&lt;/address&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <address>
                    Email: info@example.com
                </address>
            </section>
        `
    },
    {
        title: "Lesson 95: Citations with <cite>",
        content: `
            <p>The <code>&lt;cite&gt;</code> tag references a creative work, like a book or movie, often italicized. It’s an inline, semantic element, aiding accessibility and SEO. It’s distinct from <code>cite</code> attributes. Citations credit sources clearly.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;p&gt;From &lt;cite&gt;Book Title&lt;/cite&gt;.&lt;/p&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>From <cite>Book Title</cite>.</p>
            </section>
        `
    },
    {
        title: "Lesson 96: Bidirectional Text with <bdi>",
        content: `
            <p>The <code>&lt;bdi&gt;</code> tag isolates text with unknown directionality, like usernames in mixed scripts. It’s an inline element, ensuring correct rendering in RTL or LTR contexts. It’s accessible, aiding global sites. BDI handles complex text displays.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;p&gt;User: &lt;bdi&gt;اسم&lt;/bdi&gt;&lt;/p&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p>User: <bdi>اسم</bdi></p>
            </section>
        `
    },
    {
        title: "Lesson 97: Bidirectional Override with <bdo>",
        content: `
            <p>The <code>&lt;bdo&gt;</code> tag forces text direction with the <code>dir</code> attribute (<code>ltr</code> or <code>rtl</code>). It’s an inline element, overriding natural script direction. It’s useful for special formatting, with accessibility support. BDO controls text orientation precisely.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;p&gt;&lt;bdo dir="rtl"&gt;Reverse me&lt;/bdo&gt;&lt;/p&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <p><bdo dir="rtl">Reverse me</bdo></p>
            </section>
        `
    },
    {
        title: "Lesson 98: Time Elements with <time>",
        content: `
            <p>The <code>&lt;time&gt;</code> tag marks dates or times, with a <code>datetime</code> attribute for machine-readable formats. It’s an inline, semantic element, aiding accessibility and SEO. It’s versatile for schedules or events. Time tags enhance temporal clarity.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;time datetime="2025-04-14"&gt;April 14, 2025&lt;/time&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <time datetime="2025-04-14">April 14, 2025</time>
            </section>
        `
    },
    {
        title: "Lesson 99: Ruby Annotations with <ruby>",
        content: `
            <p>The <code>&lt;ruby&gt;</code> tag provides pronunciation or translation for East Asian scripts, using <code>&lt;rt&gt;</code> for annotations. It’s an inline element, accessible for screen readers. It’s niche but vital for languages like Japanese. Ruby enhances text comprehension.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;ruby&gt;
    漢 &lt;rt&gt;kan&lt;/rt&gt;
    字 &lt;rt&gt;ji&lt;/rt&gt;
&lt;/ruby&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <ruby>
                    漢 <rt>kan</rt>
                    字 <rt>ji</rt>
                </ruby>
            </section>
        `
    },
    {
        title: "Lesson 100: Ruby Text with <rt>",
        content: `
            <p>The <code>&lt;rt&gt;</code> tag defines annotations in a <code>&lt;ruby&gt;</code> element, like pronunciations. It’s an inline element, placed above or beside base text. It’s accessible, supporting multilingual clarity. Ruby text completes annotations for specialized scripts.</p>
            <p><strong>Code Example:</strong></p>
            <pre><code>&lt;ruby&gt;
    学 &lt;rt&gt;gaku&lt;/rt&gt;
&lt;/ruby&gt;</code></pre>
            <p><strong>In Action:</strong></p>
            <section class="demo-box">
                <ruby>
                    学 <rt>gaku</rt>
                </ruby>
            </section>
        `
    }
];

// Library Data (100 HTML tags)
const library = [
    { tag: "&lt;a&gt;", description: "Creates a hyperlink, using href for the URL." },
    { tag: "&lt;abbr&gt;", description: "Marks an abbreviation, with title for expansion." },
    { tag: "&lt;address&gt;", description: "Provides contact information, often italicized." },
    { tag: "&lt;area&gt;", description: "Defines clickable areas in an image map." },
    { tag: "&lt;article&gt;", description: "Represents standalone content, like a blog post." },
    { tag: "&lt;aside&gt;", description: "Holds supplementary content, like sidebars." },
    { tag: "&lt;audio&gt;", description: "Embeds sound, with controls for playback." },
    { tag: "&lt;b&gt;", description: "Applies bold styling, non-semantic." },
    { tag: "&lt;base&gt;", description: "Sets the base URL for relative links." },
    { tag: "&lt;bdi&gt;", description: "Isolates text for bidirectional formatting." },
    { tag: "&lt;bdo&gt;", description: "Overrides text direction (ltr or rtl)." },
    { tag: "&lt;blockquote&gt;", description: "Indicates a lengthy quotation, often indented." },
    { tag: "&lt;body&gt;", description: "Contains all visible page content." },
    { tag: "&lt;br&gt;", description: "Inserts a line break within text." },
    { tag: "&lt;button&gt;", description: "Creates a clickable button, often in forms." },
    { tag: "&lt;canvas&gt;", description: "Provides a drawing area for JavaScript graphics." },
    { tag: "&lt;caption&gt;", description: "Adds a title to a table." },
    { tag: "&lt;cite&gt;", description: "References a creative work, like a book." },
    { tag: "&lt;code&gt;", description: "Marks inline code snippets, monospace font." },
    { tag: "&lt;col&gt;", description: "Defines column properties in a table." },
    { tag: "&lt;colgroup&gt;", description: "Groups columns for styling in a table." },
    { tag: "&lt;data&gt;", description: "Links content with a machine-readable value." },
    { tag: "&lt;datalist&gt;", description: "Provides autocomplete options for inputs." },
    { tag: "&lt;dd&gt;", description: "Describes a term in a description list." },
    { tag: "&lt;del&gt;", description: "Marks text as deleted, often strikethrough." },
    { tag: "&lt;details&gt;", description: "Creates a collapsible section with a toggle." },
    { tag: "&lt;dfn&gt;", description: "Marks a term being defined." },
    { tag: "&lt;dialog&gt;", description: "Defines a popup or modal dialog." },
    { tag: "&lt;div&gt;", description: "A generic block container for content." },
    { tag: "&lt;dl&gt;", description: "Creates a description list of terms and details." },
    { tag: "&lt;dt&gt;", description: "Defines a term in a description list." },
    { tag: "&lt;em&gt;", description: "Emphasizes text, typically italicized." },
    { tag: "&lt;embed&gt;", description: "Inserts external content, like applets." },
    { tag: "&lt;fieldset&gt;", description: "Groups form controls with a border." },
    { tag: "&lt;figcaption&gt;", description: "Captions a figure element." },
    { tag: "&lt;figure&gt;", description: "Groups media with an optional caption." },
    { tag: "&lt;footer&gt;", description: "Holds footer content, like copyrights." },
    { tag: "&lt;form&gt;", description: "Creates a user input form." },
    { tag: "&lt;h1&gt;", description: "Defines the top-level heading." },
    { tag: "&lt;h2&gt;", description: "Defines a second-level heading." },
    { tag: "&lt;h3&gt;", description: "Defines a third-level heading." },
    { tag: "&lt;h4&gt;", description: "Defines a fourth-level heading." },
    { tag: "&lt;h5&gt;", description: "Defines a fifth-level heading." },
    { tag: "&lt;h6&gt;", description: "Defines a sixth-level heading." },
    { tag: "&lt;head&gt;", description: "Contains metadata about the document." },
    { tag: "&lt;header&gt;", description: "Marks introductory content, like navbars." },
    { tag: "&lt;hr&gt;", description: "Creates a thematic break, like a line." },
    { tag: "&lt;html&gt;", description: "The root element of an HTML document." },
    { tag: "&lt;i&gt;", description: "Applies italic styling, non-semantic." },
    { tag: "&lt;iframe&gt;", description: "Embeds external content in a frame." },
    { tag: "&lt;img&gt;", description: "Embeds an image, with alt for accessibility." },
    { tag: "&lt;input&gt;", description: "Creates form input fields, like text or radio." },
    { tag: "&lt;ins&gt;", description: "Marks text as inserted, often underlined." },
    { tag: "&lt;kbd&gt;", description: "Indicates keyboard input, like shortcuts." },
    { tag: "&lt;label&gt;", description: "Describes a form input for accessibility." },
    { tag: "&lt;legend&gt;", description: "Captions a fieldset in a form." },
    { tag: "&lt;li&gt;", description: "Defines a list item in ul or ol." },
    { tag: "&lt;link&gt;", description: "Connects external resources, like CSS." },
    { tag: "&lt;main&gt;", description: "Holds the primary content of a page." },
    { tag: "&lt;map&gt;", description: "Defines an image map with clickable areas." },
    { tag: "&lt;mark&gt;", description: "Highlights text for emphasis." },
    { tag: "&lt;meta&gt;", description: "Provides metadata, like charset." },
    { tag: "&lt;meter&gt;", description: "Displays a scalar value in a range." },
    { tag: "&lt;nav&gt;", description: "Marks navigation links, like menus." },
    { tag: "&lt;noscript&gt;", description: "Shows content if JavaScript is disabled." },
    { tag: "&lt;object&gt;", description: "Embeds multimedia, like PDFs." },
    { tag: "&lt;ol&gt;", description: "Creates an ordered, numbered list." },
    { tag: "&lt;optgroup&gt;", description: "Groups options in a select menu." },
    { tag: "&lt;option&gt;", description: "Defines an item in a select or datalist." },
    { tag: "&lt;output&gt;", description: "Shows form calculation results." },
    { tag: "&lt;p&gt;", description: "Defines a paragraph of text." },
    { tag: "&lt;param&gt;", description: "Sets parameters for an object element." },
    { tag: "&lt;picture&gt;", description: "Provides multiple image sources." },
    { tag: "&lt;pre&gt;", description: "Displays preformatted text with spacing." },
    { tag: "&lt;progress&gt;", description: "Shows task completion, like downloads." },
    { tag: "&lt;q&gt;", description: "Marks short, inline quotations." },
    { tag: "&lt;rp&gt;", description: "Provides fallback for ruby annotations." },
    { tag: "&lt;rt&gt;", description: "Defines ruby text for annotations." },
    { tag: "&lt;ruby&gt;", description: "Marks text with pronunciation annotations." },
    { tag: "&lt;s&gt;", description: "Marks text as no longer relevant." },
    { tag: "&lt;samp&gt;", description: "Shows sample program output." },
    { tag: "&lt;script&gt;", description: "Embeds or links JavaScript code." },
    { tag: "&lt;section&gt;", description: "Groups related content, like chapters." },
    { tag: "&lt;select&gt;", description: "Creates a dropdown menu." },
    { tag: "&lt;small&gt;", description: "Marks fine print or side comments." },
    { tag: "&lt;source&gt;", description: "Specifies media sources for audio/video." },
    { tag: "&lt;span&gt;", description: "A generic inline container." },
    { tag: "&lt;strong&gt;", description: "Marks important text, typically bold." },
    { tag: "&lt;style&gt;", description: "Embeds CSS styles in the document." },
    { tag: "&lt;sub&gt;", description: "Lowers text as a subscript." },
    { tag: "&lt;summary&gt;", description: "Toggles a details element’s content." },
    { tag: "&lt;sup&gt;", description: "Raises text as a superscript." },
    { tag: "&lt;svg&gt;", description: "Embeds scalable vector graphics." },
    { tag: "&lt;table&gt;", description: "Organizes data in rows and columns." },
    { tag: "&lt;tbody&gt;", description: "Groups table body rows." },
    { tag: "&lt;td&gt;", description: "Defines a table data cell." },
    { tag: "&lt;template&gt;", description: "Holds reusable content for JavaScript." },
    { tag: "&lt;textarea&gt;", description: "Creates a multi-line text input." },
    { tag: "&lt;tfoot&gt;", description: "Groups table footer rows." },
    { tag: "&lt;th&gt;", description: "Defines a table header cell." },
    { tag: "&lt;thead&gt;", description: "Groups table header rows." },
    { tag: "&lt;time&gt;", description: "Marks a date or time." },
    { tag: "&lt;title&gt;", description: "Sets the page title in the browser." },
    { tag: "&lt;tr&gt;", description: "Defines a table row." },
    { tag: "&lt;track&gt;", description: "Adds captions to audio/video." },
    { tag: "&lt;u&gt;", description: "Applies underline styling, non-semantic." },
    { tag: "&lt;ul&gt;", description: "Creates an unordered, bulleted list." },
    { tag: "&lt;var&gt;", description: "Denotes a variable in code or math." },
    { tag: "&lt;video&gt;", description: "Embeds video with playback controls." },
    { tag: "&lt;wbr&gt;", description: "Suggests a word break opportunity." }
];

// Test Questions (50 questions)
const testQuestions = [
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Multi Language", "HyperText Markdown Language"],
        answer: 0
    },
    {
        question: "Which tag is the root element of an HTML document?",
        options: ["&lt;body&gt;", "&lt;html&gt;", "&lt;head&gt;", "&lt;div&gt;"],
        answer: 1
    },
    {
        question: "What attribute specifies the character encoding?",
        options: ["lang", "charset", "encoding", "type"],
        answer: 1
    },
    {
        question: "Which tag contains visible content?",
        options: ["&lt;head&gt;", "&lt;meta&gt;", "&lt;body&gt;", "&lt;title&gt;"],
        answer: 2
    },
    {
        question: "What tag defines the largest heading?",
        options: ["&lt;h6&gt;", "&lt;h1&gt;", "&lt;h3&gt;", "&lt;header&gt;"],
        answer: 1
    },
    {
        question: "Which tag creates a paragraph?",
        options: ["&lt;p&gt;", "&lt;div&gt;", "&lt;span&gt;", "&lt;text&gt;"],
        answer: 0
    },
    {
        question: "What tag makes a hyperlink?",
        options: ["&lt;link&gt;", "&lt;a&gt;", "&lt;href&gt;", "&lt;url&gt;"],
        answer: 1
    },
    {
        question: "Which attribute provides image descriptions?",
        options: ["src", "href", "alt", "title"],
        answer: 2
    },
    {
        question: "What tag creates an unordered list?",
        options: ["&lt;ol&gt;", "&lt;ul&gt;", "&lt;li&gt;", "&lt;list&gt;"],
        answer: 1
    },
    {
        question: "Which tag is a list item?",
        options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;dl&gt;"],
        answer: 2
    },
    {
        question: "What is a generic block container?",
        options: ["&lt;span&gt;", "&lt;div&gt;", "&lt;p&gt;", "&lt;section&gt;"],
        answer: 1
    },
    {
        question: "Which tag is an inline container?",
        options: ["&lt;div&gt;", "&lt;section&gt;", "&lt;span&gt;", "&lt;article&gt;"],
        answer: 2
    },
    {
        question: "What tag emphasizes text as bold?",
        options: ["&lt;em&gt;", "&lt;strong&gt;", "&lt;i&gt;", "&lt;b&gt;"],
        answer: 1
    },
    {
        question: "Which tag inserts a line break?",
        options: ["&lt;hr&gt;", "&lt;br&gt;", "&lt;break&gt;", "&lt;lb&gt;"],
        answer: 1
    },
    {
        question: "What tag creates a thematic break?",
        options: ["&lt;br&gt;", "&lt;hr&gt;", "&lt;div&gt;", "&lt;section&gt;"],
        answer: 1
    },
    {
        question: "Which tag defines introductory content?",
        options: ["&lt;footer&gt;", "&lt;header&gt;", "&lt;main&gt;", "&lt;nav&gt;"],
        answer: 1
    },
    {
        question: "What tag holds footer content?",
        options: ["&lt;header&gt;", "&lt;main&gt;", "&lt;footer&gt;", "&lt;section&gt;"],
        answer: 2
    },
    {
        question: "Which tag marks navigation links?",
        options: ["&lt;nav&gt;", "&lt;link&gt;", "&lt;a&gt;", "&lt;menu&gt;"],
        answer: 0
    },
    {
        question: "What tag represents standalone content?",
        options: ["&lt;section&gt;", "&lt;article&gt;", "&lt;div&gt;", "&lt;main&gt;"],
        answer: 1
    },
    {
        question: "Which tag groups related content?",
        options: ["&lt;article&gt;", "&lt;div&gt;", "&lt;section&gt;", "&lt;aside&gt;"],
        answer: 2
    },
    {
        question: "What tag holds primary content?",
        options: ["&lt;header&gt;", "&lt;main&gt;", "&lt;footer&gt;", "&lt;body&gt;"],
        answer: 1
    },
    {
        question: "Which tag creates a form?",
        options: ["&lt;input&gt;", "&lt;form&gt;", "&lt;button&gt;", "&lt;label&gt;"],
        answer: 1
    },
    {
        question: "What tag creates a form input?",
        options: ["&lt;form&gt;", "&lt;input&gt;", "&lt;button&gt;", "&lt;select&gt;"],
        answer: 1
    },
    {
        question: "Which tag describes an input?",
        options: ["&lt;label&gt;", "&lt;legend&gt;", "&lt;caption&gt;", "&lt;title&gt;"],
        answer: 0
    },
    {
        question: "What tag makes a clickable button?",
        options: ["&lt;input&gt;", "&lt;button&gt;", "&lt;a&gt;", "&lt;div&gt;"],
        answer: 1
    },
    {
        question: "Which tag allows multi-line input?",
        options: ["&lt;input&gt;", "&lt;textarea&gt;", "&lt;select&gt;", "&lt;output&gt;"],
        answer: 1
    },
    {
        question: "What tag creates a dropdown menu?",
        options: ["&lt;input&gt;", "&lt;select&gt;", "&lt;option&gt;", "&lt;datalist&gt;"],
        answer: 1
    },
    
