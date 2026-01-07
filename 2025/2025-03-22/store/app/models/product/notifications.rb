module Product::Notifications
  # 複数のクラスやモジュールで共有される共通の関心事として定義できる
  extend ActiveSupport::Concern

  included do
    has_many :subscribers, dependent: :destroy
    after_update_commit :notify_subscribers, if: :back_in_stock?
  end

  # TODO: 通知条件はモデルによって変わるので、共通処理として定義するならば、ここはオーバーライドされる前提がよさそう
  def back_in_stock?
    inventory_count_previously_was == 0 && inventory_count > 0
  end

  def notify_subscribers
    subscribers.each do |subscriber|
      ProductMailer.with(product: self, subscriber: subscriber).in_stock.deliver_later
    end
  end
end
