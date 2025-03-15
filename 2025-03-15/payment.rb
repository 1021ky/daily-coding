class CreditCardPayment
  def pay price
    p "use credit card, $#{price}"
  end
end

class CashPayment
  def pay price
    p "use cash, $#{price}"
  end
end

class PayPayPayment
  def pay price
    p "use cash', $#{price}"
  end
end

STRATEGIES = {
  'credit_card': CreditCardPayment.new,
  'cash': CashPayment.new,
  'paypay': PayPayPayment.new
}
def decide_payment_strategy method
  STRATEGIES[method.to_sym]
end

#
# 支払い方法に応じて処理をする
#
# @param [String] method 支払い方法
# @param [Integer] price 価格
#
def decide_payment_method(method:, price:)
  strategy = decide_payment_strategy method
  strategy.pay(price)
end

if __FILE__ == $PROGRAM_NAME
  decide_payment_method(method: 'credit_card', price: 100)
  decide_payment_method(method: 'cash', price: 50)
  decide_payment_method(method: 'paypay', price: 75)
end