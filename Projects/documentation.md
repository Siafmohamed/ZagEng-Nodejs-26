# HTML Basics

## What is HTML?
- HTML stands for **Hyper Text Markup Language**.  
- It is the **standard language** used to create web pages.  
- HTML helps structure a web page and tells the browser how to display its content.  
- HTML pages are made of **elements**.  
- Elements define pieces of content like headings, paragraphs, links, images, etc.

---

## Basic HTML Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>

    <h1>Welcome to My Page</h1>
    <p>This is my first paragraph in HTML.</p>

  </body>
</html>
## Explanation of HTML Elements

- `<!DOCTYPE html>`  
  Declares that the document is **HTML5**, which helps the browser render it correctly.

- `<html>`  
  The **root element** of the entire HTML document. Everything on the page is written inside it.

- `<head>`  
  Contains metadata about the page such as the title, CSS links, or scripts. Its content is **not** displayed on the page.

- `<title>`  
  Sets the **title of the webpage**, which appears in the browser tab.

- `<body>`  
  Contains all the **visible content** of the webpage, including texts, images, tables, lists, forms, and more.

- `<h1>` to `<h6>`  
  Heading tags used to define titles. `<h1>` is the largest and most important heading; `<h6>` is the smallest.

- `<p>`  
  Defines a paragraph of text.

- `<strong>`  
  Makes the text **bold** and gives it importance.

- `<em>`  
  Makes the text *italic* and adds emphasis.

  ## What Are HTML Headings?

HTML headings are titles and subtitles used to structure the content of
a webpage. They help both users and search engines understand how the
page is organized.

There are six levels of headings:

``` html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

-   `<h1>` is the most important heading.
-   `<h6>` is the least important heading.

------------------------------------------------------------------------

## Why Are Headings Important?

### 1. SEO (Search Engine Optimization)

Search engines use headings to understand: - The main topic of the page\
- How the content is structured\
- Which parts are more important

### 2. Better User Experience

Most users skim through content. Headings help them quickly identify
sections and find what they need.

------------------------------------------------------------------------

## How to Use Headings Correctly

Use headings like an outline:

    <h1> Main Title </h1>
      <h2> Major Section </h2>
        <h3> Sub-section </h3>
          <h4> Detailed Topic </h4>

✔ Use only **one `<h1>`** per page\
✔ `<h2>` for main sections\
✔ `<h3>` for smaller sections\
✔ Continue deeper only if needed

------------------------------------------------------------------------

## Example of Proper Heading Structure

``` html
<h1>Web Development Basics</h1>

<h2>HTML Introduction</h2>
<p>HTML is used to structure a webpage.</p>

<h3>HTML Elements</h3>
<p>Elements are the basic building blocks of HTML.</p>

<h2>CSS Basics</h2>
<p>CSS is used to style HTML pages.</p>
```

## What is an HTML Table?
An HTML table is used to organize data into **rows** and **columns**.  
Tables consist of **cells**, and each cell belongs to a specific row and column.

---

## Example of a Simple HTML Table

```html
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
```

---

## Table Cells

- A table cell is defined using the `<td>` tag.
- **`td` stands for Table Data**.
- Anything written inside `<td> ... </td>` is treated as the content of that cell.

Example:

```html
<td>Maria Anders</td>
```

---

## Table Headers

If you want a cell to act as a **header**, use `<th>` instead of `<td>`.

- **`th` stands for Table Header**.
- By default:
  - Header text is **bold**  
  - Header text is **centered**

Example:

```html
<th>Company</th>
```

---

## Common HTML Table Tags

| Tag         | Description |
|-------------|-------------|
| `<table>`   | Defines a table |
| `<th>`      | Defines a header cell |
| `<tr>`      | Defines a table row |
| `<td>`      | Defines a table data cell |
| `<caption>` | Defines a table caption |
| `<colgroup>` | Groups a set of columns for formatting |
| `<col>`     | Specifies properties for each column within a `<colgroup>` |
| `<thead>`   | Groups header content |
| `<tbody>`   | Groups body content |
| `<tfoot>`   | Groups footer content |

---

## Summary

HTML tables help structure data clearly.  
They use rows (`<tr>`), standard cells (`<td>`), and header cells (`<th>`).  
You can also enhance tables further using styling, captions, and column groups.

# HTML Forms and Input Elements

## The `<form>` Element

The HTML `<form>` element is used to create a form for user input. It
acts as a **container** for various form controls:

``` html
<form>
</form>
```

Forms are used to collect data such as text, choices, files, buttons,
etc.

------------------------------------------------------------------------

## The `<input>` Element

The HTML `<input>` element is the **most commonly used** form element.\
Its appearance depends on the value of the `type` attribute.

### Common Input Types

  Input Type   Description
  ------------ ----------------------------------------------
  `text`       Displays a single-line text input field
  `radio`      A radio button (select **one** option)
  `checkbox`   A checkbox (select **zero or more** options)
  `submit`     A submit button used to send the form
  `button`     A general clickable button

### Example

``` html
<input type="text" placeholder="Enter your name">
<input type="radio" name="gender" value="male">
<input type="checkbox" value="subscribe">
<input type="submit" value="Send">
```

------------------------------------------------------------------------

## The `<label>` Element

The `<label>` tag defines a **label** for form controls.

### Why `<label>` is Important?

-   Helps **screen readers** read the input name aloud.
-   Makes radio buttons and checkboxes easier to click (clicking the
    label toggles them).
-   Improves accessibility and usability.

### Binding `<label>` to `<input>`

Use the `for` attribute of `<label>` to match the `id` of the input:

``` html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
```

This connects the label to the input.

------------------------------------------------------------------------

## Simple Full Example

``` html
<form>
  <label for="fname">First Name:</label><br>
  <input type="text" id="fname" name="fname"><br><br>

  <label>Gender:</label><br>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label><br>

  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Female</label><br><br>

  <input type="submit" value="Submit">
</form>
```

------------------------------------------------------------------------

## What Are HTML Links?
HTML links are called **hyperlinks**. They allow users to navigate from one page to another.

- Links can be **text**, **images**, or **any HTML element**.  
- When you hover over a link, the mouse pointer changes to a hand icon.

---

## HTML Link Syntax

The `<a>` tag is used to create hyperlinks:

```html
<a href="url">Link Text</a>
