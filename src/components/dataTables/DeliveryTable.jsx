import * as React from 'react';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import {AppButton} from "../index";
import StatusChips from "./StatusChips";
import {Box, Stack, Typography} from "@mui/material";

const columns = [
    {
        field: 'orderNumber',
        headerName: 'Order Number',
        width: 120,
        renderCell: (params) => {
            return (
                <p>
                    #&nbsp;{params.row.orderNumber}
                </p>
            );
        }
    },
    {
        field: 'restaurant',
        headerName: 'Restaurant',
        width: 250,
        renderCell: (params) => {
            return (
                <div className="itemWithImg">
                    <Stack direction="row" gap={2} sx={{
                        alignItems: "center"
                    }}>
                        <Box component="img"
                             width="50px"
                             height="50px"
                             sx={{
                                 borderRadius: "50%",
                                 overflow: "hidden"
                             }}
                             src="https://burgerlab.com.pk/wp-content/uploads/2022/02/Untitled-1-1-1.jpg?c062ef&c062ef"
                        >
                        </Box>
                        <Typography>
                            {params.row.restaurant}
                        </Typography>
                    </Stack>
                </div>
            );
        }
    },
    {
        field: 'address',
        headerName: 'Address',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 500,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 100,
        //editable: true,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <StatusChips status={params.row.status} />
                </div>
            );
        }
    },

];

const dateNow = new Date()
const rows = [
    { id: 1, orderNumber: 324324 , items: "Zinger Burger", restaurant: 'KFC', status: 'Pending', address: "House# 2342, street # 10, RWP " },
    { id: 2, orderNumber: 324324 , items: "Zinger Burger", restaurant: 'KFC', status: 'Delivered', address: "House# 2342, street # 10, RWP " },
    { id: 3, orderNumber: 324324 , items: "Zinger Burger", restaurant: 'KFC', status: 'Delivered', address: "House# 2342, street # 10, RWP " },
    { id: 4, orderNumber: 324324 , items: "Zinger Burger", restaurant: 'KFC', status: 'Pending', address: "House# 2342, street # 10, RWP " },
    { id: 5, orderNumber: 324324 , items: "Zinger Burger", restaurant: 'KFC', status: 'Delivered', address: "House# 2342, street # 10, RWP " },
    { id: 6, orderNumber: 324324 , items: "Zinger Burger", restaurant: 'KFC', status: 'Delivered', address: "House# 2342, street # 10, RWP " },
    { id: 7, orderNumber: 324324 , items: "Zinger Burger", restaurant: 'KFC', status: 'Delivered', address: "House# 2342, street # 10, RWP " },


];

export default function OrdersTable() {
    return (
        <Box sx={{ width: '100%' }}>
            <DataGrid
                autoHeight={true}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 50,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                // checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}



