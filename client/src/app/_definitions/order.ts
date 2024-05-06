export interface Order {
  order_id?: string;
  order_amount: number;
  order_currency: string;
  customer_details: {
    customer_id: string;
    customer_name: string;
    customer_phone: string;
    customer_email?: string;
  };
  [property: string]: any;
}
