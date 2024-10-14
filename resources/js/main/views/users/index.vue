<template>
    <AdminPageHeader>
        <template #header>
            <a-page-header :title="$t(`menu.${langKey}s`)" class="p-0" />
        </template>
        <template #breadcrumb>
            <a-breadcrumb separator="-" style="font-size: 12px">
                <a-breadcrumb-item>
                    <router-link :to="{ name: 'admin.dashboard.index' }">
                        {{ $t(`menu.dashboard`) }}
                    </router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    {{ $t(`menu.parties`) }}
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    {{ $t(`menu.${langKey}s`) }}
                </a-breadcrumb-item>
            </a-breadcrumb>
        </template>
    </AdminPageHeader>

    <admin-page-filters>
        <a-row :gutter="[16, 16]">
            <a-col :xs="24" :sm="24" :md="12" :lg="10" :xl="10">
                <a-space>
                    <template
                        v-if="
                            permsArray.includes(`${userType}_create`) ||
                            permsArray.includes('admin')
                        "
                    >
                    <a-space>
                        <a-button v-if="employeesPage" type="primary" @click="syncEmployees" :loading="isSyncing">
                            <SyncOutlined v-if="!isSyncing" />    
                            Sync Employees
                            
                            <!-- {{ $t(`${langKey}.add`) }} -->
                        </a-button>

                        <a-button v-if="employeesPage" type="primary" @click="updateEmployees" :loading="isUpdating">
                            <SaveOutlined v-if="!isUpdating" />
                            Update Employees
                            <!-- {{ $t(`${langKey}.add`) }} -->
                        </a-button>

                        <a-button v-if="employeesPage" type="primary">
                            {{ totalMembers }} Members
                        </a-button>

                        <a-button v-if="!employeesPage" type="primary" @click="addItem">
                            <PlusOutlined />
                            
                        </a-button>
                        <!-- <ImportUsers
                            :pageTitle="importPageTitle"
                            :sampleFileUrl="sampleFileUrl"
                            :importUrl="importUrl"
                            @onUploadSuccess="setUrlData"
                        /> -->
                    </a-space>
                    </template>
                    <a-button
                        v-if="
                            table.selectedRowKeys.length > 0 &&
                            (permsArray.includes(`${userType}_delete`) ||
                                permsArray.includes('admin'))
                        "
                        type="primary"
                        @click="showSelectedDeleteConfirm"
                        danger
                    >
                        <template #icon><DeleteOutlined /></template>
                        {{ $t("common.delete") }}
                    </a-button>
                </a-space>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="14" :xl="14">
                <a-row :gutter="[16, 16]" justify="end">
                    <a-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
                        <a-input-group compact>
                            <a-select
                                style="width: 25%"
                                v-model:value="table.searchColumn"
                                :placeholder="
                                    $t('common.select_default_text', [''])
                                "
                            >
                                <a-select-option
                                    v-for="filterableColumn in filterableColumns"
                                    :key="filterableColumn.key"
                                >
                                    {{ filterableColumn.value }}
                                </a-select-option>
                            </a-select>
                            <a-input-search
                                style="width: 75%"
                                v-model:value="table.searchString"
                                show-search
                                @change="onTableSearch"
                                @search="onTableSearch"
                                :loading="table.filterLoading"
                            />
                        </a-input-group>
                    </a-col>
                    <a-col
                        v-if="userType && userType != 'users'"
                        :xs="24"
                        :sm="24"
                        :md="12"
                        :lg="6"
                        :xl="6"
                    >
                        <a-select
                            v-model:value="searchStatus"
                            @change="setUrlData"
                            show-search
                            style="width: 100%"
                            :placeholder="
                                $t('common.select_default_text', [
                                    $t('user.status'),
                                ])
                            "
                            :allowClear="true"
                            optionFilterProp="label"
                        >
                            <a-select-option
                                v-for="usrStatus in userStatus"
                                :key="usrStatus.key"
                                :value="usrStatus.key"
                                :label="usrStatus.value"
                            >
                                {{ usrStatus.value }}
                            </a-select-option>
                        </a-select>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
    </admin-page-filters>

    <admin-page-table-content>
        <AddEdit
            :addEditType="addEditType"
            :visible="addEditVisible"
            :url="addEditUrl"
            @addEditSuccess="addEditSuccess"
            @closed="onCloseAddEdit"
            :addEditData="formData"
            :data="viewData"
            :pageTitle="pageTitle"
            :successMessage="successMessage"
        />

        <a-row v-if="userType && userType == 'users'">
            <a-col :span="24">
                <a-tabs v-model:activeKey="searchStatus" @change="setUrlData">
                    <a-tab-pane
                        key="all"
                        :tab="`${$t('common.all')} ${$t('menu.users')}`"
                    />
                    <a-tab-pane
                        v-for="usrStatus in userStatus"
                        :key="usrStatus.key"
                        :tab="`${usrStatus.value} ${$t('menu.users')}`"
                    />
                </a-tabs>
            </a-col>
        </a-row>

        <a-row v-if="userType && userType != 'users'">
            <a-col :span="24">
                <a-tabs v-model:activeKey="searchDueType" @change="setUrlData">
                    <a-tab-pane key="all" :tab="`${$t('common.all')}`" />
                    <a-tab-pane
                        key="receive"
                        :tab="`${$t('user.to_receive')}`"
                    />
                    <a-tab-pane key="pay" :tab="`${$t('user.to_pay')}`" />
                </a-tabs>
            </a-col>
        </a-row>

        <a-row :gutter="[15, 15]">
            <a-col :span="24">
                <div class="table-responsive">
                    <a-table
                        :row-selection="{
                            selectedRowKeys: table.selectedRowKeys,
                            onChange: onRowSelectChange,
                            getCheckboxProps: (record) => ({
                                disabled:
                                    user.xid == record.xid ||
                                    record.is_walkin_customer
                                        ? true
                                        : false,
                                name: record.xid,
                            }),
                        }"
                        :columns="tableColumns"
                        :row-key="(record) => record.xid"
                        :data-source="table.data"
                        :pagination="table.pagination"
                        :loading="table.loading"
                        @change="handleTableChange"
                        bordered
                        size="middle"
                    >
                        <template #bodyCell="{ column, text, record }">
                            <template v-if="column.dataIndex === 'name'">
                                <a-typography-link
                                    type="primary"
                                    @click="viewItem(record)"
                                >
                                    <user-info :user="record" />
                                </a-typography-link>
                            </template>

                            <template v-if="column.dataIndex === 'status'">
                                <a-tag :color="statusColors[text]">
                                    {{ $t(`common.${text}`) }}
                                </a-tag>
                            </template>


                            <template v-if="column.dataIndex === 'ministry'">
                                {{ record.ministry }}
                            </template>

                            <template v-if="column.dataIndex === 'nrc_no'">
                                {{ record.nrc_no }}
                            </template>

                            <template v-if="column.dataIndex === 'man_no'">
                                {{ record.man_no }}
                            </template>

                            <template v-if="column.dataIndex === 'employee_id'">
                                {{ record.employee_id }}
                            </template>
                            

                            <template v-if="column.dataIndex === 'total'">
                                {{ record.total }}
                            </template>

                            <template v-if="column.dataIndex === 'period'">
                                {{ record.period }}
                            </template>

                            <template v-if="column.dataIndex === 'created_at'">
                                {{ formatDateTime(record.created_at) }}
                            </template>
                            <!-- <template v-if="column.dataIndex === 'balance'">
                                <a-typography-link
                                    type="primary"
                                    @click="openTransactions(record)"
                                    v-if="userType && userType != 'users'"
                                >
                                    <UserBalance
                                        :amount="record.details?.due_amount"
                                    />
                                </a-typography-link>
                            </template> -->
                            <template v-if="column.dataIndex === 'action'">
                                <a-button
                                    type="primary"
                                    @click="viewItem(record)"
                                    style="margin-left: 4px"
                                >
                                    <template #icon><EyeOutlined /></template>
                                </a-button>
                                <a-button
                                    v-if="
                                        permsArray.includes(
                                            `${userType}_edit`
                                        ) || permsArray.includes('admin')
                                    "
                                    type="primary"
                                    @click="editItem(record)"
                                    style="margin-left: 4px"
                                >
                                    <template #icon><EditOutlined /></template>
                                </a-button>
                                <a-button
                                    v-if="
                                        (permsArray.includes(
                                            `${userType}_delete`
                                        ) ||
                                            permsArray.includes('admin')) &&
                                        user.xid != record.xid &&
                                        !record.is_walkin_customer
                                    "
                                    type="primary"
                                    @click="showDeleteConfirm(record.xid)"
                                    style="margin-left: 4px"
                                >
                                    <template #icon
                                        ><DeleteOutlined
                                    /></template>
                                </a-button>
                            </template>
                        </template>
                        <!-- <template v-if="userType && userType != 'users'" #summary>
                            <a-table-summary-row>
                                <a-table-summary-cell :col-span="1">
                                </a-table-summary-cell>
                                <a-table-summary-cell :col-span="2">
                                </a-table-summary-cell>
                                <a-table-summary-cell :col-span="1">
                                    <a-typography-text strong>
                                        {{ $t("common.total") }}
                                    </a-typography-text>
                                </a-table-summary-cell>
                                <a-table-summary-cell :col-span="1">
                                    <a-typography-text strong>
                                        
                                        <a-tooltip
                                            v-if="
                                                totals.totalOpeningBalance < 0
                                            "
                                        >
                                            <ArrowUpOutlined
                                                :style="{ color: 'red' }"
                                            />
                                            {{
                                                formatAmountCurrency(
                                                    totals.totalOpeningBalance
                                                )
                                            }}
                                        </a-tooltip>
                                        <a-tooltip v-else>
                                            <span
                                                v-if="
                                                    totals.totalOpeningBalance >
                                                    0
                                                "
                                            >
                                                <ArrowDownOutlined
                                                    :style="{
                                                        color: 'green',
                                                    }"
                                                />
                                            </span>
                                            {{
                                                formatAmountCurrency(
                                                    totals.totalOpeningBalance
                                                )
                                            }}
                                        </a-tooltip>
                                    </a-typography-text>
                                </a-table-summary-cell>
                            </a-table-summary-row>
                        </template> -->
                    </a-table>
                </div>
            </a-col>
        </a-row>

        <UserView
            :user="viewData"
            :visible="detailsVisible"
            @closed="onCloseDetails"
        />

        <UserTransaction
            :user="modelData"
            :visible="transactionVisible"
            @closed="onCloseTransactions"
        />
    </admin-page-table-content>
</template>

<script>
import { computed, onMounted, ref, watch } from "vue";
import {
    EyeOutlined,
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
    ArrowUpOutlined,
    ArrowDownOutlined,
    SyncOutlined, 
    SaveOutlined,
    LoadingOutlined,
    CloudDownloadOutlined
} from '@ant-design/icons-vue'; // Import Ant Design icons

import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { notification } from "ant-design-vue";
import crud from "../../../common/composable/crud";
import common from "../../../common/composable/common";
import fields from "./fields";
import UserInfo from "../../../common/components/user/UserInfo.vue";
import StateWidget from "../../../common/components/common/card/StateWidget.vue";
import AddEdit from "./AddEdit.vue";
import AdminPageHeader from "../../../common/layouts/AdminPageHeader.vue";
import UserBalance from "./UserBalance.vue";
import UserView from "./View.vue";
import ImportUsers from "../../../common/core/ui/Import.vue";
import datatable from "../../../common/composable/datatable";
import UserTransaction from "./details/UserTransaction.vue";

export default {
    components: {
        EyeOutlined,
        PlusOutlined,
        EditOutlined,
        DeleteOutlined,
        ArrowUpOutlined,
        ArrowDownOutlined,
        AddEdit,
        UserInfo,

        StateWidget,
        AdminPageHeader,
        UserBalance,
        UserView,
        ImportUsers,
        UserTransaction,
        SyncOutlined,
        SaveOutlined,
        LoadingOutlined,
        CloudDownloadOutlined
    },
    setup() {
        const { t } = useI18n();
        const isSyncing = ref(false);
        const isUpdating = ref(false);
        const totalMembers = ref(0);
        const employeesPage = ref(false);
        const curr_route = useRoute();
        const {
            statusColors,
            userStatus,
            permsArray,
            formatDateTime,
            user,
            selectedWarehouse,
            formatAmountCurrency,
        } = common();
        const {
            supplierInitData,
            customerInitData,
            staffMemberInitData,
            columns,
            supplierCustomerColumns,
            filterableColumns,
        } = fields();
        const crudVariables = crud();
        const route = useRoute();
        const userType = ref(route.meta.menuKey);
        const urlParams =
            "?fields=id,district,ministry,province,total,period,nrc_no,man_no,employee_no,xid,user_type,name,email,profile_image,profile_image_url,is_walkin_customer,phone,address,shipping_address,status,tax_number,created_at,details{opening_balance,opening_balance_type,credit_period,credit_limit,due_amount,warehouse_id,x_warehouse_id},details:warehouse{id,xid,name},role_id,role{id,xid,name,display_name},warehouse_id,x_warehouse_id,warehouse{xid,name},userWarehouses{user_id,x_user_id,warehouse_id,x_warehouse_id}";

        const searchStatus = ref(undefined);
        const activeTabKey = ref("all");
        const searchDueType = ref("all");
        const tableColumns = ref([]);
        const sampleFileUrl = ref("");
        const importPageTitle = ref("");
        const importUrl = ref("");
        const transactionVisible = ref(false);
        const modelData = ref("");

        const openTransactions = (record) => {
            transactionVisible.value = true;
            modelData.value = record;
        };
        const onCloseTransactions = () => {
            transactionVisible.value = false;
        };

        const syncEmployees = async () => {
            isSyncing.value = true;
            
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth() + 1; // +1 because getMonth() returns 0-11
            const formattedDate = `${year}${month.toString().padStart(2, '0')}`;

            try {
                const res = await axiosAdmin.get(`period-api-data-import-session/${formattedDate}`);
                notification.success({
                    placement: "topRight",
                    message: t("common.success"),
                    description: "Employees updated data has been successfully fetched in session",
                });
            } catch (error) {
                notification.error({
                    placement: "topRight",
                    message: t("common.error"),
                    description: "Something went wrong",
                });
            } finally {
                // Ensure isSyncing is set to false regardless of success or failure
                isSyncing.value = false;
            }
        };


        const updateEmployees = async () => {
            isUpdating.value = true;

            try {
                const res = await axiosAdmin.get(`process-session-import-data`);
                notification.success({
                    placement: "topRight",
                    message: t("common.success"),
                    description: "Employees updated data has been successfully saved in the database",
                });
            } catch (error) {
                notification.error({
                    placement: "topRight",
                    message: t("common.error"),
                    description: "No employees found in session"
                });
            } finally {
                // Always stop the loader, whether request succeeds or fails
                isUpdating.value = false;
            }
        };

        onMounted(() => {
            let current_url = window.location.href
            console.log(current_url)
            if(current_url.includes('admin/customers')) {
                employeesPage.value = true;
            } else {
                employeesPage.value = false;
            }

            setUrlData();
            crudVariables.table.filterableColumns = filterableColumns;

            setFormData();
            fetchTotalMembers();
            
        });

        const fetchTotalMembers =  async() => {
            try {
                axiosAdmin.get(`total-member`).then((res) => {
                    totalMembers.value = res.data.data ?? 0;
                    
                });
            } catch(e) {
                console.log('something went wrong')
            }
        }

        const setFormData = () => {
            if (userType.value == "suppliers") {
                crudVariables.initData.value = { ...supplierInitData };
                crudVariables.formData.value = { ...supplierInitData };
                crudVariables.langKey.value = "supplier";
                tableColumns.value = supplierCustomerColumns;
                sampleFileUrl.value = window.config.supplier_sample_file;
                importPageTitle.value = t("supplier.import_suppliers");
                importUrl.value = "suppliers/import";
            } else if (userType.value == "customers") {
                crudVariables.initData.value = { ...customerInitData };
                crudVariables.formData.value = { ...customerInitData };
                crudVariables.langKey.value = "customer";
                tableColumns.value = supplierCustomerColumns;
                sampleFileUrl.value = window.config.customer_sample_file;
                importPageTitle.value = t("customer.import_customers");
                importUrl.value = "customers/import";
            } else {
                crudVariables.initData.value = { ...staffMemberInitData };
                crudVariables.formData.value = { ...staffMemberInitData };
                crudVariables.langKey.value = "staff_member";
                tableColumns.value = columns;
                sampleFileUrl.value = window.config.staff_member_sample_file;
                importPageTitle.value = t("staff_member.import_staff_members");
                importUrl.value = "users/import";
            }
            crudVariables.restFormData();
        };

        const setUrlData = () => {
            crudVariables.crudUrl.value = userType.value;
            var filterString = "";
            var extraFilters = {};
            if (
                searchStatus.value != undefined &&
                searchStatus.value != "all"
            ) {
                filterString += `status eq "${searchStatus.value}"`;
            }
            if (
                searchDueType.value != undefined &&
                searchDueType.value != "all" &&
                userType.value != "users"
            ) {
                extraFilters.search_due_type = searchDueType.value;
            }
            crudVariables.tableUrl.value = {
                url: `${userType.value}${urlParams}`,
                filterString,
                extraFilters,
            };
            crudVariables.fetch({
                page: 1,
            });
        };

        watch(
            () => route.meta.menuKey,
            (newVal, oldVal) => {
                if (
                    route.meta.menuKey == "users" ||
                    route.meta.menuKey == "customers" ||
                    route.meta.menuKey == "suppliers"
                ) {
                    userType.value = route.meta.menuKey;

                    searchStatus.value = undefined;
                    crudVariables.table.searchColumn = undefined;
                    crudVariables.table.searchString = "";
                    searchDueType.value = "all";

                    setUrlData();
                    setFormData();
                }
            }
        );

        watch(selectedWarehouse, (newVal, oldVal) => {
            setUrlData();
        });

        watch(route, (newRoute, oldRoute) => {
            let current_url = newRoute.path
            console.log({current_url})
            if(current_url.includes('admin/customers')) {
                employeesPage.value = true;
            } else {
                employeesPage.value = false;
            }
        });

        const totals = computed(() => {
            let totalOpeningBalance = 0;
            crudVariables.table.data.forEach((tableRowData) => {
                if (tableRowData && tableRowData.details && tableRowData.details.due_amount)
                    totalOpeningBalance += tableRowData.details.due_amount;
            });
            return {
                totalOpeningBalance,
            };
        });

        return {
            statusColors,
            userStatus,
            filterableColumns,
            userType,
            tableColumns,

            searchStatus,
            setUrlData,
            searchDueType,

            activeTabKey,

            ...crudVariables,
            permsArray,
            transactionVisible,
            formatDateTime,
            user,
            formatAmountCurrency,
            sampleFileUrl,
            importPageTitle,
            importUrl,
            totals,
            onCloseTransactions,
            openTransactions,
            modelData,
            syncEmployees,
            updateEmployees,
            isSyncing,
            isUpdating,
            totalMembers,
            employeesPage
        };
    },
};
</script>
