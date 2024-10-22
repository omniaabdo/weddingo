import React, { useState } from "react";

import { Button, Modal } from "react-bootstrap";
import { useRef } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/config";
export default function AddImagesModuleForCars({
  onFinshed,
  servceId,
  showNow,
  onHide,
}) {
  const [images, setImages] = useState([]);
  const [imagesError, setImagesError] = useState("");
  const [tempimg, setTempImg] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileRef = useRef(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setImagesError("")
    setIsUploading(true);
    const serviceFotmData = new FormData();
    if (images.length != 0) {
      console.log(images);
      Array.from(images).map((item) => serviceFotmData.append("files", item));

      //   images.map((item) => serviceFotmData.append("files", item));
    } else {
      setImagesError("يرجي ارفاق الصور");
      setProgress(0);
      setIsUploading(false);
      return;
    }
    const token = JSON.parse(localStorage.getItem("userData")).token;
    await axios
      .request(`${BASE_URL}/car-rent/images/${servceId}`, {
        method: "POST",
        maxBodyLength: Infinity,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: serviceFotmData,
        onUploadProgress: (e) => {
          const uploadedRateData = Math.floor(
            Math.round(100 * e.loaded) / e.total
          );
          setProgress(uploadedRateData);
        },
      })
      .then((result) => {
        setIsUploading(false);
        if (result.data.status === "success") {
          setTempImg([]);
          setProgress(0);
          setIsUploading(false);
          onHide();
          onFinshed();
        } else {
          setProgress(0);
          setIsUploading(false);
          setImagesError("حدث خطاء اثناء الرفع .. حاولا مرة اخري لاحقا");
        }
      })
      .catch((error) => {
        setProgress(0);
        setIsUploading(false);
        setImagesError("حدث خطاء اثناء الرفع .. حاولا مرة اخري لاحقا");
      });
  };

  const openFileUploader = () => {
    fileRef.current.click();
  };

  return (
    <>
      <Modal className="fade bd-example-modal-lg" show={showNow}>
        <Modal.Header>
          <Modal.Title>اضافة صور للخدمة </Modal.Title>
          {!isUploading && (
            <>
              <Button
                variant=""
                className="btn-close d-block m-0 me-auto"
                onClick={() => {
                  setTempImg([]);
                  setProgress(0);
                  setIsUploading(false);
                  onHide();
                }}
              ></Button>
            </>
          )}
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            {/* Image Inputs Data */}
            <div className="row">
              {/* image  */}
              <div className={`col-12 form-group mb-3`}>
                <label
                  onClick={openFileUploader}
                  className="text-label"
                  style={{
                    cursor: "pointer",
                    width: "100%",
                    padding: "2rem",
                    backgroundColor: "#1f88d9",
                    opacity: "0.5",
                    border: "3px dashed blue",
                    borderRadius: "10px",
                    color: "#111",
                    fontSize: "1rem",
                    textAlign: "center",
                    overflow: "hidden",
                  }}
                >
                  {tempimg.length != 0
                    ? `تم ارفاق  ${tempimg.length} صور`
                    : "  اضغط لارفاق الصور"}
                </label>
                <div className="input-group">
                  <input
                    accept="image/x-png,image/jpeg,image/jpg"
                    type="file"
                    className="form-control"
                    name="image"
                    multiple
                    hidden
                    ref={fileRef}
                    onChange={(e) => {
                      setImagesError("");
                      setTempImg([]);
                      setImages([]);
                      Array.from(e.target.files).map((item) => {
                        console.log(item);
                        setTempImg((preVal) => [
                          ...preVal,
                          URL.createObjectURL(item),
                        ]);
                      });
                      setImages(e.target.files);
                    }}
                  />
                  <div
                    id="val-image-error"
                    classname="invalid-feedback animated fadeInUp"
                    style={{ display: "block", color: "#dc3545" }}
                  >
                    {imagesError && imagesError}
                  </div>
                </div>
              </div>
              <div className={`col-lg-12 col-sm-12 form-group mb-3`}>
                {tempimg && (
                  <>
                    {tempimg.map((item) => (
                      <>
                        <img className="m-1" src={item} width={50} />
                      </>
                    ))}
                  </>
                )}
              </div>
            </div>

            <div className="row">
              {isUploading && (
                <>
                  <h6>جاري الرفع برجاء الانتظار قليلا...</h6>

                  <div className="progress-box  my-3">
                    <div className=" d-flex align-items-center justify-content-end">
                      <span className="font-w600" id="progress-span">
                        {progress}%
                      </span>
                    </div>
                    <div className="progress ">
                      <div
                        className="progress-bar bg-primary"
                        id="progress-inner-width"
                        style={{
                          width: `${progress}%`,
                          height: "12px",
                          borderRadius: "4px",
                        }}
                        role="progressbar"
                      ></div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {isUploading ? (
              <>
                <button type="submit" className="btn me-2 btn-primary">
                  جاري الرفع.....{" "}
                </button>
              </>
            ) : (
              <>
                <button type="submit" className="btn me-2 btn-primary">
                  اضافة
                </button>
              </>
            )}
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
