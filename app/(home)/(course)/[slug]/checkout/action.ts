"use server";

export async function getSnapToken() {
  const get = await fetch(
    "https://app.sandbox.midtrans.com/snap/v1/transactions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          Buffer.from(process.env.MIDTRANS_SECRET_KEY as string).toString(
            "base64",
          ),
      },
      body: JSON.stringify({
        transaction_details: {
          order_id: "order-csb-" + Math.floor(1000 + Math.random() * 9000),
          gross_amount: 1000000,
        },
        credit_card: {
          secure: true,
        },
        customer_details: {
          first_name: "Sepuh",
          last_name: "Jayen",
          email: "sepuh.jayen@scholabs.com",
          phone: "08111222333",
        },
      }),
    },
  );
  return await get.json();
}
