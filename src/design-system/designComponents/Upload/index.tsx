import { useState, useEffect, MouseEvent } from "react";
import { Upload as UploadImage, Image } from "antd";
import UploadIcon from "../../assets/Upload";
import { Toast, Button } from "..";
import "./styles.scss";
const { Dragger } = UploadImage;

interface UploadProps {
  ImageUrl?: string;
  acceptedFileTypeList?: string[];
  maxImageUploadSizeInMB: number;
  onSubmit?: (file: any) => void;
  heading?: string;
  required?: boolean;
  type?: "document";
  documentList?: (file: any) => void;
  subHeading?: string;
  mode?: "dark" | "light";
  resetLogoOnClick?: (e: MouseEvent) => void;
  passedFileList?: any;
  supportFormat?: string;
  showSuppoortFormat?: boolean;
  ratioText?: string;
}
// FileType List : Example acceptedFileTypeList= ["image/png","image/jpeg","image/jpg","application/pdf"."application/msword" ]
//Example: maxImageUploadSizeInMB  = 2
const Upload = ({
  ImageUrl,
  acceptedFileTypeList,
  maxImageUploadSizeInMB,
  onSubmit,
  heading,
  required,
  type,
  documentList,
  subHeading,
  resetLogoOnClick,
  mode,
  passedFileList,
  supportFormat,
  showSuppoortFormat,
  ratioText,
}: UploadProps) => {
  const [fileList, setFileList] = useState<any>(
    passedFileList ? passedFileList : []
  );
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState(ImageUrl);
  const [hasError, setHasError] = useState(false);
  const [hasErrorTitle, setHasErrorTitle] = useState("");

  useEffect(() => {
    setUrl(ImageUrl);
  }, [ImageUrl]);

  useEffect(() => {
    if (type === "document" && documentList) {
      documentList(fileList);
    }
  }, [fileList, documentList, type]);

  const uploadProps = {
    onRemove: (file: any) => {
      setUrl("");
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },

    beforeUpload: (file: any) => {
      if (fileList.length > 0) {
        setHasErrorTitle("you can upload only one image");
        setHasError(true);
      } else {
        // if (!acceptedFileTypeList?.includes(file?.type)) {
        //   setHasErrorTitle(
        //     // `${file.name} is not a ${acceptedFileTypeList?.join(",")} file`
        //     "File type is not supported"
        //   );
        //   setHasError(true);
        // } else {
        if (file.size < maxImageUploadSizeInMB * 1000000) {
          setFileList([...fileList, file]);
        } else {
          setHasErrorTitle(
            `Please upload picture of size less than ${maxImageUploadSizeInMB}MB!`
          );
          setHasError(true);
        }
        // }
      }
      return false;
    },
    fileList,
  };
  const handleUpload = async () => {
    setUploading(true);

    try {
      const formData = new FormData();
      // eslint-disable-next-line array-callback-return
      fileList.map((file: any) => {
        formData.append("file", file, file.name);
      });
      onSubmit && onSubmit(formData);
      setTimeout(() => {
        setUploading(false);
      }, 1000);
    } catch (error) {
      setHasErrorTitle("Something went wrong");
      setUploading(false);
    }
    setUploading(false);
  };

  return (
    <div className="e2e-design-upload">
      <div className="text-field-heading">
        {heading}
        {required ? <span className="field-required-icon">*</span> : null}
      </div>
      {subHeading ? (
        <div className="text-field-sub-heading">{subHeading}</div>
      ) : null}
      {hasError && (
        <Toast
          open={hasError}
          onClose={() => {
            setHasError(false);
          }}
          title={hasErrorTitle}
          type="error"
        />
      )}

      {!url ? (
        <>
          <Dragger
            {...uploadProps}
            className="upload-file-wrapper"
            listType="picture"
          >
            <>
              <UploadIcon />
              <div className="upload-helper-text-title">
                Drag files here or <span>Browse</span>
              </div>
            </>
          </Dragger>
          {fileList.length === 0 && (
            <div className="support-format-text-wrapper">
              {!showSuppoortFormat ? null : (
                <div className="support-label">
                  {`Supported format : ${
                    supportFormat
                      ? supportFormat
                      : `PNG, JPEG, JPG${
                          type === "document" ? ",PDF,DOC,DOCX" : ""
                        }`
                  }`}
                </div>
              )}
              <div className="support-label">
                {type !== "document" && (
                  <>
                    {ratioText
                      ? ratioText
                      : "Width: 100*100 to 500*500 (aspect ratio 1:1)"}
                  </>
                )}
              </div>
            </div>
          )}
          {fileList.length !== 0 && type !== "document" ? (
            <div className="my-3">
              <Button
                title="Upload"
                loading={uploading}
                onClick={handleUpload}
              />
            </div>
          ) : null}
        </>
      ) : (
        <div className="image-preview-container">
          <div className="d-flex">
            <Image
              src={url}
              alt="url"
              className={
                mode === "dark"
                  ? "upload-image-wrapper-dark-mode"
                  : "upload-image-wrapper-light-mode"
              }
              width={183}
              preview={false}
            />
            <div className="ml-3 logo-upload-button-container">
              {mode === "dark" && (
                <Button
                  variant="link"
                  title="Reset to default logo"
                  onClick={resetLogoOnClick}
                />
              )}

              <Button
                variant="link"
                title="Change Image"
                onClick={() => {
                  setUrl("");
                  setFileList([]);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
