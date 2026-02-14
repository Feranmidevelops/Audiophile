

export const orderConfirmationEmail = (orderData) => `
<!DOCTYPE html>
<html>
  <head>...</head>
  <body>
    <h1>Thank you for your order, ${orderData.customerName}!</h1>
    <p>Order ID: ${orderData.orderId}</p>
    <!-- Product list, totals, shipping details -->
  </body>
</html>
`;