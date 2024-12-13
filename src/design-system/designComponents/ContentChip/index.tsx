import { useEffect, useState } from "react";
import SvgInterviewerIcon from "../../assets/common/InterviewerIcon";
import SvgJobsAssignedIcon from "../../assets/common/JobsAssignedIcon";
import SvgWorkFlowLevelIcon from "../../assets/common/WorkFlowLevelIcon";
import { Chip } from "@mui/material";

type IWorkflowChip = {
  title: string | number;
  type: "interviewers" | "workflow_levels" | "job_assigned" | "skill";
  className?: string;
};

function WorkflowChip(props: IWorkflowChip) {
  const [icon, setIcon] = useState<any>(null);
  const [styles, setStyles] = useState<any>(null);
  useEffect(() => {
    let style: any = {};
    style.border = "none";
    style.borderRadius = "5px";
    style.fontSize = "14px";
    style.height = "28px";
    if (props.type === "interviewers") {
      style.backgroundColor = "var(--color-orange-700-bg)";
      style.color = "var(--color-orange-700)";
      setIcon(<SvgInterviewerIcon color="var(--color-orange-700)" />);
    } else if (props.type === "workflow_levels") {
      style.backgroundColor = "var(--color-green-600-bg)";
      style.color = "var(--color-green-600)";
      setIcon(<SvgWorkFlowLevelIcon color="var(--color-green-600)" />);
    } else if (props.type === "job_assigned") {
      style.backgroundColor = "var(--color-orange-700-bg)";
      style.color = "var(--color-orange-700)";
      setIcon(<SvgJobsAssignedIcon color="var(--color-orange-700)" />);
    } else {
      style.backgroundColor = "var(--color-elephant-600-bg)";
      style.color = "var(--color-elephant-600)";
      setIcon(null);
    }
    setStyles(style);
  }, [props]);
  return (
    <Chip
      sx={{
        ...styles,
      }}
      variant="outlined"
      icon={icon}
      label={props.title}
      className={props.className}
    />
  );
}

export default WorkflowChip;
