module Forms
    class TodoItemForm
        include ActiveModel::Model

        attr_accessor :name, :order
        validates :name, presence: true
        validates :order, presence: true, numericality: { only_integer: true }

        def initialize(params = {})
            @name = params[:name]
            @order = params[:order]
        end

        # フォームオブジェクトから実際のモデルへ変換するヘルパ
        def to_model
            TodoItem.new(name: name, order: order)
        end
    end
end
