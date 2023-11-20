require("dotenv").config()

const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())

app.use(
  cors({
    origin: "http://localhost:3000",
  })
)

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => {
        console.log(req.body.items)
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,

            },
            unit_amount: (item?.price) * 100,

          },
          quantity: item.cartQuantity
        }
      }),
      success_url: "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:3000/cancel?session_id={CHECKOUT_SESSION_ID}",
    })

    res.json({ url: session.url })

  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

app.listen(5000)