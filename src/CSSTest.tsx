import { Link } from "react-router-dom";

// A CSSTest page
// Will include examples of each tag and class intended to be styled in order to test the CSS of the site.
export default function CSSTest() {
  return (
    <div>
      <h1>Heading 1 &lt;h1&gt;</h1>
      <h2>Heading 2 &lt;h2&gt;</h2>
      <h3>Heading 3 &lt;h3&gt;</h3>
      <h4>Heading 4 &lt;h4&gt;</h4>
      <h5>Heading 5 &lt;h5&gt;</h5>
      <h6>Heading 6 &lt;h6&gt;</h6>
      <Link to="/">Link &lt;a&gt;</Link>
      <p>Paragraph &lt;p&gt;</p>
      <button>&lt;button&gt;</button>
      <div>
        <p>&lt;div&gt;</p>
      </div>
    </div>
  );
}
