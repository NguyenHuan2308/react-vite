import { Button, Drawer, notification } from "antd";
import { useState } from "react";
import {
    handleUploadFile,
    updateUserAvatarAPI,
} from "../../services/api.service";

const ViewUserDetail = (props) => {
    const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen ,loadUser} = props;

    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleOnchangeFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null);
            setPreview(null);
            return;
        }
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleUpdateUserAvatar = async () => {
        //step 1: upload file.
        const resUpload = await handleUploadFile(selectedFile, "avatar");
        console.log("Check resUpload: ", resUpload);
        if (resUpload.data) {
            //success
            const newAvatar = resUpload.data.fileUploaded;

            //step2: update user
            const resUpdateAvatar = await updateUserAvatarAPI(
                newAvatar,
                dataDetail._id,
                dataDetail.fullName,
                dataDetail.phone,
            );
            console.log("Check newAvatar", newAvatar);
            if (resUpdateAvatar.data) {
                setIsDetailOpen(false);
                setSelectedFile(null);
                setPreview(null);
                await loadUser();

                notification.success({
                    message: "Update user avatar",
                    description: "Cập nhật avatar thành công!",
                });
                return;
            } else {
                notification.error({
                    message: "Error update file",
                    description: JSON.stringify(resUpdateAvatar.message),
                });
                return;
            }
        } else {
            //fail
            notification.error({
                message: "Error upload file",
                description: JSON.stringify(resUpload.message),
            });
            return;
        }
    };

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
                        <p>Id: {dataDetail._id}</p>
                        <br />
                        <p>Full name: {dataDetail.fullName}</p>
                        <br />
                        <p>Email: {dataDetail.email}</p>
                        <br />
                        <p>Phone: {dataDetail.phone}</p>
                        <br />
                        <p>Avatar: </p>
                        <br />
                        <div
                            style={{
                                marginTop: "10px",
                                height: "100px",
                                width: "150px",
                                border: "1px solid #ccc",
                            }}
                        >
                            <img
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "contain",
                                }}
                                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`}
                                alt=""
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="btnUpload"
                                style={{
                                    display: "block",
                                    width: "fit-content",
                                    marginTop: "15px",
                                    padding: "5px 10px",
                                    background: "orange",
                                    cursor: "pointer",
                                }}
                            >
                                Upload Avatar
                            </label>
                            <input
                                type="file"
                                name=""
                                hidden
                                id="btnUpload"
                                // onChange={handleOnchangeFile}
                                onChange={(event) => handleOnchangeFile(event)}
                            />
                        </div>
                        {preview && (
                            <>
                                <div
                                    style={{
                                        marginTop: "10px",
                                        height: "100px",
                                        width: "150px",
                                        marginBottom: "15px",
                                    }}
                                >
                                    <img
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                            objectFit: "contain",
                                        }}
                                        src={preview}
                                        alt=""
                                    />
                                </div>
                                <Button
                                    type="primary"
                                    onClick={() => handleUpdateUserAvatar()}
                                >
                                    Save
                                </Button>
                            </>
                        )}
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
