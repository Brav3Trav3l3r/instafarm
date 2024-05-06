const { catchAsync } = require('./catchAsync');
const AppError = require('../utils/AppError');

exports.createOrder = catchAsync(async (req, res) => {
  const { order } = req.body;
  console.log(order);

  if (!order) {
    throw new AppError('Order is required!', 400);
  }

  const response = await fetch('https://sandbox.cashfree.com/pg/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-client-id': 'TEST10183424b377c934a65e3c70bfbc42438101',
      'x-client-secret':
        'cfsk_ma_test_033a3e14d7b75b74530500d831c958c1_75b7fda0',
      'x-api-version': '2023-08-01',
      // 'x-environment': 'SANDBOX',
    },
    body: JSON.stringify(order),
  });

  if (!response.ok) {
    console.log(response);
    const errorJSON = await response.json();
    console.log(errorJSON);
    throw new AppError('Error creating order', 400);
  }

  const checkoutOrder = await response.json();
  console.log(checkoutOrder);

  res.status(200).json({
    status: 'success',
    data: {
      payment_session_id: checkoutOrder.payment_session_id,
    },
  });
});
