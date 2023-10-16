const JoinPublishingCommunityForm = () => {
  return (
    <div
      className="row my-4 p-4 align-items-center main-form-btm"
      style={{
        boxShadow: "0px 0px 12px #00000039",
        borderRadius: "24px",
      }}
    >
      <div className="col-lg-6 p-0">
        <div className="nation-wrp">
          <div className="nation-img">
            <img src="assets/images/sell-form.png" alt="sell-form" />
          </div>
        </div>
      </div>
      <div className="col-lg-6 bottom-form-col ml-5">
        <form>
          <div className="form-row">
            <div className="col">
              <label>
                Name<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Your answer"
              />
            </div>
            <div className="col">
              <label>
                Email<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Your answer"
              />
            </div>
            <div className="col">
              <label>
                Phone Number<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Your answer"
              />
            </div>
            <div className="col">
              <label>
                Name of University/Institute/Society
                <span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Your answer"
              />
            </div>
            <div className="col">
              <label>
                Designation<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Your answer"
              />
            </div>
            <div className="col">
              <label>
                Your Message<span>*</span>
              </label>
              <textarea
                type="textares"
                className="form-control"
                placeholder="Write your message"
                style={{ height: "140px" }}
              ></textarea>
            </div>
            <div
              className="ag_special_offer_btn"
              style={{
                flexDirection: "row",
                width: "100%",
              }}
            >
              <a
                href="javascript:;"
                className="ag_btn_red"
                style={{ width: "100%" }}
              >
                Connect Now
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinPublishingCommunityForm;
