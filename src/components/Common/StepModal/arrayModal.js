import Visa from "../Icons/Visa";
import PayPal from "../Icons/PayPal";
import Cash from "../Icons/Cash";
import AirPlane from "../Icons/AirPlane";
import Ship from "../Icons/Ship";
import Car from "../Icons/Car";

export const paymentArray = [
    {
        value: "VISA",
        text: "Visa, Mastercard",
        logo: <Visa/>
    },
    {
        value: "PAYPAL",
        text: "PayPal",
        logo: <PayPal/>
    },
    {
        value: "CASH",
        text: "Cash",
        logo: <Cash/>
    },
]

export const deliveryArray = [
    {
        value: "AIR",
        text: "By air transport",
        logo: <AirPlane/>
    },
    {
        value: "SEA",
        text: "By sea",
        logo: <Ship/>
    },
    {
        value: "CAR",
        text: "By Car",
        logo: <Car/>
    },
]
