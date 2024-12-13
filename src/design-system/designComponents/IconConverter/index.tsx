import { useMemo } from "react";

function IconConverter({
  icon,
  fill,
  width,
  height,
}: {
  icon: string;
  fill?: string;
  width?: string;
  height?: string;
}) {
  const convertMarkup = (
    markupString: string,
    fillValue?: string,
    width?: string,
    height?: string
  ) => {
    let updatedMarkup = markupString;

    if (fillValue) {
      updatedMarkup = updatedMarkup.replace(
        /fill="[^"]*?"/g,
        `fill="${fillValue}"`
      );
    }

    if (width) {
      updatedMarkup = updatedMarkup.replace(
        /width\s*=\s*["'][^"']*?["']/g,
        `width="${width}"`
      );
    }

    if (height) {
      updatedMarkup = updatedMarkup.replace(
        /height\s*=\s*["'][^"']*?["']/g,
        `height="${height}"`
      );
    }

    return {
      __html: updatedMarkup,
    };
  };

  const convertedMarkup = useMemo(
    () => convertMarkup(icon, fill, width, height),
    [icon, fill, width, height]
  );

  return (
    <div>
      <div
        dangerouslySetInnerHTML={convertedMarkup}
        className="d-flex justify-content-center align-items-center"
      ></div>
    </div>
  );
}

export default IconConverter;
