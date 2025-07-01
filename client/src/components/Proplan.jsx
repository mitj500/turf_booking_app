import React from "react";
import { useState } from "react";
function Proplan() {
  const [plan, setPlan] = useState("monthly");

  return (
    <div>
      <div className="max-w-md mx-auto p-6 bg-zinc-900 text-white rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Pro plan</h2>

        {/* Plan Toggle */}
        <div className="flex gap-4 mb-6">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="plan"
              checked={plan === "monthly"}
              onChange={() => setPlan("monthly")}
              className="accent-blue-500"
            />
            <span>
              <div>Monthly</div>
              <div className="text-sm text-gray-400">USD 20.00/month + tax</div>
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="plan"
              checked={plan === "yearly"}
              onChange={() => setPlan("yearly")}
              className="accent-blue-500"
            />
            <span>
              <div>Yearly</div>
              <div className="text-sm text-gray-400">
                USD 16.67/month + tax{" "}
                <span className="text-green-400">Save 17%</span>
              </div>
            </span>
          </label>
        </div>

        {/* Order Details */}
        <div className="bg-zinc-800 rounded p-4 text-sm mb-4">
          <div className="flex justify-between mb-1">
            <span>Pro plan</span>{" "}
            <span>{plan === "monthly" ? "USD 20" : "USD 200"}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Subtotal</span> <span>USD 20</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Tax</span> <span>USD 3.60</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total due today</span> <span>USD 23.60</span>
          </div>
        </div>

        <p className="text-xs text-gray-400 mb-4">
          Your subscription will auto renew on 7/25/2025. You will be charged
          USD 20 (plus applicable taxes).
        </p>

        {/* Payment Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full px-3 py-2 rounded bg-zinc-700 text-white focus:outline-none"
          />
          <select className="w-full px-3 py-2 rounded bg-zinc-700 text-white focus:outline-none">
            <option value="India">India</option>
            {/* Add more countries if needed */}
          </select>
          <input
            type="text"
            placeholder="Address"
            className="w-full px-3 py-2 rounded bg-zinc-700 text-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Card number"
            className="w-full px-3 py-2 rounded bg-zinc-700 text-white focus:outline-none"
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="MM / YY"
              className="w-1/2 px-3 py-2 rounded bg-zinc-700 text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="CVC"
              className="w-1/2 px-3 py-2 rounded bg-zinc-700 text-white focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Business tax ID (Optional)"
            className="w-full px-3 py-2 rounded bg-zinc-700 text-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Indian GST number"
            className="w-full px-3 py-2 rounded bg-zinc-700 text-white focus:outline-none"
          />

          <p className="text-xs text-gray-400">
            By providing your payment information, you allow Anthropic to charge
            your card in the amount above now and monthly until you cancel in
            accordance with our terms. You can cancel at any time.
          </p>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Proplan;
