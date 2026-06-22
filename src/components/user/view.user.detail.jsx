import { Button, Drawer } from "antd";

const ViewUserDetail = (props) => {
    const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;

    return (
        <>
            <Drawer
            width={"40vw"}
                title="User Detail"
                closable={{ "aria-label": "Close Button" }}
                onClose={() => {
                    (setIsDetailOpen(false), setDataDetail(null));
                }}
                open={isDetailOpen}
            >
                {dataDetail ? (
                    <>
                        <p>Id: {dataDetail._id}</p><br />
                        <p>Full name: {dataDetail.fullName}</p><br />
                        <p>Email: {dataDetail.email}</p><br />
                        <p>Phone: {dataDetail.phone}</p><br />
                        <p>Avatar: </p><br/>
                        <div>
                            <img width={150}
                            src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} alt="" />
                        </div>
                        <div>
                            <label htmlFor="btnUpload" style={{
                                display:"block",
                                width: "fit-content",
                                marginTop: "15px",
                                padding:"5px 10px",
                                background: "orange",
                                cursor: "pointer",
                            }}>Upload Avatar</label>
                            <input type="file" name="" hidden id="btnUpload" />
                        </div>
                    </>
                ) : (
                    <>
                        <p>Không có dữ liệu</p>
                    </>
                )}
            </Drawer>
        </>
    );
};

export default ViewUserDetail;
