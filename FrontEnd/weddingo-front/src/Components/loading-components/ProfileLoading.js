import { Card, Col, Row } from "react-bootstrap";

export default function ProfileLoading()  {
  return<>
  <div className="welcome-profile min-div">
            <div className="container">
              <div className="outer-container">
                <div className="dashboard-container py-5">
                  <Card className="p-4 shadow-sm inner-card">
                    <Row className="align-items-center">
                      {/* Left Section: Image and Timer */}
                      <Col
                        xs={12}
                        md={3}
                        className="welcome-profile_welcome-col-1 text-center mb-3 mb-md-0"
                      >
                        <div className="position-relative d-inline-block main-image-container">
                          <div className="placeholder-glow  card checklist_single-card">
                            <span
                              class="placeholder"
                              style={{ height: "100%" }}
                            ></span>
                          </div>
                        </div>
                      </Col>

                      {/* Center Section: Welcome Message and Edit */}
                      <Col
                        xs={12}
                        md={9}
                        className="welcome-profile_welcome-col-2"
                      >
                        <h4 className="mb-1 fw-bold">
                          <div className="placeholder-glow ">
                            <span class="placeholder col-6"></span>
                          </div>
                        </h4>
                        <p className="mb-4">
                          <div className="placeholder-glow ">
                            <span class="placeholder col-5"></span>
                          </div>
                        </p>

                        <Row className="gx-3">
                          <div className="placeholder-glow ">
                            <span
                              class="placeholder col-3"
                              style={{ padding: "2rem" }}
                            ></span>{" "}
                            <span
                              class="placeholder col-3"
                              style={{ padding: "2rem" }}
                            ></span>
                          </div>
                          {/* <DataProfileCard
                      title={"المفضلة"}
                      value={`${fav ? fav : 0} مكان`}
                      hlink={"/profile/vendor-manager"}
                      active={false}
                    />

                    <DataProfileCard
                      title={"الخدمات"}
                      value={`${services ? services : 0} خدمات مضافه`}
                      hlink={"/profile/checklist"}
                      active={false}
                    /> */}
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </div>
            </div>
          </div>
  </>
}
