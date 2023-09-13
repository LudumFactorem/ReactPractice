import { useState } from "react";

export default function CSSDebug() {
  const [tag, setTag] = useState("dbor");
  const colors = "rygcbmkw";

  function updateExample(event: React.MouseEvent) {
    setTag(String(event.currentTarget.id));
  }

  return (
    <div className="cssdebug content dbow">
      <h2>Debug CSS</h2>
      <div className="description center-justified">
        Add one of these to the class of an HTML element to apply a visualizer
        to the element.
        <br />
        <code className={tag}>
          &lt;div className="class1 class2 ... {tag}"&gt;
        </code>
      </div>
      <div className="cssdebug grid">
        <div className="cssdebug item" style={{ gridColumn: 1, gridRow: 1 }}>
          (D)e(B)ug (O)utline (Color)s
        </div>
        <div className="cssdebug item" style={{ gridColumn: 2, gridRow: 1 }}>
          (D)e(B)ug background (C)olors (Color)
        </div>
        {colors.split("").map((value: string, index: number) => {
          let outline = "dbo" + value;
          let background = "dbc" + value;

          return (
            <>
              <div
                className={"cssdebug item " + outline}
                id={outline}
                style={{ gridColumn: 1, gridRow: 2 + index }}
                onMouseEnter={updateExample}
              >
                {outline}
              </div>
              <div
                className={"cssdebug item " + background}
                id={background}
                style={{ gridColumn: 2, gridRow: 2 + index }}
                onMouseEnter={updateExample}
              >
                {background}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
