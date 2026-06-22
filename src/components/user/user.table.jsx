import { Flex, Space, Table, Tag } from "antd";
import { fetchAllUserAPI } from "../../services/api.service";
import { useEffect, useState } from "react";

const UserTable = () => {
    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        console.log(">>>>>>>>>> run user Effect");
        loadUser();
        
    }, []);

    const columns = [
        {
            title: "ID",
            dataIndex: "_id",
        },
        {
            title: "Full Name",
            dataIndex: "fullName",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
    ];

    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        setDataUser(res.data)
    };

    return <Table columns={columns} dataSource={dataUser} rowKey={"_id"}/>;
};

export default UserTable;
