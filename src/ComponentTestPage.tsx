import MappedImage from "./MappedImage";

export default function ComponentTestPage() {
  return (
    <div className="content">
      <h2>Component Test Page</h2>
      <div className="column">
        This page is used for testing new components.
      </div>
      <MappedImage src="images/perl.jpg" />
    </div>
  );
}
