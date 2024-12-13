import "./ContentHeader.scss";
interface ContentHeaderProps {
  heading: string;
  subHeading: string;
}

const ContentHeader = ({ heading, subHeading }: ContentHeaderProps) => {
  return (
    <div id="e2e_design_content_header">
      <div className="content_header_heading">{heading}</div>
      <div className="content_header_sub_heading">{subHeading}</div>
    </div>
  );
};

export default ContentHeader;
