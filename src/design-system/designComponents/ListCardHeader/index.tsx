import "./style.scss";

import { Add as AddIcon } from "@mui/icons-material";
import Button from "../Buttons/Button";
import { TypographyHeader } from "../Typography";

function ListCardHeader({
  listArray,
  listText,
  listActionButtonText,
  handleListActionButton,
}: {
  listArray: any[];
  listText: string;
  listActionButtonText: string;
  handleListActionButton?: () => void;
}) {
  return (
    <div id="custom-list-card-header">
      <div className="list-card-header-wrapper">
        <TypographyHeader variant="h4">{`${listArray?.length} ${listText}`}</TypographyHeader>
        {handleListActionButton ? (
          <Button
            startIcon={<AddIcon style={{ color: "var(--color-secondary)" }} />}
            variant="outlined"
            title={listActionButtonText}
            textColor="var(--color-primary-text)"
            onClick={handleListActionButton}
          />
        ) : null}
      </div>
    </div>
  );
}

export default ListCardHeader;
