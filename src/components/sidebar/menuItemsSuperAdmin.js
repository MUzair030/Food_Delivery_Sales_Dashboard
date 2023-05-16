import {
    Reviews, Restaurant,
    ShoppingCartCheckout,
    MenuBook, ReceiptLongOutlined,
    Dashboard, DeliveryDining
} from "@mui/icons-material";

export const menuItems = [
    {
        name: "Dashboard",
        icon: <Dashboard/>
    },
    {
        name: "Actions",
        icon: null
    },
    {
        name: "Restaurants",
        icon: <Restaurant/>
    },
    {
        name: "Bookings",
        icon: <ReceiptLongOutlined/>
    },
    {
        name: "Reviews",
        icon: <Reviews/>
    },
    {
        name: "Stats",
        icon: null
    },
    {
        name: "Orders",
        icon: <ShoppingCartCheckout/>
    },
    {
        name: "Delivery",
        icon: <DeliveryDining   />
    }
]