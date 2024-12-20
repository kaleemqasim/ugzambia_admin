import { useI18n } from "vue-i18n";

const fields = () => {
    const { t } = useI18n();
    const staffMemberAddEditUrl = "users";
    const customerAddEditUrl = "customers";
    const supplierAddEditUrl = "suppliers";

    const cummonInitData = {
        warehouse_id: undefined,
        warehouses: [],
        name: "",
        email: "",
        profile_image: undefined,
        profile_image_url: undefined,
        phone: "",
        address: "",
        status: "enabled",
    };

    const customerSupplierInitData = {
        shipping_address: "",
        opening_balance: "",
        opening_balance_type: "receive",
        credit_period: "30",
        credit_limit: "",
        tax_number: undefined,
    };

    const customerInitData = {
        user_type: "customers",
        ...cummonInitData,
        ...customerSupplierInitData
    };

    const staffMemberInitData = {
        ...customerInitData,
        user_type: "staff_members",
        role_id: undefined,
        password: "",
    };

    const supplierInitData = {
        user_type: "suppliers",
        ...customerInitData,
        ...customerSupplierInitData,
    };

    const columns = [
        {
            title: t("user.name"),
            dataIndex: "name",
            key: "name",
        },
        {
            title: t("user.email"),
            dataIndex: "email",
        },
        {
            title: t("user.created_at"),
            dataIndex: "created_at",
        },
        {
            title: t("user.status"),
            dataIndex: "status",
            key: "status",
        },
        {
            title: t("common.action"),
            dataIndex: "action",
        },
    ];

    const supplierCustomerColumns = [
        {
            title: t("user.name"),
            dataIndex: "name",
            key: "name",
            sorter:true
        },
        {
            title: t("District"),
            dataIndex: "district",
            key: "district",
            sorter:true
        },
        {
            title: t("Ministry"),
            dataIndex: "ministry",
            key: "ministry",
            sorter:true
        },
        {
            title: t("NRC No"),
            dataIndex: "nrc_no",
            key: "nrc_no",
            sorter:true
        },
        {
            title: t("MAN No"),
            dataIndex: "man_no",
            key: "man_no",
            sorter:true
        },
        {
            title: t("Employee No"),
            dataIndex: "employee_no",
            key: "employee_no",
            sorter:true
        },
        {
            title: t("Total"),
            dataIndex: "total",
            key: "total",
            sorter:true
        },
        {
            title: t("Period"),
            dataIndex: "period",
            key: "period",
            sorter:true
        },
        // {
        //     title: t("user.email"),
        //     dataIndex: "email",
        //     sorter:true
        // },
        {
            title: t("user.created_at"),
            dataIndex: "created_at",
            sorter:true,
            sorter_field: "user_details.created_at",
        },
        // {
        //     title: t("common.balance"),
        //     dataIndex: "balance",
        //     sorter:true,
        //     sorter_field: "user_details.opening_balance",

        // },
        // {
        //     title: t("user.status"),
        //     dataIndex: "status",
        //     key: "status",
        // },
        {
            title: t("common.action"),
            dataIndex: "action",
        },
    ];

    const filterableColumns = [
        {
            key: "users.name",
            value: t("user.name")
        },
        {
            key: "email",
            value: t("user.email")
        },
        {
            key: "phone",
            value: t("user.phone")
        },
    ];

    return {
        customerInitData,
        staffMemberInitData,
        supplierInitData,
        columns,
        supplierCustomerColumns,
        filterableColumns,
        staffMemberAddEditUrl,
        customerAddEditUrl,
        supplierAddEditUrl,
    }
}

export default fields;
