import { TypographyHeader } from "../Typography";

function ViewDetailHelper({
  detailArrayOptions,
  layoutClass,
}: {
  detailArrayOptions: any;
  layoutClass?: string;
}) {
  return (
    <div className="row">
      {detailArrayOptions.map((detail: any, index: number) => {
        if (detail) {
          return (
            <div
              className={`${layoutClass ? layoutClass : "col-3"}  mb-3`}
              key={index}
            >
              <div className="mb-2">
                <TypographyHeader variant="h7">
                  {detail?.label}
                </TypographyHeader>
              </div>
              {detail?.value ? (
                detail.value
              ) : detail?.stringValue ? (
                <TypographyHeader variant="h8">
                  {detail.stringValue}
                </TypographyHeader>
              ) : (
                <TypographyHeader variant="h8">
                  <div className="ml-4">-</div>
                </TypographyHeader>
              )}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default ViewDetailHelper;
