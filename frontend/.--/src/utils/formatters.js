const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
})

export const formatCurrency = (value) => currencyFormatter.format(value)

export const formatRating = (value) => `${value.toFixed(1)} / 5`
