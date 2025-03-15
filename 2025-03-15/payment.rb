# 練習としてリファクタリングする

#
# 支払い方法に応じて処理をする
#
# @param [<Type>] method <description>
# @param [<Type>] price <description>
#
# @return [<Type>] <description>
#
def decide_payment_method(method:, price:)
  case method
  when 'credit_card'
    credit_card.pay(price)
  when 'cash'
    cash.pay(price)
  when 'paypay'
    paypay.pay(price)
  end
end