import "./style.scss";
function FieldLabel({
  heading,
  subHeading,
  required,
  optional,
  headingSubText,
  headerColor,
  descColor,
}: {
  required?: boolean;
  optional?: boolean;
  heading?: string | JSX.Element |null;
  subHeading?: string | JSX.Element | null;
  headingSubText?: string | JSX.Element;
  headerColor?: string;
  descColor?: string;
}) {
  return (
    <div className="custom-label">
      <div className="d-flex align-items-center justify-content-between">
        <div
          className="custom-label-heading"
          style={{ color: headerColor ?? "var(--color-primary-text)" }}
        >
          {heading}
          {required ? <span className="custom-label-required"> *</span> : null}
          {optional ? (
            <span className="custom-label-description"> (optional)</span>
          ) : null}
        </div>
        {headingSubText ? (
          <p
            className="custom-label-description mb-0 d-flex justify-content-end"
            style={{
              color: descColor ?? "var(--color-active-button-shadow)",
            }}
          >
            {headingSubText}
          </p>
        ) : null}
      </div>

      {subHeading && (
        <div
          className="custom-label-description"
          style={{
            color: descColor ?? "var(--color-active-button-shadow)",
          }}
        >
          {subHeading ? subHeading : null}
        </div>
      )}
    </div>
  );
}
export default FieldLabel;
