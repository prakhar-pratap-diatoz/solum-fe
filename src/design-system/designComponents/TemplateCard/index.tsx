import { Row, Col } from "antd";
import { Radio } from "antd";
import "./style.scss";

function TemplateCard({
  options,
  selectedOption,
  setSelectedOption,
  isIconOnly,
  layoutOption,
  handleConditionalTemplate,
  minHeight,
  smallField = false,
}: {
  options: any;
  selectedOption: string | number;
  setSelectedOption: Function;
  isIconOnly?: boolean;
  layoutOption?: number;
  handleConditionalTemplate?: Function;
  minHeight?: string;
  smallField?: boolean;
}) {
  return (
    <div id="option-template">
      <Row gutter={[16, 16]}>
        {options.map((option: any, idx: number) => (
          <Col sm={layoutOption ? layoutOption : 6} key={idx}>
            <div
              className={
                (smallField ? "small-field " : "") +
                "option-template-card" +
                " " +
                (option.disabled ? "disabled-template" : "") +
                (String(option.value) === String(selectedOption)
                  ? "selected-option-template-card"
                  : "")
              }
              style={{ minHeight: `${minHeight}` }}
              onClick={() => {
                if (!option.disabled)
                  handleConditionalTemplate
                    ? handleConditionalTemplate(option.value)
                    : setSelectedOption(option.value);
              }}
            >
              <div className="option-template-wrapper">
                {isIconOnly ? null : (
                  <Radio
                    className="radio-select"
                    disabled={option.disabled ? option.disabled : false}
                    value={option.value}
                    name="radio"
                    checked={String(option.value) === String(selectedOption)}
                  />
                )}

                <div className="option-template-type">
                  <div className="title">{option.label}</div>
                  <div className="desc">{option?.description}</div>

                  {option.footer ? (
                    <div className="footer">{option.footer}</div>
                  ) : null}
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default TemplateCard;
